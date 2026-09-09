import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { NAV_ITEMS } from "@/lib/site";
import { Logo } from "./Logo";
import { CTALink } from "./CTAButton";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const overHero = pathname === "/" && !scrolled && !open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        overHero ? "bg-transparent" : "border-b border-border/70 bg-ivory/90 backdrop-blur-md",
      )}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-5 py-3 lg:px-8 xl:px-10"
      >
        <Link to="/" aria-label="KIZUNA home" onClick={() => setOpen(false)}>
          <Logo variant="navy" />
        </Link>

        <ul className="hidden items-center gap-4 lg:flex xl:gap-6">
          {NAV_ITEMS.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to as never}
                className={cn(
                  "relative px-1 py-3 text-[13px] font-semibold whitespace-nowrap transition-colors",
                  "text-navy/75 hover:text-navy",
                )}
                activeProps={{
                  className:
                    "text-navy after:absolute after:inset-x-0 after:bottom-1 after:h-0.5 after:rounded-full after:bg-gold",
                }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center lg:flex">
          <CTALink
            to="/book-a-visit"
            className="min-w-32 px-6 py-2.5 text-[13px] font-semibold shadow-none"
          >
            Book a Visit
          </CTALink>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <CTALink to="/book-a-visit" className="px-4 py-2 text-xs">
            Book a Visit
          </CTALink>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className={cn(
              "inline-flex h-11 w-11 items-center justify-center rounded-full border transition-colors",
              overHero
                ? "border-navy/25 bg-ivory/40 text-navy hover:bg-ivory/70"
                : "border-navy/20 text-navy hover:bg-accent/60",
            )}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-border bg-ivory lg:hidden">
          <ul className="mx-auto flex max-w-[1400px] flex-col px-5 py-3">
            {NAV_ITEMS.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to as never}
                  onClick={() => setOpen(false)}
                  className="block border-b border-border/60 py-3.5 text-base font-medium text-navy"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  );
}
