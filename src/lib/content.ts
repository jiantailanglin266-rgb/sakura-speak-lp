/* All marketing copy & data for the public LP lives here. */

export type Feature = {
  icon: string;
  title: string;
  jp: string;
  desc: string;
  accent: "pink" | "blue" | "gold" | "mint" | "lilac";
};

export const features: Feature[] = [
  {
    icon: "dashboard",
    title: "Your learning command center",
    jp: "ダッシュボード",
    desc: "A home base — not just a dashboard. Progress gauges, portals to every feature, and a world that makes you want to come back.",
    accent: "pink",
  },
  {
    icon: "book",
    title: "80 structured lessons",
    jp: "全80レッスン",
    desc: "Four classes (A–D) take you step by step from your very first word to confident, flowing conversation.",
    accent: "blue",
  },
  {
    icon: "cards",
    title: "Vocabulary & review sheets",
    jp: "単語・復習シート",
    desc: "Words grouped by real situations — Kitchen, Doctor, Restaurant, Travel — plus quick review summaries that make revisiting easy.",
    accent: "mint",
  },
  {
    icon: "game",
    title: "Mini-games & flashcards",
    jp: "ミニゲーム",
    desc: "Light, replayable games with XP, coins and streaks. Easy, Normal, Hard — pick your comfort, never your reward.",
    accent: "gold",
  },
  {
    icon: "chat",
    title: "Text & voice chatrooms",
    jp: "コミュニティ",
    desc: "Practice for real. Join rooms, attend voice events with native speakers, and grow alongside fellow learners.",
    accent: "lilac",
  },
  {
    icon: "trophy",
    title: "Achievements & streaks",
    jp: "実績システム",
    desc: "Bronze to Sakura to Platinum. Celebrate every milestone with glowing reward pop-ups that keep momentum alive.",
    accent: "pink",
  },
];

export type ClassInfo = {
  code: string;
  range: string;
  title: string;
  desc: string;
  accent: "pink" | "blue" | "mint" | "lilac";
};

export const classes: ClassInfo[] = [
  {
    code: "A",
    range: "Lessons 1–20",
    title: "Foundations",
    desc: "Hiragana, katakana, first words and survival phrases. Start speaking from day one.",
    accent: "pink",
  },
  {
    code: "B",
    range: "Lessons 21–40",
    title: "Everyday Japanese",
    desc: "Daily conversations, particles, and the grammar that powers real sentences.",
    accent: "blue",
  },
  {
    code: "C",
    range: "Lessons 41–60",
    title: "Fluency Builders",
    desc: "Richer expression, nuance, and the confidence to hold longer conversations.",
    accent: "mint",
  },
  {
    code: "D",
    range: "Lessons 61–80",
    title: "Toward Fluent",
    desc: "Natural, flowing Japanese — the finish line of a complete, structured journey.",
    accent: "lilac",
  },
];

export type Plan = {
  name: string;
  price: string;
  period: string;
  note: string;
  perMonth?: string;
  featured?: boolean;
  badge?: string;
};

export const plans: Plan[] = [
  {
    name: "Monthly",
    price: "$14.99",
    period: "per month",
    note: "Flexible, cancel anytime.",
  },
  {
    name: "3-Month",
    price: "$39.99",
    period: "every 3 months",
    perMonth: "≈ $13.33 / mo",
    note: "A little more, a little cheaper.",
  },
  {
    name: "Yearly",
    price: "$119.99",
    period: "per year",
    perMonth: "≈ $10.00 / mo",
    featured: true,
    badge: "Most popular",
    note: "Best value for a full year of progress.",
  },
  {
    name: "Lifetime",
    price: "$215.99",
    period: "once, forever",
    note: "Pay once. Learn for life.",
  },
];

export const planNotes = [
  "Every plan unlocks the exact same content & features — only the duration differs.",
  "Auto-renews. Coupons & discount codes supported. Multi-currency at checkout.",
  "Cancel anytime; refunds aren't issued for forgotten cancellations.",
];

export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "Is there a free trial?",
    a: "Yes — every new user gets a 3-day free trial with full access. No commitment until you decide Sakura Speak is for you.",
  },
  {
    q: "What's the difference between the plans?",
    a: "Nothing except how long you keep access. There are no premium-locked lessons or paywalled features — everyone learns from the same complete platform.",
  },
  {
    q: "How do I sign in?",
    a: "Sign in with Google, Apple, or a regular email and password. Email verification is required, and you can stay signed in on up to 2 devices.",
  },
  {
    q: "Do I need to be a beginner?",
    a: "Not at all. The 80-lesson curriculum starts from absolute zero, but vocabulary sheets, review sheets and mini-games let you jump in wherever suits you.",
  },
  {
    q: "What is Meemi?",
    a: "Meemi is your companion mascot — your customizable avatar and a friendly guide throughout the app. Start with the classic white-fur, blue-eyed Meemi and make it your own.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. Manage or cancel your subscription whenever you like. We'll show a short, optional survey so we can keep improving Sakura Speak.",
  },
];

export const stats = [
  { value: "80", label: "structured lessons" },
  { value: "4", label: "classes, A → D" },
  { value: "3-day", label: "free trial" },
  { value: "∞", label: "ways to play & learn" },
];
