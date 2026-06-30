"use client";

import { useState } from "react";
import Icon from "../ui/Icon";
import type { AnimeVideo, AnimeLevel } from "@/types/animeLearning";

const levelChip: Record<AnimeLevel, string> = {
  Beginner: "bg-[#dff7ec] text-[#2f9d77]",
  Intermediate: "bg-blue-soft/70 text-blue-deep",
  Advanced: "bg-[#efe7ff] text-[#7a5bd6]",
};
const levelGrad: Record<AnimeLevel, string> = {
  Beginner: "from-[#bff0d8] to-[#8fd6ff]",
  Intermediate: "from-[#8fd6ff] to-[#c9b6ff]",
  Advanced: "from-[#c9b6ff] to-[#f7a8c4]",
};

export default function AnimeVideoCard({
  video,
  onOpen,
}: {
  video: AnimeVideo;
  onOpen: (v: AnimeVideo) => void;
}) {
  const [imgOk, setImgOk] = useState(true);

  return (
    <div className="group flex flex-col overflow-hidden rounded-[1.5rem] bg-white shadow-card ring-1 ring-pink-soft/40 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-pop">
      {/* thumbnail */}
      <button
        onClick={() => onOpen(video)}
        className="relative block aspect-video w-full overflow-hidden text-left"
        aria-label={`Watch ${video.title}`}
      >
        {video.thumbnail && imgOk ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={video.thumbnail}
            alt={video.title}
            onError={() => setImgOk(false)}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${levelGrad[video.level]}`}>
            <Icon name="film" className="h-10 w-10 text-white/80" />
          </div>
        )}
        {/* play overlay */}
        <span className="absolute inset-0 grid place-items-center bg-black/0 transition-colors duration-300 group-hover:bg-black/15">
          <span className="grid h-12 w-12 place-items-center rounded-full bg-white/90 text-pink-deep shadow-pop opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <Icon name="play" className="h-5 w-5 fill-current" />
          </span>
        </span>
        {/* duration */}
        <span className="absolute bottom-2 right-2 rounded-md bg-black/65 px-1.5 py-0.5 text-[0.7rem] font-bold text-white">
          {video.duration}
        </span>
        {/* official badge */}
        {video.official && (
          <span className="absolute left-2 top-2 inline-flex items-center gap-1 rounded-full bg-white/90 px-2 py-0.5 text-[0.6rem] font-extrabold text-[#2f9d77]">
            ✓ Official
          </span>
        )}
      </button>

      {/* body */}
      <div className="flex flex-1 flex-col p-4">
        <h3 className="line-clamp-2 font-display text-sm font-extrabold leading-snug text-ink">
          {video.title}
        </h3>
        <p className="mt-1 truncate text-xs text-ink-soft">{video.channel}</p>

        <div className="mt-3 flex flex-wrap items-center gap-1.5">
          <span className={`rounded-full px-2 py-0.5 text-[0.62rem] font-bold ${levelChip[video.level]}`}>
            {video.level}
          </span>
          <span className="rounded-full bg-cream px-2 py-0.5 text-[0.62rem] font-bold text-ink-soft ring-1 ring-pink-soft/40">
            {video.genre}
          </span>
        </div>

        <button
          onClick={() => onOpen(video)}
          className="mt-4 inline-flex items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-pink-deep to-pink py-2.5 text-sm font-extrabold text-white shadow-soft transition-transform hover:-translate-y-0.5"
        >
          Watch &amp; Learn <Icon name="play" className="h-3.5 w-3.5 fill-current" />
        </button>
      </div>
    </div>
  );
}
