import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/kizuna/PageHeader";
import { ContactSection } from "@/components/kizuna/sections/ContactSection";
import { FAQSection } from "@/components/kizuna/sections/FAQSection";

const title = "Contact KIZUNA | Book a Visit or Ask a Question";
const description =
  "Get in touch with the KIZUNA team about programs, campus visits, childcare, academic support, STEM & robotics or holiday camps.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's Begin Your Child's KIZUNA Journey."
        subtitle="Tell us a little about your child and our team will guide you to the right experience."
      />
      <ContactSection hideHeading />
      <FAQSection />
    </>
  );
}
