import type { Metadata } from "next";
import Link from "next/link";
import SideNav from "@/components/dashboard/SideNav";
import TopBar from "@/components/dashboard/TopBar";
import MobileNav from "@/components/dashboard/MobileNav";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import { games } from "@/lib/games";

export const metadata: Metadata = {
  title: "Mini-Games",
};

const accent: Record<string, string> = {
  pink: "from-pink-soft/70 to-white text-pink-ink",
  blue: "from-blue-soft/70 to-white text-blue-deep",
  mint: "from-[#dff7ec] to-white text-[#2f9d77]",
  gold: "from-[#fff2cc] to-white text-gold-deep",
  lilac: "from-[#efe7ff] to-white text-[#7a5bd6]",
};

export default function GamesPage() {
  return (
    <div className="flex min-h-screen bg-gradient-to-b from-cream via-cream to-pink-soft/25">
      <SideNav />

      <div className="flex min-w-0 flex-1 flex-col">
        <TopBar />

        <main className="mx-auto w-full max-w-4xl flex-1 px-4 pb-28 pt-6 sm:px-6 lg:pb-10">
          <div className="mb-5 flex items-center gap-3">
            <Link
              href="/dashboard"
              className="grid h-10 w-10 place-items-center rounded-full bg-white text-ink-soft shadow-card ring-1 ring-pink-soft/50 hover:text-pink-ink"
              aria-label="Back to dashboard"
            >
              <Icon name="chevron" className="h-5 w-5 rotate-180" />
            </Link>
            <div>
              <h1 className="font-display text-2xl font-extrabold text-ink">
                Mini-Games 🎮
              </h1>
              <p className="text-sm text-ink-soft">
                Quick, replayable games. Earn XP, coins &amp; keep your streak alive.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {games.map((g, i) => {
              const inner = (
                <>
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-white/80 shadow-soft transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
                    <Icon name={g.icon} className="h-7 w-7" />
                  </span>
                  <div className="mt-4 flex items-center gap-2">
                    <h2 className="font-display text-lg font-extrabold text-ink">
                      {g.title}
                    </h2>
                    {g.soon && (
                      <span className="rounded-full bg-ink/10 px-2 py-0.5 text-[0.6rem] font-bold uppercase tracking-wide text-ink-soft">
                        Soon
                      </span>
                    )}
                  </div>
                  <p className="text-xs font-bold uppercase tracking-wider text-ink-mute">
                    {g.jp}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{g.blurb}</p>
                </>
              );

              const cls = `group relative flex h-full flex-col rounded-[1.75rem] bg-gradient-to-br ${accent[g.accent]} p-6 shadow-card ring-1 ring-white transition-all duration-300`;

              return (
                <Reveal key={g.id} delay={(i % 2) * 80}>
                  {g.soon ? (
                    <div className={`${cls} opacity-70`}>{inner}</div>
                  ) : (
                    <Link href={g.href} className={`${cls} hover:-translate-y-1.5 hover:shadow-pop`}>
                      {inner}
                      <span className="mt-4 inline-flex w-fit items-center gap-1 rounded-full bg-white px-3.5 py-1.5 text-xs font-extrabold text-pink-deep shadow-soft">
                        Play <Icon name="play" className="h-3.5 w-3.5 fill-current" />
                      </span>
                    </Link>
                  )}
                </Reveal>
              );
            })}
          </div>
        </main>

        <MobileNav />
      </div>
    </div>
  );
}
