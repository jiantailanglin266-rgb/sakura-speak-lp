"use client";

import { useEffect, useRef, useState } from "react";
import GameTopBar from "./GameTopBar";
import StartScreen from "./StartScreen";
import GameResult from "./GameResult";
import {
  wordPool,
  shuffle,
  sample,
  memoryPairs,
  type Difficulty,
} from "@/lib/games";

type Card = { id: string; pid: number; face: string; kind: "jp" | "en" };
type Phase = "start" | "playing" | "result";

export default function MemoryMatch() {
  const [phase, setPhase] = useState<Phase>("start");
  const [cards, setCards] = useState<Card[]>([]);
  const [flipped, setFlipped] = useState<number[]>([]);
  const [matched, setMatched] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [time, setTime] = useState(0);
  const lock = useRef(false);

  const start = (d: Difficulty) => {
    const pairs = sample(wordPool, memoryPairs[d]);
    const deck: Card[] = pairs.flatMap((p, pid) => [
      { id: `${pid}-jp`, pid, face: p.jp, kind: "jp" as const },
      { id: `${pid}-en`, pid, face: p.en, kind: "en" as const },
    ]);
    setCards(shuffle(deck));
    setFlipped([]);
    setMatched([]);
    setMoves(0);
    setTime(0);
    lock.current = false;
    setPhase("playing");
  };

  // count-up timer
  useEffect(() => {
    if (phase !== "playing") return;
    const id = window.setInterval(() => setTime((t) => t + 1), 1000);
    return () => window.clearInterval(id);
  }, [phase]);

  // win check
  useEffect(() => {
    if (phase === "playing" && cards.length > 0 && matched.length === cards.length) {
      const id = window.setTimeout(() => setPhase("result"), 500);
      return () => window.clearTimeout(id);
    }
  }, [matched, cards, phase]);

  const flip = (idx: number) => {
    if (lock.current) return;
    if (matched.includes(idx) || flipped.includes(idx)) return;
    const next = [...flipped, idx];
    setFlipped(next);
    if (next.length === 2) {
      setMoves((m) => m + 1);
      lock.current = true;
      const [a, b] = next;
      if (cards[a].pid === cards[b].pid) {
        window.setTimeout(() => {
          setMatched((m) => [...m, a, b]);
          setFlipped([]);
          lock.current = false;
        }, 350);
      } else {
        window.setTimeout(() => {
          setFlipped([]);
          lock.current = false;
        }, 800);
      }
    }
  };

  if (phase === "start")
    return (
      <Shell>
        <StartScreen
          title="Memory Match"
          jp="神経衰弱"
          how="Flip two cards to find a Japanese word and its English meaning. Match every pair!"
          onStart={start}
        />
      </Shell>
    );

  if (phase === "result")
    return (
      <Shell>
        <GameResult
          headline="All matched! 🎉"
          stats={[
            { icon: "calendar", label: "Time", value: fmt(time) },
            { icon: "target", label: "Moves", value: `${moves}` },
          ]}
          onReplay={() => setPhase("start")}
        />
      </Shell>
    );

  const cols = cards.length <= 8 ? "grid-cols-4" : cards.length <= 12 ? "grid-cols-4" : "grid-cols-4";

  return (
    <Shell
      hud={
        <div className="flex items-center gap-2 text-sm font-extrabold text-ink-soft">
          <span className="rounded-full bg-white px-3 py-1 ring-1 ring-pink-soft/50">
            ⏱ {fmt(time)}
          </span>
          <span className="rounded-full bg-pink-soft/60 px-3 py-1 text-pink-ink">
            {moves} moves
          </span>
        </div>
      }
    >
      <div className="mx-auto flex w-full max-w-md flex-1 flex-col justify-center px-4 py-5">
        <div className={`grid ${cols} gap-2.5 sm:gap-3`}>
          {cards.map((c, idx) => {
            const isUp = flipped.includes(idx) || matched.includes(idx);
            const isMatched = matched.includes(idx);
            return (
              <button
                key={c.id}
                onClick={() => flip(idx)}
                disabled={isUp}
                className={`flex aspect-[3/4] items-center justify-center rounded-2xl p-1 text-center font-bold shadow-card ring-1 transition-all duration-200 ${
                  isMatched
                    ? "bg-[#e7f7ee] text-[#2f9d77] ring-[#9fe3c5]"
                    : isUp
                    ? "bg-white ring-pink-soft/60"
                    : "bg-gradient-to-br from-pink-deep to-pink text-white ring-white hover:-translate-y-0.5"
                }`}
              >
                {isUp ? (
                  <span
                    className={`${c.kind === "jp" ? "font-display text-lg sm:text-xl" : "text-xs sm:text-sm"} ${
                      isMatched ? "" : "text-ink"
                    }`}
                  >
                    {c.face}
                  </span>
                ) : (
                  <span className="text-2xl">🌸</span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </Shell>
  );
}

function fmt(s: number) {
  const m = Math.floor(s / 60);
  const r = s % 60;
  return `${m}:${r.toString().padStart(2, "0")}`;
}

function Shell({ children, hud }: { children: React.ReactNode; hud?: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-cream to-pink-soft/25">
      <GameTopBar title="Memory Match" right={hud} />
      {children}
    </div>
  );
}
