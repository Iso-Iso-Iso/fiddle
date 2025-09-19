import React from "react";
import { AvatarCircle } from "@/components/uikit/Avatar/avatar.styles";

export const Avatar = ({ text, src, variant = "small" }) => {
  return (
    <AvatarCircle variant={variant} src={src}>
      {text}
    </AvatarCircle>
  );
};
