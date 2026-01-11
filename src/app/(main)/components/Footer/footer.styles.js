"use client";

import { Box, styled } from "@mui/material";

export const Wrapper = styled(Box)(({ theme }) => ({
  width: "100cqw",
  marginLeft: "calc(-50cqw + 50%)",
  backgroundColor: theme.palette.secondary.main,
  padding: `${theme.spacing(2)} 0`,
}));

export const NavigationList = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
  justifyContent: "space-between",
  gap: theme.spacing(2),
  marginBottom: theme.spacing(4),
}));

export const NavigationColumn = styled(Box)(({ theme }) => ({}));

export const CompanyName = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(4),
  color: theme.palette.common.white,
}));
