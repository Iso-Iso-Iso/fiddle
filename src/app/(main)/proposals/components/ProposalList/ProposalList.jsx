"use client";
import React from "react";
import {
  ActionButtons,
  Filters,
  PaginationWrapper,
  ProposalCardContent,
  ProposalHeader,
  ProposalItemCard,
  Proposals,
} from "./proposalList.styles";
import { Button } from "@/components/uikit/Button/Button";
import { Typography } from "@/components/uikit/Typography/Typography";
import { Pagination } from "@/components/uikit/Pagination/Pagination";
import { Dropdown } from "@/components/uikit/Dropdown/Dropdown";
import { useForm } from "react-hook-form";
import { useGetFiddleProposalsCreatedByUserQuery } from "@/services/fiddleProposals/useGetFiddleProposalsCreatedByUserQuery";
import { EmptyPlaceholder } from "@/components/uikit/EmptyPlaceholder/EmptyPlaceholder";

export const ProposalList = () => {
  const { control } = useForm();
  const { data: fiddleProposals } = useGetFiddleProposalsCreatedByUserQuery();

  if (!fiddleProposals?.length) {
    return <EmptyPlaceholder />;
  }

  return (
    <>
      <Filters>
        <Dropdown
          control={control}
          name="test"
          items={[
            { label: "All", value: "All" },
            { label: "On Review", value: "review" },
            { label: "Declined", value: "declined" },
            { label: "Withdrawn", value: "withdrawn" },
          ]}
        />
      </Filters>
      <Proposals>
        {fiddleProposals.map((item, index) => (
          <ProposalItemCard key={index}>
            <ProposalCardContent>
              <ProposalHeader>
                <Typography text={item.fiddle.name} variant="h6" />
                <Typography text="3 Proposals" variant="subtitle2" />
              </ProposalHeader>

              <Typography text={item.greeting} variant="body2" />
              <ActionButtons>
                <Button text="Withdraw" color="error" />
                <Button text="View" variant="outlined" />
              </ActionButtons>
            </ProposalCardContent>
          </ProposalItemCard>
        ))}
      </Proposals>
      <PaginationWrapper>
        <Pagination page={1} count={2} />
      </PaginationWrapper>
    </>
  );
};
