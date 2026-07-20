"use client";

import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { Container } from "@/components/layout/container";
import { ScrollReveal } from "@/components/animation/scroll-reveal";
import { FadeIn } from "@/components/animation/fade-in";

type FreeTrialCtaSectionProps = {
  variant?: "home" | "subscription";
};

const COPY = {
  home: {
    eyebrow: "Free Trial",
    title: (
      <>
        Try{" "}
        <span style={{ color: "var(--hero-accent)" }}>IPTV UK</span> Free for
        24 Hours — No Credit Card
      </>
    ),
    body: "Full access to 20,000+ live channels, 60,000+ VOD titles, live sports, and 4K streams. No payment. No automatic sign-up. Test the real service on your device before you subscribe.",
  },
  subscription: {
    eyebrow: "Free Trial",
    title: (
      <>
        Not Ready to Subscribe? Try a{" "}
        <span style={{ color: "var(--hero-accent)" }}>Free 24-Hour Trial</span>{" "}
        First
      </>
    ),
    body: "Get full access to every channel, sports stream, and VOD title for 24 hours — the same service as a paid plan. No card required. No obligation. Activate in minutes and decide after you have tested it yourself.",
  },
};

export function FreeTrialCtaSection({
  variant = "home",
}: FreeTrialCtaSectionProps) {
  const copy = COPY[variant];

  return (
    <section
      id="free-trial"
      className="relative isolate overflow-hidden py-20 md:py-28"
      style={{ backgroundColor: "var(--hero-base)" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 40% 60% at 0% 50%, var(--hero-blush-left) 0%, transparent 70%), radial-gradient(ellipse 40% 60% at 100% 50%, var(--hero-blush-right) 0%, transparent 70%)",
        }}
      />

      <Container className="relative z-10">
        <div
          className="mx-auto max-w-4xl rounded-2xl border px-6 py-10 text-center sm:px-10 sm:py-12 md:px-14 md:py-14"
          style={{
            backgroundColor: "var(--feature-card-bg)",
            borderColor: "var(--feature-card-border)",
            boxShadow: "var(--feature-card-shadow)",
          }}
        >
          <FadeIn delay={0.05}>
            <div className="mb-5 flex items-center justify-center gap-3">
              <div
                className="h-px max-w-[80px] flex-1"
                style={{ backgroundColor: "var(--feature-divider)" }}
              />
              <span
                className="text-[11px] font-bold uppercase tracking-[0.22em]"
                style={{ color: "var(--hero-accent)" }}
              >
                {copy.eyebrow}
              </span>
              <div
                className="h-px max-w-[80px] flex-1"
                style={{ backgroundColor: "var(--feature-divider)" }}
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2
              className="mx-auto max-w-3xl text-2xl font-bold leading-tight tracking-tight sm:text-3xl md:text-[38px]"
              style={{ color: "var(--hero-heading)" }}
            >
              {copy.title}
            </h2>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p
              className="mx-auto mt-5 max-w-[640px] text-sm leading-[1.8] sm:text-[15px] md:text-base"
              style={{ color: "var(--hero-muted)" }}
            >
              {copy.body}
            </p>
          </FadeIn>

          <ScrollReveal direction="up" delay={0.1} once>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row md:mt-10">
              <Link
                href="/free-trial"
                className="cta-shine flex items-center gap-2.5 rounded-xl px-7 py-3.5 text-sm font-bold text-white transition-all duration-200 hover:brightness-110 sm:text-[15px]"
                style={{
                  background: "var(--hero-cta-primary-bg)",
                  boxShadow: "var(--hero-cta-primary-shadow)",
                }}
              >
                <Play className="h-4 w-4 fill-white" />
                Claim Your Free 24-Hour Trial
              </Link>

              <Link
                href="/subscription-plans"
                className="flex items-center gap-2 rounded-xl border bg-transparent px-7 py-3.5 text-sm font-semibold transition-all duration-200 hover:border-[var(--hero-accent)] hover:text-[var(--hero-accent)] sm:text-[15px]"
                style={{
                  borderColor: "var(--hero-btn-border)",
                  color: "var(--hero-cta-secondary-text)",
                }}
              >
                View Subscription Plans
                <ArrowRight className="h-4 w-4 opacity-70" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
