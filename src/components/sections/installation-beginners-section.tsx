"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { ScrollReveal } from "@/components/animation/scroll-reveal";
import { FadeIn } from "@/components/animation/fade-in";

const SETUP_STEPS = [
  "Install a supported IPTV app on your device",
  "Enter your setup code, Portal URL, or login details",
  "Start watching — most people finish in under fifteen minutes",
];

export function InstallationBeginnersSection() {
  return (
    <section
      className="relative isolate overflow-hidden py-20 md:py-28"
      style={{ backgroundColor: "var(--hero-base)" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 70% at 0% 50%, color-mix(in srgb, #36e5ff 8%, transparent) 0%, transparent 70%), radial-gradient(ellipse 40% 60% at 100% 50%, var(--hero-blush-right) 0%, transparent 70%)",
        }}
      />

      <Container className="relative z-10">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <div>
            <FadeIn delay={0.05}>
              <span
                className="text-[11px] font-bold uppercase tracking-[0.22em]"
                style={{ color: "#1cc4f4" }}
              >
                For Beginners
              </span>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h2
                className="mt-4 max-w-xl text-2xl font-bold leading-tight tracking-tight sm:text-3xl md:text-[38px]"
                style={{ color: "var(--hero-heading)" }}
              >
                IPTV Setup for Beginners —{" "}
                <span className="text-gradient-brand">
                  No Technical Knowledge Required
                </span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="mt-6 max-w-xl space-y-4 text-sm leading-[1.8] sm:text-[15px] md:text-base">
                <p style={{ color: "var(--hero-muted)" }}>
                  You do not need any technical background to get started. Every
                  IPTV installation guide on this page follows the same basic
                  pattern — install an app, enter a code or your login details,
                  and start watching.
                </p>
                <p style={{ color: "var(--hero-muted)" }}>
                  If a step is unclear or a code does not work, support is one
                  message away.
                </p>
              </div>
            </FadeIn>

            <ScrollReveal direction="up" delay={0.1} once>
              <Link
                href="/subscription-plans"
                className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-200 sm:text-[15px]"
                style={{ color: "#0e8df2" }}
              >
                View subscription plans
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
            </ScrollReveal>
          </div>

          <ScrollReveal direction="up" delay={0.12} once>
            <div
              className="rounded-2xl p-px"
              style={{ background: "var(--grad-brand)" }}
            >
              <div
                className="rounded-[15px] p-6 sm:p-8"
                style={{
                  backgroundColor: "var(--feature-card-bg)",
                  boxShadow: "var(--feature-card-shadow)",
                }}
              >
                <p
                  className="mb-6 text-[11px] font-bold uppercase tracking-[0.2em]"
                  style={{ color: "#1cc4f4" }}
                >
                  How setup works
                </p>

                <ul className="space-y-5">
                  {SETUP_STEPS.map((step, index) => (
                    <li key={step} className="flex gap-4">
                      <div
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
                        style={{ background: "var(--grad-brand)" }}
                      >
                        {index + 1}
                      </div>
                      <p
                        className="pt-1 text-sm leading-[1.7] sm:text-[15px]"
                        style={{ color: "var(--hero-muted)" }}
                      >
                        {step}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
