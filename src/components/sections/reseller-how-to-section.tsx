"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { ScrollReveal } from "@/components/animation/scroll-reveal";
import { FadeIn } from "@/components/animation/fade-in";

const STEPS = [
  {
    number: 1,
    heading: "Step 1 — Choose Your Plan",
    body: "Pick the credit pack that matches your expected customer volume. Starter to test the waters, Growth for steady business, Pro for serious volume and white label access.",
  },
  {
    number: 2,
    heading: "Step 2 — Get Your Dashboard Access",
    body: "Your panel login arrives by email within minutes of payment — username, password, and dashboard link. You choose your own panel username, so it is recognisable to you from day one.",
  },
  {
    number: 3,
    heading: "Step 3 — Start Selling",
    body: "Log in, create your first customer line, and send your customer their access details. From here, every sale is yours to manage — pricing, customer communication, and renewals all under your control.",
  },
];

function StepBadge({ number }: { number: number }) {
  return (
    <div
      className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border-2 text-lg font-extrabold md:h-16 md:w-16 md:text-2xl"
      style={{
        borderColor: "var(--hero-accent)",
        backgroundColor: "var(--hero-base)",
        color: "var(--hero-accent)",
        boxShadow:
          "0 0 0 4px color-mix(in srgb, var(--hero-accent) 12%, transparent), 0 0 28px color-mix(in srgb, var(--hero-accent) 30%, transparent)",
      }}
    >
      {number}
    </div>
  );
}

export function ResellerHowToSection() {
  return (
    <section
      id="how-to-resell"
      className="relative isolate overflow-hidden py-16 md:py-28"
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
              Simple Process
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2
            className="mx-auto max-w-3xl text-center text-2xl font-bold leading-tight tracking-tight sm:text-4xl md:text-[44px]"
            style={{ color: "var(--hero-heading)" }}
          >
            How to Become an{" "}
            <span style={{ color: "var(--hero-accent)" }}>IPTV Reseller</span>{" "}
            — 3 Simple Steps
          </h2>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p
            className="mx-auto mt-4 max-w-[520px] text-center text-sm leading-[1.75] sm:mt-5 sm:text-[15px]"
            style={{ color: "var(--hero-muted)" }}
          >
            Most resellers are creating their first customer line within ten
            minutes of completing payment.
          </p>
        </FadeIn>

        <div className="mt-10 md:hidden">
          {STEPS.map((step, i) => (
            <ScrollReveal
              key={step.number}
              direction="up"
              delay={0.08 * i}
              once
            >
              <div className="relative flex gap-4">
                {i < STEPS.length - 1 && (
                  <div
                    className="absolute left-6 top-12 bottom-0 w-px -translate-x-1/2"
                    style={{
                      background:
                        "linear-gradient(180deg, var(--hero-accent) 0%, color-mix(in srgb, var(--hero-accent) 20%, transparent) 100%)",
                      opacity: 0.35,
                    }}
                    aria-hidden
                  />
                )}

                <StepBadge number={step.number} />

                <div className="min-w-0 flex-1 pb-8 last:pb-0">
                  <h3
                    className="mb-2 text-[15px] font-bold leading-snug"
                    style={{ color: "var(--hero-heading)" }}
                  >
                    {step.heading}
                  </h3>
                  <p
                    className="text-sm leading-[1.75]"
                    style={{ color: "var(--feature-body)" }}
                  >
                    {step.body}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-14 hidden md:mt-16 md:block">
          <div className="relative flex items-center justify-between px-24 lg:px-32">
            <div
              className="absolute inset-x-0 top-1/2 mx-36 h-px -translate-y-1/2 lg:mx-44"
              style={{
                background:
                  "linear-gradient(90deg, transparent 0%, var(--hero-accent) 20%, var(--hero-accent) 80%, transparent 100%)",
                opacity: 0.3,
              }}
              aria-hidden
            />

            {STEPS.map((step, i) => (
              <ScrollReveal
                key={step.number}
                direction="up"
                delay={0.08 * i}
                once
              >
                <StepBadge number={step.number} />
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-3 gap-10">
            {STEPS.map((step, i) => (
              <ScrollReveal
                key={step.number}
                direction="up"
                delay={0.1 + 0.08 * i}
                once
              >
                <div className="text-center">
                  <h3
                    className="mb-3 text-base font-bold leading-snug"
                    style={{ color: "var(--hero-heading)" }}
                  >
                    {step.heading}
                  </h3>
                  <p
                    className="text-sm leading-[1.75]"
                    style={{ color: "var(--feature-body)" }}
                  >
                    {step.body}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <ScrollReveal direction="up" delay={0.15} once>
          <div className="mt-8 flex justify-center md:mt-14">
            <Link
              href="#reseller-plans"
              className="flex w-full max-w-sm items-center justify-center gap-2.5 rounded-xl px-6 py-3.5 text-sm font-bold text-white transition-all duration-200 hover:brightness-110 sm:w-auto sm:max-w-none sm:gap-3 sm:px-8 sm:py-4 sm:text-base"
              style={{
                background: "var(--hero-cta-primary-bg)",
                boxShadow: "var(--hero-cta-primary-shadow)",
              }}
            >
              Get Your Panel — Start Selling Today
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </Link>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
