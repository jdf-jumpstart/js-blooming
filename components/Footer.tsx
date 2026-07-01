import Link from "next/link";
import Logo from "./Logo";

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
    <footer className="border-t border-[rgba(36,28,32,0.14)] bg-[#F1EADD]">
      <div className="max-w-6xl mx-auto px-6 md:px-11 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-14">
          <div>
            <div className="mb-3">
              <Logo height={40} />
            </div>
            <p className="text-[#44597A] text-base leading-relaxed">
              Concierge care in Baltimore.<br />
              Your health, your way.
            </p>
          </div>

          <div>
            <div className="text-[10px] tracking-[0.28em] uppercase text-[#44597A] font-[500] mb-4">Pages</div>
            <ul className="flex flex-col gap-2">
              {footerLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-base text-[#2B2329] hover:text-[#4A2A43] transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-[10px] tracking-[0.28em] uppercase text-[#44597A] font-[500] mb-4">Contact</div>
            <ul className="flex flex-col gap-2 text-base text-[#2B2329]">
              <li>1 Reservoir Cir, Suite 201, Pikesville, MD 21208</li>
              <li>
                <a href="tel:+14105550000" className="hover:text-[#4A2A43] transition-colors">
                  (410) 555-0000
                </a>
              </li>
              <li>
                <a href="mailto:hello@bloominghealth.com" className="hover:text-[#4A2A43] transition-colors">
                  hello@bloominghealth.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[rgba(36,28,32,0.14)] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[12px] text-[#44597A] tracking-wide">
            © {new Date().getFullYear()} Blooming Health. All rights reserved.
          </p>
          <div className="flex gap-5">
            <Link href="/privacy" className="text-[11px] tracking-[0.1em] uppercase text-[#44597A] hover:text-[#4A2A43] transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-[11px] tracking-[0.1em] uppercase text-[#44597A] hover:text-[#4A2A43] transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
