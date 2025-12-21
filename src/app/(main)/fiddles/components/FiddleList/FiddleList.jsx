"use client";
import React, { useState } from "react";
import { useGetFiddlesQuery } from "@/services/fiddle/useGetFiddlesQuery";
import { FiddleItem } from "@/app/(main)/fiddles/components/FiddleItem/FiddleItem";
import {
  FiddleWrapper,
  Filters,
  List,
  PaginationWrapper,
  Search,
} from "./fiddleList.styles";
import { Pagination } from "@/components/uikit/Pagination/Pagination";
import { Button } from "@/components/uikit/Button/Button";
import { useForm } from "react-hook-form";
import {
  FIDDLE_FILTER_FIELDS,
  fiddleFiltersDefaultValues,
} from "@/validation/fiddleFilters.schema";
import { Input } from "@/components/uikit/Input/Input";
import { Dropdown } from "@/components/uikit/Dropdown/Dropdown";
import { useModalActions } from "@/stores/modalStore";
import { MODAL_NAMES } from "@/constants/modalNames";
import { EmptyPlaceholder } from "@/components/uikit/EmptyPlaceholder/EmptyPlaceholder";

const sortType = [
  { value: "latest", label: "Latest" },
  { value: "match", label: "Best Match" },
  { value: "less", label: "Less Proposals" },
];

const filterType = [
  { value: "all", label: "All" },
  { value: "approved", label: "Approved" },
];

export const FiddleList = ({ userId }) => {
  const [filters, setFilters] = useState(fiddleFiltersDefaultValues);
  const { control, watch } = useForm({
    defaultValues: filters,
  });
  const { setActiveModal } = useModalActions();

  const {
    data: { fiddles, pageCount },
  } = useGetFiddlesQuery({ page: 1, filters });

  const handleFilterApply = (body) => setFilters(body);

  const handleFiddleClick = (fiddle) => () =>
    setActiveModal(MODAL_NAMES.FIDDLE_DRAWER, { fiddle });

  return (
    <List>
      <Filters>
        <Dropdown
          items={sortType}
          control={control}
          name={FIDDLE_FILTER_FIELDS.SORT}
          label="Sort by"
        />
        <Dropdown
          items={filterType}
          control={control}
          name={FIDDLE_FILTER_FIELDS.FILTER}
          label="Filter by"
        />
        <Search>
          <Input
            label="Search"
            size="small"
            control={control}
            name={FIDDLE_FILTER_FIELDS.SEARCH}
          />
        </Search>
        <Button text="Apply" onClick={handleFilterApply} />
      </Filters>
      {!!fiddles?.length && (
        <FiddleWrapper>
          {fiddles.map((item) => (
            <FiddleItem
              key={item.id}
              fiddle={item}
              isEditable={item.user.id === userId}
              onFiddleClick={handleFiddleClick(item)}
            />
          ))}
        </FiddleWrapper>
      )}
      {!fiddles?.length && <EmptyPlaceholder />}
      <PaginationWrapper>
        <Pagination count={pageCount} />
      </PaginationWrapper>
    </List>
  );
};
