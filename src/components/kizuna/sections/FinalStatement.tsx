import { Reveal } from "../Reveal";
import { CTALink } from "../CTAButton";

export function FinalStatement() {
  return (
    <section className="relative overflow-hidden bg-navy py-24 lg:py-32">
      <div
        className="pointer-events-none absolute -bottom-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gold/10 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-10">
        <Reveal>
          <h2 className="text-3xl leading-[1.1] font-extrabold text-cream sm:text-5xl">
            Not just an after-school program.
            <br />
            <span className="text-gold">A place to discover, belong, grow and thrive.</span>
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <CTALink to="/book-a-visit">Book a Campus Visit</CTALink>
            <CTALink to="/programs" variant="ghostLight">
              Explore Programs
            </CTALink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
