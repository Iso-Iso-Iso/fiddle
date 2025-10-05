import React from "react";
import { Card, CardContent } from "@mui/material";
import {
  CardGrid,
  CategoryText,
} from "@/app/(main)/components/CategoriesGrid/categoriesGrid.styles";
import { Icon } from "@/components/uikit/Icon/Icon";

const categories = [
  { name: "UI/UX Design", iconName: "edit" },
  { name: "App development", iconName: "edit" },
  { name: "Web development", iconName: "edit" },
  { name: "Video editing", iconName: "edit" },
  { name: "eCommerce", iconName: "edit" },
  { name: "Writing & Translation", iconName: "edit" },
  { name: "Consulting", iconName: "edit" },
  { name: "Marketing", iconName: "edit" },
];

export const CategoriesGrid = () => {
  return (
    <CardGrid>
      {categories.map((item) => (
        <Card key={item.name}>
          <CardContent>
            <Icon name={item.iconName} size={32} />
            <CategoryText>{item.name}</CategoryText>
          </CardContent>
        </Card>
      ))}
    </CardGrid>
  );
};
