import { FaqAccordionSection, type FaqItem } from "@/components/sections/faq-section";

const INSTALLATION_FAQS: FaqItem[] = [
  {
    id: "how-install",
    q: "How do I install IPTV?",
    a: "Choose your device from the list above, install the recommended app, then enter the login details or setup code provided after your subscription activates. Most devices are ready to stream within fifteen minutes.",
  },
  {
    id: "how-setup",
    q: "How do I setup IPTV on my device?",
    a: "Setup varies slightly by device but generally follows three steps: install an app (such as Downloader by AFTVnews or IBO Player), enter your IPTV credentials or setup code, and confirm your channel library has loaded.",
  },
  {
    id: "firestick",
    q: "Does IPTV work on Firestick?",
    a: "Yes. Fire TV Stick is one of the most popular devices for IPTV installation. Install Downloader by AFTVnews, enter your download code, and sign in with your IPTV login details.",
  },
  {
    id: "samsung",
    q: "Does IPTV work on Samsung TV?",
    a: "Yes. Samsung Smart TV supports several IPTV applications including CR7 Player, IBO Player, HOT IPTV, and SmartOne IPTV. Install your preferred app and provide your device ID to our support team for activation.",
  },
  {
    id: "apple-tv",
    q: "Does IPTV work on Apple TV?",
    a: "Yes. Apple TV supports apps including iPlayTV AIO, Smarters Player Lite, IBO Player Pro, GSE Smart IPTV, and IPTVX, all available directly from the App Store.",
  },
  {
    id: "portal-url",
    q: "What is an IPTV Portal URL?",
    a: "An IPTV Portal URL, sometimes called a Server URL, is the web address your IPTV app uses to load your channel library. It is provided along with your username and password when your subscription activates.",
  },
  {
    id: "setup-code",
    q: "What is an IPTV Setup Code?",
    a: "An IPTV setup code is a short numeric code used by apps like Downloader by AFTVnews to install the correct application quickly, without needing to search or download manually.",
  },
  {
    id: "how-long",
    q: "How long does IPTV installation take?",
    a: "Most customers complete installation and are watching their first channel within ten to fifteen minutes, regardless of which device they are using.",
  },
  {
    id: "technical",
    q: "Do I need technical knowledge to install IPTV?",
    a: "No. Every device follows a simple install-and-login process. If any step is unclear, our support team provides direct assistance at no extra cost.",
  },
  {
    id: "activate",
    q: "How do I activate my IPTV subscription?",
    a: "Activation happens automatically once your login details or setup code are entered into your chosen app. For devices requiring a Device ID or MAC Address, send these to our support team and we will complete activation on our end.",
  },
];

export function InstallationFaqSection() {
  return (
    <FaqAccordionSection
      faqs={INSTALLATION_FAQS}
      defaultOpenId="how-install"
      title={
        <>
          Frequently Asked Questions About{" "}
          <span style={{ color: "var(--hero-accent)" }}>
            IPTV Installation
          </span>
        </>
      }
    />
  );
}
