import { FaqAccordionSection, type FaqItem } from "@/components/sections/faq-section";

const FREE_TRIAL_FAQS: FaqItem[] = [
  {
    id: "how-to-get",
    q: "How do I get an IPTV free trial?",
    a: "Fill in the trial request form on this page with your name, email, and the device you plan to use. Your login details — username, password, and Portal URL — are sent by email, usually within a few minutes.",
  },
  {
    id: "how-long",
    q: "How long is the IPTV free trial?",
    a: "The trial gives you 24 hours of full access to live channels, sports, and on-demand content — the same access level as a paying subscriber, not a restricted preview.",
  },
  {
    id: "payment",
    q: "Do I need to pay for the IPTV free trial?",
    a: "No. The trial requires no card details and no payment of any kind. There is no automatic charge or sign-up at the end of the 24-hour period.",
  },
  {
    id: "contact-support",
    q: "How do I contact IPTV support?",
    a: "You can reach support via WhatsApp for the fastest response, by email for detailed questions, or through live chat on this page. Most queries are answered within five minutes.",
  },
  {
    id: "how-quick",
    q: "How quickly will I receive my IPTV trial?",
    a: "Most trial requests are processed within a few minutes of submission. Login details arrive by email — check your spam folder if you do not see them shortly after requesting.",
  },
  {
    id: "why-test",
    q: "Why should I test IPTV before subscribing?",
    a: "Testing first lets you confirm channel quality, streaming stability, and device compatibility on your own connection before committing to a paid plan. It removes the guesswork entirely.",
  },
  {
    id: "after-trial",
    q: "What happens after my IPTV free trial?",
    a: "Nothing happens automatically. There is no auto-charge and no forced sign-up. If you want to continue, you choose a subscription plan directly. If not, your trial simply ends with nothing owed.",
  },
  {
    id: "devices",
    q: "Which devices support the IPTV free trial?",
    a: "The trial works on every device the full service supports — Firestick, Android TV, Apple TV, Samsung and LG Smart TVs, Windows PC, Mac, iPhone, and Android phones and tablets.",
  },
  {
    id: "beginners",
    q: "Can beginners request an IPTV free trial?",
    a: "Yes. No technical experience is required. If you need help installing the app or entering your login details, our support team is available to walk you through it.",
  },
  {
    id: "activation",
    q: "How does IPTV trial activation work?",
    a: "Once your trial request is approved, your account is activated using the same process as a paid subscription. You receive a username, password, and Portal URL by email, which you enter into your chosen IPTV app to start watching immediately.",
  },
];

export function FreeTrialFaqSection() {
  return (
    <FaqAccordionSection
      faqs={FREE_TRIAL_FAQS}
      defaultOpenId="how-to-get"
      title={
        <>
          Frequently Asked Questions About{" "}
          <span style={{ color: "var(--hero-accent)" }}>IPTV Free Trial</span>
        </>
      }
    />
  );
}
