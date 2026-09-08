import { PILLARS } from "@/lib/site";
import { Reveal } from "../Reveal";

export function BeyondAcademics() {
  return (
    <section className="bg-warm py-20 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr]">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.28em] text-gold uppercase">
              Beyond Academics
            </p>
            <h2 className="mt-5 text-3xl leading-[1.08] font-extrabold text-navy sm:text-5xl">
              Learning Should Be Experienced, Not Just Memorized.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              KIZUNA nurtures purpose-driven learning, meaningful bonds and enriching experiences —
              not just grades.
            </p>
            <div className="gold-rule mt-8" />
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {PILLARS.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <div className="hover-lift h-full rounded-2xl border border-border bg-card p-6 shadow-soft">
                  <h3 className="text-base font-bold text-navy">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
