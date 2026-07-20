"use client";

import { Container } from "@/components/layout/container";
import { ScrollReveal } from "@/components/animation/scroll-reveal";
import { FadeIn } from "@/components/animation/fade-in";

// ─── Data ────────────────────────────────────────────────────────────────────

const REVIEWS = [
  {
    id: "mark",
    quote:
      "Cancelled my old package after four years. More channels, significantly cheaper, and support replied in under three minutes when I had a question. Could not be happier.",
    name: "Mark D.",
    location: "Sheffield",
  },
  {
    id: "priya",
    quote:
      "Was sceptical after a bad experience elsewhere. Free trial changed my mind in the first hour — two full matches on Saturday, not a single drop. Seven months in and still going.",
    name: "Priya K.",
    location: "Leicester",
  },
  {
    id: "chris",
    quote:
      "Running it on the main TV and my tablet at the same time. Both perfect. Kids have their channels, I have sport. We haven't argued about the remote since we switched.",
    name: "Chris B.",
    location: "Bristol",
  },
  {
    id: "sarah",
    quote:
      "Switched to Premium for the 4K. It is actual 4K — not a label on a 1080p picture. Exactly what it claims to be.",
    name: "Sarah T.",
    location: "Leeds",
  },
];

// ─── Review Card ─────────────────────────────────────────────────────────────

function ReviewCard({
  quote,
  name,
  location,
  delay = 0,
}: {
  quote: string;
  name: string;
  location: string;
  delay?: number;
}) {
  const initial = name.charAt(0);

  return (
    <ScrollReveal direction="up" delay={delay} once>
      <div
        className="flex h-full flex-col gap-5 rounded-2xl border p-6 md:p-7"
        style={{
          backgroundColor: "var(--feature-card-bg)",
          borderColor: "var(--feature-card-border)",
          boxShadow: "var(--feature-card-shadow)",
        }}
      >
        {/* Quote mark */}
        <div
          className="text-5xl font-black leading-none"
          style={{ color: "var(--hero-accent)", lineHeight: 1 }}
          aria-hidden
        >
          &ldquo;
        </div>

        {/* Quote text */}
        <p
          className="flex-1 text-[15px] leading-[1.75]"
          style={{ color: "var(--hero-heading)" }}
        >
          {quote}&rdquo;
        </p>

        {/* Attribution */}
        <div className="flex items-center gap-3">
          {/* Avatar circle */}
          <div
            className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
            style={{
              background: "var(--hero-cta-primary-bg)",
              boxShadow: "0 0 12px rgba(0, 163, 255, 0.35)",
            }}
          >
            {initial}
          </div>
          <div>
            <span
              className="text-sm font-bold"
              style={{ color: "var(--hero-heading)" }}
            >
              {name}
            </span>
            <span
              className="ml-1.5 text-xs"
              style={{ color: "var(--feature-body)" }}
            >
              {location}
            </span>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export function ReviewsSection() {
  return (
    <section
      id="reviews"
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
        {/* ── Eyebrow ────────────────────────────────────────────────── */}
        <FadeIn delay={0.05}>
          <div className="mb-5 text-center">
            <span
              className="text-[11px] font-bold uppercase tracking-[0.22em]"
              style={{ color: "var(--hero-accent)" }}
            >
              Customer Reviews
            </span>
          </div>
        </FadeIn>

        {/* ── H2 Headline ───────────────────────────────────────────── */}
        <FadeIn delay={0.1}>
          <h2
            className="mx-auto max-w-3xl text-center text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-[44px]"
            style={{ color: "var(--hero-heading)" }}
          >
            99% of Our UK Subscribers Renew — Here Is What{" "}
            <span style={{ color: "var(--hero-accent)" }}>They Say</span>
          </h2>
        </FadeIn>

        {/* ── Subtitle ──────────────────────────────────────────────── */}
        <FadeIn delay={0.15}>
          <p
            className="mx-auto mt-5 text-center text-[15px] leading-[1.75]"
            style={{ color: "var(--hero-muted)" }}
          >
            We do not auto-bill. Every subscriber who stays, chooses to stay.
          </p>
        </FadeIn>

        {/* ── 2×2 Review Grid ───────────────────────────────────────── */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 md:mt-14 md:gap-6">
          {REVIEWS.map((review, i) => (
            <ReviewCard
              key={review.id}
              quote={review.quote}
              name={review.name}
              location={review.location}
              delay={0.07 * i}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
