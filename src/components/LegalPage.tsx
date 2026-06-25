import Link from "next/link";
import Meemi from "./Meemi";
import { site } from "@/lib/site";

export default function LegalPage({
  title,
  updated,
  sections,
}: {
  title: string;
  updated: string;
  sections: { heading: string; body: string }[];
}) {
  return (
    <main className="min-h-screen bg-cream">
      <header className="border-b border-pink-soft/50 bg-cream/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-3xl items-center justify-between px-4 sm:px-6">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-white shadow-soft">
              <Meemi className="h-8 w-8" />
            </span>
            <span className="font-display text-lg font-extrabold text-ink">
              Sakura<span className="text-pink-deep">Speak</span>
            </span>
          </Link>
          <Link href="/" className="text-sm font-bold text-pink-ink hover:text-pink-deep">
            ← Home
          </Link>
        </div>
      </header>

      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <h1 className="font-display text-3xl font-extrabold text-ink sm:text-4xl">{title}</h1>
        <p className="mt-2 text-sm text-ink-mute">Last updated: {updated}</p>

        <div className="mt-6 rounded-2xl bg-pink-soft/30 p-4 text-sm text-ink-soft ring-1 ring-pink-soft/50">
          🌸 This is placeholder text for the Sakura Speak prototype. Final legal
          copy will be provided before launch.
        </div>

        <div className="mt-8 space-y-8">
          {sections.map((s) => (
            <section key={s.heading}>
              <h2 className="font-display text-xl font-extrabold text-ink">{s.heading}</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.body}</p>
            </section>
          ))}
        </div>

        <p className="mt-10 text-sm text-ink-soft">
          Questions? Contact us at{" "}
          <a href={`mailto:${site.email}`} className="font-bold text-pink-deep hover:underline">
            {site.email}
          </a>
          .
        </p>
      </article>
    </main>
  );
}
