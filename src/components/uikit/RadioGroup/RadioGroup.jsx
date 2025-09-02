import React from "react";

import {
  ControlLabel,
  InvisibleRadio,
  RadioGroupWrapper,
} from "./radioGroup.styles";
import { useController } from "react-hook-form";

export const RadioGroup = ({ control, name, items }) => {
  const {
    field: { value, onChange },
  } = useController({ control, name });

  const handleChange = (event) => onChange(event.target.value);

  return (
    <RadioGroupWrapper value={value} onChange={handleChange}>
      {items.map((item) => (
        <ControlLabel
          checked={item.value === value}
          control={<InvisibleRadio />}
          key={item.value}
          value={item.value}
          label={item.label}
        />
      ))}
    </RadioGroupWrapper>
  );
};
