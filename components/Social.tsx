/**
 * Social marks, drawn as one monoline set rather than pulled from an icon
 * font: the stock brand glyphs are solid and would sit heavier than anything
 * else on the page. Same 24 viewBox, same stroke weight, same rounded square
 * around each letterform, so the three read as siblings.
 *
 * Add a `href` below as each account comes in; entries without one are skipped,
 * so no dead links ship in the meantime.
 */

const iconProps = {
  viewBox: "0 0 24 24",
  width: 22,
  height: 22,
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

function Frame() {
  return <rect x="3" y="3" width="18" height="18" rx="5" />;
}

function FacebookIcon() {
  return (
    <svg {...iconProps}>
      <Frame />
      {/* The "f": a stem that hooks left into the arm, plus the crossbar. */}
      <path d="M14.4 7.9h-1.1a2 2 0 0 0-2 2v6.6" />
      <path d="M9.6 12.2h4.1" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg {...iconProps}>
      <Frame />
      <circle cx="12" cy="12" r="4" />
      <circle cx="16.9" cy="7.1" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg {...iconProps}>
      <Frame />
      {/* "in": the i's tittle and stem, then the n's stem and shoulder. */}
      <circle cx="8.3" cy="8.2" r="0.9" fill="currentColor" stroke="none" />
      <path d="M8.3 10.9v5.4" />
      <path d="M11.9 16.3v-5.4" />
      <path d="M11.9 13.4a1.9 1.9 0 0 1 3.8 0v2.9" />
    </svg>
  );
}

const accounts = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61592472411672",
    Icon: FacebookIcon,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/blooming_conciergecare/",
    Icon: InstagramIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/blooming-concierge-care/",
    Icon: LinkedInIcon,
  },
];

export default function SocialLinks({ className = "" }: { className?: string }) {
  const live = accounts.filter((a) => a.href);
  if (live.length === 0) return null;

  return (
    <ul className={`flex items-center gap-4 ${className}`}>
      {live.map(({ label, href, Icon }) => (
        <li key={label}>
          <a
            href={href as string}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Blooming Health on ${label}`}
            className="block text-[#44597A] hover:text-[#1B2A45] transition-colors duration-200"
          >
            <Icon />
          </a>
        </li>
      ))}
    </ul>
  );
}
