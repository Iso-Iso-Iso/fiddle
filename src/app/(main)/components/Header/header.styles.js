"use client";
import { Box, styled } from "@mui/material";
import { sideScaleTransition } from "@/theme";

export const HeaderWrapper = styled("header")(({ theme }) => ({
  height: 60,
  width: "100%",
  position: "sticky",
  top: 0,
  zIndex: 22,
  background: theme.palette.background.paper,
  display: "flex",
  alignItems: "center",
  borderBottom: `1px solid ${theme.palette.grey[200]}`,
}));

export const NavigationWrapper = styled("nav")(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(4),
  "@media (max-width: 768px)": {
    flexDirection: "column",
    gap: theme.spacing(2),
    alignItems: "flex-end",
    marginBottom: theme.spacing(3),
  },
}));

export const MenuWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isActive",
})(({ theme, isActive }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  "@media (max-width: 768px)": {
    position: "absolute",
    top: "100%",
    left: 0,
    right: 0,
    flexDirection: "column",
    backgroundColor: theme.palette.common.white,
    padding: theme.spacing(2),
    alignItems: "flex-end",
    transition: sideScaleTransition,
    transform: `translateY(${isActive ? 0 : "-150%"})`,
  },
}));

export const AuthButtons = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
  "@media (max-width: 768px)": {
    flexDirection: "column",
    alignItems: "flex-end",
  },
}));

export const BurgerButton = styled(Box)(({ theme }) => ({
  display: "none",
  marginLeft: "auto",
  width: 30,
  height: 20,
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  "@media (max-width: 768px)": {
    display: "flex",
  },
}));

export const BurgerLines = styled(Box)(({ theme }) => ({
  height: 2,
  width: "100%",
  backgroundColor: theme.palette.common.black,
  "&:after": {
    content: "''",
    position: "absolute",
    top: 0,
    left: 0,
    height: 2,
    width: "100%",
    backgroundColor: theme.palette.common.black,
  },
  "&:before": {
    content: "''",
    position: "absolute",
    bottom: 0,
    left: 0,
    height: 2,
    width: "100%",
    backgroundColor: theme.palette.common.black,
  },
}));
