import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import FaqItem from "../ui/FaqItem";
import { faqs } from "@/lib/content";

export default function FAQ() {
  return (
    <section id="faq" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions, answered"
          subtitle="Everything you might want to know before you start."
        />
        <div className="mt-12 space-y-3.5">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 60}>
              <FaqItem q={f.q} a={f.a} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
