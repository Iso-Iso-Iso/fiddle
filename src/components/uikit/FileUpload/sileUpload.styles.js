"use client";
import { Box, styled } from "@mui/material";

export const VisuallyHiddenInput = styled("input")({
  position: "absolute",
  bottom: 0,
  left: 0,
  zIndex: -1,
  opacity: 0,
});

export const Wrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: 12,
});

export const ImageGrid = styled(Box)({
  display: "flex",
  alignItems: "center",
});

export const ImageItem = styled(Box)({
  position: "relative",
});

export const CloseIcon = styled(Box)(({ theme }) => ({
  position: "absolute",
  backgroundColor: theme.palette.common.white,
  opacity: 0.7,
  bottom: 2,
  right: 2,
  cursor: "pointer",
}));
