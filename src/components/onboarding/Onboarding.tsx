"use client";

import { useCallbackRef } from "./useCallbackRef";
import { useEffect, useLayoutEffect, useState } from "react";
import Meemi from "../Meemi";

type Phase = "idle" | "welcome" | "setup" | "tour" | "celebrate";

const STORAGE = "sakura-onboarded";
const SETUP = "sakura-setup";

const langs = ["English 🇬🇧", "Spanish 🇪🇸", "Chinese 🇨🇳", "Korean 🇰🇷", "Other 🌏"];
const levels = ["Brand new", "Know some", "Intermediate"];
const goals = ["Casual · 5 min", "Regular · 10 min", "Serious · 20 min"];

type Step = { sel: string; title: string; text: string };
const steps: Step[] = [
  { sel: '[data-tour="hero"]', title: "Your home base", text: "This is your dashboard — jump back into learning anytime from here." },
  { sel: '[data-tour="progress"]', title: "Track your progress", text: "Watch your overall progress grow as you complete lessons." },
  { sel: '[data-tour="portals"]', title: "Everything in one place", text: "Lessons, games, vocabulary, community and more — all a tap away." },
  { sel: '[data-tour="streak"]', title: "Keep your streak", text: "Practice a little every day to keep your 🔥 streak alive." },
  { sel: '[data-tour="nav"]', title: "Get around", text: "Use the menu to move between sections. That's it — have fun! 🌸" },
];

export default function Onboarding() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [lang, setLang] = useState<string | null>(null);
  const [level, setLevel] = useState<string | null>(null);
  const [goal, setGoal] = useState<string | null>(null);
  const [stepIdx, setStepIdx] = useState(0);
  const [rect, setRect] = useState<DOMRect | null>(null);

  const start = useCallbackRef(() => {
    setStepIdx(0);
    setPhase("welcome");
  });

  // auto-start on first visit + listen for replay
  useEffect(() => {
    const onReplay = () => start();
    window.addEventListener("sakura:start-tour", onReplay);
    let done = "1";
    try {
      done = localStorage.getItem(STORAGE) ?? "";
    } catch {
      /* ignore */
    }
    if (done !== "1") {
      const t = window.setTimeout(() => start(), 500);
      return () => {
        window.clearTimeout(t);
        window.removeEventListener("sakura:start-tour", onReplay);
      };
    }
    return () => window.removeEventListener("sakura:start-tour", onReplay);
  }, [start]);

  // lock scroll while overlay is up
  useEffect(() => {
    const active = phase !== "idle";
    document.body.style.overflow = active ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [phase]);

  // measure the current tour target
  const measure = useCallbackRef(() => {
    const step = steps[stepIdx];
    if (!step) return;
    const candidates = Array.from(
      document.querySelectorAll<HTMLElement>(step.sel)
    ).filter((el) => el.offsetParent !== null && el.getBoundingClientRect().width > 0);
    const el = candidates[0];
    if (!el) {
      setRect(null);
      return;
    }
    el.scrollIntoView({ block: "center", behavior: "smooth" });
    window.setTimeout(() => setRect(el.getBoundingClientRect()), 320);
  });

  useLayoutEffect(() => {
    if (phase !== "tour") return;
    measure();
    const onR = () => measure();
    window.addEventListener("resize", onR);
    window.addEventListener("scroll", onR, true);
    return () => {
      window.removeEventListener("resize", onR);
      window.removeEventListener("scroll", onR, true);
    };
  }, [phase, stepIdx, measure]);

  const finish = () => {
    try {
      localStorage.setItem(STORAGE, "1");
      localStorage.setItem(SETUP, JSON.stringify({ lang, level, goal }));
    } catch {
      /* ignore */
    }
    document.body.style.overflow = "";
    setPhase("idle");
  };

  if (phase === "idle") return null;

  /* ---------- Welcome ---------- */
  if (phase === "welcome")
    return (
      <Backdrop>
        <Card>
          <Meemi className="mx-auto w-28 animate-float" mood="wave" />
          <Bubble>Hi! I'm <b>Meemi</b> 🌸 Welcome to Sakura Speak!</Bubble>
          <p className="mt-3 text-sm text-ink-soft">
            Let's personalize your journey and show you around — it only takes a moment.
          </p>
          <button onClick={() => setPhase("setup")} className={btnPrimary}>
            Let's go ▶
          </button>
          <button onClick={finish} className={btnGhost}>
            Skip for now
          </button>
        </Card>
      </Backdrop>
    );

  /* ---------- Setup ---------- */
  if (phase === "setup")
    return (
      <Backdrop>
        <Card>
          <div className="flex items-center gap-3 text-left">
            <Meemi className="h-14 w-14 shrink-0" mood="happy" />
            <Bubble small>Tell me a little about you 💬</Bubble>
          </div>

          <Group label="What's your native language?" options={langs} value={lang} onPick={setLang} />
          <Group label="How much Japanese do you know?" options={levels} value={level} onPick={setLevel} />
          <Group label="Pick a daily goal" options={goals} value={goal} onPick={setGoal} />

          <button
            onClick={() => setPhase("tour")}
            disabled={!lang || !level || !goal}
            className={`${btnPrimary} ${!lang || !level || !goal ? "cursor-not-allowed opacity-50" : ""}`}
          >
            Continue ▶
          </button>
        </Card>
      </Backdrop>
    );

  /* ---------- Celebrate ---------- */
  if (phase === "celebrate")
    return (
      <Backdrop>
        <Card>
          <div className="relative mx-auto w-fit">
            <Meemi className="w-32 animate-float" mood="love" />
            <span className="absolute -right-2 top-1 animate-sparkle text-2xl">✨</span>
            <span className="absolute -left-3 top-10 animate-sparkle text-xl">🌸</span>
          </div>
          <h2 className="mt-4 font-display text-2xl font-extrabold text-ink">You're all set!</h2>
          <p className="mt-1 text-sm text-ink-soft">
            Enjoy Sakura Speak — I'll be around if you need me. がんばって！
          </p>
          <button onClick={finish} className={btnPrimary}>
            Start learning 🌸
          </button>
        </Card>
      </Backdrop>
    );

  /* ---------- Tour (coachmarks) ---------- */
  const step = steps[stepIdx];
  const pad = 8;
  const vh = typeof window !== "undefined" ? window.innerHeight : 800;
  const vw = typeof window !== "undefined" ? window.innerWidth : 400;
  const box = rect
    ? { top: rect.top - pad, left: rect.left - pad, width: rect.width + pad * 2, height: rect.height + pad * 2 }
    : null;

  // tooltip placement
  const tipW = Math.min(320, vw - 24);
  let tipTop = box ? box.top + box.height + 14 : vh / 2;
  const tipH = 210;
  if (box && box.top + box.height + tipH > vh) tipTop = Math.max(12, box.top - tipH - 14);
  if (!box) tipTop = vh / 2 - tipH / 2;
  let tipLeft = box ? box.left + box.width / 2 - tipW / 2 : vw / 2 - tipW / 2;
  tipLeft = Math.max(12, Math.min(tipLeft, vw - tipW - 12));

  const last = stepIdx === steps.length - 1;

  return (
    <div className="fixed inset-0 z-[60]">
      {/* click catcher / dim when no target */}
      {!box && <div className="absolute inset-0 bg-ink/55" />}
      {/* spotlight */}
      {box && (
        <div
          className="pointer-events-none absolute rounded-2xl ring-2 ring-white/80 transition-all duration-300"
          style={{
            top: box.top,
            left: box.left,
            width: box.width,
            height: box.height,
            boxShadow: "0 0 0 9999px rgba(74,51,64,0.6)",
          }}
        />
      )}

      {/* tooltip */}
      <div
        className="absolute rounded-[1.5rem] bg-white p-5 shadow-pop ring-1 ring-pink-soft/50 transition-all duration-300"
        style={{ top: tipTop, left: tipLeft, width: tipW }}
      >
        <div className="flex items-start gap-3">
          <Meemi className="h-12 w-12 shrink-0 animate-float" mood="happy" />
          <div>
            <p className="font-display text-base font-extrabold text-ink">{step.title}</p>
            <p className="mt-1 text-sm leading-relaxed text-ink-soft">{step.text}</p>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex gap-1.5">
            {steps.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 rounded-full transition-all ${
                  i === stepIdx ? "w-5 bg-pink-deep" : "w-1.5 bg-pink-soft"
                }`}
              />
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button onClick={finish} className="text-xs font-bold text-ink-mute hover:text-ink-soft">
              Skip
            </button>
            {stepIdx > 0 && (
              <button
                onClick={() => setStepIdx((s) => s - 1)}
                className="rounded-full bg-cream px-3.5 py-2 text-xs font-bold text-ink-soft hover:text-pink-ink"
              >
                Back
              </button>
            )}
            <button
              onClick={() => (last ? setPhase("celebrate") : setStepIdx((s) => s + 1))}
              className="rounded-full bg-gradient-to-r from-pink-deep to-pink px-4 py-2 text-xs font-extrabold text-white shadow-soft"
            >
              {last ? "Finish" : "Next"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- small UI helpers ---------- */
const btnPrimary =
  "mt-6 w-full rounded-full bg-gradient-to-r from-pink-deep to-pink py-3.5 text-sm font-extrabold text-white shadow-pop transition-transform hover:-translate-y-0.5";
const btnGhost = "mt-2 w-full rounded-full py-2.5 text-sm font-bold text-ink-mute hover:text-ink-soft";

function Backdrop({ children }: { children: React.ReactNode }) {
  return (
    <div className="fixed inset-0 z-[70] grid place-items-center bg-ink/55 px-4 py-8 backdrop-blur-sm">
      {children}
    </div>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-h-[90vh] w-full max-w-md overflow-y-auto rounded-[2rem] bg-white p-6 text-center shadow-pop ring-1 ring-white sm:p-8">
      {children}
    </div>
  );
}

function Bubble({ children, small }: { children: React.ReactNode; small?: boolean }) {
  return (
    <p
      className={`${small ? "mt-0 text-sm" : "mt-4 text-base"} rounded-2xl bg-pink-soft/40 px-4 py-2.5 font-semibold text-ink`}
    >
      {children}
    </p>
  );
}

function Group({
  label,
  options,
  value,
  onPick,
}: {
  label: string;
  options: string[];
  value: string | null;
  onPick: (v: string) => void;
}) {
  return (
    <div className="mt-5 text-left">
      <p className="mb-2 text-sm font-bold text-ink">{label}</p>
      <div className="flex flex-wrap gap-2">
        {options.map((o) => (
          <button
            key={o}
            onClick={() => onPick(o)}
            className={`rounded-full px-3.5 py-2 text-sm font-bold ring-2 transition-all ${
              value === o
                ? "bg-pink-soft/40 text-pink-ink ring-pink-deep"
                : "bg-white text-ink-soft ring-pink-soft/60 hover:ring-pink"
            }`}
          >
            {o}
          </button>
        ))}
      </div>
    </div>
  );
}
