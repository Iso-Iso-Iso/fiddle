import React from "react";
import {
  CardGrid,
  CardImage,
  CardItem,
  CardText,
  Wrapper,
} from "@/app/(main)/components/CategoriesGrid/categoriesGrid.styles";
import { Heading } from "@/components/Heading/Heading";
import { Typography } from "@/components/uikit/Typography/Typography";

const categories = [
  { title: "Development & IT", thumbnailName: "programmingThumbnail" },
  { title: "Design & Creative", thumbnailName: "designThumbnail" },
  { title: "Digital & Marketing", thumbnailName: "marketingThumbnail" },
  { title: "Writing & Translation", thumbnailName: "writingThumbnail" },
  { title: "Music & Audio", thumbnailName: "musicThumbnail" },
];

export const CategoriesGrid = () => {
  return (
    <Wrapper>
      <Heading
        title="Browse talent by category"
        subtitle="Get some Inspirations from 1800+ skills"
      />
      <CardGrid>
        {categories.map((item) => (
          <CardItem key={item.title}>
            <CardImage
              src={`/categories/${item.thumbnailName}.jpg`}
              width={256}
              height={300}
              alt={item.title}
            />
            <CardText>
              <Typography color="white" text={item.title} variant="subtitle1" />
            </CardText>
          </CardItem>
        ))}
      </CardGrid>
    </Wrapper>
  );
};
