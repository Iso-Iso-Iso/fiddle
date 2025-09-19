import React from "react";
import { StyledTypography } from "./typography.styles";

export const Typography = ({ variant, align, text }) => {
  return (
    <StyledTypography variant={variant} align={align}>
      {text}
    </StyledTypography>
  );
};
