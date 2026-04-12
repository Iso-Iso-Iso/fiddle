"use client";
import React from "react";
import {
  FreelancerCardContent,
  FreelancerCardItem,
  FreelancerGrid,
  InfoWrapper,
  FreelancerImage,
  PaginationWrapper,
  FreelancerName,
  FilterGrid,
  ActionsButtons,
} from "./freelancersList.styles";
import { Avatar } from "@/components/uikit/Avatar/Avatar";
import { Typography } from "@/components/uikit/Typography/Typography";
import { Icon } from "@/components/uikit/Icon/Icon";
import { Pagination } from "@/components/uikit/Pagination/Pagination";
import { Dropdown } from "@/components/uikit/Dropdown/Dropdown";
import { Input } from "@/components/uikit/Input/Input";
import { useForm } from "react-hook-form";
import { PUBLIC_CATEGORIES } from "@/constants/publicCategories";
import { Button } from "@/components/uikit/Button/Button";

const mock = Array(16).fill(null);

export const FreelancersList = () => {
  const { control } = useForm();

  return (
    <>
      <FilterGrid>
        <Dropdown
          control={control}
          name="test"
          label="Categpries"
          items={PUBLIC_CATEGORIES}
          labelField="title"
          valueField="title"
        />
        <Input control={control} name="adwwa" label="Search" />
        <Button text="Apply Filters" />
      </FilterGrid>
      <FreelancerGrid>
        {mock.map((item, index) => (
          <FreelancerCardItem key={index}>
            <FreelancerCardContent>
              <FreelancerImage
                alt="a?"
                src="/categories/designThumbnail.jpg"
                width={230}
                height={170}
              />
              <InfoWrapper>
                <Avatar text="Ol" />
                <FreelancerName>
                  <Typography text="Alex Shaw" />
                </FreelancerName>
                <Typography text="4.8/5" />
                <Icon name="star" color="warning" />
              </InfoWrapper>
              <Typography text="Lorem ipsum dolo set amet..." />
              <ActionsButtons>
                <Button text="Contact" variant="text" size="small" />
                <Button text="View" size="small" />
              </ActionsButtons>
            </FreelancerCardContent>
          </FreelancerCardItem>
        ))}
      </FreelancerGrid>
      <PaginationWrapper>
        <Pagination page={1} count={10} />
      </PaginationWrapper>
    </>
  );
};
