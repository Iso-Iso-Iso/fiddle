import React from "react";
import {
  ActionButtons,
  ContentPart,
  Wrapper,
} from "@/app/(main)/components/MainScreen/mainScreen.styles";
import { Typography } from "@/components/uikit/Typography/Typography";
import { Button } from "@/components/uikit/Button/Button";

export const MainScreen = () => {
  return (
    <Wrapper>
      <ContentPart>
        <Typography
          text="Our freelancers will take it from here"
          variant="h1"
        />
        <ActionButtons>
          <Button size="small" variant="outlined" text="UI/UX Design" />
          <Button size="small" variant="outlined" text="Web development" />
          <Button size="small" variant="outlined" text="App development" />
          <Button size="small" variant="outlined" text="Video editing" />
          <Button size="small" variant="outlined" text="Create fiddle" />
        </ActionButtons>
      </ContentPart>
    </Wrapper>
  );
};
