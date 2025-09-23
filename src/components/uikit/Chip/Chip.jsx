import React from "react";
import MuiChip from "@mui/material/Chip";

export const Chip = ({label, color}) => {
  return <MuiChip label={label} color={color} size="small" />;
};
