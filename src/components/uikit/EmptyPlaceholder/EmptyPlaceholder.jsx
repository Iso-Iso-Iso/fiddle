import React from "react";
import { Wrapper } from "./emptyPlaceholder.styles";
import { Icon } from "@/components/uikit/Icon/Icon";
import { Typography } from "@/components/uikit/Typography/Typography";

export const EmptyPlaceholder = () => {
  return (
    <Wrapper>
      <Icon name="sadEmoji" size={36} />
      <Typography variant="body2" text="There is nothing to show" />
    </Wrapper>
  );
};
