import type { Metadata } from "next";
import Link from "next/link";
import { FlowDivider, RingAccent } from "@/components/Motifs";

export const metadata: Metadata = {
  title: "What Is Concierge Care?",
  description: "Concierge care at Blooming Health combines membership-based access with your existing insurance: a flat monthly fee for direct access, and insurance for the cost of care.",
};

const differences = [
  {
    label: "Traditional care",
    items: [
      "8–12 minute appointments",
      "Weeks to get in for a routine visit",
      "Provider changes year to year",
      "Call a phone tree when something comes up",
      "Rushed, because the next patient is already waiting",
    ],
    dark: false,
  },
  {
    label: "Concierge care",
    items: [
      "30–60 minute appointments",
      "Same- or next-day when you need it",
      "Same provider, year after year",
      "Text or call your provider directly",
      "Unhurried, because the time is actually yours",
    ],
    dark: true,
  },
];

const myths = [
  {
    myth: "Concierge care replaces health insurance.",
    truth: "Membership works alongside your insurance, not instead of it. Insurance covers the cost of visits, labs, and referrals; membership is what gets you direct access to your provider.",
  },
  {
    myth: "Concierge care is only for wealthy people.",
    truth: "At $100/month, it costs less than most gym memberships, on top of the insurance you likely already have.",
  },
  {
    myth: "It's just glorified telehealth.",
    truth: "Telehealth is one piece of it. Concierge care means an ongoing relationship with one provider, in-person visits when you need them, and direct access between appointments, not just a video call when something's wrong.",
  },
  {
    myth: "You still have to wait for appointments.",
    truth: "Concierge providers carry a fraction of the patient panel of a traditional practice. Same-day and next-day access is the norm, not the exception.",
  },
];

export default function WhatIsConciergeCare() {
  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden bg-[#F6F2E9] py-20 md:py-28">
        <div className="relative max-w-6xl mx-auto px-6 md:px-11">
          <h1 className="font-[family-name:var(--font-fraunces)] font-[400] text-[#1B2A45] text-4xl sm:text-5xl md:text-7xl leading-[1.0] tracking-[-0.015em] mb-8 max-w-4xl">
            What is concierge care?
          </h1>
          <p className="text-[#2B2329] text-base md:text-lg leading-relaxed max-w-2xl">
            Concierge care is a membership model for primary care. You pay a flat monthly fee. In return, you get a real relationship with a provider who has time for you, and direct access when something comes up.
          </p>
        </div>
        <FlowDivider fill="#4A2A43" />
      </section>

      {/* The simple version */}
      <section className="relative overflow-hidden bg-[#4A2A43] py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-11 grid grid-cols-1 md:grid-cols-2 gap-14 items-start">
          <div>
            <h2 className="font-[family-name:var(--font-fraunces)] font-[500] text-[#F6F2E9] text-3xl md:text-4xl leading-[1.04] tracking-[-0.01em] mb-6">
              Primary care built around access, not volume
            </h2>
            <p className="text-[#C9CDD3] text-base leading-relaxed mb-4">
              In the traditional model, your provider is paid per visit — by your insurance company. That creates pressure to see as many patients as possible. The result: shorter appointments, longer wait times, and a provider who barely knows your name.
            </p>
            <p className="text-[#C9CDD3] text-base leading-relaxed mb-4">
              Concierge care flips the incentive. Your provider charges a flat membership fee on top of billing insurance, and deliberately keeps the patient panel small. That extra time translates into longer appointments, same-day access, and a real relationship built over years.
            </p>
            <p className="text-[#C9CDD3] text-base leading-relaxed">
              Your insurance still covers the cost of visits. Membership is what gets you the access: reaching your provider directly by text or phone between appointments, without going through a call center.
            </p>
          </div>
          <div className="bg-[#1B2A45] rounded-md p-8 flex flex-col gap-6">
            {[
              { step: "1", heading: "Pay a flat monthly fee", body: "For direct access to your provider. Insurance covers the cost of visits, labs, and referrals like it normally would." },
              { step: "2", heading: "Get a provider who knows you", body: "Longer appointments, fewer patients per panel, and the same face every time — not whoever happened to be available." },
              { step: "3", heading: "Reach them when you need it", body: "Direct line to your provider by text or phone. No portal, no phone tree, no waiting three days for a callback." },
            ].map((s) => (
              <div key={s.step} className="flex gap-5">
                <div className="font-[family-name:var(--font-fraunces)] text-[#C9CDD3] text-2xl leading-none shrink-0 mt-0.5">
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
        <FlowDivider fill="#F1EADD" />
      </section>

      {/* Side by side comparison */}
      <section className="relative overflow-hidden bg-[#F1EADD] py-16 md:py-24">
        <RingAccent
          tone="plum"
          className="pointer-events-none absolute -left-12 -top-8 hidden h-52 w-52 lg:block"
        />
        <div className="relative max-w-6xl mx-auto px-6 md:px-11">
          <h2 className="font-[family-name:var(--font-fraunces)] font-[500] text-[#1B2A45] text-3xl md:text-4xl leading-[1.04] tracking-[-0.01em] mb-12 max-w-xl">
            What changes when you leave the traditional model
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
                <div className={`text-[12px] tracking-[0.28em] uppercase font-[500] mb-6 ${col.dark ? "text-[#C9CDD3]" : "text-[#44597A]"}`}>
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
                      <span className={`mt-[7px] w-1.5 h-1.5 rounded-full shrink-0 ${col.dark ? "bg-[#C9CDD3]" : "border border-[rgba(36,28,32,0.3)]"}`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link
              href="/membership"
              className="inline-flex items-center text-[12px] tracking-[0.18em] uppercase font-[500] text-[#44597A] hover:text-[#1B2A45] transition-colors duration-200"
            >
              See membership plans →
            </Link>
          </div>
        </div>
        <FlowDivider fill="#F6F2E9" />
      </section>

      {/* Common myths */}
      <section className="relative overflow-hidden bg-[#F6F2E9] py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-11">
          <h2 className="font-[family-name:var(--font-fraunces)] font-[500] text-[#1B2A45] text-3xl md:text-4xl leading-[1.04] tracking-[-0.01em] mb-12 max-w-xl">
            Things people get wrong about concierge care
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {myths.map((m) => (
              <div key={m.myth} className="border-l-2 border-[#4A2A43] pl-6">
                <p className="font-[family-name:var(--font-fraunces)] font-[500] text-[#4A2A43] text-[17px] mb-3 line-through decoration-[#C9CDD3]">
                  {m.myth}
                </p>
                <p className="text-base text-[#2B2329] leading-relaxed">{m.truth}</p>
              </div>
            ))}
          </div>
        </div>
        <FlowDivider fill="#1B2A45" />
      </section>

      {/* What concierge care doesn't cover */}
      <section className="relative overflow-hidden bg-[#1B2A45] py-16 md:py-24">
        <div className="relative max-w-6xl mx-auto px-6 md:px-11 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="font-[family-name:var(--font-fraunces)] font-[500] text-[#F6F2E9] text-3xl md:text-4xl leading-[1.04] tracking-[-0.01em] mb-5">
              Concierge care is not a replacement for insurance.
            </h2>
            <p className="text-[#C9CDD3] text-base leading-relaxed">
              Membership gets you direct access to your provider: phone, text, after-hours availability, and priority scheduling. Insurance is what covers the cost of your visits, labs, and referrals, in primary care and beyond. Most members keep the insurance plan they already have.
            </p>
          </div>
          <ul className="flex flex-col gap-4 mt-2">
            {[
              { covered: false, label: "Visits, labs, and referrals, billed through your insurance" },
              { covered: false, label: "Specialist care, billed through your insurance as normal" },
              { covered: false, label: "Emergency room and hospital stays" },
              { covered: false, label: "Major surgeries and advanced imaging (we help coordinate)" },
              { covered: true, label: "Direct access to your provider, any time" },
              { covered: true, label: "After-hours availability and priority scheduling" },
              { covered: true, label: "A small patient panel and real appointment time" },
            ].map((item) => (
              <li key={item.label} className={`flex items-start gap-3 text-base pb-4 border-b border-[rgba(246,242,233,0.08)] last:border-0 last:pb-0 ${item.covered ? "text-[#C9CDD3]" : "text-[rgba(201,205,211,0.5)]"}`}>
                <span className={`mt-[7px] w-1.5 h-1.5 rounded-full shrink-0 ${item.covered ? "bg-[#C9CDD3]" : "border border-[#44597A]"}`} />
                {item.label}
              </li>
            ))}
          </ul>
        </div>
        <FlowDivider fill="#F6F2E9" />
      </section>

      {/* Who it's for */}
      <section className="relative overflow-hidden bg-[#F6F2E9] py-16 md:py-24">
        <RingAccent
          tone="plum"
          className="pointer-events-none absolute -right-10 top-10 hidden h-48 w-48 lg:block"
        />
        <div className="relative max-w-6xl mx-auto px-6 md:px-11">
          <h2 className="font-[family-name:var(--font-fraunces)] font-[500] text-[#1B2A45] text-3xl md:text-4xl leading-[1.04] tracking-[-0.01em] mb-12 max-w-xl">
            Concierge care works best when primary care actually matters to you.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "People tired of being rushed", body: "If you have ever left an appointment with half your questions unanswered, concierge care is built for you." },
              { title: "Those managing chronic conditions", body: "Diabetes, hypertension, thyroid, cholesterol — ongoing management works better with a provider who knows your full picture." },
              { title: "Families who want continuity", body: "The same provider over years. Someone who knows your history, your kids, and what actually matters to your household." },
              { title: "Self-employed and between plans", body: "Membership keeps you connected to consistent primary care while you sort out longer-term coverage, with self-pay options for visits in the meantime." },
              { title: "Health-conscious adults", body: "If you think about prevention, lifestyle, and natural options, concierge care gives you a provider who thinks the same way." },
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
        <FlowDivider fill="#4A2A43" />
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#4A2A43] py-20 md:py-28">
        <div className="relative max-w-6xl mx-auto px-6 md:px-11 text-center">
          <h2 className="font-[family-name:var(--font-fraunces)] font-[400] text-[#F6F2E9] text-4xl md:text-5xl lg:text-6xl leading-[1.04] tracking-[-0.015em] mb-8 max-w-3xl mx-auto">
            This is the model we practice.
          </h2>
          <p className="text-[#C9CDD3] text-base max-w-lg mx-auto mb-10 leading-relaxed">
            Blooming Health is a concierge care practice in Baltimore. Avi Blumenthal, NP sees a small panel of patients, spends real time with each one, and is reachable directly when something comes up.
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
