"use client";
import MuiAvatar from "@mui/material/Avatar";
import { styled } from "@mui/material";

const avatarMap = {
  small: 32,
  profile: 102,
};

export const AvatarCircle = styled(MuiAvatar)(({ theme, variant }) => ({
  height: avatarMap[variant],
  width: avatarMap[variant],
}));
