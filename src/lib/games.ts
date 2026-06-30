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
    href: "/dashboard/games/scramble",
    title: "Sentence Scramble",
    jp: "文ならべ",
    icon: "vocab",
    blurb: "Tap the words back into the right order to rebuild each sentence.",
    accent: "mint",
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

/* ---- Sentence Scramble data ---- */
export type Sentence = { tokens: string[]; en: string; romaji: string };

export const sentences: Sentence[] = [
  { tokens: ["わたし", "は", "がくせい", "です"], romaji: "watashi wa gakusei desu", en: "I am a student." },
  { tokens: ["これ", "は", "ペン", "です"], romaji: "kore wa pen desu", en: "This is a pen." },
  { tokens: ["すし", "を", "たべます"], romaji: "sushi o tabemasu", en: "I eat sushi." },
  { tokens: ["みず", "を", "ください"], romaji: "mizu o kudasai", en: "Water, please." },
  { tokens: ["まいあさ", "コーヒー", "を", "のみます"], romaji: "maiasa koohii o nomimasu", en: "I drink coffee every morning." },
  { tokens: ["えき", "は", "どこ", "ですか"], romaji: "eki wa doko desu ka", en: "Where is the station?" },
  { tokens: ["あした", "がっこう", "に", "いきます"], romaji: "ashita gakkou ni ikimasu", en: "I will go to school tomorrow." },
  { tokens: ["かれ", "は", "にほんご", "を", "はなします"], romaji: "kare wa nihongo o hanashimasu", en: "He speaks Japanese." },
  { tokens: ["この", "りんご", "は", "おいしい", "です"], romaji: "kono ringo wa oishii desu", en: "This apple is delicious." },
  { tokens: ["としょかん", "で", "ほん", "を", "よみます"], romaji: "toshokan de hon o yomimasu", en: "I read books at the library." },
  { tokens: ["でんしゃ", "で", "かいしゃ", "に", "いきます"], romaji: "densha de kaisha ni ikimasu", en: "I go to work by train." },
  { tokens: ["しゅうまつ", "に", "えいが", "を", "みます"], romaji: "shuumatsu ni eiga o mimasu", en: "I watch movies on the weekend." },
  { tokens: ["わたし", "は", "コーヒー", "が", "すき", "です"], romaji: "watashi wa koohii ga suki desu", en: "I like coffee." },
  { tokens: ["きょう", "は", "てんき", "が", "いい", "です"], romaji: "kyou wa tenki ga ii desu", en: "The weather is nice today." },
  { tokens: ["ともだち", "と", "レストラン", "で", "たべます"], romaji: "tomodachi to resutoran de tabemasu", en: "I eat at a restaurant with a friend." },
  { tokens: ["にほん", "の", "なつ", "は", "あつい", "です"], romaji: "nihon no natsu wa atsui desu", en: "Summer in Japan is hot." },
];

export const scrambleRounds = 6;
// Easy/normal limit sentence length; hard allows the longest.
export const scrambleMaxLen: Record<Difficulty, number> = { easy: 4, normal: 5, hard: 99 };

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
