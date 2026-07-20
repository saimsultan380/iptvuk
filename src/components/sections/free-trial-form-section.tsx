"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/layout/container";
import { ScrollReveal } from "@/components/animation/scroll-reveal";
import { FadeIn } from "@/components/animation/fade-in";

const DEVICE_OPTIONS = [
  "Firestick / Fire TV",
  "Android TV",
  "Apple TV",
  "Samsung Smart TV",
  "LG Smart TV",
  "Windows PC",
  "Mac",
  "iPhone / iPad",
  "Android Phone / Tablet",
  "Other",
];

const INPUT_STYLE = {
  borderColor: "var(--feature-card-border)",
  backgroundColor: "var(--feature-card-bg)",
  color: "var(--hero-heading)",
} as const;

export function FreeTrialFormSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const device = String(data.get("device") ?? "");
    const whatsapp = String(data.get("whatsapp") ?? "");

    const subject = encodeURIComponent("IPTV Free Trial Request");
    const body = encodeURIComponent(
      `Hi, I would like to request a free 24-hour IPTV trial.\n\nName: ${name}\nEmail: ${email}\nDevice: ${device}\nWhatsApp: ${whatsapp}`,
    );

    window.location.href = `mailto:support@uk-best-iptv.uk?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section
      id="trial-form"
      className="relative isolate overflow-hidden py-20 md:py-28"
      style={{ backgroundColor: "var(--hero-base)" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(var(--hero-grid) 1px, transparent 1px),
            linear-gradient(90deg, var(--hero-grid) 1px, transparent 1px)
          `,
          backgroundSize: "56px 56px",
        }}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, color-mix(in srgb, var(--hero-accent) 9%, transparent) 0%, transparent 70%)",
        }}
      />

      <Container className="relative z-10">
        <FadeIn delay={0.05}>
          <div className="mb-5 text-center">
            <span
              className="text-[11px] font-bold uppercase tracking-[0.22em]"
              style={{ color: "var(--hero-accent)" }}
            >
              Free Trial
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2
            className="mx-auto max-w-3xl text-center text-2xl font-bold leading-tight tracking-tight sm:text-4xl md:text-[42px]"
            style={{ color: "var(--hero-heading)" }}
          >
            Claim Your{" "}
            <span style={{ color: "var(--hero-accent)" }}>IPTV Free Trial</span>{" "}
            Now
          </h2>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p
            className="mx-auto mt-5 max-w-[560px] text-center text-sm leading-[1.75] sm:text-[15px] md:text-base"
            style={{ color: "var(--hero-muted)" }}
          >
            Fill in the form below and we will send your trial login details
            directly to your email. No card. No commitment. Just full access for
            24 hours.
          </p>
        </FadeIn>

        <ScrollReveal direction="up" delay={0.1} once>
          <div
            className="mx-auto mt-10 max-w-xl rounded-2xl border p-6 sm:p-8 md:mt-12"
            style={{
              backgroundColor: "var(--feature-card-bg)",
              borderColor: "var(--feature-card-border)",
              boxShadow: "var(--feature-card-shadow)",
            }}
          >
            {submitted ? (
              <div className="py-6 text-center">
                <CheckCircle2
                  className="mx-auto h-12 w-12"
                  style={{ color: "var(--hero-accent)" }}
                  strokeWidth={1.75}
                />
                <h3
                  className="mt-4 text-lg font-bold"
                  style={{ color: "var(--hero-heading)" }}
                >
                  Trial Request Submitted
                </h3>
                <p
                  className="mt-3 text-sm leading-[1.75]"
                  style={{ color: "var(--feature-body)" }}
                >
                  Your email client should open with your request details. If it
                  did not, email us at{" "}
                  <a
                    href="mailto:support@uk-best-iptv.uk"
                    className="font-medium underline-offset-2 hover:underline"
                    style={{ color: "var(--hero-accent)" }}
                  >
                    support@uk-best-iptv.uk
                  </a>
                  . Login details are typically sent within minutes — check your
                  spam folder if needed.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="trial-name"
                    className="mb-2 block text-sm font-medium"
                    style={{ color: "var(--hero-heading)" }}
                  >
                    Name
                  </label>
                  <input
                    id="trial-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Your full name"
                    className="w-full rounded-xl border px-4 py-3 text-sm outline-none transition-colors focus:border-[var(--hero-accent)] focus:ring-2 focus:ring-[color-mix(in_srgb,var(--hero-accent)_20%,transparent)]"
                    style={INPUT_STYLE}
                  />
                </div>

                <div>
                  <label
                    htmlFor="trial-email"
                    className="mb-2 block text-sm font-medium"
                    style={{ color: "var(--hero-heading)" }}
                  >
                    Email
                  </label>
                  <input
                    id="trial-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="you@example.com"
                    className="w-full rounded-xl border px-4 py-3 text-sm outline-none transition-colors focus:border-[var(--hero-accent)] focus:ring-2 focus:ring-[color-mix(in_srgb,var(--hero-accent)_20%,transparent)]"
                    style={INPUT_STYLE}
                  />
                </div>

                <div>
                  <label
                    htmlFor="trial-device"
                    className="mb-2 block text-sm font-medium"
                    style={{ color: "var(--hero-heading)" }}
                  >
                    Device
                  </label>
                  <select
                    id="trial-device"
                    name="device"
                    required
                    className="w-full rounded-xl border px-4 py-3 text-sm outline-none transition-colors focus:border-[var(--hero-accent)] focus:ring-2 focus:ring-[color-mix(in_srgb,var(--hero-accent)_20%,transparent)]"
                    style={INPUT_STYLE}
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select your device
                    </option>
                    {DEVICE_OPTIONS.map((device) => (
                      <option key={device} value={device}>
                        {device}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="trial-whatsapp"
                    className="mb-2 block text-sm font-medium"
                    style={{ color: "var(--hero-heading)" }}
                  >
                    WhatsApp Number
                  </label>
                  <input
                    id="trial-whatsapp"
                    name="whatsapp"
                    type="tel"
                    required
                    autoComplete="tel"
                    placeholder="+44 7XXX XXXXXX"
                    className="w-full rounded-xl border px-4 py-3 text-sm outline-none transition-colors focus:border-[var(--hero-accent)] focus:ring-2 focus:ring-[color-mix(in_srgb,var(--hero-accent)_20%,transparent)]"
                    style={INPUT_STYLE}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="cta-shine flex w-full items-center justify-center gap-2.5 rounded-xl px-6 py-3.5 text-sm font-bold text-white transition-all duration-200 hover:brightness-110 disabled:opacity-70 sm:text-[15px]"
                  style={{
                    background: "var(--hero-cta-primary-bg)",
                    boxShadow: "var(--hero-cta-primary-shadow)",
                  }}
                >
                  {loading ? "Submitting..." : "Submit Trial Request"}
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </ScrollReveal>

        <FadeIn delay={0.2}>
          <p
            className="mx-auto mt-6 max-w-lg text-center text-xs leading-[1.75] sm:text-sm"
            style={{ color: "var(--hero-muted)" }}
          >
            Once submitted, your IPTV trial account is typically active within
            minutes. If you do not see your login details, check your spam folder
            or{" "}
            <a
              href="#contact"
              className="font-medium underline-offset-2 hover:underline"
              style={{ color: "var(--hero-accent)" }}
            >
              contact us directly
            </a>{" "}
            using the details below.
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
