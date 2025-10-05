"use client";
import React from "react";
import {
  Grid,
  SectionHeading,
} from "@/app/(main)/users/[id]/components/PortfolioGrid/portfolioGrid.styles";
import { Typography } from "@/components/uikit/Typography/Typography";
import { Button } from "@/components/uikit/Button/Button";
import { useModalActions } from "@/stores/modalStore";
import { MODAL_NAMES } from "@/constants/modalNames";
import { EmptyPlaceholder } from "@/components/uikit/EmptyPlaceholder/EmptyPlaceholder";
import { Card, CardContent, CardMedia } from "@mui/material";

export const PortfolioGrid = ({ items }) => {
  const { setActiveModal } = useModalActions();

  return (
    <>
      <SectionHeading>
        <Typography variant="h4" text="Portfolio" />
        <Button
          text="Add case"
          variant="text"
          onClick={() => setActiveModal(MODAL_NAMES.MANAGE_PORTFOLIO_MODAL)}
        />
      </SectionHeading>
      {!items?.length && <EmptyPlaceholder />}
      {!!items?.length && (
        <Grid>
          {items.map((item) => (
            <Card key={item.id}>
              <CardMedia
                component="img"
                height="140"
                image={item.image}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" text={item.name} />
                <Typography variant="body2" text={item.description} />
              </CardContent>
            </Card>
          ))}
        </Grid>
      )}
    </>
  );
};
