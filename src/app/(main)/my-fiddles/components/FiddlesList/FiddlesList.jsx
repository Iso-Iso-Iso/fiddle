"use client";
import React from "react";
import { useGetFiddlesCreatedByUserQuery } from "@/services/fiddle/useGetFiddlesCreatedByUserQuery";
import {
  Actions,
  Content,
  Divider,
  FiddleItem,
  FiddleSideDivider,
  Statistics,
} from "./fiddlesList.styles";
import { Typography } from "@/components/uikit/Typography/Typography";
import { Link } from "@/components/uikit/Link/Link";
import { Icon } from "@/components/uikit/Icon/Icon";

export const FiddlesList = () => {
  const { data: fiddles } = useGetFiddlesCreatedByUserQuery();

  return fiddles.map((item) => (
    <FiddleItem key={item.id}>
      <Content>
        <Link text={item.name} href={`/fiddles/${item.id}`} />
        <Typography
          text="Lorem psum dolo some descruoption here as a mock data..."
          variant="body2"
        />
        <Statistics>
          <Typography text="418" variant="body2" />
          <Icon name="eye" size={16} />
          <Typography text="40" variant="body2" />
          <Icon name="lightbulb" size={16} />
        </Statistics>
      </Content>
      <Actions>
        <Link text="View Proposals" href={`/fiddles/${item.id}`} />
        <Divider />
        <Link text="Edit" href={`/fiddles/${item.id}/edit`} />
        <Divider />
        <Link color="error" text="Delete" href="/" type="button" />
      </Actions>
      <FiddleSideDivider />
    </FiddleItem>
  ));
};
