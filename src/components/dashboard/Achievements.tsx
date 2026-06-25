import Link from "next/link";
import { recentAchievements } from "@/lib/dashboard";

const tierCls: Record<string, string> = {
  Bronze: "from-[#e0a875] to-[#c17a45]",
  Silver: "from-[#e9edf2] to-[#b9c2cc]",
  Gold: "from-[#ffe08a] to-[#f5a623]",
  Sakura: "from-[#ffd6e5] to-[#f7a8c4]",
  Platinum: "from-white to-[#ffe6f0]",
};

export default function Achievements() {
  return (
    <div className="rounded-[1.5rem] bg-white p-5 shadow-card ring-1 ring-pink-soft/40">
      <div className="flex items-center justify-between">
        <h3 className="font-display text-base font-extrabold text-ink">
          Recent achievements
        </h3>
        <Link href="#" className="text-xs font-bold text-pink-deep hover:underline">
          View all
        </Link>
      </div>

      <ul className="mt-4 grid grid-cols-4 gap-2">
        {recentAchievements.map((a) => (
          <li key={a.name} className="flex flex-col items-center gap-1.5 text-center">
            <span
              className={`grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br text-2xl shadow-soft ${tierCls[a.tier]}`}
            >
              {a.icon}
            </span>
            <span className="text-[0.62rem] font-bold leading-tight text-ink-soft">
              {a.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
