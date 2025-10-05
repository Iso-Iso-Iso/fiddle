"use client";
import { Box, styled } from "@mui/material";

export const CardGrid = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(8, 1fr)",
  gap: theme.spacing(2),
}));

export const CategoryText = styled("span")(({ theme }) => ({
  display: "block",
}));
