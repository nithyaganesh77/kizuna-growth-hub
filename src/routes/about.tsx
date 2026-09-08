import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/kizuna/PageHeader";
import { Reveal } from "@/components/kizuna/Reveal";
import { VisionMission } from "@/components/kizuna/sections/VisionMission";
import { BeyondAcademics } from "@/components/kizuna/sections/BeyondAcademics";
import { Ecosystem } from "@/components/kizuna/sections/Ecosystem";
import { FinalStatement } from "@/components/kizuna/sections/FinalStatement";

const title = "About KIZUNA | Beyond the School Bell";
const description =
  "KIZUNA creates a connected environment where the hours beyond the school bell become opportunities for learning, creativity, movement, relationships and discovery.";

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
        title="Beyond the School Bell"
        subtitle="KIZUNA means connection — the bonds between children, families, mentors and the world they are growing into."
      />

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
          <Reveal className="mx-auto max-w-3xl">
            <p className="text-2xl leading-snug font-bold text-navy sm:text-3xl">
              Childhood is more than what happens inside a classroom.
            </p>
            <div className="gold-rule mt-7" />
            <div className="mt-8 space-y-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
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
      <FinalStatement />
    </>
  );
}
