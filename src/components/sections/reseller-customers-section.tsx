"use client";

import {
  MonitorPlay,
  Clapperboard,
  Trophy,
  History,
  Smartphone,
  ArrowRight,
} from "lucide-react";
import { Container } from "@/components/layout/container";
import { ScrollReveal } from "@/components/animation/scroll-reveal";
import { FadeIn } from "@/components/animation/fade-in";

const CUSTOMER_FEATURES = [
  {
    id: "channels",
    Icon: MonitorPlay,
    heading: "22,000+ Live Channels",
    body: "UK, US, and international content covering every major category.",
  },
  {
    id: "vod",
    Icon: Clapperboard,
    heading: "88,000+ Movies and Series",
    body: "Full VOD library with true 4K and HD streaming depending on the source broadcast.",
  },
  {
    id: "sports",
    Icon: Trophy,
    heading: "Full Sports Coverage",
    body: "Major UK and international competitions included as standard.",
  },
  {
    id: "catchup",
    Icon: History,
    heading: "Catch-Up TV and EPG",
    body: "Complete Electronic Programme Guide and catch-up TV included.",
  },
];

const DEVICES = [
  "Fire TV Stick",
  "Android TV",
  "Apple TV",
  "Samsung Smart TV",
  "LG Smart TV",
  "MAG Box",
  "Windows PC",
  "Mac",
  "iPhone",
  "Android phones",
];

export function ResellerCustomersSection() {
  return (
    <section
      id="reseller-customers"
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
              What You Resell
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2
            className="mx-auto max-w-3xl text-center text-2xl font-bold leading-tight tracking-tight sm:text-4xl md:text-[42px]"
            style={{ color: "var(--hero-heading)" }}
          >
            What Your Customers Get —{" "}
            <span style={{ color: "var(--hero-accent)" }}>
              Premium IPTV Subscriptions
            </span>{" "}
            to Resell
          </h2>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p
            className="mx-auto mt-6 max-w-[720px] text-center text-sm leading-[1.75] sm:text-[15px] md:text-base"
            style={{ color: "var(--hero-muted)" }}
          >
            Every customer line you create gives access to a full premium IPTV
            subscription — the same quality you would expect to pay for
            directly, now available for you to resell under your own pricing.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 md:mt-16">
          {CUSTOMER_FEATURES.map((feature, i) => (
            <ScrollReveal
              key={feature.id}
              direction="up"
              delay={0.06 * i}
              once
            >
              <div
                className="flex h-full flex-col gap-4 rounded-2xl border p-6"
                style={{
                  backgroundColor: "var(--feature-card-bg)",
                  borderColor: "var(--feature-card-border)",
                  boxShadow: "var(--feature-card-shadow)",
                }}
              >
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-full border"
                  style={{
                    backgroundColor: "var(--feature-icon-bg)",
                    borderColor: "var(--feature-icon-border)",
                  }}
                >
                  <feature.Icon
                    className="h-5 w-5"
                    style={{ color: "var(--feature-heading)" }}
                    strokeWidth={1.75}
                  />
                </div>
                <div>
                  <h3
                    className="mb-2 text-[15px] font-bold"
                    style={{ color: "var(--hero-heading)" }}
                  >
                    {feature.heading}
                  </h3>
                  <p
                    className="text-sm leading-[1.7]"
                    style={{ color: "var(--feature-body)" }}
                  >
                    {feature.body}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <FadeIn delay={0.2}>
          <div className="mt-12 text-center md:mt-16">
            <div className="mb-4 flex items-center justify-center gap-2">
              <Smartphone
                className="h-5 w-5"
                style={{ color: "var(--hero-accent)" }}
                strokeWidth={2}
              />
              <span
                className="text-sm font-semibold"
                style={{ color: "var(--hero-heading)" }}
              >
                Compatible Across Every Device
              </span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {DEVICES.map((device) => (
                <span
                  key={device}
                  className="rounded-full border px-3 py-1.5 text-xs font-medium"
                  style={{
                    borderColor: "var(--hero-pill-border)",
                    backgroundColor: "var(--hero-pill-bg)",
                    color: "var(--hero-pill-text)",
                  }}
                >
                  {device}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>

        <ScrollReveal direction="up" delay={0.1} once>
          <div className="mt-10 flex justify-center md:mt-12">
            <a
              href="#reseller-plans"
              className="cta-shine inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-bold text-white transition-all duration-200 hover:brightness-110 sm:text-[15px]"
              style={{
                background: "var(--hero-cta-primary-bg)",
                boxShadow: "var(--hero-cta-primary-shadow)",
              }}
            >
              View Reseller Plans
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
