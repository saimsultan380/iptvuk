"use client";

import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/animation/fade-in";
import { ScrollReveal } from "@/components/animation/scroll-reveal";
import { SkewedTextReveal } from "@/components/animation/skewed-text-reveal";
import { Play, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

// ─── Data ────────────────────────────────────────────────────────────────────

const FEATURE_PILLS = [
  "Instant Activation",
  "Free 24-Hour Trial — No Card",
  "No Contract · No Auto-Billing",
  "7-Day Money-Back Guarantee",
  "24/7 UK Support",
];

const STATS = [
  { value: "20,000+", label: "Live Channels" },
  { value: "60,000+", label: "On-Demand Titles" },
  { value: "£9.99", label: "Starting Price" },
  { value: "24 Hours", label: "Free Trial" },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function BlueDot({ className }: { className?: string }) {
  return (
    <span
      className={cn("inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full", className)}
      style={{ backgroundColor: "var(--hero-accent)" }}
    />
  );
}

function FeaturePill({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "flex items-center justify-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-medium backdrop-blur-sm sm:gap-2 sm:px-4 sm:py-1.5 sm:text-xs",
        className,
      )}
      style={{
        borderColor: "var(--hero-pill-border)",
        backgroundColor: "var(--hero-pill-bg)",
        color: "var(--hero-pill-text)",
      }}
    >
      <BlueDot className="h-1 w-1 sm:h-1.5 sm:w-1.5" />
      {label}
    </span>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export function HeroSection() {
  return (
    <section
      className="relative isolate overflow-hidden"
      style={{ backgroundColor: "var(--hero-base)" }}
    >
      {/* ── Background: CSS grid lines ──────────────────────────────────── */}
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

      {/* Dot pattern */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, color-mix(in srgb, var(--hero-accent) 22%, transparent) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          opacity: 0.45,
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

      {/* ═══════════════════════════════════════════════════════════════════
          HERO CONTENT
      ═══════════════════════════════════════════════════════════════════ */}
      <Container className="relative z-10 pb-0 pt-32 text-center sm:pt-36">
        {/* Badge */}
        <FadeIn delay={0.05}>
          <div
            className="mb-7 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 backdrop-blur-sm"
            style={{
              borderColor: "var(--hero-pill-border)",
              backgroundColor: "var(--hero-pill-bg)",
            }}
          >
            <BlueDot />
            <span
              className="text-[11px] font-bold uppercase tracking-[0.2em]"
              style={{ color: "var(--hero-accent)" }}
            >
              Premium 4K Streaming
            </span>
          </div>
        </FadeIn>

        {/* Headline */}
        <SkewedTextReveal
          className="mx-auto max-w-[900px] text-[34px] font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-[52px] lg:text-[58px]"
          style={{ color: "var(--hero-heading)" }}
        >
          IPTV UK —{" "}
          <span style={{ color: "var(--hero-accent)" }}>20,000+</span>{" "}
          Channels, True{" "}
          <span style={{ color: "var(--hero-accent)" }}>4K</span>, No
          Contract, Instant Activation
        </SkewedTextReveal>

        {/* Body paragraph */}
        <FadeIn delay={0.2}>
          <p
            className="mx-auto mt-6 max-w-[660px] text-[15px] leading-[1.75] sm:text-base"
            style={{ color: "var(--hero-muted)" }}
          >
            You are overpaying for TV. Every single month. A package full of
            channels you never chose, locked behind a contract that gets more
            expensive every year. There is a better way.{" "}
            <strong
              className="font-semibold"
              style={{ color: "var(--hero-emphasis)" }}
            >
              UK-Best-IPTV
            </strong>{" "}
            is the British IPTV provider giving you 20,000+ live channels,
            60,000+ on-demand titles, and true 4K streaming — all through the
            broadband you already have. No dish. No engineer. No 18-month trap.
            This is the best IPTV UK subscription, from just{" "}
            <strong
              className="font-semibold"
              style={{ color: "var(--hero-emphasis)" }}
            >
              £9.99 a month
            </strong>{" "}
            — and you can try the full service free for 24 hours before
            spending a penny.
          </p>
        </FadeIn>

        {/* Feature pills — 2 per row on mobile, wrap freely on desktop */}
        <FadeIn delay={0.28}>
          <div className="mx-auto mt-8 grid max-w-sm grid-cols-2 gap-1.5 sm:flex sm:max-w-none sm:flex-wrap sm:items-center sm:justify-center sm:gap-2">
            {FEATURE_PILLS.map((pill, index) => (
              <FeaturePill
                key={pill}
                label={pill}
                className={cn(
                  index === FEATURE_PILLS.length - 1 &&
                    "col-span-2 mx-auto w-fit sm:col-span-1 sm:mx-0 sm:w-auto",
                )}
              />
            ))}
          </div>
        </FadeIn>

        {/* CTA buttons */}
        <FadeIn delay={0.36}>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            {/* Primary – gradient blue with glow */}
            <a
              href="#"
              id="hero-cta-primary"
              className="cta-shine group flex items-center gap-2.5 rounded-xl px-7 py-3.5 text-[15px] font-bold text-white transition-all duration-200 hover:brightness-110"
              style={{
                background: "var(--hero-cta-primary-bg)",
                boxShadow: "var(--hero-cta-primary-shadow)",
              }}
            >
              <Play className="h-4 w-4 fill-white" />
              Start Your Free IPTV Trial Now
            </a>

            {/* Secondary – outline */}
            <a
              href="/subscription-plans"
              id="hero-cta-secondary"
              className="flex items-center gap-2 rounded-xl border bg-transparent px-7 py-3.5 text-[15px] font-semibold transition-all duration-200 hover:border-[var(--hero-accent)] hover:text-[var(--hero-accent)]"
              style={{
                borderColor: "var(--hero-btn-border)",
                color: "var(--hero-cta-secondary-text)",
              }}
            >
              View IPTV Subscription Plans UK
              <ChevronRight className="h-4 w-4 opacity-60" />
            </a>
          </div>
        </FadeIn>

        {/* Breathing room before stats bar */}
        <div className="mt-16" />
      </Container>

      {/* ═══════════════════════════════════════════════════════════════════
          STATS BAR
      ═══════════════════════════════════════════════════════════════════ */}
      <ScrollReveal direction="up" delay={0.1}>
        <div
          className="relative z-10 border-t"
          style={{
            borderColor: "var(--hero-divider)",
            backgroundColor: "var(--hero-stats-bg)",
          }}
        >
          <Container className="px-0">
            <div
              className="grid grid-cols-2 md:grid-cols-4"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(90deg, transparent, transparent calc(25% - 1px), var(--hero-divider) calc(25% - 1px), var(--hero-divider) 25%)",
              }}
            >
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center py-8 text-center md:py-10"
                >
                  <span
                    className="text-3xl font-extrabold sm:text-4xl"
                    style={{
                      color: "var(--hero-accent)",
                      textShadow: "var(--hero-stats-value-shadow)",
                    }}
                  >
                    {stat.value}
                  </span>
                  <span
                    className="mt-1.5 text-[10px] font-bold uppercase tracking-[0.15em]"
                    style={{ color: "var(--hero-stats-label)" }}
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </Container>
        </div>
      </ScrollReveal>
    </section>
  );
}
