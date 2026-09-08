import { useState, type FormEvent } from "react";
import { CheckCircle2, Clock, Loader2, Mail, MapPin, Phone } from "lucide-react";
import {
  ENQUIRY_TYPES,
  SITE_ADDRESS,
  SITE_EMAIL,
  SITE_HOURS,
  SITE_PHONE,
  MAP_URL,
} from "@/lib/site";
import { SectionHeading } from "../SectionHeading";
import { Reveal } from "../Reveal";
import { CTAButton } from "../CTAButton";
import { Field, inputClass } from "../Field";

const cards = [
  { icon: Phone, label: "Phone", value: SITE_PHONE },
  { icon: Mail, label: "Email", value: SITE_EMAIL },
  { icon: MapPin, label: "Campus Address", value: SITE_ADDRESS, href: MAP_URL },
  { icon: Clock, label: "Opening Hours", value: SITE_HOURS },
];

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const next: Record<string, string> = {};
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (name.length < 2) next["name"] = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next["email"] = "Please enter a valid email.";
    if (message.length < 5) next["message"] = "Please tell us a little more.";

    setErrors(next);
    if (Object.keys(next).length) return;

    setStatus("loading");
    try {
      await new Promise((r) => setTimeout(r, 900));
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="bg-background py-20 lg:py-28" id="contact">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
        <SectionHeading
          eyebrow="Contact"
          title="Let's Begin Your Child's KIZUNA Journey."
          subtitle="Share a few details and our team will reach out to guide you."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {cards.map((c, i) => (
              <Reveal key={c.label} delay={i * 70}>
                <div className="hover-lift h-full rounded-2xl border border-border bg-card p-6 shadow-soft">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/70 text-navy">
                    <c.icon size={18} strokeWidth={1.7} aria-hidden="true" />
                  </span>
                  <p className="mt-4 text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase">
                    {c.label}
                  </p>
                  {c.href ? (
                    <a
                      href={c.href}
                      className="mt-1 block text-sm font-medium text-navy underline-offset-4 hover:underline"
                    >
                      {c.value}
                    </a>
                  ) : (
                    <p className="mt-1 text-sm font-medium text-navy">{c.value}</p>
                  )}
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <div className="rounded-[2rem] border border-border bg-card p-7 shadow-card sm:p-10">
              {status === "success" ? (
                <div className="flex flex-col items-center py-14 text-center">
                  <CheckCircle2 size={44} className="text-leaf" strokeWidth={1.5} />
                  <p className="mt-6 text-xl font-bold text-navy">
                    Thank you. Our team will get in touch with you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
                  <Field label="Name" htmlFor="c-name" error={errors["name"]}>
                    <input
                      id="c-name"
                      name="name"
                      className={inputClass}
                      placeholder="Your full name"
                      aria-invalid={!!errors["name"]}
                    />
                  </Field>
                  <Field label="Email" htmlFor="c-email" error={errors["email"]}>
                    <input
                      id="c-email"
                      name="email"
                      type="email"
                      className={inputClass}
                      placeholder="you@example.com"
                      aria-invalid={!!errors["email"]}
                    />
                  </Field>
                  <Field label="Phone" htmlFor="c-phone">
                    <input
                      id="c-phone"
                      name="phone"
                      type="tel"
                      className={inputClass}
                      placeholder="Contact number"
                    />
                  </Field>
                  <Field label="Child Age" htmlFor="c-age">
                    <input
                      id="c-age"
                      name="childAge"
                      className={inputClass}
                      placeholder="e.g. 6 years"
                    />
                  </Field>
                  <Field label="Enquiry Type" htmlFor="c-type" className="sm:col-span-2">
                    <select id="c-type" name="enquiryType" className={inputClass}>
                      {ENQUIRY_TYPES.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </Field>
                  <Field
                    label="Message"
                    htmlFor="c-message"
                    error={errors["message"]}
                    className="sm:col-span-2"
                  >
                    <textarea
                      id="c-message"
                      name="message"
                      rows={5}
                      className={inputClass}
                      placeholder="How can we help?"
                      aria-invalid={!!errors["message"]}
                    />
                  </Field>

                  {status === "error" ? (
                    <p className="text-sm text-destructive sm:col-span-2">
                      Something went wrong. Please try again.
                    </p>
                  ) : null}

                  <div className="sm:col-span-2">
                    <CTAButton type="submit" disabled={status === "loading"}>
                      {status === "loading" ? (
                        <>
                          <Loader2 size={16} className="animate-spin" /> Sending…
                        </>
                      ) : (
                        "Send Enquiry"
                      )}
                    </CTAButton>
                  </div>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
