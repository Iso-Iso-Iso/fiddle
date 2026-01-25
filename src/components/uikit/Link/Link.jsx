import React from "react";

import NextLink from "next/link";
import { StyledLink } from "./link.styles";

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
    <StyledLink
      component={LinkComponent}
      color={color}
      href={href}
      underline="none"
      onClick={onClick}
    >
      {text}
    </StyledLink>
  );
};
