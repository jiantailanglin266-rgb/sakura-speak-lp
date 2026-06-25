"use client";

import { useEffect, useState } from "react";
import GameTopBar from "./GameTopBar";
import StartScreen from "./StartScreen";
import GameResult from "./GameResult";
import Icon from "../ui/Icon";
import { speak } from "@/lib/speak";
import {
  wordPool,
  sample,
  makeChoices,
  listenOptions,
  listenRounds,
  type Difficulty,
  type Word,
} from "@/lib/games";

type Round = { word: Word; choices: { label: string; correct: boolean }[] };
type Phase = "start" | "playing" | "result";

export default function ListenGame() {
  const [phase, setPhase] = useState<Phase>("start");
  const [rounds, setRounds] = useState<Round[]>([]);
  const [idx, setIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);

  const start = (d: Difficulty) => {
    const rs = sample(wordPool, listenRounds).map((w) => ({
      word: w,
      choices: makeChoices(w, listenOptions[d]),
    }));
    setRounds(rs);
    setIdx(0);
    setScore(0);
    setSelected(null);
    setRevealed(false);
    setPhase("playing");
  };

  // auto-play audio each round
  useEffect(() => {
    if (phase !== "playing" || !rounds[idx]) return;
    const id = window.setTimeout(() => speak(rounds[idx].word.jp), 250);
    return () => window.clearTimeout(id);
  }, [phase, idx, rounds]);

  const select = (i: number) => {
    if (revealed) return;
    setSelected(i);
    setRevealed(true);
    if (rounds[idx].choices[i].correct) setScore((s) => s + 1);
  };

  const next = () => {
    if (idx + 1 >= rounds.length) {
      setPhase("result");
    } else {
      setIdx((v) => v + 1);
      setSelected(null);
      setRevealed(false);
    }
  };

  if (phase === "start")
    return (
      <Shell>
        <StartScreen
          title="Listen It"
          jp="リスニング"
          how="Tap the speaker to hear a Japanese word, then choose its English meaning. Replay as many times as you like."
          onStart={start}
        />
      </Shell>
    );

  if (phase === "result")
    return (
      <Shell>
        <GameResult
          headline={`${score} / ${rounds.length}`}
          stats={[
            {
              icon: "target",
              label: "Accuracy",
              value: `${Math.round((score / rounds.length) * 100)}%`,
            },
            { icon: "mic", label: "Rounds", value: `${rounds.length}` },
          ]}
          onReplay={() => setPhase("start")}
        />
      </Shell>
    );

  const r = rounds[idx];
  return (
    <Shell
      hud={
        <span className="text-sm font-bold text-ink-soft">
          {idx + 1}/{rounds.length}
        </span>
      }
    >
      <div className="mx-auto flex w-full max-w-md flex-1 flex-col px-4 py-6">
        <h2 className="text-center font-display text-xl font-extrabold text-ink">
          What did you hear?
        </h2>

        <div className="mt-6 flex flex-col items-center gap-2">
          <button
            onClick={() => speak(r.word.jp)}
            aria-label="Play audio"
            className="grid h-20 w-20 place-items-center rounded-full bg-gradient-to-br from-blue-deep to-blue text-white shadow-pop transition-transform hover:scale-105 active:scale-95"
          >
            <Icon name="play" className="h-9 w-9" />
          </button>
          <span className="text-xs text-ink-mute">Tap to replay</span>
          {revealed && (
            <span className="mt-1 font-display text-lg font-bold text-ink">
              {r.word.jp}{" "}
              <span className="text-sm font-semibold text-ink-mute">
                ({r.word.romaji})
              </span>
            </span>
          )}
        </div>

        <div className="mt-6 grid gap-3">
          {r.choices.map((c, i) => {
            const isSel = selected === i;
            let cls = "bg-white text-ink ring-pink-soft/50 hover:ring-pink";
            if (revealed) {
              if (c.correct) cls = "bg-[#e7f7ee] text-[#2f9d77] ring-[#9fe3c5]";
              else if (isSel) cls = "bg-[#ffe6ea] text-[#d6557a] ring-[#ffb3c4]";
              else cls = "bg-white text-ink-mute ring-pink-soft/40 opacity-70";
            }
            return (
              <button
                key={i}
                onClick={() => select(i)}
                disabled={revealed}
                className={`flex items-center justify-between rounded-2xl px-5 py-4 text-left text-lg font-bold ring-2 transition-all ${cls}`}
              >
                {c.label}
                {revealed && c.correct && <span>✓</span>}
                {revealed && !c.correct && isSel && <span>✕</span>}
              </button>
            );
          })}
        </div>

        {revealed && (
          <button
            onClick={next}
            className="mt-6 w-full rounded-full bg-gradient-to-r from-pink-deep to-pink py-4 text-base font-extrabold text-white shadow-pop transition-transform hover:-translate-y-0.5"
          >
            {idx + 1 >= rounds.length ? "Finish" : "Next"}
          </button>
        )}
      </div>
    </Shell>
  );
}

function Shell({ children, hud }: { children: React.ReactNode; hud?: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-cream to-pink-soft/25">
      <GameTopBar title="Listen It" right={hud} />
      {children}
    </div>
  );
}
