import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/kizuna/PageHeader";
import { FAQSection } from "@/components/kizuna/sections/FAQSection";
import { FinalStatement } from "@/components/kizuna/sections/FinalStatement";
import { FAQS } from "@/lib/site";

const title = "FAQs | KIZUNA";
const description =
  "Answers to common parent questions about KIZUNA age groups, programs, approach to learning, parent partnership and campus visits.";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <>
      <PageHeader
        eyebrow="FAQ"
        title="Questions Parents Ask"
        subtitle="If you don't find what you're looking for, our team is happy to help."
      />
      <FAQSection />
      <FinalStatement />
    </>
  );
}
