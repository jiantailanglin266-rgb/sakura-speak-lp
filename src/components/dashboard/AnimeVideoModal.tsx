"use client";

import { useEffect, useState } from "react";
import Icon from "../ui/Icon";
import { speak } from "@/lib/speak";
import { saveWord, isSaved } from "@/lib/anime-saved";
import { samplePhrases } from "@/data/mockAnimeVideos";
import type { AnimeVideo } from "@/types/animeLearning";

const defaultNotes = [
  "This video is useful for listening to natural Japanese rhythm.",
  "Try to catch short emotional expressions.",
  "Pay attention to casual endings such as よ, ね, だ, じゃない.",
];

/* A small Save button that flips to "Saved" and persists locally. */
function SaveChip({ jp, romaji, en, source }: { jp: string; romaji: string; en: string; source?: string }) {
  const [saved, setSaved] = useState(false);
  useEffect(() => {
    setSaved(isSaved(jp));
  }, [jp]);
  return (
    <button
      onClick={() => {
        saveWord({ jp, romaji, en, source });
        setSaved(true);
      }}
      disabled={saved}
      className={`shrink-0 rounded-full px-3 py-1 text-xs font-bold transition-colors ${
        saved
          ? "bg-[#e7f7ee] text-[#2f9d77]"
          : "bg-white text-pink-ink ring-1 ring-pink-soft/60 hover:bg-cream"
      }`}
    >
      {saved ? "Saved ✓" : "Save"}
    </button>
  );
}

export default function AnimeVideoModal({
  video,
  onClose,
}: {
  video: AnimeVideo;
  onClose: () => void;
}) {
  const notes = video.notes?.length ? video.notes : defaultNotes;
  const phrases = video.phrases?.length ? video.phrases : samplePhrases;
  const vocab =
    video.vocab?.length
      ? video.vocab
      : [
          { jp: "戦う", romaji: "tatakau", en: "to fight" },
          { jp: "友達", romaji: "tomodachi", en: "friend" },
          { jp: "夢", romaji: "yume", en: "dream" },
        ];

  const [savedAll, setSavedAll] = useState(false);

  // Mock cards have placeholder ids → can't embed; link out to a real YouTube
  // search for official content instead. Real API videos embed inline.
  const isMock = video.id.startsWith("MOCK_");
  const searchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(
    `${video.title} 公式 official`
  )}`;

  // lock scroll + close on Esc
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const saveAll = () => {
    [...phrases, ...vocab].forEach((p) =>
      saveWord({ jp: p.jp, romaji: p.romaji, en: p.en, source: video.title })
    );
    setSavedAll(true);
  };

  return (
    <div
      className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-ink/50 p-3 backdrop-blur-sm sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative my-4 w-full max-w-2xl rounded-[1.75rem] bg-cream shadow-pop ring-1 ring-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* close */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-3 top-3 z-10 grid h-9 w-9 place-items-center rounded-full bg-white/90 text-ink-soft shadow-card ring-1 ring-pink-soft/50 hover:text-pink-ink"
        >
          ✕
        </button>

        {/* player — inline embed for real videos; sample cards link out to YouTube */}
        {isMock ? (
          <div className="flex aspect-video w-full flex-col items-center justify-center gap-3 rounded-t-[1.75rem] bg-gradient-to-br from-[#c9b6ff] via-pink-soft/60 to-blue-soft/60 px-6 text-center">
            <Icon name="film" className="h-9 w-9 text-white/90" />
            <p className="text-sm font-semibold text-ink">
              Sample card — open the real official video on YouTube
            </p>
            <a
              href={searchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-white px-5 py-2.5 text-sm font-extrabold text-pink-deep shadow-pop transition-transform hover:-translate-y-0.5"
            >
              <Icon name="play" className="h-4 w-4 fill-current" /> Open on YouTube ↗
            </a>
          </div>
        ) : (
          <div className="aspect-video w-full overflow-hidden rounded-t-[1.75rem] bg-black">
            <iframe
              className="h-full w-full"
              src={`https://www.youtube-nocookie.com/embed/${video.id}?rel=0`}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}

        <div className="p-5 sm:p-6">
          {isMock && (
            <p className="mb-3 rounded-xl bg-[#fffaf3] px-3 py-2 text-xs text-[#7a6243] ring-1 ring-[#f6e3c7]">
              Demo content — “Open on YouTube” jumps to real official videos. Add a YouTube API key to stream live videos inline.
            </p>
          )}

          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-pink-soft/60 px-2.5 py-0.5 text-[0.65rem] font-extrabold text-pink-ink">
              {video.level}
            </span>
            <span className="rounded-full bg-cream px-2.5 py-0.5 text-[0.65rem] font-bold text-ink-soft ring-1 ring-pink-soft/40">
              {video.genre}
            </span>
            <span className="text-xs text-ink-mute">· {video.channel}</span>
          </div>
          <h2 className="mt-2 font-display text-xl font-extrabold text-ink">{video.title}</h2>

          {/* AI Learning Notes */}
          <section className="mt-5 rounded-2xl bg-white p-4 shadow-card ring-1 ring-pink-soft/40">
            <h3 className="flex items-center gap-2 font-display text-sm font-extrabold text-ink">
              ✨ AI Learning Notes
            </h3>
            <ul className="mt-2 space-y-1.5">
              {notes.map((n) => (
                <li key={n} className="flex gap-2 text-sm text-ink-soft">
                  <span className="text-pink-deep">•</span> {n}
                </li>
              ))}
            </ul>
            <p className="mt-2 text-[0.7rem] text-ink-mute">AI notes are sample text — ready to connect to OpenAI / Claude.</p>
          </section>

          {/* Useful Japanese Phrases */}
          <section className="mt-4">
            <h3 className="mb-2 font-display text-sm font-extrabold text-ink">Useful Japanese Phrases</h3>
            <div className="space-y-2.5">
              {phrases.map((p) => (
                <div key={p.jp} className="flex items-start gap-3 rounded-2xl bg-white p-3.5 shadow-card ring-1 ring-pink-soft/40">
                  <button
                    onClick={() => speak(p.jp)}
                    aria-label="Play"
                    className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-blue-soft/70 text-blue-deep transition-transform hover:scale-110"
                  >
                    <Icon name="play" className="h-4 w-4" />
                  </button>
                  <div className="min-w-0 flex-1">
                    <p className="font-display text-base font-extrabold text-ink">
                      {p.jp} <span className="text-xs font-semibold text-ink-mute">{p.romaji}</span>
                    </p>
                    <p className="text-sm text-pink-ink">{p.en}</p>
                    {p.context && <p className="mt-0.5 text-xs text-ink-soft">{p.context}</p>}
                  </div>
                  <SaveChip jp={p.jp} romaji={p.romaji} en={p.en} source={video.title} />
                </div>
              ))}
            </div>
          </section>

          {/* Vocabulary */}
          <section className="mt-4">
            <h3 className="mb-2 font-display text-sm font-extrabold text-ink">Vocabulary</h3>
            <div className="grid gap-2.5 sm:grid-cols-2">
              {vocab.map((w) => (
                <div key={w.jp} className="flex items-center gap-2 rounded-2xl bg-white p-3 shadow-card ring-1 ring-pink-soft/40">
                  <button
                    onClick={() => speak(w.jp)}
                    aria-label="Play"
                    className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-blue-soft/70 text-blue-deep"
                  >
                    <Icon name="play" className="h-3.5 w-3.5" />
                  </button>
                  <div className="min-w-0 flex-1">
                    <p className="font-display font-extrabold text-ink">
                      {w.jp} <span className="text-xs font-semibold text-ink-mute">{w.romaji}</span>
                    </p>
                    <p className="text-xs text-ink-soft">{w.en}</p>
                  </div>
                  <SaveChip jp={w.jp} romaji={w.romaji} en={w.en} source={video.title} />
                </div>
              ))}
            </div>
          </section>

          {/* Shadowing Practice */}
          <section className="mt-4 rounded-2xl bg-gradient-to-br from-pink-soft/40 to-blue-soft/40 p-4 ring-1 ring-white">
            <h3 className="font-display text-sm font-extrabold text-ink">🎤 Shadowing Practice</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {["Listen", "Repeat", "Record"].map((s) => (
                <span key={s} className="rounded-full bg-white/80 px-3 py-1 text-xs font-bold text-ink-soft">
                  {s}
                </span>
              ))}
              <span className="rounded-full bg-white/60 px-3 py-1 text-xs font-bold text-ink-mute">
                AI Score — Coming Soon
              </span>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              <button className="rounded-full bg-gradient-to-r from-pink-deep to-pink px-4 py-2 text-xs font-extrabold text-white shadow-soft">
                Start Practice
              </button>
              <button className="rounded-full bg-white px-4 py-2 text-xs font-bold text-pink-ink shadow-card ring-1 ring-pink-soft/60">
                Record Voice
              </button>
              <button className="rounded-full bg-white px-4 py-2 text-xs font-bold text-pink-ink shadow-card ring-1 ring-pink-soft/60">
                Check Pronunciation
              </button>
            </div>
          </section>

          {/* Save all */}
          <button
            onClick={saveAll}
            disabled={savedAll}
            className={`mt-5 w-full rounded-full py-3.5 text-sm font-extrabold shadow-pop transition-transform ${
              savedAll
                ? "bg-[#e7f7ee] text-[#2f9d77]"
                : "bg-gradient-to-r from-pink-deep to-pink text-white hover:-translate-y-0.5"
            }`}
          >
            {savedAll ? "Saved to Vocabulary ✓" : "Save all to Vocabulary"}
          </button>
        </div>
      </div>
    </div>
  );
}
