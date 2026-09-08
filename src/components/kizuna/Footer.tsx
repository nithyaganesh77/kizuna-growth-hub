import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { SOCIAL_LINKS } from "@/lib/site";

const columns: { title: string; links: { label: string; to: string }[] }[] = [
  {
    title: "Explore",
    links: [
      { label: "Home", to: "/" },
      { label: "About", to: "/about" },
      { label: "Programs", to: "/programs" },
      { label: "Campus", to: "/campus" },
      { label: "Gallery", to: "/gallery" },
    ],
  },
  {
    title: "For Parents",
    links: [
      { label: "Parent Corner", to: "/parent-corner" },
      { label: "FAQs", to: "/faq" },
      { label: "Book a Visit", to: "/book-a-visit" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    title: "Programs",
    links: [
      { label: "Academic Support", to: "/programs" },
      { label: "Childcare", to: "/programs" },
      { label: "Creative Growth", to: "/programs" },
      { label: "Sports & Wellness", to: "/programs" },
      { label: "Life Skills", to: "/programs" },
      { label: "STEM & Robotics", to: "/programs" },
      { label: "Holiday Camps", to: "/programs" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-navy text-cream">
      <div className="mx-auto max-w-[1400px] px-5 py-16 lg:px-10 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_repeat(4,1fr)]">
          <div>
            <Logo variant="cream" />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-cream/65">
              A complete child-development ecosystem where the hours beyond the school bell become
              opportunities to discover, connect, create and grow.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-semibold tracking-[0.24em] text-gold uppercase">
                {col.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {col.links.map((l, i) => (
                  <li key={`${l.label}-${i}`}>
                    <Link
                      to={l.to as never}
                      className="text-sm text-cream/70 transition-colors hover:text-cream"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-xs font-semibold tracking-[0.24em] text-gold uppercase">Social</h3>
            <ul className="mt-5 space-y-3">
              {SOCIAL_LINKS.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    className="text-sm text-cream/70 transition-colors hover:text-cream"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-cream/15 pt-8 text-xs text-cream/55 sm:flex-row sm:items-center sm:justify-between">
          <p>KIZUNA © 2026. All rights reserved.</p>
          <p className="tracking-[0.24em] text-gold uppercase">Beyond the Bell.</p>
        </div>
      </div>
    </footer>
  );
}
