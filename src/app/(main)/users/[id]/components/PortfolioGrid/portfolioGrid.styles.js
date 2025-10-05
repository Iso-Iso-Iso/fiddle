"use client"
import { Box, styled } from "@mui/material";

export const SectionHeading = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: theme.spacing(1),
}));


export const Grid = styled(Box)(({ theme }) => ({
    display: "grid",
    gap: theme.spacing(3),
    gridTemplateColumns: "repeat(3, 1fr)",
    marginBottom: theme.spacing(3),
}));
