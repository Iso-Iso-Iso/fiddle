"use client";
import { Box, styled } from "@mui/material";

export const PageWrapper = styled(Box)(({ theme }) => ({
  maxWidth: "800px",
  margin: "0 auto",
  padding: theme.spacing(7.5, 2.5),
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(5),
}));

export const HeaderSection = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1),
  textAlign: "center",
}));

export const QuestionsWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
}));

export const FooterSection = styled(Box)(({ theme }) => ({
  textAlign: "center",
  opacity: 0.7,
}));
