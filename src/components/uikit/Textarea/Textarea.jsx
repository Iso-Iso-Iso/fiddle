import React from "react";
import MuiTextField from "@mui/material/TextField";
import { useController } from "react-hook-form";

export const Textarea = ({ label, placeholder, control, name }) => {
  const {
    field: { value, onChange },
  } = useController({ control, name });

  return (
    <MuiTextField
      value={value}
      onChange={onChange}
      label={label}
      rows={5}
      placeholder={placeholder}
      multiline
    />
  );
};
