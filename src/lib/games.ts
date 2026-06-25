/* Mini-game shared data: word pool, game list, difficulty configs. Mock. */

export type Word = { jp: string; romaji: string; en: string };

export const wordPool: Word[] = [
  { jp: "みず", romaji: "mizu", en: "Water" },
  { jp: "メニュー", romaji: "menyū", en: "Menu" },
  { jp: "おすすめ", romaji: "osusume", en: "Recommendation" },
  { jp: "ありがとう", romaji: "arigatō", en: "Thank you" },
  { jp: "すみません", romaji: "sumimasen", en: "Excuse me" },
  { jp: "ねこ", romaji: "neko", en: "Cat" },
  { jp: "いぬ", romaji: "inu", en: "Dog" },
  { jp: "がっこう", romaji: "gakkō", en: "School" },
  { jp: "でんしゃ", romaji: "densha", en: "Train" },
  { jp: "ほん", romaji: "hon", en: "Book" },
  { jp: "みせ", romaji: "mise", en: "Shop" },
  { jp: "たべもの", romaji: "tabemono", en: "Food" },
  { jp: "のみもの", romaji: "nomimono", en: "Drink" },
  { jp: "あさ", romaji: "asa", en: "Morning" },
  { jp: "よる", romaji: "yoru", en: "Night" },
  { jp: "やま", romaji: "yama", en: "Mountain" },
  { jp: "うみ", romaji: "umi", en: "Sea" },
  { jp: "かぞく", romaji: "kazoku", en: "Family" },
  { jp: "ともだち", romaji: "tomodachi", en: "Friend" },
  { jp: "せんせい", romaji: "sensei", en: "Teacher" },
];

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
