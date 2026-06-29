import Image from "next/image";
import Link from "next/link";

const pillars = [
  { title: "Collaboration", body: "Decisions made with you, not for you." },
  { title: "Patient Autonomy", body: "You set the direction. Your provider helps you get there." },
  { title: "Natural first", body: "Medications have their place. So do nutrition, movement, and sleep. We look at everything." },
  { title: "Access", body: "Avi's personal number. Text or call when something comes up." },
  { title: "Prevention", body: "Catching things early and building health over time, not just treating what's already wrong." },
  { title: "Trust", body: "The same NP over years, who knows your history, your family, and what matters to you." },
];

const services = [
  {
    title: "Primary Care",
    body: "Wellness exams, chronic disease management, preventive care, nutrition and lifestyle counseling. Time to actually get through all of it.",
  },
  {
    title: "Urgent Care",
    body: "Strep, flu, COVID, stitches, UTIs, ear infections, rashes. Same day or next day, no separate charge.",
  },
  {
    title: "Direct Provider Access",
    body: "Avi's direct line.",
  },
  {
    title: "Natural & Lifestyle Options",
    body: "Medications when they're the right call. Nutrition, movement, and lifestyle-first when they're not. Always explored together.",
  },
  {
    title: "Long Appointment Blocks",
    body: "Enough time to talk through everything (not just the chief complaint). Ten-minute slots aren't how this works.",
  },
  {
    title: "More on the way",
    body: "Starting focused. Adding more as we grow.",
  },
];

const steps = [
  { number: "1", title: "Choose your membership", body: "Pick the plan that fits your household. Cancel anytime." },
  { number: "2", title: "Meet your provider", body: "A proper first visit, no rushing, to understand your full picture." },
  { number: "3", title: "Access care when you need it", body: "Same-day visits, direct messaging, and a provider who actually knows you." },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden h-[80vh]">
        <div className="absolute inset-0 bg-[#1B2A45]">
          <Image
            src="/Patient-visiting-a-primary-care-doctor-1030x687.jpeg"
            alt=""
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-[#0d1117]/30" />
        <div className="absolute inset-[10%] z-10 bg-[#0d1117]/70 backdrop-blur-sm flex flex-col justify-center px-10 md:px-16">
          <h1 className="font-[family-name:var(--font-fraunces)] font-[400] text-[#F6F2E9] leading-[1.0] tracking-[-0.015em] text-5xl md:text-6xl lg:text-7xl mb-8 max-w-3xl">
            Primary care with the time to actually know you.
          </h1>
          <p className="text-[#C9CDD3] text-base md:text-lg leading-relaxed mb-10 max-w-2xl">
            Blooming Health is a membership-based direct primary care practice in Baltimore. Fewer patients, longer visits, natural options alongside conventional medicine, with a provider who&apos;s available when you need them, not just when the schedule allows.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/membership"
              className="inline-flex items-center justify-center bg-[#F6F2E9] text-[#1B2A45] text-[12px] tracking-[0.18em] uppercase font-[500] px-8 py-4 hover:bg-[#F1EADD] transition-colors duration-200"
            >
              See how membership works
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center border border-[rgba(246,242,233,0.4)] text-[#F6F2E9] text-[12px] tracking-[0.18em] uppercase font-[500] px-8 py-4 hover:border-[#F6F2E9] transition-colors duration-200"
            >
              About the practice
            </Link>
          </div>
        </div>
      </section>

      {/* What is this */}
      <section className="bg-[#F6F2E9] py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 md:px-11 grid grid-cols-1 md:grid-cols-2 gap-14 items-center mb-14">
          <div>
            <h2 className="font-[family-name:var(--font-fraunces)] font-[500] text-[#4A2A43] text-3xl md:text-4xl leading-[1.04] tracking-[-0.01em] mb-6">
              A guide, not a gatekeeper.
            </h2>
            <p className="font-[family-name:var(--font-cormorant)] font-[500] text-[#2B2329] text-xl md:text-2xl leading-[1.45] mb-6">
              We built Blooming Health because good medicine takes time, and we were tired of practices that don&apos;t give it.
            </p>
            <p className="text-[#2B2329] text-base leading-relaxed mb-4">
              Your membership covers up to 15 primary and urgent care visits per year, no extra billing per visit. Between appointments, Avi&apos;s personal number is there for when something comes up and you need a real answer fast.
            </p>
            <p className="text-[#2B2329] text-base leading-relaxed">
              We look at natural and lifestyle-based options alongside conventional medicine: medications when they make sense, movement and nutrition when those are the better answer. The goal is a real relationship that helps you build health over time.
            </p>
          </div>
          <div className="relative aspect-[4/5] rounded-md overflow-hidden">
            <Image
              src="/blooming-health-concierge-lounge-scene.png"
              alt="A welcoming consultation space"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-6 md:px-11 grid grid-cols-2 md:grid-cols-3 gap-px bg-[rgba(36,28,32,0.14)] border border-[rgba(36,28,32,0.14)] rounded-md overflow-hidden">
          {pillars.map((p) => (
            <div key={p.title} className="bg-[#F6F2E9] px-6 py-5">
              <h4 className="font-[family-name:var(--font-fraunces)] font-[500] text-[#1B2A45] text-[18px] mb-1">
                {p.title}
              </h4>
              <p className="text-base text-[#2B2329]">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services overview */}
      <section className="bg-[#1B2A45] py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 md:px-11">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center mb-14">
            <div>
              <h2 className="font-[family-name:var(--font-fraunces)] font-[500] text-[#F6F2E9] text-3xl md:text-4xl leading-[1.04] tracking-[-0.01em] mb-4">
                Primary care that actually covers the ground.
              </h2>
              <p className="text-[#C9CDD3] text-base">
                Membership covers everything in the primary care lane: annual physicals, same-day sick visits, chronic disease management. One flat monthly fee, no per-visit billing.
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[rgba(246,242,233,0.1)]">
            {services.map((s) => (
              <div key={s.title} className="bg-[#1B2A45] p-7 hover:bg-[#243555] transition-colors duration-200">
                <div className="w-8 h-8 rounded-full border border-[#889A7C] mb-5" />
                <h3 className="font-[family-name:var(--font-fraunces)] font-[500] text-[#F6F2E9] text-[18px] mb-3">
                  {s.title}
                </h3>
                <p className="text-[#C9CDD3] text-base leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link
              href="/services"
              className="inline-flex items-center text-[#889A7C] text-[12px] tracking-[0.18em] uppercase font-[500] hover:text-[#F6F2E9] transition-colors duration-200"
            >
              Full list of services →
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-[#F1EADD] py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 md:px-11">
          <h2 className="font-[family-name:var(--font-fraunces)] font-[500] text-[#4A2A43] text-3xl md:text-4xl leading-[1.04] tracking-[-0.01em] mb-14 max-w-xl">
            Simple to join. Simple to use.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {steps.map((s) => (
              <div key={s.number}>
                <div className="font-[family-name:var(--font-fraunces)] text-[#C9CDD3] text-5xl mb-5 leading-none">
                  {s.number}
                </div>
                <h3 className="font-[family-name:var(--font-fraunces)] font-[500] text-[#1B2A45] text-xl mb-3">
                  {s.title}
                </h3>
                <p className="text-[#2B2329] text-base leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-14">
            <Link
              href="/membership"
              className="inline-flex items-center justify-center bg-[#4A2A43] text-[#F6F2E9] text-[12px] tracking-[0.18em] uppercase font-[500] px-8 py-4 hover:bg-[#3a1f34] transition-colors duration-200"
            >
              View membership plans
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials placeholder */}
      <section className="bg-[#F6F2E9] py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 md:px-11">
          <h2 className="font-[family-name:var(--font-fraunces)] font-[500] text-[#4A2A43] text-3xl md:text-4xl leading-[1.04] tracking-[-0.01em] mb-12">
            What patients say.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="border border-[rgba(36,28,32,0.14)] rounded-md p-7 bg-[#F1EADD]">
                <p className="font-[family-name:var(--font-cormorant)] font-[500] text-[#2B2329] text-lg leading-[1.5] mb-6">
                  &ldquo;[Patient testimonial placeholder]&rdquo;
                </p>
                <div className="text-[12px] tracking-[0.1em] uppercase text-[#44597A]">
                  Patient name · Baltimore
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#F6F2E9] py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 md:px-11 text-center">
          <h2 className="font-[family-name:var(--font-fraunces)] font-[400] text-[#4A2A43] text-4xl md:text-5xl lg:text-6xl leading-[1.04] tracking-[-0.015em] mb-8 max-w-2xl mx-auto">
            A different kind of practice.
          </h2>
          <p className="text-[#2B2329] text-[16px] max-w-lg mx-auto mb-10 leading-relaxed">
            Patients 13 and up. $100/mo individual, $167/mo couple. No insurance required.
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
              Schedule an intro call
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
