/* Member-facing News.

   Two interchangeable sources behind one shape, like the rest of the app:
   - RSS (when NEXT_PUBLIC_NEWS_RSS_FEEDS is set): articles are pulled live from
     one or more feeds at runtime, parsed in the browser and cached. This is how
     the client keeps News fresh automatically — just point it at feeds, no
     redeploy needed.
   - Mock (fallback): the curated `articles` below, so the static GitHub Pages
     build and credential-free dev always have content.

   Static export has no server, and most feeds don't send CORS headers, so the
   fetch goes through a configurable CORS proxy (NEXT_PUBLIC_RSS_PROXY) and we
   parse the XML with the browser's DOMParser. */

export type Accent = "pink" | "blue" | "mint" | "gold" | "lilac";

export type Article = {
  id: string;
  tag: string;
  title: string;
  date: string; // display string, e.g. "Jun 24, 2026"
  emoji: string;
  accent: Accent;
  excerpt: string;
  body: string[];
  ts?: number; // epoch ms, for sorting RSS items (mock omits)
  source?: string; // feed label (RSS only)
  sourceUrl?: string; // original article URL (RSS only)
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

/* =============================================================== RSS ====== */

// Comma-separated feeds. Each entry is "URL" or "Label|URL", e.g.
//   News for Students|https://www3.nhk.or.jp/news/easy/news-list.xml, https://…
const FEEDS_RAW = process.env.NEXT_PUBLIC_NEWS_RSS_FEEDS ?? "";
// CORS proxy with the feed URL appended (encoded). allorigins is free + keyless;
// swap for your own proxy / serverless function in production. Unset/empty falls
// back to the default; "none" fetches feeds directly (for CORS-enabled feeds).
const PROXY_RAW = (process.env.NEXT_PUBLIC_RSS_PROXY ?? "").trim();
const RSS_PROXY = PROXY_RAW || "https://api.allorigins.win/raw?url=";
const DIRECT_FETCH = RSS_PROXY.toLowerCase() === "none" || RSS_PROXY.toLowerCase() === "direct";

export const rssEnabled = Boolean(FEEDS_RAW.trim());

type Feed = { label: string; url: string };

function parseFeeds(): Feed[] {
  return FEEDS_RAW.split(",")
    .map((s) => s.trim())
    .filter(Boolean)
    .map((entry) => {
      const bar = entry.indexOf("|");
      return bar > 0
        ? { label: entry.slice(0, bar).trim(), url: entry.slice(bar + 1).trim() }
        : { label: "", url: entry };
    });
}

const ACCENTS: Accent[] = ["pink", "blue", "mint", "gold", "lilac"];
const FALLBACK_EMOJI = ["📰", "🗞️", "🌸", "✨", "🇯🇵"];
const EMOJI_RULES: [RegExp, string][] = [
  [/anime|manga|film|movie|cinema/i, "🎬"],
  [/food|restaurant|recipe|sushi|ramen|eat|gourmet/i, "🍜"],
  [/rain|weather|typhoon|snow|storm|梅雨|台風|天気/i, "🌧️"],
  [/festival|matsuri|event|祭|花火/i, "🎉"],
  [/travel|tourism|trip|station|train|新幹線|旅/i, "🚄"],
  [/tech|\bai\b|robot|game|gadget|科学/i, "🤖"],
  [/study|lesson|grammar|kanji|word|language|日本語|勉強/i, "📖"],
  [/money|economy|price|yen|円|経済/i, "💴"],
  [/sport|baseball|soccer|olympic|野球|サッカー/i, "⚽"],
  [/health|medicine|virus|健康|医療/i, "🩺"],
];

function pickEmoji(text: string, i: number): string {
  for (const [re, e] of EMOJI_RULES) if (re.test(text)) return e;
  return FALLBACK_EMOJI[i % FALLBACK_EMOJI.length];
}

function hashId(s: string): string {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return `rss-${h.toString(36)}`;
}

// Browser-only: strip HTML tags and decode entities via a detached element.
function stripHtml(html: string): string {
  if (typeof document === "undefined") return html.replace(/<[^>]*>/g, " ");
  const el = document.createElement("div");
  el.innerHTML = html;
  return (el.textContent || "").replace(/\s+/g, " ").trim();
}

function fmtDate(d: Date): string {
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

// First non-empty text among the given (possibly namespaced) tag names.
function pickText(item: Element, names: string[]): string {
  for (const n of names) {
    const els = item.getElementsByTagName(n);
    if (els.length && els[0].textContent && els[0].textContent.trim()) return els[0].textContent.trim();
  }
  return "";
}

function itemLink(item: Element): string {
  // RSS: <link>text</link>. Atom: <link href="…"/>.
  const links = item.getElementsByTagName("link");
  for (let i = 0; i < links.length; i++) {
    const el = links[i];
    const href = el.getAttribute("href");
    if (href) return href;
    if (el.textContent && el.textContent.trim()) return el.textContent.trim();
  }
  return pickText(item, ["guid", "id"]);
}

function parseFeedXml(xml: string, feed: Feed): Article[] {
  const doc = new DOMParser().parseFromString(xml, "text/xml");
  if (doc.getElementsByTagName("parsererror").length) return [];

  const channelTitle =
    doc.querySelector("channel > title")?.textContent?.trim() ||
    doc.querySelector("feed > title")?.textContent?.trim() ||
    "";
  const label = feed.label || channelTitle || "News";

  let nodes = Array.from(doc.getElementsByTagName("item"));
  if (!nodes.length) nodes = Array.from(doc.getElementsByTagName("entry")); // Atom

  return nodes.slice(0, 15).map((item, i) => {
    const title = pickText(item, ["title"]) || "(untitled)";
    const link = itemLink(item);
    const rawDesc = pickText(item, ["description", "summary", "content:encoded", "content"]);
    const clean = stripHtml(rawDesc);
    const dateStr = pickText(item, ["pubDate", "published", "updated", "dc:date", "date"]);
    const when = dateStr ? new Date(dateStr) : new Date(NaN);
    const ts = isNaN(when.getTime()) ? 0 : when.getTime();
    const category = pickText(item, ["category"]);

    // body: split the cleaned text into readable paragraphs.
    const body = clean
      ? clean.split(/(?<=[。.!?！？])\s+/).reduce<string[]>((acc, s) => {
          const last = acc[acc.length - 1];
          if (last && last.length < 140) acc[acc.length - 1] = `${last} ${s}`.trim();
          else acc.push(s.trim());
          return acc;
        }, [])
      : [];

    return {
      id: hashId(link || title),
      tag: feed.label || category || channelTitle || "News",
      title,
      date: ts ? fmtDate(when) : "",
      emoji: pickEmoji(`${title} ${category}`, i),
      accent: ACCENTS[(i + label.length) % ACCENTS.length],
      excerpt: clean.slice(0, 160) + (clean.length > 160 ? "…" : ""),
      body: body.length ? body : [clean || "Open the full story to read more."],
      ts,
      source: label,
      sourceUrl: link || undefined,
    };
  });
}

/** Fetch + parse every configured feed, newest first. Throws if all feeds fail. */
export async function fetchRssNews(): Promise<Article[]> {
  const feeds = parseFeeds();
  if (!feeds.length) return [];

  const results = await Promise.allSettled(
    feeds.map(async (feed) => {
      // With a proxy, append the URL-encoded feed. With "none", fetch the feed
      // directly — works for CORS-enabled or same-origin feeds.
      const target = DIRECT_FETCH ? feed.url : RSS_PROXY + encodeURIComponent(feed.url);
      const res = await fetch(target);
      if (!res.ok) throw new Error(`feed ${feed.url}: ${res.status}`);
      return parseFeedXml(await res.text(), feed);
    })
  );

  const ok = results.filter((r) => r.status === "fulfilled") as PromiseFulfilledResult<Article[]>[];
  if (!ok.length) throw new Error("All RSS feeds failed to load.");

  // Merge, de-dupe by id, sort newest first, cap.
  const seen = new Set<string>();
  return ok
    .flatMap((r) => r.value)
    .filter((a) => (seen.has(a.id) ? false : (seen.add(a.id), true)))
    .sort((a, b) => (b.ts ?? 0) - (a.ts ?? 0))
    .slice(0, 24);
}

export const newsSourceCount = parseFeeds().length;

/* ====================================================== cache + helpers === */
// Shared by the News page and the dashboard News card so one fetch serves both.
const CACHE_KEY = "sakura-news-cache";
const CACHE_TTL = 30 * 60 * 1000; // 30 min

type NewsCache = { ts: number; items: Article[] };

export function readNewsCache(): Article[] | null {
  try {
    const c: NewsCache = JSON.parse(localStorage.getItem(CACHE_KEY) || "null");
    if (c && Date.now() - c.ts < CACHE_TTL && Array.isArray(c.items) && c.items.length) return c.items;
  } catch {
    /* ignore */
  }
  return null;
}

export function writeNewsCache(items: Article[]): void {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify({ ts: Date.now(), items }));
  } catch {
    /* ignore */
  }
}

/** Short relative label, e.g. "just now", "3h ago", "2d ago", else a date. */
export function relativeTime(ts?: number): string {
  if (!ts) return "";
  const diff = Date.now() - ts;
  if (diff < 60_000) return "just now";
  if (diff < 3_600_000) return `${Math.floor(diff / 60_000)}m ago`;
  if (diff < 86_400_000) return `${Math.floor(diff / 3_600_000)}h ago`;
  if (diff < 7 * 86_400_000) return `${Math.floor(diff / 86_400_000)}d ago`;
  return fmtDate(new Date(ts));
}
