import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What Is Direct Primary Care?",
  description: "Direct primary care (DPC) is a membership model that replaces the traditional insurance-based visit with a flat monthly fee and a real relationship with your provider.",
};

const differences = [
  {
    label: "Traditional care",
    items: [
      "8–12 minute appointments",
      "Weeks to get in for a routine visit",
      "Provider changes year to year",
      "Billed through insurance for every visit",
      "Call a phone tree when something comes up",
      "Rushed — next patient is already waiting",
    ],
    dark: false,
  },
  {
    label: "Direct primary care",
    items: [
      "30–60 minute appointments",
      "Same- or next-day when you need it",
      "Same provider, year after year",
      "Flat monthly fee — no per-visit billing",
      "Text or call your provider directly",
      "Unhurried — the time is actually yours",
    ],
    dark: true,
  },
];

const myths = [
  {
    myth: "DPC replaces health insurance.",
    truth: "It replaces the need for insurance in primary care — not for specialists, hospitals, or emergencies. Most members keep a plan for anything beyond primary care.",
  },
  {
    myth: "DPC is only for wealthy people.",
    truth: "At $100/month, it costs less than most gym memberships. Many members drop expensive plans and pair DPC with a high-deductible plan and an HSA.",
  },
  {
    myth: "It's the same as concierge medicine.",
    truth: "Concierge practices layer a fee on top of insurance billing. DPC drops insurance billing entirely — the membership is the only fee.",
  },
  {
    myth: "You still have to wait for appointments.",
    truth: "DPC providers carry a fraction of the patient panel of a traditional practice. Same-day and next-day access is the norm, not the exception.",
  },
];

export default function WhatIsDPC() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#F6F2E9] py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 md:px-11">
          <div className="text-[11px] tracking-[0.32em] uppercase text-[#44597A] font-[500] mb-5">
            The model
          </div>
          <h1 className="font-[family-name:var(--font-fraunces)] font-[400] text-[#4A2A43] text-5xl md:text-7xl leading-[1.0] tracking-[-0.015em] mb-8 max-w-4xl">
            What is direct primary care?
          </h1>
          <p className="text-[#2B2329] text-base md:text-lg leading-relaxed max-w-2xl">
            Direct primary care (DPC) is a membership model for primary care. You pay a flat monthly fee. In return, you get a real relationship with a provider who has time for you, and direct access when something comes up.
          </p>
        </div>
      </section>

      {/* The simple version */}
      <section className="bg-[#F6F2E9] py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-11 grid grid-cols-1 md:grid-cols-2 gap-14 items-start">
          <div>
            <div className="text-[11px] tracking-[0.32em] uppercase text-[#44597A] font-[500] mb-5">
              The short version
            </div>
            <h2 className="font-[family-name:var(--font-fraunces)] font-[500] text-[#4A2A43] text-3xl md:text-4xl leading-[1.04] tracking-[-0.01em] mb-6">
              Primary care without the insurance middleman.
            </h2>
            <p className="text-[#2B2329] text-base leading-relaxed mb-4">
              In the traditional model, your provider is paid per visit — by your insurance company. That creates pressure to see as many patients as possible. The result: shorter appointments, longer wait times, and a provider who barely knows your name.
            </p>
            <p className="text-[#2B2329] text-base leading-relaxed mb-4">
              DPC flips the incentive. Instead of billing insurance, your provider charges a flat monthly fee and sees far fewer patients. That extra time translates into longer appointments, same-day access, and a real relationship built over years.
            </p>
            <p className="text-[#2B2329] text-base leading-relaxed">
              The membership covers all your primary care visits. Between appointments, you can reach your provider directly — by text or phone — without going through a call center.
            </p>
          </div>
          <div className="bg-[#1B2A45] rounded-md p-8 flex flex-col gap-6">
            <div className="text-[11px] tracking-[0.32em] uppercase text-[#889A7C] font-[500]">
              How it works
            </div>
            {[
              { step: "1", heading: "Pay a flat monthly fee", body: "No copays. No per-visit billing. No surprise charges. One number covers all your primary care." },
              { step: "2", heading: "Get a provider who knows you", body: "Longer appointments, fewer patients per panel, and the same face every time — not whoever happened to be available." },
              { step: "3", heading: "Reach them when you need it", body: "Direct line to your provider by text or phone. No portal, no phone tree, no waiting three days for a callback." },
            ].map((s) => (
              <div key={s.step} className="flex gap-5">
                <div className="font-[family-name:var(--font-fraunces)] text-[#889A7C] text-2xl leading-none shrink-0 mt-0.5">
                  {s.step}
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-fraunces)] font-[500] text-[#F6F2E9] text-[18px] mb-1">
                    {s.heading}
                  </h3>
                  <p className="text-[#C9CDD3] text-base leading-relaxed">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Side by side comparison */}
      <section className="bg-[#F1EADD] py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-11">
          <div className="text-[11px] tracking-[0.32em] uppercase text-[#44597A] font-[500] mb-5">
            Side by side
          </div>
          <h2 className="font-[family-name:var(--font-fraunces)] font-[500] text-[#4A2A43] text-3xl md:text-4xl leading-[1.04] tracking-[-0.01em] mb-12 max-w-xl">
            What changes when you leave the traditional model.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {differences.map((col) => (
              <div
                key={col.label}
                className={`rounded-md border p-8 ${
                  col.dark
                    ? "bg-[#1B2A45] border-[rgba(246,242,233,0.12)]"
                    : "bg-[#F6F2E9] border-[rgba(36,28,32,0.14)]"
                }`}
              >
                <div className={`text-[11px] tracking-[0.28em] uppercase font-[500] mb-6 ${col.dark ? "text-[#889A7C]" : "text-[#44597A]"}`}>
                  {col.label}
                </div>
                <ul className="flex flex-col gap-4">
                  {col.items.map((item) => (
                    <li
                      key={item}
                      className={`flex items-start gap-3 text-base pb-4 border-b last:border-0 last:pb-0 ${
                        col.dark
                          ? "text-[#C9CDD3] border-[rgba(246,242,233,0.08)]"
                          : "text-[#2B2329] border-[rgba(36,28,32,0.08)]"
                      }`}
                    >
                      <span className={`mt-[7px] w-1.5 h-1.5 rounded-full shrink-0 ${col.dark ? "bg-[#889A7C]" : "border border-[rgba(36,28,32,0.3)]"}`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common myths */}
      <section className="bg-[#F6F2E9] py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-11">
          <div className="text-[11px] tracking-[0.32em] uppercase text-[#44597A] font-[500] mb-5">
            Common questions
          </div>
          <h2 className="font-[family-name:var(--font-fraunces)] font-[500] text-[#4A2A43] text-3xl md:text-4xl leading-[1.04] tracking-[-0.01em] mb-12 max-w-xl">
            Things people get wrong about DPC.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {myths.map((m) => (
              <div key={m.myth} className="border-l-2 border-[#889A7C] pl-6">
                <p className="font-[family-name:var(--font-fraunces)] font-[500] text-[#4A2A43] text-[17px] mb-3 line-through decoration-[#C9CDD3]">
                  {m.myth}
                </p>
                <p className="text-base text-[#2B2329] leading-relaxed">{m.truth}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What DPC doesn't cover */}
      <section className="bg-[#1B2A45] py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-11 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="text-[11px] tracking-[0.32em] uppercase text-[#889A7C] font-[500] mb-5">
              Good to know
            </div>
            <h2 className="font-[family-name:var(--font-fraunces)] font-[500] text-[#F6F2E9] text-3xl md:text-4xl leading-[1.04] tracking-[-0.01em] mb-5">
              DPC is not a replacement for insurance.
            </h2>
            <p className="text-[#C9CDD3] text-base leading-relaxed">
              Membership covers everything in the primary care lane — routine visits, chronic disease management, urgent care, and direct access to your provider. For anything beyond that, you still need coverage. Most DPC members pair their membership with a high-deductible health plan and an HSA, which often costs less combined than traditional insurance alone.
            </p>
          </div>
          <ul className="flex flex-col gap-4 mt-2">
            {[
              { covered: false, label: "Specialist care — billed through your insurance as normal" },
              { covered: false, label: "Emergency room and hospital stays" },
              { covered: false, label: "Major surgeries and procedures" },
              { covered: false, label: "Advanced imaging — MRI, CT (we help coordinate cost)" },
              { covered: true, label: "All primary and urgent care visits" },
              { covered: true, label: "Wholesale lab work at significantly reduced cost" },
              { covered: true, label: "Direct access to your provider, any time" },
            ].map((item) => (
              <li key={item.label} className={`flex items-start gap-3 text-base pb-4 border-b border-[rgba(246,242,233,0.08)] last:border-0 last:pb-0 ${item.covered ? "text-[#C9CDD3]" : "text-[#889A7C]"}`}>
                <span className={`mt-[7px] w-1.5 h-1.5 rounded-full shrink-0 ${item.covered ? "bg-[#889A7C]" : "border border-[#44597A]"}`} />
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Who it's for */}
      <section className="bg-[#F6F2E9] py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-11">
          <div className="text-[11px] tracking-[0.32em] uppercase text-[#44597A] font-[500] mb-5">
            Who it's for
          </div>
          <h2 className="font-[family-name:var(--font-fraunces)] font-[500] text-[#4A2A43] text-3xl md:text-4xl leading-[1.04] tracking-[-0.01em] mb-12 max-w-xl">
            DPC works best when primary care actually matters to you.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "People tired of being rushed", body: "If you have ever left an appointment with half your questions unanswered, DPC is built for you." },
              { title: "Those managing chronic conditions", body: "Diabetes, hypertension, thyroid, cholesterol — ongoing management works better with a provider who knows your full picture." },
              { title: "Families who want continuity", body: "The same provider over years. Someone who knows your history, your kids, and what actually matters to your household." },
              { title: "Self-employed and uninsured", body: "DPC paired with a catastrophic plan is often more affordable than traditional insurance, with far better primary care access." },
              { title: "Health-conscious adults", body: "If you think about prevention, lifestyle, and natural options — DPC gives you a provider who thinks the same way." },
              { title: "Anyone who has given up on primary care", body: "If you avoid the doctor because the experience is never worth it, this is the practice that changes that." },
            ].map((card) => (
              <div key={card.title} className="bg-[#F1EADD] border border-[rgba(36,28,32,0.14)] rounded-md p-7">
                <h3 className="font-[family-name:var(--font-fraunces)] font-[500] text-[#1B2A45] text-xl mb-3">
                  {card.title}
                </h3>
                <p className="text-base text-[#2B2329] leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#4A2A43] py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 md:px-11 text-center">
          <div className="text-[11px] tracking-[0.32em] uppercase text-[#889A7C] font-[500] mb-6">
            At Blooming Health
          </div>
          <h2 className="font-[family-name:var(--font-fraunces)] font-[400] text-[#F6F2E9] text-4xl md:text-5xl lg:text-6xl leading-[1.04] tracking-[-0.015em] mb-8 max-w-3xl mx-auto">
            This is the model we practice.
          </h2>
          <p className="text-[#C9CDD3] text-base max-w-lg mx-auto mb-10 leading-relaxed">
            Blooming Health is a DPC practice in Baltimore. Avi Blumenthal, NP sees a small panel of patients, spends real time with each one, and is reachable directly when something comes up.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/membership"
              className="inline-flex items-center justify-center bg-[#F6F2E9] text-[#4A2A43] text-[12px] tracking-[0.18em] uppercase font-[500] px-8 py-4 hover:bg-[#F1EADD] transition-colors duration-200"
            >
              See membership plans
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border border-[rgba(246,242,233,0.4)] text-[#F6F2E9] text-[12px] tracking-[0.18em] uppercase font-[500] px-8 py-4 hover:border-[#F6F2E9] transition-colors duration-200"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
