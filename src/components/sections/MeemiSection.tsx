"use client";

import Meemi from "../Meemi";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import { useT } from "../i18n/LanguageProvider";

const moods = ["happy", "wink", "love", "wave"] as const;

export default function MeemiSection() {
  const t = useT();
  return (
    <section
      id="meemi"
      className="relative overflow-hidden bg-gradient-to-b from-blue-soft/30 to-white py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow={t.meemi.eyebrow}
          title={
            <>
              {t.meemi.title}
              <span className="text-gradient">{t.meemi.accent}</span>
            </>
          }
          subtitle={t.meemi.subtitle}
        />

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-2">
          {/* Avatar variations */}
          <Reveal className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-5 sm:grid-cols-4 lg:grid-cols-2">
              {moods.map((m, i) => (
                <div
                  key={m}
                  className="group grid aspect-square place-items-center rounded-[1.75rem] bg-white p-5 shadow-card ring-1 ring-pink-soft/50 transition-transform duration-300 hover:-translate-y-1.5"
                  style={{ animationDelay: `${i * 0.3}s` }}
                >
                  <Meemi className="w-28 transition-transform duration-300 group-hover:scale-110" mood={m} />
                </div>
              ))}
            </div>
            <p className="mt-4 text-center text-sm text-ink-soft">{t.meemi.variations}</p>
          </Reveal>

          {/* Story + customization chips */}
          <Reveal delay={120} className="order-1 lg:order-2">
            <div className="rounded-[2rem] bg-white p-8 shadow-soft ring-1 ring-white">
              <div className="flex items-center gap-4">
                <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-pink-soft to-blue-soft">
                  <Meemi className="h-14 w-14" />
                </span>
                <div>
                  <h3 className="text-xl font-bold text-ink">{t.meemi.freeTitle}</h3>
                  <p className="text-sm text-ink-soft">{t.meemi.freeDesc}</p>
                </div>
              </div>

              <ul className="mt-6 grid grid-cols-2 gap-2.5">
                {t.meemi.free.map((c) => (
                  <li
                    key={c}
                    className="flex items-center gap-2 rounded-full bg-pink-soft/40 px-3.5 py-2 text-sm font-semibold text-pink-ink"
                  >
                    <span aria-hidden>🎀</span>
                    {c}
                  </li>
                ))}
              </ul>

              <div className="mt-6 rounded-2xl bg-gradient-to-r from-gold/20 to-pink-soft/40 p-4">
                <p className="flex items-center gap-2 text-sm font-semibold text-ink">
                  <span className="text-lg" aria-hidden>🪙</span>
                  {t.meemi.coinNote}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
