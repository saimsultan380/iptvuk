"use client";

import {
  CheckCircle2,
  Clock,
  Headphones,
  ChevronRight,
  MessageCircle,
} from "lucide-react";
import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/animation/fade-in";
import { SkewedTextReveal } from "@/components/animation/skewed-text-reveal";

const TRUST_PILLS = [
  { label: "Step-by-Step for Every Device", Icon: CheckCircle2 },
  { label: "24/7 Setup Support", Icon: Headphones },
  { label: "Most Customers Watching Within 15 Minutes", Icon: Clock },
] as const;

function TrustPill({
  label,
  Icon,
}: {
  label: string;
  Icon: React.ElementType;
}) {
  return (
    <span
      className="flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-medium backdrop-blur-sm"
      style={{
        borderColor: "var(--hero-pill-border)",
        backgroundColor: "var(--hero-pill-bg)",
        color: "var(--hero-pill-text)",
      }}
    >
      <Icon
        className="h-3.5 w-3.5 flex-shrink-0"
        style={{ color: "var(--hero-accent)" }}
        strokeWidth={2.25}
      />
      {label}
    </span>
  );
}

export function InstallationGuideHero() {
  return (
    <section
      className="relative isolate overflow-hidden pb-16 md:pb-20"
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
          backgroundImage:
            "radial-gradient(circle, color-mix(in srgb, var(--hero-accent) 22%, transparent) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          opacity: 0.45,
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

      <Container className="relative z-10 pt-32 text-center sm:pt-36">
        <FadeIn delay={0.05}>
          <div
            className="mb-7 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 backdrop-blur-sm"
            style={{
              borderColor: "var(--hero-pill-border)",
              backgroundColor: "var(--hero-pill-bg)",
            }}
          >
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: "var(--hero-accent)" }}
            />
            <span
              className="text-[11px] font-bold uppercase tracking-[0.2em]"
              style={{ color: "var(--hero-accent)" }}
            >
              Installation Guide
            </span>
          </div>
        </FadeIn>

        <SkewedTextReveal
          className="mx-auto max-w-[920px] text-3xl font-bold leading-[1.12] tracking-tight sm:text-4xl md:text-[48px] lg:text-[52px]"
          style={{ color: "var(--hero-heading)" }}
        >
          IPTV Installation Guide — Setup for{" "}
          <span style={{ color: "var(--hero-accent)" }}>Every Device</span>
        </SkewedTextReveal>

        <FadeIn delay={0.18}>
          <p
            className="mx-auto mt-5 max-w-[720px] text-sm leading-[1.75] sm:mt-6 sm:text-[15px] md:text-base"
            style={{ color: "var(--hero-muted)" }}
          >
            Setting up your IPTV subscription takes minutes, not hours. Whether
            you are on a Firestick, a Smart TV, a phone, or a laptop, this IPTV
            installation guide walks you through exactly what to do — step by
            step, device by device.
          </p>
        </FadeIn>

        <FadeIn delay={0.22}>
          <p
            className="mx-auto mt-4 max-w-[720px] text-sm leading-[1.75] sm:text-[15px] md:text-base"
            style={{ color: "var(--hero-muted)" }}
          >
            No technical background needed. If you get stuck at any point, our
            support team provides the app details, activation information, and
            setup code you need to get watching.
          </p>
        </FadeIn>

        <FadeIn delay={0.28}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {TRUST_PILLS.map((pill) => (
              <TrustPill key={pill.label} label={pill.label} Icon={pill.Icon} />
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.34}>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#choose-device"
              className="flex w-full max-w-xs items-center justify-center gap-2 rounded-xl border bg-transparent px-7 py-3.5 text-sm font-semibold transition-all duration-200 hover:border-[var(--hero-accent)] hover:text-[var(--hero-accent)] sm:w-auto sm:max-w-none sm:text-[15px]"
              style={{
                borderColor: "var(--hero-btn-border)",
                color: "var(--hero-cta-secondary-text)",
              }}
            >
              Select Your Device Below
              <ChevronRight className="h-4 w-4 opacity-70" />
            </a>

            <a
              href="#installation-support"
              className="cta-shine flex w-full max-w-xs items-center justify-center gap-2.5 rounded-xl px-7 py-3.5 text-sm font-bold text-white transition-all duration-200 hover:brightness-110 sm:w-auto sm:max-w-none sm:text-[15px]"
              style={{
                background: "var(--hero-cta-primary-bg)",
                boxShadow: "var(--hero-cta-primary-shadow)",
              }}
            >
              <MessageCircle className="h-4 w-4" />
              Need Help? Contact Support
            </a>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
