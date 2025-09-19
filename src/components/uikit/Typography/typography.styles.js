"use client";
import { styled } from "@mui/material";
import MuiTypography from "@mui/material/Typography";

export const StyledTypography = styled(MuiTypography)(({ variant }) =>
  variant === "profile"
    ? {
        display: "-webkit-box",
        WebkitLineClamp: "3",
        overflow: "hidden",
        WebkitBoxOrient: "vertical",
      }
    : null
);
