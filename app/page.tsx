import Image from "next/image";
import Link from "next/link";
import { FlowDivider, RingAccent } from "@/components/Motifs";
import PricingToggle from "@/components/PricingToggle";

const pillars = [
  { title: "Collaboration", body: "Decisions made with you, not for you." },
  { title: "Patient Autonomy", body: "You set the direction. Your provider helps you get there." },
  { title: "Natural first", body: "Medications have their place. So do nutrition, movement, and sleep. We look at everything." },
  { title: "Access", body: "Avi's personal number. Text or call when something comes up." },
  { title: "Prevention", body: "Catching things early and building health over time, not just treating what's already wrong." },
  { title: "Trust", body: "The same NP over years, who knows your history, your family, and what matters to you." },
];

const services: { title: string; body?: string; italic?: boolean }[] = [
  {
    title: "Primary Care",
    body: "Wellness exams, chronic disease management, preventive care, nutrition and lifestyle counseling, with time to get through all of it.",
  },
  {
    title: "Urgent Care",
    body: "Strep, flu, COVID, stitches, UTIs, ear infections, rashes. Same day or next day, billed through insurance.",
  },
  {
    title: "Direct Provider Access",
    body: "Direct access to Avi Blumenthal, NP, between visits.",
  },
  {
    title: "Natural & Lifestyle Options",
    body: "Medications when they're the right call. Nutrition, movement, and lifestyle-first when they're not. Always explored together.",
  },
  {
    title: "Longer Appointments",
    body: "Enough time to talk through everything, not just the chief complaint. Ten-minute appointments are not part of how we practice.",
  },
  {
    title: "More on the way",
    italic: true,
  },
];

const steps = [
  { number: "1", title: "Choose your membership", body: "Pick the plan that fits your household." },
  { number: "2", title: "Meet your provider, Avi", body: "An unhurried first visit to understand your complete health picture." },
  { number: "3", title: "Access care when you need it", body: "Same-day visits, direct messaging, and continuity with a provider who knows your history." },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#D8E1EF] via-[#E7ECF5] to-[#FAF8F3] py-28 md:py-40">
        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-16">
          <h1 className="font-[family-name:var(--font-fraunces)] font-[400] text-[#1B2A45] leading-[1.0] tracking-[-0.015em] text-[40px] sm:text-[52px] md:text-[64px] lg:text-[72px] mb-5 md:mb-8 max-w-3xl">
            Primary care with the time to get to know you
          </h1>
          <p className="text-[#44597A] text-[21px] md:text-[24px] leading-relaxed mb-6 md:mb-10 max-w-2xl">
            Blooming Health is a membership-based concierge care practice in Baltimore. Fewer patients, longer visits, natural options alongside conventional medicine, with a provider who&apos;s available when you need them, not just when the schedule allows.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/membership"
              className="inline-flex items-center justify-center bg-[#1B2A45] text-[#FAF8F3] text-[16px] tracking-[0.18em] uppercase font-[500] px-8 py-4 hover:bg-[#162237] transition-colors duration-200"
            >
              See how membership works
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center border border-[rgba(36,28,32,0.2)] text-[#2B2329] text-[16px] tracking-[0.18em] uppercase font-[500] px-8 py-4 hover:border-[#1B2A45] hover:text-[#1B2A45] transition-colors duration-200"
            >
              About the practice
            </Link>
          </div>
        </div>
        <FlowDivider fill="#E7ECF5" />
      </section>

      {/* What is this */}
      <section className="relative overflow-hidden bg-[#E7ECF5] py-20 md:py-28">
        <RingAccent
          tone="plum"
          className="pointer-events-none absolute -left-10 top-10 hidden h-56 w-56 lg:block"
        />
        <div className="max-w-6xl mx-auto px-6 md:px-11 grid grid-cols-1 md:grid-cols-2 gap-14 items-center mb-14">
          <div className="relative bg-[#FAF8F3] border border-[rgba(36,28,32,0.14)] rounded-md p-8 md:p-10">
            <h2 className="font-[family-name:var(--font-fraunces)] font-[500] text-[#1B2A45] text-[34px] md:text-[40px] leading-[1.04] tracking-[-0.01em] mb-6">
              Blooming Health was founded on a simple premise: good medicine takes time
            </h2>
            <p className="text-[#2B2329] text-[21px] leading-relaxed mb-4">
              Your existing insurance continues to cover the cost of visits, labs, and referrals, just as it would anywhere else. Membership layers direct access on top of that: Avi&apos;s personal number, after-hours availability, and priority scheduling for same- and next-day appointments.
            </p>
            <p className="text-[#2B2329] text-[21px] leading-relaxed mb-6">
              We look at natural and lifestyle-based options alongside conventional medicine: medications when they make sense, movement and nutrition when those are the better answer. The goal is a real relationship that helps you build health over time.
            </p>
            <Link
              href="/what-is-concierge-care"
              className="inline-flex items-center text-[16px] tracking-[0.18em] uppercase font-[500] text-[#1B2A45] hover:text-[#162237] transition-colors duration-200"
            >
              More on concierge care →
            </Link>
          </div>
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-md overflow-hidden">
              <Image
                src="/blooming-health-concierge-lounge-scene.png"
                alt="A welcoming consultation space"
                fill
                className="object-cover object-center"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 -z-10 h-24 w-24 rounded-full border border-[#4A2A43] opacity-30" />
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-6 md:px-11 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-px bg-[rgba(36,28,32,0.1)] border border-[rgba(36,28,32,0.1)] rounded-md overflow-hidden">
          {pillars.map((p) => (
            <div key={p.title} className="bg-[#FAF8F3] px-6 py-5">
              <h4 className="font-[family-name:var(--font-fraunces)] font-[500] text-[#1B2A45] text-[24px] mb-1">
                {p.title}
              </h4>
              <p className="text-[21px] text-[#2B2329]">{p.body}</p>
            </div>
          ))}
        </div>
        <FlowDivider fill="#E7ECF5" />
      </section>

      {/* Services overview */}
      <section className="relative overflow-hidden bg-[#E7ECF5] py-20 md:py-28">
        <div className="relative max-w-6xl mx-auto px-6 md:px-11">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center mb-14">
            <div>
              <h2 className="font-[family-name:var(--font-fraunces)] font-[500] text-[#1B2A45] text-[34px] md:text-[40px] leading-[1.04] tracking-[-0.01em] mb-4">
                Primary care that covers the ground
              </h2>
              <p className="text-[#44597A] text-[21px]">
                From annual physicals to same-day sick visits to chronic disease management, your insurance covers the visit and membership gives you direct access to Avi in between.
              </p>
            </div>
            <div className="relative aspect-[16/9] md:aspect-[4/3] rounded-md overflow-hidden">
              <Image
                src="/blooming-health-exam-room-scene.png"
                alt="A clean, welcoming exam room"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[rgba(36,28,32,0.08)]">
            {services.map((s) => (
              <div key={s.title} className="bg-[#FAF8F3] p-7 hover:bg-white transition-colors duration-200">
                <div className="w-8 h-8 rounded-full bg-[rgba(136,154,124,0.25)] border border-[#889A7C] mb-5" />
                <h3
                  className={`font-[family-name:var(--font-fraunces)] font-[500] text-[#1B2A45] text-[24px] ${
                    s.body ? "mb-3" : ""
                  } ${s.italic ? "italic" : ""}`}
                >
                  {s.title}
                </h3>
                {s.body && (
                  <p className="text-[#2B2329] text-[21px] leading-relaxed">{s.body}</p>
                )}
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link
              href="/services"
              className="inline-flex items-center text-[#44597A] text-[16px] tracking-[0.18em] uppercase font-[500] hover:text-[#1B2A45] transition-colors duration-200"
            >
              Full list of services →
            </Link>
          </div>
        </div>
        <FlowDivider fill="#E7ECF5" />
      </section>

      {/* Meet your provider */}
      <section className="relative overflow-hidden bg-[#E7ECF5] py-20 md:py-28">
        <RingAccent
          tone="navy"
          className="pointer-events-none absolute -left-10 -bottom-10 hidden h-56 w-56 lg:block"
        />
        <div className="relative max-w-6xl mx-auto px-6 md:px-11 grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-14 items-center">
          <div className="bg-[#FAF8F3] border border-[rgba(36,28,32,0.14)] rounded-md aspect-[4/5] flex items-center justify-center">
            <div className="text-center p-8">
              <div className="w-20 h-20 rounded-full bg-[rgba(68,89,122,0.12)] border border-[#44597A] mx-auto mb-4 flex items-center justify-center">
                <span className="font-[family-name:var(--font-fraunces)] text-[#44597A] text-[28px]">A</span>
              </div>
              <div className="text-[16px] tracking-[0.24em] uppercase text-[#44597A]">
                Photo coming soon
              </div>
            </div>
          </div>
          <div>
            <div className="text-[16px] tracking-[0.28em] uppercase text-[#4A2A43] font-[500] mb-3">
              Your Provider
            </div>
            <h2 className="font-[family-name:var(--font-fraunces)] font-[500] text-[#1B2A45] text-[34px] md:text-[40px] leading-[1.04] tracking-[-0.01em] mb-2">
              Avi Blumenthal, NP
            </h2>
            <p className="text-[#44597A] text-[17px] tracking-[0.1em] uppercase mb-6">
              Founder &amp; Nurse Practitioner
            </p>
            <p className="text-[#2B2329] text-[21px] leading-relaxed mb-6">
              Avi brings more than a decade of healthcare experience, trained in emergency medicine and most recently practicing in urgent care. He keeps a small patient panel by design, so every visit gets the time it needs.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center text-[16px] tracking-[0.18em] uppercase font-[500] text-[#44597A] hover:text-[#1B2A45] transition-colors duration-200"
            >
              Meet Avi →
            </Link>
          </div>
        </div>
        <FlowDivider fill="#FAF8F3" />
      </section>

      {/* Pricing snapshot */}
      <section className="relative overflow-hidden bg-[#FAF8F3] py-20 md:py-28">
        <RingAccent
          tone="plum"
          className="pointer-events-none absolute -right-10 top-10 hidden h-52 w-52 lg:block"
        />
        <div className="relative max-w-6xl mx-auto px-6 md:px-11">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <h2 className="font-[family-name:var(--font-fraunces)] font-[500] text-[#1B2A45] text-[34px] md:text-[40px] leading-[1.04] tracking-[-0.01em] mb-3">
                Membership, priced simply
              </h2>
              <p className="text-[#2B2329] text-[21px] max-w-xl">
                One flat rate for concierge access, with things like labs billed to your existing insurance.
              </p>
            </div>
            <Link
              href="/membership"
              className="inline-flex items-center text-[16px] tracking-[0.18em] uppercase font-[500] text-[#44597A] hover:text-[#1B2A45] transition-colors duration-200 shrink-0"
            >
              Full membership details →
            </Link>
          </div>
          <PricingToggle />
        </div>
        <FlowDivider fill="#F5F1E8" />
      </section>

      {/* How it works */}
      <section className="relative overflow-hidden bg-[#F5F1E8] py-20 md:py-28">
        <RingAccent
          tone="navy"
          className="pointer-events-none absolute -right-12 top-16 hidden h-52 w-52 lg:block"
        />
        <div className="relative max-w-6xl mx-auto px-6 md:px-11">
          <h2 className="font-[family-name:var(--font-fraunces)] font-[500] text-[#1B2A45] text-[34px] md:text-[40px] leading-[1.04] tracking-[-0.01em] mb-14 max-w-xl">
            Simple to join. Simple to use.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {steps.map((s) => (
              <div key={s.number}>
                <div className="font-[family-name:var(--font-fraunces)] text-[#44597A] text-[52px] mb-5 leading-none">
                  {s.number}
                </div>
                <h3 className="font-[family-name:var(--font-fraunces)] font-[500] text-[#1B2A45] text-[24px] mb-3">
                  {s.title}
                </h3>
                <p className="text-[#2B2329] text-[21px] leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-14">
            <Link
              href="/membership"
              className="inline-flex items-center justify-center bg-[#1B2A45] text-[#FAF8F3] text-[16px] tracking-[0.18em] uppercase font-[500] px-8 py-4 hover:bg-[#162237] transition-colors duration-200"
            >
              View membership plans
            </Link>
          </div>
        </div>
        <FlowDivider fill="#FAF8F3" />
      </section>

      {/* Testimonials placeholder */}
      <section className="bg-[#FAF8F3] py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 md:px-11">
          <h2 className="font-[family-name:var(--font-fraunces)] font-[500] text-[#1B2A45] text-[34px] md:text-[40px] leading-[1.04] tracking-[-0.01em] mb-12">
            What patients say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="border border-[rgba(36,28,32,0.14)] rounded-md p-7 bg-[#F5F1E8]">
                <p className="font-[family-name:var(--font-cormorant)] font-[500] text-[#2B2329] text-[24px] leading-[1.5] mb-6">
                  &ldquo;[Patient testimonial placeholder]&rdquo;
                </p>
                <div className="text-[16px] tracking-[0.1em] uppercase text-[#44597A]">
                  Patient name · Baltimore
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-[#FAF8F3] py-20 md:py-28">
        <div className="relative max-w-6xl mx-auto px-6 md:px-11 text-center">
          <h2 className="font-[family-name:var(--font-fraunces)] font-[400] text-[#1B2A45] text-[40px] md:text-[52px] lg:text-[64px] leading-[1.04] tracking-[-0.015em] mb-8 max-w-2xl mx-auto">
            A different kind of practice
          </h2>
          <p className="text-[#2B2329] text-[21px] max-w-lg mx-auto mb-10 leading-relaxed">
            Patients 13 and up. $100/mo individual, $167/mo couple, $250/mo family. Works alongside your insurance.
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
              Schedule an intro call
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
