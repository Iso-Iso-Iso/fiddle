"use client";

import { Box } from "@mui/material";
import styled from "@emotion/styled";
import { sideScaleTransition } from "@/theme";

export const FiddleSideDivider = styled(Box)(({ theme }) => ({
  position: "absolute",
  left: 0,
  top: 0,
  height: "100%",
  width: 4,
  transform: "scaleX(0)",
  transition: sideScaleTransition,
  backgroundColor: theme.palette.primary.main,
  transformOrigin: "left center"
}));

export const FiddleItem = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-end",
  border: `1px solid ${theme.palette.divider}`,
  borderBottom: "none",
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(1),
  paddingInline: theme.spacing(2),
  width: "100%",
  "&:last-child": {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  "&:hover": {
    [FiddleSideDivider]: { transform: "scaleX(1)" },
  },
}));

export const Content = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1),
  alignItems: "flex-start",
}));

export const Statistics = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(0.5),
}));

export const Actions = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
}));

export const Divider = styled(Box)(({ theme }) => ({
  width: 1,
  backgroundColor: theme.palette.grey["400"],
  height: 16,
}));
