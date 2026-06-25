"use client";

import { useState } from "react";
import Link from "next/link";
import Icon from "../ui/Icon";
import { speak } from "@/lib/speak";
import { reviewSheets, type ReviewSheet } from "@/lib/review";

export default function ReviewBrowser() {
  const [openId, setOpenId] = useState<string | null>(null);
  const [reviewed, setReviewed] = useState<Set<string>>(new Set());

  const sheet = reviewSheets.find((s) => s.id === openId);

  if (sheet) return <Detail sheet={sheet} done={reviewed.has(sheet.id)} onDone={() => setReviewed((s) => new Set(s).add(sheet.id))} onBack={() => setOpenId(null)} />;

  const dueCount = reviewSheets.filter((s) => s.due && !reviewed.has(s.id)).length;

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <p className="text-sm text-ink-soft">Quick recaps to lock in what you've learned.</p>
        {dueCount > 0 && (
          <span className="rounded-full bg-[#ffe6ea] px-3 py-1 text-xs font-bold text-[#d6557a]">
            {dueCount} due today
          </span>
        )}
      </div>

      <ul className="space-y-3">
        {reviewSheets.map((s) => {
          const done = reviewed.has(s.id);
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
                    {s.due && !done && (
                      <span className="rounded-full bg-[#ffe6ea] px-2 py-0.5 text-[0.6rem] font-bold text-[#d6557a]">Due</span>
                    )}
                    {done && (
                      <span className="rounded-full bg-mint/40 px-2 py-0.5 text-[0.6rem] font-bold text-[#2f9d77]">Reviewed ✓</span>
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
    </div>
  );
}

function Detail({ sheet, done, onDone, onBack }: { sheet: ReviewSheet; done: boolean; onDone: () => void; onBack: () => void }) {
  return (
    <div>
      <button onClick={onBack} className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-sm font-bold text-pink-ink shadow-card ring-1 ring-pink-soft/60 hover:bg-cream">
        <Icon name="chevron" className="h-4 w-4 rotate-180" /> All review sheets
      </button>

      {/* header */}
      <div className="rounded-[1.5rem] bg-gradient-to-br from-[#dff7ec] via-white to-blue-soft/40 p-5 shadow-card ring-1 ring-white sm:p-6">
        <p className="text-xs font-bold uppercase tracking-wider text-ink-mute">Lesson {sheet.number} · Class {sheet.cls}</p>
        <h1 className="mt-1 font-display text-2xl font-extrabold text-ink">{sheet.title}</h1>
        <p className="text-sm text-ink-soft">{sheet.jp}</p>
      </div>

      {/* key points */}
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

      {/* grammar */}
      <Section title="Grammar & phrases">
        <div className="space-y-3">
          {sheet.grammar.map((g) => (
            <div key={g.point} className="rounded-2xl bg-cream p-4">
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

      {/* vocab */}
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

      {/* actions */}
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <button
          onClick={onDone}
          disabled={done}
          className={`flex-1 rounded-full py-3.5 text-sm font-extrabold shadow-soft transition-transform ${
            done ? "cursor-default bg-mint/40 text-[#2f9d77]" : "bg-gradient-to-r from-pink-deep to-pink text-white hover:-translate-y-0.5"
          }`}
        >
          {done ? "Reviewed ✓" : "Mark as reviewed"}
        </button>
        <Link href="/dashboard/games" className="flex-1 rounded-full bg-white py-3.5 text-center text-sm font-bold text-pink-ink shadow-card ring-1 ring-pink-soft/60 hover:bg-cream">
          Practice in a game
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
