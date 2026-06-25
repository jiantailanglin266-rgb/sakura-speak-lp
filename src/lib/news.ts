/* Member-facing News articles (published by the admin CMS). Mock. */

export type Article = {
  id: string;
  tag: string;
  title: string;
  date: string;
  emoji: string;
  accent: "pink" | "blue" | "mint" | "gold" | "lilac";
  excerpt: string;
  body: string[];
};

export const articles: Article[] = [
  {
    id: "tsuyu",
    tag: "Culture",
    title: "梅雨入り — Japan's rainy season explained",
    date: "Jun 24, 2026",
    emoji: "🌧️",
    accent: "blue",
    excerpt: "Tsuyu, Japan's rainy season, has arrived. Here's what it means and the vocabulary that comes with it.",
    body: [
      "Around early June, most of Japan enters 梅雨 (tsuyu), the rainy season. It typically lasts about six weeks and brings warm, humid weather and frequent rain.",
      "You'll hear the word 梅雨入り (tsuyu-iri), meaning \"the start of the rainy season,\" all over the news. The end is called 梅雨明け (tsuyu-ake).",
      "Handy words for the season: かさ (kasa, umbrella), あめ (ame, rain), and じめじめ (jimejime, humid/muggy). Stay dry! 🌸",
    ],
  },
  {
    id: "restaurant-phrases",
    tag: "Tips",
    title: "5 polite phrases for restaurants",
    date: "Jun 23, 2026",
    emoji: "🍽️",
    accent: "pink",
    excerpt: "Sound natural the next time you eat out with these five must-know expressions.",
    body: [
      "1. すみません (sumimasen) — to get a server's attention.",
      "2. メニューをください (menyū o kudasai) — \"The menu, please.\"",
      "3. おすすめはなんですか (osusume wa nan desu ka) — \"What do you recommend?\"",
      "4. いただきます (itadakimasu) — said before eating.",
      "5. ごちそうさまでした (gochisōsama deshita) — said after the meal. Practice them in today's lesson!",
    ],
  },
  {
    id: "class-c",
    tag: "Announcement",
    title: "Class C lessons are coming soon!",
    date: "Jun 22, 2026",
    emoji: "🎉",
    accent: "gold",
    excerpt: "Fluency Builders (Lessons 41–60) are almost ready. Here's a sneak peek.",
    body: [
      "We've been hard at work on Class C — Fluency Builders. These lessons focus on richer expression, nuance, and holding longer conversations.",
      "Expect new vocabulary themes, more roleplays, and tougher mini-game word lists. Keep your streak going so you're ready when it drops!",
    ],
  },
  {
    id: "anime-night",
    tag: "Event",
    title: "Anime Night Special this Saturday",
    date: "Jun 21, 2026",
    emoji: "🎬",
    accent: "lilac",
    excerpt: "Join a watch-along voice room and learn vocabulary from popular anime scenes.",
    body: [
      "This Saturday at 21:00, hop into the Anime Night voice room. We'll go through memorable lines and the everyday Japanese hiding inside them.",
      "RSVP from the Community → Events tab and add it to your calendar so you don't miss it. See you there! 🌸",
    ],
  },
  {
    id: "streak-tips",
    tag: "Tips",
    title: "3 tiny habits to never break your streak",
    date: "Jun 19, 2026",
    emoji: "🔥",
    accent: "mint",
    excerpt: "Consistency beats intensity. Three small tricks to keep your daily streak alive.",
    body: [
      "1. Set a tiny daily goal — even 5 minutes counts. Momentum matters more than length.",
      "2. Pair learning with a habit you already have, like your morning coffee.",
      "3. Turn on streak reminders so Meemi can give you a gentle nudge. 🌸",
    ],
  },
];
