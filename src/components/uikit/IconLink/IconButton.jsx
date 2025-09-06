import React from "react";
import { Icon } from "@/components/uikit/Icon/Icon";
import MuiIconButton from "@mui/material/IconButton";

export const IconButton = ({ name }) => {
  return (
    <MuiIconButton size="small" aria-label="Example">
      <Icon name={name} />
    </MuiIconButton>
  );
};
