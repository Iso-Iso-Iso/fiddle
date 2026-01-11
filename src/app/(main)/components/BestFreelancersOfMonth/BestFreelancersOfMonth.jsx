import React from "react";
import {
  FreelancersGrid,
  InfoItem,
  InfoWrapper,
  Rating,
  StyledCard,
  StyledCardContent,
  Wrapper,
} from "@/app/(main)/components/BestFreelancersOfMonth/bestFreelancersOfMonth.styles";
import { Heading } from "@/components/Heading/Heading";
import { Avatar } from "@/components/uikit/Avatar/Avatar";
import { Typography } from "@/components/uikit/Typography/Typography";
import { Icon } from "@/components/uikit/Icon/Icon";
import { Divider } from "@/components/uikit/Divider/Divider";

const mock = Array(8).fill(null);

export const BestFreelancersOfMonth = () => {
  return (
    <Wrapper>
      <Heading
        title="Highest Rated Freelancers"
        subtitle="Lorem ipsum dolor sit amet, consectetur."
      />
      <FreelancersGrid>
        {mock.map((_, index) => (
          <StyledCard key={index}>
            <StyledCardContent>
              <Avatar text="DA" variant="card" />
              <InfoWrapper>
                <Typography text="John Powel" variant="h6" />
                <Typography text="Web Developer" variant="body2" />
                <Rating>
                  <Icon name="star" color="warning" />
                  <Typography text="4.5" variant="body2" />
                </Rating>
              </InfoWrapper>
              <Divider flexItem />
              <InfoItem>
                <Typography text="Location:" variant="body1" />
                <Typography text="Los Angeles" variant="subtitle2" />
              </InfoItem>
              <InfoItem>
                <Typography text="Hour rate:" variant="body1" />
                <Typography text="15-20$" variant="subtitle2" />
              </InfoItem>
            </StyledCardContent>
          </StyledCard>
        ))}
      </FreelancersGrid>
    </Wrapper>
  );
};
