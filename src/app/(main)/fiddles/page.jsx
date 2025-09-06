import React from "react";
import { FiddleItem } from "@/app/(main)/fiddles/components/FiddleItem/FiddleItem";

import {
  FiddleWrapper,
  PageContent,
  SideBar,
  SidebarProfile,
} from "./page.styles";
import { Box } from "@mui/material";
import { Avatar } from "@/components/uikit/Avatar/Avatar";
import { Typography } from "@/components/uikit/Typography/Typography";
import { getFiddles } from "@/services/fiddle/getFiddles";
import { getAuthorizedUser } from "@/services/users/getAuthorizedUser";

const Page = async () => {
  const fiddles = await getFiddles();
  const user = await getAuthorizedUser();

  return (
    <PageContent>
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
    </PageContent>
  );
};

export default Page;
