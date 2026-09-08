import { Compass, HeartHandshake, Lightbulb, Target } from "lucide-react";
import { BELIEF, MISSION, PURPOSE, SOLUTION, VISION } from "@/lib/site";
import { Reveal } from "../Reveal";

export function VisionMission() {
  return (
    <section className="bg-navy py-20 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-2">
          {[
            { icon: Compass, title: "The Vision", text: VISION },
            { icon: HeartHandshake, title: "Mission of the Institution", text: MISSION },
            { icon: Lightbulb, title: "Our Belief", text: `KIZUNA is built on a simple belief: "${BELIEF}"` },
            { icon: Target, title: "Our Purpose", text: PURPOSE },
          ].map((c, i) => (
            <Reveal key={c.title} delay={i * 120}>
              <div className="h-full rounded-[2rem] border border-gold/25 bg-cream/[0.04] p-9 sm:p-12">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-gold/40 text-gold">
                  <c.icon size={24} strokeWidth={1.4} aria-hidden="true" />
                </span>
                <h2 className="mt-7 text-2xl font-extrabold text-cream sm:text-3xl">{c.title}</h2>
                <div className="gold-rule mt-5" />
                <p className="mt-6 text-base leading-relaxed text-cream/75 sm:text-lg">{c.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="mx-auto mt-10 max-w-4xl text-center">
          <div className="rounded-[2rem] border border-gold/25 bg-cream/[0.04] p-9 sm:p-12">
            <p className="text-xs font-semibold tracking-[0.28em] text-gold uppercase">Our Solution</p>
            <p className="mt-5 text-base leading-relaxed text-cream/80 sm:text-lg">{SOLUTION}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
