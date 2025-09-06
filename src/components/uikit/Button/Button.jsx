import React from "react";
import MButton from "@mui/material/Button";

export const Button = ({
  text,
  onClick,
  variant = "contained",
  color = "primary",
  fullWidth,
  loading,
  href,
}) => {
  return (
    <MButton
      href={href}
      variant={variant}
      color={color}
      onClick={onClick}
      fullWidth={fullWidth}
      loading={loading}
    >
      {text}
    </MButton>
  );
};
