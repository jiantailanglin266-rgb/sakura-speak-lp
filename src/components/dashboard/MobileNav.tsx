import Link from "next/link";
import Icon from "../ui/Icon";

const items = [
  { key: "home", icon: "home", label: "Home", active: true },
  { key: "lessons", icon: "book", label: "Lessons", active: false },
  { key: "games", icon: "game", label: "Games", active: false },
  { key: "voice", icon: "mic", label: "Voice", active: false },
  { key: "profile", icon: "profile", label: "You", active: false },
] as const;

export default function MobileNav() {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-pink-soft/50 bg-white/90 backdrop-blur-md lg:hidden">
      <ul className="mx-auto flex max-w-md items-stretch justify-between px-2 py-1.5">
        {items.map((n) => (
          <li key={n.key} className="flex-1">
            <Link
              href={
                n.key === "home"
                  ? "/dashboard"
                  : n.key === "lessons"
                  ? "/dashboard/lessons"
                  : n.key === "games"
                  ? "/dashboard/games"
                  : n.key === "profile"
                  ? "/dashboard/avatar"
                  : "#"
              }
              aria-current={n.active ? "page" : undefined}
              className={`flex flex-col items-center gap-0.5 rounded-2xl py-2 text-[0.65rem] font-bold transition-colors ${
                n.active ? "text-pink-deep" : "text-ink-mute"
              }`}
            >
              <span
                className={`grid h-9 w-9 place-items-center rounded-xl transition-colors ${
                  n.active ? "bg-pink-soft/70" : ""
                }`}
              >
                <Icon name={n.icon} className="h-5 w-5" />
              </span>
              {n.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
