import React from "react";
import MuiLink from "@mui/material/Link";
import NextLink from "next/link";

export const Link = ({ href, text }) => {
  return (
    <MuiLink component={NextLink} href={href}>
      {text}
    </MuiLink>
  );
};
