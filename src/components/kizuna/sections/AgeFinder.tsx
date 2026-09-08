import { useState } from "react";
import { AGE_GROUPS } from "@/lib/site";
import { SectionHeading } from "../SectionHeading";
import { Reveal } from "../Reveal";
import { CTALink } from "../CTAButton";
import { cn } from "@/lib/utils";

export function AgeFinder() {
  const [active, setActive] = useState(AGE_GROUPS[0].id);
  const group = AGE_GROUPS.find((g) => g.id === active) ?? AGE_GROUPS[0];

  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
        <SectionHeading
          eyebrow="Program Finder"
          title="Find the Right Experience for Your Child"
          subtitle="Choose an age group to see the kinds of experiences KIZUNA brings together."
        />

        <Reveal className="mt-12">
          <div
            role="tablist"
            aria-label="Age groups"
            className="mx-auto -mx-5 flex gap-2 overflow-x-auto px-5 pb-2 sm:mx-0 sm:flex-wrap sm:justify-center sm:px-0"
          >
            {AGE_GROUPS.map((g) => (
              <button
                key={g.id}
                role="tab"
                aria-selected={active === g.id}
                aria-controls={`age-panel-${g.id}`}
                id={`age-tab-${g.id}`}
                type="button"
                onClick={() => setActive(g.id)}
                className={cn(
                  "rounded-full border px-6 py-3 text-sm font-semibold whitespace-nowrap transition-all",
                  active === g.id
                    ? "border-transparent bg-gold-gradient text-navy shadow-card"
                    : "border-navy/15 bg-ivory text-navy/70 hover:border-navy/40 hover:text-navy",
                )}
              >
                {g.label}
              </button>
            ))}
          </div>

          <div
            role="tabpanel"
            id={`age-panel-${group.id}`}
            aria-labelledby={`age-tab-${group.id}`}
            className="mt-10 rounded-3xl border border-border bg-card p-8 shadow-card sm:p-12"
          >
            <p className="text-xs font-semibold tracking-[0.24em] text-gold uppercase">
              Age {group.label}
            </p>
            <p className="mt-4 max-w-2xl text-xl leading-snug font-bold text-navy sm:text-2xl">
              {group.summary}
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {group.categories.map((c) => (
                <li
                  key={c}
                  className="rounded-2xl border border-border bg-background px-5 py-4 text-sm font-medium text-navy/80"
                >
                  {c}
                </li>
              ))}
            </ul>
            <div className="mt-9">
              <CTALink to="/programs">Explore Programs</CTALink>
            </div>
          </div>

          <p className="mx-auto mt-6 max-w-2xl text-center text-xs text-muted-foreground">
            These age descriptions are general summaries of the KIZUNA experience.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
