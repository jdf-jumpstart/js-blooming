import Link from "next/link";
import Logo from "./Logo";
import SocialLinks from "./Social";
import { RingAccent } from "./Motifs";

const footerLinks = [
  { href: "/services", label: "Services" },
  { href: "/membership", label: "Membership" },
  { href: "/what-is-concierge-care", label: "What Is Concierge Care?" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[rgba(36,28,32,0.14)] bg-[#F5F1E8]">
      <RingAccent
        tone="plum"
        className="pointer-events-none absolute -bottom-16 -left-10 hidden h-56 w-56 md:block"
      />
      <div className="relative max-w-6xl mx-auto px-6 md:px-11 py-16">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-14 mb-14 border-b border-[rgba(36,28,32,0.14)]">
          <div>
            <h3 className="font-[family-name:var(--font-fraunces)] font-[500] text-[#1B2A45] text-[28px] md:text-[34px] leading-[1.1] mb-1">
              Ready to talk?
            </h3>
            <p className="text-[#44597A] text-[21px]">
              Fifteen minutes, no obligation. A candid conversation about whether Blooming Health is the right fit.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-[#1B2A45] text-[#FAF8F3] text-[16px] tracking-[0.18em] uppercase font-[500] px-8 py-4 hover:bg-[#162237] transition-colors duration-200 shrink-0"
          >
            Schedule a complimentary intro call
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-14">
          <div>
            <div className="mb-3">
              <Logo height={40} />
            </div>
            <p className="text-[#44597A] text-[21px] leading-relaxed">
              Concierge care in Baltimore.<br />
              Your health, your way.
            </p>
            <SocialLinks className="mt-5" />
          </div>

          <div>
            <div className="text-[16px] tracking-[0.28em] uppercase text-[#44597A] font-[500] mb-4">Pages</div>
            <ul className="flex flex-col gap-2">
              {footerLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-[21px] text-[#2B2329] hover:text-[#1B2A45] transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-[16px] tracking-[0.28em] uppercase text-[#44597A] font-[500] mb-4">Contact</div>
            <ul className="flex flex-col gap-2 text-[21px] text-[#2B2329]">
              <li>1 Reservoir Circle, Pikesville, MD 21208</li>
              <li>
                <a href="tel:+14436456836" className="hover:text-[#1B2A45] transition-colors">
                  (443) 645-6836
                </a>
              </li>
              <li className="text-[17px] text-[#44597A]">Fax: (443) 308-5380</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[rgba(36,28,32,0.14)] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[16px] text-[#44597A] tracking-wide">
            © {new Date().getFullYear()} Blooming Health. All rights reserved.
          </p>
          <div className="flex gap-5">
            <Link href="/privacy" className="text-[16px] tracking-[0.1em] uppercase text-[#44597A] hover:text-[#1B2A45] transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-[16px] tracking-[0.1em] uppercase text-[#44597A] hover:text-[#1B2A45] transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
