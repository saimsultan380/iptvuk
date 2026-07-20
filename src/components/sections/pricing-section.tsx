"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { Container } from "@/components/layout/container";
import { ScrollReveal } from "@/components/animation/scroll-reveal";
import { FadeIn } from "@/components/animation/fade-in";

// ─── Data ────────────────────────────────────────────────────────────────────

const PLANS = {
  standard: {
    name: "Standard IPTV Plan",
    description: "Full HD on one screen, the complete channel library.",
    features: [
      "20,000+ live channels",
      "Full HD / 1080p",
      "60,000+ VOD titles",
      "All sports and PPV",
      "IPTV EPG guide",
      "Built-in VPN",
      "All devices",
      "24/7 UK support",
      "7-day money-back guarantee",
    ],
    durations: [
      {
        months: 1,
        label: "1 MONTH",
        price: "£9.99",
        subtext: "One-time payment • No auto-renewal",
        popular: false,
      },
      {
        months: 3,
        label: "3 MONTHS",
        price: "£24.99",
        subtext: "One-time payment • £8.33/month",
        popular: false,
      },
      {
        months: 6,
        label: "6 MONTHS",
        price: "£39.99",
        subtext: "One-time payment • Best value",
        popular: true,
      },
      {
        months: 12,
        label: "12 MONTHS",
        price: "£59.99",
        subtext: "One-time payment • £5.00/month",
        popular: false,
      },
    ],
  },
  premium: {
    name: "Premium IPTV Plan",
    description: "True 4K and UHD streaming, two simultaneous connections.",
    features: [
      "Everything in Standard, plus",
      "True 4K and UHD streams",
      "2 simultaneous connections",
      "Priority server access",
      "4-day catch-up TV",
      "Faster channel switching",
    ],
    durations: [
      {
        months: 1,
        label: "1 MONTH",
        price: "£14.99",
        subtext: "One-time payment • No auto-renewal",
        popular: false,
      },
      {
        months: 3,
        label: "3 MONTHS",
        price: "£34.99",
        subtext: "One-time payment • £11.66/month",
        popular: false,
      },
      {
        months: 6,
        label: "6 MONTHS",
        price: "£54.99",
        subtext: "One-time payment • Best value",
        popular: true,
      },
      {
        months: 12,
        label: "12 MONTHS",
        price: "£84.99",
        subtext: "One-time payment • £7.08/month",
        popular: false,
      },
    ],
  },
};

function WhatsAppIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.405-.883-.733-1.48-1.639-1.653-1.939-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

// ─── Pricing Card ─────────────────────────────────────────────────────────────

function PricingCard({
  duration,
  features,
  delay = 0,
}: {
  duration: any;
  features: string[];
  delay?: number;
}) {
  const isPopular = duration.popular;

  return (
    <ScrollReveal direction="up" delay={delay} once className="h-full">
      <div
        className={`relative flex h-full flex-col rounded-2xl p-6 md:p-8 transition-all duration-300 ${
          isPopular ? "border-2 md:z-10 md:scale-105 md:-mt-2 md:-mb-2" : "border"
        }`}
        style={{
          backgroundColor: isPopular ? "var(--feature-card-bg)" : "var(--feature-card-bg)",
          borderColor: isPopular ? "var(--hero-accent)" : "var(--feature-card-border)",
          boxShadow: isPopular
            ? "0 0 32px rgba(0, 163, 255, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.04)"
            : "var(--feature-card-shadow)",
        }}
      >
        {isPopular && (
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
            <div
              className="rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white"
              style={{
                background: "var(--hero-cta-primary-bg)",
                boxShadow: "0 4px 12px rgba(0, 163, 255, 0.3)",
              }}
            >
              Most Popular
            </div>
          </div>
        )}

        <div className="mb-6">
          <h3
            className="text-[13px] font-bold uppercase tracking-widest mb-4"
            style={{ color: "var(--hero-muted)" }}
          >
            {duration.label}
          </h3>
          <div className="flex items-baseline gap-1">
            <span
              className="text-2xl font-bold"
              style={{ color: "var(--hero-accent)" }}
            >
              {duration.price.charAt(0)}
            </span>
            <span
              className="text-4xl font-bold tracking-tight md:text-5xl"
              style={{ color: "var(--hero-heading)" }}
            >
              {duration.price.slice(1)}
            </span>
          </div>
          <p
            className="mt-3 text-[13px]"
            style={{ color: "var(--hero-muted)" }}
          >
            {duration.subtext}
          </p>
        </div>

        <div
          className="mb-8 h-px w-full"
          style={{ backgroundColor: "var(--feature-card-border)" }}
        />

        <ul className="mb-8 flex flex-1 flex-col gap-3.5">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3 text-[14px]">
              <Check
                className="mt-0.5 h-4 w-4 shrink-0"
                style={{ color: "var(--hero-accent)" }}
                strokeWidth={2.5}
              />
              <span style={{ color: "var(--hero-muted)" }}>{feature}</span>
            </li>
          ))}
        </ul>

        <a
          href="#"
          className={`flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-[15px] font-bold transition-all duration-200 ${
            isPopular
              ? "text-white hover:brightness-110"
              : "hover:bg-white/5"
          }`}
          style={
            isPopular
              ? {
                  background: "var(--hero-cta-primary-bg)",
                  boxShadow: "var(--hero-cta-primary-shadow)",
                }
              : {
                  backgroundColor: "transparent",
                  border: "1px solid var(--hero-btn-border)",
                  color: "var(--hero-heading)",
                }
          }
        >
          <WhatsAppIcon className="h-5 w-5" />
          Order Now
        </a>
      </div>
    </ScrollReveal>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export function PricingSection() {
  const [isPremium, setIsPremium] = useState(false);

  const activePlan = isPremium ? PLANS.premium : PLANS.standard;
  const displayDurations = activePlan.durations;

  return (
    <section
      id="pricing"
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
              Simple Pricing
            </span>
          </div>
        </FadeIn>

        {/* ── H2 Heading ────────────────────────────────────────────── */}
        <FadeIn delay={0.1}>
          <h2
            className="mx-auto max-w-3xl text-center text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-[44px]"
            style={{ color: "var(--hero-heading)" }}
          >
            IPTV Subscription UK —{" "}
            <span style={{ color: "var(--hero-accent)" }}>Standard and Premium Plans</span>
          </h2>
        </FadeIn>

        {/* ── Intro paragraphs ──────────────────────────────────────── */}
        <FadeIn delay={0.15}>
          <div className="mx-auto mt-6 max-w-[720px] text-center">
            <p
              className="text-[15px] leading-[1.75]"
              style={{ color: "var(--hero-muted)" }}
            >
              Two plans. Four durations. No hidden fees. No auto-billing. Every plan includes the full 20,000+ channel library, EPG TV guide, built-in VPN, all sports and PPV events, and 24/7 UK support.
            </p>
          </div>
        </FadeIn>

        {/* ── Toggle Switch ─────────────────────────────────────────── */}
        <FadeIn delay={0.2}>
          <div className="mt-10 flex items-center justify-center gap-5">
            <button
              type="button"
              onClick={() => setIsPremium(false)}
              className={`text-[13px] font-bold uppercase tracking-wider transition-colors ${
                !isPremium ? "" : "opacity-50 hover:opacity-75"
              }`}
              style={{ color: !isPremium ? "var(--hero-accent)" : "var(--hero-muted)" }}
            >
              Standard
            </button>
            
            <button
              type="button"
              className="relative flex h-7 w-14 cursor-pointer items-center rounded-full transition-colors"
              style={{
                backgroundColor: "var(--hero-pill-bg)",
                border: "1px solid var(--hero-pill-border)",
              }}
              onClick={() => setIsPremium(!isPremium)}
              aria-pressed={isPremium}
            >
              <span className="sr-only">Toggle premium plan</span>
              <span
                className={`inline-block h-5 w-5 transform rounded-full transition-transform duration-200 ease-in-out ${
                  isPremium ? "translate-x-8" : "translate-x-1"
                }`}
                style={{
                  background: "var(--hero-cta-primary-bg)",
                  boxShadow: "0 2px 8px rgba(0, 163, 255, 0.4)",
                }}
              />
            </button>

            <button
              type="button"
              onClick={() => setIsPremium(true)}
              className={`text-[13px] font-bold uppercase tracking-wider transition-colors ${
                isPremium ? "" : "opacity-50 hover:opacity-75"
              }`}
              style={{ color: isPremium ? "var(--hero-accent)" : "var(--hero-muted)" }}
            >
              Premium
            </button>
          </div>
        </FadeIn>

        {/* ── Pricing Cards Grid ────────────────────────────────────── */}
        <div className="mx-auto mt-12 grid max-w-6xl gap-6 md:mt-16 md:grid-cols-2 lg:grid-cols-4 lg:gap-6 items-center">
          {displayDurations.map((duration, i) => (
            <PricingCard
              key={duration.months}
              duration={duration}
              features={activePlan.features}
              delay={0.1 * i}
            />
          ))}
        </div>

        {/* ── Bottom CTA ────────────────────────────────────────────── */}
        <FadeIn delay={0.4}>
          <div className="mx-auto mt-16 max-w-3xl text-center">
            <p
              className="text-[15px] leading-[1.75] mb-6"
              style={{ color: "var(--hero-muted)" }}
            >
              <span className="text-xl mr-2">💡</span> Not sure which to choose? The free trial gives you the full Premium IPTV experience for 24 hours — no credit card, no commitment. Try 4K, test the sports streams, check it on your Firestick or Smart TV. Then decide.
            </p>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 text-[15px] font-bold text-white transition-all duration-200 hover:brightness-110"
              style={{
                background: "var(--hero-cta-primary-bg)",
                boxShadow: "var(--hero-cta-primary-shadow)",
              }}
            >
              Claim Your Free 24-Hour Trial — No Credit Card Needed
            </a>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
