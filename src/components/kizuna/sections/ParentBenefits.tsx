import { PARENT_BENEFITS } from "@/lib/site";
import { SectionHeading } from "../SectionHeading";
import { Reveal } from "../Reveal";
import { CTALink } from "../CTAButton";

export function ParentBenefits() {
  return (
    <section className="bg-warm py-20 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
        <SectionHeading
          eyebrow="For Parents"
          title={
            <>
              Designed for Children.
              <br />
              Thoughtfully Designed for Parents.
            </>
          }
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {PARENT_BENEFITS.map((b, i) => (
            <Reveal key={b.number} delay={i * 90}>
              <div className="hover-lift h-full rounded-3xl border border-border bg-card p-8 shadow-card">
                <span className="font-display text-4xl font-extrabold text-gold">{b.number}</span>
                <h3 className="mt-5 text-xl font-bold text-navy">{b.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{b.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center" delay={120}>
          <CTALink to="/contact">Talk to Our Team</CTALink>
        </Reveal>
      </div>
    </section>
  );
}
