"use client";

import { Button, styled } from "@mui/material";

export const StyledButton = styled(Button)(({ theme, variant }) => {
  const colorByVariant = {
    contained: theme.palette.common.white,
    outlined: theme.palette.primary,
    textColor: theme.palette.primary,
  };

  return {
    color: colorByVariant[variant],
    borderRadius: theme.shape.fullRounded,
  };
});
