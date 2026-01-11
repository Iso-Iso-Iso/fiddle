"use client";
import { Box } from "@mui/material";
import Image from "next/image";
import styled from "@emotion/styled";

export const Wrapper = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(10),
}));

export const CardGrid = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
  gap: theme.spacing(2),
}));

export const CardImage = styled(Image)({
  width: "100%",
  height: "100%",
  objectFit: "cover",
});

export const CardText = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  position: "absolute",
  left: 0,
  top: 0,
  width: "100%",
  height: "100%",
  background: "linear-gradient(to bottom, rgba(34, 34, 34, 0.7), transparent)",
}));

export const CardItem = styled(Box)(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.labelRadius,
  overflow: "hidden",
  height: 240,
  backgroundColor: theme.palette.common.black,
}));
