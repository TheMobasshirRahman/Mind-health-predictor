// Tailwind's content scanner needs full class names to appear literally in
// the source — a template-literal like `grid-cols-${columns}` would not be
// detected, so every supported column count is spelled out here instead.
const GRID_COLUMN_CLASSES = {
  2: "grid gap-2.5 grid-cols-2",
  3: "grid gap-2.5 grid-cols-3",
  4: "grid gap-2.5 grid-cols-4",
};

export default function PillGroup({ options, value, onChange, columns = "auto" }) {
  const gridClass = columns === "auto" ? "flex flex-wrap gap-2.5" : GRID_COLUMN_CLASSES[columns];

  return (
    <div className={gridClass} role="radiogroup">
      {options.map((opt) => {
        const optValue = typeof opt === "string" ? opt : opt.value;
        const helper = typeof opt === "string" ? null : opt.helper;
        const isActive = value === optValue;

        return (
          <button
            key={optValue}
            type="button"
            role="radio"
            aria-checked={isActive}
            onClick={() => onChange(optValue)}
            className={[
              "rounded-xl border px-4 py-2.5 text-left transition-all duration-150",
              isActive
                ? "border-brand-600 bg-brand-600 text-white shadow-glow"
                : "border-mist bg-white text-ink-600 hover:border-brand-300 hover:bg-haze/60",
            ].join(" ")}
          >
            <span className={`block text-sm font-semibold ${isActive ? "text-white" : "text-ink"}`}>
              {optValue}
            </span>
            {helper && (
              <span className={`block text-xs ${isActive ? "text-white/75" : "text-ink-400"}`}>
                {helper}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
