/* Mini-game shared data: game list, difficulty configs.
   The word pool is sourced from the shared Vocabulary content (src/lib/vocab.ts),
   so adding vocabulary there automatically enriches every game. */

import { allWords, type Word } from "./vocab";

export type { Word };

// The full shared vocabulary pool that games draw from.
export const wordPool: Word[] = allWords;

export type GameMeta = {
  id: string;
  href: string;
  title: string;
  jp: string;
  icon: string;
  blurb: string;
  accent: "pink" | "blue" | "mint" | "gold" | "lilac";
  soon?: boolean;
};

export const games: GameMeta[] = [
  {
    id: "blitz",
    href: "/dashboard/games/blitz",
    title: "Word Blitz",
    jp: "ワードブリッツ",
    icon: "spark",
    blurb: "Pick the meaning before the timer runs out. How many can you get?",
    accent: "gold",
  },
  {
    id: "memory",
    href: "/dashboard/games/memory",
    title: "Memory Match",
    jp: "神経衰弱",
    icon: "cards",
    blurb: "Flip flashcards and match Japanese with English pairs.",
    accent: "pink",
  },
  {
    id: "listen",
    href: "/dashboard/games/listen",
    title: "Listen It",
    jp: "リスニング",
    icon: "mic",
    blurb: "Hear a word and tap what it means. Train your ear.",
    accent: "blue",
  },
  {
    id: "scramble",
    href: "/dashboard/games",
    title: "Sentence Scramble",
    jp: "文ならべ",
    icon: "vocab",
    blurb: "Rebuild scrambled sentences against the clock.",
    accent: "mint",
    soon: true,
  },
];

export type Difficulty = "easy" | "normal" | "hard";

export const difficulties: { id: Difficulty; label: string; note: string }[] = [
  { id: "easy", label: "Easy", note: "Relaxed pace" },
  { id: "normal", label: "Normal", note: "A fair challenge" },
  { id: "hard", label: "Hard", note: "Fast & tricky" },
];

// Per-game difficulty tuning (rewards are intentionally NOT affected).
export const blitzTime: Record<Difficulty, number> = { easy: 60, normal: 45, hard: 30 };
export const memoryPairs: Record<Difficulty, number> = { easy: 4, normal: 6, hard: 8 };
export const listenOptions: Record<Difficulty, number> = { easy: 3, normal: 4, hard: 4 };
export const listenRounds = 8;

// Fixed completion reward — same for every difficulty (per spec).
export const reward = { xp: 12, coins: 10 };

/* ---- helpers (call only in client event handlers to avoid SSR mismatch) ---- */
export function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function sample<T>(arr: T[], n: number): T[] {
  return shuffle(arr).slice(0, n);
}

/** Build a multiple-choice question: correct word + (n-1) distractor EN options. */
export function makeChoices(correct: Word, n: number): { label: string; correct: boolean }[] {
  const distractors = sample(
    wordPool.filter((w) => w.en !== correct.en),
    n - 1
  ).map((w) => ({ label: w.en, correct: false }));
  return shuffle([{ label: correct.en, correct: true }, ...distractors]);
}
