"use client";
import { Box, styled } from "@mui/material";
import { Editable } from "slate-react";

export const TextEditorWrapper = styled(Box)(({ theme }) => ({
  border: `1px solid ${theme.palette.grey["400"]}`,
  borderRadius: theme.shape.borderRadius,
}));

export const ActionButtons = styled(Box)(({ theme }) => ({
  width: `100%`,
  borderBottom: `1px solid ${theme.palette.grey["400"]}`,
  display: "flex",
}));

export const EditableStyled = styled(Editable)(({ theme }) => ({
  minHeight: 120,
}));
