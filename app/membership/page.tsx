import type { Metadata } from "next";
import Link from "next/link";
import PricingToggle from "@/components/PricingToggle";
import { FlowDivider, RingAccent } from "@/components/Motifs";

export const metadata: Metadata = {
  title: "Membership",
  description: "Blooming Health membership plans, straightforward annual pricing for concierge care in Baltimore.",
};

const included = [
  "Avi's personal phone number to call or text directly",
  "After-hours availability, evenings and most weekends",
  "Priority for same-day or next-day appointments",
  "Long appointment blocks so there is time to actually talk",
  "Primary and urgent care visits, billed through your insurance",
  "Natural options explored first, not just a prescription and a goodbye",
  "A provider who knows you, your history, and your goals",
];


const faqs = [
  {
    q: "Does membership replace health insurance?",
    a: "No. Insurance still covers your primary and urgent care visits, plus anything beyond that. Membership is what layers on top: direct provider access, after-hours availability, and priority scheduling.",
  },
  {
    q: "Can I use my HSA or FSA?",
    a: "In many cases, yes. HSA/FSA eligibility for membership-based primary care depends on your plan type and current IRS rules. Check with your benefits administrator to confirm.",
  },
  {
    q: "Is there a contract?",
    a: "There's a 6-month minimum commitment. After that, you can cancel anytime, though membership fees are non-refundable.",
  },
  {
    q: "How does billing work with insurance?",
    a: "We bill insurance for visits, labs, and referrals. The membership fee covers direct access, after-hours availability, and priority scheduling. We're still building out our insurance network, so reach out to confirm your plan.",
  },
  {
    q: "How quickly can I get seen?",
    a: "Same-day or next-day, always. You are not competing with a panel of thousands.",
  },
  {
    q: "What about labs and imaging?",
    a: "Labs (CBC, CMP, lipid panel, HbA1c, thyroid, vitamin D, and more) are collected in-office and billed through insurance. Imaging is referred out, and we'll help you find the most affordable path for anything not fully covered.",
  },
];

export default function Membership() {
  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden bg-[#F6F2E9] py-20 md:py-28">
        <div className="relative max-w-6xl mx-auto px-6 md:px-11">
          <h1 className="font-[family-name:var(--font-fraunces)] font-[400] text-[#1B2A45] text-[48px] sm:text-[64px] md:text-[80px] leading-[1.0] tracking-[-0.015em] mb-6 max-w-3xl">
            A flat monthly rate. Real access to a provider who knows you
          </h1>
          <p className="font-[family-name:var(--font-cormorant)] font-[500] italic text-[#2B2329] text-[27px] md:text-[32px] leading-[1.45] max-w-2xl mb-8">
            No billing surprises. No waiting three weeks to be seen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="#pricing"
              className="inline-flex items-center justify-center bg-[#1B2A45] text-[#F6F2E9] text-[16px] tracking-[0.18em] uppercase font-[500] px-8 py-4 hover:bg-[#162237] transition-colors duration-200"
            >
              See pricing
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border border-[rgba(36,28,32,0.2)] text-[#2B2329] text-[16px] tracking-[0.18em] uppercase font-[500] px-8 py-4 hover:border-[#1B2A45] hover:text-[#1B2A45] transition-colors duration-200"
            >
              Talk to us first
            </Link>
          </div>
        </div>
        <FlowDivider fill="#E7ECF5" />
      </section>

      {/* What&apos;s included */}
      <section className="relative overflow-hidden bg-[#E7ECF5] py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-11 grid grid-cols-1 md:grid-cols-2 gap-14 items-start">
          <div>
            <h2 className="font-[family-name:var(--font-fraunces)] font-[500] text-[#1B2A45] text-[40px] md:text-[48px] leading-[1.04] tracking-[-0.01em] mb-5">
              Everything in one number
            </h2>
            <p className="text-[#2B2329] text-[21px] leading-relaxed mb-8">
              Your insurance continues to cover the cost of visits, labs, and referrals. Membership adds direct access to Avi: call or text when something comes up, with after-hours availability and priority for same- and next-day appointments.
            </p>
            <Link href="/services" className="text-[16px] tracking-[0.18em] uppercase font-[500] text-[#44597A] hover:text-[#1B2A45] transition-colors">
              See what we treat →
            </Link>
          </div>
          <ul className="flex flex-col">
            {included.map((item) => (
              <li key={item} className="flex items-start gap-3 py-4 border-b border-[rgba(36,28,32,0.1)] text-[21px] text-[#2B2329]">
                <span className="mt-[6px] w-1.5 h-1.5 rounded-full bg-[#44597A] shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <FlowDivider fill="#F1EADD" />
      </section>

      {/* Pricing */}
      <section id="pricing" className="relative overflow-hidden bg-[#F1EADD] py-16 md:py-24 scroll-mt-16">
        <RingAccent
          tone="plum"
          className="pointer-events-none absolute -left-12 -top-8 hidden h-52 w-52 lg:block"
        />
        <div className="relative max-w-6xl mx-auto px-6 md:px-11">
          <h2 className="font-[family-name:var(--font-fraunces)] font-[500] text-[#1B2A45] text-[40px] md:text-[48px] leading-[1.04] tracking-[-0.01em] mb-3">
            Straightforward pricing
          </h2>
          <p className="text-[#44597A] text-[21px] mb-12 max-w-xl">
            No per-visit fees, no surprise charges.
          </p>
          <PricingToggle />
        </div>
        <FlowDivider fill="#F3EAF1" />
      </section>

      {/* FAQ */}
      <section className="relative overflow-hidden bg-[#F3EAF1] py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-11">
          <h2 className="font-[family-name:var(--font-fraunces)] font-[500] text-[#4A2A43] text-[40px] md:text-[48px] leading-[1.04] tracking-[-0.01em] mb-12">
            Common questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq) => (
              <div key={faq.q} className="border-l-2 border-[#4A2A43] pl-5">
                <h3 className="font-[family-name:var(--font-fraunces)] font-[500] text-[#4A2A43] text-[23px] mb-3">
                  {faq.q}
                </h3>
                <p className="text-[21px] text-[#2B2329] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Link href="/faq" className="text-[16px] tracking-[0.18em] uppercase font-[500] text-[#44597A] hover:text-[#4A2A43] transition-colors">
              Full FAQ →
            </Link>
          </div>
        </div>
        <FlowDivider fill="#E7ECF5" />
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#E7ECF5] py-20">
        <div className="relative max-w-6xl mx-auto px-6 md:px-11 text-center">
          <h2 className="font-[family-name:var(--font-fraunces)] font-[400] text-[#1B2A45] text-[48px] md:text-[64px] leading-[1.04] tracking-[-0.015em] mb-5 max-w-xl mx-auto">
            Start with a conversation.
          </h2>
          <p className="text-[#44597A] text-[21px] max-w-md mx-auto mb-8">
            Reach out and we will find a time to talk through whether Blooming Health is the right fit for you and your family.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center border border-[#1B2A45] text-[#1B2A45] text-[16px] tracking-[0.18em] uppercase font-[500] px-8 py-4 hover:bg-[#1B2A45] hover:text-[#F6F2E9] transition-colors duration-200"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </>
  );
}
