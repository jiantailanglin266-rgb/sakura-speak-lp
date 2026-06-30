"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Icon from "../ui/Icon";
import { news } from "@/lib/dashboard";
import { fetchRssNews, rssEnabled, readNewsCache, writeNewsCache, relativeTime } from "@/lib/news";

type Item = { key: string; tag: string; title: string; when: string };

const mockItems: Item[] = news.map((n) => ({ key: n.title, tag: n.tag, title: n.title, when: n.time }));

export default function NewsCard() {
  const [items, setItems] = useState<Item[]>(mockItems);

  useEffect(() => {
    if (!rssEnabled) return;
    let alive = true;
    const apply = (arr: { id: string; tag: string; title: string; date: string; ts?: number }[]) =>
      arr.slice(0, 4).map((a) => ({
        key: a.id,
        tag: a.tag,
        title: a.title,
        when: relativeTime(a.ts) || a.date,
      }));

    const cached = readNewsCache();
    if (cached) setItems(apply(cached));

    (async () => {
      try {
        const fresh = await fetchRssNews();
        if (alive && fresh.length) {
          setItems(apply(fresh));
          writeNewsCache(fresh);
        }
      } catch {
        /* keep cache or mock */
      }
    })();

    return () => {
      alive = false;
    };
  }, []);

  return (
    <div className="rounded-[1.5rem] bg-white p-5 shadow-card ring-1 ring-pink-soft/40">
      <div className="flex items-center gap-2">
        <Icon name="news" className="h-5 w-5 text-blue-deep" />
        <h3 className="font-display text-base font-extrabold text-ink">News</h3>
      </div>

      <ul className="mt-4 space-y-2.5">
        {items.map((n) => (
          <li key={n.key}>
            <Link
              href="/dashboard/news"
              className="group flex items-start gap-3 rounded-2xl p-2 hover:bg-cream"
            >
              <span className="mt-0.5 shrink-0 rounded-full bg-blue-soft/70 px-2.5 py-1 text-[0.6rem] font-extrabold uppercase tracking-wide text-blue-deep">
                {n.tag}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-sm font-bold leading-snug text-ink group-hover:text-pink-ink">
                  {n.title}
                </span>
                {n.when && <span className="text-xs text-ink-mute">{n.when}</span>}
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <Link
        href="/dashboard/news"
        className="mt-3 flex items-center justify-center gap-1 rounded-full bg-blue-soft/50 py-2 text-sm font-bold text-blue-deep hover:bg-blue-soft/70"
      >
        All news
        <Icon name="chevron" className="h-4 w-4" />
      </Link>
    </div>
  );
}
