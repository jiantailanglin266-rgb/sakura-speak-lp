import Link from "next/link";
import Icon from "../ui/Icon";
import Reveal from "../ui/Reveal";
import { classSections, type LessonNode } from "@/lib/lesson";

const badge: Record<string, string> = {
  pink: "bg-pink-soft/70 text-pink-ink",
  blue: "bg-blue-soft/70 text-blue-deep",
  mint: "bg-[#dff7ec] text-[#2f9d77]",
  lilac: "bg-[#efe7ff] text-[#7a5bd6]",
};
const bar: Record<string, string> = {
  pink: "from-pink-deep to-pink",
  blue: "from-blue-deep to-blue",
  mint: "from-[#3fc093] to-[#9fe3c5]",
  lilac: "from-[#9a7bea] to-[#c9b6ff]",
};

function Node({ l, accent }: { l: LessonNode; accent: string }) {
  const base =
    "relative flex items-center gap-4 rounded-2xl p-4 shadow-card ring-1 transition-all";
  if (l.state === "current") {
    return (
      <Link
        href="/dashboard/lesson"
        className={`${base} bg-gradient-to-r from-pink-deep to-pink text-white ring-pink-deep hover:-translate-y-0.5 hover:shadow-pop`}
      >
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white/90 font-display font-extrabold text-pink-deep">
          {l.n}
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-[0.65rem] font-bold uppercase tracking-wider text-white/80">
            Continue
          </p>
          <p className="truncate font-bold">{l.title}</p>
        </div>
        <span className="flex shrink-0 items-center gap-1 rounded-full bg-white px-3 py-1.5 text-xs font-extrabold text-pink-deep">
          START <Icon name="play" className="h-3.5 w-3.5 fill-current" />
        </span>
      </Link>
    );
  }
  if (l.state === "done") {
    return (
      <div className={`${base} bg-white ring-pink-soft/40`}>
        <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-full font-display font-extrabold ${badge[accent]}`}>
          {l.n}
        </span>
        <p className="min-w-0 flex-1 truncate font-bold text-ink">{l.title}</p>
        <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#e7f7ee] text-sm text-[#2f9d77]">
          ✓
        </span>
      </div>
    );
  }
  return (
    <div className={`${base} bg-gray-soft/60 ring-transparent`}>
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white/70 font-display font-extrabold text-ink-mute">
        {l.n}
      </span>
      <p className="min-w-0 flex-1 truncate font-bold text-ink-mute">{l.title}</p>
      <Icon name="lock" className="h-5 w-5 shrink-0 text-ink-mute" />
    </div>
  );
}

export default function LessonMap() {
  return (
    <div className="space-y-8">
      {classSections.map((sec) => {
        const done = sec.lessons.filter((l) => l.state === "done").length;
        const pct = Math.round((done / sec.lessons.length) * 100);
        return (
          <Reveal key={sec.code} className="rounded-[1.75rem] bg-white/60 p-5 ring-1 ring-pink-soft/40 sm:p-6">
            <div className="flex items-center gap-3">
              <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl font-display text-2xl font-extrabold ${badge[sec.accent]}`}>
                {sec.code}
              </span>
              <div className="flex-1">
                <h2 className="font-display text-lg font-extrabold text-ink">
                  Class {sec.code} · {sec.title}
                </h2>
                <p className="text-xs text-ink-soft">{sec.range}</p>
              </div>
            </div>
            <div className="mt-3 h-2 overflow-hidden rounded-full bg-pink-soft/40">
              <div className={`h-full rounded-full bg-gradient-to-r ${bar[sec.accent]}`} style={{ width: `${pct}%` }} />
            </div>

            <div className="mt-4 space-y-3">
              {sec.lessons.map((l) => (
                <Node key={l.n} l={l} accent={sec.accent} />
              ))}
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
