import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FlowDivider, RingAccent } from "@/components/Motifs";

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
      <section className="relative overflow-hidden bg-[#FAF8F3] py-20 md:py-28">
        <div className="relative max-w-6xl mx-auto px-6 md:px-11">
          <h1 className="font-[family-name:var(--font-fraunces)] font-[400] text-[#1B2A45] text-[40px] sm:text-[52px] md:text-[64px] leading-[1.0] tracking-[-0.015em] mb-6 max-w-3xl">
            Primary care as a relationship, not a transaction
          </h1>
          <p className="font-[family-name:var(--font-cormorant)] font-[500] italic text-[#2B2329] text-[24px] md:text-[28px] leading-[1.45] max-w-2xl">
            We built Blooming Health around one idea: that a meaningful relationship between patient and provider changes everything.
          </p>
        </div>
        <FlowDivider fill="#1B2A45" />
      </section>

      {/* Mission */}
      <section className="relative overflow-hidden bg-[#1B2A45] py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-11 grid grid-cols-1 md:grid-cols-2 gap-14">
          <div>
            <h2 className="font-[family-name:var(--font-fraunces)] font-[500] text-[#FAF8F3] text-[34px] md:text-[40px] leading-[1.04] tracking-[-0.01em] mb-5">
              Collaborating your health
            </h2>
            <p className="text-[#C9CDD3] text-[21px] leading-relaxed mb-5">
              Most primary care visits run about ten minutes. That&apos;s not enough time to understand a person, let alone their full health picture. Blooming Health was built to fix that.
            </p>
            <p className="text-[#C9CDD3] text-[21px] leading-relaxed mb-5">
              We see fewer patients, spend more time with each one, and listen. When something needs attention, we look at all the options (natural and lifestyle-based approaches, not just a prescription) and figure out together what makes the most sense for you.
            </p>
            <p className="text-[#C9CDD3] text-[21px] leading-relaxed">
              The result is primary care that feels less like a system and more like a relationship. That&apos;s the whole point.
            </p>
          </div>
          <div className="bg-[#F5F1E8] border border-[rgba(36,28,32,0.14)] rounded-md p-8 flex flex-col justify-center">
            <ul className="flex flex-col gap-4">
              {[
                "Long appointments, with time to talk",
                "Direct access to your provider, not a call center",
                "Natural options explored alongside conventional medicine",
                "Same- or next-day care when something comes up",
                "An NP who knows you and your history",
                "Decisions made with you, not for you",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[21px] text-[#2B2329] pb-4 border-b border-[rgba(36,28,32,0.1)] last:border-0 last:pb-0">
                  <span className="mt-[calc((1.6em-0.375rem)/2)] w-1.5 h-1.5 rounded-full bg-[#44597A] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <FlowDivider fill="#FAF8F3" />
      </section>

      {/* Meet Avi */}
      <section className="relative overflow-hidden bg-[#FAF8F3] py-16 md:py-24">
        <div className="relative max-w-6xl mx-auto px-6 md:px-11 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          <div>
            <h2 className="font-[family-name:var(--font-fraunces)] font-[500] text-[#1B2A45] text-[34px] md:text-[40px] leading-[1.04] tracking-[-0.01em] mb-2">
              Avi Blumenthal, NP
            </h2>
            <p className="text-[#44597A] text-[17px] tracking-[0.1em] uppercase mb-7">
              Founder & NP
            </p>
            <p className="text-[#2B2329] text-[21px] leading-relaxed mb-4">
              Avi brings 11 years of healthcare experience to Blooming Health and a genuine commitment to patient-centered care.
            </p>
            <p className="text-[#2B2329] text-[21px] leading-relaxed mb-4">
              Outside the practice, he&apos;s the father of six, a skilled guitar player, and someone who stays active and keeps learning.
            </p>
            <p className="text-[#2B2329] text-[21px] leading-relaxed mb-6">
              What drives him is the relationship, not the paperwork: sitting down with someone, understanding what they&apos;re dealing with, and helping them figure out what to do about it.
            </p>
            <Link
              href="/membership"
              className="inline-flex items-center text-[16px] tracking-[0.18em] uppercase font-[500] text-[#44597A] hover:text-[#1B2A45] transition-colors duration-200"
            >
              See how membership works →
            </Link>
          </div>
          <div className="relative bg-[#FAF8F3] border border-[rgba(36,28,32,0.12)] rounded-md aspect-[4/5] overflow-hidden">
            <Image
              src="/avi-ear-exam.jpg"
              alt="Avi Blumenthal, NP, examining a young patient"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <FlowDivider fill="#162237" />
      </section>

      {/*
        Family band. Deliberately deeper navy than the Values section below it:
        the flat seam between the two is the floor the cutout stands on, so this
        section carries no FlowDivider (a curve here would cut off the feet) and
        no bottom padding on the image column.
      */}
      <section className="relative overflow-hidden bg-[#162237] pt-16 md:pt-24">
        <div className="max-w-6xl mx-auto px-6 md:px-11 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-end">
          <div className="pb-16 md:pb-24">
            <div className="text-[16px] tracking-[0.28em] uppercase text-[#889A7C] font-[500] mb-4">
              Outside the practice
            </div>
            <h2 className="font-[family-name:var(--font-fraunces)] font-[500] text-[#FAF8F3] text-[34px] md:text-[40px] leading-[1.04] tracking-[-0.01em] mb-5">
              He knows what a full house looks like
            </h2>
            <p className="text-[#C9CDD3] text-[21px] leading-relaxed mb-5">
              Avi is a father of six. He has spent his share of evenings waiting on a callback, weighing whether something can hold until morning, and wondering if a ten-minute visit really got to the bottom of it.
            </p>
            <p className="text-[#C9CDD3] text-[21px] leading-relaxed">
              That is a good part of why the practice works the way it does. The access he offers members is the access he wanted as a parent.
            </p>
          </div>
          <div className="relative flex justify-center md:justify-end">
            {/* Trimmed to the subject's alpha bounds, so the bottom edge of the
                file is the soles of their shoes and they stand on the seam. */}
            <Image
              src="/avi-family.webp"
              alt="Avi Blumenthal, NP, with his family"
              width={681}
              height={1090}
              className="h-auto w-full max-w-[300px] md:max-w-[420px]"
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative overflow-hidden bg-[#1B2A45] py-16 md:py-24">
        <RingAccent
          tone="ivory"
          className="pointer-events-none absolute -right-10 top-10 hidden h-48 w-48 lg:block"
        />
        <div className="relative max-w-6xl mx-auto px-6 md:px-11">
          <h2 className="font-[family-name:var(--font-fraunces)] font-[500] text-[#FAF8F3] text-[34px] md:text-[40px] leading-[1.04] tracking-[-0.01em] mb-12 max-w-xl">
            The principles behind the practice
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-[#F5F1E8] border border-[rgba(36,28,32,0.14)] rounded-md p-7">
                <h3 className="font-[family-name:var(--font-fraunces)] font-[500] text-[#1B2A45] text-[24px] mb-3">
                  {v.title}
                </h3>
                <p className="text-[21px] text-[#2B2329] leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
        <FlowDivider fill="#FAF8F3" />
      </section>

      {/* CTA */}
      <section className="bg-[#FAF8F3] py-20">
        <div className="max-w-6xl mx-auto px-6 md:px-11 text-center">
          <h2 className="font-[family-name:var(--font-fraunces)] font-[400] text-[#1B2A45] text-[40px] md:text-[52px] leading-[1.04] tracking-[-0.015em] mb-5 max-w-xl mx-auto">
            Come as a patient. Stay for the relationship.
          </h2>
          <p className="text-[#2B2329] text-[21px] max-w-md mx-auto mb-8">
            Reach out to learn more or to set up a free introductory call with Avi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/membership"
              className="inline-flex items-center justify-center bg-[#1B2A45] text-[#FAF8F3] text-[16px] tracking-[0.18em] uppercase font-[500] px-8 py-4 hover:bg-[#162237] transition-colors duration-200"
            >
              See membership plans
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border border-[rgba(36,28,32,0.2)] text-[#2B2329] text-[16px] tracking-[0.18em] uppercase font-[500] px-8 py-4 hover:border-[#1B2A45] hover:text-[#1B2A45] transition-colors duration-200"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
