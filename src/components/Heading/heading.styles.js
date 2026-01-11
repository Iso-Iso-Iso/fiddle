"use client";
import { Box, styled } from "@mui/material";

export const Wrapper = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(5),
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1),
}));
