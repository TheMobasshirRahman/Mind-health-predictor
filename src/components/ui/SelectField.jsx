import { ChevronDown } from "lucide-react";

export default function SelectField({ icon: Icon, label, description, value, onChange, options, id }) {
  const selectId = id || label.replace(/\s+/g, "-").toLowerCase();

  return (
    <div>
      <div className="flex items-start gap-3">
        {Icon && (
          <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-haze text-brand-600">
            <Icon size={18} strokeWidth={2} />
          </span>
        )}
        <div className="w-full">
          <label htmlFor={selectId} className="font-display text-[15px] font-semibold text-ink">
            {label}
          </label>
          {description && <p className="mt-0.5 text-sm text-ink-600">{description}</p>}

          <div className="relative mt-3">
            <select
              id={selectId}
              value={value}
              onChange={(e) => onChange(e.target.value)}
              className="w-full appearance-none rounded-xl border border-mist bg-white px-4 py-3 pr-10 text-sm font-medium text-ink shadow-soft transition-colors hover:border-brand-300 focus:border-brand-500"
            >
              {options.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            <ChevronDown
              size={16}
              className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-ink-400"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
