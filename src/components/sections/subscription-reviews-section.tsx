"use client";

import { Container } from "@/components/layout/container";
import { ScrollReveal } from "@/components/animation/scroll-reveal";
import { FadeIn } from "@/components/animation/fade-in";

const REVIEWS = [
  {
    id: "mark",
    quote:
      "Switched from cable after years of overpaying. The Double Connection plan means my partner and I both watch what we want at the same time. Setup took under fifteen minutes.",
    name: "Mark D.",
    location: "Sheffield",
  },
  {
    id: "priya",
    quote:
      "Tried a different IPTV subscription before and it buffered constantly. This one has not dropped once during a live match in three months. Genuinely reliable.",
    name: "Priya K.",
    location: "Leicester",
  },
  {
    id: "chris",
    quote:
      "Triple Connection plan for the whole family — three screens, zero arguments about the remote. Support replied on WhatsApp within two minutes when I had a setup question.",
    name: "Chris B.",
    location: "Bristol",
  },
  {
    id: "sarah",
    quote:
      "The free trial sold me. Tested it for a full day before paying anything. The picture quality on 4K channels is genuinely excellent.",
    name: "Sarah T.",
    location: "Leeds",
  },
];

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
        <div
          className="text-5xl font-black leading-none"
          style={{ color: "var(--hero-accent)", lineHeight: 1 }}
          aria-hidden
        >
          &ldquo;
        </div>

        <p
          className="flex-1 text-sm leading-[1.75] sm:text-[15px]"
          style={{ color: "var(--hero-heading)" }}
        >
          {quote}&rdquo;
        </p>

        <div className="flex items-center gap-3">
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

export function SubscriptionReviewsSection() {
  return (
    <section
      id="subscription-reviews"
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
              Customer Reviews
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2
            className="mx-auto max-w-3xl text-center text-2xl font-bold leading-tight tracking-tight sm:text-4xl md:text-[42px]"
            style={{ color: "var(--hero-heading)" }}
          >
            What Our{" "}
            <span style={{ color: "var(--hero-accent)" }}>
              IPTV Subscription UK
            </span>{" "}
            Customers Say
          </h2>
        </FadeIn>

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
