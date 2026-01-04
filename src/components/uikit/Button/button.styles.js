"use client";

import { Button, styled } from "@mui/material";

export const StyledButton = styled(Button)(({ theme }) => ({
  color: theme.palette.common.white,
  borderRadius: theme.shape.fullRounded,
}));
