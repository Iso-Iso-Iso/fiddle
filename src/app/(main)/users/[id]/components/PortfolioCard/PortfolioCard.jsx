import React from "react";
import { Card, CardContent, CardMedia } from "@mui/material";
import { Typography } from "@/components/uikit/Typography/Typography";

export const PortfolioCard = () => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" text="Lizard" />
        <Typography
          variant="body2"
          text="  Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica"
        />
      </CardContent>
    </Card>
  );
};
