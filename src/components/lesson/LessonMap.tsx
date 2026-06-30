"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Icon from "../ui/Icon";
import Reveal from "../ui/Reveal";
import { syllabus, classMeta, playableIds, type SyllabusEntry } from "@/lib/lesson";
import { getCompleted } from "@/lib/lesson-progress";

const playable = new Set(playableIds);

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

type NodeState = "done" | "current" | "available" | "soon";

function Node({ e, accent, state }: { e: SyllabusEntry; accent: string; state: NodeState }) {
  const base = "relative flex items-center gap-4 rounded-2xl p-4 shadow-card ring-1 transition-all";
  const href = `/dashboard/lesson/${e.id}`;

  if (state === "current") {
    return (
      <Link href={href} className={`${base} bg-gradient-to-r from-pink-deep to-pink text-white ring-pink-deep hover:-translate-y-0.5 hover:shadow-pop`}>
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white/90 font-display font-extrabold text-pink-deep">{e.n}</span>
        <div className="min-w-0 flex-1">
          <p className="text-[0.65rem] font-bold uppercase tracking-wider text-white/80">Continue</p>
          <p className="truncate font-bold">{e.title}</p>
        </div>
        <span className="flex shrink-0 items-center gap-1 rounded-full bg-white px-3 py-1.5 text-xs font-extrabold text-pink-deep">
          START <Icon name="play" className="h-3.5 w-3.5 fill-current" />
        </span>
      </Link>
    );
  }
  if (state === "done") {
    return (
      <Link href={href} className={`${base} bg-white ring-pink-soft/40 hover:-translate-y-0.5 hover:shadow-pop`}>
        <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-full font-display font-extrabold ${badge[accent]}`}>{e.n}</span>
        <p className="min-w-0 flex-1 truncate font-bold text-ink">{e.title}</p>
        <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#e7f7ee] text-sm text-[#2f9d77]">✓</span>
      </Link>
    );
  }
  if (state === "available") {
    return (
      <Link href={href} className={`${base} bg-white ring-pink-soft/40 hover:-translate-y-0.5 hover:shadow-pop`}>
        <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-full font-display font-extrabold ${badge[accent]}`}>{e.n}</span>
        <p className="min-w-0 flex-1 truncate font-bold text-ink">{e.title}</p>
        <Icon name="chevron" className="h-4 w-4 shrink-0 text-ink-mute" />
      </Link>
    );
  }
  // soon (not yet authored)
  return (
    <div className={`${base} bg-gray-soft/60 ring-transparent`}>
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white/70 font-display font-extrabold text-ink-mute">{e.n}</span>
      <p className="min-w-0 flex-1 truncate font-bold text-ink-mute">{e.title}</p>
      <span className="shrink-0 rounded-full bg-white/70 px-2 py-0.5 text-[0.6rem] font-bold text-ink-mute">soon</span>
    </div>
  );
}

export default function LessonMap() {
  const [completed, setCompleted] = useState<Set<string>>(new Set());
  useEffect(() => {
    setCompleted(new Set(getCompleted()));
  }, []);

  // Compute states in syllabus order: first incomplete playable lesson = current.
  const states: Record<string, NodeState> = {};
  let currentAssigned = false;
  for (const e of syllabus) {
    if (!playable.has(e.id)) {
      states[e.id] = "soon";
    } else if (completed.has(e.id)) {
      states[e.id] = "done";
    } else if (!currentAssigned) {
      states[e.id] = "current";
      currentAssigned = true;
    } else {
      states[e.id] = "available";
    }
  }

  return (
    <div className="space-y-8">
      {classMeta.map((sec) => {
        const lessons = syllabus.filter((e) => e.cls === sec.code);
        const ready = lessons.filter((e) => playable.has(e.id)).length;
        const done = lessons.filter((e) => states[e.id] === "done").length;
        const pct = Math.round((done / lessons.length) * 100);
        return (
          <Reveal key={sec.code} className="rounded-[1.75rem] bg-white/60 p-5 ring-1 ring-pink-soft/40 sm:p-6">
            <div className="flex items-center gap-3">
              <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl font-display text-2xl font-extrabold ${badge[sec.accent]}`}>
                {sec.code}
              </span>
              <div className="flex-1">
                <h2 className="font-display text-lg font-extrabold text-ink">Class {sec.code} · {sec.title}</h2>
                <p className="text-xs text-ink-soft">
                  {sec.range} · {ready > 0 ? `${ready} ready` : "coming soon"}
                </p>
              </div>
              {done > 0 && <span className="text-xs font-bold text-ink-soft">{done}/{lessons.length}</span>}
            </div>
            <div className="mt-3 h-2 overflow-hidden rounded-full bg-pink-soft/40">
              <div className={`h-full rounded-full bg-gradient-to-r ${bar[sec.accent]}`} style={{ width: `${pct}%` }} />
            </div>

            <div className="mt-4 space-y-3">
              {lessons.map((e) => (
                <Node key={e.id} e={e} accent={sec.accent} state={states[e.id]} />
              ))}
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
