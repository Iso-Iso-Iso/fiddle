"use client";

import { Box, Card, CardContent, styled } from "@mui/material";

export const Wrapper = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(10),
}));

export const FreelancersGrid = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
  gap: theme.spacing(2),
}));

export const StyledCard = styled(Card)(({ theme }) => ({
  boxShadow: "none",
  border: `1px solid ${theme.palette.grey["200"]}`,
}));

export const StyledCardContent = styled(CardContent)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: theme.spacing(2),
}));

export const InfoWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

export const Rating = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
}));

export const InfoItem = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  alignItems: "center",
}));
