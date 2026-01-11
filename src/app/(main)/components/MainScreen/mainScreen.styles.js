"use client";
import { Box, styled } from "@mui/material";
import Image from "next/image";

export const MainScreenBackground = styled(Box)((theme) => ({
  backgroundColor: "#1F4B3F",
  backgroundImage: `url("/main/headerPattern.png")`,
  backgroundPosition: "top center",
  width: "100cqw",
  marginLeft: "calc(-50cqw + 50%)",
  height: 660,
  paddingBottom: 120,
  boxSizing: "content-box",
  "@media (max-width: 1000px)": {
    height: 520,
  }
}));

export const Wrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  height: "100%",
}));

export const ContentPart = styled(Box)(({ theme }) => ({
  height: "100%",
  width: "50%",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  gap: theme.spacing(2),
  "@media (max-width: 1000px)": {
    width: "100%",
    alignItems: "center",
  },
}));

export const Statistics = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(4),
}));

export const StatisticItem = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

export const ImagePart = styled(Box)(({ theme }) => ({
  position: "relative",
}));

export const StyledImage = styled(Image)(({ theme }) => ({
  "@media (max-width:1228px)": {
    width: 560,
    height: 500,
  },
  "@media (max-width:1024px)": {
    width: 500,
    height: 440,
  },
  "@media (max-width:1000px)": {
    display: "none",
  },
}));
