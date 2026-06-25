"use client";

import { useMemo, useState } from "react";
import Icon from "../ui/Icon";
import { speak } from "@/lib/speak";
import { vocabCategories, type Word } from "@/lib/vocab";

const chipAccent: Record<string, string> = {
  pink: "from-pink-soft/70 to-white text-pink-ink",
  blue: "from-blue-soft/70 to-white text-blue-deep",
  mint: "from-[#dff7ec] to-white text-[#2f9d77]",
  gold: "from-[#fff2cc] to-white text-gold-deep",
  lilac: "from-[#efe7ff] to-white text-[#7a5bd6]",
};

export default function VocabBrowser() {
  const [slug, setSlug] = useState(vocabCategories[0].slug);
  const [query, setQuery] = useState("");
  const [quiz, setQuiz] = useState(false);
  const [revealed, setRevealed] = useState<Set<string>>(new Set());

  const active = vocabCategories.find((c) => c.slug === slug)!;
  const q = query.trim().toLowerCase();

  const results: { word: Word; cat: string }[] = useMemo(() => {
    if (q) {
      const out: { word: Word; cat: string }[] = [];
      for (const c of vocabCategories)
        for (const w of c.words)
          if (
            w.jp.includes(query.trim()) ||
            w.romaji.toLowerCase().includes(q) ||
            w.en.toLowerCase().includes(q)
          )
            out.push({ word: w, cat: c.label });
      return out;
    }
    return active.words.map((w) => ({ word: w, cat: active.label }));
  }, [q, query, active]);

  const tap = (w: Word) => {
    speak(w.jp);
    if (quiz)
      setRevealed((s) => {
        const n = new Set(s);
        n.add(w.jp);
        return n;
      });
  };

  return (
    <div>
      {/* toolbar */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <label className="relative flex flex-1 items-center">
          <Icon name="search" className="pointer-events-none absolute left-4 h-4 w-4 text-ink-mute" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search words (English, romaji, kana)…"
            className="w-full rounded-full border border-pink-soft/60 bg-white py-2.5 pl-11 pr-4 text-sm text-ink placeholder:text-ink-mute focus:border-pink focus:outline-none focus:ring-4 focus:ring-pink/20"
          />
        </label>
        <button
          onClick={() => {
            setQuiz((v) => !v);
            setRevealed(new Set());
          }}
          className={`shrink-0 rounded-full px-4 py-2.5 text-sm font-bold ring-2 transition-all ${
            quiz
              ? "bg-pink-soft/40 text-pink-ink ring-pink-deep"
              : "bg-white text-ink-soft ring-pink-soft/60 hover:ring-pink"
          }`}
        >
          {quiz ? "🙈 Quiz mode: on" : "👀 Quiz mode"}
        </button>
      </div>

      {/* category chips */}
      {!q && (
        <div className="mt-4 flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {vocabCategories.map((c) => (
            <button
              key={c.slug}
              onClick={() => {
                setSlug(c.slug);
                setRevealed(new Set());
              }}
              className={`flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full px-4 py-2 text-sm font-bold transition-all ${
                slug === c.slug
                  ? "bg-gradient-to-r from-pink-deep to-pink text-white shadow-soft"
                  : "bg-white text-ink-soft ring-1 ring-pink-soft/60 hover:bg-pink-soft/30"
              }`}
            >
              <span>{c.emoji}</span>
              {c.label}
            </button>
          ))}
        </div>
      )}

      {/* header */}
      <div className="mt-4 flex items-center justify-between">
        <h2 className="font-display text-lg font-extrabold text-ink">
          {q ? (
            <>Results for “{query.trim()}”</>
          ) : (
            <>
              {active.emoji} {active.label}{" "}
              <span className="text-sm font-semibold text-ink-mute">{active.jp}</span>
            </>
          )}
        </h2>
        <span className="text-sm font-semibold text-ink-mute">{results.length} words</span>
      </div>

      {/* word grid */}
      {results.length === 0 ? (
        <p className="mt-10 text-center text-sm text-ink-soft">
          No words found. Try another search 🌸
        </p>
      ) : (
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {results.map(({ word, cat }) => {
            const show = !quiz || revealed.has(word.jp);
            return (
              <button
                key={word.jp + cat}
                onClick={() => tap(word)}
                className="group flex items-center gap-3 rounded-2xl bg-white p-4 text-left shadow-card ring-1 ring-pink-soft/40 transition-all hover:-translate-y-0.5 hover:shadow-pop"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-blue-soft/70 text-blue-deep transition-transform group-hover:scale-110">
                  <Icon name="play" className="h-5 w-5" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-display text-xl font-extrabold text-ink">
                    {word.jp}
                  </span>
                  {show ? (
                    <span className="block text-sm text-ink-soft">
                      <span className="text-ink-mute">{word.romaji}</span> · {word.en}
                    </span>
                  ) : (
                    <span className="mt-0.5 block text-sm font-semibold text-pink-ink/70">
                      Tap to reveal
                    </span>
                  )}
                </span>
                {q && (
                  <span className="shrink-0 rounded-full bg-pink-soft/50 px-2 py-0.5 text-[0.6rem] font-bold text-pink-ink">
                    {cat}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
