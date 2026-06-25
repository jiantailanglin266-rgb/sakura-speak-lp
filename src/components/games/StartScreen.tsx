"use client";

import { useState } from "react";
import Meemi from "../Meemi";
import { difficulties, type Difficulty } from "@/lib/games";

export default function StartScreen({
  title,
  jp,
  how,
  onStart,
}: {
  title: string;
  jp: string;
  how: string;
  onStart: (d: Difficulty) => void;
}) {
  const [diff, setDiff] = useState<Difficulty>("normal");

  return (
    <div className="mx-auto flex w-full max-w-md flex-1 flex-col items-center justify-center px-4 py-8 text-center">
      <Meemi className="w-28 animate-float" mood="wink" />
      <h2 className="mt-4 font-display text-3xl font-extrabold text-ink">{title}</h2>
      <p className="text-sm text-ink-soft">{jp}</p>
      <p className="mt-4 rounded-2xl bg-white p-4 text-sm text-ink-soft shadow-card ring-1 ring-pink-soft/40">
        {how}
      </p>

      <div className="mt-6 w-full">
        <p className="mb-2 text-sm font-bold text-ink">Choose difficulty</p>
        <div className="grid grid-cols-3 gap-2.5">
          {difficulties.map((d) => (
            <button
              key={d.id}
              onClick={() => setDiff(d.id)}
              className={`rounded-2xl px-2 py-3 ring-2 transition-all ${
                diff === d.id
                  ? "bg-pink-soft/40 ring-pink-deep"
                  : "bg-white ring-pink-soft/50 hover:ring-pink"
              }`}
            >
              <span className="block font-display text-base font-extrabold text-ink">
                {d.label}
              </span>
              <span className="block text-[0.65rem] text-ink-soft">{d.note}</span>
            </button>
          ))}
        </div>
        <p className="mt-2 text-xs text-ink-mute">
          🪙 Same XP &amp; coins on every difficulty — pick what feels good.
        </p>
      </div>

      <button
        onClick={() => onStart(diff)}
        className="mt-7 w-full rounded-full bg-gradient-to-r from-pink-deep to-pink py-4 text-base font-extrabold text-white shadow-pop transition-transform hover:-translate-y-0.5"
      >
        Play ▶
      </button>
    </div>
  );
}
