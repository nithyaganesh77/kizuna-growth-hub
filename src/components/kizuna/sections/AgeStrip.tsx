import { Reveal } from "../Reveal";

const items = [
  { value: "1.5–12", label: "Years of age" },
  { value: "6", label: "Development dimensions" },
  { value: "1", label: "Connected ecosystem" },
  { value: "Safe", label: "Nurturing environment" },
];

export function AgeStrip() {
  return (
    <section className="border-y border-border bg-ivory">
      <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-8 px-5 py-10 lg:grid-cols-4 lg:px-10">
        {items.map((i, idx) => (
          <Reveal key={i.label} delay={idx * 80} className="text-center">
            <p className="text-2xl font-extrabold text-navy sm:text-3xl">{i.value}</p>
            <p className="mt-2 text-xs tracking-[0.18em] text-muted-foreground uppercase">
              {i.label}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
