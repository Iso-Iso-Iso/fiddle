"use client";

import { Box, styled } from "@mui/material";
import theme from "@/theme";

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

export const MenuWrapper = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const AuthButtons = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
});
