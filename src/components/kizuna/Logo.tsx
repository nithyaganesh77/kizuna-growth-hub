import { cn } from "@/lib/utils";
import logoAsset from "@/assets/kizuna-logo.jpg.asset.json";

export function Logo({
  className,
  variant = "navy",
}: {
  className?: string;
  variant?: "navy" | "cream";
}) {
  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <img
        src={logoAsset.url}
        alt="KIZUNA — Beyond the Bell logo"
        className="h-11 w-11 rounded-full object-cover shadow-sm ring-1 ring-navy/10"
      />
      <span className="inline-flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-xl font-extrabold tracking-[0.28em]",
            variant === "cream" ? "text-cream" : "text-navy",
          )}
        >
          KIZUNA
        </span>
        <span
          className={cn(
            "mt-1 text-[0.58rem] font-medium tracking-[0.22em] uppercase",
            variant === "cream" ? "text-cream/70" : "text-muted-foreground",
          )}
        >
          Beyond the Bell
        </span>
      </span>
    </span>
  );
}
