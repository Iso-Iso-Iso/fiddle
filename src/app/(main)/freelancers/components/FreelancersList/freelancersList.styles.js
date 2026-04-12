"use client";
import { Box, Card, CardContent, styled } from "@mui/material";
import Image from "next/image";

export const FilterGrid = styled(Box)(({ theme }) => ({
  display: "grid",
  alignItems: "center",
  gridTemplateColumns: "200px 250px 150px",
  gap: theme.spacing(2),
  marginBottom: theme.spacing(4),
}));

export const FreelancerGrid = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(200px, 260px))",
  gap: theme.spacing(2),
  justifyContent: "space-between",
  marginBottom: theme.spacing(4),
}));

export const FreelancerCardItem = styled(Card)(({ theme }) => ({
  border: `1px solid ${theme.palette.grey[200]}`,
  boxShadow: "none",
  borderRadius: theme.shape.labelRadius,
}));

export const FreelancerCardContent = styled(CardContent)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1),
  padding: `${theme.spacing(1)} !important`,
}));

export const FreelancerImage = styled(Image)(({ theme }) => ({
  width: "100%",
  objectFit: "cover",
  borderRadius: theme.shape.labelRadius,
}));

export const InfoWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(0.5),
}));

export const FreelancerName = styled(Box)({
  marginRight: "auto",
});

export const ActionsButtons = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
}));

export const PaginationWrapper = styled(Box)({
  display: "flex",
  justifyContent: "center",
});
