"use client";

import { useCallback, useEffect, useState } from "react";
import Icon from "../ui/Icon";
import { articles, fetchRssNews, rssEnabled, newsSourceCount, type Article } from "@/lib/news";

const cover: Record<string, string> = {
  pink: "from-pink-deep to-pink",
  blue: "from-blue-deep to-blue",
  mint: "from-[#3fc093] to-[#9fe3c5]",
  gold: "from-gold-deep to-gold",
  lilac: "from-[#9a7bea] to-[#c9b6ff]",
};
const tagCls: Record<string, string> = {
  pink: "bg-pink-soft/70 text-pink-ink",
  blue: "bg-blue-soft/70 text-blue-deep",
  mint: "bg-[#dff7ec] text-[#2f9d77]",
  gold: "bg-[#fff2cc] text-gold-deep",
  lilac: "bg-[#efe7ff] text-[#7a5bd6]",
};

const CACHE_KEY = "sakura-news-cache";
const TTL = 30 * 60 * 1000; // 30 min

type Cache = { ts: number; items: Article[] };
function readCache(): Article[] | null {
  try {
    const c: Cache = JSON.parse(localStorage.getItem(CACHE_KEY) || "null");
    if (c && Date.now() - c.ts < TTL && Array.isArray(c.items) && c.items.length) return c.items;
  } catch {
    /* ignore */
  }
  return null;
}
function writeCache(items: Article[]) {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify({ ts: Date.now(), items }));
  } catch {
    /* ignore */
  }
}

export default function NewsReader() {
  const [items, setItems] = useState<Article[] | null>(null); // null = loading
  const [live, setLive] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState(false);
  const [openId, setOpenId] = useState<string | null>(null);
  const [liked, setLiked] = useState<Set<string>>(new Set());

  const load = useCallback(async (force: boolean) => {
    if (!rssEnabled) {
      setItems(articles);
      setLive(false);
      return;
    }
    if (!force) {
      const cached = readCache();
      if (cached) {
        setItems(cached);
        setLive(true);
      }
    }
    setRefreshing(true);
    setError(false);
    try {
      const fresh = await fetchRssNews();
      if (fresh.length) {
        setItems(fresh);
        setLive(true);
        writeCache(fresh);
      } else {
        throw new Error("empty");
      }
    } catch {
      setError(true);
      // Keep cached items if we showed any; otherwise fall back to the mock.
      setItems((cur) => cur ?? articles);
    } finally {
      setRefreshing(false);
    }
  }, []);

  useEffect(() => {
    load(false);
  }, [load]);

  // ----- loading -----
  if (items === null)
    return (
      <div>
        <p className="mb-4 text-sm text-ink-soft">Loading the latest stories…</p>
        <div className="animate-pulse space-y-3">
          <div className="h-44 rounded-[1.75rem] bg-white/70 ring-1 ring-pink-soft/30" />
          {[0, 1, 2].map((i) => (
            <div key={i} className="h-24 rounded-2xl bg-white/70 ring-1 ring-pink-soft/30" />
          ))}
        </div>
      </div>
    );

  // ----- detail -----
  const article = items.find((a) => a.id === openId);
  if (article) {
    const isLiked = liked.has(article.id);
    return (
      <div>
        <button onClick={() => setOpenId(null)} className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-sm font-bold text-pink-ink shadow-card ring-1 ring-pink-soft/60 hover:bg-cream">
          <Icon name="chevron" className="h-4 w-4 rotate-180" /> All news
        </button>

        <article className="overflow-hidden rounded-[1.75rem] bg-white shadow-card ring-1 ring-pink-soft/40">
          <div className={`grid h-36 place-items-center bg-gradient-to-br ${cover[article.accent]} text-5xl`}>
            {article.emoji}
          </div>
          <div className="p-5 sm:p-7">
            <span className={`rounded-full px-2.5 py-0.5 text-[0.65rem] font-bold uppercase ${tagCls[article.accent]}`}>{article.tag}</span>
            <h1 className="mt-3 font-display text-2xl font-extrabold text-ink">{article.title}</h1>
            <p className="mt-1 text-xs text-ink-mute">
              {article.date}
              {article.source && <> · {article.source}</>}
            </p>
            <div className="mt-4 space-y-3">
              {article.body.map((p, i) => (
                <p key={i} className="text-sm leading-relaxed text-ink-soft">{p}</p>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-pink-soft/40 pt-4">
              <button
                onClick={() => setLiked((s) => { const n = new Set(s); n.has(article.id) ? n.delete(article.id) : n.add(article.id); return n; })}
                className={`flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-bold transition-colors ${
                  isLiked ? "bg-pink-soft/50 text-pink-ink" : "bg-cream text-ink-soft hover:text-pink-ink"
                }`}
              >
                {isLiked ? "❤️ Liked" : "🤍 Helpful"}
              </button>
              {article.sourceUrl && (
                <a
                  href={article.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-pink-deep to-pink px-4 py-2 text-sm font-bold text-white shadow-soft transition-transform hover:-translate-y-0.5"
                >
                  Read full article ↗
                </a>
              )}
            </div>
          </div>
        </article>
      </div>
    );
  }

  // ----- list -----
  const [featured, ...rest] = items;
  return (
    <div>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <p className="text-sm text-ink-soft">
          {live ? (
            <>
              <span className="font-bold text-[#2f9d77]">● Live</span> · auto-updated from {newsSourceCount}{" "}
              {newsSourceCount === 1 ? "source" : "sources"} via RSS
            </>
          ) : (
            "Fresh reading material, curated by the team."
          )}
        </p>
        {rssEnabled && (
          <button
            onClick={() => load(true)}
            disabled={refreshing}
            className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-bold text-pink-ink shadow-card ring-1 ring-pink-soft/60 hover:bg-cream disabled:opacity-50"
          >
            <Icon name="review" className={`h-4 w-4 ${refreshing ? "animate-spin" : ""}`} />
            {refreshing ? "Updating…" : "Refresh"}
          </button>
        )}
      </div>

      {error && (
        <div className="mb-4 rounded-2xl bg-[#fff2cc] px-4 py-2.5 text-xs font-bold text-gold-deep ring-1 ring-gold/30">
          Couldn&apos;t reach the live feed — showing the latest we have.
        </div>
      )}

      {/* featured */}
      <button onClick={() => setOpenId(featured.id)} className="group block w-full overflow-hidden rounded-[1.75rem] bg-white text-left shadow-card ring-1 ring-pink-soft/40 transition-all hover:-translate-y-0.5 hover:shadow-pop">
        <div className={`grid h-32 place-items-center bg-gradient-to-br ${cover[featured.accent]} text-5xl`}>{featured.emoji}</div>
        <div className="p-5">
          <span className={`rounded-full px-2.5 py-0.5 text-[0.65rem] font-bold uppercase ${tagCls[featured.accent]}`}>{featured.tag}</span>
          <h2 className="mt-2 font-display text-xl font-extrabold text-ink">{featured.title}</h2>
          {featured.excerpt && <p className="mt-1 text-sm text-ink-soft">{featured.excerpt}</p>}
          <p className="mt-2 text-xs text-ink-mute">
            {featured.date}
            {featured.source && <> · {featured.source}</>}
          </p>
        </div>
      </button>

      {/* rest */}
      <ul className="mt-4 space-y-3">
        {rest.map((a) => (
          <li key={a.id}>
            <button onClick={() => setOpenId(a.id)} className="flex w-full items-center gap-3 rounded-2xl bg-white p-4 text-left shadow-card ring-1 ring-pink-soft/40 transition-all hover:-translate-y-0.5 hover:shadow-pop">
              <span className={`grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${cover[a.accent]} text-2xl`}>{a.emoji}</span>
              <span className="min-w-0 flex-1">
                <span className={`rounded-full px-2 py-0.5 text-[0.6rem] font-bold uppercase ${tagCls[a.accent]}`}>{a.tag}</span>
                <span className="mt-1 block font-bold leading-snug text-ink">{a.title}</span>
                <span className="block text-xs text-ink-mute">
                  {a.date}
                  {a.source && <> · {a.source}</>}
                </span>
              </span>
              <Icon name="chevron" className="h-4 w-4 shrink-0 text-ink-mute" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
