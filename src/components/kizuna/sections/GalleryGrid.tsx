import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { GALLERY_CATEGORIES, GALLERY_ITEMS, type GalleryCategory } from "@/lib/gallery";
import { SectionHeading } from "../SectionHeading";
import { Reveal } from "../Reveal";
import { cn } from "@/lib/utils";

export function GalleryGrid() {
  const [filter, setFilter] = useState<GalleryCategory>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const items = GALLERY_ITEMS.filter((i) => filter === "All" || i.category === filter);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  const open = lightbox !== null ? items[lightbox] : null;

  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
        <SectionHeading
          eyebrow="Gallery"
          title="Moments From Beyond the Bell"
          subtitle="Everyday scenes of children reading, creating, moving, building and playing together."
        />

        <div className="mt-10 -mx-5 overflow-x-auto px-5 pb-2 lg:mx-0 lg:px-0">
          <div className="flex w-max gap-2 lg:w-full lg:flex-wrap lg:justify-center">
            {GALLERY_CATEGORIES.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => {
                  setFilter(c);
                  setLightbox(null);
                }}
                aria-pressed={filter === c}
                className={cn(
                  "rounded-full border px-5 py-2.5 text-sm font-medium transition-all",
                  filter === c
                    ? "border-transparent bg-navy text-cream"
                    : "border-navy/15 bg-ivory text-navy/70 hover:border-navy/40 hover:text-navy",
                )}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.id} delay={(i % 3) * 70}>
              <button
                type="button"
                onClick={() => setLightbox(i)}
                className="group block w-full overflow-hidden rounded-2xl border border-border bg-card shadow-soft"
                aria-label={`Open image: ${item.alt}`}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  width={1200}
                  height={900}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {open ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={open.alt}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-navy/90 p-5 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            onClick={() => setLightbox(null)}
            aria-label="Close image"
            className="absolute top-6 right-6 inline-flex h-11 w-11 items-center justify-center rounded-full border border-cream/30 text-cream hover:bg-cream/10"
          >
            <X size={20} />
          </button>
          <figure onClick={(e) => e.stopPropagation()} className="max-w-4xl">
            <img
              src={open.src}
              alt={open.alt}
              className="max-h-[78vh] w-full rounded-2xl object-contain"
            />
            <figcaption className="mt-4 text-center text-sm text-cream/70">{open.alt}</figcaption>
          </figure>
        </div>
      ) : null}
    </section>
  );
}
