"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { computeAchievements, type Achievement } from "@/lib/achievements";
import { getCompleted } from "@/lib/lesson-progress";
import { getSavedWords } from "@/lib/anime-saved";

const tierCls: Record<string, string> = {
  Bronze: "from-[#e0a875] to-[#c17a45]",
  Silver: "from-[#e9edf2] to-[#b9c2cc]",
  Gold: "from-[#ffe08a] to-[#f5a623]",
  Sakura: "from-[#ffd6e5] to-[#f7a8c4]",
  Platinum: "from-white to-[#ffe6f0]",
};

export default function Achievements() {
  const [list, setList] = useState<Achievement[]>([]);

  useEffect(() => {
    setList(computeAchievements(getCompleted(), getSavedWords().length));
  }, []);

  const earned = list.filter((a) => a.earned).length;
  // earned first, then locked — show up to 8
  const shown = [...list].sort((a, b) => Number(b.earned) - Number(a.earned)).slice(0, 8);

  return (
    <div className="rounded-[1.5rem] bg-white p-5 shadow-card ring-1 ring-pink-soft/40">
      <div className="flex items-center justify-between">
        <h3 className="font-display text-base font-extrabold text-ink">Achievements</h3>
        <Link href="/dashboard/profile" className="text-xs font-bold text-pink-deep hover:underline">
          {earned} / {list.length}
        </Link>
      </div>

      <ul className="mt-4 grid grid-cols-4 gap-2">
        {shown.map((a) => (
          <li key={a.id} className="flex flex-col items-center gap-1.5 text-center" title={a.desc}>
            <span
              className={`grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br text-2xl shadow-soft transition-all ${
                a.earned ? tierCls[a.tier] : "from-gray-soft to-gray-soft opacity-40 grayscale"
              }`}
            >
              {a.earned ? a.icon : "🔒"}
            </span>
            <span className={`text-[0.62rem] font-bold leading-tight ${a.earned ? "text-ink-soft" : "text-ink-mute"}`}>
              {a.name}
            </span>
          </li>
        ))}
      </ul>
      {earned === 0 && (
        <p className="mt-3 text-center text-xs text-ink-mute">Finish a lesson to earn your first badge 🌱</p>
      )}
    </div>
  );
}
