/* Lesson content (interactive flow) + lessons list. Mock data. */

export type Step =
  | { type: "intro"; title: string; objectives: string[] }
  | { type: "teach"; jp: string; romaji: string; en: string; note?: string }
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

export const sampleLesson: Lesson = {
  id: "b-28",
  cls: "B",
  number: 28,
  title: "Ordering at a restaurant",
  jpTitle: "レストランで注文する",
  xp: 15,
  coins: 15,
  steps: [
    {
      type: "intro",
      title: "Ordering at a restaurant",
      objectives: [
        "Get a server's attention politely",
        "Ask for the menu, water and dishes",
        "Ask what's recommended",
      ],
    },
    {
      type: "teach",
      jp: "すみません",
      romaji: "sumimasen",
      en: "Excuse me",
      note: "Use this to politely get a server's attention.",
    },
    {
      type: "teach",
      jp: "メニュー",
      romaji: "menyū",
      en: "Menu",
      note: "A katakana loanword from English.",
    },
    {
      type: "choice",
      prompt: "What does this word mean?",
      jp: "メニュー",
      audio: "メニュー",
      options: [
        { label: "Menu", correct: true },
        { label: "Water" },
        { label: "Bill" },
        { label: "Spoon" },
      ],
    },
    {
      type: "teach",
      jp: "ください",
      romaji: "kudasai",
      en: "Please (give me)",
      note: "Add after a noun + を to ask for something.",
    },
    {
      type: "arrange",
      prompt: "Build the sentence",
      en: "The menu, please.",
      tiles: ["を", "ください", "メニュー"],
      answer: ["メニュー", "を", "ください"],
    },
    {
      type: "teach",
      jp: "みず",
      romaji: "mizu",
      en: "Water",
    },
    {
      type: "listen",
      audio: "みずをください",
      prompt: "Tap to listen — what did you hear?",
      options: [
        { label: "みずをください", correct: true },
        { label: "メニューをください" },
        { label: "これをください" },
      ],
    },
    {
      type: "teach",
      jp: "おすすめ",
      romaji: "osusume",
      en: "Recommendation",
    },
    {
      type: "choice",
      prompt: "How do you say “Water”?",
      options: [
        { label: "みず", correct: true },
        { label: "メニュー" },
        { label: "おすすめ" },
        { label: "ください" },
      ],
    },
    {
      type: "match",
      prompt: "Match the pairs",
      pairs: [
        { jp: "すみません", en: "Excuse me" },
        { jp: "メニュー", en: "Menu" },
        { jp: "みず", en: "Water" },
        { jp: "ください", en: "Please" },
      ],
    },
    {
      type: "choice",
      prompt: "Ask: “What do you recommend?”",
      options: [
        { label: "おすすめはなんですか", correct: true },
        { label: "いくらですか" },
        { label: "メニューをください" },
      ],
    },
  ],
};

// ---------- Lessons list (Class A → D) ----------
export type LessonNode = {
  n: number;
  title: string;
  state: "done" | "current" | "locked";
};

export type ClassSection = {
  code: string;
  title: string;
  accent: "pink" | "blue" | "mint" | "lilac";
  range: string;
  lessons: LessonNode[];
};

export const classSections: ClassSection[] = [
  {
    code: "A",
    title: "Foundations",
    accent: "pink",
    range: "Lessons 1–20",
    lessons: [
      { n: 1, title: "Hiragana basics", state: "done" },
      { n: 2, title: "Greetings", state: "done" },
      { n: 3, title: "Self introduction", state: "done" },
      { n: 4, title: "Numbers 1–10", state: "done" },
      { n: 5, title: "This & that", state: "done" },
    ],
  },
  {
    code: "B",
    title: "Everyday Japanese",
    accent: "blue",
    range: "Lessons 21–40",
    lessons: [
      { n: 26, title: "At the station", state: "done" },
      { n: 27, title: "Buying a ticket", state: "done" },
      { n: 28, title: "Ordering at a restaurant", state: "current" },
      { n: 29, title: "Talking about food", state: "locked" },
      { n: 30, title: "Making plans", state: "locked" },
    ],
  },
  {
    code: "C",
    title: "Fluency Builders",
    accent: "mint",
    range: "Lessons 41–60",
    lessons: [
      { n: 41, title: "Giving opinions", state: "locked" },
      { n: 42, title: "Past experiences", state: "locked" },
    ],
  },
  {
    code: "D",
    title: "Toward Fluent",
    accent: "lilac",
    range: "Lessons 61–80",
    lessons: [
      { n: 61, title: "Nuance & politeness", state: "locked" },
      { n: 62, title: "Storytelling", state: "locked" },
    ],
  },
];
