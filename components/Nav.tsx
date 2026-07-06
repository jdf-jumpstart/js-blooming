"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "./Logo";

type ChildLink = { href: string; label: string };
type NavLink = { href: string; label: string; children?: never } | { href?: never; label: string; children: ChildLink[] };

const links: NavLink[] = [
  { href: "/services", label: "Services" },
  { href: "/membership", label: "Membership" },
  {
    label: "About",
    children: [
      { href: "/about", label: "The Practice" },
      { href: "/what-is-concierge-care", label: "What Is Concierge Care?" },
    ],
  },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <nav
      className="sticky top-0 z-40 border-b border-[rgba(36,28,32,0.14)]"
      style={{ background: "rgba(246,242,233,0.92)", backdropFilter: "blur(12px)" }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-11 flex items-center justify-between h-16 gap-6">
        <Link href="/" className="shrink-0">
          <Logo height={34} />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {links.map((l) => {
            if (l.children) {
              const isActive = l.children.some((c) => pathname === c.href);
              return (
                <div key={l.label} className="relative group">
                  <button
                    className={`text-[12px] tracking-[0.14em] uppercase font-[family-name:var(--font-jost)] font-[500] transition-colors duration-200 flex items-center gap-1 ${
                      isActive ? "text-[#1B2A45]" : "text-[#44597A] hover:text-[#1B2A45]"
                    }`}
                  >
                    {l.label}
                    <svg
                      width="10"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                      className="mt-[1px] transition-transform duration-200 group-hover:rotate-180"
                    >
                      <path
                        d="M1 1L5 5L9 1"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <div className="absolute top-full left-0 pt-2 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-150">
                    <div className="bg-[#F6F2E9] border border-[rgba(36,28,32,0.14)] rounded shadow-sm py-1 min-w-[160px]">
                      {l.children.map((c) => (
                        <Link
                          key={c.href}
                          href={c.href}
                          className={`block px-4 py-2.5 text-[12px] tracking-[0.14em] uppercase font-[500] transition-colors duration-150 ${
                            pathname === c.href
                              ? "text-[#1B2A45]"
                              : "text-[#44597A] hover:text-[#1B2A45]"
                          }`}
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={l.href}
                href={l.href}
                className={`text-[12px] tracking-[0.14em] uppercase font-[family-name:var(--font-jost)] font-[500] transition-colors duration-200 ${
                  pathname === l.href ? "text-[#1B2A45]" : "text-[#44597A] hover:text-[#1B2A45]"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
          <Link
            href="/membership"
            className="text-[12px] tracking-[0.14em] uppercase font-[500] bg-[#1B2A45] text-[#F6F2E9] px-5 py-2.5 rounded hover:bg-[#162237] transition-colors duration-200"
          >
            Become a Member
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-[#44597A] p-3 -mr-3 flex items-center justify-center"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            {open ? (
              <path
                d="M4 4L18 18M18 4L4 18"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M3 6h16M3 11h16M3 16h16"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-[rgba(36,28,32,0.14)] bg-[#F6F2E9] px-6 py-2 flex flex-col">
          {links.map((l) => {
            if (l.children) {
              return (
                <div key={l.label}>
                  <button
                    onClick={() => setAboutOpen(!aboutOpen)}
                    className={`w-full py-3 text-[12px] tracking-[0.14em] uppercase font-[500] transition-colors flex items-center gap-1 ${
                      l.children.some((c) => pathname === c.href)
                        ? "text-[#1B2A45]"
                        : "text-[#44597A]"
                    }`}
                  >
                    {l.label}
                    <svg
                      width="10"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                      className={`mt-[1px] transition-transform ${aboutOpen ? "rotate-180" : ""}`}
                    >
                      <path
                        d="M1 1L5 5L9 1"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  {aboutOpen && (
                    <div className="ml-4 flex flex-col">
                      {l.children.map((c) => (
                        <Link
                          key={c.href}
                          href={c.href}
                          onClick={() => {
                            setOpen(false);
                            setAboutOpen(false);
                          }}
                          className={`py-2.5 text-[12px] tracking-[0.14em] uppercase font-[500] transition-colors ${
                            pathname === c.href ? "text-[#1B2A45]" : "text-[#44597A]"
                          }`}
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`py-3 text-[12px] tracking-[0.14em] uppercase font-[500] transition-colors ${
                  pathname === l.href ? "text-[#1B2A45]" : "text-[#44597A]"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
          <Link
            href="/membership"
            onClick={() => setOpen(false)}
            className="mt-2 text-[12px] tracking-[0.14em] uppercase font-[500] bg-[#1B2A45] text-[#F6F2E9] px-5 py-3.5 rounded text-center"
          >
            Become a Member
          </Link>
        </div>
      )}
    </nav>
  );
}
