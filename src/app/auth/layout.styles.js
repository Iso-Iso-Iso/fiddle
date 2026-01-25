"use client";
import { Box, styled } from "@mui/material";

export const Background = styled(Box)(
  ({ theme }) => ({
    width: "100%",
    height: "100lvh",
    backgroundColor: theme.palette.primary.light,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  })
);
