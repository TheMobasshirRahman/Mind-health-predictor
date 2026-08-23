export default function FieldShell({ icon: Icon, label, description, children }) {
  return (
    <div>
      <div className="flex items-start gap-3">
        {Icon && (
          <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-haze text-brand-600">
            <Icon size={18} strokeWidth={2} />
          </span>
        )}
        <div className="w-full">
          <span className="font-display text-[15px] font-semibold text-ink">{label}</span>
          {description && <p className="mt-0.5 text-sm text-ink-600">{description}</p>}
          <div className="mt-3">{children}</div>
        </div>
      </div>
    </div>
  );
}
