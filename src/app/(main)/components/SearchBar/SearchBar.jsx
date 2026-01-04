import React from "react";
import {
  InputLabel,
  UnstyledInput,
  Wrapper,
} from "@/app/(main)/components/SearchBar/searchBar.styles";
import { Icon } from "@/components/uikit/Icon/Icon";
import { Button } from "@/components/uikit/Button/Button";

export const SearchBar = () => {
  return (
    <Wrapper>
      <InputLabel>
        <Icon name="search" size={24} />
        <UnstyledInput type="text" />
      </InputLabel>
      <Button text="Search" />
    </Wrapper>
  );
};
