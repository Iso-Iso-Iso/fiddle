import React from "react";
import { FiddleItem } from "@/app/(main)/fiddles/components/FiddleItem/FiddleItem";

import {
  FiddleWrapper,
  Fiddles,
  SideBar,
  SidebarProfile,
  PaginationWrapper,
} from "./page.styles";
import { Box } from "@mui/material";
import { Avatar } from "@/components/uikit/Avatar/Avatar";
import { Typography } from "@/components/uikit/Typography/Typography";
import { getFiddlesWithPagination } from "@/services/fiddle/getFiddlesWithPagination";
import { getAuthorizedUser } from "@/services/users/getAuthorizedUser";
import { Pagination } from "@/components/uikit/Pagination/Pagination";

const Page = async ({ searchParams }) => {
  const search = await searchParams;

  const user = await getAuthorizedUser();
  const { fiddles, pageCount } = await getFiddlesWithPagination({
    page: search.page || 1,
  });

  return (
    <>
      <Fiddles>
        <FiddleWrapper>
          {fiddles.map((item) => (
            <FiddleItem
              key={item.id}
              fiddle={item}
              isEditable={item.user.id === user?.id}
            />
          ))}
        </FiddleWrapper>
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
      <PaginationWrapper>
        <Pagination count={pageCount} />
      </PaginationWrapper>
    </>
  );
};

export default Page;
