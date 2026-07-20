"use client";

import { ArrowRight, TrendingUp } from "lucide-react";
import { Container } from "@/components/layout/container";
import { ScrollReveal } from "@/components/animation/scroll-reveal";
import { FadeIn } from "@/components/animation/fade-in";

export function ResellerProfitabilitySection() {
  return (
    <section
      id="reseller-profitability"
      className="relative isolate overflow-hidden py-16 md:py-24"
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
        <div
          className="mx-auto max-w-4xl rounded-2xl border p-6 sm:p-8 md:p-10"
          style={{
            backgroundColor: "var(--feature-card-bg)",
            borderColor: "var(--feature-card-border)",
            boxShadow: "var(--feature-card-shadow)",
          }}
        >
          <FadeIn delay={0.05}>
            <div className="mb-5 flex items-center justify-center gap-3">
              <div
                className="flex h-11 w-11 items-center justify-center rounded-full border"
                style={{
                  backgroundColor: "var(--feature-icon-bg)",
                  borderColor: "var(--feature-icon-border)",
                }}
              >
                <TrendingUp
                  className="h-5 w-5"
                  style={{ color: "var(--hero-accent)" }}
                  strokeWidth={2}
                />
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2
              className="mx-auto max-w-3xl text-center text-2xl font-bold leading-tight tracking-tight sm:text-3xl md:text-[36px]"
              style={{ color: "var(--hero-heading)" }}
            >
              Is an IPTV Reseller Business{" "}
              <span style={{ color: "var(--hero-accent)" }}>
                Actually Profitable
              </span>
              ?
            </h2>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p
              className="mx-auto mt-5 max-w-[640px] text-center text-sm leading-[1.8] sm:text-[15px]"
              style={{ color: "var(--hero-muted)" }}
            >
              A fair question, and one worth answering honestly with real
              numbers.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="mx-auto mt-7 max-w-[720px] space-y-5 text-sm leading-[1.8] sm:text-[15px]">
              <p style={{ color: "var(--hero-muted)" }}>
                On the Growth Pack, your cost per credit is{" "}
                <strong
                  className="font-semibold"
                  style={{ color: "var(--hero-emphasis)" }}
                >
                  £1.30
                </strong>
                . A typical reseller charges customers between £10 and £20 for a
                1-month subscription, depending on their market and customer
                relationships. At £15 per customer, your profit margin per credit
                sold is roughly{" "}
                <strong
                  className="font-semibold"
                  style={{ color: "var(--hero-emphasis)" }}
                >
                  £13.70
                </strong>{" "}
                — before factoring in repeat renewals, which is where most
                reseller income actually comes from.
              </p>
              <p style={{ color: "var(--hero-muted)" }}>
                A reseller with just 30 active monthly customers, each renewing
                consistently, generates a meaningful secondary income with
                minimal ongoing time investment once the initial setup is done.
                Growth comes from customer retention, not constant new customer
                acquisition — which is why non-expiring credits and reliable
                streaming quality both matter directly to your bottom line.
              </p>
            </div>
          </FadeIn>

          <ScrollReveal direction="up" delay={0.1} once>
            <div className="mt-8 flex justify-center md:mt-10">
              <a
                href="#request-demo"
                className="cta-shine inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-bold text-white transition-all duration-200 hover:brightness-110 sm:text-[15px]"
                style={{
                  background: "var(--hero-cta-primary-bg)",
                  boxShadow: "var(--hero-cta-primary-shadow)",
                }}
              >
                Calculate Your Potential — Request a Demo
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
