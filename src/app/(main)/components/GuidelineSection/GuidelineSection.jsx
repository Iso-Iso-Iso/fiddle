import React from "react";
import {
  GuidelineItem,
  GuidelineWrapper,
  Heading,
  Wrapper,
} from "@/app/(main)/components/GuidelineSection/guidelineSection.styles";
import { Container } from "@/components/uikit/Container/Container";
import { Typography } from "@/components/uikit/Typography/Typography";
import { Icon } from "@/components/uikit/Icon/Icon";

const guidelineItemsMap = [
  {
    icon: "postAdd",
    title: "Post a job",
    description:
      "It’s free and easy to post a job. Simply fill in a title, description.",
  },
  {
    icon: "personSearch",
    title: "Choose freelancers",
    description:
      "It’s free and easy to post a job. Simply fill in a title, description.",
  },
  {
    icon: "payment",
    title: "Pay safely",
    description:
      "It’s free and easy to post a job. Simply fill in a title, description.",
  },
  {
    icon: "supportAgent",
    title: "We’re here to help",
    description:
      "It’s free and easy to post a job. Simply fill in a title, description.",
  },
];

export const GuidelineSection = () => {
  return (
    <Wrapper>
      <Container>
        <Heading>
          <Typography text="Need something done?" variant="h4" />
          <Typography
            text="Most viewed and all-time top-selling services"
            variant="subtitle1"
          />
        </Heading>
        <GuidelineWrapper>
          {guidelineItemsMap.map((item) => (
            <GuidelineItem key={item.title}>
              <Icon name={item.icon} size={42} color="secondary" />
              <Typography text={item.title} variant="h6" />
              <Typography text={item.description} variant="body1" />
            </GuidelineItem>
          ))}
        </GuidelineWrapper>
      </Container>
    </Wrapper>
  );
};
