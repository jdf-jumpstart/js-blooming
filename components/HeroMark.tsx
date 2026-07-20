/**
 * Animated hero version of the logo mark: the filled disc and open ring
 * drift in from opposite corners and settle into the same overlapping
 * position used in the static Logo. Falls back to the settled position
 * with no motion when the user prefers reduced motion.
 */
export default function HeroMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 220 190"
      className={className}
      aria-hidden="true"
      style={{ overflow: "visible" }}
    >
      <circle className="hero-mark-disc" cx="90" cy="110" r="50" fill="#FAF8F3" />
      <circle
        className="hero-mark-ring"
        cx="129"
        cy="79"
        r="32"
        fill="none"
        stroke="#889A7C"
        strokeWidth="11"
      />
    </svg>
  );
}
