import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/kizuna/PageHeader";
import { VisitSection } from "@/components/kizuna/sections/VisitSection";
import { ParentBenefits } from "@/components/kizuna/sections/ParentBenefits";

const title = "Book a Campus Visit | KIZUNA";
const description =
  "Request a KIZUNA campus visit and see how a space designed around the whole child transforms the hours beyond the school bell.";

export const Route = createFileRoute("/book-a-visit")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/book-a-visit" },
    ],
    links: [{ rel: "canonical", href: "/book-a-visit" }],
  }),
  component: BookVisitPage,
});

function BookVisitPage() {
  return (
    <>
      <PageHeader
        eyebrow="Book a Visit"
        title="Come Experience KIZUNA"
        subtitle="See how a space designed around the whole child can transform the hours beyond the school bell."
      />
      <VisitSection hideHeading />
      <ParentBenefits />
    </>
  );
}
