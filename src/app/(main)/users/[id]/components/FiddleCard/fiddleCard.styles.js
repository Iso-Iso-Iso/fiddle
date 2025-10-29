"use client";

import { styled } from "@mui/material";
import {
  CardMedia as MuiCardMedia,
  CardActions as MuiCardActions,
} from "@mui/material";

export const CardMedia = styled(MuiCardMedia)(({ theme }) => ({
  height: 180,
}));

export const CardActions = styled(MuiCardActions)(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-end",
}));
