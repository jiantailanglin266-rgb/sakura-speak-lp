"use client";

import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import Icon from "../ui/Icon";
import { useT } from "../i18n/LanguageProvider";

const tiers = [
  { name: "Bronze", cls: "from-[#e0a875] to-[#c17a45] text-white" },
  { name: "Silver", cls: "from-[#e9edf2] to-[#b9c2cc] text-ink" },
  { name: "Gold", cls: "from-[#ffe08a] to-[#f5a623] text-white" },
  { name: "Sakura", cls: "from-[#ffd6e5] to-[#f7a8c4] text-white shadow-pop" },
  { name: "Platinum", cls: "from-white to-[#ffe6f0] text-pink-ink ring-2 ring-pink-soft" },
];

const icons = ["chat", "globe", "shield"];

export default function Community() {
  const t = useT();
  return (
    <section className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow={t.community.eyebrow}
          title={
            <>
              {t.community.title}
              <span className="text-gradient">{t.community.accent}</span>
            </>
          }
          subtitle={t.community.subtitle}
        />

        {/* Achievement tiers */}
        <Reveal className="mx-auto mt-12 max-w-3xl rounded-[2rem] bg-white p-7 shadow-card ring-1 ring-pink-soft/40">
          <div className="flex items-center justify-center gap-2.5">
            <Icon name="trophy" className="h-6 w-6 text-gold-deep" />
            <p className="font-display text-lg font-bold text-ink">{t.community.tiersTitle}</p>
          </div>
          <div className="mt-6 flex flex-wrap items-end justify-center gap-4">
            {tiers.map((tier, i) => (
              <div key={tier.name} className="flex flex-col items-center gap-2">
                <span
                  className={`grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br font-display text-xl font-extrabold shadow-soft ${tier.cls}`}
                  style={{ transform: `translateY(${(2 - Math.abs(2 - i)) * -6}px)` }}
                >
                  ★
                </span>
                <span className="text-xs font-bold text-ink-soft">{tier.name}</span>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Community cards */}
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {t.community.cards.map((c, i) => (
            <Reveal
              key={c.title}
              delay={i * 90}
              className="rounded-[1.75rem] bg-gradient-to-b from-white to-pink-soft/20 p-7 shadow-card ring-1 ring-white"
            >
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-pink-soft/60 p-3.5 text-pink-ink">
                <Icon name={icons[i]} className="h-7 w-7" />
              </span>
              <h3 className="mt-4 text-lg font-bold text-ink">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{c.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
