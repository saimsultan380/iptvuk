import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { InstallationGuideHero } from "@/components/sections/installation-guide-hero";
import { InstallationDeviceSelector } from "@/components/sections/installation-device-selector";
import { InstallationSetupDetails } from "@/components/sections/installation-setup-details";
import { InstallationBeginnersSection } from "@/components/sections/installation-beginners-section";
import { InstallationSupportSection } from "@/components/sections/installation-support-section";
import { InstallationFaqSection } from "@/components/sections/installation-faq-section";
import { InstallationCtaSection } from "@/components/sections/installation-cta-section";
import { createPageMetadata } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "IPTV Installation Guide — Setup for Every Device",
  description:
    "Step-by-step IPTV installation guide for Firestick, Smart TV, iPhone, Android, Windows, Mac, MAG Box, and more. Most customers watching within 15 minutes. 24/7 setup support.",
  path: "/installation-guide/",
});

export default function InstallationGuidePage() {
  return (
    <main className="relative flex flex-col">
      <Header />
      <InstallationGuideHero />
      <InstallationDeviceSelector />
      <InstallationSetupDetails />
      <InstallationBeginnersSection />
      <InstallationSupportSection />
      <InstallationFaqSection />
      <InstallationCtaSection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
