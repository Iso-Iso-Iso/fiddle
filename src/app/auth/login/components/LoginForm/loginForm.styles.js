"use client";
import { Box, styled } from "@mui/material";

export const FormWrapper = styled(Box)(({ theme }) => ({
  width: 370,
  height: 480,
  background: theme.palette.common.white,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[10],
  display: "flex",
  flexDirection: "column",
  padding: theme.spacing(2),
  justifyContent: "space-between",
}));

export const Inputs = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
}));
