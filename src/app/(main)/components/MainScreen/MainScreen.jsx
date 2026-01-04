import React from "react";
import {
  ContentPart,
  ImagePart,
  MainScreenBackground,
  StatisticItem,
  Statistics,
  Wrapper,
} from "./mainScreen.styles";
import { Typography } from "@/components/uikit/Typography/Typography";
import { Container } from "@/components/uikit/Container/Container";
import { SearchBar } from "@/app/(main)/components/SearchBar/SearchBar";
import Image from "next/image";
import { AchievementLabel } from "@/app/(main)/components/AchievementLabel/AchievementLabel";

const statisticMap = [
  {
    title: "960M",
    text: "Total Freelancer",
  },
  {
    title: "850M",
    text: "Positive Review",
  },
  {
    title: "98M",
    text: "Order recieved",
  },
  {
    title: "250M",
    text: "Projects Completed",
  },
];

export const MainScreen = () => {
  return (
    <MainScreenBackground>
      <Container fullHeight>
        <Wrapper>
          <ContentPart>
            <Typography
              text="Find the perfect freelance services for your business"
              variant="h3"
              color="white"
            />
            <Typography
              text="Work with talented people at the most affordable price to get the most out of your time and cost"
              variant="subtitle1"
              color="white"
            />
            <SearchBar />
            <Statistics>
              {statisticMap.map((item) => (
                <StatisticItem key={item.title}>
                  <Typography color="white" variant="h6" text={item.title} />
                  <Typography
                    color="white"
                    variant="caption"
                    text={item.text}
                  />
                </StatisticItem>
              ))}
            </Statistics>
          </ContentPart>
          <ImagePart>
            <Image
              src="/main/mainScreenLabel.png"
              height="580"
              width="660"
              alt="freelancers"
            />
            <AchievementLabel variant="quality" />
            <AchievementLabel variant="safe" />
            <AchievementLabel variant="freelancers" />
          </ImagePart>
        </Wrapper>
      </Container>
    </MainScreenBackground>
  );
};
