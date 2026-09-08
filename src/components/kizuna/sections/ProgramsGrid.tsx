import { useState } from "react";
import { PROGRAMS } from "@/lib/site";
import { SectionHeading } from "../SectionHeading";
import { Reveal } from "../Reveal";
import { ToneIcon } from "../icons";
import { CTALink } from "../CTAButton";
import { cn } from "@/lib/utils";

const FILTERS = ["All", ...PROGRAMS.map((p) => p.title)];

export function ProgramsGrid({
  withFilter = false,
  hideHeading = false,
}: {
  withFilter?: boolean;
  hideHeading?: boolean;
}) {
  const [active, setActive] = useState("All");
  const shown = active === "All" ? PROGRAMS : PROGRAMS.filter((p) => p.title === active);

  return (
    <section className="bg-background py-20 lg:py-28" id="programs">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
        {hideHeading ? null : (
          <SectionHeading
            eyebrow="Programs"
            title="Programs Designed Around the Whole Child"
            subtitle="From academic support to creativity, movement, communication and life skills — every experience is designed to help children grow beyond the classroom."
          />
        )}

        {withFilter ? (
          <div className="mt-10 -mx-5 overflow-x-auto px-5 pb-2 lg:mx-0 lg:px-0">
            <div className="flex w-max gap-2 lg:w-full lg:flex-wrap lg:justify-center">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  type="button"
                  onClick={() => setActive(f)}
                  aria-pressed={active === f}
                  className={cn(
                    "rounded-full border px-5 py-2.5 text-sm font-medium whitespace-nowrap transition-all",
                    active === f
                      ? "border-transparent bg-navy text-cream"
                      : "border-navy/15 bg-ivory text-navy/70 hover:border-navy/40 hover:text-navy",
                  )}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        ) : null}

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {shown.map((p, i) => (
            <Reveal key={p.id} delay={i * 70} as="article">
              <div className="hover-lift flex h-full flex-col rounded-3xl border border-border bg-card p-8 shadow-card">
                <div className="flex items-start justify-between">
                  <ToneIcon name={p.icon} tone={p.tone} />
                  <span className="font-display text-3xl font-extrabold text-navy/10">
                    {p.number}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-bold text-navy">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {p.features.map((f) => (
                    <li
                      key={f}
                      className="rounded-full bg-accent/60 px-3 py-1.5 text-xs font-medium text-navy/75"
                    >
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-2">
                  <CTALink to="/book-a-visit" variant="secondary" className="px-5 py-2.5 text-xs">
                    {p.cta}
                  </CTALink>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
