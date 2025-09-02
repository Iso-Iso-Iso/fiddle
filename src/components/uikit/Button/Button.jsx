import React from "react";
import MButton from "@mui/material/Button";

export const Button = ({ text, onClick, variant = "contained", fullWidth, loading }) => {
  return (
    <MButton variant={variant} onClick={onClick} fullWidth={fullWidth} loading={loading}>
      {text}
    </MButton>
  );
};
