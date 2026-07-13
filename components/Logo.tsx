export default function Logo({
  height = 36,
  reversed = false,
}: {
  height?: number;
  reversed?: boolean;
}) {
  const disc = reversed ? "#F6F2E9" : "#4A2A43";
  const wordmark = reversed ? "#F6F2E9" : "#1B2A45";

  return (
    <svg
      viewBox="0 65 639 100"
      height={height}
      style={{ width: "auto", display: "block" }}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Blooming Health"
    >
      <circle cx="68" cy="118" r="38" fill={disc} />
      <circle cx="97.6" cy="94.4" r="24" fill="none" stroke="#1B2A45" strokeWidth="8.5" />
      <text
        x="159.9"
        y="132"
        textAnchor="start"
        fontFamily="Jost, sans-serif"
        fontWeight="500"
        fontSize="60"
        letterSpacing="1.5"
        fill={wordmark}
      >
        blooming health
      </text>
    </svg>
  );
}
