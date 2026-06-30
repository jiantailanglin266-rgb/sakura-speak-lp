"use client";

// Route-segment error boundary: keeps a thrown render error from white-screening
// the whole app, and offers a recovery action.
export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <main className="grid min-h-screen place-items-center bg-gradient-to-b from-cream via-cream to-pink-soft/30 px-6 text-center">
      <div>
        <p className="text-5xl">🌸</p>
        <h1 className="mt-3 font-display text-2xl font-extrabold text-ink">Something went wrong</h1>
        <p className="mx-auto mt-2 max-w-sm text-sm text-ink-soft">
          An unexpected error occurred. You can try again — your progress is saved.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            onClick={reset}
            className="rounded-full bg-gradient-to-r from-pink-deep to-pink px-5 py-2.5 text-sm font-extrabold text-white shadow-soft transition-transform hover:-translate-y-0.5"
          >
            Try again
          </button>
          <a
            href="/dashboard"
            className="rounded-full bg-white px-5 py-2.5 text-sm font-bold text-pink-ink shadow-card ring-1 ring-pink-soft/60 hover:bg-cream"
          >
            Go to dashboard
          </a>
        </div>
      </div>
    </main>
  );
}
