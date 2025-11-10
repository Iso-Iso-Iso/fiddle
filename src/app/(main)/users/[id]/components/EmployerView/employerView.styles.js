"use client";
import { Box, styled } from "@mui/material";

export const ProfileInfo = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),
  marginBottom: theme.spacing(6),
  marginTop: theme.spacing(6),
}));

export const Name = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(1),
  alignItems: "center",
}));

export const PersonalInfo = styled(Box)(({ theme }) => ({
  marginRight: "auto",
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1),
}));

export const FiddleList = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: theme.spacing(2),
}));
