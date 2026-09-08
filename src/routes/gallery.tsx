import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/kizuna/PageHeader";
import { GalleryGrid } from "@/components/kizuna/sections/GalleryGrid";
import { FinalStatement } from "@/components/kizuna/sections/FinalStatement";

const title = "Gallery | Life at KIZUNA";
const description =
  "Photos of children learning, creating, moving, building and playing across the KIZUNA campus.";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="Moments From Beyond the Bell"
        subtitle="Everyday scenes of discovery, creativity, movement and friendship."
      />
      <GalleryGrid hideHeading />
      <FinalStatement />
    </>
  );
}
