import Link from "next/link";
import Icon from "../ui/Icon";
import { news } from "@/lib/dashboard";

export default function NewsCard() {
  return (
    <div className="rounded-[1.5rem] bg-white p-5 shadow-card ring-1 ring-pink-soft/40">
      <div className="flex items-center gap-2">
        <Icon name="news" className="h-5 w-5 text-blue-deep" />
        <h3 className="font-display text-base font-extrabold text-ink">News</h3>
      </div>

      <ul className="mt-4 space-y-2.5">
        {news.map((n) => (
          <li key={n.title}>
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
                <span className="text-xs text-ink-mute">{n.time}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
