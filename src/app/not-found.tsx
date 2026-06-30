import Link from "next/link";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-gradient-to-b from-cream via-cream to-pink-soft/30 px-6 text-center">
      <div>
        <p className="font-display text-7xl font-extrabold text-pink-deep">404</p>
        <h1 className="mt-3 font-display text-2xl font-extrabold text-ink">This page wandered off 🌸</h1>
        <p className="mx-auto mt-2 max-w-sm text-sm text-ink-soft">
          The page you&apos;re looking for doesn&apos;t exist or has moved. Let&apos;s get you back on track.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="rounded-full bg-gradient-to-r from-pink-deep to-pink px-5 py-2.5 text-sm font-extrabold text-white shadow-soft transition-transform hover:-translate-y-0.5"
          >
            Back home
          </Link>
          <Link
            href="/dashboard"
            className="rounded-full bg-white px-5 py-2.5 text-sm font-bold text-pink-ink shadow-card ring-1 ring-pink-soft/60 hover:bg-cream"
          >
            Go to dashboard
          </Link>
        </div>
      </div>
    </main>
  );
}
