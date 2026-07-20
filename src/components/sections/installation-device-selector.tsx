"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronRight, Clock, Headphones } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/layout/container";
import { ScrollReveal } from "@/components/animation/scroll-reveal";
import { FadeIn } from "@/components/animation/fade-in";
import { cn } from "@/lib/utils";
import { INSTALLATION_DEVICES } from "@/data/installation-devices";

const CATEGORIES = [
  "All",
  ...Array.from(new Set(INSTALLATION_DEVICES.map((d) => d.category))),
];

export function InstallationDeviceSelector() {
  const [activeId, setActiveId] = useState(INSTALLATION_DEVICES[0].id);
  const [activeCategory, setActiveCategory] = useState("All");
  const detailRef = useRef<HTMLDivElement>(null);

  const filteredDevices =
    activeCategory === "All"
      ? INSTALLATION_DEVICES
      : INSTALLATION_DEVICES.filter((d) => d.category === activeCategory);

  const activeDevice =
    INSTALLATION_DEVICES.find((d) => d.id === activeId) ??
    INSTALLATION_DEVICES[0];

  const selectDevice = (deviceId: string) => {
    setActiveId(deviceId);

    if (window.matchMedia("(max-width: 1023px)").matches) {
      requestAnimationFrame(() => {
        detailRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    }
  };

  const deviceButtonStyle = (isActive: boolean) => ({
    borderColor: isActive
      ? "var(--hero-accent)"
      : "var(--feature-card-border)",
    backgroundColor: isActive
      ? "color-mix(in srgb, var(--hero-accent) 8%, var(--feature-card-bg))"
      : "var(--feature-card-bg)",
  });

  const deviceIconStyle = (isActive: boolean) => ({
    backgroundColor: isActive
      ? "color-mix(in srgb, var(--hero-accent) 12%, transparent)"
      : "var(--feature-icon-bg)",
    borderColor: isActive
      ? "color-mix(in srgb, var(--hero-accent) 30%, transparent)"
      : "var(--feature-icon-border)",
  });

  return (
    <section
      id="choose-device"
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
              Device Setup
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2
            className="mx-auto max-w-3xl text-center text-2xl font-bold leading-tight tracking-tight sm:text-4xl md:text-[42px]"
            style={{ color: "var(--hero-heading)" }}
          >
            Choose Your{" "}
            <span style={{ color: "var(--hero-accent)" }}>Device</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p
            className="mx-auto mt-6 max-w-[720px] text-center text-sm leading-[1.75] sm:text-[15px] md:text-base"
            style={{ color: "var(--hero-muted)" }}
          >
            Select your device below for the exact installation steps. Each
            guide covers the recommended app, the activation process, and what
            to do once you are signed in.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div
            className="mx-auto mt-10 grid max-w-6xl gap-5 lg:mt-12 lg:grid-cols-[minmax(280px,340px)_1fr] lg:items-start"
          >
            {/* ── Left: device list ─────────────────────────────────── */}
            <div
              className="overflow-hidden rounded-2xl border"
              style={{
                backgroundColor: "var(--feature-card-bg)",
                borderColor: "var(--feature-card-border)",
                boxShadow: "var(--feature-card-shadow)",
              }}
            >
              <div
                className="border-b px-5 py-5 sm:px-6"
                style={{ borderColor: "var(--feature-card-border)" }}
              >
                <span
                  className="text-[10px] font-bold uppercase tracking-[0.2em]"
                  style={{ color: "var(--hero-accent)" }}
                >
                  Installation Guide
                </span>
                <p
                  className="mt-2 text-base font-bold leading-snug sm:text-lg"
                  style={{ color: "var(--hero-heading)" }}
                >
                  All Supported Devices for IPTV UK
                </p>
                <p
                  className="mt-1.5 text-xs leading-relaxed sm:text-sm"
                  style={{ color: "var(--hero-muted)" }}
                >
                  Pick your device below and follow the step-by-step setup
                  guide.
                </p>

                <div
                  className="mt-4 flex flex-wrap gap-1.5"
                  role="tablist"
                  aria-label="Device categories"
                >
                  {CATEGORIES.map((category) => {
                    const isActive = activeCategory === category;
                    return (
                      <button
                        key={category}
                        type="button"
                        role="tab"
                        aria-selected={isActive}
                        onClick={() => setActiveCategory(category)}
                        className={cn(
                          "rounded-full border px-2.5 py-1 text-[10px] font-bold transition-all duration-200 sm:px-3 sm:text-[11px]",
                          isActive ? "text-white" : "hover:opacity-80"
                        )}
                        style={
                          isActive
                            ? {
                                background:
                                  "linear-gradient(135deg, #00a3ff 0%, #0066cc 100%)",
                                borderColor: "transparent",
                              }
                            : {
                                borderColor: "var(--hero-pill-border)",
                                backgroundColor: "var(--hero-pill-bg)",
                                color: "var(--hero-muted)",
                              }
                        }
                      >
                        {category === "All" ? "All" : category.replace(" Devices", "").replace("Set-Top Boxes", "Boxes")}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Mobile: 2-column grid, no scroll */}
              <div
                className="grid grid-cols-2 gap-2 p-3 sm:gap-2.5 sm:p-4 lg:hidden"
                role="tablist"
                aria-label="Installation devices"
              >
                {filteredDevices.map((device) => {
                  const isActive = activeId === device.id;
                  return (
                    <button
                      key={device.id}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => selectDevice(device.id)}
                      className={cn(
                        "flex flex-col items-center gap-2 rounded-xl border px-2 py-3 text-center transition-all duration-200 sm:px-3 sm:py-3.5",
                        isActive && "ring-1 ring-[var(--hero-accent)]"
                      )}
                      style={deviceButtonStyle(isActive)}
                    >
                      <div
                        className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border"
                        style={deviceIconStyle(isActive)}
                      >
                        <device.Icon
                          className="h-4 w-4"
                          style={{
                            color: isActive
                              ? "var(--hero-accent)"
                              : "var(--feature-body)",
                          }}
                          strokeWidth={1.75}
                        />
                      </div>

                      <span
                        className="line-clamp-2 text-[11px] font-semibold leading-snug sm:text-xs"
                        style={{
                          color: isActive
                            ? "var(--hero-accent)"
                            : "var(--hero-heading)",
                        }}
                      >
                        {device.shortLabel}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Desktop: vertical list with scroll */}
              <div
                className="hidden max-h-[560px] overflow-y-auto lg:block"
                role="tablist"
                aria-label="Installation devices"
              >
                {filteredDevices.map((device) => {
                  const isActive = activeId === device.id;
                  return (
                    <button
                      key={device.id}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => selectDevice(device.id)}
                      className={cn(
                        "flex w-full items-center gap-3 border-b px-5 py-4 text-left transition-all duration-200 last:border-b-0",
                        isActive
                          ? "border-l-[3px]"
                          : "border-l-[3px] border-l-transparent hover:opacity-90"
                      )}
                      style={{
                        borderBottomColor: "var(--hero-divider)",
                        borderLeftColor: isActive
                          ? "var(--hero-accent)"
                          : "transparent",
                        backgroundColor: isActive
                          ? "color-mix(in srgb, var(--hero-accent) 8%, var(--feature-card-bg))"
                          : "transparent",
                      }}
                    >
                      <div
                        className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border"
                        style={deviceIconStyle(isActive)}
                      >
                        <device.Icon
                          className="h-4 w-4"
                          style={{
                            color: isActive
                              ? "var(--hero-accent)"
                              : "var(--feature-body)",
                          }}
                          strokeWidth={1.75}
                        />
                      </div>

                      <span
                        className="min-w-0 flex-1 text-sm font-semibold leading-snug"
                        style={{
                          color: isActive
                            ? "var(--hero-accent)"
                            : "var(--hero-heading)",
                        }}
                      >
                        {device.label}
                      </span>

                      <ChevronRight
                        className={cn(
                          "h-4 w-4 flex-shrink-0 transition-opacity",
                          isActive ? "opacity-100" : "opacity-0"
                        )}
                        style={{ color: "var(--hero-accent)" }}
                        strokeWidth={2.5}
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* ── Right: device detail ──────────────────────────────── */}
            <div
              ref={detailRef}
              id="device-detail-panel"
              className="scroll-mt-28 overflow-hidden rounded-2xl border lg:sticky lg:top-28"
              style={{
                backgroundColor: "var(--feature-card-bg)",
                borderColor: "var(--feature-card-border)",
                boxShadow: "var(--feature-card-shadow)",
              }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeDevice.id}
                  role="tabpanel"
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -8 }}
                  transition={{ duration: 0.22 }}
                  className="p-6 sm:p-8 lg:p-10"
                >
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="min-w-0 flex-1">
                      <span
                        className="text-[10px] font-bold uppercase tracking-[0.18em]"
                        style={{ color: "var(--hero-accent)" }}
                      >
                        {activeDevice.category}
                      </span>
                      <h3
                        className="mt-2 text-xl font-bold leading-snug sm:text-2xl md:text-[28px]"
                        style={{ color: "var(--hero-heading)" }}
                      >
                        {activeDevice.heading}
                      </h3>
                    </div>

                    <div
                      className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl border"
                      style={{
                        backgroundColor: "var(--feature-icon-bg)",
                        borderColor: "var(--feature-icon-border)",
                        boxShadow: "0 0 20px rgba(0, 163, 255, 0.12)",
                      }}
                    >
                      <activeDevice.Icon
                        className="h-6 w-6"
                        style={{ color: "var(--hero-accent)" }}
                        strokeWidth={1.75}
                      />
                    </div>
                  </div>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    <div
                      className="flex items-center gap-3 rounded-xl border px-4 py-3"
                      style={{
                        borderColor: "color-mix(in srgb, var(--hero-accent) 20%, transparent)",
                        backgroundColor:
                          "color-mix(in srgb, var(--hero-accent) 5%, transparent)",
                      }}
                    >
                      <Clock
                        className="h-4 w-4 flex-shrink-0"
                        style={{ color: "var(--hero-accent)" }}
                        strokeWidth={2}
                      />
                      <div>
                        <p
                          className="text-[10px] font-bold uppercase tracking-wide"
                          style={{ color: "var(--hero-accent)" }}
                        >
                          Setup Time
                        </p>
                        <p
                          className="text-sm font-semibold"
                          style={{ color: "var(--hero-heading)" }}
                        >
                          Under 15 minutes
                        </p>
                      </div>
                    </div>

                    <div
                      className="flex items-center gap-3 rounded-xl border px-4 py-3"
                      style={{
                        borderColor: "color-mix(in srgb, var(--hero-accent) 20%, transparent)",
                        backgroundColor:
                          "color-mix(in srgb, var(--hero-accent) 5%, transparent)",
                      }}
                    >
                      <Headphones
                        className="h-4 w-4 flex-shrink-0"
                        style={{ color: "var(--hero-accent)" }}
                        strokeWidth={2}
                      />
                      <div>
                        <p
                          className="text-[10px] font-bold uppercase tracking-wide"
                          style={{ color: "var(--hero-accent)" }}
                        >
                          Support
                        </p>
                        <p
                          className="text-sm font-semibold"
                          style={{ color: "var(--hero-heading)" }}
                        >
                          24/7 setup help
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    className="mt-6 rounded-xl border px-5 py-5 sm:px-6 sm:py-6"
                    style={{
                      borderColor: "var(--feature-card-border)",
                      backgroundColor:
                        "color-mix(in srgb, var(--hero-accent) 3%, var(--feature-card-bg))",
                    }}
                  >
                    <p
                      className="text-[11px] font-bold uppercase tracking-[0.16em]"
                      style={{ color: "var(--hero-accent)" }}
                    >
                      Installation Steps
                    </p>
                    <p
                      className="mt-3 text-sm leading-[1.8] sm:text-[15px]"
                      style={{ color: "var(--feature-body)" }}
                    >
                      {activeDevice.body}
                    </p>
                  </div>

                  <p
                    className="mt-5 text-xs leading-relaxed sm:text-sm"
                    style={{ color: "var(--hero-muted)" }}
                  >
                    Need a download code, Portal URL, or device activation?
                    Contact our support team and we will send everything
                    required to complete setup on your {activeDevice.shortLabel}.
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </FadeIn>

        <ScrollReveal direction="up" delay={0.1} once>
          <div className="mt-10 flex justify-center md:mt-12">
            <Link
              href="/subscription-plans"
              className="inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-bold text-white transition-all duration-200 hover:brightness-110 sm:text-[15px]"
              style={{
                background: "var(--hero-cta-primary-bg)",
                boxShadow: "var(--hero-cta-primary-shadow)",
              }}
            >
              Choose Your Plan and Get Started
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
