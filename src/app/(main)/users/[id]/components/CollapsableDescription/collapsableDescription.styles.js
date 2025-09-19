"use client";

import { styled, Typography, Collapse as MuiCollapse } from "@mui/material";

export const Collapse = styled(MuiCollapse)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

export const CollapseText = styled(Typography)(({ isCrop }) => ({
  display: "-webkit-box",
  WebkitLineClamp: isCrop ? "3" : "none",
  overflow: "hidden",
  WebkitBoxOrient: isCrop ? "vertical" : "none",
}));
