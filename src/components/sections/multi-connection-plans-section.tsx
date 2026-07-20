"use client";

import { useState } from "react";
import { ArrowRight, Lightbulb } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/layout/container";
import { ScrollReveal } from "@/components/animation/scroll-reveal";
import { FadeIn } from "@/components/animation/fade-in";
import { cn } from "@/lib/utils";

// ─── Data ────────────────────────────────────────────────────────────────────

type PricingRow = {
  duration: string;
  fullPrice: string;
  yourPrice: string;
  perMonth: string;
};

type ConnectionPlan = {
  id: string;
  tabLabel: string;
  heading: string;
  body: string;
  cta: string;
  rows: PricingRow[];
};

const CONNECTION_PLANS: ConnectionPlan[] = [
  {
    id: "single",
    tabLabel: "Single",
    heading: "Single Connection — One Screen, Full Library",
    body: "The right IPTV subscription package for solo viewers or anyone who only streams on one device at a time. Full 12,000+ channel access, complete VOD library, and 4K where available — all on one login.",
    cta: "Buy Single Connection",
    rows: [
      { duration: "1 Month", fullPrice: "—", yourPrice: "£15.99", perMonth: "£15.99/mo" },
      { duration: "3 Months", fullPrice: "—", yourPrice: "£29.99", perMonth: "£10.00/mo" },
      { duration: "6 Months", fullPrice: "—", yourPrice: "£39.99", perMonth: "£6.66/mo" },
      { duration: "12 Months", fullPrice: "—", yourPrice: "£49.99", perMonth: "£4.16/mo" },
    ],
  },
  {
    id: "double",
    tabLabel: "Double",
    heading: "Double Connection — Two Screens, One Subscription",
    body: "Built for couples and small households who want two devices streaming different channels at the same time. Same full library, same quality, twice the flexibility.",
    cta: "Buy Double Connection",
    rows: [
      { duration: "1 Month", fullPrice: "—", yourPrice: "£19.99", perMonth: "£19.99/mo" },
      { duration: "3 Months", fullPrice: "—", yourPrice: "£39.99", perMonth: "£13.33/mo" },
      { duration: "6 Months", fullPrice: "—", yourPrice: "£54.99", perMonth: "£9.16/mo" },
      { duration: "12 Months", fullPrice: "—", yourPrice: "£69.99", perMonth: "£5.83/mo" },
    ],
  },
  {
    id: "triple",
    tabLabel: "Triple",
    heading: "Triple Connection — Three Screens for the Whole Household",
    body: "Ideal for families. Three simultaneous connections means everyone watches what they want, when they want, without anyone waiting their turn.",
    cta: "Buy Triple Connection",
    rows: [
      { duration: "1 Month", fullPrice: "—", yourPrice: "£24.99", perMonth: "£24.99/mo" },
      { duration: "3 Months", fullPrice: "—", yourPrice: "£49.99", perMonth: "£16.66/mo" },
      { duration: "6 Months", fullPrice: "—", yourPrice: "£69.99", perMonth: "£11.66/mo" },
      { duration: "12 Months", fullPrice: "—", yourPrice: "£89.99", perMonth: "£7.50/mo" },
    ],
  },
];

// ─── Pricing Table ────────────────────────────────────────────────────────────

const TABLE_COLUMNS = [
  { short: "Term", full: "Duration" },
  { short: "Full", full: "Full Price" },
  { short: "Price", full: "Your Price" },
  { short: "/Mo", full: "Per Month" },
] as const;

function shortenDuration(duration: string) {
  return duration.replace(" Months", " Mo").replace(" Month", " Mo");
}

function PricingTable({ rows }: { rows: PricingRow[] }) {
  return (
    <div
      className="rounded-xl border"
      style={{ borderColor: "var(--feature-card-border)" }}
    >
      <div
        className="grid grid-cols-4 gap-1 border-b px-2 py-2.5 sm:gap-3 sm:px-5 sm:py-3.5"
        style={{
          borderColor: "var(--feature-card-border)",
          backgroundColor: "color-mix(in srgb, var(--hero-accent) 6%, transparent)",
        }}
      >
        {TABLE_COLUMNS.map((col) => (
          <span
            key={col.full}
            className="text-[9px] font-bold uppercase leading-tight tracking-wide sm:text-xs sm:tracking-wider md:text-[13px]"
            style={{ color: "var(--hero-accent)" }}
          >
            <span className="sm:hidden">{col.short}</span>
            <span className="hidden sm:inline">{col.full}</span>
          </span>
        ))}
      </div>

      {rows.map((row, i) => (
        <div
          key={row.duration}
          className="grid grid-cols-4 items-center gap-1 px-2 py-2.5 sm:gap-3 sm:px-5 sm:py-3.5"
          style={{
            borderTop: i === 0 ? "none" : `1px solid var(--hero-divider)`,
          }}
        >
          <span
            className="text-[10px] font-medium leading-tight sm:text-sm"
            style={{ color: "var(--hero-heading)" }}
          >
            <span className="sm:hidden">{shortenDuration(row.duration)}</span>
            <span className="hidden sm:inline">{row.duration}</span>
          </span>
          <span
            className="text-[10px] leading-tight sm:text-sm"
            style={{ color: "var(--feature-body)" }}
          >
            {row.fullPrice}
          </span>
          <span
            className="text-[10px] font-semibold leading-tight sm:text-sm"
            style={{ color: "var(--hero-heading)" }}
          >
            {row.yourPrice}
          </span>
          <span
            className="text-[10px] font-medium leading-tight sm:text-sm"
            style={{ color: "var(--hero-accent)" }}
          >
            {row.perMonth}
          </span>
        </div>
      ))}
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export function MultiConnectionPlansSection() {
  const [activeId, setActiveId] = useState<string>("single");
  const activePlan =
    CONNECTION_PLANS.find((p) => p.id === activeId) ?? CONNECTION_PLANS[0];

  return (
    <section
      id="multi-connection"
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
              Multi-Connection Plans
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2
            className="mx-auto max-w-3xl text-center text-2xl font-bold leading-tight tracking-tight sm:text-4xl md:text-[42px]"
            style={{ color: "var(--hero-heading)" }}
          >
            IPTV Subscription UK Plans —{" "}
            <span style={{ color: "var(--hero-accent)" }}>
              Single, Double and Triple Connection
            </span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p
            className="mx-auto mt-6 max-w-[720px] text-center text-sm leading-[1.75] sm:text-[15px] md:text-base"
            style={{ color: "var(--hero-muted)" }}
          >
            Choose based on how many screens your household actually uses at
            once. Every connection tier includes the identical channel library,
            EPG, VOD content, and built-in VPN. The only difference is how many
            devices can stream simultaneously.
          </p>
        </FadeIn>

        {/* ── Connection tabs ───────────────────────────────────────── */}
        <FadeIn delay={0.2}>
          <div
            className="mx-auto mt-10 flex max-w-xl flex-row items-stretch gap-1 rounded-2xl border p-1 sm:mt-12 sm:gap-1 sm:p-1.5"
            role="tablist"
            aria-label="Connection plans"
            style={{
              borderColor: "var(--hero-pill-border)",
              backgroundColor: "var(--hero-pill-bg)",
            }}
          >
            {CONNECTION_PLANS.map((plan) => {
              const isActive = activeId === plan.id;
              return (
                <button
                  key={plan.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveId(plan.id)}
                  className={cn(
                    "flex-1 rounded-lg px-2 py-2 text-xs font-bold transition-all duration-200 sm:rounded-xl sm:px-4 sm:py-3 sm:text-[13px]",
                    isActive
                      ? "text-white shadow-[0_4px_16px_rgba(0,163,255,0.35)]"
                      : "hover:opacity-80"
                  )}
                  style={
                    isActive
                      ? {
                          background:
                            "linear-gradient(135deg, #00a3ff 0%, #0066cc 100%)",
                          color: "#ffffff",
                        }
                      : { color: "var(--hero-muted)" }
                  }
                >
                  <span className="sm:hidden">{plan.tabLabel}</span>
                  <span className="hidden sm:inline">
                    {plan.tabLabel} Connection
                  </span>
                </button>
              );
            })}
          </div>
        </FadeIn>

        {/* ── Active plan panel ─────────────────────────────────────── */}
        <div className="mx-auto mt-8 max-w-3xl md:mt-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activePlan.id}
              role="tabpanel"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22 }}
              className="rounded-2xl border p-4 sm:p-6 md:p-8"
              style={{
                backgroundColor: "var(--feature-card-bg)",
                borderColor: "var(--feature-card-border)",
                boxShadow: "var(--feature-card-shadow)",
              }}
            >
              <h3
                className="text-lg font-bold leading-snug sm:text-xl"
                style={{ color: "var(--hero-heading)" }}
              >
                {activePlan.heading}
              </h3>
              <p
                className="mt-3 text-sm leading-[1.75] sm:text-[15px]"
                style={{ color: "var(--feature-body)" }}
              >
                {activePlan.body}
              </p>

              <div className="mt-6">
                <PricingTable rows={activePlan.rows} />
              </div>

              <a
                href="#"
                className="cta-shine mt-6 inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-bold text-white transition-all duration-200 hover:brightness-110 sm:text-[15px]"
                style={{
                  background: "var(--hero-cta-primary-bg)",
                  boxShadow: "var(--hero-cta-primary-shadow)",
                }}
              >
                {activePlan.cta}
                <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>
          </AnimatePresence>
        </div>

        <ScrollReveal direction="up" delay={0.1} once>
          <div
            className="mx-auto mt-12 max-w-3xl rounded-2xl border px-6 py-8 text-center sm:px-10 md:mt-16"
            style={{
              backgroundColor: "var(--feature-cta-bg)",
              borderColor: "var(--feature-cta-border)",
              boxShadow: "var(--feature-card-shadow)",
            }}
          >
            <div
              className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-full border"
              style={{
                backgroundColor: "var(--feature-icon-bg)",
                borderColor: "var(--feature-icon-border)",
              }}
            >
              <Lightbulb
                className="h-5 w-5"
                style={{ color: "var(--hero-accent)" }}
                strokeWidth={2}
              />
            </div>
            <p
              className="text-sm leading-[1.75] sm:text-[15px]"
              style={{ color: "var(--hero-muted)" }}
            >
              Not sure how many connections you need? The free trial gives you
              full access to test on multiple devices before you commit. No card
              required.
            </p>
            <a
              href="#free-trial"
              className="cta-shine mt-6 inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-bold text-white transition-all duration-200 hover:brightness-110 sm:text-[15px]"
              style={{
                background: "var(--hero-cta-primary-bg)",
                boxShadow: "var(--hero-cta-primary-shadow)",
              }}
            >
              Claim Your Free 24-Hour Trial
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
