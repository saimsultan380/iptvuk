"use client";

import { useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/layout/container";
import { ScrollReveal } from "@/components/animation/scroll-reveal";
import { FadeIn } from "@/components/animation/fade-in";
import { cn } from "@/lib/utils";

export type FaqItem = {
  id: string;
  q: string;
  a: string;
};

const HOMEPAGE_FAQS: FaqItem[] = [
  {
    id: "what-is-iptv",
    q: "What is IPTV UK?",
    a: "IPTV UK refers to Internet Protocol Television services delivering live TV and on-demand content through your broadband instead of a satellite dish or cable. You watch through an app on any compatible device — Firestick, Smart TV, phone, or computer. UK-Best-IPTV gives you 20,000+ live channels and 60,000+ VOD titles from £9.99 per month, with a free 24-hour trial and instant activation.",
  },
  {
    id: "internet-speed",
    q: "What internet speed do I need for IPTV UK?",
    a: "For HD streaming, 25 Mbps minimum. For 4K and UHD IPTV streaming, 50 Mbps or above. Most UK fibre broadband packages exceed both. For live sport, a wired Ethernet connection gives the most stable experience — it eliminates Wi-Fi interference during peak hours.",
  },
  {
    id: "devices",
    q: "Which devices support IPTV UK?",
    a: "UK-Best-IPTV works on Firestick and Fire TV, Samsung Smart TV, LG Smart TV, Apple TV, Android TV, Android TV Box, MAG Box, iPhone, iPad, Android phones and tablets, Windows PC, and Mac. Full installation guides available for every device.",
  },
  {
    id: "app",
    q: "What IPTV app should I use in the UK?",
    a: "For Firestick — IPTV Smarters Pro or TiviMate. For Android TV Box — TiviMate. For iPhone and iPad — IPTV Smarters. For Samsung and LG Smart TVs — Smart IPTV or SS IPTV. UK-Best-IPTV provides specific app recommendations and step-by-step guides for every device in our installation guide.",
  },
  {
    id: "sports",
    q: "Can I watch live sports with IPTV UK?",
    a: "Yes. All plans include live sports — Premier League, UEFA Champions League, UEFA Europa League, IPTV Boxing, IPTV UFC, IPTV PPV events, IPTV Formula 1, IPTV Cricket, NBA, and NFL. Sports streams run on dedicated server infrastructure, completely separate from general traffic, so quality stays stable at peak times.",
  },
  {
    id: "buffering",
    q: "Why does IPTV buffer and how do I fix it?",
    a: "Buffering is almost always caused by your local connection. Fix it by switching Wi-Fi to wired Ethernet, restarting your router, or closing other bandwidth-heavy apps. If buffering persists on UK-Best-IPTV, our 24/7 UK support team resolves most connection issues within minutes via live chat.",
  },
  {
    id: "multi-device",
    q: "Can I use IPTV on multiple devices at the same time?",
    a: "Standard plan — one simultaneous connection. Premium plan — two simultaneous connections, two screens streaming different channels at the same time with no impact on either. Need more than two? Contact our support team.",
  },
  {
    id: "vod",
    q: "Does IPTV include movies and TV series?",
    a: "Yes. Every UK-Best-IPTV subscription includes 60,000+ IPTV movies and TV series on demand through the VOD library. No extra subscription. No scheduled broadcast. Browse, select, and watch. Updated regularly as new releases are added.",
  },
  {
    id: "epg",
    q: "What is an IPTV EPG and do I need one?",
    a: "An IPTV EPG — Electronic Programme Guide — is the built-in TV guide showing what is on now, what is coming next, and the full schedule across all 20,000+ channels. Every UK-Best-IPTV plan includes a full EPG that updates automatically. Without it, finding what you want across 20,000+ channels would take far too long.",
  },
  {
    id: "legal",
    q: "Is IPTV legal in the UK?",
    a: "IPTV technology is completely legal in the UK — the same technology powers BBC iPlayer and ITVX. The legal question is about content licensing. A provider holding correct broadcasting licences operates legally. Always choose a transparent provider.",
  },
];

function AccordionItem({
  faq,
  isOpen,
  onToggle,
  delay,
}: {
  faq: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
  delay: number;
}) {
  return (
    <ScrollReveal direction="up" delay={delay} once>
      <div
        className="overflow-hidden rounded-2xl border transition-all duration-200"
        style={{
          backgroundColor: "var(--feature-card-bg)",
          borderColor: isOpen
            ? "var(--hero-accent)"
            : "var(--feature-card-border)",
          boxShadow: isOpen
            ? "0 0 0 1px color-mix(in srgb, var(--hero-accent) 30%, transparent), var(--feature-card-shadow)"
            : "var(--feature-card-shadow)",
        }}
      >
        <button
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left md:px-7"
          aria-expanded={isOpen}
        >
          <h3
            className="text-[15px] font-bold leading-snug md:text-base"
            style={{ color: "var(--hero-heading)" }}
          >
            {faq.q}
          </h3>
          <span
            className={cn(
              "flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border transition-all duration-300",
              isOpen ? "rotate-180" : "rotate-0"
            )}
            style={{
              borderColor: isOpen
                ? "var(--hero-accent)"
                : "var(--feature-card-border)",
              backgroundColor: isOpen
                ? "color-mix(in srgb, var(--hero-accent) 12%, transparent)"
                : "transparent",
            }}
          >
            <ChevronDown
              className="h-4 w-4 transition-colors duration-200"
              style={{
                color: isOpen ? "var(--hero-accent)" : "var(--feature-body)",
              }}
              strokeWidth={2.5}
            />
          </span>
        </button>

        <div
          className={cn(
            "grid transition-all duration-300 ease-in-out",
            isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          )}
        >
          <div className="overflow-hidden">
            <div
              className="border-t px-6 pb-6 pt-4 text-sm leading-[1.8] md:px-7 md:pb-7"
              style={{
                borderColor:
                  "color-mix(in srgb, var(--hero-accent) 20%, transparent)",
                color: "var(--feature-body)",
              }}
            >
              {faq.a}
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

type FaqSectionProps = {
  faqs: FaqItem[];
  defaultOpenId?: string;
  eyebrow?: string;
  title: ReactNode;
  id?: string;
};

export function FaqAccordionSection({
  faqs,
  defaultOpenId,
  eyebrow = "FAQ",
  title,
  id = "faq",
}: FaqSectionProps) {
  const [openId, setOpenId] = useState<string | null>(
    defaultOpenId ?? faqs[0]?.id ?? null
  );

  const toggle = (faqId: string) =>
    setOpenId((prev) => (prev === faqId ? null : faqId));

  return (
    <section
      id={id}
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
              {eyebrow}
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2
            className="mx-auto max-w-2xl text-center text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-[42px]"
            style={{ color: "var(--hero-heading)" }}
          >
            {title}
          </h2>
        </FadeIn>

        <div className="mx-auto mt-12 max-w-3xl space-y-3 md:mt-14">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={faq.id}
              faq={faq}
              isOpen={openId === faq.id}
              onToggle={() => toggle(faq.id)}
              delay={0.04 * Math.min(i, 4)}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export function FaqSection() {
  return (
    <FaqAccordionSection
      faqs={HOMEPAGE_FAQS}
      defaultOpenId="what-is-iptv"
      title={
        <>
          Frequently Asked Questions About{" "}
          <span style={{ color: "var(--hero-accent)" }}>IPTV UK</span>
        </>
      }
    />
  );
}
