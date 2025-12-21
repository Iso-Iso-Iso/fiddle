"use client";

import { Box, styled } from "@mui/material";
import theme from "@/theme";

export const ImageGrid = styled(Box)({});

export const FiddleContent = styled(Box)(({ theme }) => ({
  maxHeight: `calc(50% - ${theme.spacing(2)} / 2)`,
  marginBottom: theme.spacing(2),
}));

export const ProposalWrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1),
  marginTop: theme.spacing(2),
});

export const WithdrawProposals = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "minmax(0, 1fr) auto",
  alignItems: "center",
  gap: theme.spacing(1),
}));
