import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers to common questions about Blooming Health and the concierge care model.",
};

const sections = [
  {
    title: "The basics",
    faqs: [
      {
        q: "What is concierge care?",
        a: "Blooming Health blends membership-based access with your existing insurance. You pay a flat monthly fee for direct access to your provider (phone, text, after-hours availability, priority scheduling), while visits, labs, and referrals are billed through insurance, just like they would be anywhere else.",
      },
      {
        q: "Who is Blooming Health for?",
        a: "Patients 13 and up. Teens and their parents, professionals, business owners, and health-conscious adults who are done with rushed, impersonal primary care. We speak to the adults who are choosing and paying for that care.",
      },
      {
        q: "How is this different from a typical primary care practice?",
        a: "Most primary care practices see thousands of patients per provider, which means rushed visits and a wait for routine care. Blooming Health keeps a small patient panel on purpose: a flat membership fee funds direct access, longer appointments, and same- or next-day scheduling, while your insurance still covers the cost of visits like it would anywhere else.",
      },
      {
        q: "Is this the same as a direct pay clinic?",
        a: "Not quite. A direct pay clinic charges you directly for each visit instead of billing insurance. Blooming Health bills insurance for visits, the same as most practices. The membership fee is what funds the extras: a smaller patient panel, longer appointments, and real provider availability between visits.",
      },
    ],
  },
  {
    title: "Insurance & costs",
    faqs: [
      {
        q: "Do I need health insurance to join?",
        a: "We recommend it. We are currently building out our insurance network and are not yet credentialed with plans, so visits are self-pay in the meantime. Once credentialing is complete, insurance will help cover the cost of visits, labs, and referrals.",
      },
      {
        q: "Does membership replace health insurance?",
        a: "No. Insurance still covers your primary and urgent care visits, plus anything beyond that. Membership is what layers on top: direct provider access, after-hours availability, and priority scheduling.",
      },
      {
        q: "Can I use my HSA or FSA?",
        a: "In many cases, yes. HSA/FSA eligibility for concierge care memberships depends on your specific plan type and current IRS guidance. We recommend confirming with your benefits administrator.",
      },
      {
        q: "What about labs and imaging?",
        a: "Routine labs (CBC, CMP, lipid panel, HbA1c, thyroid, vitamin D, iron studies, and more) are collected in-office and billed through insurance. Imaging is referred out, and we will help you find the most affordable path for anything insurance does not fully cover.",
      },
      {
        q: "Are there any additional fees beyond the monthly membership?",
        a: "No enrollment fee. Visits, labs, imaging, and specialist care are billed through your insurance (or self-pay while we complete insurance credentialing). The membership fee itself covers direct provider access, after-hours availability, and priority scheduling.",
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
        a: "Yes. Members have direct access to their provider by phone, text, and email. For non-emergency messages, expect a response within about 2 hours during business hours, and same-day for urgent things.",
      },
      {
        q: "What about after-hours care?",
        a: "Members have on-call phone and text access Sunday through Thursday, and until 3pm on Fridays (no on-call hours Saturday). For true emergencies, like chest pain, difficulty breathing, a severe allergic reaction, or a major injury, go straight to 911 or the nearest emergency room.",
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
        a: "There's a 6-month minimum commitment. After that, you can cancel anytime, though membership fees are non-refundable. Planning an extended trip? Ask us about a temporary pause on your membership.",
      },
      {
        q: "Can I add family members?",
        a: "Yes. We offer individual, couple, and family plans. Family membership covers a couple plus up to three children in the household.",
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
      <section className="bg-[#F6F2E9] py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 md:px-11">
          <h1 className="font-[family-name:var(--font-fraunces)] font-[400] text-[#4A2A43] text-5xl md:text-6xl leading-[1.0] tracking-[-0.015em] max-w-3xl">
            Frequently Asked Questions (FAQ&apos;s)
          </h1>
        </div>
      </section>

      {/* FAQ sections */}
      <section className="bg-[#F6F2E9] py-16 md:py-24">
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
      </section>

      {/* Still have questions */}
      <section className="bg-[#F1EADD] border-t border-[rgba(36,28,32,0.14)] py-20">
        <div className="max-w-6xl mx-auto px-6 md:px-11 text-center">
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
