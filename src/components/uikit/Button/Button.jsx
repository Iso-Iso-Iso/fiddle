import React from "react";
import MButton from "@mui/material/Button";

export const Button = ({
  text,
  onClick,
  variant = "contained",
  color = "primary",
  fullWidth,
  loading,
  size,
  href,
}) => {
  return (
    <MButton
      href={href}
      variant={variant}
      color={color}
      size={size}
      onClick={onClick}
      fullWidth={fullWidth}
      loading={loading}
    >
      {text}
    </MButton>
  );
};
