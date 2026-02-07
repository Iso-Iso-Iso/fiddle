import React from "react";
import { FreelancersList } from "./components/FreelancersList/FreelancersList";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { getQueryClient } from "@/utils/getQueryClient";
import { Wrapper } from "./page.styles";

const Page = () => {
  const queryClient = getQueryClient();

  return (
    <Wrapper>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <FreelancersList />
      </HydrationBoundary>
    </Wrapper>
  );
};

export default Page;
