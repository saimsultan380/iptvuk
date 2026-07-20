"use client";

import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/animation/fade-in";

export function IptvSubscriptionExplainer() {
  return (
    <section
      className="relative isolate overflow-hidden py-16 md:py-24"
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
        <FadeIn delay={0.05}>
          <div className="mb-5 text-center">
            <span
              className="text-[11px] font-bold uppercase tracking-[0.22em]"
              style={{ color: "var(--hero-accent)" }}
            >
              IPTV Explained
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2
            className="mx-auto max-w-3xl text-center text-2xl font-bold leading-tight tracking-tight sm:text-3xl md:text-[40px]"
            style={{ color: "var(--hero-heading)" }}
          >
            What Is an{" "}
            <span style={{ color: "var(--hero-accent)" }}>IPTV Subscription UK</span>
            ? The Short Answer
          </h2>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="mx-auto mt-7 max-w-[720px] space-y-5 text-center sm:mt-8">
            <p
              className="text-sm leading-[1.8] sm:text-[15px] md:text-base"
              style={{ color: "var(--hero-muted)" }}
            >
              An IPTV subscription delivers live TV, sport, and on-demand content
              through your broadband instead of a satellite dish or cable box. You
              get the same channels, often more, for a fraction of the cost of
              traditional pay TV — with no equipment rental and no contract
              holding you in place.
            </p>
            <p
              className="text-sm leading-[1.8] sm:text-[15px] md:text-base"
              style={{ color: "var(--hero-muted)" }}
            >
              Internet Protocol Television works through an app on your device.
              Your IPTV subscription gives you live channels, a full VOD library,
              and an EPG TV guide, all under one login. Set up once, watch
              anywhere — Firestick, Smart TV, phone, or laptop.
            </p>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
