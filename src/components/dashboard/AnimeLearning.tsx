"use client";

import { useEffect, useState } from "react";
import Meemi from "../Meemi";
import Icon from "../ui/Icon";
import TodayAnimeJapanese from "./TodayAnimeJapanese";
import AnimeVideoCard from "./AnimeVideoCard";
import AnimeVideoModal from "./AnimeVideoModal";
import { searchAnimeVideos, youtubeEnabled } from "@/lib/youtube";
import type { AnimeVideo, AnimeLevel } from "@/types/animeLearning";

const LEVELS: (AnimeLevel | "All")[] = ["All", "Beginner", "Intermediate", "Advanced"];

export default function AnimeLearning() {
  const [level, setLevel] = useState<AnimeLevel | "All">("All");
  const [query, setQuery] = useState("");
  const [submitted, setSubmitted] = useState("");
  const [videos, setVideos] = useState<AnimeVideo[]>([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState<AnimeVideo | null>(null);

  useEffect(() => {
    let alive = true;
    setLoading(true);
    searchAnimeVideos({
      level: level === "All" ? undefined : level,
      query: submitted || undefined,
    })
      .then((vs) => alive && setVideos(vs))
      .finally(() => alive && setLoading(false));
    return () => {
      alive = false;
    };
  }, [level, submitted]);

  return (
    <div>
      {/* hero */}
      <div className="relative overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-pink-soft/60 via-[#efe7ff] to-blue-soft/50 p-6 shadow-card ring-1 ring-white sm:p-8">
        <Meemi className="absolute -right-2 bottom-0 hidden w-28 opacity-90 sm:block" mood="wave" />
        <p className="inline-flex items-center gap-1.5 rounded-full bg-white/80 px-3 py-1 text-xs font-bold text-pink-ink">
          <Icon name="film" className="h-4 w-4" /> Anime Learning
        </p>
        <h1 className="mt-3 max-w-xl font-display text-2xl font-extrabold leading-tight text-ink sm:text-3xl">
          Learn Japanese Through Anime
        </h1>
        <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink-soft">
          Practice real Japanese expressions from anime trailers, official clips, and cultural videos.
        </p>
        <p className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-[#2f9d77]">
          ✓ Official &amp; copyright-safe sources only
        </p>
      </div>

      {/* today's anime japanese */}
      <div className="mt-5">
        <TodayAnimeJapanese />
      </div>

      {/* controls */}
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          {LEVELS.map((l) => (
            <button
              key={l}
              onClick={() => setLevel(l)}
              className={`rounded-full px-4 py-2 text-sm font-bold transition-all ${
                level === l
                  ? "bg-gradient-to-r from-pink-deep to-pink text-white shadow-soft"
                  : "bg-white text-ink-soft ring-1 ring-pink-soft/50 hover:ring-pink"
              }`}
            >
              {l}
            </button>
          ))}
        </div>
        <label className="relative flex items-center sm:w-64">
          <Icon name="search" className="pointer-events-none absolute left-4 h-4 w-4 text-ink-mute" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && setSubmitted(query.trim())}
            placeholder="Search anime videos…"
            className="w-full rounded-full border border-pink-soft/60 bg-white py-2.5 pl-11 pr-4 text-sm text-ink placeholder:text-ink-mute focus:border-pink focus:outline-none focus:ring-4 focus:ring-pink/20"
          />
        </label>
      </div>

      {!youtubeEnabled && (
        <p className="mt-3 text-xs text-ink-mute">
          🎬 Showing sample videos. Add a YouTube API key to load live official anime videos.
        </p>
      )}

      {/* grid */}
      {loading ? (
        <p className="py-16 text-center text-sm text-ink-soft">Loading videos…</p>
      ) : videos.length === 0 ? (
        <p className="py-16 text-center text-sm text-ink-soft">No videos found. Try another search 🌸</p>
      ) : (
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((v) => (
            <AnimeVideoCard key={v.id} video={v} onOpen={setOpen} />
          ))}
        </div>
      )}

      {open && <AnimeVideoModal video={open} onClose={() => setOpen(null)} />}
    </div>
  );
}
