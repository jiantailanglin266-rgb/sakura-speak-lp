"use client";

import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import { classes } from "@/lib/content";
import { useT } from "../i18n/LanguageProvider";

const dot: Record<string, string> = {
  pink: "bg-pink-deep",
  blue: "bg-blue-deep",
  mint: "bg-[#3fc093]",
  lilac: "bg-[#9a7bea]",
};
const ring: Record<string, string> = {
  pink: "ring-pink/40",
  blue: "ring-blue/50",
  mint: "ring-[#9fe3c5]/60",
  lilac: "ring-[#c9b6ff]/60",
};

export default function Curriculum() {
  const t = useT();
  return (
    <section id="curriculum" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow={t.curriculum.eyebrow}
          title={
            <>
              {t.curriculum.title}
              <span className="text-gradient">{t.curriculum.accent}</span>
            </>
          }
          subtitle={t.curriculum.subtitle}
        />

        <div className="relative mt-16">
          <div
            aria-hidden
            className="absolute left-0 right-0 top-9 hidden h-1 rounded-full bg-gradient-to-r from-pink via-mint to-lilac opacity-50 lg:block"
          />

          <ol className="grid gap-6 lg:grid-cols-4">
            {classes.map((c, i) => (
              <Reveal as="li" key={c.code} delay={i * 110} className="relative">
                <div
                  className={`relative z-10 mx-auto grid h-[4.5rem] w-[4.5rem] place-items-center rounded-3xl bg-white font-display text-2xl font-extrabold text-ink shadow-soft ring-4 ${ring[c.accent]}`}
                >
                  <span className={`absolute -top-1.5 -right-1.5 h-4 w-4 rounded-full ${dot[c.accent]}`} />
                  {c.code}
                </div>
                <div className="mt-5 rounded-[1.5rem] bg-white p-6 text-center shadow-card ring-1 ring-pink-soft/40">
                  <p className="text-xs font-bold uppercase tracking-wider text-ink-mute">
                    {t.curriculum.classes[i].range}
                  </p>
                  <h3 className="mt-1 text-lg font-bold text-ink">{t.curriculum.classes[i].title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    {t.curriculum.classes[i].desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>

        <Reveal className="mx-auto mt-12 max-w-2xl rounded-3xl bg-gradient-to-r from-pink-soft/60 to-blue-soft/60 p-6 text-center ring-1 ring-white">
          <p className="text-sm font-semibold text-ink-soft">{t.curriculum.note}</p>
        </Reveal>
      </div>
    </section>
  );
}
