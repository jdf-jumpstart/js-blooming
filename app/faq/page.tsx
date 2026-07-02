import type { Metadata } from "next";
import Link from "next/link";
import { BloomMotif, FlowDivider, RingAccent } from "@/components/Motifs";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers to common questions about Blooming Health and the direct primary care model.",
};

const sections = [
  {
    title: "The basics",
    faqs: [
      {
        q: "What is direct primary care (DPC)?",
        a: "Direct primary care is a membership model for primary care. Instead of billing insurance for every visit, you pay a flat monthly fee that covers all primary care services — unlimited visits, longer appointments, and direct access to your provider. Insurance is still useful for specialists, hospitals, and anything beyond primary care.",
      },
      {
        q: "Who is Blooming Health for?",
        a: "Patients 13 and up. Teens and their parents, professionals, business owners, and health-conscious adults who are done with rushed, impersonal primary care. We speak to the adults who are choosing and paying for that care.",
      },
      {
        q: "How is this different from a concierge practice?",
        a: "Concierge medicine often layers fees on top of insurance billing. We do not bill insurance for primary care at all — the membership fee is it. That keeps the relationship simple and the experience clean.",
      },
      {
        q: "Is this the same as a direct pay clinic?",
        a: "Similar in spirit. The membership model gives you unlimited visits for a flat monthly fee, rather than paying per visit. It also funds the structural things that make the experience better — smaller patient panels, longer appointments, and real provider availability.",
      },
    ],
  },
  {
    title: "Insurance & costs",
    faqs: [
      {
        q: "Do I need health insurance to join?",
        a: "No. Membership does not require insurance. However, we recommend maintaining insurance (or a health-sharing plan) for coverage beyond primary care — specialists, hospitalizations, and emergencies.",
      },
      {
        q: "Does membership replace health insurance?",
        a: "It replaces the need for insurance in primary care, but not for everything else. Many members use a high-deductible health plan (HDHP) paired with an HSA for the things Blooming Health does not cover.",
      },
      {
        q: "Can I use my HSA or FSA?",
        a: "In many cases, yes. HSA/FSA eligibility for DPC memberships depends on your specific plan type and current IRS guidance. We recommend confirming with your benefits administrator.",
      },
      {
        q: "What about labs and imaging?",
        a: "Basic lab work is included. For more comprehensive labs, we have access to wholesale pricing — often 80–90% below retail and hospital rates. We will help you find the most affordable path for any imaging or tests that are needed.",
      },
      {
        q: "Are there any additional fees beyond the monthly membership?",
        a: "There is a one-time enrollment fee per person. Beyond that, in-office primary care visits have no additional copays or charges. Wholesale labs, imaging, and specialist care are outside the membership.",
      },
    ],
  },
  {
    title: "Appointments & access",
    faqs: [
      {
        q: "How quickly can I get an appointment?",
        a: "Same-day or next-day for acute concerns. Routine and wellness visits are typically available within a few days. You are not competing against a panel of 2,000 patients.",
      },
      {
        q: "Can I contact my provider directly?",
        a: "Yes. Members have direct access to their provider by phone, text, and email. For non-emergency questions, you can expect a response within a few hours during business hours, and same-day for urgent things.",
      },
      {
        q: "What about after-hours care?",
        a: "For non-emergency questions, members can message their provider after hours and expect a response the next morning. For urgent but non-emergency concerns, direct contact is available. True emergencies should go to 911 or the nearest emergency room.",
      },
      {
        q: "Are telehealth visits available?",
        a: "Yes. Video visits are included in the membership and available for most concerns that do not require an in-person exam.",
      },
      {
        q: "How long are appointments?",
        a: "Appointments are 30 to 60 minutes depending on complexity. Annual physicals and new patient visits are always longer. There is no rushing to the next patient.",
      },
    ],
  },
  {
    title: "Membership details",
    faqs: [
      {
        q: "Is there a contract?",
        a: "No long-term contract. Memberships are month-to-month and can be cancelled with 30 days written notice.",
      },
      {
        q: "Can I add family members?",
        a: "Yes. We offer individual, couple, teen add-on, and family plans. Children under 13 should remain with their pediatrician.",
      },
      {
        q: "What happens if I need to see a specialist?",
        a: "We will refer you and coordinate. Your specialist visits are billed through your insurance as they normally would be. We handle the paperwork side and stay in the loop.",
      },
      {
        q: "What if I need to be hospitalized?",
        a: "Hospitalizations are handled by hospital-based providers (hospitalists). We stay involved, coordinate with the hospital team, and follow up closely when you are discharged.",
      },
      {
        q: "When can I enroll?",
        a: "We are [currently accepting new patients / accepting a waitlist / opening enrollment on (date)]. Contact us to get started or get on the list.",
      },
    ],
  },
];

export default function FAQ() {
  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden bg-[#F6F2E9] py-20 md:py-28">
        <BloomMotif
          tone="sage"
          className="pointer-events-none absolute -right-8 top-4 hidden h-52 w-52 lg:block"
        />
        <div className="relative max-w-6xl mx-auto px-6 md:px-11">
          <h1 className="font-[family-name:var(--font-fraunces)] font-[400] text-[#4A2A43] text-5xl md:text-6xl leading-[1.0] tracking-[-0.015em] max-w-3xl">
            Frequently Asked Questions (FAQ&apos;s)
          </h1>
        </div>
      </section>

      {/* FAQ sections */}
      <section className="relative overflow-hidden bg-[#F6F2E9] py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-11">
          <div className="flex flex-col gap-16">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="font-[family-name:var(--font-fraunces)] font-[500] text-[#1B2A45] text-2xl mb-8 pb-4">
                  {section.title}
                </h2>
                <div className="flex flex-col gap-6">
                  {section.faqs.map((faq) => (
                    <div
                      key={faq.q}
                      className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-4 md:gap-10 pb-6 border-b border-[rgba(36,28,32,0.1)]"
                    >
                      <h3 className="font-[family-name:var(--font-fraunces)] font-[500] text-[#4A2A43] text-[16px] leading-[1.3]">
                        {faq.q}
                      </h3>
                      <p className="text-base text-[#2B2329] leading-relaxed">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <FlowDivider fill="#F1EADD" />
      </section>

      {/* Still have questions */}
      <section className="relative overflow-hidden bg-[#F1EADD] border-t border-[rgba(36,28,32,0.14)] py-20">
        <RingAccent
          tone="plum"
          className="pointer-events-none absolute -left-10 -bottom-10 hidden h-48 w-48 md:block"
        />
        <div className="relative max-w-6xl mx-auto px-6 md:px-11 text-center">
          <h2 className="font-[family-name:var(--font-fraunces)] font-[400] text-[#4A2A43] text-4xl md:text-5xl leading-[1.04] tracking-[-0.015em] mb-5">
            Still have questions?
          </h2>
          <p className="text-[#2B2329] text-base max-w-md mx-auto mb-8 leading-relaxed">
            Get in touch. We will give you a straight answer and, if it makes sense, set up a free introductory call.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-[#4A2A43] text-[#F6F2E9] text-[12px] tracking-[0.18em] uppercase font-[500] px-8 py-4 hover:bg-[#3a1f34] transition-colors duration-200"
          >
            Contact us
          </Link>
        </div>
      </section>
    </>
  );
}
