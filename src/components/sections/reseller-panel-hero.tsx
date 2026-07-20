"use client";

import {
  Zap,
  PoundSterling,
  RefreshCw,
  Headphones,
  ShieldCheck,
  ChevronRight,
  MessageCircle,
} from "lucide-react";
import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/animation/fade-in";
import { SkewedTextReveal } from "@/components/animation/skewed-text-reveal";

const FEATURE_PILLS = [
  { label: "5-Minute Setup", Icon: Zap },
  { label: "From £1.50 Per Credit", Icon: PoundSterling },
  { label: "Non-Expiring Credits", Icon: RefreshCw },
  { label: "24/7 Reseller Support", Icon: Headphones },
  { label: "Secure Payment", Icon: ShieldCheck },
] as const;

function FeaturePill({
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

export function ResellerPanelHero() {
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
              Reseller Panel
            </span>
          </div>
        </FadeIn>

        <SkewedTextReveal
          className="mx-auto max-w-[920px] text-3xl font-bold leading-[1.12] tracking-tight sm:text-4xl md:text-[48px] lg:text-[54px]"
          style={{ color: "var(--hero-heading)" }}
        >
          IPTV Reseller UK — Start Your Own{" "}
          <span style={{ color: "var(--hero-accent)" }}>IPTV Business</span>{" "}
          in Minutes
        </SkewedTextReveal>

        <FadeIn delay={0.18}>
          <p
            className="mx-auto mt-5 max-w-[700px] text-sm leading-[1.75] sm:mt-6 sm:text-[15px] md:text-base"
            style={{ color: "var(--hero-muted)" }}
          >
            You do not need technical skills to become an IPTV reseller. You need
            a reliable panel, fair credit pricing, and a provider who actually
            supports you when something goes wrong. That is exactly what this
            is.
          </p>
        </FadeIn>

        <FadeIn delay={0.22}>
          <p
            className="mx-auto mt-4 max-w-[720px] text-sm leading-[1.75] sm:text-[15px] md:text-base"
            style={{ color: "var(--hero-muted)" }}
          >
            Buy credits, generate customer lines instantly, and keep 100%
            control of your pricing. Non-expiring credits, white label branding
            for serious resellers, and 24/7 support — all from a panel that
            activates within minutes of payment.
          </p>
        </FadeIn>

        <FadeIn delay={0.28}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {FEATURE_PILLS.map((pill) => (
              <FeaturePill key={pill.label} label={pill.label} Icon={pill.Icon} />
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.34}>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#reseller-plans"
              className="cta-shine flex w-full max-w-xs items-center justify-center gap-2.5 rounded-xl px-7 py-3.5 text-sm font-bold text-white transition-all duration-200 hover:brightness-110 sm:w-auto sm:max-w-none sm:text-[15px]"
              style={{
                background: "var(--hero-cta-primary-bg)",
                boxShadow: "var(--hero-cta-primary-shadow)",
              }}
            >
              Buy Your IPTV Reseller Panel
              <ChevronRight className="h-4 w-4" />
            </a>

            <a
              href="#request-demo"
              className="flex w-full max-w-xs items-center justify-center gap-2 rounded-xl border bg-transparent px-7 py-3.5 text-sm font-semibold transition-all duration-200 hover:border-[var(--hero-accent)] hover:text-[var(--hero-accent)] sm:w-auto sm:max-w-none sm:text-[15px]"
              style={{
                borderColor: "var(--hero-btn-border)",
                color: "var(--hero-cta-secondary-text)",
              }}
            >
              <MessageCircle className="h-4 w-4 opacity-70" />
              Request a Free Demo
            </a>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
