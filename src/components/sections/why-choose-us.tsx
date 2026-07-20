"use client";

import {
  Zap,
  Monitor,
  Shield,
  Lock,
  RefreshCw,
  ArrowRight,
  Clock,
} from "lucide-react";
import { Container } from "@/components/layout/container";
import { ScrollReveal } from "@/components/animation/scroll-reveal";
import { FadeIn } from "@/components/animation/fade-in";

// ─── Data ────────────────────────────────────────────────────────────────────

const FEATURES = [
  {
    id: "activation",
    Icon: Zap,
    heading: "Instant Activation — Your Login Arrives in Minutes, Not Days",
    body: "The moment your payment goes through, your credentials land in your inbox automatically — usually within five minutes. Username, password, server URL. Open your IPTV app, enter those details, and you are watching. Most subscribers are on their first channel within ten minutes of signing up.",
  },
  {
    id: "channels",
    Icon: Monitor,
    heading: "20,000+ Live Channels — Updated Every Single Week",
    body: "Our channel library is updated every week — new channels added, quality maintained, broken links fixed. UK terrestrial channels, international content from Europe, South Asia, the Middle East and the Americas, kids' programming, rolling news, and documentary networks. All from one UK IPTV subscription. 20,000+ channels. The actual number. And it keeps growing.",
  },
  {
    id: "buffering",
    Icon: Shield,
    heading: "No Buffering IPTV — Stable Streaming Even on Match Day",
    body: "Our fast IPTV UK servers run dedicated capacity for live sport, completely separate from general channel traffic. When six Premier League matches kick off simultaneously, our system scales automatically. Stable IPTV streaming at the exact moment the pressure is highest. Anti-freeze technology is built into every plan — not sold as an upgrade.",
  },
  {
    id: "4k",
    Icon: null,
    heading: "True 4K IPTV Streaming — Real Resolution, Not a Label",
    body: "Our IPTV 4K UK streams deliver the actual broadcast resolution — genuine 4K where the source exists, on the Premium plan, through your device exactly as intended. No upscaling. No false advertising. Just the picture at the quality you paid for.",
  },
  {
    id: "vpn",
    Icon: Lock,
    heading: "IPTV VPN Included — Private and Secure Streaming on Every Plan",
    body: "Every UK-Best-IPTV subscription includes VPN-level privacy protection built in — no third-party app needed, no extra fee. Your internet provider cannot monitor or throttle your connection. IPTV secure streaming stays private from the moment you log in. Included on every plan as standard.",
  },
  {
    id: "billing",
    Icon: RefreshCw,
    heading: "Zero Auto-Billing — You Choose When to Renew, Always",
    body: "You pick your duration, pay once, and when that pass ends — it ends. Your card is never charged again unless you actively choose to renew. No surprise debits. No retention team. No renewal emails designed to catch you off guard. That is why 99% of our subscribers choose to come back.",
  },
];

// ─── Icon Badge ───────────────────────────────────────────────────────────────

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

// ─── Feature Card ─────────────────────────────────────────────────────────────

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
        id={`feature-card-${id}`}
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

// ─── Main Component ───────────────────────────────────────────────────────────

export function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="relative isolate overflow-hidden py-20 md:py-28"
      style={{ backgroundColor: "var(--hero-base)" }}
    >
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
        {/* ── Eyebrow ───────────────────────────────────────────────── */}
        <FadeIn delay={0.05}>
          <div className="mb-5 text-center">
            <span
              className="text-[11px] font-bold uppercase tracking-[0.22em]"
              style={{ color: "var(--hero-accent)" }}
            >
              Why UK-Best-IPTV
            </span>
          </div>
        </FadeIn>

        {/* ── H2 Heading ────────────────────────────────────────────── */}
        <FadeIn delay={0.1}>
          <h2
            className="mx-auto max-w-3xl text-center text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-[44px]"
            style={{ color: "var(--hero-heading)" }}
          >
            Why UK-Best-<span style={{ color: "var(--hero-accent)" }}>IPTV</span> Is the Best <span style={{ color: "var(--hero-accent)" }}>IPTV</span> Provider UK Viewers Trust in 2026
          </h2>
        </FadeIn>

        {/* ── Intro paragraphs ──────────────────────────────────────── */}
        <FadeIn delay={0.15}>
          <div className="mx-auto mt-7 max-w-[680px] space-y-4 text-center">
            <p
              className="text-[15px] leading-[1.75]"
              style={{ color: "var(--hero-muted)" }}
            >
              Most IPTV UK services make the same promises. Thousands of
              channels. Crystal clear quality. Support around the clock. And
              then the stream freezes at the 89th minute, the support line goes
              quiet, and you realise those promises were just words on a
              webpage.
            </p>
            <p
              className="text-[15px] leading-[1.75]"
              style={{ color: "var(--hero-muted)" }}
            >
              We are{" "}
              <span
                className="font-semibold"
                style={{ color: "var(--hero-accent)" }}
              >
                different
              </span>
              . Here is exactly what we deliver — every day, to{" "}
              <span
                className="font-semibold"
                style={{ color: "var(--hero-accent)" }}
              >
                thousands
              </span>{" "}
              of British IPTV subscribers across the UK.
            </p>
          </div>
        </FadeIn>

        {/* ── Feature Cards Grid ────────────────────────────────────── */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 md:mt-16 md:gap-5">
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

        {/* ── Bottom CTA Strip ──────────────────────────────────────── */}
        <ScrollReveal direction="up" delay={0.1} once>
          <div
            id="why-cta-strip"
            className="mt-12 flex flex-col items-center justify-between gap-6 rounded-2xl border px-6 py-6 sm:flex-row sm:px-8 md:mt-16"
            style={{
              backgroundColor: "var(--feature-cta-bg)",
              borderColor: "var(--feature-cta-border)",
              boxShadow: "var(--feature-card-shadow)",
            }}
          >
            <div className="flex items-center gap-4">
              <div
                className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border"
                style={{
                  backgroundColor: "var(--feature-icon-bg)",
                  borderColor: "var(--feature-icon-border)",
                  boxShadow: "0 0 16px rgba(0, 163, 255, 0.12)",
                }}
              >
                <Clock
                  className="h-5 w-5"
                  style={{ color: "var(--feature-heading)" }}
                  strokeWidth={1.75}
                />
              </div>
              <div>
                <p
                  className="text-base font-bold"
                  style={{ color: "var(--hero-heading)" }}
                >
                  Try It Free for{" "}
                  <span style={{ color: "var(--hero-accent)" }}>24 Hours</span>
                </p>
                <p
                  className="mt-0.5 text-sm"
                  style={{ color: "var(--feature-body)" }}
                >
                  Full access to all channels, VOD library, and premium
                  features. No credit card. No commitment.
                </p>
              </div>
            </div>

            <a
              href="#"
              id="why-cta-button"
              className="flex w-full shrink-0 items-center justify-center gap-2 rounded-xl px-7 py-3.5 text-sm font-bold text-white transition-all duration-200 hover:brightness-110 sm:w-auto"
              style={{
                background: "var(--hero-cta-primary-bg)",
                boxShadow: "var(--hero-cta-primary-shadow)",
              }}
            >
              Start Your Free 24-Hour Trial Now
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
