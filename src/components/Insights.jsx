import { Clock, Moon, BookOpen, RefreshCw, Zap, Smartphone } from "lucide-react";

export default function Insights({ data }) {
  const items = [
    { icon: Clock, label: "Digital Usage", value: `${data.Avg_Daily_Usage_Hours} hrs/day` },
    { icon: Moon, label: "Sleep", value: `${data.Sleep_Hours_Per_Night} hrs/night` },
    { icon: BookOpen, label: "Study", value: `${data.Study_Hours} hrs/day` },
    { icon: RefreshCw, label: "Daily Unlocks", value: `${data.Daily_Unlocks}` },
    { icon: Zap, label: "Stress", value: data.Stress_Level },
    { icon: Smartphone, label: "Platform", value: data.Most_Used_Platform },
  ];

  return (
    <section className="pb-16 sm:pb-24">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <p className="text-center font-mono text-xs font-semibold uppercase tracking-wider text-ink-400">
          Based on what you submitted
        </p>
        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {items.map(({ icon: Icon, label, value }) => (
            <div key={label} className="rounded-xl border border-mist bg-white p-4 text-center shadow-soft">
              <span className="mx-auto flex h-9 w-9 items-center justify-center rounded-lg bg-haze text-brand-600">
                <Icon size={16} strokeWidth={2} />
              </span>
              <p className="mt-2.5 truncate font-display text-[15px] font-semibold text-ink">{value}</p>
              <p className="text-xs text-ink-400">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
