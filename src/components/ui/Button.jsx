const VARIANTS = {
  primary:
    "bg-brand-600 text-white shadow-glow hover:bg-brand-700 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:pointer-events-none disabled:translate-y-0",
  secondary:
    "bg-white text-ink border border-mist hover:border-brand-300 hover:bg-haze/60 disabled:opacity-50 disabled:pointer-events-none",
  ghost: "text-ink-600 hover:text-ink hover:bg-mist-light disabled:opacity-50 disabled:pointer-events-none",
  teal: "bg-teal-600 text-white hover:bg-teal-700 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:pointer-events-none",
};

const SIZES = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-[15px]",
};

export default function Button({
  as: Tag = "button",
  variant = "primary",
  size = "md",
  icon: Icon,
  iconPosition = "right",
  className = "",
  children,
  ...props
}) {
  return (
    <Tag
      className={[
        "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-200",
        VARIANTS[variant],
        SIZES[size],
        className,
      ].join(" ")}
      {...props}
    >
      {Icon && iconPosition === "left" && <Icon size={17} strokeWidth={2.25} />}
      {children}
      {Icon && iconPosition === "right" && <Icon size={17} strokeWidth={2.25} />}
    </Tag>
  );
}
