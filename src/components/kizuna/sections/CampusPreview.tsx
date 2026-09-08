import campusImg from "@/assets/campus-architecture.jpg";
import { Reveal } from "../Reveal";
import { CTALink } from "../CTAButton";

export function CampusPreview() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="overflow-hidden rounded-[2rem] shadow-lift">
              <img
                src={campusImg}
                alt="KIZUNA campus architecture with petal-shaped roof, circular glass dome, timber façades and gardens"
                width={1600}
                height={1008}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1.2s] hover:scale-[1.03]"
              />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <p className="text-xs font-semibold tracking-[0.28em] text-gold uppercase">Campus</p>
            <h2 className="mt-5 text-3xl leading-[1.08] font-extrabold text-navy sm:text-5xl">
              Where Learning Meets Nature.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              A thoughtfully designed environment where children can learn, play, explore and
              connect — open, light-filled spaces wrapped in greenery.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <CTALink to="/campus" variant="secondary">
                See the Campus
              </CTALink>
              <CTALink to="/book-a-visit">Book a Visit</CTALink>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
