/* Lesson engine: step/lesson types, the full 80-lesson syllabus (Class A–D),
   and a registry of authored (playable) lessons.

   Authored content lives in per-class files (e.g. lessons-classA.ts) and is
   registered below. The lessons map (LessonMap) is driven by `syllabus`, so the
   full course is visible while lessons are filled in batch by batch. */

export type Step =
  | { type: "intro"; title: string; objectives: string[] }
  | { type: "teach"; jp: string; romaji: string; en: string; note?: string; label?: string }
  | {
      type: "choice";
      prompt: string;
      jp?: string;
      audio?: string;
      options: { label: string; correct?: boolean }[];
    }
  | {
      type: "listen";
      audio: string;
      prompt: string;
      options: { label: string; correct?: boolean }[];
    }
  | { type: "arrange"; prompt: string; en: string; tiles: string[]; answer: string[] }
  | { type: "match"; prompt: string; pairs: { jp: string; en: string }[] };

export type Lesson = {
  id: string;
  cls: string;
  number: number;
  title: string;
  jpTitle: string;
  xp: number;
  coins: number;
  steps: Step[];
};

/* ---------------- Syllabus (all 80) ---------------- */
export type ClassCode = "A" | "B" | "C" | "D";
export type SyllabusEntry = { id: string; cls: ClassCode; n: number; title: string; jpTitle: string };

export const classMeta: { code: ClassCode; title: string; accent: "pink" | "blue" | "mint" | "lilac"; range: string }[] = [
  { code: "A", title: "Foundations", accent: "pink", range: "Lessons 1–20" },
  { code: "B", title: "Everyday Japanese", accent: "blue", range: "Lessons 21–40" },
  { code: "C", title: "Fluency Builders", accent: "mint", range: "Lessons 41–60" },
  { code: "D", title: "Toward Fluent", accent: "lilac", range: "Lessons 61–80" },
];

const A = (n: number, title: string, jpTitle: string): SyllabusEntry => ({ id: `a-${n}`, cls: "A", n, title, jpTitle });
const B = (n: number, title: string, jpTitle: string): SyllabusEntry => ({ id: `b-${n}`, cls: "B", n, title, jpTitle });
const C = (n: number, title: string, jpTitle: string): SyllabusEntry => ({ id: `c-${n}`, cls: "C", n, title, jpTitle });
const D = (n: number, title: string, jpTitle: string): SyllabusEntry => ({ id: `d-${n}`, cls: "D", n, title, jpTitle });

export const syllabus: SyllabusEntry[] = [
  // Class A — Foundations
  A(1, "Greetings", "あいさつ"),
  A(2, "Polite basics", "基本のていねい語"),
  A(3, "Self-introduction", "自己紹介"),
  A(4, "Numbers 1–10", "数字 1〜10"),
  A(5, "This & that", "これ・それ・あれ"),
  A(6, "Days & time basics", "曜日と時間"),
  A(7, "What is this?", "これは何ですか"),
  A(8, "Family", "家族"),
  A(9, "Likes & dislikes", "好き・きらい"),
  A(10, "Colors", "色"),
  A(11, "Food & drink basics", "食べ物・飲み物"),
  A(12, "Basic adjectives", "基本の形容詞"),
  A(13, "Where is it?", "場所をたずねる"),
  A(14, "Everyday verbs", "毎日の動詞"),
  A(15, "Counting things", "ものの数え方"),
  A(16, "The calendar", "カレンダー"),
  A(17, "Weather", "天気"),
  A(18, "Shopping basics", "買い物の基本"),
  A(19, "Asking directions", "道をたずねる"),
  A(20, "Review: simple talk", "復習：かんたん会話"),
  // Class B — Everyday Japanese
  B(21, "Telling time", "時間を言う"),
  B(22, "Daily routine", "一日の流れ"),
  B(23, "At the station", "駅で"),
  B(24, "Buying a ticket", "切符を買う"),
  B(25, "Taking the train", "電車に乗る"),
  B(26, "Asking directions", "道案内"),
  B(27, "At a convenience store", "コンビニで"),
  B(28, "Ordering at a restaurant", "レストランで注文する"),
  B(29, "Talking about food", "食べ物の話"),
  B(30, "Making plans", "予定を立てる"),
  B(31, "Inviting someone", "さそう"),
  B(32, "On the phone", "電話で"),
  B(33, "Shopping for clothes", "服を買う"),
  B(34, "At the post office", "郵便局で"),
  B(35, "At the bank", "銀行で"),
  B(36, "Feeling sick", "体調が悪い"),
  B(37, "Hobbies & free time", "趣味と休日"),
  B(38, "Weather & seasons", "天気と季節"),
  B(39, "Describing people", "人を説明する"),
  B(40, "Review: everyday talk", "復習：日常会話"),
  // Class C — Fluency Builders
  C(41, "Giving opinions", "意見を言う"),
  C(42, "Past experiences", "過去の経験"),
  C(43, "Comparing things", "比べる"),
  C(44, "Giving reasons", "理由を言う"),
  C(45, "Permission & prohibition", "許可と禁止"),
  C(46, "Obligation", "しなければならない"),
  C(47, "Want & intend", "〜たい・つもり"),
  C(48, "Try doing", "〜てみる"),
  C(49, "Conditionals", "条件 〜たら・ば"),
  C(50, "Te-form connections", "て形でつなぐ"),
  C(51, "Casual speech", "タメ口"),
  C(52, "Honorifics intro", "敬語の入り口"),
  C(53, "Workplace Japanese", "職場の日本語"),
  C(54, "Polite requests", "ていねいなお願い"),
  C(55, "Apologizing & thanking", "謝罪とお礼"),
  C(56, "Storytelling basics", "話の組み立て"),
  C(57, "Expressing emotions", "気持ちを表す"),
  C(58, "Travel conversations", "旅行の会話"),
  C(59, "Routines & frequency", "頻度と習慣"),
  C(60, "Review: fluency", "復習：運用力"),
  // Class D — Toward Fluent
  D(61, "Nuance & politeness", "ニュアンスと丁寧さ"),
  D(62, "Storytelling", "ストーリーテリング"),
  D(63, "Giving presentations", "プレゼン"),
  D(64, "Persuading", "説得する"),
  D(65, "Idioms & set phrases", "慣用句"),
  D(66, "Onomatopoeia in speech", "会話の擬音語"),
  D(67, "Respectful keigo", "尊敬語"),
  D(68, "Humble keigo", "謙譲語"),
  D(69, "Business emails", "ビジネスメール"),
  D(70, "News & current events", "ニュースと時事"),
  D(71, "Reading short articles", "短い記事を読む"),
  D(72, "Subtle feelings", "微妙な気持ち"),
  D(73, "Hypothetical & regret", "仮定と後悔"),
  D(74, "Reported speech", "伝聞・引用"),
  D(75, "Advanced conjunctions", "上級の接続"),
  D(76, "Slang & youth speech", "スラング"),
  D(77, "Job interview Japanese", "面接の日本語"),
  D(78, "Cultural etiquette", "文化とマナー"),
  D(79, "Free conversation", "フリートーク"),
  D(80, "Capstone review", "総まとめ"),
];

/* ---------------- Authored (playable) lessons ---------------- */
import { classALessons } from "./lessons-classA";
import { classBLessons } from "./lessons-classB";
import { classCLessons } from "./lessons-classC";

const authored: Lesson[] = [...classALessons, ...classBLessons, ...classCLessons];

export const lessonsById: Record<string, Lesson> = Object.fromEntries(
  authored.map((l) => [l.id, l])
);

export const playableIds: string[] = authored.map((l) => l.id);

export function getLesson(id: string): Lesson | null {
  return lessonsById[id] ?? null;
}

// Back-compat: the legacy /dashboard/lesson page renders this sample.
export const sampleLesson: Lesson = lessonsById["a-1"] ?? authored[0];
