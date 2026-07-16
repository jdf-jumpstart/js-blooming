/**
 * Decorative brand motifs derived from the Blooming Health logo mark
 * (a filled disc overlapping an open ring). Used as line-art texture
 * to reinforce the "circular, flowing, collaborative" brand idea from
 * client feedback — never as literal clipart or gradient decoration.
 */

type Tone = "plum" | "ivory" | "navy" | "gray" | "sage";

const TONES: Record<Tone, string> = {
  plum: "#4A2A43",
  ivory: "#FAF8F3",
  navy: "#1B2A45",
  gray: "#C9CDD3",
  sage: "#889A7C",
};

/** Each tone drifts along its own slow, looping path so instances don't move in lockstep. */
const DRIFT: Record<Tone, string> = {
  plum: "motif-drift-b",
  navy: "motif-drift-c",
  ivory: "motif-drift-a",
  gray: "motif-drift-a",
  sage: "motif-drift-a",
};

/** Two overlapping circles echoing the logo mark — a corner/watermark accent. */
export function RingAccent({
  className = "",
  tone = "plum",
}: {
  className?: string;
  tone?: Tone;
}) {
  const stroke = TONES[tone];
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 220 220"
      className={`${DRIFT[tone]} ${className}`}
    >
      <circle cx="82" cy="146" r="64" fill="none" stroke={stroke} strokeWidth="1.5" opacity="0.3" />
      <circle cx="138" cy="86" r="40" fill="none" stroke={stroke} strokeWidth="1.5" opacity="0.5" />
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
      className={`pointer-events-none absolute inset-x-0 -bottom-px z-10 ${className}`}
    >
      <svg
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        className="block h-[43px] w-full md:h-[77px]"
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
