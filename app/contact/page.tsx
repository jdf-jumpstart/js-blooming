import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Blooming Health. Schedule a free introductory call or ask a question.",
};

export default function Contact() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#F6F2E9] border-b border-[rgba(36,28,32,0.14)] py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 md:px-11">
          <div className="text-[11px] tracking-[0.32em] uppercase text-[#44597A] font-[500] mb-5">
            Contact
          </div>
          <h1 className="font-[family-name:var(--font-fraunces)] font-[400] text-[#4A2A43] text-5xl md:text-6xl leading-[1.0] tracking-[-0.015em] mb-6 max-w-3xl">
            Start with a conversation.
          </h1>
          <p className="font-[family-name:var(--font-cormorant)] font-[500] italic text-[#2B2329] text-xl md:text-2xl leading-[1.45] max-w-xl">
            No commitment. No pressure. Just an honest call about whether Blooming Health is the right fit.
          </p>
        </div>
      </section>

      {/* Contact content */}
      <section className="bg-[#F6F2E9] py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-11 grid grid-cols-1 md:grid-cols-2 gap-14">

          {/* Form */}
          <div>
            <div className="text-[11px] tracking-[0.32em] uppercase text-[#44597A] font-[500] mb-6">
              Send a message
            </div>
            <form className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-[11px] tracking-[0.2em] uppercase text-[#44597A] font-[500] block mb-2">
                    First name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    className="w-full border border-[rgba(36,28,32,0.2)] bg-white text-[#2B2329] text-base px-4 py-3 rounded focus:outline-none focus:border-[#4A2A43] transition-colors placeholder:text-[#C9CDD3]"
                    placeholder="[First name]"
                  />
                </div>
                <div>
                  <label className="text-[11px] tracking-[0.2em] uppercase text-[#44597A] font-[500] block mb-2">
                    Last name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    className="w-full border border-[rgba(36,28,32,0.2)] bg-white text-[#2B2329] text-base px-4 py-3 rounded focus:outline-none focus:border-[#4A2A43] transition-colors placeholder:text-[#C9CDD3]"
                    placeholder="[Last name]"
                  />
                </div>
              </div>

              <div>
                <label className="text-[11px] tracking-[0.2em] uppercase text-[#44597A] font-[500] block mb-2">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full border border-[rgba(36,28,32,0.2)] bg-white text-[#2B2329] text-base px-4 py-3 rounded focus:outline-none focus:border-[#4A2A43] transition-colors placeholder:text-[#C9CDD3]"
                  placeholder="[your@email.com]"
                />
              </div>

              <div>
                <label className="text-[11px] tracking-[0.2em] uppercase text-[#44597A] font-[500] block mb-2">
                  Phone (optional)
                </label>
                <input
                  type="tel"
                  name="phone"
                  className="w-full border border-[rgba(36,28,32,0.2)] bg-white text-[#2B2329] text-base px-4 py-3 rounded focus:outline-none focus:border-[#4A2A43] transition-colors placeholder:text-[#C9CDD3]"
                  placeholder="[(000) 000-0000]"
                />
              </div>

              <div>
                <label className="text-[11px] tracking-[0.2em] uppercase text-[#44597A] font-[500] block mb-2">
                  I am interested in
                </label>
                <select
                  name="interest"
                  className="w-full border border-[rgba(36,28,32,0.2)] bg-white text-[#2B2329] text-base px-4 py-3 rounded focus:outline-none focus:border-[#4A2A43] transition-colors"
                >
                  <option value="">Select one</option>
                  <option value="intro-call">Scheduling an introductory call</option>
                  <option value="membership">Learning about membership</option>
                  <option value="services">Asking about services</option>
                  <option value="other">Something else</option>
                </select>
              </div>

              <div>
                <label className="text-[11px] tracking-[0.2em] uppercase text-[#44597A] font-[500] block mb-2">
                  Message (optional)
                </label>
                <textarea
                  name="message"
                  rows={5}
                  className="w-full border border-[rgba(36,28,32,0.2)] bg-white text-[#2B2329] text-base px-4 py-3 rounded focus:outline-none focus:border-[#4A2A43] transition-colors placeholder:text-[#C9CDD3] resize-y"
                  placeholder="Anything you'd like us to know ahead of time…"
                />
              </div>

              <button
                type="submit"
                className="self-start bg-[#4A2A43] text-[#F6F2E9] text-[12px] tracking-[0.18em] uppercase font-[500] px-8 py-4 hover:bg-[#3a1f34] transition-colors duration-200"
              >
                Send message
              </button>

              <p className="text-[12px] text-[#44597A] leading-relaxed">
                We typically respond within one business day. For urgent medical questions, please call directly.
              </p>
            </form>
          </div>

          {/* Info */}
          <div className="flex flex-col gap-10">
            <div>
              <div className="text-[11px] tracking-[0.32em] uppercase text-[#44597A] font-[500] mb-5">
                Practice information
              </div>
              <div className="flex flex-col gap-5">
                <div className="border-b border-[rgba(36,28,32,0.1)] pb-5">
                  <div className="text-[11px] tracking-[0.2em] uppercase text-[#889A7C] font-[500] mb-1">Address</div>
                  <p className="text-base text-[#2B2329]">
                    [Street Address]<br />
                    Baltimore, MD [ZIP]
                  </p>
                </div>
                <div className="border-b border-[rgba(36,28,32,0.1)] pb-5">
                  <div className="text-[11px] tracking-[0.2em] uppercase text-[#889A7C] font-[500] mb-1">Phone</div>
                  <a href="tel:+14105550000" className="text-base text-[#2B2329] hover:text-[#4A2A43] transition-colors">
                    (410) 555-0000
                  </a>
                </div>
                <div className="border-b border-[rgba(36,28,32,0.1)] pb-5">
                  <div className="text-[11px] tracking-[0.2em] uppercase text-[#889A7C] font-[500] mb-1">Email</div>
                  <a href="mailto:hello@bloominghealth.com" className="text-base text-[#2B2329] hover:text-[#4A2A43] transition-colors">
                    hello@bloominghealth.com
                  </a>
                </div>
                <div className="border-b border-[rgba(36,28,32,0.1)] pb-5">
                  <div className="text-[11px] tracking-[0.2em] uppercase text-[#889A7C] font-[500] mb-1">Office hours</div>
                  <p className="text-base text-[#2B2329]">
                    Monday – Friday: [8am – 5pm]<br />
                    Saturday: [by appointment]<br />
                    After-hours: direct provider access for members
                  </p>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="bg-[#F1EADD] border border-[rgba(36,28,32,0.14)] rounded-md aspect-[4/3] flex items-center justify-center">
              <div className="text-center p-6">
                <div className="text-[11px] tracking-[0.24em] uppercase text-[#44597A] mb-2">Map placeholder</div>
                <p className="text-[13px] text-[#2B2329]">[Practice location map — to be embedded]</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
