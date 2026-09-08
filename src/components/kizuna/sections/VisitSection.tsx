import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { SectionHeading } from "../SectionHeading";
import { Reveal } from "../Reveal";
import { CTAButton } from "../CTAButton";
import { Field, inputClass } from "../Field";

type Errors = Partial<Record<string, string>>;

export function VisitSection({ hideHeading = false }: { hideHeading?: boolean }) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Errors>({});

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const next: Errors = {};
    const name = String(data.get("parentName") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();

    if (name.length < 2) next["parentName"] = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next["email"] = "Please enter a valid email.";
    if (phone.replace(/\D/g, "").length < 7) next["phone"] = "Please enter a valid phone number.";

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
    <section className="bg-warm py-20 lg:py-28" id="book-a-visit">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
        {hideHeading ? null : (
          <SectionHeading
            eyebrow="Book a Visit"
            title="Come Experience KIZUNA"
            subtitle="See how a space designed around the whole child can transform the hours beyond the school bell."
          />
        )}

        <Reveal className="mx-auto mt-12 max-w-3xl">
          <div className="rounded-[2rem] border border-border bg-card p-7 shadow-card sm:p-11">
            {status === "success" ? (
              <div className="flex flex-col items-center py-12 text-center">
                <CheckCircle2 size={44} className="text-leaf" strokeWidth={1.5} />
                <p className="mt-6 text-xl font-bold text-navy">
                  Thank you. Our team will get in touch with you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
                <Field label="Parent Name" htmlFor="parentName" error={errors["parentName"]}>
                  <input
                    id="parentName"
                    name="parentName"
                    className={inputClass}
                    placeholder="Your full name"
                    aria-invalid={!!errors["parentName"]}
                  />
                </Field>
                <Field label="Email" htmlFor="email" error={errors["email"]}>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className={inputClass}
                    placeholder="you@example.com"
                    aria-invalid={!!errors["email"]}
                  />
                </Field>
                <Field label="Phone" htmlFor="phone" error={errors["phone"]}>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className={inputClass}
                    placeholder="Contact number"
                    aria-invalid={!!errors["phone"]}
                  />
                </Field>
                <Field label="Child Name" htmlFor="childName">
                  <input
                    id="childName"
                    name="childName"
                    className={inputClass}
                    placeholder="Your child's name"
                  />
                </Field>
                <Field label="Child Age" htmlFor="childAge">
                  <input
                    id="childAge"
                    name="childAge"
                    className={inputClass}
                    placeholder="e.g. 6 years"
                  />
                </Field>
                <Field label="Preferred Visit Date" htmlFor="visitDate">
                  <input id="visitDate" name="visitDate" type="date" className={inputClass} />
                </Field>
                <Field label="Preferred Time" htmlFor="visitTime">
                  <input id="visitTime" name="visitTime" type="time" className={inputClass} />
                </Field>
                <Field label="Message" htmlFor="message" className="sm:col-span-2">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className={inputClass}
                    placeholder="Anything you'd like us to know"
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
                      "Request a Visit"
                    )}
                  </CTAButton>
                </div>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
