import Link from "next/link";
import Meemi from "../Meemi";
import Icon from "../ui/Icon";
import { navItems } from "@/lib/dashboard";
import LogoutButton from "./LogoutButton";
import PlanStatusCard from "./PlanStatusCard";

export default function SideNav() {
  return (
    <aside className="sticky top-0 hidden h-screen w-64 shrink-0 flex-col border-r border-pink-soft/50 bg-white/70 px-4 py-6 backdrop-blur-md lg:flex">
      <Link href="/" className="flex items-center gap-2.5 px-2">
        <span className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-pink-soft to-blue-soft shadow-soft">
          <Meemi className="h-9 w-9" />
        </span>
        <span className="font-display text-lg font-extrabold text-ink">
          Sakura<span className="text-pink-deep">Speak</span>
        </span>
      </Link>

      <nav data-tour="nav" className="mt-8 flex flex-1 flex-col gap-1">
        {navItems.map((n) => (
          <Link
            key={n.key}
            href={
              n.key === "home"
                ? "/dashboard"
                : n.key === "lessons"
                ? "/dashboard/lessons"
                : n.key === "games"
                ? "/dashboard/games"
                : n.key === "vocab"
                ? "/dashboard/vocab"
                : n.key === "anime"
                ? "/dashboard/anime"
                : n.key === "chat"
                ? "/dashboard/community"
                : n.key === "review"
                ? "/dashboard/review"
                : n.key === "news"
                ? "/dashboard/news"
                : n.key === "profile"
                ? "/dashboard/profile"
                : "#"
            }
            aria-current={n.active ? "page" : undefined}
            className={`group flex items-center gap-3 rounded-2xl px-3 py-2.5 text-sm font-bold transition-all ${
              n.active
                ? "bg-gradient-to-r from-pink-deep to-pink text-white shadow-soft"
                : "text-ink-soft hover:bg-pink-soft/50 hover:text-pink-ink"
            }`}
          >
            <Icon
              name={n.icon}
              className={`h-5 w-5 ${n.active ? "" : "transition-transform group-hover:scale-110"}`}
            />
            {n.label}
          </Link>
        ))}
      </nav>

      <PlanStatusCard />

      <LogoutButton className="mt-2" />
    </aside>
  );
}
