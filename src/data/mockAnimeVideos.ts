/* Mock data for Anime Learning — used whenever the YouTube API key is not set,
   so the screen always works (and is the demo/preview content). When the API is
   configured (lib/youtube.ts), live official videos replace these. */

import type { AnimeVideo, AnimePhrase, TodayWord } from "@/types/animeLearning";

export const todaysAnimeJapanese: TodayWord = {
  jp: "やばい",
  romaji: "yabai",
  meaning: "awesome / dangerous / crazy",
  usage: "A very common casual expression used in many situations — good or bad.",
};

/* Sample useful phrases (shown in the modal; reused as a sensible default). */
export const samplePhrases: AnimePhrase[] = [
  { jp: "ありがとう", romaji: "arigatō", en: "Thank you", context: "Casual thanks among friends." },
  { jp: "大丈夫？", romaji: "daijōbu?", en: "Are you okay?", context: "Checking on someone — very common." },
  { jp: "やばい", romaji: "yabai", en: "Amazing / dangerous / crazy", context: "Meaning depends entirely on tone & situation." },
  { jp: "いくぞ", romaji: "iku zo", en: "Let's go!", context: "Punchy, masculine call to action before a fight or move." },
  { jp: "本当？", romaji: "hontō?", en: "Really?", context: "Surprised reaction to news." },
];

const defaultNotes = [
  "This video is great for hearing natural Japanese rhythm and intonation.",
  "Try to catch short, emotional expressions used in the moment.",
  "Pay attention to casual sentence endings such as よ, ね, だ, じゃない.",
];

/* Helper to keep the mock list concise. */
function v(
  id: string,
  title: string,
  channel: string,
  level: AnimeVideo["level"],
  genre: string,
  duration: string,
  extra?: Partial<AnimeVideo>
): AnimeVideo {
  return {
    id,
    title,
    channel,
    official: true,
    level,
    genre,
    duration,
    notes: defaultNotes,
    phrases: samplePhrases.slice(0, 4),
    vocab: [
      { jp: "戦う", romaji: "tatakau", en: "to fight" },
      { jp: "友達", romaji: "tomodachi", en: "friend" },
      { jp: "夢", romaji: "yume", en: "dream" },
      { jp: "世界", romaji: "sekai", en: "world" },
    ],
    ...extra,
  };
}

export const mockAnimeVideos: AnimeVideo[] = [
  // Beginner
  v("MOCK_BG1", "Pokémon — Official Japanese Trailer", "Pokémon Official (公式)", "Beginner", "Adventure / Kids", "1:48"),
  v("MOCK_BG2", "Studio Ghibli — Official Trailer (Japanese)", "Studio Ghibli Official", "Beginner", "Slice of Life / Film", "2:05"),
  v("MOCK_BG3", "NHK アニメ — Easy Japanese for Beginners", "NHK Official", "Beginner", "Educational", "3:20"),
  // Intermediate
  v("MOCK_IN1", "Anime PV — Official (公式PV)", "Aniplex Official", "Intermediate", "Action / Fantasy", "1:32"),
  v("MOCK_IN2", "Toei Animation — Official Trailer", "Toei Animation Official", "Intermediate", "Shounen / Action", "1:59"),
  v("MOCK_IN3", "Official Anime Trailer — Slice of Life", "Anime Official Channel", "Intermediate", "Slice of Life / Drama", "2:14"),
  // Advanced
  v("MOCK_AD1", "劇場版 アニメ 予告編 (Official Movie Trailer)", "Aniplex Official", "Advanced", "Drama / Film", "2:38"),
  v("MOCK_AD2", "Official Anime Trailer — Mystery / Thriller", "Anime Official", "Advanced", "Mystery / Thriller", "1:45"),
  v("MOCK_AD3", "Cultural Documentary — Japanese (公式)", "NHK Official", "Advanced", "Documentary / Culture", "4:02"),
];
