"use client";

import Meemi from "../Meemi";
import Petals from "../Petals";
import Reveal from "../ui/Reveal";
import CTAButton from "../ui/CTAButton";
import { useT } from "../i18n/LanguageProvider";

export default function FinalCTA() {
  const t = useT();
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <Reveal className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-pink-deep via-pink to-blue-deep px-6 py-16 text-center shadow-pop sm:px-12">
          <Petals count={10} />

          <div className="relative">
            <Meemi className="mx-auto w-28 animate-float" mood="love" />
            <h2 className="mt-6 text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
              {t.finalCta.title1}
              <br />
              {t.finalCta.title2}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-white/90 sm:text-lg">
              {t.finalCta.body}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <CTAButton href="/auth" variant="ghost">
                {t.finalCta.ctaStart}
              </CTAButton>
              <CTAButton href="#features" variant="blue">
                {t.finalCta.ctaExplore}
              </CTAButton>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
