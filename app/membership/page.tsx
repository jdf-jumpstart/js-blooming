import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Membership",
  description: "Blooming Health membership plans — straightforward monthly pricing for direct primary care in Baltimore.",
};

const included = [
  "Unlimited office visits (no copays)",
  "Same-day or next-day appointments",
  "Longer appointments — 30 to 60 minutes",
  "Direct physician access by phone, text, and email",
  "After-hours messaging for non-emergency concerns",
  "Telehealth video visits",
  "Annual wellness exam",
  "Preventive screenings and vaccinations",
  "Chronic disease management",
  "Nutrition and lifestyle counseling",
  "Wholesale lab pricing (typically 80–90% below retail)",
  "Prescription renewal and prior authorization management",
  "Specialist referral coordination",
  "Hospital discharge follow-up",
];

const plans = [
  {
    name: "Individual",
    price: "$[X]",
    period: "per month",
    description: "Full membership for one adult, ages 18 and up.",
    highlight: false,
  },
  {
    name: "Teen Add-On",
    price: "$[X]",
    period: "per month",
    description: "Add a patient aged 13–17 to an existing adult membership.",
    highlight: false,
  },
  {
    name: "Couple",
    price: "$[X]",
    period: "per month",
    description: "Membership for two adults in the same household.",
    highlight: true,
  },
  {
    name: "Family",
    price: "$[X]",
    period: "per month",
    description: "Two adults plus children 13 and up in the same household.",
    highlight: false,
  },
];

const faqs = [
  {
    q: "Does membership replace health insurance?",
    a: "No. Blooming Health covers primary care only. You should maintain insurance for specialist care, hospitalizations, emergency services, and anything beyond what a primary care physician handles. Many members pair this with a high-deductible health plan (HDHP) and an HSA to keep overall costs reasonable.",
  },
  {
    q: "Can I use my HSA or FSA to pay?",
    a: "In many cases, yes. HSA and FSA eligibility for DPC memberships depends on your specific plan type and the IRS rules in effect at the time. We recommend checking with your benefits administrator.",
  },
  {
    q: "Is there a contract or minimum commitment?",
    a: "Memberships are month-to-month. Cancel any time with 30 days notice.",
  },
  {
    q: "What is the enrollment fee?",
    a: "There is a one-time enrollment fee of $[X] per person. This covers the setup of your patient profile and your first extended intake visit.",
  },
  {
    q: "How quickly can I get an appointment?",
    a: "Same-day or next-day for acute concerns. Routine visits are typically scheduled within a few days. You are never competing against a panel of 2,000 patients.",
  },
];

export default function Membership() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#F6F2E9] border-b border-[rgba(36,28,32,0.14)] py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 md:px-11">
          <div className="text-[11px] tracking-[0.32em] uppercase text-[#44597A] font-[500] mb-5">
            Membership
          </div>
          <h1 className="font-[family-name:var(--font-fraunces)] font-[400] text-[#4A2A43] text-5xl md:text-6xl leading-[1.0] tracking-[-0.015em] mb-6 max-w-3xl">
            One flat monthly fee. Everything primary care should be.
          </h1>
          <p className="font-[family-name:var(--font-cormorant)] font-[500] italic text-[#2B2329] text-xl md:text-2xl leading-[1.45] max-w-2xl">
            No copays. No billing. No waiting three weeks to be seen.
          </p>
        </div>
      </section>

      {/* What&apos;s included */}
      <section className="bg-[#F6F2E9] border-b border-[rgba(36,28,32,0.14)] py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-11 grid grid-cols-1 md:grid-cols-2 gap-14 items-start">
          <div>
            <div className="text-[11px] tracking-[0.32em] uppercase text-[#44597A] font-[500] mb-5">
              What&apos;s included
            </div>
            <h2 className="font-[family-name:var(--font-fraunces)] font-[500] text-[#4A2A43] text-3xl md:text-4xl leading-[1.04] tracking-[-0.01em] mb-5">
              Everything, in one number.
            </h2>
            <p className="text-[#2B2329] text-[15px] leading-relaxed mb-8">
              Your monthly fee covers all primary care services with no additional billing. Labs are available at wholesale pricing — typically a fraction of what clinics and hospitals charge.
            </p>
            <Link href="/services" className="text-[12px] tracking-[0.18em] uppercase font-[500] text-[#44597A] hover:text-[#4A2A43] transition-colors">
              Full service list →
            </Link>
          </div>
          <ul className="grid grid-cols-1 gap-2">
            {included.map((item) => (
              <li key={item} className="flex items-start gap-3 py-3 border-b border-[rgba(36,28,32,0.1)] text-[14.5px] text-[#2B2329]">
                <span className="mt-[6px] w-1.5 h-1.5 rounded-full bg-[#889A7C] shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-[#F1EADD] border-b border-[rgba(36,28,32,0.14)] py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-11">
          <div className="text-[11px] tracking-[0.32em] uppercase text-[#44597A] font-[500] mb-5">
            Plans
          </div>
          <h2 className="font-[family-name:var(--font-fraunces)] font-[500] text-[#4A2A43] text-3xl md:text-4xl leading-[1.04] tracking-[-0.01em] mb-4">
            Straightforward pricing.
          </h2>
          <p className="text-[#2B2329] text-[15px] max-w-xl mb-12">
            Pricing to be finalized. The placeholders below represent the plan structure — pricing will be listed here once the practice is ready to accept new patients.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-md border p-7 flex flex-col ${
                  plan.highlight
                    ? "bg-[#4A2A43] border-[#4A2A43] text-[#F6F2E9]"
                    : "bg-[#F6F2E9] border-[rgba(36,28,32,0.14)] text-[#2B2329]"
                }`}
              >
                {plan.highlight && (
                  <div className="text-[10px] tracking-[0.28em] uppercase text-[#889A7C] font-[500] mb-3">
                    Most popular
                  </div>
                )}
                <div className={`text-[11px] tracking-[0.24em] uppercase font-[500] mb-3 ${plan.highlight ? "text-[#C9CDD3]" : "text-[#44597A]"}`}>
                  {plan.name}
                </div>
                <div className="font-[family-name:var(--font-fraunces)] text-4xl leading-none mb-1">
                  {plan.price}
                </div>
                <div className={`text-[12px] mb-4 ${plan.highlight ? "text-[#C9CDD3]" : "text-[#44597A]"}`}>
                  {plan.period}
                </div>
                <p className={`text-[13.5px] leading-relaxed flex-1 ${plan.highlight ? "text-[#F1EADD]" : "text-[#2B2329]"}`}>
                  {plan.description}
                </p>
                <div className="mt-6">
                  <Link
                    href="/contact"
                    className={`text-[11px] tracking-[0.18em] uppercase font-[500] border px-4 py-2.5 inline-block transition-colors duration-200 ${
                      plan.highlight
                        ? "border-[#F6F2E9] text-[#F6F2E9] hover:bg-[#F6F2E9] hover:text-[#4A2A43]"
                        : "border-[#4A2A43] text-[#4A2A43] hover:bg-[#4A2A43] hover:text-[#F6F2E9]"
                    }`}
                  >
                    Get started
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <p className="text-[12px] text-[#44597A] mt-6">
            * A one-time enrollment fee of $[X] per person applies. Membership is month-to-month; cancel with 30 days notice.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#F6F2E9] border-b border-[rgba(36,28,32,0.14)] py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-11">
          <div className="text-[11px] tracking-[0.32em] uppercase text-[#44597A] font-[500] mb-5">
            Common questions
          </div>
          <h2 className="font-[family-name:var(--font-fraunces)] font-[500] text-[#4A2A43] text-3xl md:text-4xl leading-[1.04] tracking-[-0.01em] mb-12">
            Things people ask first.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq) => (
              <div key={faq.q} className="border-l-2 border-[#889A7C] pl-5">
                <h3 className="font-[family-name:var(--font-fraunces)] font-[500] text-[#1B2A45] text-[17px] mb-3">
                  {faq.q}
                </h3>
                <p className="text-[14px] text-[#2B2329] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Link href="/faq" className="text-[12px] tracking-[0.18em] uppercase font-[500] text-[#44597A] hover:text-[#4A2A43] transition-colors">
              Full FAQ →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1B2A45] py-20">
        <div className="max-w-6xl mx-auto px-6 md:px-11 text-center">
          <h2 className="font-[family-name:var(--font-fraunces)] font-[400] text-[#F6F2E9] text-4xl md:text-5xl leading-[1.04] tracking-[-0.015em] mb-5 max-w-xl mx-auto">
            Start with a conversation.
          </h2>
          <p className="text-[#C9CDD3] text-[15px] max-w-md mx-auto mb-8">
            Schedule a free 15-minute introductory call. No commitment, no pressure — just an honest conversation about whether this is the right fit.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center border border-[#F6F2E9] text-[#F6F2E9] text-[12px] tracking-[0.18em] uppercase font-[500] px-8 py-4 hover:bg-[#F6F2E9] hover:text-[#1B2A45] transition-colors duration-200"
          >
            Schedule an intro call
          </Link>
        </div>
      </section>
    </>
  );
}
