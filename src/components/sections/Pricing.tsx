import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import CTAButton from "../ui/CTAButton";
import { plans, planNotes } from "@/lib/content";

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-gradient-to-b from-pink-soft/30 to-white py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Pricing"
          title={
            <>
              One platform.{" "}
              <span className="text-gradient">Pick your pace.</span>
            </>
          }
          subtitle="Every plan unlocks the exact same content and features — the only difference is how long you keep access. Start with 3 days free."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((p, i) => (
            <Reveal
              key={p.name}
              delay={i * 80}
              className={`relative flex flex-col rounded-[1.75rem] p-7 ring-1 transition-transform duration-300 hover:-translate-y-1.5 ${
                p.featured
                  ? "bg-gradient-to-b from-pink-deep to-pink text-white shadow-pop ring-pink-deep lg:-mt-4 lg:mb-0"
                  : "bg-white text-ink shadow-card ring-pink-soft/50"
              }`}
            >
              {p.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gold px-4 py-1 text-xs font-extrabold text-ink shadow-soft">
                  ★ {p.badge}
                </span>
              )}

              <h3
                className={`font-display text-lg font-bold ${
                  p.featured ? "text-white" : "text-ink"
                }`}
              >
                {p.name}
              </h3>

              <div className="mt-3 flex items-end gap-1">
                <span className="font-display text-4xl font-extrabold">
                  {p.price}
                </span>
              </div>
              <p
                className={`text-sm ${
                  p.featured ? "text-white/80" : "text-ink-mute"
                }`}
              >
                {p.period}
              </p>
              {p.perMonth && (
                <p
                  className={`mt-1 text-xs font-bold ${
                    p.featured ? "text-white" : "text-pink-deep"
                  }`}
                >
                  {p.perMonth}
                </p>
              )}

              <p
                className={`mt-4 flex-1 text-sm leading-relaxed ${
                  p.featured ? "text-white/85" : "text-ink-soft"
                }`}
              >
                {p.note}
              </p>

              <CTAButton
                href="#"
                size="md"
                variant={p.featured ? "ghost" : "primary"}
                className="mt-6 w-full"
              >
                {p.name === "Lifetime" ? "Buy lifetime" : "Start free trial"}
              </CTAButton>
            </Reveal>
          ))}
        </div>

        {/* notes */}
        <Reveal className="mx-auto mt-10 max-w-3xl">
          <ul className="grid gap-2.5 sm:grid-cols-3">
            {planNotes.map((n) => (
              <li
                key={n}
                className="flex items-start gap-2 rounded-2xl bg-white/70 px-4 py-3 text-xs leading-relaxed text-ink-soft shadow-card ring-1 ring-white"
              >
                <span className="mt-0.5 text-pink-deep" aria-hidden>
                  ✓
                </span>
                {n}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-center text-xs text-ink-mute">
            Secure checkout powered by Stripe · multi-currency · Google / Apple /
            email sign-in
          </p>
        </Reveal>
      </div>
    </section>
  );
}
