import React from "react";
import { Typography } from "@/components/uikit/Typography/Typography";
import { Wrapper } from "./heading.styles";

export const Heading = ({title, subtitle}) => {
  return (
    <Wrapper>
      <Typography text={title} variant="h4" />
      <Typography
        text={subtitle}
        variant="subtitle1"
      />
    </Wrapper>
  );
};
