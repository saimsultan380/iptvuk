"use client";

import { useState } from "react";
import { ArrowRight, Lightbulb, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/layout/container";
import { ScrollReveal } from "@/components/animation/scroll-reveal";
import { FadeIn } from "@/components/animation/fade-in";
import { cn } from "@/lib/utils";

type PlanRow = {
  plan: string;
  credits: string;
  price: string;
  perCredit: string;
};

type ResellerPlan = {
  id: string;
  tabLabel: string;
  heading: string;
  body: string;
  cta: string;
  rows: PlanRow[];
  perks: string[];
};

const RESELLER_PLANS: ResellerPlan[] = [
  {
    id: "starter",
    tabLabel: "Starter",
    heading: "Starter Pack — 100 Credits",
    body: "Built for new resellers who want to test the business before committing further. Enough credits to onboard your first 100 monthly customers, or fewer customers on longer subscription terms.",
    cta: "Buy Starter Pack",
    rows: [
      {
        plan: "Starter Pack",
        credits: "100",
        price: "£150",
        perCredit: "£1.50",
      },
    ],
    perks: [
      "Instant panel activation",
      "22,000+ channels",
      "88,000+ VOD titles",
      "Non-expiring credits",
      "24/7 reseller support",
    ],
  },
  {
    id: "growth",
    tabLabel: "Growth",
    heading: "Growth Pack — 250 Credits",
    body: "The most popular choice for resellers building a steady customer base. Lower cost per credit than Starter, with enough volume to support real monthly growth.",
    cta: "Buy Growth Pack",
    rows: [
      {
        plan: "Growth Pack",
        credits: "250",
        price: "£325",
        perCredit: "£1.30",
      },
    ],
    perks: [
      "Instant panel activation",
      "22,000+ channels",
      "88,000+ VOD titles",
      "Non-expiring credits",
      "24/7 reseller support",
    ],
  },
  {
    id: "pro",
    tabLabel: "Pro",
    heading: "Pro Reseller Pack — 500+ Credits",
    body: "For established resellers running real volume. The lowest cost per credit, with white label branding eligibility included.",
    cta: "Buy Pro Reseller Pack",
    rows: [
      {
        plan: "Pro Reseller Pack",
        credits: "500+",
        price: "From £600",
        perCredit: "£1.20",
      },
    ],
    perks: [
      "Instant panel activation",
      "22,000+ channels",
      "88,000+ VOD titles",
      "Non-expiring credits",
      "White label eligible",
      "24/7 reseller support",
    ],
  },
];

const TABLE_COLUMNS = [
  { short: "Plan", full: "Plan" },
  { short: "Credits", full: "Credits" },
  { short: "Price", full: "Price" },
  { short: "/Credit", full: "Per Credit" },
] as const;

function PricingTable({ rows }: { rows: PlanRow[] }) {
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
          key={row.plan}
          className="grid grid-cols-4 items-center gap-1 px-2 py-2.5 sm:gap-3 sm:px-5 sm:py-3.5"
          style={{
            borderTop: i === 0 ? "none" : `1px solid var(--hero-divider)`,
          }}
        >
          <span
            className="text-[10px] font-medium leading-tight sm:text-sm"
            style={{ color: "var(--hero-heading)" }}
          >
            {row.plan}
          </span>
          <span
            className="text-[10px] leading-tight sm:text-sm"
            style={{ color: "var(--feature-body)" }}
          >
            {row.credits}
          </span>
          <span
            className="text-[10px] font-semibold leading-tight sm:text-sm"
            style={{ color: "var(--hero-heading)" }}
          >
            {row.price}
          </span>
          <span
            className="text-[10px] font-medium leading-tight sm:text-sm"
            style={{ color: "var(--hero-accent)" }}
          >
            {row.perCredit}
          </span>
        </div>
      ))}
    </div>
  );
}

export function ResellerPlansSection() {
  const [activeId, setActiveId] = useState<string>("starter");
  const activePlan =
    RESELLER_PLANS.find((p) => p.id === activeId) ?? RESELLER_PLANS[0];

  return (
    <section
      id="reseller-plans"
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
              Reseller Plans
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2
            className="mx-auto max-w-3xl text-center text-2xl font-bold leading-tight tracking-tight sm:text-4xl md:text-[42px]"
            style={{ color: "var(--hero-heading)" }}
          >
            IPTV Reseller Plans —{" "}
            <span style={{ color: "var(--hero-accent)" }}>
              Choose Your Panel Size
            </span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p
            className="mx-auto mt-6 max-w-[720px] text-center text-sm leading-[1.75] sm:text-[15px] md:text-base"
            style={{ color: "var(--hero-muted)" }}
          >
            Every plan includes the full panel dashboard, the complete channel
            library, and non-expiring credits. The only difference is how many
            credits you start with — and how much you save per credit at higher
            volumes.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div
            className="mx-auto mt-10 flex max-w-xl flex-row items-stretch gap-1 rounded-2xl border p-1 sm:mt-12 sm:gap-1 sm:p-1.5"
            role="tablist"
            aria-label="Reseller plans"
            style={{
              borderColor: "var(--hero-pill-border)",
              backgroundColor: "var(--hero-pill-bg)",
            }}
          >
            {RESELLER_PLANS.map((plan) => {
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
                  {plan.tabLabel}
                </button>
              );
            })}
          </div>
        </FadeIn>

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

              <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
                {activePlan.perks.map((perk) => (
                  <span
                    key={perk}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm"
                    style={{ color: "var(--feature-body)" }}
                  >
                    <Check
                      className="h-3.5 w-3.5 flex-shrink-0"
                      style={{ color: "var(--hero-accent)" }}
                      strokeWidth={2.5}
                    />
                    {perk}
                  </span>
                ))}
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
            id="request-demo"
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
              Not sure which pack fits your business? Request a free demo and our
              team will walk you through the dashboard before you commit to
              anything.
            </p>
            <a
              href="#"
              className="cta-shine mt-6 inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-bold text-white transition-all duration-200 hover:brightness-110 sm:text-[15px]"
              style={{
                background: "var(--hero-cta-primary-bg)",
                boxShadow: "var(--hero-cta-primary-shadow)",
              }}
            >
              Request a Free Demo
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
