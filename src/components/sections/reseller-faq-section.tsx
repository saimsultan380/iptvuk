import { FaqAccordionSection, type FaqItem } from "@/components/sections/faq-section";

const RESELLER_FAQS: FaqItem[] = [
  {
    id: "what-is-reseller-uk",
    q: "What is IPTV Reseller UK?",
    a: "IPTV Reseller UK refers to a business model where you purchase IPTV credits in bulk from a panel provider, then resell individual subscriptions to your own customers at a price you set. You manage customer accounts through a dashboard, while the provider handles the streaming infrastructure.",
  },
  {
    id: "how-panels-work",
    q: "How do IPTV reseller panels work?",
    a: "A reseller panel is a dashboard where you create customer lines, each one a live IPTV subscription. You buy credits upfront, and each customer subscription deducts credits based on its duration — 1 credit per month of access. You control pricing, customer communication, and renewals.",
  },
  {
    id: "how-credits-work",
    q: "How do IPTV credits work?",
    a: "1 credit equals 1 month of subscription access for one customer. Buying credits in bulk lowers your cost per credit. Credits do not expire, so unused balance carries forward indefinitely regardless of how long it takes to use it.",
  },
  {
    id: "beginners",
    q: "Can beginners become IPTV resellers?",
    a: "Yes. No technical background is required. The panel handles account creation and streaming infrastructure automatically — your role is choosing pricing, finding customers, and providing support, all of which can be learned as you go.",
  },
  {
    id: "credit-expiry",
    q: "Do IPTV reseller credits expire?",
    a: "No. Credits purchased through any plan remain valid indefinitely. There is no deadline to use them and no forced renewal requirement.",
  },
  {
    id: "profitable",
    q: "Is IPTV reseller business profitable?",
    a: "It can be, particularly with customer retention. At typical resale pricing of £10 to £20 per month against a wholesale credit cost of £1.20 to £1.50, the profit margin per customer is substantial — and grows further through renewals rather than constant new customer acquisition.",
  },
  {
    id: "panel-features",
    q: "What features should a reseller panel have?",
    a: "A reliable reseller panel should include instant auto-delivery, multi-server failover for uptime, unlimited customer line creation, accurate EPG data, real-time channel monitoring, and credits that do not expire. Support availability matters just as much as the technical features.",
  },
  {
    id: "white-label-diff",
    q: "What is the difference between IPTV reseller and white label?",
    a: "A standard IPTV reseller sells subscriptions using the panel's existing branding and apps. White label goes further — your customers see your business name on the app itself, and at higher credit volumes, can even access their subscription through your own custom domain rather than the provider's.",
  },
  {
    id: "sub-resellers",
    q: "Can I create sub-resellers?",
    a: "Yes, on eligible plans. You can allocate a portion of your credits to other resellers beneath you, who then sell to their own customers — effectively building a distribution layer under your own reseller account.",
  },
  {
    id: "grow-business",
    q: "How do I grow an IPTV reseller business?",
    a: "Most growth comes from retention rather than constant new customer hunting. Reliable streaming quality reduces churn, consistent support reduces complaints, and reinvesting profits into additional credits lets you take on new customers without running short mid-month.",
  },
];

export function ResellerFaqSection() {
  return (
    <FaqAccordionSection
      faqs={RESELLER_FAQS}
      defaultOpenId="what-is-reseller-uk"
      title={
        <>
          Frequently Asked Questions About{" "}
          <span style={{ color: "var(--hero-accent)" }}>
            IPTV Reseller UK
          </span>
        </>
      }
    />
  );
}
