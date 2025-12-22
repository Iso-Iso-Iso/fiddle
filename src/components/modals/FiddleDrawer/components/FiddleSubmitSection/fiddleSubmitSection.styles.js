"use client"
import { Box, styled } from "@mui/material";

export const WithdrawProposals = styled(Box)(({ theme }) => ({
    display: "grid",
    gridTemplateColumns: "minmax(0, 1fr) auto",
    alignItems: "center",
    gap: theme.spacing(1),
}));
