"use client";
import { Box, styled } from "@mui/material";

export const MainScreenBackground = styled(Box)((theme) => ({
  backgroundColor: "#1F4B3F",
  backgroundImage: `url("/main/headerPattern.png")`,
  backgroundPosition: "top center",
  width: "100cqw",
  marginLeft: "calc(-50cqw + 50%)",
  height: 660,
  paddingBottom: 120,
  boxSizing: "content-box",
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
