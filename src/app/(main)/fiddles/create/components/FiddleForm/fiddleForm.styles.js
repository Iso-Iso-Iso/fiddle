"use client";

import { styled } from "@mui/material";

export const FormWrapper = styled("form")(({ theme }) => ({
  paddingTop: theme.spacing(7),
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(4),
}));
