"use client";
import { Box, styled } from "@mui/material";

const positionByVariant = {
  quality: {
    left: "20%",
    top: "25%",
  },
  safe: {
    left: "65%",
    top: "50%",
  },
  freelancers: {
    left: "30%",
    top: "85%",
  },
};

export const Wrapper = styled(Box)(({ theme, variant }) => ({
  backgroundColor: theme.palette.common.white,
  padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
  position: "absolute",
  left: positionByVariant[variant].left,
  top: positionByVariant[variant].top,
  borderRadius: theme.shape.labelRadius,
  display: "inline-flex",
  alignItems: "center",
  gap: theme.spacing(2),
}));

export const IconBackground = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: theme.palette.common.lightGreen,
  width: 42,
  height: 42,
  borderRadius: theme.shape.fullRounded,
}));

export const Content = styled(Box)(({ theme }) => ({}));
