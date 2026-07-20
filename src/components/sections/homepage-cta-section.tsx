"use client";

import { ArrowRight, Play } from "lucide-react";
import { Container } from "@/components/layout/container";
import { ScrollReveal } from "@/components/animation/scroll-reveal";
import { FadeIn } from "@/components/animation/fade-in";

// ─── Main Component ───────────────────────────────────────────────────────────

export function HomepageCtaSection() {
  return (
    <section
      className="relative isolate overflow-hidden py-24 md:py-32"
      style={{ backgroundColor: "var(--hero-base)" }}
    >
      {/* Background grid */}
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

      {/* Radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, color-mix(in srgb, var(--hero-accent) 9%, transparent) 0%, transparent 70%)",
        }}
      />

      {/* Left + right blush */}
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
          {/* ── Eyebrow ──────────────────────────────────────────────── */}
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
                Start Tonight
              </span>
              <div
                className="h-px max-w-[80px] flex-1"
                style={{ backgroundColor: "var(--feature-divider)" }}
              />
            </div>
          </FadeIn>

          {/* ── H2 ──────────────────────────────────────────────────── */}
          <FadeIn delay={0.1}>
            <h2
              className="mx-auto max-w-3xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-[42px]"
              style={{ color: "var(--hero-heading)" }}
            >
              Start Watching{" "}
              <span style={{ color: "var(--hero-accent)" }}>IPTV UK</span> Tonight
              —{" "}
              <span style={{ color: "var(--hero-accent)" }}>20,000+</span>{" "}
              Channels from{" "}
              <span style={{ color: "var(--hero-accent)" }}>£5.00</span> Per
              Month
            </h2>
          </FadeIn>

          {/* ── Body text ───────────────────────────────────────────── */}
          <FadeIn delay={0.15}>
            <p
              className="mx-auto mt-7 max-w-[680px] text-[15px] leading-[1.8] sm:text-base"
              style={{ color: "var(--hero-muted)" }}
            >
              20,000+ live channels. 60,000+ VOD titles. HD, 4K and UHD
              streaming. Live sports. Movies. Series. Catch-up TV. Built-in VPN.
              No contract. No auto-billing. 24/7 UK support. From £5.00 per
              month. Free 24-hour trial. No credit card. 7-day money-back
              guarantee.
            </p>
          </FadeIn>

          {/* ── CTA buttons ─────────────────────────────────────────── */}
          <ScrollReveal direction="up" delay={0.1} once>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row md:mt-12">
              <a
                href="#"
                className="cta-shine flex items-center gap-2.5 rounded-xl px-8 py-4 text-[15px] font-bold text-white transition-all duration-200 hover:brightness-110"
                style={{
                  background: "var(--hero-cta-primary-bg)",
                  boxShadow: "var(--hero-cta-primary-shadow)",
                }}
              >
                <Play className="h-4 w-4 fill-white" />
                Claim Your 24 Hours IPTV Free Trial
              </a>

              <a
                href="#"
                className="flex items-center gap-2 rounded-xl border bg-transparent px-8 py-4 text-[15px] font-semibold transition-all duration-200 hover:border-[var(--hero-accent)] hover:text-[var(--hero-accent)]"
                style={{
                  borderColor: "var(--hero-btn-border)",
                  color: "var(--hero-cta-secondary-text)",
                }}
              >
                View All IPTV Subscription Plans UK
                <ArrowRight className="h-4 w-4 opacity-70" />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
