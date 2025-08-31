import React from "react";
import { HeaderWrapper, NavigationWrapper } from "@/app/(main)/layout.styles";
import { Container } from "@mui/material";
import { Link } from "@/components/uikit/Link/Link";
import { getIsUserAuthorized } from "@/services/users/getIsUserAuthorized";

const Layout = async ({ children }) => {
  const isAuthorized = await getIsUserAuthorized();

  return (
    <>
      <HeaderWrapper>
        <Container>
          <NavigationWrapper>
            <Link href="/" text="Home" />
            <Link href="/fiddles" text="Fiddles" />
            {isAuthorized && (
              <Link href="/fiddles/create" text="Create fiddle" />
            )}
          </NavigationWrapper>
        </Container>
      </HeaderWrapper>
      <Container>{children}</Container>
    </>
  );
};

export default Layout;
