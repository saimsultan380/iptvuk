import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { FreeTrialHero } from "@/components/sections/free-trial-hero";
import { FreeTrialHowItWorksSection } from "@/components/sections/free-trial-how-it-works-section";
import { FreeTrialFormSection } from "@/components/sections/free-trial-form-section";
import { FreeTrialDevicesSection } from "@/components/sections/free-trial-devices-section";
import { FreeTrialSupportSection } from "@/components/sections/free-trial-support-section";
import { FreeTrialFaqSection } from "@/components/sections/free-trial-faq-section";
import { FreeTrialPageCtaSection } from "@/components/sections/free-trial-page-cta-section";

export const metadata: Metadata = {
  title: "IPTV Free Trial UK — 24 Hours Full Access, No Card | IPTV UK",
  description:
    "Claim your free 24-hour IPTV trial UK. Full access to live channels, sports, and on-demand content. No credit card, no obligation. Login details sent within minutes.",
};

export default function FreeTrialPage() {
  return (
    <main className="relative flex flex-col">
      <Header />
      <FreeTrialHero />
      <FreeTrialHowItWorksSection />
      <FreeTrialFormSection />
      <FreeTrialDevicesSection />
      <FreeTrialSupportSection />
      <FreeTrialFaqSection />
      <FreeTrialPageCtaSection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
