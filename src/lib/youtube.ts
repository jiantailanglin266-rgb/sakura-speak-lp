/* YouTube Data API access for Anime Learning.

   When NEXT_PUBLIC_YOUTUBE_API_KEY (or YOUTUBE_API_KEY) is set, live official
   anime videos are fetched and filtered for official-ness. When it's absent
   (current static preview / no key), the screen falls back to mockAnimeVideos
   so it never breaks. */

import type { AnimeVideo, AnimeLevel } from "@/types/animeLearning";
import { mockAnimeVideos } from "@/data/mockAnimeVideos";

const KEY =
  process.env.NEXT_PUBLIC_YOUTUBE_API_KEY || process.env.YOUTUBE_API_KEY || "";

export const youtubeEnabled = Boolean(KEY);

/* Search terms aimed at official, copyright-safe content. */
export const SEARCH_QUERIES = [
  "official anime trailer Japanese",
  "anime PV Japanese official",
  "Japanese anime official trailer",
  "NHK anime Japanese",
  "Toei Animation official Japanese",
  "Aniplex official anime trailer",
  "Pokémon official Japanese",
  "Studio Ghibli official trailer Japanese",
  "Japanese learning anime official",
];

const OFFICIAL_HINTS = ["official", "公式", "anime official", "official channel"];
const TITLE_HINTS = ["trailer", "pv", "official", "公式", "予告"];
// Likely unofficial / reupload / non-learning content to exclude.
const EXCLUDE = [
  "reaction",
  "full episode",
  "フル",
  "まとめ",
  "切り抜き違法",
  "reupload",
  "re-upload",
  "fan made",
  "fandub",
  " amv",
  " mad ",
  "compilation",
];

function lc(s: string) {
  return (s || "").toLowerCase();
}

/** Heuristic: does this look like official, learning-appropriate content? */
export function looksOfficial(channel: string, title: string): boolean {
  const c = lc(channel);
  const t = lc(title);
  if (EXCLUDE.some((x) => c.includes(x.trim()) || t.includes(x.trim()))) return false;
  const officialChannel = OFFICIAL_HINTS.some((h) => c.includes(h));
  const officialTitle = TITLE_HINTS.some((h) => t.includes(h));
  return officialChannel || officialTitle;
}

function estimateLevel(title: string): AnimeLevel {
  const t = lc(title);
  if (/(beginner|kids|pok[eé]mon|nhk|easy|for learners)/.test(t)) return "Beginner";
  if (/(劇場|movie|film|documentary|thriller|mystery|drama)/.test(t)) return "Advanced";
  return "Intermediate";
}

function estimateGenre(title: string): string {
  const t = lc(title);
  if (/(劇場|movie|film)/.test(t)) return "Film";
  if (/(action|battle|shounen|少年)/.test(t)) return "Action";
  if (/(slice of life|日常|drama)/.test(t)) return "Slice of Life";
  if (/(document|culture|文化)/.test(t)) return "Culture";
  return "Anime";
}

/** Parse ISO-8601 duration (PT1M32S) → "1:32". */
function parseDuration(iso: string): string {
  const m = /PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/.exec(iso || "");
  if (!m) return "";
  const h = Number(m[1] || 0);
  const min = Number(m[2] || 0);
  const s = Number(m[3] || 0);
  const mm = h > 0 ? `${h}:${String(min).padStart(2, "0")}` : String(min);
  return `${mm}:${String(s).padStart(2, "0")}`;
}

export type SearchOpts = { query?: string; level?: AnimeLevel };

export async function searchAnimeVideos(opts: SearchOpts = {}): Promise<AnimeVideo[]> {
  // ---- mock fallback ----
  if (!youtubeEnabled) {
    let list = mockAnimeVideos;
    if (opts.level) list = list.filter((v) => v.level === opts.level);
    if (opts.query) {
      const q = lc(opts.query);
      list = list.filter((v) => lc(v.title).includes(q) || lc(v.channel).includes(q));
    }
    return list;
  }

  // ---- live YouTube Data API ----
  try {
    const q = opts.query?.trim() || SEARCH_QUERIES[0];
    const searchUrl =
      `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video` +
      `&maxResults=24&videoEmbeddable=true&safeSearch=strict&relevanceLanguage=ja` +
      `&q=${encodeURIComponent(q)}&key=${KEY}`;
    const sRes = await fetch(searchUrl);
    const sData = await sRes.json();
    const items: { id: string; title: string; channel: string; thumb: string }[] = (sData.items || [])
      .map((it: Record<string, unknown>) => {
        const id = (it.id as { videoId?: string })?.videoId;
        const sn = it.snippet as Record<string, unknown> | undefined;
        if (!id || !sn) return null;
        const thumbs = sn.thumbnails as Record<string, { url: string }> | undefined;
        return {
          id,
          title: String(sn.title || ""),
          channel: String(sn.channelTitle || ""),
          thumb: thumbs?.high?.url || thumbs?.medium?.url || thumbs?.default?.url || "",
        };
      })
      .filter(Boolean)
      .filter((x: { channel: string; title: string }) => looksOfficial(x.channel, x.title));

    if (items.length === 0) return mockAnimeVideos;

    // durations via videos.list
    const ids = items.map((i) => i.id).join(",");
    let durations: Record<string, string> = {};
    try {
      const vRes = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=contentDetails&id=${ids}&key=${KEY}`
      );
      const vData = await vRes.json();
      durations = Object.fromEntries(
        (vData.items || []).map((it: Record<string, unknown>) => [
          it.id as string,
          parseDuration(((it.contentDetails as { duration?: string }) || {}).duration || ""),
        ])
      );
    } catch {
      /* durations optional */
    }

    let mapped: AnimeVideo[] = items.map((i) => ({
      id: i.id,
      title: i.title,
      channel: i.channel,
      official: true,
      thumbnail: i.thumb,
      level: estimateLevel(i.title),
      genre: estimateGenre(i.title),
      duration: durations[i.id] || "—",
    }));

    if (opts.level) mapped = mapped.filter((v) => v.level === opts.level);
    return mapped.length ? mapped : mockAnimeVideos;
  } catch {
    return mockAnimeVideos;
  }
}
