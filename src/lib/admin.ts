/* Admin CMS mock data: roles/permissions, users, news, events, reports. */

export type SectionKey =
  | "overview"
  | "news"
  | "events"
  | "users"
  | "moderation"
  | "roles"
  | "settings";

export type RoleId = "super" | "moderator" | "host" | "editor";

export const roles: Record<RoleId, { label: string; desc: string; perms: SectionKey[] }> = {
  super: {
    label: "Super Admin",
    desc: "Full access to everything.",
    perms: ["overview", "news", "events", "users", "moderation", "roles", "settings"],
  },
  moderator: {
    label: "Moderator",
    desc: "Handle reports, mute / suspend / ban users.",
    perms: ["overview", "users", "moderation"],
  },
  host: {
    label: "Event Host",
    desc: "Create and run events & voice rooms.",
    perms: ["overview", "events"],
  },
  editor: {
    label: "Content Editor",
    desc: "Write and publish News.",
    perms: ["overview", "news"],
  },
};

export const sectionMeta: Record<SectionKey, { label: string; icon: string }> = {
  overview: { label: "Overview", icon: "dashboard" },
  news: { label: "News", icon: "news" },
  events: { label: "Events", icon: "calendar" },
  users: { label: "Users", icon: "profile" },
  moderation: { label: "Moderation", icon: "shield" },
  roles: { label: "Roles & access", icon: "gem" },
  settings: { label: "Site settings", icon: "spark" },
};

export const stats = [
  { label: "Total users", value: "12,480", icon: "profile", delta: "+182 this week" },
  { label: "Active today", value: "3,114", icon: "spark", delta: "DAU" },
  { label: "Pending reports", value: "4", icon: "shield", delta: "needs review" },
  { label: "Published news", value: "23", icon: "news", delta: "+2 this week" },
];

export const recentActivity = [
  { icon: "news", text: "“梅雨入り explained” published by Content Editor", time: "2h ago" },
  { icon: "shield", text: "User @spam_bot_22 banned by Moderator", time: "5h ago" },
  { icon: "calendar", text: "Event “Anime Night” scheduled by Event Host", time: "1d ago" },
  { icon: "profile", text: "182 new sign-ups", time: "1d ago" },
];

export type NewsStatus = "published" | "draft";
export type NewsPost = {
  id: string;
  title: string;
  tag: string;
  body: string;
  status: NewsStatus;
  date: string;
};

export const newsSeed: NewsPost[] = [
  { id: "n1", title: "梅雨入り — Japan's rainy season explained", tag: "Culture", body: "Japan's rainy season (tsuyu) usually starts in early June...", status: "published", date: "Jun 24, 2026" },
  { id: "n2", title: "5 polite phrases for restaurants", tag: "Tips", body: "Sound natural when ordering with these handy expressions...", status: "published", date: "Jun 23, 2026" },
  { id: "n3", title: "New: Class C lessons are coming!", tag: "Announcement", body: "We're putting the finishing touches on Class C...", status: "draft", date: "Jun 25, 2026" },
];

export const newsTags = ["Culture", "Tips", "Announcement", "Event", "Update"];

export type EventStatus = "scheduled" | "live" | "ended";
export type AdminEvent = { id: string; title: string; host: string; when: string; status: EventStatus; going: number };

export const eventsSeed: AdminEvent[] = [
  { id: "e1", title: "Café Japanese · Casual Talk", host: "Yuki", when: "Today · 20:00", status: "live", going: 24 },
  { id: "e2", title: "Ordering Food — Roleplay", host: "Meemi Team", when: "Tomorrow · 18:30", status: "scheduled", going: 41 },
  { id: "e3", title: "Anime Night Special", host: "Meemi Team", when: "Sat · 21:00", status: "scheduled", going: 67 },
  { id: "e4", title: "Hiragana Bootcamp", host: "Hana", when: "Jun 20 · 19:00", status: "ended", going: 88 },
];

export type UserStatus = "active" | "suspended" | "banned";
export type AdminUser = {
  id: string;
  name: string;
  username: string;
  email: string;
  role: string;
  status: UserStatus;
  joined: string;
  flags: number;
};

export const usersSeed: AdminUser[] = [
  { id: "u1", name: "Aiko", username: "@aiko_learns", email: "aiko@example.com", role: "Learner", status: "active", joined: "Jan 2026", flags: 0 },
  { id: "u2", name: "Marco", username: "@marco_jp", email: "marco@example.com", role: "Learner", status: "active", joined: "Apr 2026", flags: 0 },
  { id: "u3", name: "Yuki", username: "@yuki_native", email: "yuki@example.com", role: "Event Host", status: "active", joined: "Nov 2025", flags: 0 },
  { id: "u4", name: "SpamBot", username: "@spam_bot_22", email: "spam@example.com", role: "Learner", status: "active", joined: "Jun 2026", flags: 5 },
  { id: "u5", name: "Lena", username: "@lena_k", email: "lena@example.com", role: "Learner", status: "suspended", joined: "Mar 2026", flags: 2 },
  { id: "u6", name: "Hana", username: "@hana_sensei", email: "hana@example.com", role: "Content Editor", status: "active", joined: "Dec 2025", flags: 0 },
];

export type Report = {
  id: string;
  kind: "message" | "user";
  target: string;
  reporter: string;
  reason: string;
  context: string;
  where: string;
};

export const reportsSeed: Report[] = [
  { id: "r1", kind: "message", target: "@spam_bot_22", reporter: "@aiko_learns", reason: "Spam / links", context: "“Free coins!! visit my-site .com 🔥🔥”", where: "Beginner's Lounge" },
  { id: "r2", kind: "user", target: "@rude_guy", reporter: "@marco_jp", reason: "Harassment", context: "Repeated rude comments in voice room", where: "Café Japanese" },
  { id: "r3", kind: "message", target: "@lena_k", reporter: "@hana_sensei", reason: "Off-topic", context: "“buy followers here”", where: "JLPT Study" },
  { id: "r4", kind: "user", target: "@troll_99", reporter: "@yuki_native", reason: "Abuse", context: "Toxic behavior, multiple warnings", where: "Multiple rooms" },
];
