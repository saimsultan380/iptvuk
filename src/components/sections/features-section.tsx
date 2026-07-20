"use client";

import { MonitorPlay, Clapperboard, Tv, ListVideo, History, ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { ScrollReveal } from "@/components/animation/scroll-reveal";
import { FadeIn } from "@/components/animation/fade-in";

// ─── Data ────────────────────────────────────────────────────────────────────

const FEATURES_TOP = [
  {
    id: "live-tv",
    Icon: MonitorPlay,
    heading: "20,000+ Live TV Channels — UK, International, News and Kids",
    body: "UK terrestrial channels, premium entertainment, international broadcasts from Europe, South Asia, the Middle East, the Americas, dedicated kids' channels, rolling news, and sports channels — all organised and ready from the moment your account activates.",
  },
  {
    id: "vod",
    Icon: Clapperboard,
    heading: "60,000+ Movies and TV Series On Demand — Full VOD Library",
    body: "60,000+ Video On Demand titles available any time. IPTV movies, TV series, documentaries, and box sets — all inside your UK IPTV membership, updated regularly. No separate subscription. No scheduled wait. Browse, select, watch.",
  },
];

const FEATURES_BOTTOM = [
  {
    id: "4k",
    Icon: null, // We'll use a custom 4K badge
    heading: "HD, 4K and UHD IPTV Streaming — Watch in Full Resolution",
    body: "Every stream delivered at the best available resolution. HD channels in HD. Full HD in 1080p. Genuine 4K and UHD IPTV streaming on the Premium plan where the source exists. No compression. No upscaling. Your television shows you exactly what the broadcast is.",
  },
  {
    id: "epg",
    Icon: ListVideo,
    heading: "IPTV EPG — Full Electronic Programme Guide Included",
    body: "The IPTV EPG — Electronic Programme Guide — shows you what is on now, what is coming next, and the full schedule ahead across all 20,000+ channels. Updates automatically. Finding what you want takes seconds, not minutes of scrolling.",
  },
  {
    id: "catchup",
    Icon: History,
    heading: "IPTV Catch-Up TV — Watch What You Missed, Up to 4 Days Back",
    body: "Missed a live match or forgot to watch a show? The IPTV catch-up feature on the Premium plan lets you go back up to four days. Catch-Up TV updates automatically so the archive is always current. Never rearrange your life around a broadcast schedule again.",
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
      className={`flex h-12 w-12 flex-shrink-0 items-center justify-center border ${is4K ? 'rounded-lg' : 'rounded-full'}`}
      style={{
        backgroundColor: "var(--feature-icon-bg)",
        borderColor: "var(--feature-icon-border)",
        boxShadow: "0 0 16px rgba(0, 163, 255, 0.12)",
      }}
    >
      {is4K ? (
        <span
          className="text-[15px] font-extrabold tracking-tight"
          style={{ color: "var(--feature-heading)" }}
        >
          4K
        </span>
      ) : Icon ? (
        <Icon
          className="h-6 w-6"
          style={{ color: "var(--feature-heading)" }}
          strokeWidth={1.5}
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
    <ScrollReveal direction="up" delay={delay} once className="h-full">
      <div
        className="flex h-full flex-col gap-4 rounded-2xl border p-6 md:flex-row md:gap-5 md:p-7"
        style={{
          backgroundColor: "var(--feature-card-bg)",
          borderColor: "var(--feature-card-border)",
          boxShadow: "var(--feature-card-shadow)",
        }}
      >
        <IconBadge Icon={Icon} is4K={id === "4k"} />
        <div className="min-w-0 flex-1">
          <h3 className="mb-3 text-[15px] font-bold leading-snug md:text-base">
            <span style={{ color: "var(--hero-heading)" }}>{highlight}</span>
            {rest && (
              <span style={{ color: "var(--hero-heading)" }}> — <br className="hidden md:block" />{rest}</span>
            )}
          </h3>
          <p
            className="text-[13px] leading-[1.7] md:text-sm"
            style={{ color: "var(--feature-body)" }}
          >
            {body}
          </p>
        </div>
      </div>
    </ScrollReveal>
  );
}

function FeatureCardVertical({
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
    <ScrollReveal direction="up" delay={delay} once className="h-full">
      <div
        className="flex h-full flex-col gap-5 rounded-2xl border p-6 md:p-7"
        style={{
          backgroundColor: "var(--feature-card-bg)",
          borderColor: "var(--feature-card-border)",
          boxShadow: "var(--feature-card-shadow)",
        }}
      >
        <IconBadge Icon={Icon} is4K={id === "4k"} />
        <div className="min-w-0 flex-1">
          <h3 className="mb-3 text-[15px] font-bold leading-snug md:text-base">
            <span style={{ color: "var(--hero-heading)" }}>{highlight}</span>
            {rest && (
              <span style={{ color: "var(--hero-heading)" }}> — <br className="hidden lg:block" />{rest}</span>
            )}
          </h3>
          <p
            className="text-[13px] leading-[1.7] md:text-sm"
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

export function FeaturesSection() {
  return (
    <section
      id="features"
      className="relative isolate overflow-hidden py-20 md:py-28"
      style={{ backgroundColor: "var(--hero-base)" }}
    >
      {/* Subtle center glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 20%, var(--hero-center-glow) 0%, transparent 70%)",
        }}
      />

      {/* ── Background: blush glow – left ───────────────────────────── */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 top-1/4 z-[1]"
        style={{
          width: "50vw",
          height: "50vh",
          background:
            "radial-gradient(ellipse 80% 80% at -10% 50%, var(--hero-blush-left) 0%, transparent 70%)",
        }}
      />

      {/* ── Background: blush glow – right ──────────────────────────── */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 bottom-1/4 z-[1]"
        style={{
          width: "50vw",
          height: "50vh",
          background:
            "radial-gradient(ellipse 80% 80% at 110% 50%, var(--hero-blush-right) 0%, transparent 70%)",
        }}
      />

      <Container className="relative z-10">
        {/* ── Eyebrow ───────────────────────────────────────────────── */}
        <FadeIn delay={0.05}>
          <div className="mb-5 flex items-center justify-center gap-3">
            <span
              className="text-[11px] font-bold uppercase tracking-[0.22em]"
              style={{ color: "var(--hero-accent)" }}
            >
              Everything Included
            </span>
          </div>
        </FadeIn>

        {/* ── H2 Heading ────────────────────────────────────────────── */}
        <FadeIn delay={0.1}>
          <h2
            className="mx-auto max-w-3xl text-center text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-[44px]"
            style={{ color: "var(--hero-heading)" }}
          >
            Features of Your <span style={{ color: "var(--hero-accent)" }}>IPTV UK</span> Subscription
          </h2>
        </FadeIn>

        {/* ── Intro paragraphs ──────────────────────────────────────── */}
        <FadeIn delay={0.15}>
          <div className="mx-auto mt-6 max-w-[680px] text-center">
            <p
              className="text-[15px] leading-[1.75]"
              style={{ color: "var(--hero-muted)" }}
            >
              Every UK-Best-IPTV plan comes fully loaded. <br className="hidden sm:block" />
              Here is exactly what is inside every subscription.
            </p>
          </div>
        </FadeIn>

        {/* ── Feature Cards Grid ────────────────────────────────────── */}
        <div className="mt-12 flex flex-col gap-5 md:mt-16">
          {/* Top Row: 2 Cards */}
          <div className="grid gap-5 md:grid-cols-2">
            {FEATURES_TOP.map((feature, i) => (
              <FeatureCard
                key={feature.id}
                id={feature.id}
                Icon={feature.Icon}
                heading={feature.heading}
                body={feature.body}
                delay={0.1 * i}
              />
            ))}
          </div>

          {/* Bottom Row: 3 Cards */}
          <div className="grid gap-5 md:grid-cols-3">
            {FEATURES_BOTTOM.map((feature, i) => (
              <FeatureCardVertical
                key={feature.id}
                id={feature.id}
                Icon={feature.Icon}
                heading={feature.heading}
                body={feature.body}
                delay={0.2 + 0.1 * i}
              />
            ))}
          </div>
        </div>

        {/* ── Bottom CTA ────────────────────────────────────────────── */}
        <FadeIn delay={0.5}>
          <div className="mt-12 flex justify-center md:mt-16">
            <a
              href="#"
              className="cta-shine group flex items-center gap-2.5 rounded-xl px-8 py-3.5 text-[15px] font-bold text-white transition-all duration-200 hover:brightness-110"
              style={{
                background: "var(--hero-cta-primary-bg)",
                boxShadow: "var(--hero-cta-primary-shadow)",
              }}
            >
              <div className="flex items-center justify-center h-6 w-6 rounded-full border border-white/30 bg-transparent mr-1 transition-transform group-hover:translate-x-1">
                <ArrowRight className="h-3.5 w-3.5" />
              </div>
              Explore Every Feature — Start Free Trial
            </a>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
