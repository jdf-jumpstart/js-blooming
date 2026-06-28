import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description: "Blooming Health offers primary care and urgent care visits in Baltimore — covered under your annual membership.",
};

const primaryCare = [
  "Annual wellness and physical exams",
  "Preventive screenings and vaccinations",
  "Chronic disease management (diabetes, hypertension, thyroid, cholesterol, and more)",
  "Medication management and renewals",
  "Nutrition and lifestyle counseling",
  "Mental health screening and basic support",
  "Lab work coordination at reduced cost",
  "Specialist referral coordination",
  "Natural and lifestyle-first options explored before jumping to prescriptions",
  "Follow-up care and ongoing health planning",
];

const urgentCare = [
  "Strep throat testing and treatment",
  "Flu and COVID testing and treatment",
  "Ear infections",
  "Sinus and upper respiratory infections",
  "Urinary tract infections",
  "Minor lacerations and stitches",
  "Rashes and skin infections",
  "Minor injuries and sprains",
  "Pink eye and eye irritation",
];

const comingSoon = [
  "In-office lab draws",
  "Additional procedures (details to come)",
  "Extended wellness programs",
];

export default function Services() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#F6F2E9] py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 md:px-11">
          <div className="text-[11px] tracking-[0.32em] uppercase text-[#44597A] font-[500] mb-5">
            Services
          </div>
          <h1 className="font-[family-name:var(--font-fraunces)] font-[400] text-[#4A2A43] text-5xl md:text-6xl leading-[1.0] tracking-[-0.015em] mb-6 max-w-3xl">
            Primary care and urgent care — covered under your membership.
          </h1>
          <p className="font-[family-name:var(--font-cormorant)] font-[500] italic text-[#2B2329] text-xl md:text-2xl leading-[1.45] max-w-2xl">
            Up to 15 visits per year, same- or next-day, with no extra charges.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="bg-[#F6F2E9] py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-11 grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Primary care */}
          <div className="border border-[rgba(36,28,32,0.14)] rounded-md bg-[#F1EADD] p-8">
            <div className="text-[11px] tracking-[0.28em] uppercase text-[#44597A] font-[500] mb-2">Included</div>
            <h2 className="font-[family-name:var(--font-fraunces)] font-[500] text-[#1B2A45] text-2xl mb-6">
              Primary Care
            </h2>
            <p className="text-base text-[#2B2329] leading-relaxed mb-6">
              Your ongoing relationship with Avi. Wellness visits, chronic disease management, preventive care, and everything in between — with natural options and lifestyle solutions explored alongside conventional medicine.
            </p>
            <ul className="flex flex-col gap-2.5">
              {primaryCare.map((s) => (
                <li key={s} className="flex items-start gap-3 text-base text-[#2B2329]">
                  <span className="mt-[5px] w-1.5 h-1.5 rounded-full bg-[#889A7C] shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Urgent care */}
          <div className="flex flex-col gap-6">
            <div className="border border-[rgba(36,28,32,0.14)] rounded-md bg-[#F1EADD] p-8">
              <div className="text-[11px] tracking-[0.28em] uppercase text-[#44597A] font-[500] mb-2">Included</div>
              <h2 className="font-[family-name:var(--font-fraunces)] font-[500] text-[#1B2A45] text-2xl mb-6">
                Urgent Care
              </h2>
              <p className="text-base text-[#2B2329] leading-relaxed mb-6">
                When something comes up, you get seen — same day or next day, no separate urgent care copay. These visits count toward your 15 annual visits.
              </p>
              <ul className="flex flex-col gap-2.5">
                {urgentCare.map((s) => (
                  <li key={s} className="flex items-start gap-3 text-base text-[#2B2329]">
                    <span className="mt-[5px] w-1.5 h-1.5 rounded-full bg-[#889A7C] shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            {/* Coming soon */}
            <div className="border border-[rgba(36,28,32,0.14)] rounded-md bg-[#F6F2E9] p-8">
              <div className="text-[11px] tracking-[0.28em] uppercase text-[#889A7C] font-[500] mb-2">Coming soon</div>
              <h2 className="font-[family-name:var(--font-fraunces)] font-[500] text-[#1B2A45] text-2xl mb-5">
                More on the way.
              </h2>
              <p className="text-base text-[#44597A] leading-relaxed mb-5">
                We are starting focused and expanding thoughtfully. Additional services will be added as the practice grows.
              </p>
              <ul className="flex flex-col gap-2.5">
                {comingSoon.map((s) => (
                  <li key={s} className="flex items-start gap-3 text-base text-[#44597A]">
                    <span className="mt-[5px] w-1.5 h-1.5 rounded-full border border-[#889A7C] shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What we don't cover */}
      <section className="bg-[#1B2A45] py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-11 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="text-[11px] tracking-[0.32em] uppercase text-[#889A7C] font-[500] mb-5">
              Good to know
            </div>
            <h2 className="font-[family-name:var(--font-fraunces)] font-[500] text-[#F6F2E9] text-3xl md:text-4xl leading-[1.04] tracking-[-0.01em] mb-5">
              What membership does not cover.
            </h2>
            <p className="text-[#C9CDD3] text-base leading-relaxed">
              Blooming Health handles primary and urgent care. For anything beyond that — specialists, hospitals, imaging, surgeries — your existing insurance still applies. We are glad to help coordinate referrals and navigate the system.
            </p>
          </div>
          <ul className="flex flex-col gap-4">
            {[
              "Specialist care (billed through your insurance)",
              "Hospital and emergency room care",
              "Major surgeries",
              "Advanced imaging — MRI, CT scans (we help coordinate cost)",
              "Prescription medications (we help find lowest-cost options)",
              "Mental health therapy beyond basic counseling",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-base text-[#C9CDD3] border-b border-[rgba(246,242,233,0.1)] pb-4">
                <span className="mt-[5px] w-1.5 h-1.5 rounded-full border border-[#44597A] shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F6F2E9] py-20 border-t border-[rgba(36,28,32,0.14)]">
        <div className="max-w-6xl mx-auto px-6 md:px-11 text-center">
          <h2 className="font-[family-name:var(--font-fraunces)] font-[400] text-[#4A2A43] text-4xl md:text-5xl leading-[1.04] tracking-[-0.015em] mb-5">
            Ready to get started?
          </h2>
          <p className="text-[#2B2329] text-base max-w-md mx-auto mb-8">
            Reach out and we will talk through whether the practice is a good fit.
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
