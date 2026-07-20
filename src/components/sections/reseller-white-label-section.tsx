"use client";

import { Tag, Globe, ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { ScrollReveal } from "@/components/animation/scroll-reveal";
import { FadeIn } from "@/components/animation/fade-in";

export function ResellerWhiteLabelSection() {
  return (
    <section
      id="white-label"
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
        <div className="mx-auto max-w-4xl">
          <FadeIn delay={0.05}>
            <div className="mb-5 text-center">
              <span
                className="text-[11px] font-bold uppercase tracking-[0.22em]"
                style={{ color: "var(--hero-accent)" }}
              >
                White Label
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2
              className="mx-auto max-w-3xl text-center text-2xl font-bold leading-tight tracking-tight sm:text-3xl md:text-[40px]"
              style={{ color: "var(--hero-heading)" }}
            >
              White Label{" "}
              <span style={{ color: "var(--hero-accent)" }}>
                IPTV Reseller Solution
              </span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p
              className="mx-auto mt-6 max-w-[720px] text-center text-sm leading-[1.8] sm:text-[15px] md:text-base"
              style={{ color: "var(--hero-muted)" }}
            >
              Most resellers want their customers to recognise their own brand —
              not their supplier&apos;s. This panel supports that fully.
            </p>
          </FadeIn>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 md:mt-12">
            <ScrollReveal direction="up" delay={0.05} once>
              <div
                className="flex h-full gap-4 rounded-2xl border p-6 md:p-7"
                style={{
                  backgroundColor: "var(--feature-card-bg)",
                  borderColor: "var(--feature-card-border)",
                  boxShadow: "var(--feature-card-shadow)",
                }}
              >
                <div
                  className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border"
                  style={{
                    backgroundColor: "var(--feature-icon-bg)",
                    borderColor: "var(--feature-icon-border)",
                  }}
                >
                  <Tag
                    className="h-5 w-5"
                    style={{ color: "var(--feature-heading)" }}
                    strokeWidth={1.75}
                  />
                </div>
                <div>
                  <h3
                    className="mb-2.5 text-[15px] font-bold md:text-base"
                    style={{ color: "var(--hero-heading)" }}
                  >
                    Custom App Naming
                  </h3>
                  <p
                    className="text-sm leading-[1.7]"
                    style={{ color: "var(--feature-body)" }}
                  >
                    Custom app naming is available on the Pro Reseller Pack,
                    meaning your customers download and use an app carrying your
                    business name, not ours.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.1} once>
              <div
                className="flex h-full gap-4 rounded-2xl border p-6 md:p-7"
                style={{
                  backgroundColor: "var(--feature-card-bg)",
                  borderColor: "var(--feature-card-border)",
                  boxShadow: "var(--feature-card-shadow)",
                }}
              >
                <div
                  className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border"
                  style={{
                    backgroundColor: "var(--feature-icon-bg)",
                    borderColor: "var(--feature-icon-border)",
                  }}
                >
                  <Globe
                    className="h-5 w-5"
                    style={{ color: "var(--feature-heading)" }}
                    strokeWidth={1.75}
                  />
                </div>
                <div>
                  <h3
                    className="mb-2.5 text-[15px] font-bold md:text-base"
                    style={{ color: "var(--hero-heading)" }}
                  >
                    Custom Domain Access
                  </h3>
                  <p
                    className="text-sm leading-[1.7]"
                    style={{ color: "var(--feature-body)" }}
                  >
                    For resellers purchasing 500 or more credits, a custom domain
                    option is also available — your customers log into their
                    subscription through your own web address entirely.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <FadeIn delay={0.2}>
            <p
              className="mx-auto mt-8 max-w-[720px] text-center text-sm leading-[1.8] sm:text-[15px]"
              style={{ color: "var(--hero-muted)" }}
            >
              White label setup is handled directly by our team after purchase,
              typically live within one to two business days. There is no
              confusing self-service branding tool to figure out — we configure
              it once, and it stays consistent for every customer you bring on.
            </p>
          </FadeIn>

          <ScrollReveal direction="up" delay={0.1} once>
            <div className="mt-8 flex justify-center md:mt-10">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-bold text-white transition-all duration-200 hover:brightness-110 sm:text-[15px]"
                style={{
                  background: "var(--hero-cta-primary-bg)",
                  boxShadow: "var(--hero-cta-primary-shadow)",
                }}
              >
                Ask About White Label Setup
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
