import React from "react";
import { Icon } from "@/components/uikit/Icon/Icon";
import MuiIconButton from "@mui/material/IconButton";

export const IconButton = ({ name, size, onClick, color }) => {
  return (
    <MuiIconButton
      color={color}
      size="small"
      aria-label="Example"
      onClick={onClick}
    >
      <Icon name={name} size={size} />
    </MuiIconButton>
  );
};
