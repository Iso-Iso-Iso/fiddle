"use client";

import { InputLabel, styled } from "@mui/material";

export const StyledInputLabel = styled(InputLabel)(({ theme }) => ({
  background: theme.palette.common.white,
  paddingInline: theme.spacing(1),
}));
