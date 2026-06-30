"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Icon from "../ui/Icon";
import { syllabus } from "@/lib/lesson";
import { getCompleted } from "@/lib/lesson-progress";

/* Bridges Lessons → Review: lists the lessons you've completed so you can
   revisit (replay) them anytime. Driven by real lesson progress. */
export default function ReviewProgress() {
  const [done, setDone] = useState<string[]>([]);
  useEffect(() => {
    setDone(getCompleted());
  }, []);

  const completed = syllabus.filter((s) => done.includes(s.id));

  return (
    <section className="mb-6 rounded-[1.5rem] bg-gradient-to-br from-pink-soft/40 to-blue-soft/40 p-5 shadow-card ring-1 ring-white">
      <div className="flex items-center justify-between">
        <h2 className="flex items-center gap-2 font-display text-lg font-extrabold text-ink">
          <Icon name="review" className="h-5 w-5 text-pink-deep" /> Lessons to review
        </h2>
        <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-bold text-ink-soft">
          {completed.length} completed
        </span>
      </div>

      {completed.length === 0 ? (
        <p className="mt-3 text-sm text-ink-soft">
          Finish a lesson and it'll appear here to revisit anytime.{" "}
          <Link href="/dashboard/lessons" className="font-bold text-pink-deep hover:underline">
            Go to Lessons →
          </Link>
        </p>
      ) : (
        <div className="mt-3 flex flex-wrap gap-2">
          {completed.slice(-12).reverse().map((s) => (
            <Link
              key={s.id}
              href={`/dashboard/lesson/${s.id}`}
              className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-bold text-pink-ink shadow-soft ring-1 ring-pink-soft/50 transition-transform hover:-translate-y-0.5"
            >
              <span className="text-[#2f9d77]">✓</span> {s.cls}-{s.n} {s.title}
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
