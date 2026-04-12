"use client";
import { InputLabel, Select, styled } from "@mui/material";


export const StyledInputLabel = styled(InputLabel)(({ theme }) => ({
  background: theme.palette.common.white,
  paddingInline: theme.spacing(1),
}));

export const StyledSelect = styled(Select)(({ theme }) => ({
  "& .MuiOutlinedInput-notchedOutline": {
    borderRadius: theme.shape.fullRounded,
  },
}));

