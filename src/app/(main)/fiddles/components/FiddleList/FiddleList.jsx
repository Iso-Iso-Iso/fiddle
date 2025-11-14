"use client";
import React from "react";
import { useGetFiddlesQuery } from "@/services/fiddle/useGetFiddlesQuery";
import { FiddleItem } from "@/app/(main)/fiddles/components/FiddleItem/FiddleItem";
import { FiddleWrapper, List, PaginationWrapper } from "./fiddleList.styles";
import { Pagination } from "@/components/uikit/Pagination/Pagination";

export const FiddleList = ({ userId }) => {
  const {
    data: { fiddles, pageCount },
  } = useGetFiddlesQuery({ page: 1 });

  return (
    <List>
      <FiddleWrapper>
        {fiddles.map((item) => (
          <FiddleItem
            key={item.id}
            fiddle={item}
            isEditable={item.user.id === userId}
          />
        ))}
      </FiddleWrapper>
      <PaginationWrapper>
        <Pagination count={pageCount} />
      </PaginationWrapper>
    </List>
  );
};
