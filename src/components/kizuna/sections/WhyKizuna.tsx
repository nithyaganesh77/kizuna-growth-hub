import { FEATURES } from "@/lib/site";
import { SectionHeading } from "../SectionHeading";
import { Reveal } from "../Reveal";
import { ToneIcon } from "../icons";

export function WhyKizuna({ hideHeading = false }: { hideHeading?: boolean }) {
  return (
    <section className="bg-warm py-20 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
        {hideHeading ? null : (
          <SectionHeading
            eyebrow="Why KIZUNA"
            title="Childhood Deserves More Than Academics."
            subtitle="KIZUNA brings learning, care, creativity, communication, movement and emotional development together in one connected ecosystem."
          />
        )}

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={i * 70} as="article">
              <div className="hover-lift h-full rounded-3xl border border-border bg-card p-8 shadow-card">
                <ToneIcon name={f.icon} tone={f.tone} />
                <h3 className="mt-6 text-xl font-bold text-navy">{f.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
