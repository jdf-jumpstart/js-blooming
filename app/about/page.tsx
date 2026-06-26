import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "The story behind Blooming Health — a concierge primary care practice in Baltimore built on the idea that good medicine takes time.",
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
    title: "Education",
    body: "We explain things the way a good doctor explains them across a table — plainly, honestly, and without the jargon. You leave each visit more informed than you arrived.",
  },
  {
    title: "Access",
    body: "A direct line to your physician. Text, call, or email — with a response you can count on. Not a call center, not a portal, not a stranger.",
  },
  {
    title: "Prevention",
    body: "The model bets on catching things early and building health over time. Not just treating what is already wrong.",
  },
  {
    title: "Trust",
    body: "The same physician over years, who knows your history, your family, and what matters to you. That relationship is the foundation of everything.",
  },
];

export default function About() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#F6F2E9] border-b border-[rgba(36,28,32,0.14)] py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 md:px-11">
          <div className="text-[11px] tracking-[0.32em] uppercase text-[#44597A] font-[500] mb-5">
            About
          </div>
          <h1 className="font-[family-name:var(--font-fraunces)] font-[400] text-[#4A2A43] text-5xl md:text-6xl leading-[1.0] tracking-[-0.015em] mb-6 max-w-3xl">
            Built by people who got tired of watching medicine get rushed.
          </h1>
          <p className="font-[family-name:var(--font-cormorant)] font-[500] italic text-[#2B2329] text-xl md:text-2xl leading-[1.45] max-w-2xl">
            The founding frustration was simple: short visits, no real access, and patients leaving the room feeling unheard.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="bg-[#F6F2E9] border-b border-[rgba(36,28,32,0.14)] py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-11 grid grid-cols-1 md:grid-cols-2 gap-14">
          <div>
            <div className="text-[11px] tracking-[0.32em] uppercase text-[#44597A] font-[500] mb-5">
              The story
            </div>
            <h2 className="font-[family-name:var(--font-fraunces)] font-[500] text-[#4A2A43] text-3xl md:text-4xl leading-[1.04] tracking-[-0.01em] mb-5">
              A new kind of practice.
            </h2>
            <p className="text-[#2B2329] text-[15px] leading-relaxed mb-5">
              Blooming Health is a concierge primary care practice in the Baltimore area, built by people who got tired of watching medicine get rushed. The founding frustration was simple: short visits, no real access, and patients leaving the room feeling unheard.
            </p>
            <p className="text-[#2B2329] text-[15px] leading-relaxed mb-5">
              The model flips that on its head. Fewer patients, longer visits, and a direct line to your physician — who works as a guide helping you make informed decisions, not a figure dictating them.
            </p>
            <p className="text-[#2B2329] text-[15px] leading-relaxed">
              Care here is evidence-based, and it pairs real medicine with the practical things that actually move health over a lifetime: nutrition, movement, prevention, and steady habits.
            </p>
          </div>
          <div className="bg-[#F1EADD] border border-[rgba(36,28,32,0.14)] rounded-md p-8 flex flex-col justify-center">
            <div className="text-[11px] tracking-[0.32em] uppercase text-[#44597A] font-[500] mb-5">
              What this is not
            </div>
            <ul className="flex flex-col gap-4">
              {[
                "Not functional medicine",
                "Not alternative medicine",
                "Not a spa or wellness center",
                "Not a replacement for insurance",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-[14.5px] text-[#2B2329] pb-4 border-b border-[rgba(36,28,32,0.1)]">
                  <span className="w-1.5 h-1.5 rounded-full border border-[#44597A] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-[13.5px] text-[#44597A] mt-5 leading-relaxed">
              It is modern primary care organized around one honest idea — a meaningful relationship between a patient and a physician who has the time to know them.
            </p>
          </div>
        </div>
      </section>

      {/* Physician */}
      <section className="bg-[#1B2A45] border-b border-[rgba(246,242,233,0.12)] py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-11 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          <div>
            <div className="text-[11px] tracking-[0.32em] uppercase text-[#889A7C] font-[500] mb-5">
              The physician
            </div>
            <h2 className="font-[family-name:var(--font-fraunces)] font-[500] text-[#F6F2E9] text-3xl md:text-4xl leading-[1.04] tracking-[-0.01em] mb-5">
              [Physician Name], MD
            </h2>
            <p className="text-[#C9CDD3] text-[15px] leading-relaxed mb-4">
              [Physician bio placeholder — to be replaced with the physician&apos;s actual background, training, and philosophy.]
            </p>
            <p className="text-[#C9CDD3] text-[15px] leading-relaxed mb-4">
              Board certified in [specialty]. Trained at [institution]. [X] years of experience in primary care. [Additional credentials and background.]
            </p>
            <p className="text-[#C9CDD3] text-[15px] leading-relaxed">
              [Personal note about why they practice this way — 1-2 sentences in their own voice.]
            </p>
          </div>
          <div className="bg-[rgba(246,242,233,0.06)] border border-[rgba(246,242,233,0.12)] rounded-md aspect-[4/5] flex items-center justify-center">
            <div className="text-center p-8">
              <div className="w-20 h-20 rounded-full bg-[rgba(136,154,124,0.2)] border border-[#889A7C] mx-auto mb-5" />
              <div className="text-[11px] tracking-[0.24em] uppercase text-[#44597A]">
                Photo placeholder
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#F6F2E9] border-b border-[rgba(36,28,32,0.14)] py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-11">
          <div className="text-[11px] tracking-[0.32em] uppercase text-[#44597A] font-[500] mb-5">
            What we stand for
          </div>
          <h2 className="font-[family-name:var(--font-fraunces)] font-[500] text-[#4A2A43] text-3xl md:text-4xl leading-[1.04] tracking-[-0.01em] mb-12 max-w-xl">
            The principles behind the practice.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-[#F1EADD] border border-[rgba(36,28,32,0.14)] rounded-md p-7">
                <h3 className="font-[family-name:var(--font-fraunces)] font-[500] text-[#1B2A45] text-xl mb-3">
                  {v.title}
                </h3>
                <p className="text-[14px] text-[#2B2329] leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F6F2E9] py-20">
        <div className="max-w-6xl mx-auto px-6 md:px-11 text-center">
          <h2 className="font-[family-name:var(--font-fraunces)] font-[400] text-[#4A2A43] text-4xl md:text-5xl leading-[1.04] tracking-[-0.015em] mb-5 max-w-xl mx-auto">
            Come as a patient. Stay for the relationship.
          </h2>
          <p className="text-[#2B2329] text-[15px] max-w-md mx-auto mb-8">
            Schedule a free intro call to learn more about how the practice works and whether it&apos;s the right fit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/membership"
              className="inline-flex items-center justify-center bg-[#4A2A43] text-[#F6F2E9] text-[12px] tracking-[0.18em] uppercase font-[500] px-8 py-4 hover:bg-[#3a1f34] transition-colors duration-200"
            >
              See membership plans
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border border-[rgba(36,28,32,0.2)] text-[#2B2329] text-[12px] tracking-[0.18em] uppercase font-[500] px-8 py-4 hover:border-[#4A2A43] hover:text-[#4A2A43] transition-colors duration-200"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
