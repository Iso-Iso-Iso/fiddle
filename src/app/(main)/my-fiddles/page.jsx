import React from "react";
import { getAuthorizedUser } from "@/services/users/getAuthorizedUser";
import { UserRole } from "@/generated/prisma";
import { redirect } from "next/navigation";
import { FiddlesList } from "./components/FiddlesList/FiddlesList";
import { Wrapper } from "./page.styles";
import { getQueryClient } from "@/utils/getQueryClient";
import { getFiddlesCreatedByUserQueryKeys } from "@/services/fiddle/useGetFiddlesCreatedByUserQuery";
import { getFiddlesByUserId } from "@/services/fiddle/getFiddlesByUserId";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

const Page = async () => {
  const authorizedUser = await getAuthorizedUser();

  if (!authorizedUser || authorizedUser?.role !== UserRole.EMPLOYER) {
    redirect("/");
  }

  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: getFiddlesCreatedByUserQueryKeys(),
    queryFn: () => getFiddlesByUserId({ userId: authorizedUser.id }),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Wrapper>
        <FiddlesList />
      </Wrapper>
    </HydrationBoundary>
  );
};

export default Page;
