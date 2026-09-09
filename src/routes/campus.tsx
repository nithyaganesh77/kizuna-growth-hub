import { createFileRoute } from "@tanstack/react-router";
import { PHOTOS } from "@/lib/gallery";
import { PageHeader } from "@/components/kizuna/PageHeader";
import { Reveal } from "@/components/kizuna/Reveal";
import { SectionHeading } from "@/components/kizuna/SectionHeading";
import { CTALink } from "@/components/kizuna/CTAButton";
import { CAMPUS_HIGHLIGHTS, LEARNING_SPACES } from "@/lib/site";
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
        subtitle="A campus designed to inspire curiosity, creativity, and lifelong learning."
      />

      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
          <Reveal>
            <div className="overflow-hidden rounded-[2rem] shadow-lift">
              <img
                src={PHOTOS.campusAerial}
                alt="Aerial view of the KIZUNA flower-inspired campus surrounded by gardens and play spaces"
                width={1672}
                height={941}
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

      <section className="bg-navy py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
          <SectionHeading
            eyebrow="Campus Highlights"
            title="Signature Features"
            subtitle="Every corner of the campus is designed to spark wonder, movement and meaningful learning."
            light
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {CAMPUS_HIGHLIGHTS.map((h, i) => (
              <Reveal key={h.title} delay={i * 70}>
                <div className="hover-lift h-full rounded-3xl border border-gold/20 bg-cream/[0.04] p-8">
                  <h3 className="text-lg font-bold text-cream">{h.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-cream/70">{h.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
          <SectionHeading
            eyebrow="Universe Circle"
            title="A Window to Wonder"
            subtitle="At the heart of the campus, a light-filled circle opens learning to the sky by day and the stars by night."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {[
              {
                src: PHOTOS.universeCircle,
                alt: "The open-air Universe Circle at KIZUNA framing a bright blue sky",
                label: "Flower-Inspired Learning Dome",
              },
              {
                src: PHOTOS.campusDomeDay,
                alt: "Children looking up through the daylight-filled circular learning dome",
                label: "Learning Beneath the Sky",
              },
            ].map((image, i) => (
              <Reveal key={image.label} delay={i * 90}>
                <figure className="overflow-hidden rounded-3xl border border-border bg-card shadow-card">
                  <img
                    src={image.src}
                    alt={image.alt}
                    width={1672}
                    height={941}
                    loading="lazy"
                    className="aspect-video w-full object-cover"
                  />
                  <figcaption className="px-6 py-4 text-sm font-semibold text-navy">
                    {image.label}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
          <SectionHeading
            eyebrow="Sky Observation"
            title="Curiosity That Reaches the Stars"
            subtitle="The telescope zone and night-sky experiences turn astronomy into a shared adventure."
            light
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                src: PHOTOS.telescopeZone,
                alt: "Children exploring the night sky with a telescope inside the learning dome",
                label: "Telescope Zone",
              },
              {
                src: PHOTOS.skyObservation,
                alt: "Children observing the Milky Way from the KIZUNA sky observation courtyard",
                label: "Sky Observation",
              },
              {
                src: PHOTOS.campusSunset,
                alt: "Children overlooking the illuminated KIZUNA campus at sunset",
                label: "A Campus Beyond the Bell",
              },
            ].map((image, i) => (
              <Reveal key={image.label} delay={i * 90}>
                <figure className="overflow-hidden rounded-3xl border border-cream/15 bg-cream/[0.04]">
                  <img
                    src={image.src}
                    alt={image.alt}
                    width={1672}
                    height={941}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover"
                  />
                  <figcaption className="px-6 py-4 text-sm font-semibold text-cream">
                    {image.label}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
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
                src={PHOTOS.gardening}
                alt="Children planting seedlings and watering a raised garden bed in the campus garden"
                width={1200}
                height={900}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-warm py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
          <SectionHeading
            eyebrow="Play Areas"
            title="Room to Climb, Splash and Run"
            subtitle="Active play zones and hands-on nature corners that keep every day joyful."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                src: PHOTOS.climbing,
                alt: "Children climbing and balancing on a large red rope climbing frame",
                label: "Climbing frame",
              },
              {
                src: PHOTOS.waterslide,
                alt: "Colourful inflatable water slide with a splash pool for summer play days",
                label: "Splash & slide days",
              },
              {
                src: PHOTOS.numberlogs,
                alt: "Wooden log stepping stones numbered one to fifteen laid out on grass",
                label: "Number log trail",
              },
            ].map((p, i) => (
              <Reveal key={p.label} delay={i * 70}>
                <figure className="overflow-hidden rounded-3xl border border-border bg-card shadow-card">
                  <img
                    src={p.src}
                    alt={p.alt}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover"
                  />
                  <figcaption className="px-6 py-4 text-sm font-semibold text-navy">
                    {p.label}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
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
