"use client";

import {
  Zap,
  Server,
  Users,
  ListVideo,
  Activity,
  RefreshCw,
  ArrowRight,
} from "lucide-react";
import { Container } from "@/components/layout/container";
import { ScrollReveal } from "@/components/animation/scroll-reveal";
import { FadeIn } from "@/components/animation/fade-in";

const FEATURES = [
  {
    id: "auto-delivery",
    Icon: Zap,
    heading: "Instant Auto-Delivery",
    body: "Every purchase is processed automatically. Customer lines are created and login details delivered the moment payment confirms — no manual activation, no waiting on support to process an order.",
  },
  {
    id: "failover",
    Icon: Server,
    heading: "Multi-Server Failover",
    body: "Your panel runs on multiple backup servers with automatic failover switching in under 3 seconds. If one server has an issue, your customers are moved to a working one before they notice anything changed.",
  },
  {
    id: "unlimited",
    Icon: Users,
    heading: "Unlimited Customer Lines",
    body: "Create and manage as many customer lines as your business needs, with no artificial cap. Your panel scales with you — from 10 customers to 1,000.",
  },
  {
    id: "epg",
    Icon: ListVideo,
    heading: "95%+ EPG Accuracy",
    body: "The Electronic Programme Guide updates automatically and stays accurate across the full channel library, so your customers always know what is on now and what is coming next.",
  },
  {
    id: "monitoring",
    Icon: Activity,
    heading: "Real-Time Channel Monitoring",
    body: "Built-in monitoring lets you check stream status and catch unstable channels before your customers report a problem — fewer support tickets, fewer frustrated customers.",
  },
  {
    id: "no-expiry",
    Icon: RefreshCw,
    heading: "No Credit Expiry",
    body: "Credits you buy stay valid indefinitely. No deadlines, no forced renewals, no losing unused balance if a quiet month happens.",
  },
];

function IconBadge({ Icon }: { Icon: React.ElementType }) {
  return (
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
  );
}

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
        <IconBadge Icon={Icon} />
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

export function ResellerFeaturesSection() {
  return (
    <section
      id="reseller-features"
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
              Panel Features
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2
            className="mx-auto max-w-3xl text-center text-2xl font-bold leading-tight tracking-tight sm:text-4xl md:text-[42px]"
            style={{ color: "var(--hero-heading)" }}
          >
            IPTV Reseller Panel Features Built for{" "}
            <span style={{ color: "var(--hero-accent)" }}>UK Resellers</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p
            className="mx-auto mt-6 max-w-[680px] text-center text-sm leading-[1.75] sm:text-[15px] md:text-base"
            style={{ color: "var(--hero-muted)" }}
          >
            Six features that genuinely matter once you are running a real
            business, not a side hustle.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 md:mt-16">
          {FEATURES.map((feature, i) => (
            <FeatureCard
              key={feature.id}
              Icon={feature.Icon}
              heading={feature.heading}
              body={feature.body}
              delay={0.06 * (i % 3)}
            />
          ))}
        </div>

        <ScrollReveal direction="up" delay={0.1} once>
          <div className="mt-12 flex justify-center md:mt-16">
            <a
              href="#request-demo"
              className="cta-shine inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-bold text-white transition-all duration-200 hover:brightness-110 sm:text-[15px]"
              style={{
                background: "var(--hero-cta-primary-bg)",
                boxShadow: "var(--hero-cta-primary-shadow)",
              }}
            >
              See the Full Panel in Action — Request a Demo
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
