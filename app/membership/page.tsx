import type { Metadata } from "next";
import Link from "next/link";
import PricingToggle from "@/components/PricingToggle";

export const metadata: Metadata = {
  title: "Membership",
  description: "Blooming Health membership plans — straightforward annual pricing for direct primary care in Baltimore.",
};

const included = [
  "Up to 15 visits per year — primary care and urgent care",
  "Same-day or next-day appointments, always",
  "Avi's personal phone number to call or text directly",
  "Long appointment blocks so there is time to actually talk",
  "Urgent care visits included (stitches, strep, flu, COVID, and more)",
  "Natural options explored first, not just a prescription and a goodbye",
  "A provider who knows you, your history, and your goals",
];


const faqs = [
  {
    q: "Does membership replace health insurance?",
    a: "No. Blooming Health covers primary and urgent care only. You should maintain insurance for specialists, hospitalizations, and emergencies. Many members pair this with a high-deductible plan and an HSA.",
  },
  {
    q: "Can I use my HSA or FSA?",
    a: "In many cases, yes. HSA/FSA eligibility for membership-based primary care depends on your plan type and current IRS rules. Check with your benefits administrator to confirm.",
  },
  {
    q: "Is there a contract?",
    a: "No long-term contract. Memberships are annual with no penalty for cancelling.",
  },
  {
    q: "What counts as a visit?",
    a: "Both primary care appointments and urgent care visits count toward your 15. Most members use a mix — a wellness visit or two, a few sick visits, and ongoing check-ins for chronic conditions.",
  },
  {
    q: "How quickly can I get seen?",
    a: "Same-day or next-day, always. You are not competing with a panel of thousands.",
  },
  {
    q: "What about labs and imaging?",
    a: "Labs can be ordered and coordinated at significantly reduced cost. Imaging is referred out and we help you find the most affordable path.",
  },
];

export default function Membership() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#F6F2E9] py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 md:px-11">
          <h1 className="font-[family-name:var(--font-fraunces)] font-[400] text-[#4A2A43] text-5xl md:text-6xl leading-[1.0] tracking-[-0.015em] mb-6 max-w-3xl">
            A flat monthly rate. Real access to a provider who knows you.
          </h1>
          <p className="font-[family-name:var(--font-cormorant)] font-[500] italic text-[#2B2329] text-xl md:text-2xl leading-[1.45] max-w-2xl">
            No copays. No billing surprises. No waiting three weeks to be seen.
          </p>
        </div>
      </section>

      {/* What&apos;s included */}
      <section className="bg-[#F6F2E9] py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-11 grid grid-cols-1 md:grid-cols-2 gap-14 items-start">
          <div>
            <h2 className="font-[family-name:var(--font-fraunces)] font-[500] text-[#4A2A43] text-3xl md:text-4xl leading-[1.04] tracking-[-0.01em] mb-5">
              Everything in one number.
            </h2>
            <p className="text-[#2B2329] text-base leading-relaxed mb-8">
              Your membership covers up to 15 visits per year — primary care and urgent care both count. Between visits, Avi&apos;s personal number is there when something comes up and you need a real answer fast.
            </p>
            <Link href="/services" className="text-[12px] tracking-[0.18em] uppercase font-[500] text-[#44597A] hover:text-[#4A2A43] transition-colors">
              See what we treat →
            </Link>
          </div>
          <ul className="flex flex-col">
            {included.map((item) => (
              <li key={item} className="flex items-start gap-3 py-4 border-b border-[rgba(36,28,32,0.1)] text-base text-[#2B2329]">
                <span className="mt-[6px] w-1.5 h-1.5 rounded-full bg-[#889A7C] shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-[#F1EADD] py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-11">
          <h2 className="font-[family-name:var(--font-fraunces)] font-[500] text-[#4A2A43] text-3xl md:text-4xl leading-[1.04] tracking-[-0.01em] mb-3">
            Straightforward pricing.
          </h2>
          <p className="text-[#44597A] text-base mb-12 max-w-xl">
            No per-visit fees, no surprise charges.
          </p>
          <PricingToggle />
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#F6F2E9] py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-11">
          <h2 className="font-[family-name:var(--font-fraunces)] font-[500] text-[#4A2A43] text-3xl md:text-4xl leading-[1.04] tracking-[-0.01em] mb-12">
            Things people ask first.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq) => (
              <div key={faq.q} className="border-l-2 border-[#889A7C] pl-5">
                <h3 className="font-[family-name:var(--font-fraunces)] font-[500] text-[#1B2A45] text-[17px] mb-3">
                  {faq.q}
                </h3>
                <p className="text-base text-[#2B2329] leading-relaxed">{faq.a}</p>
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
          <p className="text-[#C9CDD3] text-base max-w-md mx-auto mb-8">
            Reach out and we will find a time to talk through whether Blooming Health is the right fit for you and your family.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center border border-[#F6F2E9] text-[#F6F2E9] text-[12px] tracking-[0.18em] uppercase font-[500] px-8 py-4 hover:bg-[#F6F2E9] hover:text-[#1B2A45] transition-colors duration-200"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </>
  );
}
