import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Mail, MessageCircle } from "lucide-react";

const FOOTER_LINKS = {
  service: [
    { label: "Home", href: "/" },
    { label: "Subscription Plan", href: "/subscription-plans/" },
    { label: "Installation Guide", href: "/installation-guide/" },
    { label: "Reseller Panel", href: "/reseller-panel/" },
    { label: "Contact Us", href: "/free-trial/#contact" },
  ],
  support: [
    { label: "Pricing Plans", href: "/subscription-plans/#pricing" },
    { label: "Free Trial", href: "/free-trial/" },
    { label: "Device Compatibility", href: "/#devices" },
    { label: "FAQ", href: "/#faq" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Refund Policy", href: "#" },
  ],
};

const TRUST_POINTS = [
  "20,000+ Live Channels",
  "7-Day Money-Back Guarantee",
  "24/7 UK Support",
  "No Contract",
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative isolate border-t"
      style={{
        backgroundColor: "var(--footer-bg)",
        borderColor: "var(--footer-border)",
      }}
    >
      {/* Subtle top glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, var(--hero-accent), transparent)",
          opacity: 0.35,
        }}
      />

      <Container className="py-14 md:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr] lg:gap-16">
          {/* Brand column */}
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 no-underline"
              aria-label="IPTV UK home"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/icon.png"
                alt=""
                width={66}
                height={66}
                className="h-[66px] w-[66px] object-contain"
              />
              <span
                className="text-lg font-bold tracking-tight"
                style={{ color: "var(--footer-heading)" }}
              >
                IPTV UK
              </span>
            </Link>

            <p
              className="mt-4 max-w-sm text-sm leading-relaxed"
              style={{ color: "var(--footer-muted)" }}
            >
              Premium IPTV streaming for UK households — 20,000+ live channels,
              60,000+ on-demand titles, and instant activation from £5.00 per
              month.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {TRUST_POINTS.map((point) => (
                <span
                  key={point}
                  className="rounded-full border px-3 py-1 text-[11px] font-medium"
                  style={{
                    borderColor: "var(--hero-pill-border)",
                    backgroundColor: "var(--hero-pill-bg)",
                    color: "var(--hero-pill-text)",
                  }}
                >
                  {point}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-[var(--hero-accent)]"
                style={{ color: "var(--footer-link)" }}
              >
                <MessageCircle className="h-4 w-4" aria-hidden />
                WhatsApp Support
              </a>
              <span
                className="hidden h-4 w-px sm:block"
                style={{ backgroundColor: "var(--footer-border)" }}
                aria-hidden
              />
              <a
                href="mailto:support@best-iptv.co"
                className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-[var(--hero-accent)]"
                style={{ color: "var(--footer-link)" }}
              >
                <Mail className="h-4 w-4" aria-hidden />
                support@best-iptv.co
              </a>
            </div>
          </div>

          {/* Link columns */}
          <div className="grid gap-10 sm:grid-cols-3">
            {Object.entries(FOOTER_LINKS).map(([group, links]) => (
              <div key={group}>
                <h3
                  className="text-xs font-bold uppercase tracking-[0.18em]"
                  style={{ color: "var(--hero-accent)" }}
                >
                  {group === "service"
                    ? "Service"
                    : group === "support"
                      ? "Support"
                      : "Legal"}
                </h3>
                <ul className="mt-4 space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm transition-colors duration-150 hover:text-[var(--hero-accent)]"
                        style={{ color: "var(--footer-link)" }}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 flex flex-col gap-4 border-t pt-8 md:flex-row md:items-center md:justify-between"
          style={{ borderColor: "var(--footer-border)" }}
        >
          <p className="text-xs" style={{ color: "var(--footer-muted)" }}>
            © {year} Best IPTV. All rights reserved.
          </p>
          <p
            className="max-w-xl text-xs leading-relaxed md:text-right"
            style={{ color: "var(--footer-muted)" }}
          >
            Best IPTV is an independent streaming service provider. Channel
            availability may vary. Use responsibly and in accordance with local
            regulations.
          </p>
        </div>
      </Container>
    </footer>
  );
}
