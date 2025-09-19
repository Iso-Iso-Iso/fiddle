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
}));

export const PersonalInfo = styled(Box)({ marginRight: "auto" });
