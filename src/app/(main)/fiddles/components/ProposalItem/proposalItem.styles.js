"use client";
import { Box, styled } from "@mui/material";

export const ProposalItemWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  borderBottomWidth: 1,
  borderBottomStyle: "solid",
  borderColor: theme.palette.grey[200],
  padding: theme.spacing(1),
}));

export const CreatorWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
}));

