import { DAY_TIMELINE } from "@/lib/site";
import { SectionHeading } from "../SectionHeading";
import { Reveal } from "../Reveal";
import { ToneIcon } from "../icons";

const tones = ["gold", "apricot", "coral", "leaf", "sky", "navy", "gold"];

export function DayTimeline() {
  return (
    <section className="bg-warm py-20 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
        <SectionHeading
          eyebrow="Daily Experience"
          title="A Day Beyond the Bell"
          subtitle="A gentle rhythm of arriving, learning, creating, moving, discovering and connecting."
        />

        <div className="relative mt-14 -mx-5 overflow-x-auto px-5 pb-4 lg:mx-0 lg:px-0">
          <div className="absolute top-[52px] right-0 left-0 hidden h-px bg-gold/40 lg:block" />
          <ol className="flex w-max gap-5 lg:grid lg:w-full lg:grid-cols-7 lg:gap-4">
            {DAY_TIMELINE.map((step, i) => (
              <Reveal key={step.key} as="li" delay={i * 70} className="w-[220px] lg:w-auto">
                <div className="relative flex h-full flex-col items-center rounded-3xl border border-border bg-card p-6 text-center shadow-soft">
                  <ToneIcon name={step.icon} tone={tones[i]} size={18} />
                  <p className="mt-4 text-xs font-bold tracking-[0.2em] text-navy uppercase">
                    {step.key}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
