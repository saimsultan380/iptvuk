"use client";

import Link from "next/link";
import {
  ArrowRight,
  Headphones,
  MessageCircle,
  Mail,
  MessageSquare,
} from "lucide-react";
import { Container } from "@/components/layout/container";
import { ScrollReveal } from "@/components/animation/scroll-reveal";
import { FadeIn } from "@/components/animation/fade-in";

const CONTACT_METHODS = [
  {
    Icon: MessageCircle,
    label: "WhatsApp",
    detail: "Fastest reply — usually within five minutes",
    action: "Chat Now",
    href: "#",
  },
  {
    Icon: Mail,
    label: "Email",
    detail: "support@uk-best-iptv.uk",
    action: "Send Email",
    href: "mailto:support@uk-best-iptv.uk",
  },
  {
    Icon: MessageSquare,
    label: "Live Chat",
    detail: "Available on this page",
    action: "Start Chat",
    href: "#",
  },
];

export function FreeTrialSupportSection() {
  return (
    <section
      id="contact"
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
              Support
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2
            className="mx-auto max-w-3xl text-center text-2xl font-bold leading-tight tracking-tight sm:text-4xl md:text-[42px]"
            style={{ color: "var(--hero-heading)" }}
          >
            Contact{" "}
            <span style={{ color: "var(--hero-accent)" }}>IPTV Support</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="mx-auto mt-7 max-w-[720px] space-y-4 text-center text-sm leading-[1.8] sm:text-[15px] md:text-base">
            <p style={{ color: "var(--hero-muted)" }}>
              Got a question before requesting your trial, or need help during
              it? Our support team is here for exactly that.
            </p>
            <p style={{ color: "var(--hero-muted)" }}>
              We aim to respond within five minutes during active hours. Reach us
              via WhatsApp for the fastest reply, by email for anything detailed,
              or through live chat directly on the site. Whether it is a technical
              question, a device compatibility check, or help with your trial
              login, a real person answers — not an automated queue.
            </p>
          </div>
        </FadeIn>

        <div className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-3 md:mt-12">
          {CONTACT_METHODS.map((method, i) => (
            <ScrollReveal key={method.label} direction="up" delay={0.06 * i} once>
              <div
                className="flex h-full flex-col items-center rounded-2xl border px-5 py-7 text-center"
                style={{
                  backgroundColor: "var(--feature-card-bg)",
                  borderColor: "var(--feature-card-border)",
                  boxShadow: "var(--feature-card-shadow)",
                }}
              >
                <div
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border"
                  style={{
                    backgroundColor: "var(--feature-icon-bg)",
                    borderColor: "var(--feature-icon-border)",
                  }}
                >
                  <method.Icon
                    className="h-5 w-5"
                    style={{ color: "var(--hero-accent)" }}
                    strokeWidth={2}
                  />
                </div>
                <h3
                  className="text-sm font-bold"
                  style={{ color: "var(--hero-heading)" }}
                >
                  {method.label}
                </h3>
                <p
                  className="mt-2 flex-1 text-xs leading-[1.6] sm:text-sm"
                  style={{ color: "var(--feature-body)" }}
                >
                  {method.detail}
                </p>
                <a
                  href={method.href}
                  className="mt-4 text-xs font-semibold transition-colors hover:text-[var(--hero-accent)] sm:text-sm"
                  style={{ color: "var(--hero-accent)" }}
                >
                  {method.action} →
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal direction="up" delay={0.1} once>
          <div
            className="mx-auto mt-10 max-w-2xl rounded-2xl border px-6 py-8 text-center sm:px-10 md:mt-12"
            style={{
              backgroundColor: "var(--feature-cta-bg)",
              borderColor: "var(--feature-cta-border)",
              boxShadow: "var(--feature-card-shadow)",
            }}
          >
            <div
              className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border"
              style={{
                backgroundColor: "var(--feature-icon-bg)",
                borderColor: "var(--feature-icon-border)",
              }}
            >
              <Headphones
                className="h-5 w-5"
                style={{ color: "var(--hero-accent)" }}
                strokeWidth={2}
              />
            </div>
            <p
              className="text-sm leading-[1.75] sm:text-[15px]"
              style={{ color: "var(--hero-muted)" }}
            >
              Average reply time under five minutes via WhatsApp and live chat
              during active hours.
            </p>
            <Link
              href="#trial-form"
              className="mt-6 inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-bold text-white transition-all duration-200 hover:brightness-110 sm:text-[15px]"
              style={{
                background: "var(--hero-cta-primary-bg)",
                boxShadow: "var(--hero-cta-primary-shadow)",
              }}
            >
              Contact Us Directly
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
