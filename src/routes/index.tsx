import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/kizuna/sections/Hero";
import { AgeStrip } from "@/components/kizuna/sections/AgeStrip";
import { WhyKizuna } from "@/components/kizuna/sections/WhyKizuna";
import { Ecosystem } from "@/components/kizuna/sections/Ecosystem";
import { ProgramsGrid } from "@/components/kizuna/sections/ProgramsGrid";
import { BeyondAcademics } from "@/components/kizuna/sections/BeyondAcademics";
import { AgeFinder } from "@/components/kizuna/sections/AgeFinder";
import { DayTimeline } from "@/components/kizuna/sections/DayTimeline";
import { CampusPreview } from "@/components/kizuna/sections/CampusPreview";
import { ParentBenefits } from "@/components/kizuna/sections/ParentBenefits";
import { VisionMission } from "@/components/kizuna/sections/VisionMission";
import { GalleryGrid } from "@/components/kizuna/sections/GalleryGrid";
import { Testimonials } from "@/components/kizuna/sections/Testimonials";
import { FAQSection } from "@/components/kizuna/sections/FAQSection";
import { VisitSection } from "@/components/kizuna/sections/VisitSection";
import { ContactSection } from "@/components/kizuna/sections/ContactSection";
import { FinalStatement } from "@/components/kizuna/sections/FinalStatement";

const title = "KIZUNA | Beyond the Bell — Child Development Ecosystem";
const description =
  "KIZUNA is a complete child-development ecosystem for children ages 1.5–12, bringing together learning, childcare, creativity, communication, wellness, life skills and STEM experiences.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <AgeStrip />
      <WhyKizuna />
      <Ecosystem />
      <ProgramsGrid />
      <BeyondAcademics />
      <AgeFinder />
      <DayTimeline />
      <CampusPreview />
      <ParentBenefits />
      <VisionMission />
      <GalleryGrid />
      <Testimonials />
      <FAQSection />
      <VisitSection />
      <ContactSection />
      <FinalStatement />
    </>
  );
}
