import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description: "A full list of what Blooming Health covers under your membership — preventive care, chronic disease management, acute visits, and more.",
};

const serviceCategories = [
  {
    category: "Preventive & Wellness",
    services: [
      "Annual physical exams and wellness visits",
      "Age-appropriate health screenings",
      "Routine vaccinations and immunizations",
      "Cardiovascular risk assessment",
      "Cancer screening coordination",
      "Lifestyle and preventive health counseling",
    ],
  },
  {
    category: "Chronic Disease Management",
    services: [
      "Type 2 diabetes management",
      "High blood pressure (hypertension)",
      "High cholesterol and lipid management",
      "Thyroid disease (hypothyroidism, hyperthyroidism)",
      "Asthma and COPD",
      "Osteoporosis and bone health",
      "GERD and digestive conditions",
      "Ongoing lab monitoring and medication management",
    ],
  },
  {
    category: "Acute & Urgent Care",
    services: [
      "Same-day or next-day sick visits",
      "Upper respiratory infections and flu",
      "Ear, nose, and throat conditions",
      "Urinary tract infections",
      "Skin infections and wound care",
      "Minor injuries and sprains",
      "Rashes and dermatological concerns",
    ],
  },
  {
    category: "Women's Health",
    services: [
      "Well-woman visits and pelvic exams",
      "Pap smear and cervical cancer screening",
      "Contraception counseling and management",
      "Menopausal symptom management",
      "Bone density screening referrals",
      "[Additional women's health services — placeholder]",
    ],
  },
  {
    category: "Mental Health & Behavioral",
    services: [
      "Screening for anxiety and depression",
      "Basic counseling and medication management",
      "Sleep disorder evaluation and guidance",
      "Stress management and lifestyle support",
      "Referral coordination for specialist mental health care",
    ],
  },
  {
    category: "Nutrition & Lifestyle Medicine",
    services: [
      "Nutritional assessment and guidance",
      "Weight management support",
      "Exercise counseling and movement planning",
      "Smoking cessation support",
      "Alcohol and substance use counseling",
      "Sleep hygiene and recovery planning",
    ],
  },
  {
    category: "Lab & Diagnostics Coordination",
    services: [
      "In-office basic lab work",
      "Wholesale pricing on labs (typically 80–90% below retail)",
      "Coordination with local imaging centers",
      "EKG and basic diagnostic testing",
      "Specialist referral coordination",
    ],
  },
  {
    category: "Direct Physician Access",
    services: [
      "Phone, text, and email access to your physician",
      "After-hours messaging for non-emergency questions",
      "Telehealth video visits",
      "Prescription renewals and prior authorizations",
      "Second-opinion guidance",
      "Hospital discharge follow-up",
    ],
  },
];

const notIncluded = [
  "Specialist care (covered by your insurance)",
  "Hospital and emergency room care",
  "Major surgeries",
  "Mental health therapy (beyond basic counseling)",
  "Advanced imaging (MRI, CT — coordinated at wholesale rates where possible)",
  "Prescription medications (we can often find the lowest cost options)",
];

export default function Services() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#F6F2E9] border-b border-[rgba(36,28,32,0.14)] py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 md:px-11">
          <div className="text-[11px] tracking-[0.32em] uppercase text-[#44597A] font-[500] mb-5">
            What we cover
          </div>
          <h1 className="font-[family-name:var(--font-fraunces)] font-[400] text-[#4A2A43] text-5xl md:text-6xl leading-[1.0] tracking-[-0.015em] mb-6 max-w-3xl">
            Comprehensive primary care. One flat fee.
          </h1>
          <p className="font-[family-name:var(--font-cormorant)] font-[500] italic text-[#2B2329] text-xl md:text-2xl leading-[1.45] max-w-2xl">
            Your membership covers everything listed here — no copays, no billing surprises, no phone tree to navigate.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="bg-[#F6F2E9] py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-11">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceCategories.map((cat) => (
              <div
                key={cat.category}
                className="border border-[rgba(36,28,32,0.14)] rounded-md bg-[#F1EADD] p-7"
              >
                <h2 className="font-[family-name:var(--font-fraunces)] font-[500] text-[#1B2A45] text-xl mb-5">
                  {cat.category}
                </h2>
                <ul className="flex flex-col gap-2">
                  {cat.services.map((s) => (
                    <li key={s} className="flex items-start gap-3 text-[14px] text-[#2B2329]">
                      <span className="mt-[5px] w-1.5 h-1.5 rounded-full bg-[#889A7C] shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Not included */}
      <section className="bg-[#1B2A45] py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-11 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="text-[11px] tracking-[0.32em] uppercase text-[#889A7C] font-[500] mb-5">
              Good to know
            </div>
            <h2 className="font-[family-name:var(--font-fraunces)] font-[500] text-[#F6F2E9] text-3xl md:text-4xl leading-[1.04] tracking-[-0.01em] mb-5">
              What membership does not cover.
            </h2>
            <p className="text-[#C9CDD3] text-[15px] leading-relaxed">
              Blooming Health is a primary care practice, not a substitute for insurance. We handle the day-to-day and the long-term. For specialists, hospitals, and everything beyond primary care, your existing insurance still applies — and we are glad to help coordinate.
            </p>
          </div>
          <div>
            <ul className="flex flex-col gap-4">
              {notIncluded.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[14px] text-[#C9CDD3] border-b border-[rgba(246,242,233,0.1)] pb-4">
                  <span className="mt-[5px] w-1.5 h-1.5 rounded-full border border-[#44597A] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F6F2E9] py-20 border-t border-[rgba(36,28,32,0.14)]">
        <div className="max-w-6xl mx-auto px-6 md:px-11 text-center">
          <h2 className="font-[family-name:var(--font-fraunces)] font-[400] text-[#4A2A43] text-4xl md:text-5xl leading-[1.04] tracking-[-0.015em] mb-6">
            Ready to get started?
          </h2>
          <p className="text-[#2B2329] text-[15px] max-w-md mx-auto mb-8">
            Start with a free introductory call. We will walk you through the model and answer any questions.
          </p>
          <Link
            href="/membership"
            className="inline-flex items-center justify-center bg-[#4A2A43] text-[#F6F2E9] text-[12px] tracking-[0.18em] uppercase font-[500] px-8 py-4 hover:bg-[#3a1f34] transition-colors duration-200"
          >
            See membership plans
          </Link>
        </div>
      </section>
    </>
  );
}
