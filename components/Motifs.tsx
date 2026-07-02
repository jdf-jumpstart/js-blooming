/**
 * Decorative brand motifs derived from the Blooming Health logo mark
 * (a filled disc overlapping an open ring). Used as line-art texture
 * to reinforce the "circular, flowing, collaborative" brand idea from
 * client feedback — never as literal clipart or gradient decoration.
 */

type Tone = "sage" | "plum" | "ivory" | "navy";

const TONES: Record<Tone, string> = {
  sage: "#889A7C",
  plum: "#4A2A43",
  ivory: "#F6F2E9",
  navy: "#1B2A45",
};

/** Two overlapping circles echoing the logo mark — a corner/watermark accent. */
export function RingAccent({
  className = "",
  tone = "sage",
}: {
  className?: string;
  tone?: Tone;
}) {
  const stroke = TONES[tone];
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 220 220"
      className={className}
    >
      <circle cx="82" cy="146" r="64" fill="none" stroke={stroke} strokeWidth="1.5" opacity="0.3" />
      <circle cx="138" cy="86" r="40" fill="none" stroke={stroke} strokeWidth="1.5" opacity="0.5" />
    </svg>
  );
}

/** A flower-of-life style bloom built from overlapping ring circles — the "blooming" motif. */
export function BloomMotif({
  className = "",
  tone = "sage",
}: {
  className?: string;
  tone?: Tone;
}) {
  const stroke = TONES[tone];
  const petals = Array.from({ length: 6 });
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 240 240"
      className={className}
    >
      <g fill="none" stroke={stroke} strokeWidth="1.25" opacity="0.4">
        {petals.map((_, i) => {
          const angle = (i * 60 * Math.PI) / 180;
          const cx = 120 + Math.cos(angle) * 44;
          const cy = 120 + Math.sin(angle) * 44;
          return <circle key={i} cx={cx} cy={cy} r="40" />;
        })}
        <circle cx="120" cy="120" r="19" />
      </g>
    </svg>
  );
}

/**
 * A gentle flowing curve painted in the next section's color, laid over the
 * bottom of the current section to soften the hard rectangular seam between
 * stacked color blocks.
 */
export function FlowDivider({
  fill,
  flip = false,
  className = "",
}: {
  fill: string;
  flip?: boolean;
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-x-0 bottom-0 z-10 ${className}`}
    >
      <svg
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        className="block h-[42px] w-full md:h-[76px]"
        style={flip ? { transform: "scaleY(-1)" } : undefined}
      >
        <path
          d="M0,58 C220,98 340,14 620,36 C900,58 1040,6 1440,44 L1440,100 L0,100 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
