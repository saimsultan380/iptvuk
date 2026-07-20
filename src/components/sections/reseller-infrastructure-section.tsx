"use client";

import {
  Shield,
  Zap,
  CreditCard,
  Headphones,
} from "lucide-react";
import { Container } from "@/components/layout/container";
import { ScrollReveal } from "@/components/animation/scroll-reveal";
import { FadeIn } from "@/components/animation/fade-in";

const INFRA_FEATURES = [
  {
    id: "uptime",
    Icon: Shield,
    heading: "99.9% Uptime Guarantee",
    body: "Enterprise-grade infrastructure keeps your dashboard and your customers' streams accessible around the clock — not just during normal hours.",
  },
  {
    id: "activation",
    Icon: Zap,
    heading: "Instant Activation",
    body: "Your panel goes live within 5 to 10 minutes of payment confirmation. No waiting days for account setup.",
  },
  {
    id: "payment",
    Icon: CreditCard,
    heading: "Secure Payment Options",
    body: "Card payment, PayPal, and direct bank transfer are all supported, with invoices provided as proof of payment for your own records.",
  },
  {
    id: "support",
    Icon: Headphones,
    heading: "24/7 Reseller Support",
    body: "Technical and business questions answered around the clock — not just during UK office hours. A real support team, not an automated ticket queue.",
  },
];

function FeatureCard({
  Icon,
  heading,
  body,
  delay = 0,
}: {
  Icon: React.ElementType;
  heading: string;
  body: string;
  delay?: number;
}) {
  return (
    <ScrollReveal direction="up" delay={delay} once>
      <div
        className="flex h-full gap-4 rounded-2xl border p-6 md:gap-5 md:p-7"
        style={{
          backgroundColor: "var(--feature-card-bg)",
          borderColor: "var(--feature-card-border)",
          boxShadow: "var(--feature-card-shadow)",
        }}
      >
        <div
          className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border"
          style={{
            backgroundColor: "var(--feature-icon-bg)",
            borderColor: "var(--feature-icon-border)",
            boxShadow: "0 0 16px rgba(0, 163, 255, 0.12)",
          }}
        >
          <Icon
            className="h-5 w-5"
            style={{ color: "var(--feature-heading)" }}
            strokeWidth={1.75}
          />
        </div>
        <div className="min-w-0 flex-1">
          <h3
            className="mb-2.5 text-[15px] font-bold leading-snug md:text-base"
            style={{ color: "var(--hero-heading)" }}
          >
            {heading}
          </h3>
          <p
            className="text-sm leading-[1.7]"
            style={{ color: "var(--feature-body)" }}
          >
            {body}
          </p>
        </div>
      </div>
    </ScrollReveal>
  );
}

export function ResellerInfrastructureSection() {
  return (
    <section
      id="reseller-infrastructure"
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
        <FadeIn delay={0.05}>
          <div className="mb-5 text-center">
            <span
              className="text-[11px] font-bold uppercase tracking-[0.22em]"
              style={{ color: "var(--hero-accent)" }}
            >
              Infrastructure
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2
            className="mx-auto max-w-3xl text-center text-2xl font-bold leading-tight tracking-tight sm:text-4xl md:text-[42px]"
            style={{ color: "var(--hero-heading)" }}
          >
            Reliable IPTV Servers, Built for Resellers Who Need to{" "}
            <span style={{ color: "var(--hero-accent)" }}>
              Trust Their Infrastructure
            </span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p
            className="mx-auto mt-6 max-w-[680px] text-center text-sm leading-[1.75] sm:text-[15px] md:text-base"
            style={{ color: "var(--hero-muted)" }}
          >
            Your reputation depends on your supplier&apos;s stability. Here is
            what backs this panel.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 md:mt-16">
          {INFRA_FEATURES.map((feature, i) => (
            <FeatureCard
              key={feature.id}
              Icon={feature.Icon}
              heading={feature.heading}
              body={feature.body}
              delay={0.06 * i}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
