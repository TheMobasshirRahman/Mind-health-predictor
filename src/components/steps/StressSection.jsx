import { Zap } from "lucide-react";
import FieldShell from "../ui/FieldShell";
import PillGroup from "../ui/PillGroup";
import { STRESS_OPTIONS } from "../../lib/formConfig";

export default function StressSection({ data, onChange }) {
  return (
    <div>
      <FieldShell
        icon={Zap}
        label="Stress Level"
        description="How would you describe your day-to-day stress recently?"
      >
        <PillGroup
          options={STRESS_OPTIONS}
          value={data.Stress_Level}
          onChange={(v) => onChange("Stress_Level", v)}
          columns={2}
        />
      </FieldShell>
    </div>
  );
}
