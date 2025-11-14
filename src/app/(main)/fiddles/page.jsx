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

const Page = async ({ searchParams }) => {
  const queryClient = getQueryClient();
  const user = await getAuthorizedUser();

  const search = await searchParams;

  const page = search.page || 1;

  await queryClient.prefetchQuery({
    queryFn: () => getFiddlesWithPagination({ page }),
    queryKey: getFiddlesQueryKey({ page }),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Fiddles>
        <FiddleList userId={user.id} />
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
