import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/kizuna/PageHeader";
import { ProgramsGrid } from "@/components/kizuna/sections/ProgramsGrid";
import { AgeFinder } from "@/components/kizuna/sections/AgeFinder";
import { DayTimeline } from "@/components/kizuna/sections/DayTimeline";
import { FinalStatement } from "@/components/kizuna/sections/FinalStatement";

const title = "Programs for Ages 1.5–12 | KIZUNA";
const description =
  "Explore KIZUNA programs: academic support, childcare and extended day, creative and physical growth, life skills and leadership, STEM & robotics, and holiday camps.";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/programs" },
    ],
    links: [{ rel: "canonical", href: "/programs" }],
  }),
  component: ProgramsPage,
});

function ProgramsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Programs"
        title="Programs Designed Around the Whole Child"
        subtitle="From academic support to creativity, movement, communication and life skills — every experience is designed to help children grow beyond the classroom."
      />
      <ProgramsGrid withFilter hideHeading />
      <AgeFinder />
      <DayTimeline />
      <FinalStatement />
    </>
  );
}
