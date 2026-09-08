import { useEffect, useState } from "react";
import heroImg from "@/assets/hero-campus.jpg";
import { CTALink } from "../CTAButton";
import { ToneIcon } from "../icons";

const chips = [
  { icon: "book", label: "Learning", tone: "gold" },
  { icon: "palette", label: "Creativity", tone: "apricot" },
  { icon: "activity", label: "Movement", tone: "leaf" },
  { icon: "heart", label: "Well-being", tone: "coral" },
  { icon: "compass", label: "Life Skills", tone: "sky" },
];

export function Hero() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(Math.min(window.scrollY * 0.15, 90));
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative -mt-[92px] flex min-h-[92svh] items-end overflow-hidden pt-[92px]">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <img
          src={heroImg}
          alt="KIZUNA campus at golden hour with petal-shaped roof, glass dome, gardens and children walking with parents"
          width={1920}
          height={1088}
          className="animate-slow-zoom h-full w-full object-cover"
          style={{ transform: `translate3d(0, ${offset}px, 0)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/45 to-navy/25" />
      </div>

      <div className="mx-auto w-full max-w-[1400px] px-5 pt-24 pb-16 lg:px-10 lg:pb-24">
        <div className="grid items-end gap-10 lg:grid-cols-[1.35fr_0.65fr]">
          <div>
            <p
              className="animate-rise text-xs font-semibold tracking-[0.32em] text-gold uppercase"
              style={{ animationDelay: "60ms" }}
            >
              KIZUNA · Beyond the Bell
            </p>
            <h1
              className="animate-rise mt-6 text-4xl leading-[1.03] font-extrabold text-cream sm:text-6xl lg:text-7xl"
              style={{ animationDelay: "180ms" }}
            >
              Beyond the Bell.
              <br />
              Beyond Academics.
            </h1>
            <p
              className="animate-rise mt-7 max-w-2xl text-base leading-relaxed text-cream/80 sm:text-lg"
              style={{ animationDelay: "320ms" }}
            >
              A complete child-development ecosystem where children discover their strengths, build
              meaningful connections, develop life skills and grow into confident, capable
              individuals.
            </p>
            <div
              className="animate-rise mt-9 flex flex-wrap items-center gap-3"
              style={{ animationDelay: "460ms" }}
            >
              <CTALink to="/programs">Explore Programs</CTALink>
              <CTALink to="/book-a-visit" variant="ghostLight">
                Book a Campus Visit
              </CTALink>
            </div>
            <p
              className="animate-rise mt-5 text-sm text-cream/60"
              style={{ animationDelay: "560ms" }}
            >
              Designed for children ages 1.5–12
            </p>
          </div>

          <div
            className="animate-rise rounded-3xl border border-cream/20 bg-ivory/92 p-6 shadow-lift backdrop-blur-sm"
            style={{ animationDelay: "660ms" }}
          >
            <p className="text-lg font-bold text-navy">
              One ecosystem.
              <br />
              Many ways to grow.
            </p>
            <ul className="mt-5 space-y-3">
              {chips.map((c) => (
                <li key={c.label} className="flex items-center gap-3">
                  <ToneIcon name={c.icon} tone={c.tone} size={16} />
                  <span className="text-sm font-medium text-navy/80">{c.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
