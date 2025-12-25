"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "var(--font-roboto)",
  },
});

export const sideScaleTransition = theme.transitions.create("transform", {
  easing: theme.transitions.easing.sharp,
  duration: theme.transitions.duration.shorter,
})

export default theme;
