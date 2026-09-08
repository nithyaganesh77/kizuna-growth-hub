import { Link } from "@tanstack/react-router";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300 hover:-translate-y-0.5 disabled:pointer-events-none disabled:opacity-60";

export const ctaStyles = {
  primary: cn(base, "bg-gold-gradient text-navy shadow-card hover:shadow-lift"),
  secondary: cn(
    base,
    "border border-navy/25 bg-ivory/70 text-navy hover:border-navy/60 hover:bg-ivory",
  ),
  ghostLight: cn(
    base,
    "border border-cream/40 bg-transparent text-cream hover:border-cream hover:bg-cream/10",
  ),
};

type Variant = keyof typeof ctaStyles;

export function CTALink({
  to,
  variant = "primary",
  className,
  children,
  ...rest
}: { to: string; variant?: Variant; children: ReactNode } & Omit<
  ComponentProps<typeof Link>,
  "to" | "children"
>) {
  return (
    <Link to={to as never} className={cn(ctaStyles[variant], className)} {...rest}>
      {children}
    </Link>
  );
}

export function CTAButton({
  variant = "primary",
  className,
  ...rest
}: { variant?: Variant } & ComponentProps<"button">) {
  return <button className={cn(ctaStyles[variant], className)} {...rest} />;
}
