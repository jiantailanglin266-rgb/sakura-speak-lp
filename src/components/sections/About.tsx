import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import Icon from "../ui/Icon";

const pillars = [
  {
    icon: "book",
    title: "Structured, not scattered",
    desc: "A real curriculum with a clear path — 80 lessons across 4 classes — so you always know where you are and what's next.",
  },
  {
    icon: "spark",
    title: "Joyful by design",
    desc: "Game-like energy, rewards and a living interface. Learning that feels like a space you want to step into, not a chore.",
  },
  {
    icon: "globe",
    title: "Built for fluency",
    desc: "Not a casual time-killer. Sakura Speak is made for learners serious about speaking Japanese for the long run.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Why Sakura Speak"
          title={
            <>
              More than an app — a place to{" "}
              <span className="text-gradient">grow into Japanese</span>
            </>
          }
          subtitle="Sakura Speak blends a serious, systematic curriculum with the warmth, play and community that keep you coming back day after day."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal
              key={p.title}
              delay={i * 90}
              className="group rounded-[1.75rem] bg-white p-7 shadow-card ring-1 ring-pink-soft/40 transition-transform duration-300 hover:-translate-y-1.5"
            >
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-pink-soft to-blue-soft text-pink-ink transition-transform duration-300 group-hover:scale-110">
                <Icon name={p.icon} className="h-7 w-7" />
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
