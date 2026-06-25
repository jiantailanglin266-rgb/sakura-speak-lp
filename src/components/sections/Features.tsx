import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import Icon from "../ui/Icon";
import { features } from "@/lib/content";

const accentMap: Record<string, string> = {
  pink: "from-pink-soft to-pink/40 text-pink-ink",
  blue: "from-blue-soft to-blue/40 text-blue-deep",
  gold: "from-[#fff0c2] to-gold/40 text-gold-deep",
  mint: "from-[#dff7ec] to-mint/50 text-[#2f9d77]",
  lilac: "from-[#efe7ff] to-lilac/50 text-[#7a5bd6]",
};

export default function Features() {
  return (
    <section
      id="features"
      className="relative overflow-hidden bg-gradient-to-b from-white to-pink-soft/25 py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Inside the member area"
          title={
            <>
              A learning <span className="text-gradient">command center</span>
            </>
          }
          subtitle="After you sign in, the Student Dashboard is your home base — a portal to everything, designed to feel exciting even when there's a lot to do."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <Reveal
              key={f.title}
              delay={(i % 3) * 80}
              className="group relative overflow-hidden rounded-[1.75rem] bg-white p-7 shadow-card ring-1 ring-white transition-all duration-300 hover:-translate-y-1.5 hover:shadow-pop"
            >
              <span
                className={`grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${accentMap[f.accent]} transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110`}
              >
                <Icon name={f.icon} className="h-7 w-7" />
              </span>
              <p className="mt-5 font-display text-xs font-bold uppercase tracking-wider text-ink-mute">
                {f.jp}
              </p>
              <h3 className="mt-1 text-xl font-bold text-ink">{f.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-ink-soft">
                {f.desc}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
