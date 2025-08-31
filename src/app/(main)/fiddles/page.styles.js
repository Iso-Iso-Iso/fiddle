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
  top: 80,
  padding: theme.spacing(1),
}));

export const SidebarProfile = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: theme.spacing(2),
}));
