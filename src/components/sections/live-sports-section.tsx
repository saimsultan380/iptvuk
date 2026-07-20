"use client";

import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { ScrollReveal } from "@/components/animation/scroll-reveal";
import { FadeIn } from "@/components/animation/fade-in";

// ─── Data ────────────────────────────────────────────────────────────────────

const SPORTS = [
  {
    id: "football",
    emoji: "⚽",
    heading: "IPTV Football — Premier League, Champions League, Europa League",
    body: "IPTV football coverage includes the Premier League, UEFA Champions League, UEFA Europa League, domestic cups, international fixtures, and the FIFA World Cup. Every match. Every kick-off time. Streamed live at the quality the occasion deserves.",
  },
  {
    id: "boxing",
    emoji: "🥊",
    heading: "IPTV Boxing, UFC and PPV Events",
    body: "IPTV PPV events are covered inside your existing subscription. IPTV Boxing — every major world title fight. IPTV UFC — every card, every main event. All included. All live. No extra charge on fight night.",
  },
  {
    id: "f1",
    emoji: "🏎",
    heading: "IPTV Formula 1, Cricket, NBA, NFL and More",
    body: "IPTV Formula 1 covers every race weekend — qualifying, sprints, and the Grand Prix itself. IPTV Cricket follows international Test matches, ODIs, and the Cricket World Cup. NBA and NFL coverage is there for American sports fans in the UK too.",
  },
];

// ─── Sport Card ───────────────────────────────────────────────────────────────

function SportCard({
  emoji,
  heading,
  body,
  delay = 0,
}: {
  emoji: string;
  heading: string;
  body: string;
  delay?: number;
}) {
  return (
    <ScrollReveal direction="up" delay={delay} once>
      <div
        className="flex h-full flex-col gap-4 rounded-2xl border p-6 md:p-7"
        style={{
          backgroundColor: "var(--feature-card-bg)",
          borderColor: "var(--feature-card-border)",
          boxShadow: "var(--feature-card-shadow)",
        }}
      >
        {/* Icon badge */}
        <div
          className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border text-2xl"
          style={{
            backgroundColor: "var(--feature-icon-bg)",
            borderColor: "var(--feature-icon-border)",
            boxShadow: "0 0 16px rgba(0, 163, 255, 0.12)",
          }}
        >
          {emoji}
        </div>

        {/* Heading */}
        <h3
          className="text-[15px] font-bold leading-snug md:text-base"
          style={{ color: "var(--hero-heading)" }}
        >
          {heading}
        </h3>

        {/* Body */}
        <p
          className="text-sm leading-[1.7]"
          style={{ color: "var(--feature-body)" }}
        >
          {body}
        </p>
      </div>
    </ScrollReveal>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export function LiveSportsSection() {
  return (
    <section
      id="live-sports"
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
              Live Sports Coverage
            </span>
          </div>
        </FadeIn>

        {/* ── H2 Headline ───────────────────────────────────────────── */}
        <FadeIn delay={0.1}>
          <h2
            className="mx-auto max-w-3xl text-center text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-[44px]"
            style={{ color: "var(--hero-heading)" }}
          >
            Watch Live Sports with{" "}
            <span style={{ color: "var(--hero-accent)" }}>IPTV UK</span> —
            Premier League, UFC, F1 and More
          </h2>
        </FadeIn>

        {/* ── Subtitle ──────────────────────────────────────────────── */}
        <FadeIn delay={0.15}>
          <p
            className="mx-auto mt-6 max-w-[660px] text-center text-[15px] leading-[1.75] sm:text-base"
            style={{ color: "var(--hero-muted)" }}
          >
            Sports fans switch to IPTV UK because they want every match, every
            fight, every race — without paying separately for each one.
            UK-Best-IPTV covers every major sport. Live. In HD and 4K. On every
            device you own.
          </p>
        </FadeIn>

        {/* ── Cards Grid ────────────────────────────────────────────── */}
        <div className="mt-12 grid gap-5 sm:grid-cols-3 md:mt-14">
          {SPORTS.map((sport, i) => (
            <SportCard
              key={sport.id}
              emoji={sport.emoji}
              heading={sport.heading}
              body={sport.body}
              delay={0.06 * i}
            />
          ))}
        </div>

        {/* ── CTA Button ────────────────────────────────────────────── */}
        <ScrollReveal direction="up" delay={0.15} once>
          <div className="mt-10 flex justify-center md:mt-12">
            <a
              href="#"
              className="flex items-center gap-3 rounded-xl px-8 py-4 text-base font-bold text-white transition-all duration-200 hover:brightness-110"
              style={{
                background: "var(--hero-cta-primary-bg)",
                boxShadow: "var(--hero-cta-primary-shadow)",
              }}
            >
              <ArrowRight className="h-5 w-5" />
              Watch Every Match Live — Start Free Trial Today
            </a>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
