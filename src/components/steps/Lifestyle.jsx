import { BookOpen, Activity, Moon } from "lucide-react";
import SliderField from "../ui/SliderField";
import { RANGE_RULES } from "../../lib/formConfig";

export default function Lifestyle({ data, onChange }) {
  return (
    <div className="space-y-8">
      <SliderField
        icon={BookOpen}
        label="Study Hours"
        description="Average time spent studying per day."
        value={data.Study_Hours}
        onChange={(v) => onChange("Study_Hours", v)}
        {...RANGE_RULES.Study_Hours}
      />

      <SliderField
        icon={Activity}
        label="Physical Activity"
        description="Average time spent exercising or moving per day."
        value={data.Physical_Activity_Hours}
        onChange={(v) => onChange("Physical_Activity_Hours", v)}
        {...RANGE_RULES.Physical_Activity_Hours}
      />

      <SliderField
        icon={Moon}
        label="Sleep Per Night"
        description="Average hours of sleep on a typical night."
        value={data.Sleep_Hours_Per_Night}
        onChange={(v) => onChange("Sleep_Hours_Per_Night", v)}
        {...RANGE_RULES.Sleep_Hours_Per_Night}
      />
    </div>
  );
}
