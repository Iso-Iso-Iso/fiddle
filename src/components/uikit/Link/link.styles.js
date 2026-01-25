"use client";
import { styled } from "@mui/material";
import MuiLink from "@mui/material/Link";

export const StyledLink = styled(MuiLink)(({ theme }) => ({
  color: theme.palette.common.black,
  fontWeight: theme.typography.fontWeightMedium,
  "&:hover": {
    color: theme.palette.primary.main,
  },
}));
