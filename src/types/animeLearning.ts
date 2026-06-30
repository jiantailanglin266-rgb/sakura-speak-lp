/* Types for the Anime Learning feature. */

export type AnimeLevel = "Beginner" | "Intermediate" | "Advanced";

export type AnimePhrase = {
  jp: string;
  romaji: string;
  en: string;
  context?: string;
};

export type AnimeVocab = {
  jp: string;
  romaji: string;
  en: string;
};

export type AnimeVideo = {
  id: string; // YouTube video id (used for thumbnail + embed)
  title: string;
  channel: string;
  official: boolean; // passed the official-content heuristic
  thumbnail?: string; // real URL when from the API; empty → branded placeholder
  level: AnimeLevel;
  genre: string; // estimated
  duration: string; // "1:32"
  notes?: string[]; // AI learning notes
  phrases?: AnimePhrase[];
  vocab?: AnimeVocab[];
};

export type SavedWord = {
  jp: string;
  romaji: string;
  en: string;
  source?: string; // e.g. video title
  savedAt: string;
};

export type TodayWord = {
  jp: string;
  romaji: string;
  meaning: string;
  usage: string;
};
