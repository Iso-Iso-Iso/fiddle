"use client";
import React, { useId } from "react";
import { FormControl, MenuItem, Select } from "@mui/material";
import { useController } from "react-hook-form";
import { StyledInputLabel } from "./dropdown.styles";

export const Dropdown = ({ control, name, items, label }) => {
  const labelId = useId();
  const {
    field: { value, onChange },
  } = useController({ control, name });

  return (
    <FormControl fullWidth>
      <StyledInputLabel size="small" id={labelId}>
        {label}
      </StyledInputLabel>
      <Select
        variant="outlined"
        labelId={labelId}
        value={value}
        size="small"
        onChange={onChange}
      >
        {items.map((item) => (
          <MenuItem key={item.value} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
