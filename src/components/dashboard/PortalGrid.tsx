import Link from "next/link";
import Icon from "../ui/Icon";
import Reveal from "../ui/Reveal";
import { portals } from "@/lib/dashboard";

const accent: Record<string, { tile: string; chip: string }> = {
  pink: { tile: "from-pink-soft/70 to-white text-pink-ink", chip: "bg-pink-soft/70 text-pink-ink" },
  blue: { tile: "from-blue-soft/70 to-white text-blue-deep", chip: "bg-blue-soft/70 text-blue-deep" },
  mint: { tile: "from-[#dff7ec] to-white text-[#2f9d77]", chip: "bg-[#dff7ec] text-[#2f9d77]" },
  gold: { tile: "from-[#fff2cc] to-white text-gold-deep", chip: "bg-[#fff2cc] text-gold-deep" },
  lilac: { tile: "from-[#efe7ff] to-white text-[#7a5bd6]", chip: "bg-[#efe7ff] text-[#7a5bd6]" },
};

export default function PortalGrid() {
  return (
    <section>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="font-display text-xl font-extrabold text-ink">
          Your learning space
        </h2>
        <span className="text-sm font-semibold text-ink-mute">Explore it all ✦</span>
      </div>

      <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-3 xl:grid-cols-4">
        {portals.map((p, i) => {
          const a = accent[p.accent];
          return (
            <Reveal key={p.key} delay={(i % 4) * 60}>
              <Link
                href={
                  p.key === "profile"
                    ? "/dashboard/profile"
                    : p.key === "lessons"
                    ? "/dashboard/lessons"
                    : p.key === "games"
                    ? "/dashboard/games"
                    : p.key === "vocab"
                    ? "/dashboard/vocab"
                    : "#"
                }
                className={`group relative flex h-full flex-col overflow-hidden rounded-[1.5rem] bg-gradient-to-br ${a.tile} p-4 shadow-card ring-1 ring-white transition-all duration-300 hover:-translate-y-1.5 hover:shadow-pop`}
              >
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/80 shadow-soft transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
                  <Icon name={p.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-3 font-display text-base font-extrabold text-ink">
                  {p.title}
                </h3>
                <p className="mt-1 flex-1 text-xs leading-relaxed text-ink-soft">
                  {p.blurb}
                </p>
                <span
                  className={`mt-3 inline-flex w-fit items-center gap-1 rounded-full px-2.5 py-1 text-[0.7rem] font-bold ${a.chip}`}
                >
                  {p.meta}
                </span>
                <Icon
                  name="chevron"
                  className="absolute right-3 top-4 h-4 w-4 text-ink-mute opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
                />
              </Link>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
