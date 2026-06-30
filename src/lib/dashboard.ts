/* Mock data for the Student Dashboard prototype. */

export const learner = {
  displayName: "Hina",
  username: "@hina_jp",
  nativeLanguage: "English 🇬🇧",
  level: 7,
  xp: 1840,
  xpToNext: 2200,
  streak: 12,
  coins: 1280,
  rank: "Sakura",
};

export const progress = {
  overall: 34, // %
  lessonsCompleted: 27,
  lessonsTotal: 80,
  current: {
    class: "B",
    number: 28,
    title: "Ordering at a restaurant",
    subtitle: "Lesson 28 · Class B",
  },
};

export const classProgress = [
  { code: "A", title: "Foundations", pct: 100, accent: "pink" },
  { code: "B", title: "Everyday Japanese", pct: 35, accent: "blue" },
  { code: "C", title: "Fluency Builders", pct: 0, accent: "mint" },
  { code: "D", title: "Toward Fluent", pct: 0, accent: "lilac" },
] as const;

export const dailyGoal = {
  xpDone: 60,
  xpTarget: 100,
  lessonsDone: 1,
  lessonsTarget: 2,
};

// last 7 days, Mon→Sun; true = practiced
export const week = [
  { day: "M", done: true },
  { day: "T", done: true },
  { day: "W", done: true },
  { day: "T", done: true },
  { day: "F", done: true },
  { day: "S", done: false },
  { day: "S", done: false },
];

export type Portal = {
  key: string;
  icon: string;
  title: string;
  jp: string;
  blurb: string;
  meta: string;
  accent: "pink" | "blue" | "mint" | "gold" | "lilac";
  locked?: boolean;
};

export const portals: Portal[] = [
  {
    key: "lessons",
    icon: "book",
    title: "Lessons",
    jp: "レッスン",
    blurb: "Continue your 80-lesson journey, Class A → D.",
    meta: "27 / 80 done",
    accent: "pink",
  },
  {
    key: "vocab",
    icon: "vocab",
    title: "Vocabulary Sheets",
    jp: "単語シート",
    blurb: "Words grouped by situation — Kitchen, Travel, Doctor…",
    meta: "8 categories",
    accent: "blue",
  },
  {
    key: "anime",
    icon: "film",
    title: "Anime Learning",
    jp: "アニメで学ぶ",
    blurb: "Learn from official anime trailers, clips & cultural videos.",
    meta: "New ✦",
    accent: "lilac",
  },
  {
    key: "review",
    icon: "review",
    title: "Review Sheets",
    jp: "復習シート",
    blurb: "Quick summaries to lock in what you've learned.",
    meta: "5 due today",
    accent: "mint",
  },
  {
    key: "games",
    icon: "game",
    title: "Mini-Games",
    jp: "ミニゲーム",
    blurb: "Flashcards & quick games. Earn XP and coins.",
    meta: "4 games",
    accent: "gold",
  },
  {
    key: "chat",
    icon: "chat",
    title: "Chatrooms",
    jp: "チャット",
    blurb: "Practice with learners in text rooms & community events.",
    meta: "8 active now",
    accent: "lilac",
  },
  {
    key: "news",
    icon: "news",
    title: "News",
    jp: "ニュース",
    blurb: "Fresh reading material, updated regularly.",
    meta: "3 new",
    accent: "blue",
  },
  {
    key: "profile",
    icon: "profile",
    title: "Profile",
    jp: "プロフィール",
    blurb: "Your badges, followers and Meemi avatar.",
    meta: "Level 7",
    accent: "mint",
  },
];

export const recentAchievements = [
  { name: "Class A Complete", tier: "Gold", icon: "🎓" },
  { name: "7 Day Streak", tier: "Silver", icon: "🔥" },
  { name: "First Message", tier: "Bronze", icon: "💬" },
  { name: "100 Words", tier: "Sakura", icon: "🌸" },
];

export const events = [
  {
    title: "Café Japanese · Casual Talk",
    host: "Yuki (Native)",
    time: "Today · 20:00",
    going: 24,
    live: true,
  },
  {
    title: "Ordering Food — Roleplay",
    host: "Meemi Team",
    time: "Tomorrow · 18:30",
    going: 41,
    live: false,
  },
  {
    title: "Beginner Pronunciation Clinic",
    host: "Hana (Native)",
    time: "Sat · 11:00",
    going: 18,
    live: false,
  },
];

export const friends = [
  { name: "Aiko", initials: "AK", xp: 920, you: false },
  { name: "You (Hina)", initials: "HN", xp: 740, you: true },
  { name: "Marco", initials: "MC", xp: 610, you: false },
  { name: "Sora", initials: "SR", xp: 480, you: false },
];

export const news = [
  {
    tag: "Culture",
    title: "梅雨入り — Japan's rainy season explained",
    time: "2h ago",
  },
  {
    tag: "Tips",
    title: "5 polite phrases for restaurants",
    time: "1d ago",
  },
];

export const navItems = [
  { key: "home", icon: "home", label: "Home", active: true },
  { key: "lessons", icon: "book", label: "Lessons", active: false },
  { key: "vocab", icon: "vocab", label: "Vocabulary", active: false },
  { key: "anime", icon: "film", label: "Anime Learning", active: false },
  { key: "review", icon: "review", label: "Review", active: false },
  { key: "games", icon: "game", label: "Games", active: false },
  { key: "chat", icon: "chat", label: "Chatrooms", active: false },
  { key: "news", icon: "news", label: "News", active: false },
  { key: "profile", icon: "profile", label: "Profile", active: false },
] as const;
