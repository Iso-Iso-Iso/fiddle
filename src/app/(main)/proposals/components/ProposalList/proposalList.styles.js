"use client";
import { Box, Card, CardContent, styled } from "@mui/material";

export const Proposals = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: theme.spacing(3),
  height: "100%",
  marginBottom: theme.spacing(2),
}));

export const Filters = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "220px",
  marginBottom: theme.spacing(2),
}));

export const ProposalItemCard = styled(Card)(({ theme }) => ({}));

export const ProposalHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

export const ProposalCardContent = styled(CardContent)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1),
}));

export const ActionButtons = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: theme.spacing(1),
}));

export const PaginationWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
}));
