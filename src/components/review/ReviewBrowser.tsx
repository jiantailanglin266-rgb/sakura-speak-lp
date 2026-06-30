"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Icon from "../ui/Icon";
import { speak } from "@/lib/speak";
import { buildReviewSheet, reviewableIds, type ReviewSheet } from "@/lib/review";
import { getCompleted } from "@/lib/lesson-progress";
import { getReviewed, markReviewed, isDue } from "@/lib/review-progress";

const reviewableSet = new Set(reviewableIds);

export default function ReviewBrowser() {
  const [openId, setOpenId] = useState<string | null>(null);
  const [completed, setCompleted] = useState<string[]>([]);
  const [reviewed, setReviewed] = useState<Record<string, string>>({});
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    setCompleted(getCompleted());
    setReviewed(getReviewed());
  }, []);

  const completedSet = useMemo(() => new Set(completed), [completed]);

  const sheets = useMemo(() => {
    const ids = showAll ? reviewableIds : completed.filter((id) => reviewableSet.has(id));
    const list = ids.map(buildReviewSheet).filter(Boolean) as ReviewSheet[];
    // due (completed + due) first, then by class/number
    return list.sort((a, b) => {
      const da = completedSet.has(a.id) && isDue(a.id, reviewed) ? 0 : 1;
      const db = completedSet.has(b.id) && isDue(b.id, reviewed) ? 0 : 1;
      if (da !== db) return da - db;
      return a.cls === b.cls ? a.number - b.number : a.cls.localeCompare(b.cls);
    });
  }, [showAll, completed, completedSet, reviewed]);

  const doReview = (id: string) => {
    markReviewed(id);
    setReviewed(getReviewed());
  };

  const sheet = openId ? buildReviewSheet(openId) : null;
  if (sheet)
    return (
      <Detail
        sheet={sheet}
        reviewedAt={reviewed[sheet.id]}
        onDone={() => doReview(sheet.id)}
        onBack={() => setOpenId(null)}
      />
    );

  const dueCount = sheets.filter((s) => completedSet.has(s.id) && isDue(s.id, reviewed)).length;

  return (
    <div>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <p className="text-sm text-ink-soft">Quick recaps to lock in what you've learned.</p>
        <div className="flex items-center gap-2">
          {dueCount > 0 && (
            <span className="rounded-full bg-[#ffe6ea] px-3 py-1 text-xs font-bold text-[#d6557a]">
              {dueCount} due
            </span>
          )}
          <button
            onClick={() => setShowAll((v) => !v)}
            className="rounded-full bg-white px-3 py-1 text-xs font-bold text-pink-ink shadow-card ring-1 ring-pink-soft/60 hover:bg-cream"
          >
            {showAll ? "Show completed" : "Show all lessons"}
          </button>
        </div>
      </div>

      {sheets.length === 0 ? (
        <div className="rounded-[1.5rem] bg-white p-8 text-center shadow-card ring-1 ring-pink-soft/40">
          <p className="text-sm text-ink-soft">
            Finish a lesson to unlock its review sheet — or{" "}
            <button onClick={() => setShowAll(true)} className="font-bold text-pink-deep hover:underline">
              browse all lessons
            </button>
            .
          </p>
        </div>
      ) : (
        <ul className="space-y-3">
          {sheets.map((s) => {
            const due = completedSet.has(s.id) && isDue(s.id, reviewed);
            const reviewedDone = !!reviewed[s.id] && !due;
            return (
              <li key={s.id}>
                <button
                  onClick={() => setOpenId(s.id)}
                  className="flex w-full items-center gap-3 rounded-2xl bg-white p-4 text-left shadow-card ring-1 ring-pink-soft/40 transition-all hover:-translate-y-0.5 hover:shadow-pop"
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-[#dff7ec] to-white font-display text-lg font-extrabold text-[#2f9d77]">
                    {s.cls}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex flex-wrap items-center gap-2">
                      <span className="font-bold text-ink">{s.title}</span>
                      {due && (
                        <span className="rounded-full bg-[#ffe6ea] px-2 py-0.5 text-[0.6rem] font-bold text-[#d6557a]">Due</span>
                      )}
                      {reviewedDone && (
                        <span className="rounded-full bg-mint/40 px-2 py-0.5 text-[0.6rem] font-bold text-[#2f9d77]">Reviewed ✓</span>
                      )}
                      {!completedSet.has(s.id) && (
                        <span className="rounded-full bg-cream px-2 py-0.5 text-[0.6rem] font-bold text-ink-mute">Preview</span>
                      )}
                    </span>
                    <span className="block text-xs text-ink-soft">
                      Lesson {s.number} · {s.points.length} key points · {s.vocab.length} words
                    </span>
                  </span>
                  <Icon name="chevron" className="h-4 w-4 shrink-0 text-ink-mute" />
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

function Detail({
  sheet,
  reviewedAt,
  onDone,
  onBack,
}: {
  sheet: ReviewSheet;
  reviewedAt?: string;
  onBack: () => void;
  onDone: () => void;
}) {
  const [done, setDone] = useState(false);
  useEffect(() => setDone(!!reviewedAt), [reviewedAt]);

  return (
    <div>
      <button onClick={onBack} className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-sm font-bold text-pink-ink shadow-card ring-1 ring-pink-soft/60 hover:bg-cream">
        <Icon name="chevron" className="h-4 w-4 rotate-180" /> All review sheets
      </button>

      <div className="rounded-[1.5rem] bg-gradient-to-br from-[#dff7ec] via-white to-blue-soft/40 p-5 shadow-card ring-1 ring-white sm:p-6">
        <p className="text-xs font-bold uppercase tracking-wider text-ink-mute">Lesson {sheet.number} · Class {sheet.cls}</p>
        <h1 className="mt-1 font-display text-2xl font-extrabold text-ink">{sheet.title}</h1>
        <p className="text-sm text-ink-soft">{sheet.jp}</p>
      </div>

      {sheet.points.length > 0 && (
        <Section title="Key points">
          <ul className="space-y-2.5">
            {sheet.points.map((p) => (
              <li key={p} className="flex items-start gap-2.5 text-sm text-ink">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-mint/40 text-[0.7rem] text-[#2f9d77]">✓</span>
                {p}
              </li>
            ))}
          </ul>
        </Section>
      )}

      {sheet.grammar.length > 0 && (
        <Section title="Grammar & phrases">
          <div className="space-y-3">
            {sheet.grammar.map((g) => (
              <div key={g.jp} className="rounded-2xl bg-cream p-4">
                <p className="text-xs font-bold text-pink-ink">{g.point}</p>
                <div className="mt-1.5 flex items-center gap-2">
                  <span className="font-display text-xl font-extrabold text-ink">{g.jp}</span>
                  <button onClick={() => speak(g.jp)} aria-label="Play" className="grid h-8 w-8 place-items-center rounded-full bg-blue-soft/70 text-blue-deep">
                    <Icon name="play" className="h-4 w-4" />
                  </button>
                </div>
                <p className="text-sm text-ink-soft"><span className="text-ink-mute">{g.romaji}</span> · {g.en}</p>
              </div>
            ))}
          </div>
        </Section>
      )}

      {sheet.vocab.length > 0 && (
        <Section title="Vocabulary recap">
          <div className="grid gap-2.5 sm:grid-cols-2">
            {sheet.vocab.map((w) => (
              <button key={w.jp} onClick={() => speak(w.jp)} className="flex items-center gap-3 rounded-2xl bg-white p-3 text-left shadow-card ring-1 ring-pink-soft/40 hover:-translate-y-0.5">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-blue-soft/70 text-blue-deep">
                  <Icon name="play" className="h-4 w-4" />
                </span>
                <span>
                  <span className="block font-display text-lg font-extrabold text-ink">{w.jp}</span>
                  <span className="block text-xs text-ink-soft"><span className="text-ink-mute">{w.romaji}</span> · {w.en}</span>
                </span>
              </button>
            ))}
          </div>
        </Section>
      )}

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <button
          onClick={() => { onDone(); setDone(true); }}
          disabled={done}
          className={`flex-1 rounded-full py-3.5 text-sm font-extrabold shadow-soft transition-transform ${
            done ? "cursor-default bg-mint/40 text-[#2f9d77]" : "bg-gradient-to-r from-pink-deep to-pink text-white hover:-translate-y-0.5"
          }`}
        >
          {done ? "Reviewed ✓" : "Mark as reviewed"}
        </button>
        <Link href={`/dashboard/lesson/${sheet.id}`} className="flex-1 rounded-full bg-white py-3.5 text-center text-sm font-bold text-pink-ink shadow-card ring-1 ring-pink-soft/60 hover:bg-cream">
          Replay lesson
        </Link>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-5 rounded-[1.5rem] bg-white p-5 shadow-card ring-1 ring-pink-soft/40 sm:p-6">
      <h2 className="mb-3 font-display text-lg font-extrabold text-ink">{title}</h2>
      {children}
    </div>
  );
}
