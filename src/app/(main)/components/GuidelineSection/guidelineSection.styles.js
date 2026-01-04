"use client";
import { Box, styled } from "@mui/material";

export const Wrapper = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(-10),
  background: theme.palette.common.white,
  paddingTop: theme.spacing(10),
  width: "100cqw",
  marginLeft: "calc(-50cqw + 50%)",
  borderTopLeftRadius: 68,
  marginBottom: theme.spacing(10),
}));

export const GuidelineWrapper = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gridAutoRows: "1fr",
  gap: theme.spacing(4),
}));

export const GuidelineItem = styled(Box)(({ theme }) => ({}));

export const Heading = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(0.5),
  marginBottom: theme.spacing(5),
}));
