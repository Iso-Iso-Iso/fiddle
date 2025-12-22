import React from "react";

import { Fiddles, SideBar, SidebarProfile } from "./page.styles";
import { Box } from "@mui/material";
import { Avatar } from "@/components/uikit/Avatar/Avatar";
import { Typography } from "@/components/uikit/Typography/Typography";
import { getAuthorizedUser } from "@/services/users/getAuthorizedUser";
import { FiddleList } from "@/app/(main)/fiddles/components/FiddleList/FiddleList";
import { getQueryClient } from "@/utils/getQueryClient";
import { getFiddlesWithPagination } from "@/services/fiddle/getFiddlesWithPagination";
import { getFiddlesQueryKey } from "@/services/fiddle/useGetFiddlesQuery";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { redirect } from "next/navigation";
import { UserRole } from "@/prisma/enums";
import { getProposalsBalance } from "@/services/proposalsBalance/getProposalsBalance";
import { getProposalsBalanceQueryKeys } from "@/services/proposalsBalance/useGetProposalsBalanceQuery";

const Page = async ({ searchParams }) => {
  const queryClient = getQueryClient();
  const user = await getAuthorizedUser();

  if (!user) {
    redirect("/auth/login");
  }

  const search = await searchParams;

  const page = search.page || 1;

  if (user.role === UserRole.FREELANCER) {
    await queryClient.prefetchQuery({
      queryFn: () => getProposalsBalance({ userId: user.id }),
      queryKey: getProposalsBalanceQueryKeys(),
    });
  }

  await queryClient.prefetchQuery({
    queryFn: () => getFiddlesWithPagination({ page }),
    queryKey: getFiddlesQueryKey({ page }),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Fiddles>
        <FiddleList
          userId={user.id}
          isSubmitAllowed={user.role === UserRole.FREELANCER}
        />
        {user && (
          <SideBar>
            <SidebarProfile>
              <Avatar text={`${user.firstName[0]}${user.lastName[0]}`} />
              <Box>
                <Typography text={`${user.firstName}`} />
                <Typography text="Front-end engeneer" />
              </Box>
            </SidebarProfile>
          </SideBar>
        )}
      </Fiddles>
    </HydrationBoundary>
  );
};

export default Page;
