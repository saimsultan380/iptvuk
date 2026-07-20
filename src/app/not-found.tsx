import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you are looking for does not exist or has been moved.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
  // Override root layout homepage canonical — avoid soft-404 signals
  alternates: {
    canonical: "/404.html",
  },
  openGraph: {
    title: "Page Not Found",
    description: "The page you are looking for does not exist or has been moved.",
    url: "/404.html",
  },
};

const HELPFUL_LINKS = [
  { label: "Home", href: "/" },
  { label: "Subscription Plans", href: "/subscription-plans/" },
  { label: "Free Trial", href: "/free-trial/" },
  { label: "Installation Guide", href: "/installation-guide/" },
  { label: "Reseller Panel", href: "/reseller-panel/" },
];

export default function NotFound() {
  return (
    <main className="relative flex min-h-full flex-col">
      <Header />
      <section
        className="relative flex flex-1 flex-col items-center justify-center px-4 pb-20 pt-36 text-center sm:px-6"
        style={{ backgroundColor: "var(--background)" }}
      >
        <p
          className="text-sm font-semibold uppercase tracking-[0.2em]"
          style={{ color: "var(--hero-accent)" }}
        >
          Error 404
        </p>
        <h1
          className="mt-4 max-w-xl text-3xl font-bold tracking-tight sm:text-4xl"
          style={{ color: "var(--foreground)" }}
        >
          This page doesn&apos;t exist
        </h1>
        <p
          className="mt-4 max-w-md text-base leading-relaxed"
          style={{ color: "var(--muted-foreground)" }}
        >
          The link may be broken or the page may have been removed. Head home or
          try one of the popular pages below.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex rounded-full px-6 py-3 text-sm font-semibold text-white shadow-[0_0_20px_rgba(0,163,255,0.45)] transition-all duration-200 hover:brightness-110"
            style={{
              background: "linear-gradient(135deg, #00a3ff 0%, #0066cc 100%)",
            }}
          >
            Back to Home
          </Link>
          <Link
            href="/free-trial/"
            className="inline-flex rounded-full border px-6 py-3 text-sm font-semibold transition-colors hover:border-[var(--hero-accent)] hover:text-[var(--hero-accent)]"
            style={{
              borderColor: "var(--border)",
              color: "var(--foreground)",
            }}
          >
            Start Free Trial
          </Link>
        </div>

        <nav aria-label="Helpful links" className="mt-12">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-3">
            {HELPFUL_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium transition-colors hover:text-[var(--hero-accent)]"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </section>
      <Footer />
    </main>
  );
}
