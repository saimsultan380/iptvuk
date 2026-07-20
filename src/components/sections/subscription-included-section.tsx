"use client";

import {
  MonitorPlay,
  Clapperboard,
  ListVideo,
  History,
  ArrowRight,
} from "lucide-react";
import { Container } from "@/components/layout/container";
import { ScrollReveal } from "@/components/animation/scroll-reveal";
import { FadeIn } from "@/components/animation/fade-in";

const INCLUDED_FEATURES = [
  {
    id: "live-tv",
    Icon: MonitorPlay,
    heading: "12,000+ Live TV Channels",
    body: "UK Freeview channels, international content, premium sports networks, kids' channels, and news from every major outlet — fully organised under one IPTV subscription, no add-ons required.",
  },
  {
    id: "vod",
    Icon: Clapperboard,
    heading: "40,000+ Movies and TV Series — Full VOD Library",
    body: "A constantly updated Video On Demand library. IPTV movies, IPTV series, and box sets available any time — no scheduled broadcast, no separate subscription.",
  },
  {
    id: "epg",
    Icon: ListVideo,
    heading: "IPTV EPG — Full Electronic Programme Guide",
    body: "The IPTV EPG shows what is playing now, what is coming next, and the schedule ahead across every channel. The Electronic Programme Guide updates automatically — no manual refreshes needed.",
  },
  {
    id: "catchup",
    Icon: History,
    heading: "IPTV Catch-Up TV",
    body: "Missed a show or a live match? Catch-Up TV lets you go back and watch what already aired on supported channels, so you are never tied to a broadcast schedule.",
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

export function SubscriptionIncludedSection() {
  return (
    <section
      id="subscription-included"
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
              What&apos;s Included
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2
            className="mx-auto max-w-3xl text-center text-2xl font-bold leading-tight tracking-tight sm:text-4xl md:text-[42px]"
            style={{ color: "var(--hero-heading)" }}
          >
            What&apos;s Included in Every{" "}
            <span style={{ color: "var(--hero-accent)" }}>
              IPTV Subscription UK
            </span>{" "}
            Plan
          </h2>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p
            className="mx-auto mt-6 max-w-[680px] text-center text-sm leading-[1.75] sm:text-[15px] md:text-base"
            style={{ color: "var(--hero-muted)" }}
          >
            This is not a stripped-back entry tier. Every connection level —
            Single, Double, or Triple — gets the complete feature set.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 md:mt-16">
          {INCLUDED_FEATURES.map((feature, i) => (
            <FeatureCard
              key={feature.id}
              Icon={feature.Icon}
              heading={feature.heading}
              body={feature.body}
              delay={0.06 * (i % 2)}
            />
          ))}
        </div>

        <ScrollReveal direction="up" delay={0.1} once>
          <div className="mt-12 flex justify-center md:mt-16">
            <a
              href="/#features"
              className="inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-bold text-white transition-all duration-200 hover:brightness-110 sm:text-[15px]"
              style={{
                background: "var(--hero-cta-primary-bg)",
                boxShadow: "var(--hero-cta-primary-shadow)",
              }}
            >
              Explore the Full Feature List
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
