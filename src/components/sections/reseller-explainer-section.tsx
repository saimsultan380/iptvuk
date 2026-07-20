"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/animation/fade-in";
import { ScrollReveal } from "@/components/animation/scroll-reveal";

export function ResellerExplainerSection() {
  return (
    <section
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
        <FadeIn delay={0.05}>
          <div className="mb-5 text-center">
            <span
              className="text-[11px] font-bold uppercase tracking-[0.22em]"
              style={{ color: "var(--hero-accent)" }}
            >
              Reseller Explained
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2
            className="mx-auto max-w-3xl text-center text-2xl font-bold leading-tight tracking-tight sm:text-3xl md:text-[40px]"
            style={{ color: "var(--hero-heading)" }}
          >
            What Is an{" "}
            <span style={{ color: "var(--hero-accent)" }}>IPTV Reseller Panel</span>
            ?
          </h2>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="mx-auto mt-7 max-w-[720px] space-y-5 text-center sm:mt-8">
            <p
              className="text-sm leading-[1.8] sm:text-[15px] md:text-base"
              style={{ color: "var(--hero-muted)" }}
            >
              An IPTV reseller panel is a dashboard that lets you create,
              manage, and sell IPTV subscriptions to your own customers under
              your own pricing. You buy credits in bulk at a wholesale rate,
              then use those credits to generate individual customer lines —
              each one a live IPTV subscription you control.
            </p>
            <p
              className="text-sm leading-[1.8] sm:text-[15px] md:text-base"
              style={{ color: "var(--hero-muted)" }}
            >
              You set your own prices. You manage your own customers. The panel
              itself handles the technical side — account creation, server
              access, and channel delivery — so you can focus on running the
              business, not the infrastructure.
            </p>
          </div>
        </FadeIn>

        <div
          className="mx-auto mt-16 max-w-3xl rounded-2xl border p-6 sm:p-8 md:mt-20 md:p-10"
          style={{
            backgroundColor: "var(--feature-card-bg)",
            borderColor: "var(--feature-card-border)",
            boxShadow: "var(--feature-card-shadow)",
          }}
        >
          <FadeIn delay={0.1}>
            <h2
              className="text-center text-xl font-bold leading-tight sm:text-2xl md:text-[32px]"
              style={{ color: "var(--hero-heading)" }}
            >
              How IPTV Reseller{" "}
              <span style={{ color: "var(--hero-accent)" }}>Credits Work</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p
              className="mx-auto mt-5 max-w-[640px] text-center text-sm leading-[1.8] sm:text-[15px]"
              style={{ color: "var(--hero-muted)" }}
            >
              The credit system is simple once you see it in action.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="mt-6 space-y-4 text-sm leading-[1.8] sm:text-[15px]">
              <p style={{ color: "var(--hero-muted)" }}>
                Say your panel has{" "}
                <strong
                  className="font-semibold"
                  style={{ color: "var(--hero-emphasis)" }}
                >
                  100 credits
                </strong>
                . You sell a 1-month subscription to a customer for £15.
                Creating that customer line deducts{" "}
                <strong
                  className="font-semibold"
                  style={{ color: "var(--hero-emphasis)" }}
                >
                  1 credit
                </strong>{" "}
                from your panel — leaving you with 99 credits and £15 in
                revenue. Sell a 12-month subscription instead, and that deducts{" "}
                <strong
                  className="font-semibold"
                  style={{ color: "var(--hero-emphasis)" }}
                >
                  12 credits
                </strong>{" "}
                in one transaction.
              </p>
              <p style={{ color: "var(--hero-muted)" }}>
                That is the entire system.{" "}
                <strong
                  className="font-semibold"
                  style={{ color: "var(--hero-emphasis)" }}
                >
                  1 credit always equals 1 month
                </strong>{" "}
                of subscription access for one customer. Credits do not expire,
                so nothing goes to waste if business is slower some months than
                others.
              </p>
            </div>
          </FadeIn>

          <ScrollReveal direction="up" delay={0.1} once>
            <div className="mt-8 flex justify-center">
              <Link
                href="#reseller-plans"
                className="cta-shine inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-bold text-white transition-all duration-200 hover:brightness-110 sm:text-[15px]"
                style={{
                  background: "var(--hero-cta-primary-bg)",
                  boxShadow: "var(--hero-cta-primary-shadow)",
                }}
              >
                See Reseller Plans and Pricing
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
