import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/kizuna/PageHeader";
import { WhyKizuna } from "@/components/kizuna/sections/WhyKizuna";
import { BeyondAcademics } from "@/components/kizuna/sections/BeyondAcademics";
import { ParentBenefits } from "@/components/kizuna/sections/ParentBenefits";
import { Testimonials } from "@/components/kizuna/sections/Testimonials";
import { FinalStatement } from "@/components/kizuna/sections/FinalStatement";

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
      <WhyKizuna />
      <BeyondAcademics />
      <ParentBenefits />
      <Testimonials />
      <FinalStatement />
    </>
  );
}
