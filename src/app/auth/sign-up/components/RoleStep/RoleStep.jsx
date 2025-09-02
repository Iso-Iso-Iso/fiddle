import React from "react";
import { RadioGroup } from "@/components/uikit/RadioGroup/RadioGroup";

const items = [
  { label: "Freelancer", value: "FREELANCER" },
  { label: "Employer", value: "EMPLOYER" },
];

export const RoleStep = ({ control }) => {
  return <RadioGroup control={control} name="role" items={items} />;
};
