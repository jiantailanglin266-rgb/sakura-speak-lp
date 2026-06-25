import { friends } from "@/lib/dashboard";

const medals = ["🥇", "🥈", "🥉"];

export default function FriendsCard() {
  const ranked = [...friends].sort((a, b) => b.xp - a.xp);
  return (
    <div className="rounded-[1.5rem] bg-white p-5 shadow-card ring-1 ring-pink-soft/40">
      <h3 className="font-display text-base font-extrabold text-ink">
        Weekly leaderboard
      </h3>
      <p className="mt-0.5 text-xs text-ink-soft">Among people you follow</p>

      <ul className="mt-4 space-y-2">
        {ranked.map((f, i) => (
          <li
            key={f.name}
            className={`flex items-center gap-3 rounded-2xl px-3 py-2 ${
              f.you ? "bg-pink-soft/40 ring-1 ring-pink/40" : ""
            }`}
          >
            <span className="w-5 text-center text-sm font-extrabold text-ink-soft">
              {medals[i] ?? i + 1}
            </span>
            <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-pink-soft to-blue-soft text-xs font-extrabold text-pink-ink">
              {f.initials}
            </span>
            <span className="flex-1 truncate text-sm font-bold text-ink">
              {f.name}
            </span>
            <span className="text-sm font-extrabold text-pink-deep">
              {f.xp}
              <span className="ml-0.5 text-[0.65rem] font-bold text-ink-mute">
                XP
              </span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
