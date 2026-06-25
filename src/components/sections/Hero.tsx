import Meemi from "../Meemi";
import Petals from "../Petals";
import CTAButton from "../ui/CTAButton";
import { site } from "@/lib/site";
import { stats } from "@/lib/content";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-aurora pt-28 pb-20 md:pt-36 md:pb-28"
    >
      <Petals />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Copy */}
        <div className="text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-bold text-pink-ink shadow-soft ring-1 ring-white">
            <span aria-hidden>🌸</span>
            3-day free trial · cancel anytime
          </span>

          <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] text-ink sm:text-5xl md:text-6xl">
            Speak Japanese,
            <br />
            <span className="text-gradient">beautifully.</span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg lg:mx-0">
            Sakura Speak is a long-term, structured platform for real Japanese
            fluency — 80 lessons, vocabulary by situation, mini-games,
            achievements and a warm community. Your companion{" "}
            <span className="font-bold text-pink-ink">Meemi</span> is with you
            every step.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:items-start lg:justify-start">
            <CTAButton href="#pricing">Start your free trial</CTAButton>
            <CTAButton href="#features" variant="ghost">
              See what's inside
            </CTAButton>
          </div>

          {/* stats */}
          <dl className="mt-10 grid max-w-md grid-cols-4 gap-2 lg:mx-0">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl bg-white/70 px-2 py-3 text-center shadow-card ring-1 ring-white"
              >
                <dt className="font-display text-xl font-extrabold text-pink-deep sm:text-2xl">
                  {s.value}
                </dt>
                <dd className="mt-0.5 text-[0.65rem] leading-tight text-ink-soft sm:text-xs">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Meemi stage */}
        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute inset-0 -z-10 animate-blob bg-gradient-to-br from-pink-soft via-white to-blue-soft opacity-80" />
          <div className="relative grid place-items-center p-8">
            <Meemi className="w-72 animate-float drop-shadow-2xl sm:w-80" mood="wave" />

            {/* floating chips */}
            <FloatChip
              className="left-0 top-6 animate-float-slow"
              emoji="🔥"
              title="7-day streak"
            />
            <FloatChip
              className="right-0 top-16 animate-float"
              emoji="🏆"
              title="Class A done!"
            />
            <FloatChip
              className="bottom-6 left-6 animate-float-slow"
              emoji="🪙"
              title="+50 coins"
            />
            <span className="absolute -right-1 bottom-24 animate-sparkle text-2xl">
              ✨
            </span>
          </div>
        </div>
      </div>

      <p className="sr-only">{site.description}</p>
    </section>
  );
}

function FloatChip({
  className = "",
  emoji,
  title,
}: {
  className?: string;
  emoji: string;
  title: string;
}) {
  return (
    <span
      className={`absolute flex items-center gap-2 rounded-full bg-white/90 px-3.5 py-2 text-sm font-bold text-ink shadow-pop ring-1 ring-white ${className}`}
    >
      <span aria-hidden>{emoji}</span>
      {title}
    </span>
  );
}
