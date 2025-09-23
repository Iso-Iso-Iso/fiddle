"use client";
import { Box, styled } from "@mui/material";

export const Heading = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(1),
  alignItems: "center",
}));
