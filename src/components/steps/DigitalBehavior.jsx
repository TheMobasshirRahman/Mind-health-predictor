import { Smartphone, Target } from "lucide-react";
import FieldShell from "../ui/FieldShell";
import PillGroup from "../ui/PillGroup";
import SelectField from "../ui/SelectField";
import SliderField from "../ui/SliderField";
import { PLATFORM_OPTIONS, PURPOSE_OPTIONS, RANGE_RULES } from "../../lib/formConfig";

export default function DigitalBehavior({ data, onChange }) {
  return (
    <div className="space-y-8">
      <SelectField
        icon={Smartphone}
        label="Most Used Platform"
        description="Which app do you spend the most time on?"
        value={data.Most_Used_Platform}
        onChange={(v) => onChange("Most_Used_Platform", v)}
        options={PLATFORM_OPTIONS}
      />

      <FieldShell icon={Target} label="Purpose Of Use" description="What do you mainly use it for?">
        <PillGroup options={PURPOSE_OPTIONS} value={data.Purpose_Of_Use} onChange={(v) => onChange("Purpose_Of_Use", v)} />
      </FieldShell>

      <SliderField
        label="Average Daily Usage"
        description="Total time spent on social media per day."
        value={data.Avg_Daily_Usage_Hours}
        onChange={(v) => onChange("Avg_Daily_Usage_Hours", v)}
        {...RANGE_RULES.Avg_Daily_Usage_Hours}
      />

      <SliderField
        label="Daily Unlocks"
        description="Roughly how many times you unlock your phone per day."
        value={data.Daily_Unlocks}
        onChange={(v) => onChange("Daily_Unlocks", v)}
        decimals={0}
        {...RANGE_RULES.Daily_Unlocks}
      />
    </div>
  );
}
