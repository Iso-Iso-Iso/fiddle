import React from "react";
import MuiLink from "@mui/material/Link";
import NextLink from "next/link";

const linkMap = {
  link: NextLink,
  button: "button",
};

export const Link = ({
  href,
  text,
  color = "primary",
  type = "link",
  onClick,
}) => {
  const LinkComponent = linkMap[type];

  return (
    <MuiLink
      component={LinkComponent}
      color={color}
      href={href}
      onClick={onClick}
    >
      {text}
    </MuiLink>
  );
};
