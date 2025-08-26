import React from "react";
import MButton from "@mui/material/Button";

export const Button = ({ text, onClick, variant = "contained", fullWidth }) => {
  return (
    <MButton variant={variant} onClick={onClick} fullWidth={fullWidth}>
      {text}
    </MButton>
  );
};
