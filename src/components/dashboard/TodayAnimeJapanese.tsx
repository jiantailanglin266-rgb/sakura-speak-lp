"use client";

import { speak } from "@/lib/speak";
import Icon from "../ui/Icon";
import { todaysAnimeJapanese as t } from "@/data/mockAnimeVideos";

/* Small "Today's Anime Japanese" card for the Anime Learning top (or dashboard). */
export default function TodayAnimeJapanese() {
  return (
    <div className="relative overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-[#efe7ff] via-pink-soft/40 to-blue-soft/40 p-5 shadow-card ring-1 ring-white">
      <span className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white/30" />
      <div className="relative flex items-center justify-between gap-3">
        <p className="text-xs font-bold uppercase tracking-wider text-[#7a5bd6]">
          ✦ Today's Anime Japanese
        </p>
        <button
          onClick={() => speak(t.jp)}
          aria-label="Play audio"
          className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white text-pink-deep shadow-soft transition-transform hover:scale-105 active:scale-95"
        >
          <Icon name="play" className="h-4 w-4 fill-current" />
        </button>
      </div>
      <div className="relative mt-2 flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <span className="font-display text-3xl font-extrabold text-ink">{t.jp}</span>
        <span className="text-sm font-semibold text-ink-mute">{t.romaji}</span>
      </div>
      <p className="relative mt-1 font-bold text-pink-ink">{t.meaning}</p>
      <p className="relative mt-1 text-sm leading-relaxed text-ink-soft">{t.usage}</p>
    </div>
  );
}
