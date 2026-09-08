import { cn } from "@/lib/utils";

export function Logo({
  className,
  variant = "navy",
}: {
  className?: string;
  variant?: "navy" | "cream";
}) {
  return (
    <span className={cn("inline-flex flex-col leading-none", className)}>
      <span
        className={cn(
          "font-display text-2xl font-extrabold tracking-[0.32em]",
          variant === "cream" ? "text-cream" : "text-navy",
        )}
      >
        KIZUNA
      </span>
      <span className="mt-1 flex items-center gap-2">
        <span className="h-px w-6 bg-gold" aria-hidden="true" />
        <span
          className={cn(
            "text-[0.6rem] font-medium tracking-[0.24em] uppercase",
            variant === "cream" ? "text-cream/70" : "text-muted-foreground",
          )}
        >
          Beyond the Bell
        </span>
      </span>
    </span>
  );
}
