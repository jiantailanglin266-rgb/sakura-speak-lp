"use client";

import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import FaqItem from "../ui/FaqItem";
import { useT } from "../i18n/LanguageProvider";

export default function FAQ() {
  const t = useT();
  return (
    <section id="faq" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading
          eyebrow={t.faq.eyebrow}
          title={t.faq.title}
          subtitle={t.faq.subtitle}
        />
        <div className="mt-12 space-y-3.5">
          {t.faq.items.map((f, i) => (
            <Reveal key={f.q} delay={i * 60}>
              <FaqItem q={f.q} a={f.a} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
