import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/kizuna/PageHeader";
import { Reveal } from "@/components/kizuna/Reveal";
import { VisionMission } from "@/components/kizuna/sections/VisionMission";
import { BeyondAcademics } from "@/components/kizuna/sections/BeyondAcademics";
import { Ecosystem } from "@/components/kizuna/sections/Ecosystem";
import { FinalStatement } from "@/components/kizuna/sections/FinalStatement";
import { NATIONAL_VISION } from "@/lib/site";

const title = "About KIZUNA | Beyond the Bell";
const description =
  "Born from a vision, nurturing childhood and shaping tomorrow. KIZUNA is a child development, after-school learning and parent support campus.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About KIZUNA"
        title="Beyond the Bell"
        subtitle="Child Development, After-School Learning & Parent Support Campus — where learning continues beyond the classroom."
      />

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold tracking-[0.28em] text-gold uppercase">Our Story</p>
            <p className="mt-5 text-2xl leading-snug font-bold text-navy sm:text-3xl">
              "Born from a Vision, Nurturing Childhood, Shaping Tomorrow."
            </p>
            <p className="mt-4 text-lg font-medium text-navy/80">
              "Where Learning Continues Beyond the Classroom."
            </p>
            <div className="gold-rule mx-auto mt-7" />
            <div className="mt-8 space-y-6 text-left text-base leading-relaxed text-muted-foreground sm:text-lg">
              <p>
                At KIZUNA, every hour beyond the school bell becomes an opportunity to discover,
                connect, create and grow.
              </p>
              <p>
                Children's growth does not stop when the school day ends. KIZUNA creates a connected
                environment where the hours beyond the bell become opportunities for learning,
                creativity, movement, relationships and discovery.
              </p>
              <p>
                From academic support to creative expression, from sports and wellness to STEM and
                life skills, KIZUNA brings multiple dimensions of childhood development together in
                one nurturing ecosystem.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <VisionMission />
      <BeyondAcademics />
      <Ecosystem />

      <section className="bg-warm py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
          <Reveal className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-semibold tracking-[0.28em] text-gold uppercase">Our Commitment</p>
            <h2 className="mt-5 text-3xl leading-[1.08] font-extrabold text-navy sm:text-4xl">
              Nurturing Curious Minds. Supporting Families. Creating Future Leaders.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">{NATIONAL_VISION}</p>
          </Reveal>
        </div>
      </section>

      <FinalStatement />
    </>
  );
}
