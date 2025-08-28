"use client";
import { Box, styled } from "@mui/material";

export const PageContent = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(2),
  paddingTop: theme.spacing(6),
}));

export const SideBar = styled(Box)(({ theme }) => ({
  width: 220,
  height: 180,
  flexShrink: 0,
  background: theme.palette.grey[100],
  borderRadius: theme.shape.borderRadius,
  position: "sticky",
  top: theme.spacing(2),
}));
