import React from "react";
import { Content, IconBackground, Wrapper } from "./achievementLabel.styles";
import { Icon } from "@/components/uikit/Icon/Icon";
import { Typography } from "@/components/uikit/Typography/Typography";

const variantMap = {
  quality: {
    title: "Proof of quality",
    description: "Lorem Ipsum Dolar Amet",
    icon: "verified",
  },
  safe: {
    title: "Safe and secure",
    description: "Lorem Ipsum Dolar Amet",
    icon: "secure",
  },
  freelancers: {
    title: "50M+ freelancers",
    description: "Lorem Ipsum Dolar Amet",
    icon: "person",
  },
};

export const AchievementLabel = ({ variant }) => {
  const achievementVariant = variantMap[variant];

  return (
    <Wrapper variant={variant}>
      <IconBackground>
        <Icon name={achievementVariant.icon} color="primary" />
      </IconBackground>
      <Content>
        <Typography text={achievementVariant.title} variant="subtitle2" />
        <Typography text={achievementVariant.description} variant="caption" />
      </Content>
    </Wrapper>
  );
};
