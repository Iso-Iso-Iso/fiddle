import React from "react";
import MuiTypography from "@mui/material/Typography";

export const Typography = ({ variant, align, text }) => {
  return (
    <MuiTypography variant={variant} align={align}>
      {text}
    </MuiTypography>
  );
};
