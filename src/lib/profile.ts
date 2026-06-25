/* Profile & social mock data. */
import { defaultConfig, type AvatarConfig } from "./avatar";

export type Achievement = {
  name: string;
  tier: "Bronze" | "Silver" | "Gold" | "Sakura" | "Platinum";
  icon: string;
};

export type Activity = { icon: string; text: string; time: string };

export type Profile = {
  id: string;
  displayName: string;
  username: string;
  bio: string;
  nativeLanguage: string;
  level: number;
  streak: number;
  joined: string;
  followers: number;
  following: number;
  coins?: number; // only set for "me"; never shown for others
  isPrivate: boolean;
  avatar: AvatarConfig;
  badges: Achievement[];
  activity: Activity[];
};

// Full achievement catalog (used to show locked + unlocked on your own profile)
export const achievementCatalog: (Achievement & { desc: string })[] = [
  { name: "First Lesson", tier: "Bronze", icon: "🎀", desc: "Complete your first lesson" },
  { name: "Class A Complete", tier: "Gold", icon: "🎓", desc: "Finish all of Class A" },
  { name: "7 Day Streak", tier: "Silver", icon: "🔥", desc: "Practice 7 days in a row" },
  { name: "30 Day Streak", tier: "Gold", icon: "🔥", desc: "Practice 30 days in a row" },
  { name: "100 Words", tier: "Sakura", icon: "🌸", desc: "Learn 100 words" },
  { name: "First Voice Room", tier: "Bronze", icon: "🎙️", desc: "Join a voice room" },
  { name: "Game Master", tier: "Silver", icon: "🎮", desc: "Play 25 mini-games" },
  { name: "Event Host", tier: "Platinum", icon: "👑", desc: "Host a community event" },
];

// Names the "me" profile has unlocked
export const myUnlocked = new Set([
  "First Lesson",
  "Class A Complete",
  "7 Day Streak",
  "100 Words",
  "First Voice Room",
  "Game Master",
]);

export const me: Profile = {
  id: "me",
  displayName: "Hina",
  username: "@hina_jp",
  bio: "Learning Japanese to travel and make friends across Japan 🌸 Slow but steady — every day counts!",
  nativeLanguage: "English 🇬🇧",
  level: 7,
  streak: 12,
  joined: "March 2026",
  followers: 128,
  following: 86,
  coins: 1280,
  isPrivate: false,
  avatar: defaultConfig,
  badges: achievementCatalog.filter((a) => myUnlocked.has(a.name)),
  activity: [
    { icon: "book", text: "Completed Lesson 27 · Buying a ticket", time: "2h ago" },
    { icon: "game", text: "Played Word Blitz — best combo 9", time: "5h ago" },
    { icon: "fire", text: "Reached a 12-day streak", time: "1d ago" },
    { icon: "trophy", text: "Unlocked “Game Master”", time: "2d ago" },
    { icon: "mic", text: "Joined Café Japanese voice room", time: "4d ago" },
  ],
};

export const otherUsers: Profile[] = [
  {
    id: "aiko",
    displayName: "Aiko",
    username: "@aiko_learns",
    bio: "JLPT N3 someday! Love dramas and conbini snacks.",
    nativeLanguage: "Spanish 🇪🇸",
    level: 9,
    streak: 21,
    joined: "January 2026",
    followers: 240,
    following: 119,
    isPrivate: false,
    avatar: { ...defaultConfig, fur: "#fff0d9", eye: "#8fe0a8", top: "#9fe3c5", bottom: "#c9b6ff", hair: "bangs", hairColor: "#2f2b30" },
    badges: achievementCatalog.filter((a) =>
      ["Class A Complete", "30 Day Streak", "100 Words", "Game Master"].includes(a.name)
    ),
    activity: [
      { icon: "book", text: "Completed Lesson 41 · Giving opinions", time: "3h ago" },
      { icon: "fire", text: "Reached a 21-day streak", time: "1d ago" },
    ],
  },
  {
    id: "marco",
    displayName: "Marco",
    username: "@marco_jp",
    bio: "Ciao! Studying for a trip to Kyoto 🗼",
    nativeLanguage: "Italian 🇮🇹",
    level: 5,
    streak: 6,
    joined: "April 2026",
    followers: 54,
    following: 73,
    isPrivate: false,
    avatar: { ...defaultConfig, fur: "#f3d9b1", eye: "#b07a4a", top: "#8fd6ff", shoes: "#3a3a42" },
    badges: achievementCatalog.filter((a) => ["First Lesson", "7 Day Streak"].includes(a.name)),
    activity: [{ icon: "game", text: "Played Memory Match", time: "6h ago" }],
  },
  {
    id: "sora",
    displayName: "Sora",
    username: "@sora_88",
    bio: "🔒",
    nativeLanguage: "Korean 🇰🇷",
    level: 12,
    streak: 64,
    joined: "November 2025",
    followers: 512,
    following: 90,
    isPrivate: true,
    avatar: { ...defaultConfig, fur: "#d9dde3", eye: "#b59cff", lashes: true, top: "#f7a8c4", frame: "sakura", hair: "ponytail", hairColor: "#7db8e8" },
    badges: achievementCatalog.filter((a) =>
      ["Class A Complete", "30 Day Streak", "Event Host", "100 Words"].includes(a.name)
    ),
    activity: [{ icon: "trophy", text: "Unlocked “Event Host”", time: "2d ago" }],
  },
];
