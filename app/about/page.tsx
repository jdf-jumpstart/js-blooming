import type { Metadata } from "next";
import Link from "next/link";
import { BloomMotif, FlowDivider, RingAccent } from "@/components/Motifs";

export const metadata: Metadata = {
  title: "About",
  description: "Meet Avi, the NP behind Blooming Health — and learn why we built a practice around relationship-based, natural-first primary care in Baltimore.",
};

const values = [
  {
    title: "Collaboration",
    body: "Every decision is made with you, not for you. You bring the context. We bring the medicine. Together we find the right path forward.",
  },
  {
    title: "Patient Autonomy",
    body: "You set the direction. We give you the information and support to get there. This is your health, and our role is to help you understand it clearly.",
  },
  {
    title: "Natural first",
    body: "Medications have their place. But so do nutrition, movement, sleep, and lifestyle change. We explore all the options and recommend the one that makes the most sense for you.",
  },
  {
    title: "Access",
    body: "Your provider's personal number. Text or call when something comes up. No phone tree, no portal message that gets answered in three days.",
  },
  {
    title: "Prevention",
    body: "The model bets on catching things early and building health over time, not just treating what's already wrong.",
  },
  {
    title: "Trust",
    body: "The same NP over years, who knows your history, your family, and what matters to you. That relationship is the foundation of everything.",
  },
];

export default function About() {
  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden bg-[#F6F2E9] py-20 md:py-28">
        <BloomMotif
          tone="plum"
          className="pointer-events-none absolute -right-10 top-2 hidden h-52 w-52 lg:block"
        />
        <div className="relative max-w-6xl mx-auto px-6 md:px-11">
          <h1 className="font-[family-name:var(--font-fraunces)] font-[400] text-[#1B2A45] text-4xl sm:text-5xl md:text-6xl leading-[1.0] tracking-[-0.015em] mb-6 max-w-3xl">
            Primary care as a relationship, not a transaction.
          </h1>
          <p className="font-[family-name:var(--font-cormorant)] font-[500] italic text-[#2B2329] text-xl md:text-2xl leading-[1.45] max-w-2xl">
            We built Blooming Health around one idea: that a meaningful relationship between patient and provider changes everything.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="relative overflow-hidden bg-[#F6F2E9] py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-11 grid grid-cols-1 md:grid-cols-2 gap-14">
          <div>
            <h2 className="font-[family-name:var(--font-fraunces)] font-[500] text-[#1B2A45] text-3xl md:text-4xl leading-[1.04] tracking-[-0.01em] mb-5">
              Collaborating your health.
            </h2>
            <p className="text-[#2B2329] text-base leading-relaxed mb-5">
              Most primary care visits run about ten minutes. That's not enough time to understand a person, let alone their full health picture. Blooming Health was built to fix that.
            </p>
            <p className="text-[#2B2329] text-base leading-relaxed mb-5">
              We see fewer patients, spend more time with each one, and actually listen. When something needs attention, we look at all the options (natural and lifestyle-based approaches, not just a prescription) and figure out together what makes the most sense for you.
            </p>
            <p className="text-[#2B2329] text-base leading-relaxed">
              The result is primary care that feels less like a system and more like a relationship. That's the whole point.
            </p>
          </div>
          <div className="bg-[#F1EADD] border border-[rgba(36,28,32,0.14)] rounded-md p-8 flex flex-col justify-center">
            <ul className="flex flex-col gap-4">
              {[
                "Long appointments (time to actually talk)",
                "Direct access to your provider, not a call center",
                "Natural options explored alongside conventional medicine",
                "Same- or next-day care when something comes up",
                "An NP who knows you and your history",
                "Decisions made with you, not for you",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-base text-[#2B2329] pb-4 border-b border-[rgba(36,28,32,0.1)] last:border-0 last:pb-0">
                  <span className="mt-[5px] w-1.5 h-1.5 rounded-full bg-[#889A7C] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <FlowDivider fill="#1B2A45" />
      </section>

      {/* Meet Avi */}
      <section className="relative overflow-hidden bg-[#1B2A45] py-16 md:py-24">
        <BloomMotif
          tone="sage"
          className="pointer-events-none absolute -left-14 -bottom-14 hidden h-64 w-64 lg:block"
        />
        <div className="relative max-w-6xl mx-auto px-6 md:px-11 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          <div>
            <h2 className="font-[family-name:var(--font-fraunces)] font-[500] text-[#F6F2E9] text-3xl md:text-4xl leading-[1.04] tracking-[-0.01em] mb-2">
              Avi Blumenthal, NP
            </h2>
            <p className="text-[#889A7C] text-[13px] tracking-[0.1em] uppercase mb-7">
              Founder & NP
            </p>
            <p className="text-[#C9CDD3] text-base leading-relaxed mb-4">
              Avi brings 11 years of healthcare experience to Blooming Health, and a genuine love for helping people — especially when it comes to their health.
            </p>
            <p className="text-[#C9CDD3] text-base leading-relaxed mb-4">
              Outside the practice, he's the father of six, which has a way of sharpening your perspective on what actually matters in a family&apos;s health. He stays active, keeps learning, and plays guitar — badly enough to keep him humble, well enough to enjoy it.
            </p>
            <p className="text-[#C9CDD3] text-base leading-relaxed mb-6">
              What drives him is the relationship. Not the paperwork. Not the billing codes. The part where you actually sit down with a person, understand what they're dealing with, and help them figure out what to do about it.
            </p>
            <Link
              href="/membership"
              className="inline-flex items-center text-[12px] tracking-[0.18em] uppercase font-[500] text-[#889A7C] hover:text-[#F6F2E9] transition-colors duration-200"
            >
              See how membership works →
            </Link>
          </div>
          <div className="bg-[rgba(246,242,233,0.06)] border border-[rgba(246,242,233,0.12)] rounded-md aspect-[4/5] flex items-center justify-center">
            <div className="text-center p-8">
              <div className="w-24 h-24 rounded-full bg-[rgba(136,154,124,0.2)] border border-[#889A7C] mx-auto mb-5 flex items-center justify-center">
                <span className="font-[family-name:var(--font-fraunces)] text-[#889A7C] text-3xl">A</span>
              </div>
              <div className="text-[12px] tracking-[0.24em] uppercase text-[#C9CDD3]">
                Photo coming soon
              </div>
            </div>
          </div>
        </div>
        <FlowDivider fill="#F6F2E9" />
      </section>

      {/* Values */}
      <section className="relative overflow-hidden bg-[#F6F2E9] py-16 md:py-24">
        <RingAccent
          tone="plum"
          className="pointer-events-none absolute -right-10 top-10 hidden h-48 w-48 lg:block"
        />
        <div className="relative max-w-6xl mx-auto px-6 md:px-11">
          <h2 className="font-[family-name:var(--font-fraunces)] font-[500] text-[#1B2A45] text-3xl md:text-4xl leading-[1.04] tracking-[-0.01em] mb-12 max-w-xl">
            The principles behind the practice.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-[#F1EADD] border border-[rgba(36,28,32,0.14)] rounded-md p-7">
                <h3 className="font-[family-name:var(--font-fraunces)] font-[500] text-[#1B2A45] text-xl mb-3">
                  {v.title}
                </h3>
                <p className="text-base text-[#2B2329] leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F6F2E9] py-20">
        <div className="max-w-6xl mx-auto px-6 md:px-11 text-center">
          <h2 className="font-[family-name:var(--font-fraunces)] font-[400] text-[#1B2A45] text-4xl md:text-5xl leading-[1.04] tracking-[-0.015em] mb-5 max-w-xl mx-auto">
            Come as a patient. Stay for the relationship.
          </h2>
          <p className="text-[#2B2329] text-base max-w-md mx-auto mb-8">
            Reach out to learn more or to set up a free introductory call with Avi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/membership"
              className="inline-flex items-center justify-center bg-[#1B2A45] text-[#F6F2E9] text-[12px] tracking-[0.18em] uppercase font-[500] px-8 py-4 hover:bg-[#162237] transition-colors duration-200"
            >
              See membership plans
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border border-[rgba(36,28,32,0.2)] text-[#2B2329] text-[12px] tracking-[0.18em] uppercase font-[500] px-8 py-4 hover:border-[#1B2A45] hover:text-[#1B2A45] transition-colors duration-200"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
