import Icon from "../ui/Icon";
import { classProgress } from "@/lib/dashboard";

const bar: Record<string, string> = {
  pink: "bg-gradient-to-r from-pink-deep to-pink",
  blue: "bg-gradient-to-r from-blue-deep to-blue",
  mint: "bg-gradient-to-r from-[#3fc093] to-[#9fe3c5]",
  lilac: "bg-gradient-to-r from-[#9a7bea] to-[#c9b6ff]",
};
const badge: Record<string, string> = {
  pink: "bg-pink-soft/70 text-pink-ink",
  blue: "bg-blue-soft/70 text-blue-deep",
  mint: "bg-[#dff7ec] text-[#2f9d77]",
  lilac: "bg-[#efe7ff] text-[#7a5bd6]",
};

export default function ClassTrack() {
  return (
    <div className="rounded-[1.5rem] bg-white p-5 shadow-card ring-1 ring-pink-soft/40">
      <h3 className="font-display text-base font-extrabold text-ink">
        Curriculum progress
      </h3>
      <p className="mt-0.5 text-xs text-ink-soft">80 lessons · Class A → D</p>

      <ul className="mt-4 space-y-3.5">
        {classProgress.map((c) => {
          const locked = c.pct === 0;
          return (
            <li key={c.code}>
              <div className="mb-1.5 flex items-center justify-between">
                <span className="flex items-center gap-2 text-sm font-bold text-ink">
                  <span
                    className={`grid h-6 w-6 place-items-center rounded-lg font-display text-xs font-extrabold ${badge[c.accent]}`}
                  >
                    {c.code}
                  </span>
                  {c.title}
                </span>
                <span className="flex items-center gap-1 text-xs font-semibold text-ink-soft">
                  {locked && <Icon name="lock" className="h-3.5 w-3.5" />}
                  {c.pct}%
                </span>
              </div>
              <div className="h-2.5 overflow-hidden rounded-full bg-pink-soft/40">
                <div
                  className={`h-full rounded-full ${bar[c.accent]}`}
                  style={{ width: `${Math.max(c.pct, 0)}%` }}
                />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
