import { Calendar, User, Globe, GraduationCap } from "lucide-react";
import FieldShell from "../ui/FieldShell";
import PillGroup from "../ui/PillGroup";
import SelectField from "../ui/SelectField";
import { AGE_OPTIONS, GENDER_OPTIONS, COUNTRY_OPTIONS, ACADEMIC_LEVEL_OPTIONS } from "../../lib/formConfig";

export default function PersonalInfo({ data, onChange }) {
  return (
    <div className="space-y-8">
      <FieldShell icon={Calendar} label="Age" description="Valid range: 18–24 years.">
        <PillGroup options={AGE_OPTIONS.map(String)} value={String(data.Age)} onChange={(v) => onChange("Age", Number(v))} />
      </FieldShell>

      <FieldShell icon={User} label="Gender">
        <PillGroup options={GENDER_OPTIONS} value={data.Gender} onChange={(v) => onChange("Gender", v)} />
      </FieldShell>

      <SelectField
        icon={Globe}
        label="Country"
        description="Used to group regional patterns in the model."
        value={data.Country}
        onChange={(v) => onChange("Country", v)}
        options={COUNTRY_OPTIONS}
      />

      <FieldShell icon={GraduationCap} label="Academic Level">
        <PillGroup
          options={ACADEMIC_LEVEL_OPTIONS}
          value={data.Academic_Level}
          onChange={(v) => onChange("Academic_Level", v)}
        />
      </FieldShell>
    </div>
  );
}
