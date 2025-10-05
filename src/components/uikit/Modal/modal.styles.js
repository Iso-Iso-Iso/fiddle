"use client";
import { Box, styled } from "@mui/material";

const widthVariantMap = {
  small: 420,
  medium: 820,
};

export const ModalBody = styled(Box)(({ theme, variant }) => ({
  position: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
  padding: theme.spacing(1),
  backgroundColor: "white",
  borderRadius: theme.shape.borderRadius,
  width: widthVariantMap[variant],
}));
