"use client";
import { Box, styled } from "@mui/material";

export const Wrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  paddingTop: theme.spacing(10),
  gap: theme.spacing(2),
}));

export const Name = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(2),
  flex: 1,
}));

export const ButtonWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-end",
}));
