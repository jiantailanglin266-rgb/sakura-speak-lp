import Link from "next/link";

export default function GameTopBar({
  title,
  right,
}: {
  title: string;
  right?: React.ReactNode;
}) {
  return (
    <header className="sticky top-0 z-20 flex items-center gap-3 bg-cream/85 px-4 py-3 backdrop-blur-md sm:px-6">
      <Link
        href="/dashboard/games"
        aria-label="Exit game"
        className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white text-ink-soft shadow-card ring-1 ring-pink-soft/50 hover:text-pink-ink"
      >
        ✕
      </Link>
      <h1 className="flex-1 truncate font-display text-base font-extrabold text-ink">
        {title}
      </h1>
      {right}
    </header>
  );
}
