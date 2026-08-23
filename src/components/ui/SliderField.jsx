export default function SliderField({
  icon: Icon,
  label,
  description,
  value,
  min,
  max,
  step = 1,
  unit = "",
  decimals = 1,
  onChange,
}) {
  const percent = ((Number(value) - min) / (max - min)) * 100;
  const displayValue = Number.isInteger(step) ? Math.round(value) : Number(value).toFixed(decimals);

  return (
    <div>
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-3">
          {Icon && (
            <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-haze text-brand-600">
              <Icon size={18} strokeWidth={2} />
            </span>
          )}
          <div>
            <label className="font-display text-[15px] font-semibold text-ink">{label}</label>
            {description && <p className="mt-0.5 text-sm text-ink-600">{description}</p>}
          </div>
        </div>
        <span className="shrink-0 rounded-lg bg-ink px-2.5 py-1 font-mono text-sm font-semibold tabular-nums text-white">
          {displayValue}
          {unit && <span className="ml-1 text-[11px] font-medium text-white/60">{unit}</span>}
        </span>
      </div>

      <div className="mt-4">
        <input
          type="range"
          className="mindscore-slider"
          style={{ "--slider-fill": `${percent}%` }}
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          aria-label={label}
          aria-valuemin={min}
          aria-valuemax={max}
          aria-valuenow={Number(value)}
          aria-describedby={description ? undefined : undefined}
        />
        <div className="mt-1.5 flex justify-between font-mono text-[11px] text-ink-400">
          <span>
            {min}
            {unit ? ` ${unit}` : ""}
          </span>
          <span>
            {max}
            {unit ? ` ${unit}` : ""}
          </span>
        </div>
      </div>
    </div>
  );
}
