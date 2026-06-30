"use client";

import { useEffect, useRef, useState } from "react";
import GameTopBar from "./GameTopBar";
import StartScreen from "./StartScreen";
import GameResult from "./GameResult";
import Icon from "../ui/Icon";
import { speak } from "@/lib/speak";
import {
  wordPool,
  shuffle,
  makeChoices,
  blitzTime,
  type Difficulty,
  type Word,
} from "@/lib/games";

type Q = { word: Word; choices: { label: string; correct: boolean }[] };
type Phase = "start" | "playing" | "result";

export default function WordBlitz() {
  const [phase, setPhase] = useState<Phase>("start");
  const [q, setQ] = useState<Q | null>(null);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(0);
  const [combo, setCombo] = useState(0);
  const [best, setBest] = useState(0);
  const [time, setTime] = useState(0);
  const [maxTime, setMaxTime] = useState(45);
  const [flash, setFlash] = useState<"ok" | "bad" | null>(null);
  const queue = useRef<Word[]>([]);
  const ptr = useRef(0);

  const draw = (): Q => {
    if (ptr.current >= queue.current.length) {
      queue.current = shuffle(wordPool);
      ptr.current = 0;
    }
    const w = queue.current[ptr.current++];
    return { word: w, choices: makeChoices(w, 4) };
  };

  const start = (d: Difficulty) => {
    queue.current = shuffle(wordPool);
    ptr.current = 0;
    setScore(0);
    setAnswered(0);
    setCombo(0);
    setBest(0);
    setMaxTime(blitzTime[d]);
    setTime(blitzTime[d]);
    setQ(draw());
    setPhase("playing");
  };

  useEffect(() => {
    if (phase !== "playing") return;
    const id = window.setInterval(() => {
      setTime((t) => {
        if (t <= 0.1) {
          window.clearInterval(id);
          setPhase("result");
          return 0;
        }
        return Math.round((t - 0.1) * 10) / 10;
      });
    }, 100);
    return () => window.clearInterval(id);
  }, [phase]);

  const answer = (i: number) => {
    if (!q) return;
    const ok = !!q.choices[i]?.correct;
    setAnswered((a) => a + 1);
    if (ok) {
      setScore((s) => s + 1);
      setCombo((c) => c + 1);
      setFlash("ok");
    } else {
      setCombo(0);
      setFlash("bad");
    }
    window.setTimeout(() => setFlash(null), 220);
    setQ(draw());
  };

  // track best combo
  useEffect(() => {
    setBest((b) => Math.max(b, combo));
  }, [combo]);

  // keyboard 1–4 (ref keeps handler fresh without re-binding)
  const answerRef = useRef(answer);
  answerRef.current = answer;
  useEffect(() => {
    if (phase !== "playing") return;
    const onKey = (e: KeyboardEvent) => {
      const n = parseInt(e.key, 10);
      if (n >= 1 && n <= 4) answerRef.current(n - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [phase]);

  if (phase === "start")
    return (
      <Shell>
        <StartScreen
          title="Word Blitz"
          jp="ワードブリッツ"
          how="See a Japanese word, tap its English meaning before time runs out. Build a combo! (Keys 1–4 work too.)"
          onStart={start}
        />
      </Shell>
    );

  if (phase === "result")
    return (
      <Shell>
        <GameResult
          headline={`Score: ${score}`}
          stats={[
            { icon: "trophy", label: "Best combo", value: `${best}` },
            {
              icon: "target",
              label: "Accuracy",
              value: `${answered ? Math.round((score / answered) * 100) : 0}%`,
            },
          ]}
          onReplay={() => setPhase("start")}
        />
      </Shell>
    );

  const pct = (time / maxTime) * 100;
  return (
    <Shell
      hud={
        <div className="flex items-center gap-3 text-sm font-extrabold">
          {combo >= 2 && (
            <span className="rounded-full bg-[#fff0e0] px-2.5 py-1 text-[#ef7d2e]">
              🔥 {combo}
            </span>
          )}
          <span className="rounded-full bg-pink-soft/60 px-3 py-1 text-pink-ink">
            {score}
          </span>
        </div>
      }
    >
      <div className="mx-auto flex w-full max-w-md flex-1 flex-col px-4 py-5">
        {/* time bar */}
        <div className="h-3 overflow-hidden rounded-full bg-pink-soft/50">
          <div
            className={`h-full rounded-full transition-all duration-100 ${
              pct < 25 ? "bg-[#ff7a7a]" : "bg-gradient-to-r from-pink-deep to-pink"
            }`}
            style={{ width: `${pct}%` }}
          />
        </div>

        {q && (
          <>
            <div
              className={`mt-6 flex items-center justify-center gap-3 rounded-[1.5rem] bg-white p-8 shadow-card ring-2 transition-all ${
                flash === "ok"
                  ? "ring-[#9fe3c5]"
                  : flash === "bad"
                  ? "ring-[#ffb3c4]"
                  : "ring-pink-soft/40"
              }`}
            >
              <span className="font-display text-4xl font-extrabold text-ink sm:text-5xl">
                {q.word.jp}
              </span>
              <button
                onClick={() => speak(q.word.jp)}
                aria-label="Play audio"
                className="grid h-10 w-10 place-items-center rounded-full bg-blue-soft/70 text-blue-deep"
              >
                <Icon name="play" className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {q.choices.map((c, i) => (
                <button
                  key={c.label}
                  onClick={() => answer(i)}
                  className="flex items-center gap-3 rounded-2xl bg-white px-5 py-4 text-left text-lg font-bold text-ink shadow-card ring-2 ring-pink-soft/50 transition-all hover:-translate-y-0.5 hover:ring-pink active:scale-95"
                >
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-md bg-pink-soft/60 text-xs font-extrabold text-pink-ink">
                    {i + 1}
                  </span>
                  {c.label}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </Shell>
  );
}

function Shell({
  children,
  hud,
}: {
  children: React.ReactNode;
  hud?: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-cream to-pink-soft/25">
      <GameTopBar title="Word Blitz" right={hud} />
      {children}
    </div>
  );
}
