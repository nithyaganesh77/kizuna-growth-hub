import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { NAV_ITEMS } from "@/lib/site";
import { Logo } from "./Logo";
import { CTALink } from "./CTAButton";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
        scrolled ? "border-b border-border/70 bg-ivory/90 backdrop-blur-md" : "bg-transparent",
      )}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-[1400px] items-center justify-between gap-6 px-5 py-4 lg:px-10"
      >
        <Link to="/" aria-label="KIZUNA home" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <ul className="hidden items-center gap-1 xl:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to as never}
                className="rounded-full px-4 py-2 text-sm font-medium text-navy/75 transition-colors hover:bg-accent/60 hover:text-navy"
                activeProps={{ className: "bg-accent/70 text-navy" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <CTALink to="/programs" variant="secondary" className="px-5 py-2.5">
            Explore Programs
          </CTALink>
          <CTALink to="/book-a-visit" className="px-5 py-2.5">
            Book a Visit
          </CTALink>
        </div>

        <div className="flex items-center gap-2 xl:hidden">
          <CTALink to="/book-a-visit" className="px-4 py-2 text-xs lg:hidden">
            Book a Visit
          </CTALink>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-navy/20 text-navy transition-colors hover:bg-accent/60"
          >
            {open ? <Menu size={20} className="hidden" /> : null}
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-border bg-ivory xl:hidden">
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
            <li className="pt-4">
              <CTALink
                to="/programs"
                variant="secondary"
                className="w-full"
                onClick={() => setOpen(false)}
              >
                Explore Programs
              </CTALink>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
