"use client";

import { useMemo, useState } from "react";
import Icon from "../ui/Icon";
import { speak } from "@/lib/speak";
import { vocabCategories, type Word } from "@/lib/vocab";

const chip: Record<string, string> = {
  pink: "from-pink-soft/70 to-white text-pink-ink",
  blue: "from-blue-soft/70 to-white text-blue-deep",
  mint: "from-[#dff7ec] to-white text-[#2f9d77]",
  gold: "from-[#fff2cc] to-white text-gold-deep",
  lilac: "from-[#efe7ff] to-white text-[#7a5bd6]",
};

// flat lookup: subject slug -> { subject, category }
const index = (() => {
  const m: Record<string, { label: string; words: Word[]; cat: string; emoji: string }> = {};
  for (const c of vocabCategories)
    for (const s of c.subjects) m[s.slug] = { label: s.label, words: s.words, cat: c.label, emoji: c.emoji };
  return m;
})();

export default function VocabBrowser() {
  const [openSlug, setOpenSlug] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const [quiz, setQuiz] = useState(false);
  const [revealed, setRevealed] = useState<Set<string>>(new Set());

  const q = query.trim().toLowerCase();

  const searchResults: { word: Word; subject: string }[] = useMemo(() => {
    if (!q) return [];
    const out: { word: Word; subject: string }[] = [];
    for (const c of vocabCategories)
      for (const s of c.subjects)
        for (const w of s.words)
          if (
            w.jp.includes(query.trim()) ||
            (w.kanji && w.kanji.includes(query.trim())) ||
            w.romaji.toLowerCase().includes(q) ||
            w.en.toLowerCase().includes(q)
          )
            out.push({ word: w, subject: s.label });
    return out;
  }, [q, query]);

  const tap = (w: Word) => {
    speak(w.jp);
    if (quiz) setRevealed((s) => new Set(s).add(w.jp));
  };

  const WordCard = ({ w, subject }: { w: Word; subject?: string }) => {
    const show = !quiz || revealed.has(w.jp);
    return (
      <button
        onClick={() => tap(w)}
        className="group flex items-center gap-3 rounded-2xl bg-white p-4 text-left shadow-card ring-1 ring-pink-soft/40 transition-all hover:-translate-y-0.5 hover:shadow-pop"
      >
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-blue-soft/70 text-blue-deep transition-transform group-hover:scale-110">
          <Icon name="play" className="h-5 w-5" />
        </span>
        <span className="min-w-0 flex-1">
          <span className="flex items-baseline gap-2">
            <span className="font-display text-xl font-extrabold text-ink">{w.kanji ?? w.jp}</span>
            {w.kanji && <span className="text-sm text-ink-soft">{w.jp}</span>}
          </span>
          {show ? (
            <span className="block text-sm text-ink-soft">
              <span className="text-ink-mute">{w.romaji}</span> · {w.en}
            </span>
          ) : (
            <span className="mt-0.5 block text-sm font-semibold text-pink-ink/70">Tap to reveal</span>
          )}
        </span>
        {subject && (
          <span className="shrink-0 rounded-full bg-pink-soft/50 px-2 py-0.5 text-[0.6rem] font-bold text-pink-ink">
            {subject}
          </span>
        )}
      </button>
    );
  };

  // ---------- search view ----------
  if (q) {
    return (
      <div>
        <Toolbar query={query} setQuery={setQuery} quiz={quiz} setQuiz={setQuiz} setRevealed={setRevealed} />
        <div className="mt-4 flex items-center justify-between">
          <h2 className="font-display text-lg font-extrabold text-ink">Results for “{query.trim()}”</h2>
          <span className="text-sm font-semibold text-ink-mute">{searchResults.length} words</span>
        </div>
        {searchResults.length === 0 ? (
          <p className="mt-10 text-center text-sm text-ink-soft">No words found in the transcribed sheets yet 🌸</p>
        ) : (
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {searchResults.map(({ word, subject }) => (
              <WordCard key={word.jp + subject} w={word} subject={subject} />
            ))}
          </div>
        )}
      </div>
    );
  }

  // ---------- subject sheet view ----------
  if (openSlug && index[openSlug]) {
    const subj = index[openSlug];
    return (
      <div>
        <button
          onClick={() => { setOpenSlug(null); setRevealed(new Set()); }}
          className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-sm font-bold text-pink-ink shadow-card ring-1 ring-pink-soft/60 hover:bg-cream"
        >
          <Icon name="chevron" className="h-4 w-4 rotate-180" /> All subjects
        </button>

        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-ink-mute">{subj.cat}</p>
            <h2 className="font-display text-xl font-extrabold text-ink">{subj.emoji} {subj.label}</h2>
          </div>
          <button
            onClick={() => { setQuiz((v) => !v); setRevealed(new Set()); }}
            className={`shrink-0 rounded-full px-3.5 py-2 text-sm font-bold ring-2 transition-all ${
              quiz ? "bg-pink-soft/40 text-pink-ink ring-pink-deep" : "bg-white text-ink-soft ring-pink-soft/60 hover:ring-pink"
            }`}
          >
            {quiz ? "🙈 Quiz" : "👀 Quiz"}
          </button>
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {subj.words.map((w) => (
            <WordCard key={w.jp} w={w} />
          ))}
        </div>
      </div>
    );
  }

  // ---------- category / subject browse ----------
  return (
    <div>
      <Toolbar query={query} setQuery={setQuery} quiz={quiz} setQuiz={setQuiz} setRevealed={setRevealed} />

      <div className="mt-5 space-y-7">
        {vocabCategories.map((c) => (
          <div key={c.slug}>
            <h2 className="mb-3 flex items-center gap-2 font-display text-lg font-extrabold text-ink">
              <span>{c.emoji}</span> {c.label}
            </h2>
            <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
              {c.subjects.map((s) => {
                const ready = s.words.length > 0;
                return ready ? (
                  <button
                    key={s.slug}
                    onClick={() => setOpenSlug(s.slug)}
                    className={`flex items-center justify-between rounded-2xl bg-gradient-to-br p-4 text-left shadow-card ring-1 ring-white transition-all hover:-translate-y-0.5 hover:shadow-pop ${chip[c.accent]}`}
                  >
                    <span>
                      <span className="block font-bold text-ink">{s.label}</span>
                      <span className="block text-xs text-ink-soft">{s.words.length} words</span>
                    </span>
                    <Icon name="chevron" className="h-4 w-4 shrink-0 text-ink-mute" />
                  </button>
                ) : (
                  <div
                    key={s.slug}
                    className="flex items-center justify-between rounded-2xl bg-gray-soft/60 p-4 text-left ring-1 ring-transparent"
                  >
                    <span className="text-sm font-semibold text-ink-mute">{s.label}</span>
                    <span className="shrink-0 rounded-full bg-white/70 px-2 py-0.5 text-[0.6rem] font-bold text-ink-mute">
                      soon
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Toolbar({
  query, setQuery, quiz, setQuiz, setRevealed,
}: {
  query: string;
  setQuery: (v: string) => void;
  quiz: boolean;
  setQuiz: (f: (v: boolean) => boolean) => void;
  setRevealed: (s: Set<string>) => void;
}) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
      <label className="relative flex flex-1 items-center">
        <Icon name="search" className="pointer-events-none absolute left-4 h-4 w-4 text-ink-mute" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search words (English, romaji, kana, kanji)…"
          className="w-full rounded-full border border-pink-soft/60 bg-white py-2.5 pl-11 pr-4 text-sm text-ink placeholder:text-ink-mute focus:border-pink focus:outline-none focus:ring-4 focus:ring-pink/20"
        />
      </label>
      <button
        onClick={() => { setQuiz((v) => !v); setRevealed(new Set()); }}
        className={`shrink-0 rounded-full px-4 py-2.5 text-sm font-bold ring-2 transition-all ${
          quiz ? "bg-pink-soft/40 text-pink-ink ring-pink-deep" : "bg-white text-ink-soft ring-pink-soft/60 hover:ring-pink"
        }`}
      >
        {quiz ? "🙈 Quiz mode: on" : "👀 Quiz mode"}
      </button>
    </div>
  );
}
