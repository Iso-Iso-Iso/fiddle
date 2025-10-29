import React from "react";
import { Card, CardContent } from "@mui/material";
import { Typography } from "@/components/uikit/Typography/Typography";

import { CardActions, CardMedia } from "./fiddleCard.styles";
import { Button } from "@/components/uikit/Button/Button";
import NavLink from "next/link";

export const FiddleCard = ({ fiddle }) => {
  return (
    <Card variant="outlined">
      <CardMedia image={fiddle.images[0].url} />
      <CardContent>
        <Typography text={fiddle.name} variant="h6" />
        <Typography
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nec lorem sed mi auctor scelerisque in eget ex. Donec a cursus felis. Vivamus vel tempus augue, ut sollicitudin ligula"
          variant="body2"
        />
      </CardContent>
      <CardActions>
        <NavLink href={`/fiddles/${fiddle.id}`}>
          <Button variant="text" text="View" />
        </NavLink>
      </CardActions>
    </Card>
  );
};
