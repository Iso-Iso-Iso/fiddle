"use client";
import { Box, styled } from "@mui/material";

export const Wrapper = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(4),
}));

export const Heading = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: theme.spacing(2),
}));

export const ImageGrid = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(2),
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
}));
