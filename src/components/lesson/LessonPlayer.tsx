"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Meemi from "../Meemi";
import Icon from "../ui/Icon";
import { speak } from "@/lib/speak";
import { markComplete } from "@/lib/lesson-progress";
import type { Lesson, Step } from "@/lib/lesson";

const GRADABLE = new Set(["choice", "listen", "arrange", "match"]);

export default function LessonPlayer({ lesson }: { lesson: Lesson }) {
  const [i, setI] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [correctNow, setCorrectNow] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);
  const [built, setBuilt] = useState<string[]>([]);
  const [matchDone, setMatchDone] = useState(false);
  const [score, setScore] = useState({ correct: 0, graded: 0 });
  const [finished, setFinished] = useState(false);

  // Record completion when the lesson is finished.
  useEffect(() => {
    if (finished) markComplete(lesson.id);
  }, [finished, lesson.id]);

  const step = lesson.steps[i];
  const total = lesson.steps.length;
  const progress = Math.round(((i + (revealed ? 1 : 0)) / total) * 100);

  const resetStep = () => {
    setRevealed(false);
    setSelected(null);
    setBuilt([]);
    setMatchDone(false);
    setCorrectNow(false);
  };

  const advance = () => {
    if (i + 1 >= total) {
      setFinished(true);
    } else {
      setI((v) => v + 1);
      resetStep();
    }
  };

  const grade = (ok: boolean) => {
    setScore((s) => ({ correct: s.correct + (ok ? 1 : 0), graded: s.graded + 1 }));
  };

  const onCheck = () => {
    let ok = false;
    if (step.type === "choice" || step.type === "listen") {
      ok = selected != null && !!step.options[selected]?.correct;
    } else if (step.type === "arrange") {
      ok = built.join("") === step.answer.join("");
    }
    setCorrectNow(ok);
    grade(ok);
    setRevealed(true);
  };

  // bottom button state
  let btnLabel = "Continue";
  let btnReady = true;
  let btnAction: () => void = advance;

  if (!revealed && GRADABLE.has(step.type) && step.type !== "match") {
    btnLabel = "Check";
    btnAction = onCheck;
    if (step.type === "choice" || step.type === "listen") btnReady = selected != null;
    if (step.type === "arrange") btnReady = built.length === step.answer.length;
  } else if (step.type === "match") {
    btnLabel = "Continue";
    btnReady = matchDone;
  }

  if (finished) {
    return <Complete lesson={lesson} score={score} />;
  }

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-cream to-pink-soft/25">
      {/* header */}
      <header className="sticky top-0 z-20 flex items-center gap-3 bg-cream/85 px-4 py-3 backdrop-blur-md sm:px-6">
        <Link
          href="/dashboard/lessons"
          aria-label="Exit lesson"
          className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white text-ink-soft shadow-card ring-1 ring-pink-soft/50 hover:text-pink-ink"
        >
          ✕
        </Link>
        <div className="h-3 flex-1 overflow-hidden rounded-full bg-pink-soft/50">
          <div
            className="h-full rounded-full bg-gradient-to-r from-pink-deep to-pink transition-all duration-500"
            style={{ width: `${Math.max(progress, 4)}%` }}
          />
        </div>
        <span className="shrink-0 text-sm font-bold text-ink-soft">
          {i + 1}/{total}
        </span>
      </header>

      {/* step body */}
      <main className="mx-auto flex w-full max-w-xl flex-1 flex-col px-4 py-6 sm:px-6">
        {step.type === "intro" && <Intro step={step} cls={lesson.cls} number={lesson.number} jp={lesson.jpTitle} />}
        {step.type === "teach" && <Teach step={step} />}
        {(step.type === "choice" || step.type === "listen") && (
          <ChoiceLike
            step={step}
            selected={selected}
            revealed={revealed}
            onSelect={(idx) => !revealed && setSelected(idx)}
          />
        )}
        {step.type === "arrange" && (
          <Arrange
            step={step}
            built={built}
            revealed={revealed}
            correct={correctNow}
            onAdd={(t) => !revealed && setBuilt((b) => [...b, t])}
            onRemove={(idx) => !revealed && setBuilt((b) => b.filter((_, k) => k !== idx))}
          />
        )}
        {step.type === "match" && (
          <Match step={step} onDone={(noMistakes) => { setMatchDone(true); grade(noMistakes); }} done={matchDone} />
        )}
        {step.type === "culture" && <Culture step={step} />}
        {step.type === "speak" && <Speak step={step} />}
      </main>

      {/* feedback + action */}
      <footer className="sticky bottom-0 z-20">
        {revealed && GRADABLE.has(step.type) && step.type !== "match" && (
          <Feedback ok={correctNow} step={step} />
        )}
        <div className="border-t border-pink-soft/40 bg-cream/90 px-4 py-4 backdrop-blur-md sm:px-6">
          <div className="mx-auto max-w-xl">
            <button
              onClick={btnAction}
              disabled={!btnReady}
              className={`w-full rounded-full py-4 text-base font-extrabold transition-all ${
                btnReady
                  ? revealed && !correctNow
                    ? "bg-gradient-to-r from-[#ff8aa3] to-pink-deep text-white shadow-pop hover:-translate-y-0.5"
                    : "bg-gradient-to-r from-pink-deep to-pink text-white shadow-pop hover:-translate-y-0.5"
                  : "cursor-not-allowed bg-pink-soft/60 text-white/70"
              }`}
            >
              {btnLabel}
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ---------- Audio button ---------- */
function AudioButton({ text, big }: { text: string; big?: boolean }) {
  return (
    <button
      onClick={() => speak(text)}
      aria-label="Play audio"
      className={`grid place-items-center rounded-full bg-blue-soft/70 text-blue-deep shadow-soft ring-1 ring-white transition-transform hover:scale-105 active:scale-95 ${
        big ? "h-16 w-16" : "h-10 w-10"
      }`}
    >
      <Icon name="play" className={big ? "h-7 w-7" : "h-5 w-5"} />
    </button>
  );
}

/* ---------- Intro ---------- */
function Intro({
  step,
  cls,
  number,
  jp,
}: {
  step: Extract<Step, { type: "intro" }>;
  cls: string;
  number: number;
  jp: string;
}) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center text-center">
      <Meemi className="w-32 animate-float" mood="wave" />
      <p className="mt-4 inline-flex rounded-full bg-blue-soft/70 px-3 py-1 text-xs font-bold text-blue-deep">
        Lesson {number} · Class {cls}
      </p>
      <h1 className="mt-3 font-display text-3xl font-extrabold text-ink">{step.title}</h1>
      <p className="text-sm text-ink-soft">{jp}</p>

      <ul className="mt-7 w-full space-y-2.5 text-left">
        {step.objectives.map((o) => (
          <li
            key={o}
            className="flex items-center gap-3 rounded-2xl bg-white p-3.5 text-sm font-semibold text-ink shadow-card ring-1 ring-pink-soft/40"
          >
            <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-pink-soft/70 text-pink-ink">
              ✓
            </span>
            {o}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ---------- Teach ---------- */
function Teach({ step }: { step: Extract<Step, { type: "teach" }> }) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center text-center">
      <p className="text-sm font-bold uppercase tracking-wider text-ink-mute">{step.label ?? "New word"}</p>
      <div className="mt-4 w-full rounded-[2rem] bg-white p-8 shadow-card ring-1 ring-pink-soft/40">
        <p className="font-display text-5xl font-extrabold text-ink sm:text-6xl">{step.jp}</p>
        <p className="mt-2 text-lg font-semibold text-ink-mute">{step.romaji}</p>
        <div className="mt-4 flex justify-center">
          <AudioButton text={step.jp} big />
        </div>
        <p className="mt-5 border-t border-pink-soft/40 pt-4 text-xl font-bold text-pink-ink">
          {step.en}
        </p>
        {step.note && <p className="mt-2 text-sm text-ink-soft">{step.note}</p>}
      </div>
      <p className="mt-4 text-xs text-ink-mute">Tap 🔊 to hear it. Repeat out loud!</p>
    </div>
  );
}

/* ---------- Culture note ---------- */
function Culture({ step }: { step: Extract<Step, { type: "culture" }> }) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center text-center">
      <div className="w-full rounded-[2rem] bg-gradient-to-br from-[#fff2cc]/70 to-white p-7 shadow-card ring-1 ring-pink-soft/40">
        <span className="text-3xl">🏯</span>
        <p className="mt-2 text-sm font-bold uppercase tracking-wider text-ink-mute">
          {step.title ?? "Culture note"}
        </p>
        <p className="mt-3 text-lg leading-relaxed text-ink">{step.note}</p>
      </div>
      <p className="mt-4 text-xs text-ink-mute">A little culture goes a long way 🌸</p>
    </div>
  );
}

/* ---------- Speaking practice ---------- */
function Speak({ step }: { step: Extract<Step, { type: "speak" }> }) {
  return (
    <div className="flex flex-1 flex-col">
      <h2 className="font-display text-xl font-extrabold text-ink">🎤 Speaking practice</h2>
      <p className="mt-1 text-sm text-ink-soft">{step.prompt}</p>

      <div className="mt-5 space-y-3">
        {step.phrases.map((p) => (
          <div key={p.jp} className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-card ring-1 ring-pink-soft/40">
            <AudioButton text={p.jp} />
            <div className="min-w-0 flex-1">
              <p className="font-display text-xl font-extrabold text-ink">
                {p.jp} <span className="text-sm font-semibold text-ink-mute">{p.romaji}</span>
              </p>
              <p className="text-sm text-pink-ink">{p.en}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 rounded-2xl bg-gradient-to-br from-pink-soft/40 to-blue-soft/40 p-4 ring-1 ring-white">
        <div className="flex flex-wrap gap-2">
          {["Listen", "Repeat", "Record"].map((s) => (
            <span key={s} className="rounded-full bg-white/80 px-3 py-1 text-xs font-bold text-ink-soft">
              {s}
            </span>
          ))}
          <span className="rounded-full bg-white/60 px-3 py-1 text-xs font-bold text-ink-mute">
            AI score — coming soon
          </span>
        </div>
      </div>
    </div>
  );
}

/* ---------- Choice / Listen ---------- */
function ChoiceLike({
  step,
  selected,
  revealed,
  onSelect,
}: {
  step: Extract<Step, { type: "choice" | "listen" }>;
  selected: number | null;
  revealed: boolean;
  onSelect: (i: number) => void;
}) {
  const isListen = step.type === "listen";
  const audio = isListen ? step.audio : step.type === "choice" ? step.audio : undefined;

  return (
    <div className="flex flex-1 flex-col">
      <h2 className="font-display text-xl font-extrabold text-ink">{step.prompt}</h2>

      {isListen ? (
        <div className="mt-6 flex flex-col items-center gap-3">
          <AudioButton text={step.audio} big />
          <span className="text-xs text-ink-mute">Tap to replay</span>
        </div>
      ) : (
        step.type === "choice" &&
        step.jp && (
          <div className="mt-5 flex items-center justify-center gap-3 rounded-2xl bg-white p-5 shadow-card ring-1 ring-pink-soft/40">
            <span className="font-display text-3xl font-extrabold text-ink">{step.jp}</span>
            {audio && <AudioButton text={audio} />}
          </div>
        )
      )}

      <div className="mt-6 grid gap-3">
        {step.options.map((o, idx) => {
          const isSel = selected === idx;
          let cls =
            "bg-white text-ink ring-pink-soft/50 hover:ring-pink hover:-translate-y-0.5";
          if (revealed) {
            if (o.correct) cls = "bg-[#e7f7ee] text-[#2f9d77] ring-[#9fe3c5]";
            else if (isSel) cls = "bg-[#ffe6ea] text-[#d6557a] ring-[#ffb3c4]";
            else cls = "bg-white text-ink-mute ring-pink-soft/40 opacity-70";
          } else if (isSel) {
            cls = "bg-pink-soft/40 text-pink-ink ring-pink-deep";
          }
          return (
            <button
              key={idx}
              onClick={() => onSelect(idx)}
              disabled={revealed}
              aria-pressed={isSel}
              className={`flex items-center justify-between rounded-2xl px-5 py-4 text-left text-lg font-bold ring-2 transition-all ${cls}`}
            >
              <span>{o.label}</span>
              {revealed && o.correct && <span>✓</span>}
              {revealed && !o.correct && isSel && <span>✕</span>}
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* ---------- Arrange ---------- */
function Arrange({
  step,
  built,
  revealed,
  correct,
  onAdd,
  onRemove,
}: {
  step: Extract<Step, { type: "arrange" }>;
  built: string[];
  revealed: boolean;
  correct: boolean;
  onAdd: (t: string) => void;
  onRemove: (i: number) => void;
}) {
  // remaining tiles = tiles minus those used (by position-aware count)
  const used = [...built];
  const remaining: { t: string; key: number }[] = [];
  step.tiles.forEach((t, k) => {
    const idx = used.indexOf(t);
    if (idx >= 0) used.splice(idx, 1);
    else remaining.push({ t, key: k });
  });

  return (
    <div className="flex flex-1 flex-col">
      <h2 className="font-display text-xl font-extrabold text-ink">{step.prompt}</h2>
      <p className="mt-1 text-sm text-ink-soft">“{step.en}”</p>

      {/* build area */}
      <div
        className={`mt-6 flex min-h-[64px] flex-wrap items-center gap-2 rounded-2xl border-2 border-dashed p-3 ${
          revealed
            ? correct
              ? "border-[#9fe3c5] bg-[#e7f7ee]"
              : "border-[#ffb3c4] bg-[#ffe6ea]"
            : "border-pink-soft bg-white"
        }`}
      >
        {built.length === 0 && (
          <span className="px-2 text-sm text-ink-mute">Tap words below…</span>
        )}
        {built.map((t, idx) => (
          <button
            key={idx}
            onClick={() => onRemove(idx)}
            disabled={revealed}
            className="rounded-xl bg-pink-soft/60 px-3.5 py-2 font-display text-lg font-bold text-pink-ink shadow-soft"
          >
            {t}
          </button>
        ))}
      </div>

      {/* tile bank */}
      <div className="mt-5 flex flex-wrap gap-2.5">
        {remaining.map(({ t, key }) => (
          <button
            key={key}
            onClick={() => onAdd(t)}
            disabled={revealed}
            className="rounded-xl bg-white px-4 py-2.5 font-display text-lg font-bold text-ink shadow-card ring-1 ring-pink-soft/50 transition-transform hover:-translate-y-0.5 active:scale-95"
          >
            {t}
          </button>
        ))}
      </div>

      {revealed && !correct && (
        <p className="mt-5 rounded-2xl bg-white p-3 text-center text-sm font-semibold text-ink shadow-card ring-1 ring-pink-soft/40">
          Answer: <span className="text-pink-ink">{step.answer.join(" ")}</span>
        </p>
      )}
    </div>
  );
}

/* ---------- Match ---------- */
function Match({
  step,
  onDone,
  done,
}: {
  step: Extract<Step, { type: "match" }>;
  onDone: (noMistakes: boolean) => void;
  done: boolean;
}) {
  // deterministic shuffle for the EN column (rotate by 1) to avoid hydration mismatch
  const enList = useMemo(() => {
    const arr = step.pairs.map((p, idx) => ({ en: p.en, idx }));
    return [...arr.slice(1), arr[0]];
  }, [step]);

  const [pickJp, setPickJp] = useState<number | null>(null);
  const [matched, setMatched] = useState<number[]>([]);
  const [wrong, setWrong] = useState<{ jp: number; en: number } | null>(null);
  const [mistakes, setMistakes] = useState(0);

  const tryMatch = (enIdx: number) => {
    if (pickJp == null) return;
    if (pickJp === enIdx) {
      const next = [...matched, enIdx];
      setMatched(next);
      setPickJp(null);
      if (next.length === step.pairs.length && !done) {
        onDone(mistakes === 0);
      }
    } else {
      setWrong({ jp: pickJp, en: enIdx });
      setMistakes((m) => m + 1);
      window.setTimeout(() => setWrong(null), 500);
      setPickJp(null);
    }
  };

  return (
    <div className="flex flex-1 flex-col">
      <h2 className="font-display text-xl font-extrabold text-ink">{step.prompt}</h2>

      <div className="mt-6 grid grid-cols-2 gap-3">
        {/* JP column */}
        <div className="space-y-3">
          {step.pairs.map((p, idx) => {
            const isMatched = matched.includes(idx);
            const isPicked = pickJp === idx;
            const isWrong = wrong?.jp === idx;
            return (
              <button
                key={idx}
                disabled={isMatched}
                onClick={() => setPickJp(idx)}
                className={`flex w-full items-center justify-center rounded-2xl px-3 py-4 font-display text-lg font-bold ring-2 transition-all ${
                  isMatched
                    ? "bg-[#e7f7ee] text-[#2f9d77] ring-[#9fe3c5] opacity-70"
                    : isWrong
                    ? "bg-[#ffe6ea] text-[#d6557a] ring-[#ffb3c4]"
                    : isPicked
                    ? "bg-pink-soft/50 text-pink-ink ring-pink-deep"
                    : "bg-white text-ink ring-pink-soft/50 hover:ring-pink"
                }`}
              >
                {p.jp}
              </button>
            );
          })}
        </div>
        {/* EN column */}
        <div className="space-y-3">
          {enList.map(({ en, idx }) => {
            const isMatched = matched.includes(idx);
            const isWrong = wrong?.en === idx;
            return (
              <button
                key={idx}
                disabled={isMatched}
                onClick={() => tryMatch(idx)}
                className={`flex w-full items-center justify-center rounded-2xl px-3 py-4 text-base font-bold ring-2 transition-all ${
                  isMatched
                    ? "bg-[#e7f7ee] text-[#2f9d77] ring-[#9fe3c5] opacity-70"
                    : isWrong
                    ? "bg-[#ffe6ea] text-[#d6557a] ring-[#ffb3c4]"
                    : "bg-white text-ink ring-pink-soft/50 hover:ring-pink"
                }`}
              >
                {en}
              </button>
            );
          })}
        </div>
      </div>
      {done && (
        <p className="mt-6 text-center text-sm font-bold text-[#2f9d77]">
          All matched! 🌸
        </p>
      )}
    </div>
  );
}

/* ---------- Feedback ---------- */
function Feedback({ ok, step }: { ok: boolean; step: Step }) {
  let answer = "";
  if (!ok) {
    if (step.type === "choice" || step.type === "listen")
      answer = step.options.find((o) => o.correct)?.label ?? "";
    if (step.type === "arrange") answer = step.answer.join(" ");
  }
  return (
    <div
      className={`px-4 py-3 sm:px-6 ${ok ? "bg-[#e7f7ee]" : "bg-[#ffe6ea]"}`}
    >
      <div className="mx-auto flex max-w-xl items-center gap-3">
        <Meemi className="h-10 w-10 shrink-0" mood={ok ? "love" : "happy"} />
        <div>
          <p className={`font-extrabold ${ok ? "text-[#2f9d77]" : "text-[#d6557a]"}`}>
            {ok ? "Nice! 🌸" : "Not quite —"}
          </p>
          {!ok && answer && (
            <p className="text-sm font-semibold text-ink">
              Answer: <span className="text-pink-ink">{answer}</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

/* ---------- Complete ---------- */
function Complete({
  lesson,
  score,
}: {
  lesson: Lesson;
  score: { correct: number; graded: number };
}) {
  const accuracy = score.graded ? Math.round((score.correct / score.graded) * 100) : 100;
  const bonus = accuracy === 100 ? 5 : 0;
  const xp = lesson.xp + bonus;

  const stats = [
    { icon: "spark", label: "XP earned", value: `+${xp}`, cls: "from-[#fff2cc] to-gold/40 text-gold-deep" },
    { icon: "coin", label: "Coins", value: `+${lesson.coins}`, cls: "from-[#fff6d6] to-gold/30 text-gold-deep" },
    { icon: "target", label: "Accuracy", value: `${accuracy}%`, cls: "from-blue-soft to-blue/30 text-blue-deep" },
    { icon: "fire", label: "Streak", value: "13 days", cls: "from-[#ffe0cc] to-pink-soft/40 text-[#ef7d2e]" },
  ];

  return (
    <div className="grid min-h-screen place-items-center bg-gradient-to-b from-pink-soft/40 to-blue-soft/30 px-4 py-10">
      <div className="w-full max-w-md text-center">
        <div className="relative mx-auto w-fit">
          <Meemi className="w-36 animate-float" mood="love" />
          <span className="absolute -right-2 top-2 animate-sparkle text-3xl">✨</span>
          <span className="absolute -left-3 top-10 animate-sparkle text-2xl">🌸</span>
        </div>
        <h1 className="mt-4 font-display text-3xl font-extrabold text-ink">
          Lesson complete!
        </h1>
        <p className="mt-1 text-ink-soft">
          {lesson.title} · Lesson {lesson.number}
        </p>

        <div className="mt-7 grid grid-cols-2 gap-3">
          {stats.map((s) => (
            <div
              key={s.label}
              className={`rounded-2xl bg-gradient-to-br ${s.cls} p-4 shadow-card ring-1 ring-white`}
            >
              <Icon name={s.icon} className="mx-auto h-6 w-6" />
              <p className="mt-1.5 font-display text-2xl font-extrabold text-ink">{s.value}</p>
              <p className="text-xs font-semibold text-ink-soft">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 space-y-3">
          <Link
            href="/dashboard/lessons"
            className="block rounded-full bg-gradient-to-r from-pink-deep to-pink py-4 text-base font-extrabold text-white shadow-pop transition-transform hover:-translate-y-0.5"
          >
            Continue
          </Link>
          <Link
            href="/dashboard"
            className="block rounded-full bg-white py-3.5 text-sm font-bold text-pink-ink shadow-card ring-1 ring-pink-soft/60 hover:bg-cream"
          >
            Back to dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
