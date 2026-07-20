"use client";

import {
  Server,
  Monitor,
  Smartphone,
  Lock,
  Headphones,
  ArrowRight,
} from "lucide-react";
import { Container } from "@/components/layout/container";
import { ScrollReveal } from "@/components/animation/scroll-reveal";
import { FadeIn } from "@/components/animation/fade-in";

const FEATURES = [
  {
    id: "servers",
    Icon: Server,
    heading: "Ultra-Stable UK Servers — 99.9% Uptime",
    body: "Dedicated infrastructure built to handle peak-time load. When every household in the UK is streaming the same match, our load-balanced servers keep your stream stable instead of buckling under demand. Anti-freeze technology is standard on every plan.",
  },
  {
    id: "channels",
    Icon: Monitor,
    heading: "The Largest Channel Library — 12,000+ Live Channels",
    body: "12,000+ live channels and a 40,000-title VOD library included as standard — no hidden premium tier required to unlock the full catalogue. UK Freeview channels, premium sports, international content, and on-demand movies and series, all in one IPTV subscription.",
  },
  {
    id: "devices",
    Icon: Smartphone,
    heading: "Works on Every Device You Own",
    body: "No specialist equipment. Firestick, Android Box, Samsung and LG Smart TVs, MAG and Formuler portals, iOS, Android, and desktop apps — all fully supported across every connection tier.",
  },
  {
    id: "4k",
    Icon: null,
    heading: "True 4K and HD Quality Streaming",
    body: "Resolution scales with your connection — 4K UHD for fast broadband, Full HD 1080p for standard speeds, HD 720p as a reliable baseline. No fake 4K labels on lower-resolution streams. What you see is the actual broadcast quality.",
  },
  {
    id: "vpn",
    Icon: Lock,
    heading: "IPTV VPN Included — Private Streaming on Every Plan",
    body: "Every IPTV subscription includes a pre-installed VPN at no extra cost. Your connection stays private, your ISP cannot throttle your stream, and there is nothing extra to download or configure.",
  },
  {
    id: "support",
    Icon: Headphones,
    heading: "UK Support, 24 Hours a Day",
    body: "Live support via WhatsApp and webchat, with an average reply time under five minutes. Setup help, troubleshooting, and billing questions — answered by a real person, not a queue.",
  },
];

function IconBadge({
  Icon,
  is4K = false,
}: {
  Icon: React.ElementType | null;
  is4K?: boolean;
}) {
  return (
    <div
      className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border"
      style={{
        backgroundColor: "var(--feature-icon-bg)",
        borderColor: "var(--feature-icon-border)",
        boxShadow: "0 0 16px rgba(0, 163, 255, 0.12)",
      }}
    >
      {is4K ? (
        <span
          className="text-sm font-extrabold tracking-tight"
          style={{ color: "var(--feature-heading)" }}
        >
          4K
        </span>
      ) : Icon ? (
        <Icon
          className="h-5 w-5"
          style={{ color: "var(--feature-heading)" }}
          strokeWidth={1.75}
        />
      ) : null}
    </div>
  );
}

function FeatureCard({
  Icon,
  heading,
  body,
  id,
  delay = 0,
}: {
  Icon: React.ElementType | null;
  heading: string;
  body: string;
  id: string;
  delay?: number;
}) {
  const [highlight, ...restParts] = heading.split(" — ");
  const rest = restParts.join(" — ");

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
        <IconBadge Icon={Icon} is4K={id === "4k"} />
        <div className="min-w-0 flex-1">
          <h3 className="mb-2.5 text-[15px] font-bold leading-snug md:text-base">
            <span style={{ color: "var(--feature-heading)" }}>{highlight}</span>
            {rest && (
              <span style={{ color: "var(--hero-heading)" }}> — {rest}</span>
            )}
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

export function SubscriptionWhyChoose() {
  return (
    <section
      id="why-subscription"
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
              Why Choose Us
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2
            className="mx-auto max-w-3xl text-center text-2xl font-bold leading-tight tracking-tight sm:text-4xl md:text-[42px]"
            style={{ color: "var(--hero-heading)" }}
          >
            Why Choose Our{" "}
            <span style={{ color: "var(--hero-accent)" }}>
              IPTV Subscription UK
            </span>{" "}
            Service?
          </h2>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p
            className="mx-auto mt-6 max-w-[680px] text-center text-sm leading-[1.75] sm:text-[15px] md:text-base"
            style={{ color: "var(--hero-muted)" }}
          >
            Dozens of providers sell IPTV subscriptions in the UK. Here is why
            thousands of customers choose this one — and keep renewing.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 md:mt-16">
          {FEATURES.map((feature, i) => (
            <FeatureCard
              key={feature.id}
              id={feature.id}
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
              href="#multi-connection"
              className="cta-shine inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-bold text-white transition-all duration-200 hover:brightness-110 sm:text-[15px]"
              style={{
                background: "var(--hero-cta-primary-bg)",
                boxShadow: "var(--hero-cta-primary-shadow)",
              }}
            >
              See Full Plan Details
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
