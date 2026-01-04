"use client";
import { Box, styled } from "@mui/material";

export const Wrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  height: "60px",
  borderRadius: theme.shape.fullRounded,
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(2),
}));

export const UnstyledInput = styled("input")(({ theme }) => ({
  outline: "none",
  border: "none",
}));

export const InputLabel = styled("label")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  marginRight: "auto",
}));
