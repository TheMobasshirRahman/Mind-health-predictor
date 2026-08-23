const PATH = "M-10,122 C40,62 90,40 150,76 C210,112 232,158 292,150 C352,142 372,80 432,48 C482,22 522,46 562,76 C580,90 596,98 610,104";

const NODES = [
  { x: 55, y: 68, label: "Wake" },
  { x: 272, y: 150, label: "Study" },
  { x: 440, y: 45, label: "Scroll" },
  { x: 562, y: 76, label: "Sleep" },
];

/**
 * Decorative "daily digital rhythm" line — the app's signature motif.
 * variant="hero": full illustration with labeled nodes.
 * variant="divider": bare, low-opacity section divider.
 */
export default function RhythmLine({ variant = "hero", className = "" }) {
  const gradientId = variant === "hero" ? "rhythmGradientHero" : "rhythmGradientDivider";

  return (
    <svg
      viewBox="0 0 600 200"
      fill="none"
      className={className}
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="600" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#818CF8" />
          <stop offset="0.55" stopColor="#6366F1" />
          <stop offset="1" stopColor="#2DD4BF" />
        </linearGradient>
      </defs>

      <path
        d={PATH}
        stroke={`url(#${gradientId})`}
        strokeWidth={variant === "hero" ? 3.5 : 2}
        strokeLinecap="round"
        pathLength="1"
        strokeDasharray="1"
        className="animate-[draw-in_1.8s_cubic-bezier(0.16,1,0.3,1)_forwards]"
        style={{ opacity: variant === "hero" ? 1 : 0.35 }}
      />

      {variant === "hero" &&
        NODES.map((node) => (
          <g key={node.label}>
            <circle cx={node.x} cy={node.y} r="5" fill="#F8FAFC" stroke="#4F46E5" strokeWidth="2.5" />
            <text
              x={node.x}
              y={node.y > 100 ? node.y + 24 : node.y - 16}
              textAnchor="middle"
              className="fill-ink-600"
              style={{ font: "600 12px 'IBM Plex Mono', monospace", letterSpacing: "0.02em" }}
            >
              {node.label}
            </text>
          </g>
        ))}
    </svg>
  );
}
