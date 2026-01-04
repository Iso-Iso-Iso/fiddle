import React from "react";
import { StyledButton } from "./button.styles";

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
    <StyledButton
      href={href}
      variant={variant}
      color={color}
      size={size}
      onClick={onClick}
      fullWidth={fullWidth}
      loading={loading}
    >
      {text}
    </StyledButton>
  );
};
