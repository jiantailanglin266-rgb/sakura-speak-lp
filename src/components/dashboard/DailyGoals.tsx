import Icon from "../ui/Icon";
import { dailyGoal, week } from "@/lib/dashboard";

function Bar({
  label,
  icon,
  done,
  target,
  unit,
  cls,
}: {
  label: string;
  icon: string;
  done: number;
  target: number;
  unit: string;
  cls: string;
}) {
  const pct = Math.min(100, Math.round((done / target) * 100));
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between text-sm">
        <span className="flex items-center gap-1.5 font-bold text-ink">
          <Icon name={icon} className="h-4 w-4 text-pink-deep" />
          {label}
        </span>
        <span className="font-semibold text-ink-soft">
          {done}/{target} {unit}
        </span>
      </div>
      <div className="h-2.5 overflow-hidden rounded-full bg-pink-soft/40">
        <div
          className={`h-full rounded-full ${cls}`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

export default function DailyGoals() {
  return (
    <div className="rounded-[1.5rem] bg-white p-5 shadow-card ring-1 ring-pink-soft/40">
      <div className="flex items-center gap-2">
        <Icon name="target" className="h-5 w-5 text-pink-deep" />
        <h3 className="font-display text-base font-extrabold text-ink">
          Today's goals
        </h3>
      </div>

      <div className="mt-4 space-y-3.5">
        <Bar
          label="XP"
          icon="spark"
          done={dailyGoal.xpDone}
          target={dailyGoal.xpTarget}
          unit="XP"
          cls="bg-gradient-to-r from-gold to-gold-deep"
        />
        <Bar
          label="Lessons"
          icon="book"
          done={dailyGoal.lessonsDone}
          target={dailyGoal.lessonsTarget}
          unit=""
          cls="bg-gradient-to-r from-pink-deep to-pink"
        />
      </div>

      {/* streak week */}
      <div className="mt-5 border-t border-pink-soft/40 pt-4">
        <p className="mb-2.5 flex items-center gap-1.5 text-sm font-bold text-ink">
          <Icon name="fire" className="h-4 w-4 text-[#ef7d2e]" />
          This week
        </p>
        <div className="flex justify-between">
          {week.map((d, i) => (
            <div key={i} className="flex flex-col items-center gap-1.5">
              <span
                className={`grid h-8 w-8 place-items-center rounded-full text-xs font-bold ${
                  d.done
                    ? "bg-gradient-to-br from-[#ffb347] to-[#ef7d2e] text-white shadow-soft"
                    : "bg-pink-soft/40 text-ink-mute"
                }`}
              >
                {d.done ? "🔥" : ""}
              </span>
              <span className="text-[0.65rem] font-semibold text-ink-mute">
                {d.day}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
