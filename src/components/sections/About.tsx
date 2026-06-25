"use client";

import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import Icon from "../ui/Icon";
import { useT } from "../i18n/LanguageProvider";

const icons = ["book", "spark", "globe"];

export default function About() {
  const t = useT();
  return (
    <section id="about" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow={t.about.eyebrow}
          title={
            <>
              {t.about.title}
              <span className="text-gradient">{t.about.accent}</span>
            </>
          }
          subtitle={t.about.subtitle}
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {t.about.pillars.map((p, i) => (
            <Reveal
              key={p.title}
              delay={i * 90}
              className="group rounded-[1.75rem] bg-white p-7 shadow-card ring-1 ring-pink-soft/40 transition-transform duration-300 hover:-translate-y-1.5"
            >
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-pink-soft to-blue-soft text-pink-ink transition-transform duration-300 group-hover:scale-110">
                <Icon name={icons[i]} className="h-7 w-7" />
              </span>
              <h3 className="mt-5 text-xl font-bold text-ink">{p.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-ink-soft">
                {p.desc}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
