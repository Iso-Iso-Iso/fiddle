import React from "react";
import { StyledTypography } from "./typography.styles";

export const Typography = ({ variant, align, text, typographyRef, color }) => {
  return (
    <StyledTypography  ref={typographyRef} variant={variant} align={align} color={color}>
      {text}
    </StyledTypography>
  );
};
