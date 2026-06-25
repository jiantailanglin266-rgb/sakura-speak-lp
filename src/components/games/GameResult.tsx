"use client";

import Link from "next/link";
import Meemi from "../Meemi";
import Icon from "../ui/Icon";
import { reward } from "@/lib/games";

export default function GameResult({
  headline,
  stats,
  onReplay,
}: {
  headline: string;
  stats: { icon: string; label: string; value: string }[];
  onReplay: () => void;
}) {
  const all = [
    { icon: "spark", label: "XP earned", value: `+${reward.xp}` },
    { icon: "coin", label: "Coins", value: `+${reward.coins}` },
    ...stats,
  ];
  return (
    <div className="mx-auto flex w-full max-w-md flex-1 flex-col items-center justify-center px-4 py-8 text-center">
      <div className="relative w-fit">
        <Meemi className="w-32 animate-float" mood="love" />
        <span className="absolute -right-2 top-1 animate-sparkle text-2xl">✨</span>
        <span className="absolute -left-3 top-10 animate-sparkle text-xl">🌸</span>
      </div>
      <h2 className="mt-4 font-display text-3xl font-extrabold text-ink">{headline}</h2>

      <div className="mt-6 grid w-full grid-cols-2 gap-3">
        {all.map((s) => (
          <div
            key={s.label}
            className="rounded-2xl bg-white p-4 shadow-card ring-1 ring-pink-soft/40"
          >
            <Icon name={s.icon} className="mx-auto h-6 w-6 text-pink-deep" />
            <p className="mt-1.5 font-display text-2xl font-extrabold text-ink">
              {s.value}
            </p>
            <p className="text-xs font-semibold text-ink-soft">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-7 w-full space-y-3">
        <button
          onClick={onReplay}
          className="w-full rounded-full bg-gradient-to-r from-pink-deep to-pink py-4 text-base font-extrabold text-white shadow-pop transition-transform hover:-translate-y-0.5"
        >
          Play again
        </button>
        <Link
          href="/dashboard/games"
          className="block rounded-full bg-white py-3.5 text-sm font-bold text-pink-ink shadow-card ring-1 ring-pink-soft/60 hover:bg-cream"
        >
          Back to games
        </Link>
      </div>
    </div>
  );
}
