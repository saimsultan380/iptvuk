"use client";

import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { Container } from "@/components/layout/container";
import { ScrollReveal } from "@/components/animation/scroll-reveal";
import { FadeIn } from "@/components/animation/fade-in";

export function SubscriptionCtaSection() {
  return (
    <section
      className="relative isolate overflow-hidden py-24 md:py-32"
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
          className="mx-auto max-w-4xl rounded-2xl border px-6 py-12 text-center sm:px-10 sm:py-14 md:px-14 md:py-16"
          style={{
            backgroundColor: "var(--feature-card-bg)",
            borderColor: "var(--feature-card-border)",
            boxShadow: "var(--feature-card-shadow)",
          }}
        >
          <FadeIn delay={0.05}>
            <div className="mb-6 flex items-center justify-center gap-3">
              <div
                className="h-px max-w-[80px] flex-1"
                style={{ backgroundColor: "var(--feature-divider)" }}
              />
              <span
                className="text-[11px] font-bold uppercase tracking-[0.22em]"
                style={{ color: "var(--hero-accent)" }}
              >
                Get Started
              </span>
              <div
                className="h-px max-w-[80px] flex-1"
                style={{ backgroundColor: "var(--feature-divider)" }}
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2
              className="mx-auto max-w-3xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-[42px]"
              style={{ color: "var(--hero-heading)" }}
            >
              Get Your{" "}
              <span style={{ color: "var(--hero-accent)" }}>
                IPTV Subscription UK
              </span>{" "}
              Today
            </h2>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p
              className="mx-auto mt-7 max-w-[680px] text-[15px] leading-[1.8] sm:text-base"
              style={{ color: "var(--hero-muted)" }}
            >
              12,000+ live channels. 40,000+ VOD titles. True 4K. VPN included.
              Single, Double, or Triple Connection plans for any household size.
              99.9% uptime. 24/7 UK support. Free 24-hour trial. 7-day
              money-back guarantee.
            </p>
          </FadeIn>

          <ScrollReveal direction="up" delay={0.1} once>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row md:mt-12">
              <Link
                href="#multi-connection"
                className="flex items-center gap-2.5 rounded-xl px-8 py-4 text-[15px] font-bold text-white transition-all duration-200 hover:brightness-110"
                style={{
                  background: "var(--hero-cta-primary-bg)",
                  boxShadow: "var(--hero-cta-primary-shadow)",
                }}
              >
                View IPTV Subscription Plans
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="#free-trial"
                className="flex items-center gap-2 rounded-xl border bg-transparent px-8 py-4 text-[15px] font-semibold transition-all duration-200 hover:border-[var(--hero-accent)] hover:text-[var(--hero-accent)]"
                style={{
                  borderColor: "var(--hero-btn-border)",
                  color: "var(--hero-cta-secondary-text)",
                }}
              >
                <Play className="h-4 w-4 fill-current" />
                Claim Your Free Trial — No Card Required
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
