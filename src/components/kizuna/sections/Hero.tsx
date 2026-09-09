import { ArrowRight } from "lucide-react";
import campusHeroAsset from "@/assets/kizuna-campus-hero.png";
import { CTALink } from "../CTAButton";

export function Hero() {
  return (
    <section className="relative -mt-[92px] min-h-svh overflow-hidden pt-[92px]">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <img
          src={campusHeroAsset}
          alt="KIZUNA flower-shaped campus at golden hour, with a central glass dome, landscaped gardens and children's playgrounds"
          width={1672}
          height={941}
          fetchPriority="high"
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="mx-auto w-full max-w-[1440px] px-5 pt-1 pb-20 lg:px-10 lg:pt-2">
        <div className="relative max-w-[470px]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-x-4 -inset-y-3 -z-10 rounded-[50%] bg-[radial-gradient(ellipse_at_center,color-mix(in_oklab,var(--ivory)_72%,transparent)_0%,color-mix(in_oklab,var(--ivory)_48%,transparent)_38%,color-mix(in_oklab,var(--ivory)_18%,transparent)_62%,transparent_80%)] blur-[28px]"
          />

          <h1
            className="animate-rise font-display text-[1.5rem] leading-[1.08] font-extrabold text-[oklch(0.19_0.055_262)] sm:text-[1.8rem] lg:text-[2.1rem]"
            style={{ animationDelay: "80ms" }}
          >
            Beyond the Bell.
            <br />
            Beyond Academics.
          </h1>
          <p
            className="animate-rise mt-3 max-w-[400px] text-[13px] leading-[1.6] font-medium text-[oklch(0.22_0.05_262)]"
            style={{ animationDelay: "220ms" }}
          >
            A complete child-development ecosystem where children discover their strengths,
            build meaningful connections, develop life skills and grow into confident, capable
            individuals.
          </p>
          <div
            className="animate-rise mt-5 flex flex-wrap items-center gap-3"
            style={{ animationDelay: "360ms" }}
          >
            <CTALink
              to="/programs"
              className="bg-gold px-5 py-2.5 text-[12.5px] font-bold text-[oklch(0.19_0.055_262)] shadow-none transition-colors hover:bg-black hover:text-ivory hover:shadow-card"
            >
              Explore Programs <ArrowRight size={16} strokeWidth={2.25} aria-hidden="true" />
            </CTALink>
            <CTALink
              to="/book-a-visit"
              variant="secondary"
              className="border-2 border-[oklch(0.19_0.055_262)] bg-ivory/95 px-5 py-[9px] text-[12.5px] font-semibold text-[oklch(0.19_0.055_262)] shadow-none transition-colors hover:border-black hover:bg-black hover:text-ivory"
            >
              Book a Campus Visit
            </CTALink>
          </div>
          <p
            className="animate-rise mt-3.5 text-[12.5px] font-semibold text-[oklch(0.22_0.05_262)]"
            style={{ animationDelay: "470ms" }}
          >
            Designed for children ages 1.5 &ndash; 12
          </p>
        </div>
      </div>
    </section>
  );
}
