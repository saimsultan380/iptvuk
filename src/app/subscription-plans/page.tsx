import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { SubscriptionPlansHero } from "@/components/sections/subscription-plans-hero";
import { IptvSubscriptionExplainer } from "@/components/sections/iptv-subscription-explainer";
import { MultiConnectionPlansSection } from "@/components/sections/multi-connection-plans-section";
import { SubscriptionHowToBuySection } from "@/components/sections/subscription-how-to-buy-section";
import { SubscriptionWhyChoose } from "@/components/sections/subscription-why-choose";
import { SubscriptionIncludedSection } from "@/components/sections/subscription-included-section";
import { SubscriptionSportsSection } from "@/components/sections/subscription-sports-section";
import { SubscriptionDevicesSection } from "@/components/sections/subscription-devices-section";
import { SubscriptionReviewsSection } from "@/components/sections/subscription-reviews-section";
import { FreeTrialCtaSection } from "@/components/sections/free-trial-cta-section";
import { SubscriptionFaqSection } from "@/components/sections/subscription-faq-section";
import { SubscriptionCtaSection } from "@/components/sections/subscription-cta-section";

export const metadata: Metadata = {
  title: "IPTV Subscription UK — Plans, Pricing & Free Trial | IPTV UK",
  description:
    "Compare IPTV subscription UK plans with 12,000+ channels, multi-connection options, instant activation, and a free 24-hour trial. No contract. No auto-billing.",
};

export default function SubscriptionPlansPage() {
  return (
    <main className="relative flex flex-col">
      <Header />
      <SubscriptionPlansHero />
      <IptvSubscriptionExplainer />
      <MultiConnectionPlansSection />
      <SubscriptionHowToBuySection />
      <SubscriptionWhyChoose />
      <SubscriptionIncludedSection />
      <SubscriptionSportsSection />
      <SubscriptionDevicesSection />
      <SubscriptionReviewsSection />
      <FreeTrialCtaSection variant="subscription" />
      <SubscriptionFaqSection />
      <SubscriptionCtaSection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
