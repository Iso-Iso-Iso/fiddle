import React from "react";
import { ProposalList } from "@/app/(main)/proposals/components/ProposalList/ProposalList";
import { Wrapper } from "./page.styles";
import { getAuthorizedUser } from "@/services/users/getAuthorizedUser";
import { redirect } from "next/navigation";
import { UserRole } from "@/prisma/enums";
import { getQueryClient } from "@/utils/getQueryClient";
import { getFiddleProposals } from "@/services/fiddleProposals/getFiddleProposals";
import { getFiddleProposalsCreatedByUserQueryKeys } from "@/services/fiddleProposals/useGetFiddleProposalsCreatedByUserQuery";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

const Page = async () => {
  const authorizedUser = await getAuthorizedUser();

  if (!authorizedUser || authorizedUser?.role === UserRole.EMPLOYER) {
    redirect("/login");
  }

  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryFn: () => getFiddleProposals({ userId: authorizedUser.id }),
    queryKey: getFiddleProposalsCreatedByUserQueryKeys(),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Wrapper>
        <ProposalList />
      </Wrapper>
    </HydrationBoundary>
  );
};

export default Page;
