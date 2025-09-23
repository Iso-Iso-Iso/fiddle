import React from "react";
import { StyledTypography } from "./typography.styles";

export const Typography = ({ variant, align, text, typographyRef }) => {
  return (
    <StyledTypography ref={typographyRef} variant={variant} align={align}>
      {text}
    </StyledTypography>
  );
};
