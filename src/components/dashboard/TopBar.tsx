import Link from "next/link";
import Meemi from "../Meemi";
import Icon from "../ui/Icon";
import { learner } from "@/lib/dashboard";

function Stat({
  icon,
  value,
  label,
  cls,
}: {
  icon: string;
  value: string;
  label: string;
  cls: string;
}) {
  return (
    <span
      className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-extrabold ${cls}`}
      title={label}
    >
      <Icon name={icon} className="h-4 w-4" />
      {value}
    </span>
  );
}

export default function TopBar() {
  return (
    <header className="sticky top-0 z-30 flex items-center gap-3 border-b border-pink-soft/40 bg-cream/80 px-4 py-3 backdrop-blur-md sm:px-6">
      {/* mobile logo */}
      <div className="flex items-center gap-2 lg:hidden">
        <span className="grid h-9 w-9 place-items-center rounded-xl bg-white shadow-soft">
          <Meemi className="h-8 w-8" />
        </span>
      </div>

      {/* search */}
      <label className="relative hidden flex-1 items-center sm:flex">
        <Icon
          name="search"
          className="pointer-events-none absolute left-4 h-4 w-4 text-ink-mute"
        />
        <input
          type="text"
          placeholder="Search lessons, words, rooms…"
          className="w-full max-w-md rounded-full border border-pink-soft/60 bg-white/80 py-2.5 pl-11 pr-4 text-sm text-ink placeholder:text-ink-mute focus:border-pink focus:outline-none focus:ring-4 focus:ring-pink/20"
        />
      </label>

      <div className="flex flex-1 items-center justify-end gap-2 sm:flex-none">
        <span data-tour="streak">
          <Stat
            icon="fire"
            value={`${learner.streak}`}
            label="Day streak"
            cls="bg-[#fff0e0] text-[#ef7d2e]"
          />
        </span>
        <Stat
          icon="coin"
          value={learner.coins.toLocaleString()}
          label="Coins"
          cls="bg-[#fff6d6] text-gold-deep"
        />

        <button
          type="button"
          aria-label="Notifications"
          className="relative grid h-10 w-10 place-items-center rounded-full bg-white text-ink-soft shadow-card ring-1 ring-pink-soft/50 hover:text-pink-ink"
        >
          <Icon name="bell" className="h-5 w-5" />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-pink-deep ring-2 ring-white" />
        </button>

        <Link
          href="/dashboard/profile"
          aria-label="Your profile"
          className="flex items-center gap-2 rounded-full bg-white py-1 pl-1 pr-3 shadow-card ring-1 ring-pink-soft/50 hover:ring-pink"
        >
          <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-pink-soft to-blue-soft">
            <Meemi className="h-7 w-7" mood="happy" />
          </span>
          <span className="hidden text-sm font-bold text-ink sm:block">
            {learner.displayName}
          </span>
        </Link>
      </div>
    </header>
  );
}
