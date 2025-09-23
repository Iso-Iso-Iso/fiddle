import React from "react";
import { Card, CardContent } from "@mui/material";
import { Typography } from "@/components/uikit/Typography/Typography";
import { Heading } from "./testimonialCard.styles";
import { Rating } from "@/components/uikit/Rating/Rating";

const mock =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed ornare tellus. Maecenas sollicitudin vitae est id finibus. In maximus turpis at turpis gravida cursus. Praesent vestibulum, orci vel bibendum pellentesque, magna orci pharetra neque, id sodales metus massa sit amet turpis. Suspendisse finibus";

export const TestimonialCard = () => {
  return (
    <Card>
      <CardContent>
        <Heading>
          <Typography variant="h6" text="Igor V." />
          <Rating />
        </Heading>
        <Typography variant="testimonial" text={mock} />
      </CardContent>
    </Card>
  );
};
