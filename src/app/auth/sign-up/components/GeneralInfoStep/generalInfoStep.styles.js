"use client";
import { Box, styled } from "@mui/material";
import theme from "@/theme";

export const Inputs = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
});

export const UserPersonalInfo = styled(Box)({
  display: "flex",
  gap: theme.spacing(2),
});
