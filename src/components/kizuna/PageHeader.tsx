import type { ReactNode } from "react";

export function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
}) {
  return (
    <section className="bg-warm pt-16 pb-14 lg:pt-24 lg:pb-20">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
        <p className="animate-rise text-xs font-semibold tracking-[0.28em] text-gold uppercase">
          {eyebrow}
        </p>
        <h1
          className="animate-rise mt-5 max-w-4xl text-4xl leading-[1.05] font-extrabold text-navy sm:text-5xl lg:text-6xl"
          style={{ animationDelay: "120ms" }}
        >
          {title}
        </h1>
        {subtitle ? (
          <p
            className="animate-rise mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
            style={{ animationDelay: "240ms" }}
          >
            {subtitle}
          </p>
        ) : null}
      </div>
    </section>
  );
}
