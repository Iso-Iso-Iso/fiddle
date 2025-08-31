"use client";

import { styled } from "@mui/material";

export const HeaderWrapper = styled("header")(({ theme }) => ({
  height: 60,
  width: "100%",
  position: "sticky",
  top: 0,
  boxShadow: theme.shadows[3],
  zIndex: 1,
  background: theme.palette.background.paper,
  display: "flex",
  alignItems: "center",
}));

export const NavigationWrapper = styled("nav")(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(2),
}));
