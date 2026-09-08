import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/kizuna/PageHeader";
import { ParentBenefits } from "@/components/kizuna/sections/ParentBenefits";
import { DayTimeline } from "@/components/kizuna/sections/DayTimeline";
import { Testimonials } from "@/components/kizuna/sections/Testimonials";
import { FAQSection } from "@/components/kizuna/sections/FAQSection";
import { FinalStatement } from "@/components/kizuna/sections/FinalStatement";

const title = "Parent Corner | KIZUNA";
const description =
  "Peace of mind, one connected experience and a broader view of growth — how KIZUNA is designed for parents as well as children.";

export const Route = createFileRoute("/parent-corner")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/parent-corner" },
    ],
    links: [{ rel: "canonical", href: "/parent-corner" }],
  }),
  component: ParentCornerPage,
});

function ParentCornerPage() {
  return (
    <>
      <PageHeader
        eyebrow="Parent Corner"
        title="Designed for Children. Thoughtfully Designed for Parents."
        subtitle="Everything families need to understand the KIZUNA day, the approach and how to get in touch."
      />
      <ParentBenefits />
      <DayTimeline />
      <Testimonials />
      <FAQSection />
      <FinalStatement />
    </>
  );
}
