"use client";

import { useState } from "react";
import Link from "next/link";

const plans = [
  {
    name: "Individual",
    monthly: 100,
    annual: 1200,
    description: "Full membership for one adult. Up to 15 visits, direct access, same-day care.",
    highlight: false,
  },
  {
    name: "Family",
    monthly: 250,
    annual: 3000,
    description: "Couple membership plus up to 3 children in the same household.",
    highlight: true,
  },
  {
    name: "Couple",
    monthly: 167,
    annual: 2000,
    description: "Membership for two adults in the same household. Both members get the full experience.",
    highlight: false,
  },
];

export default function PricingToggle() {
  const [billing, setBilling] = useState<"monthly" | "annual">("monthly");

  return (
    <div>
      {/* Toggle */}
      <div className="flex items-center gap-1 mb-12 border border-[rgba(36,28,32,0.2)] rounded-sm w-fit p-0.5">
        {(["monthly", "annual"] as const).map((option) => (
          <button
            key={option}
            onClick={() => setBilling(option)}
            className={`px-6 py-3 text-[16px] tracking-[0.18em] uppercase font-[500] transition-colors duration-200 rounded-sm ${
              billing === option
                ? "bg-[#1B2A45] text-[#FAF8F3]"
                : "text-[#44597A] hover:text-[#2B2329]"
            }`}
          >
            {option}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {plans.map((plan) => {
          const price =
            billing === "monthly"
              ? `$${plan.monthly}`
              : `$${plan.annual.toLocaleString()}`;
          const unit = billing === "monthly" ? "/mo" : "/yr";
          const sub =
            billing === "monthly"
              ? `$${plan.annual.toLocaleString()} billed annually`
              : `$${plan.monthly}/mo equivalent`;

          return (
            <div
              key={plan.name}
              className={`rounded-md border p-7 flex flex-col transition-transform duration-300 hover:-translate-y-2 ${
                plan.highlight
                  ? "bg-[#1B2A45] border-[#1B2A45] text-[#FAF8F3] md:-mt-4 md:mb-4 shadow-lg"
                  : "bg-[#FAF8F3] border-[rgba(36,28,32,0.14)] text-[#2B2329]"
              }`}
            >
              {plan.highlight && (
                <div className="text-[16px] tracking-[0.24em] uppercase font-[500] mb-3 text-[#889A7C]">
                  Most popular
                </div>
              )}
              <div className={`text-[16px] tracking-[0.24em] uppercase font-[500] mb-4 ${plan.highlight ? "text-[#C9CDD3]" : "text-[#44597A]"}`}>
                {plan.name}
              </div>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="font-[family-name:var(--font-fraunces)] text-[52px] leading-none">
                  {price}
                </span>
                <span className={`text-[21px] font-[500] ${plan.highlight ? "text-[#C9CDD3]" : "text-[#44597A]"}`}>
                  {unit}
                </span>
              </div>
              <div className={`text-[16px] mb-5 ${plan.highlight ? "text-[#C9CDD3]" : "text-[#44597A]"}`}>
                {sub}
              </div>
              <p className={`text-[21px] leading-relaxed flex-1 ${plan.highlight ? "text-[#F5F1E8]" : "text-[#2B2329]"}`}>
                {plan.description}
              </p>
              <div className="mt-7">
                <Link
                  href="/contact"
                  className={`text-[16px] tracking-[0.18em] uppercase font-[500] border px-5 py-3 inline-block transition-colors duration-200 ${
                    plan.highlight
                      ? "border-[#FAF8F3] text-[#FAF8F3] hover:bg-[#FAF8F3] hover:text-[#1B2A45]"
                      : "border-[#1B2A45] text-[#1B2A45] hover:bg-[#1B2A45] hover:text-[#FAF8F3]"
                  }`}
                >
                  Get started
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
