import { ECOSYSTEM } from "@/lib/site";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";

export function Ecosystem() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 lg:py-28">
      <div
        className="pointer-events-none absolute -top-40 -right-32 h-[420px] w-[420px] rounded-full bg-gold/10 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-[1400px] px-5 lg:px-10">
        <SectionHeading
          light
          eyebrow="Signature Experience"
          title={
            <>
              One Place.
              <br />
              Many Ways to Grow.
            </>
          }
        />

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-[1fr_1.1fr_1fr]">
          <ul className="space-y-6">
            {ECOSYSTEM.slice(0, 3).map((e, i) => (
              <EcoItem key={e.key} item={e} delay={i * 90} align="right" />
            ))}
          </ul>

          <Reveal className="mx-auto">
            <div className="relative mx-auto flex aspect-square w-[280px] items-center justify-center sm:w-[340px]">
              <div className="absolute inset-0 rounded-full border border-gold/25" />
              <div className="absolute inset-6 rounded-full border border-gold/20" />
              <div className="absolute inset-12 rounded-full border border-gold/15" />
              <svg
                className="absolute inset-0 h-full w-full text-gold/30"
                viewBox="0 0 200 200"
                fill="none"
                aria-hidden="true"
              >
                {[0, 60, 120, 180, 240, 300].map((deg) => (
                  <path
                    key={deg}
                    d="M100 100 C 100 60, 140 40, 170 46"
                    stroke="currentColor"
                    strokeWidth="0.8"
                    transform={`rotate(${deg} 100 100)`}
                  />
                ))}
              </svg>
              <div className="relative flex h-40 w-40 flex-col items-center justify-center rounded-full bg-gold-gradient text-navy shadow-lift sm:h-48 sm:w-48">
                <span className="text-xl font-extrabold tracking-[0.26em]">KIZUNA</span>
                <span className="mt-2 text-[0.6rem] tracking-[0.22em] uppercase opacity-75">
                  Beyond the Bell
                </span>
              </div>
            </div>
          </Reveal>

          <ul className="space-y-6">
            {ECOSYSTEM.slice(3).map((e, i) => (
              <EcoItem key={e.key} item={e} delay={i * 90} align="left" />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function EcoItem({
  item,
  delay,
  align,
}: {
  item: (typeof ECOSYSTEM)[number];
  delay: number;
  align: "left" | "right";
}) {
  return (
    <Reveal
      as="li"
      delay={delay}
      className={`rounded-2xl border border-cream/12 bg-cream/[0.04] p-5 ${align === "right" ? "lg:text-right" : ""}`}
    >
      <p className="text-sm font-bold tracking-[0.24em] text-gold uppercase">{item.key}</p>
      <p className="mt-2 text-base text-cream/75">{item.label}</p>
    </Reveal>
  );
}
