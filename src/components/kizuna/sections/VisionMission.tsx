import { Compass, HeartHandshake } from "lucide-react";
import { MISSION, VISION } from "@/lib/site";
import { Reveal } from "../Reveal";

export function VisionMission() {
  return (
    <section className="bg-navy py-20 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-2">
          {[
            { icon: Compass, title: "Our Vision", text: VISION },
            { icon: HeartHandshake, title: "Our Mission", text: MISSION },
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
      </div>
    </section>
  );
}
