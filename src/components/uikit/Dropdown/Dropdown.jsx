"use client";
import React, { useId } from "react";
import { FormControl, MenuItem } from "@mui/material";
import { useController } from "react-hook-form";
import { StyledInputLabel, StyledSelect } from "./dropdown.styles";

export const Dropdown = ({
  control,
  name,
  items,
  label,
  valueField = "value",
  labelField = "label",
}) => {
  const labelId = useId();
  const {
    field: { value, onChange },
  } = useController({ control, name });

  return (
    <FormControl fullWidth>
      <StyledInputLabel size="small" id={labelId}>
        {label}
      </StyledInputLabel>
      <StyledSelect
        variant="outlined"
        labelId={labelId}
        value={value}
        size="small"
        onChange={onChange}
      >

        {items.map((item) => (
          <MenuItem key={item[valueField]} value={item[valueField]}>
            {item[labelField]}
          </MenuItem>
        ))}
      </StyledSelect>
    </FormControl>
  );
};
