import { ArrowRight } from "lucide-react";
import campusHeroAsset from "@/assets/kizuna-campus-hero.png.asset.json";
import { CTALink } from "../CTAButton";

export function Hero() {
  return (
    <section className="relative -mt-[92px] min-h-svh overflow-hidden pt-[92px]">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <img
          src={campusHeroAsset.url}
          alt="KIZUNA's flower-shaped campus at golden hour, with a central glass dome, landscaped gardens and children's playgrounds"
          width={1672}
          height={941}
          fetchPriority="high"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,color-mix(in_oklab,var(--navy)_70%,transparent)_0%,color-mix(in_oklab,var(--navy)_35%,transparent)_27%,transparent_56%)]" />
      </div>

      <div className="mx-auto flex min-h-[calc(100svh-92px)] w-full max-w-[1400px] items-start px-5 pt-14 pb-20 sm:pt-20 lg:px-10 lg:pt-24">
        <div className="grid w-full gap-10 lg:grid-cols-[1fr_0.72fr]">
          <div className="max-w-[580px]">
            <h1
              className="animate-rise text-5xl leading-[0.98] font-extrabold text-ivory sm:text-6xl lg:text-7xl"
              style={{ animationDelay: "80ms" }}
            >
              Beyond the Bell.
              <br />
              Beyond Academics.
            </h1>
            <p
              className="animate-rise mt-6 max-w-[520px] text-base leading-relaxed font-medium text-ivory/90 sm:text-lg"
              style={{ animationDelay: "220ms" }}
            >
              A complete child-development ecosystem where children discover their strengths,
              build meaningful connections, develop life skills and grow into confident, capable
              individuals.
            </p>
            <div
              className="animate-rise mt-7 flex flex-wrap items-center gap-3"
              style={{ animationDelay: "360ms" }}
            >
              <CTALink to="/programs" className="px-7 py-3.5">
                Explore Programs <ArrowRight size={17} aria-hidden="true" />
              </CTALink>
              <CTALink to="/book-a-visit" variant="secondary" className="border-ivory/80 bg-ivory/90 px-7 py-3.5">
                Book a Campus Visit
              </CTALink>
            </div>
            <p
              className="animate-rise mt-4 text-sm font-medium text-ivory/90"
              style={{ animationDelay: "470ms" }}
            >
              Designed for children ages 1.5–12
            </p>
          </div>

          <div className="hidden justify-end pt-12 lg:flex">
            <p
              className="animate-rise max-w-[270px] rotate-[-4deg] text-center font-display text-3xl leading-tight font-semibold italic text-navy"
              style={{ animationDelay: "520ms" }}
            >
              A brighter,
              <br />
              tomorrow begins
              <br />
              here.
              <span className="mx-auto mt-3 block h-1 w-28 rotate-[-8deg] rounded-full bg-gold" />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
