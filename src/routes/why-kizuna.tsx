import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/kizuna/PageHeader";
import { WhyKizuna } from "@/components/kizuna/sections/WhyKizuna";
import { BeyondAcademics } from "@/components/kizuna/sections/BeyondAcademics";
import { ParentBenefits } from "@/components/kizuna/sections/ParentBenefits";
import { Testimonials } from "@/components/kizuna/sections/Testimonials";
import { FinalStatement } from "@/components/kizuna/sections/FinalStatement";
import { Reveal } from "@/components/kizuna/Reveal";
import { KEY_DIFFERENTIATOR } from "@/lib/site";

const title = "Why KIZUNA | A Connected Ecosystem for Growth";
const description =
  "Learning, care, creativity, communication, movement and emotional development brought together in one connected ecosystem for children ages 1.5–12.";

export const Route = createFileRoute("/why-kizuna")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/why-kizuna" },
    ],
    links: [{ rel: "canonical", href: "/why-kizuna" }],
  }),
  component: WhyPage,
});

function WhyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Why KIZUNA"
        title="Childhood Deserves More Than Academics."
        subtitle="KIZUNA brings learning, care, creativity, communication, movement and emotional development together in one connected ecosystem."
      />
      <WhyKizuna hideHeading />

      <section className="bg-navy py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
          <Reveal className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-semibold tracking-[0.28em] text-gold uppercase">Key Differentiator</p>
            <h2 className="mt-5 text-3xl leading-[1.08] font-extrabold text-cream sm:text-4xl">
              Not a Tuition Centre. Not a Daycare. Not Just an Activity Centre.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-cream/75 sm:text-lg">{KEY_DIFFERENTIATOR}</p>
          </Reveal>
        </div>
      </section>

      <BeyondAcademics />
      <ParentBenefits />
      <Testimonials />
      <FinalStatement />
    </>
  );
}
