"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/services", label: "Services" },
  { href: "/membership", label: "Membership" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 border-b border-[rgba(36,28,32,0.14)]"
      style={{ background: "rgba(246,242,233,0.92)", backdropFilter: "blur(12px)" }}>
      <div className="max-w-6xl mx-auto px-6 md:px-11 flex items-center justify-between h-16 gap-6">
        <Link href="/" className="font-[family-name:var(--font-fraunces)] text-[#4A2A43] text-xl tracking-[-0.01em] shrink-0">
          Blooming Health
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-[11px] tracking-[0.14em] uppercase font-[family-name:var(--font-jost)] font-[500] transition-colors duration-200 ${
                pathname === l.href ? "text-[#4A2A43]" : "text-[#44597A] hover:text-[#4A2A43]"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/membership"
            className="text-[11px] tracking-[0.14em] uppercase font-[500] bg-[#4A2A43] text-[#F6F2E9] px-5 py-2.5 rounded hover:bg-[#3a1f34] transition-colors duration-200"
          >
            Become a Member
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-[#44597A] p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            {open ? (
              <path d="M4 4L18 18M18 4L4 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            ) : (
              <path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-[rgba(36,28,32,0.14)] bg-[#F6F2E9] px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`text-[11px] tracking-[0.14em] uppercase font-[500] transition-colors ${
                pathname === l.href ? "text-[#4A2A43]" : "text-[#44597A]"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/membership"
            onClick={() => setOpen(false)}
            className="text-[11px] tracking-[0.14em] uppercase font-[500] bg-[#4A2A43] text-[#F6F2E9] px-5 py-2.5 rounded text-center"
          >
            Become a Member
          </Link>
        </div>
      )}
    </nav>
  );
}
