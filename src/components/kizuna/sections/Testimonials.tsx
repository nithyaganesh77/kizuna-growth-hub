import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/site";
import { SectionHeading } from "../SectionHeading";
import { Reveal } from "../Reveal";

export function Testimonials() {
  return (
    <section className="bg-warm py-20 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
        <SectionHeading eyebrow="Parent Voices" title="Words From Our Community" />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.id} delay={i * 90} as="article">
              <figure className="hover-lift h-full rounded-3xl border border-border bg-card p-8 shadow-card">
                <Quote size={26} className="text-gold" strokeWidth={1.5} aria-hidden="true" />
                <blockquote className="mt-6 text-base leading-relaxed text-navy/80">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-8 border-t border-border pt-5 text-sm text-muted-foreground">
                  <span className="font-semibold text-navy">{t.author}</span> • {t.meta}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
