import { HeroSection } from "@/components/sections/hero-section";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { LiveSportsSection } from "@/components/sections/live-sports-section";
import { DeviceCompatibilitySection } from "@/components/sections/device-compatibility-section";
import { GetStartedSection } from "@/components/sections/get-started-section";
import { ReviewsSection } from "@/components/sections/reviews-section";
import { FreeTrialCtaSection } from "@/components/sections/free-trial-cta-section";
import { FaqSection } from "@/components/sections/faq-section";
import { HomepageCtaSection } from "@/components/sections/homepage-cta-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";

export default function Home() {
  return (
    <main className="relative flex flex-col">
      <Header />
      <HeroSection />
      <WhyChooseUs />
      <PricingSection />
      <FeaturesSection />
      <LiveSportsSection />
      <DeviceCompatibilitySection />
      <GetStartedSection />
      <ReviewsSection />
      <FreeTrialCtaSection />
      <FaqSection />
      <HomepageCtaSection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
