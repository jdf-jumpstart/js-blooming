import type { Metadata } from "next";
import Link from "next/link";
import { FlowDivider, RingAccent } from "@/components/Motifs";

export const metadata: Metadata = {
  title: "Services",
  description: "Blooming Health offers primary care and urgent care visits in Baltimore, with direct provider access through membership.",
};

const primaryCare = [
  "Annual wellness exams and physicals",
  "Health screenings: blood pressure, cholesterol, diabetes, certain cancers",
  "Vaccinations",
  "Lifestyle counseling: nutrition, exercise, smoking and alcohol use",
  "Weight management, including GLP-1 medications when appropriate (lifestyle-first approach)",
  "Diagnosis and treatment of acute illness: colds, flu, sinus infections, ear infections",
  "Chronic disease management: diabetes, high blood pressure, asthma, cholesterol, heart disease",
  "Routine labs and testing, collected in-office",
  "Medication management: prescribing, refills, and monitoring, with the most affordable options like GoodRx",
  "Care coordination: specialist referrals, explaining results in plain terms, follow-up care",
  "Mental health counseling, with referral to a specialist when needed",
  "Telehealth visits",
  "Pre-op clearances, school forms, camp forms, and CDL licensing",
];

const urgentCare = [
  "Strep throat, flu, and COVID testing and treatment",
  "Ear infections and ear lavage",
  "Sinus and upper respiratory infections",
  "Urinary tract infections and urinalysis",
  "Minor lacerations, stitches, and wound care",
  "Abscess treatment and foreign body removal",
  "Minor burns and drainage of blood beneath the nail",
  "Rashes, skin infections, and allergic reactions",
  "Minor injuries and sprains",
  "Pink eye and eye irritation",
];

const comingSoon = [
  "Expanded specialist referral network",
  "Additional in-office procedures",
  "Extended wellness programs",
];

export default function Services() {
  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden bg-[#FAF8F3] py-20 md:py-28">
        <div className="relative max-w-6xl mx-auto px-6 md:px-11">
          <h1 className="font-[family-name:var(--font-fraunces)] font-[400] text-[#1B2A45] text-[40px] sm:text-[52px] md:text-[64px] leading-[1.0] tracking-[-0.015em] mb-6 max-w-3xl">
            Primary care and urgent care, with direct access to your provider
          </h1>
          <p className="font-[family-name:var(--font-cormorant)] font-[500] italic text-[#2B2329] text-[24px] md:text-[28px] leading-[1.45] max-w-2xl">
            Visits are billed through your insurance. Membership adds same- or next-day scheduling priority and direct access between appointments.
          </p>
        </div>
        <FlowDivider fill="#1B2A45" />
      </section>

      {/* Services */}
      <section className="relative overflow-hidden bg-[#1B2A45] py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-11 grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Primary care */}
          <div className="border border-[rgba(36,28,32,0.14)] rounded-md bg-[#F5F1E8] p-8">
            <div className="text-[16px] tracking-[0.28em] uppercase text-[#44597A] font-[500] mb-2">Included</div>
            <h2 className="font-[family-name:var(--font-fraunces)] font-[500] text-[#1B2A45] text-[28px] mb-6">
              Primary Care
            </h2>
            <p className="text-[21px] text-[#2B2329] leading-relaxed mb-6">
              Your ongoing relationship with Avi. Wellness visits, chronic disease management, preventive care, and everything in between — with natural options and lifestyle solutions explored alongside conventional medicine.
            </p>
            <ul className="flex flex-col gap-2.5">
              {primaryCare.map((s) => (
                <li key={s} className="flex items-start gap-3 text-[21px] text-[#2B2329]">
                  <span className="mt-[calc((1.6em-0.375rem)/2)] w-1.5 h-1.5 rounded-full bg-[#44597A] shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Urgent care */}
          <div className="flex flex-col gap-6">
            <div className="border border-[rgba(36,28,32,0.14)] rounded-md bg-[#F5F1E8] p-8">
              <div className="text-[16px] tracking-[0.28em] uppercase text-[#44597A] font-[500] mb-2">Included</div>
              <h2 className="font-[family-name:var(--font-fraunces)] font-[500] text-[#1B2A45] text-[28px] mb-6">
                Urgent Care
              </h2>
              <p className="text-[21px] text-[#2B2329] leading-relaxed mb-6">
                When something comes up, you get seen (same day or next day, priority over the general schedule). Visits are billed through your insurance like any other appointment.
              </p>
              <ul className="flex flex-col gap-2.5">
                {urgentCare.map((s) => (
                  <li key={s} className="flex items-start gap-3 text-[21px] text-[#2B2329]">
                    <span className="mt-[calc((1.6em-0.375rem)/2)] w-1.5 h-1.5 rounded-full bg-[#44597A] shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            {/* Coming soon */}
            <div className="border border-[rgba(36,28,32,0.14)] rounded-md bg-[#FAF8F3] p-8">
              <div className="text-[16px] tracking-[0.28em] uppercase text-[#44597A] font-[500] mb-2">Coming soon</div>
              <h2 className="font-[family-name:var(--font-fraunces)] font-[500] text-[#1B2A45] text-[28px] mb-5">
                More on the way.
              </h2>
              <p className="text-[21px] text-[#44597A] leading-relaxed mb-5">
                We are starting focused and expanding thoughtfully. Additional services will be added as the practice grows.
              </p>
              <ul className="flex flex-col gap-2.5">
                {comingSoon.map((s) => (
                  <li key={s} className="flex items-start gap-3 text-[21px] text-[#44597A]">
                    <span className="mt-[calc((1.6em-0.375rem)/2)] w-1.5 h-1.5 rounded-full border border-[#44597A] shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 md:px-11 mt-10">
          <Link
            href="/membership"
            className="inline-flex items-center text-[16px] tracking-[0.18em] uppercase font-[500] text-[#C9CDD3] hover:text-[#FAF8F3] transition-colors duration-200"
          >
            See membership plans →
          </Link>
        </div>
        <FlowDivider fill="#FAF8F3" />
      </section>

      {/* What we don't cover */}
      <section className="relative overflow-hidden bg-[#FAF8F3] py-16 md:py-24">
        <div className="relative max-w-6xl mx-auto px-6 md:px-11 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="font-[family-name:var(--font-fraunces)] font-[500] text-[#4A2A43] text-[34px] md:text-[40px] leading-[1.04] tracking-[-0.01em] mb-5">
              What falls outside our scope.
            </h2>
            <p className="text-[#2B2329] text-[21px] leading-relaxed mb-6">
              Blooming Health handles primary and urgent care, and visits are billed through your insurance like they would be anywhere else. Some things fall outside what we do entirely. For those, we will refer you to the right specialist and help coordinate care.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center text-[16px] tracking-[0.18em] uppercase font-[500] text-[#44597A] hover:text-[#4A2A43] transition-colors duration-200"
            >
              Talk to us about your case →
            </Link>
          </div>
          <ul className="flex flex-col gap-4">
            {[
              "Hospital and emergency room care",
              "Major surgeries",
              "Advanced imaging like MRI and CT scans (we refer and help coordinate)",
              "Women's gynecological exams and Pap smears",
              "Skin biopsies, mole removal, cryotherapy, and certain nail procedures (e.g., ingrown toenails)",
              "Testosterone therapy and other men's health treatment (not currently offered)",
              "Cosmetic procedures",
              "Mental health therapy beyond counseling (we refer to a specialist)",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-[21px] text-[#2B2329] border-b border-[rgba(36,28,32,0.1)] pb-4">
                <span className="mt-[calc((1.6em-0.375rem)/2)] w-1.5 h-1.5 rounded-full border border-[#44597A] shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <FlowDivider fill="#FAF8F3" />
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#FAF8F3] py-20 border-t border-[rgba(36,28,32,0.14)]">
        <RingAccent
          tone="plum"
          className="pointer-events-none absolute -top-6 right-6 hidden h-40 w-40 md:block"
        />
        <div className="relative max-w-6xl mx-auto px-6 md:px-11 text-center">
          <h2 className="font-[family-name:var(--font-fraunces)] font-[400] text-[#1B2A45] text-[40px] md:text-[52px] leading-[1.04] tracking-[-0.015em] mb-5">
            Ready to get started?
          </h2>
          <p className="text-[#2B2329] text-[21px] max-w-md mx-auto mb-8">
            Reach out and we will talk through whether the practice is a good fit.
          </p>
          <Link
            href="/membership"
            className="inline-flex items-center justify-center bg-[#1B2A45] text-[#FAF8F3] text-[16px] tracking-[0.18em] uppercase font-[500] px-8 py-4 hover:bg-[#162237] transition-colors duration-200"
          >
            See membership plans
          </Link>
        </div>
      </section>
    </>
  );
}
