import { FaqAccordionSection, type FaqItem } from "@/components/sections/faq-section";

const SUBSCRIPTION_FAQS: FaqItem[] = [
  {
    id: "what-is-subscription",
    q: "What is an IPTV subscription UK?",
    a: "An IPTV subscription UK gives you live TV channels, sports, and on-demand content delivered through your broadband internet instead of satellite or cable. You watch through an app on any compatible device. UK-Best-IPTV's subscription includes 12,000+ live channels and a 40,000-title VOD library from £15.99 per month.",
  },
  {
    id: "legal",
    q: "Is IPTV legal in the UK?",
    a: "IPTV technology is completely legal — the same technology powers BBC iPlayer and ITVX. The legal question relates to content licensing, whether the provider holds correct broadcasting licences. Always choose a transparent provider.",
  },
  {
    id: "devices",
    q: "Which devices support IPTV subscriptions?",
    a: "UK-Best-IPTV works on Firestick, Fire TV, Samsung Smart TV, LG Smart TV, Apple TV, Android TV, Android Box, MAG Box, Formuler, iPhone, iPad, Windows PC, and Mac. Full installation guides available for every device.",
  },
  {
    id: "activation",
    q: "How long does activation take?",
    a: "Most subscriptions activate within five minutes of purchase. Your login details — username, password, and server URL — arrive by email automatically. Most customers are watching their first channel within fifteen minutes total.",
  },
  {
    id: "free-trial",
    q: "Do you offer a free trial?",
    a: "Yes. A free 24-hour trial is available with no credit card required. You get full access to the channel library, sports coverage, and VOD content to test before subscribing.",
  },
  {
    id: "internet-speed",
    q: "What internet speed do I need for IPTV?",
    a: "For 4K UHD streaming, 25 Mbps or above is recommended. For Full HD 1080p, 10 Mbps is sufficient. Standard connections handle HD 720p reliably. Most UK broadband packages exceed these figures comfortably.",
  },
  {
    id: "multi-device",
    q: "Can I use IPTV on multiple devices at the same time?",
    a: "Yes, depending on your connection tier. Single Connection supports one device at a time. Double Connection supports two simultaneous streams. Triple Connection supports three — ideal for families streaming different content at once.",
  },
  {
    id: "4k",
    q: "Does IPTV support 4K streaming?",
    a: "Yes. Where the source broadcast is genuinely 4K and your connection supports it, you receive a true 4K UHD stream. Resolution scales automatically based on your broadband speed and device capability.",
  },
  {
    id: "epg",
    q: "What is IPTV EPG?",
    a: "An IPTV EPG — Electronic Programme Guide — is the built-in TV guide showing what is on now and what is coming next across every channel. Every UK-Best-IPTV subscription includes a full EPG that updates automatically.",
  },
  {
    id: "refund",
    q: "Do you offer a money-back guarantee?",
    a: "Yes. If we cannot resolve a technical issue, a full refund is provided within 7 days of purchase. No long forms, no hoops to jump through.",
  },
];

export function SubscriptionFaqSection() {
  return (
    <FaqAccordionSection
      faqs={SUBSCRIPTION_FAQS}
      defaultOpenId="what-is-subscription"
      title={
        <>
          Frequently Asked Questions About{" "}
          <span style={{ color: "var(--hero-accent)" }}>
            IPTV Subscription UK
          </span>
        </>
      }
    />
  );
}
