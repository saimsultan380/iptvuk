"use client";

import { CheckCircle2, ArrowRight, Tv2, Monitor, Smartphone, Tablet, Laptop } from "lucide-react";
import { Container } from "@/components/layout/container";
import { ScrollReveal } from "@/components/animation/scroll-reveal";
import { FadeIn } from "@/components/animation/fade-in";

// ─── Data ────────────────────────────────────────────────────────────────────

const DEVICES_TABLE = [
  { device: "Firestick / Fire TV",       setupTime: "Under 10 minutes" },
  { device: "Android TV Box",            setupTime: "Under 10 minutes" },
  { device: "Samsung Smart TV",          setupTime: "Under 15 minutes" },
  { device: "LG Smart TV",              setupTime: "Under 15 minutes" },
  { device: "Apple TV",                  setupTime: "Under 10 minutes" },
  { device: "iPhone / iPad",             setupTime: "Under 5 minutes"  },
  { device: "Android Phone / Tablet",    setupTime: "Under 5 minutes"  },
  { device: "Windows PC / Laptop",       setupTime: "Under 10 minutes" },
  { device: "Mac / MacBook",             setupTime: "Under 10 minutes" },
  { device: "MAG Box",                   setupTime: "Plug and play"    },
  { device: "Formuler Z8 / Z10",         setupTime: "Optimised"        },
];

const DEVICE_CARDS = [
  {
    id: "firestick",
    Icon: Tv2,
    heading:
      "IPTV on Firestick — Fire TV Stick Setup in Under 10 Minutes",
    body: "The Fire TV Stick is the most popular IPTV device in the UK. Install a compatible IPTV app, enter your subscription credentials — username, password, and server URL — and your full channel library loads. Every Fire TV Stick generation supported. Step-by-step IPTV Firestick guide included.",
  },
  {
    id: "smarttv",
    Icon: Monitor,
    heading: "IPTV on Samsung Smart TV and LG Smart TV",
    body: "IPTV on Samsung Smart TV — open Smart Hub, install a compatible app, enter your credentials, done. IPTV on LG Smart TV follows the same process through the LG Content Store. Both support the full channel library, EPG, and VOD content. No extra hardware needed.",
  },
  {
    id: "iphone",
    Icon: Smartphone,
    heading: "IPTV on iPhone, iPad and Apple TV",
    body: "IPTV on iPhone and IPTV on iPad works through compatible apps from the App Store — setup in under five minutes. Apple TV users get the same experience on the big screen. All iOS devices supported on both Standard and Premium plans.",
  },
  {
    id: "android",
    Icon: Tablet,
    heading: "IPTV on Android TV, Android Box and MAG Box",
    body: "IPTV on Android TV and IPTV Android Box devices support multiple IPTV apps for full interface flexibility. IPTV MAG Box users get plug-and-play compatibility with automatic channel loading across all plans.",
  },
  {
    id: "windows",
    Icon: Laptop,
    heading: "IPTV on Windows PC, Laptop and Mac",
    body: "IPTV on Windows works through free desktop IPTV apps. IPTV Mac users have equivalent macOS-compatible options. Full channel library, VOD, and EPG available on every Windows PC and MacBook.",
  },
];

function DeviceDetailCard({
  Icon,
  heading,
  body,
  delay = 0,
}: {
  Icon: React.ElementType;
  heading: string;
  body: string;
  delay?: number;
}) {
  return (
    <ScrollReveal direction="up" delay={delay} once>
      <div
        className="flex h-full gap-4 rounded-2xl border p-6 md:gap-5 md:p-7"
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
            boxShadow: "0 0 16px rgba(0, 163, 255, 0.12)",
          }}
        >
          <Icon
            className="h-5 w-5"
            style={{ color: "var(--hero-accent)" }}
            strokeWidth={1.75}
          />
        </div>
        <div className="min-w-0 flex-1">
          <h3
            className="mb-2.5 text-[15px] font-bold leading-snug md:text-base"
            style={{ color: "var(--hero-heading)" }}
          >
            {heading}
          </h3>
          <p
            className="text-sm leading-[1.7]"
            style={{ color: "var(--feature-body)" }}
          >
            {body}
          </p>
        </div>
      </div>
    </ScrollReveal>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export function DeviceCompatibilitySection() {
  return (
    <section
      id="devices"
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
        {/* ── Eyebrow ────────────────────────────────────────────────── */}
        <FadeIn delay={0.05}>
          <div className="mb-5 text-center">
            <span
              className="text-[11px] font-bold uppercase tracking-[0.22em]"
              style={{ color: "var(--hero-accent)" }}
            >
              Device Compatibility
            </span>
          </div>
        </FadeIn>

        {/* ── H2 Headline ───────────────────────────────────────────── */}
        <FadeIn delay={0.1}>
          <h2
            className="mx-auto max-w-3xl text-center text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-[44px]"
            style={{ color: "var(--hero-heading)" }}
          >
            IPTV Compatible Devices — Works on{" "}
            <span style={{ color: "var(--hero-accent)" }}>
              Firestick, Smart TV, iPhone, Android
            </span>{" "}
            and More
          </h2>
        </FadeIn>

        {/* ── Subtitle ──────────────────────────────────────────────── */}
        <FadeIn delay={0.15}>
          <p
            className="mx-auto mt-6 max-w-[600px] text-center text-[15px] leading-[1.75] sm:text-base"
            style={{ color: "var(--hero-muted)" }}
          >
            No new hardware. UK-Best-IPTV works on the devices already in your
            home — from the Fire TV Stick in your living room to the iPhone in
            your pocket.
          </p>
        </FadeIn>

        {/* ── Compatibility Table ────────────────────────────────────── */}
        <ScrollReveal direction="up" delay={0.1} once>
          <div
            className="mt-12 overflow-hidden rounded-2xl border"
            style={{
              backgroundColor: "var(--feature-card-bg)",
              borderColor: "var(--feature-card-border)",
              boxShadow: "var(--feature-card-shadow)",
            }}
          >
            {/* Table header */}
            <div
              className="grid grid-cols-[1fr_auto_auto] gap-4 border-b px-6 py-4 sm:grid-cols-[1fr_160px_180px]"
              style={{ borderColor: "var(--feature-card-border)" }}
            >
              <span
                className="text-sm font-bold uppercase tracking-wider"
                style={{ color: "var(--hero-accent)" }}
              >
                Device
              </span>
              <span
                className="text-center text-sm font-bold uppercase tracking-wider"
                style={{ color: "var(--hero-accent)" }}
              >
                Compatible
              </span>
              <span
                className="text-right text-sm font-bold uppercase tracking-wider"
                style={{ color: "var(--hero-accent)" }}
              >
                Setup Time
              </span>
            </div>

            {/* Table rows */}
            {DEVICES_TABLE.map((row, i) => (
              <div
                key={row.device}
                className="grid grid-cols-[1fr_auto_auto] items-center gap-4 px-6 py-3.5 sm:grid-cols-[1fr_160px_180px]"
                style={{
                  borderTop: i === 0 ? "none" : `1px solid var(--hero-divider)`,
                }}
              >
                <span
                  className="text-sm"
                  style={{ color: "var(--hero-heading)" }}
                >
                  {row.device}
                </span>
                <div className="flex justify-center">
                  <CheckCircle2
                    className="h-5 w-5"
                    style={{ color: "var(--hero-accent)" }}
                    strokeWidth={2}
                  />
                </div>
                <span
                  className="text-right text-sm"
                  style={{ color: "var(--feature-body)" }}
                >
                  {row.setupTime}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* ── Device detail cards ────────────────────────────────────── */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 md:mt-10">
          {DEVICE_CARDS.map((card, i) => (
            <DeviceDetailCard
              key={card.id}
              Icon={card.Icon}
              heading={card.heading}
              body={card.body}
              delay={0.06 * (i % 3)}
            />
          ))}
        </div>

        {/* ── Internal link + CTA ───────────────────────────────────── */}
        <ScrollReveal direction="up" delay={0.1} once>
          <div className="mt-10 flex flex-col items-center gap-4 md:mt-12">
            <a
              href="/installation-guide"
              className="flex items-center gap-1.5 text-sm font-semibold transition-opacity hover:opacity-80"
              style={{ color: "var(--hero-accent)" }}
            >
              IPTV Installation Guide — Step-by-Step for Every Device
              <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href="#free-trial"
              className="flex items-center gap-3 rounded-xl px-8 py-4 text-base font-bold text-white transition-all duration-200 hover:brightness-110"
              style={{
                background: "var(--hero-cta-primary-bg)",
                boxShadow: "var(--hero-cta-primary-shadow)",
              }}
            >
              Get Started on Your Device — Free Trial Today
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
