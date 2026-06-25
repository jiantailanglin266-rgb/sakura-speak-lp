import Link from "next/link";
import Icon from "../ui/Icon";
import { events } from "@/lib/dashboard";

export default function EventsCard() {
  return (
    <div className="rounded-[1.5rem] bg-white p-5 shadow-card ring-1 ring-pink-soft/40">
      <div className="flex items-center gap-2">
        <Icon name="mic" className="h-5 w-5 text-pink-deep" />
        <h3 className="font-display text-base font-extrabold text-ink">
          Voice events
        </h3>
      </div>

      <ul className="mt-4 space-y-3">
        {events.map((e) => (
          <li
            key={e.title}
            className="flex items-center gap-3 rounded-2xl bg-cream/70 p-3 ring-1 ring-pink-soft/30"
          >
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-pink-soft to-blue-soft text-pink-ink">
              <Icon name="calendar" className="h-5 w-5" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-bold text-ink">{e.title}</p>
              <p className="text-xs text-ink-soft">
                {e.host} · {e.going} going
              </p>
            </div>
            {e.live ? (
              <span className="flex shrink-0 items-center gap-1 rounded-full bg-pink-deep px-2.5 py-1 text-[0.65rem] font-extrabold text-white">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
                LIVE
              </span>
            ) : (
              <span className="shrink-0 whitespace-nowrap rounded-full bg-blue-soft/70 px-2.5 py-1 text-[0.65rem] font-bold text-blue-deep">
                {e.time.split(" · ")[0]}
              </span>
            )}
          </li>
        ))}
      </ul>

      <Link
        href="#"
        className="mt-4 flex items-center justify-center gap-1 rounded-full bg-pink-soft/50 py-2.5 text-sm font-bold text-pink-ink hover:bg-pink-soft"
      >
        See all events
        <Icon name="chevron" className="h-4 w-4" />
      </Link>
    </div>
  );
}
