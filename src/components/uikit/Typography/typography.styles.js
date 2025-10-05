"use client";
import { styled } from "@mui/material";
import MuiTypography from "@mui/material/Typography";

const variantsMap = {
  profile: {
    display: "-webkit-box",
    WebkitLineClamp: "3",
    overflow: "hidden",
    WebkitBoxOrient: "vertical",
  },
  testimonial: {
    display: "-webkit-box",
    WebkitLineClamp: "3",
    overflow: "hidden",
    WebkitBoxOrient: "vertical",
    fontSize: "0.875rem",
  },
  h1: {
    fontSize: "3.25rem",
  },
};

export const StyledTypography = styled(MuiTypography)(
  ({ variant }) => variantsMap[variant]
);
