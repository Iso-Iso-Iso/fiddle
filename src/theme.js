"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "var(--font-roboto)",
  },
  palette: {
    common: {
      grey: "#6B7177",
      lightGreen: "rgba(91, 187, 123, 0.1)",
    },
    primary: {
      main: "#5BBB7B",
    },
    secondary: {
      main: "#1F4B3F",
    },
  },
  shape: {
    fullRounded: 999,
    borderRadius: 4,
    labelRadius: 12,
  },
});

export const sideScaleTransition = theme.transitions.create("transform", {
  easing: theme.transitions.easing.sharp,
  duration: theme.transitions.duration.shorter,
});

export default theme;
