import { createFileRoute } from "@tanstack/react-router";
import campusImg from "@/assets/campus-architecture.jpg";
import outdoorImg from "@/assets/gallery-outdoor.jpg";
import { PageHeader } from "@/components/kizuna/PageHeader";
import { Reveal } from "@/components/kizuna/Reveal";
import { SectionHeading } from "@/components/kizuna/SectionHeading";
import { CTALink } from "@/components/kizuna/CTAButton";
import { LEARNING_SPACES } from "@/lib/site";
import { GalleryGrid } from "@/components/kizuna/sections/GalleryGrid";

const title = "Our Campus | Where Learning Meets Nature — KIZUNA";
const description =
  "A thoughtfully designed KIZUNA environment where children learn, play, explore and connect: creative studios, learning spaces, STEM areas, wellness rooms and outdoor play.";

export const Route = createFileRoute("/campus")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/campus" },
    ],
    links: [{ rel: "canonical", href: "/campus" }],
  }),
  component: CampusPage,
});

function CampusPage() {
  return (
    <>
      <PageHeader
        eyebrow="Campus"
        title="Where Learning Meets Nature."
        subtitle="A thoughtfully designed environment where children can learn, play, explore and connect."
      />

      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
          <Reveal>
            <div className="overflow-hidden rounded-[2rem] shadow-lift">
              <img
                src={campusImg}
                alt="KIZUNA campus building with flower-petal roof, circular glass dome and landscaped gardens"
                width={1600}
                height={1008}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={100} className="mx-auto mt-10 max-w-3xl text-center">
            <h2 className="text-2xl font-extrabold text-navy sm:text-3xl">Campus Architecture</h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              An inspiring architectural environment designed to create a sense of openness,
              connection and discovery.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-warm py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
          <SectionHeading eyebrow="Learning Spaces" title="Spaces Shaped Around Children" />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {LEARNING_SPACES.map((s, i) => (
              <Reveal key={s.title} delay={i * 70}>
                <div className="hover-lift h-full rounded-3xl border border-border bg-card p-8 shadow-card">
                  <h3 className="text-lg font-bold text-navy">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-5 lg:grid-cols-2 lg:px-10">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.28em] text-gold uppercase">
              Nature & Well-being
            </p>
            <h2 className="mt-5 text-3xl leading-[1.08] font-extrabold text-navy sm:text-4xl">
              Gardens, Trees and Room to Breathe.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Natural light, open spaces and greenery shape the everyday rhythm — children explore
              outdoors, play freely and return calm and curious.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="overflow-hidden rounded-[2rem] shadow-lift">
              <img
                src={outdoorImg}
                alt="Children playing outdoors in a garden with trees and a wooden play structure"
                width={1200}
                height={900}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <GalleryGrid />

      <section className="bg-navy py-20 text-center lg:py-28">
        <div className="mx-auto max-w-3xl px-5 lg:px-10">
          <Reveal>
            <h2 className="text-3xl font-extrabold text-cream sm:text-4xl">
              Experience KIZUNA in Person
            </h2>
            <p className="mt-5 text-base text-cream/70 sm:text-lg">
              Walk the gardens, see the studios and meet the team.
            </p>
            <div className="mt-9">
              <CTALink to="/book-a-visit">Book a Visit</CTALink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
