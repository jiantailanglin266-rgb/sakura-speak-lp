/* Community mock data: text chatrooms & events. */

// ---------- Text chatrooms ----------
export type TextRoom = {
  id: string;
  name: string;
  jp: string;
  topic: string;
  emoji: string;
  members: number;
  online: number;
  accent: "pink" | "blue" | "mint" | "gold" | "lilac";
};

export const textRooms: TextRoom[] = [
  { id: "lounge", name: "Beginner's Lounge", jp: "ビギナーズラウンジ", topic: "Say hi and ask anything!", emoji: "🌱", members: 1240, online: 92, accent: "mint" },
  { id: "daily", name: "Daily Japanese", jp: "デイリー日本語", topic: "One phrase a day", emoji: "🌸", members: 860, online: 54, accent: "pink" },
  { id: "anime", name: "Anime & Manga", jp: "アニメ・マンガ", topic: "Talk about your faves", emoji: "🎬", members: 2030, online: 140, accent: "lilac" },
  { id: "kanji", name: "Kanji Help", jp: "漢字ヘルプ", topic: "Stuck on a kanji? Ask here", emoji: "✍️", members: 540, online: 21, accent: "blue" },
  { id: "jlpt", name: "JLPT Study", jp: "JLPT勉強", topic: "N5–N1 prep & tips", emoji: "📘", members: 980, online: 38, accent: "gold" },
];

export type ChatMsg = { user: string; text: string; role?: "Mod"; me?: boolean; time: string };

export const chatMessages: Record<string, ChatMsg[]> = {
  lounge: [
    { user: "Meemi Team", role: "Mod", text: "Welcome to the Beginner's Lounge! Be kind and have fun 🌸", time: "9:01" },
    { user: "Aiko", text: "おはよう everyone! Just finished lesson 41 😄", time: "9:12" },
    { user: "Marco", text: "Nice! I'm still on Class B haha. ganbarou!", time: "9:15" },
    { user: "Lena", text: "How do you say 'see you later'?", time: "9:18" },
    { user: "Aiko", text: "またね (mata ne) 👋", time: "9:19" },
  ],
};

export const defaultChat: ChatMsg[] = [
  { user: "Meemi Team", role: "Mod", text: "Welcome! Keep it friendly and on-topic 🌸", time: "8:30" },
  { user: "Sora", text: "こんにちは！", time: "8:41" },
];

export const cannedReplies = [
  "そうですね！ (I agree!)",
  "がんばって！ 🌸",
  "Ooh nice, thanks for sharing!",
  "Haha same here 😄",
  "Can someone explain that grammar?",
];

// ---------- Events ----------
export type EventType = "Public" | "Private" | "Event" | "Community" | "Official";

export type CommunityEvent = {
  id: string;
  title: string;
  jp: string;
  host: string;
  when: string;
  going: number;
  type: EventType;
  desc: string;
  dtStart: string; // ICS local datetime YYYYMMDDTHHMMSS
  dtEnd: string;
};

export const events: CommunityEvent[] = [
  {
    id: "cafe-talk",
    title: "Café Japanese · Casual Talk",
    jp: "カフェ日本語",
    host: "Yuki (Native)",
    when: "Today · 20:00",
    going: 24,
    type: "Public",
    desc: "Relaxed conversation practice with a native speaker. All levels welcome!",
    dtStart: "20260626T200000",
    dtEnd: "20260626T210000",
  },
  {
    id: "roleplay",
    title: "Ordering Food — Roleplay",
    jp: "注文ロールプレイ",
    host: "Meemi Team",
    when: "Tomorrow · 18:30",
    going: 41,
    type: "Community",
    desc: "Practice restaurant dialogues in small groups.",
    dtStart: "20260627T183000",
    dtEnd: "20260627T193000",
  },
  {
    id: "pron-clinic",
    title: "Beginner Pronunciation Clinic",
    jp: "発音クリニック",
    host: "Hana (Native)",
    when: "Sat · 11:00",
    going: 18,
    type: "Official",
    desc: "Fix common pronunciation habits with guided drills.",
    dtStart: "20260628T110000",
    dtEnd: "20260628T120000",
  },
  {
    id: "anime-night",
    title: "Anime Night Special",
    jp: "アニメナイト",
    host: "Meemi Team",
    when: "Sat · 21:00",
    going: 67,
    type: "Event",
    desc: "Watch-along chat & vocabulary from popular anime scenes.",
    dtStart: "20260628T210000",
    dtEnd: "20260628T223000",
  },
];

export const typeBadge: Record<EventType, string> = {
  Public: "bg-mint/40 text-[#2f9d77]",
  Private: "bg-ink/10 text-ink-soft",
  Event: "bg-[#efe7ff] text-[#7a5bd6]",
  Community: "bg-blue-soft/70 text-blue-deep",
  Official: "bg-[#fff2cc] text-gold-deep",
};
