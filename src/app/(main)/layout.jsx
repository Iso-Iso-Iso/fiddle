import React from "react";
import {
  AuthButtons,
  HeaderWrapper,
  MenuWrapper,
  NavigationWrapper,
} from "@/app/(main)/layout.styles";
import { Container } from "@mui/material";
import { Link } from "@/components/uikit/Link/Link";
import { Button } from "@/components/uikit/Button/Button";
import { logoutUserAction } from "@/actions/auth/logoutUserAction";
import { getAuthorizedUser } from "@/services/users/getAuthorizedUser";
import { UserRole } from "@/prisma/enums";

const Layout = async ({ children }) => {
  const authorizedUser = await getAuthorizedUser();

  return (
    <>
      <HeaderWrapper>
        <Container>
          <MenuWrapper>
            <NavigationWrapper>
              <Link href="/" text="Home" />
              <Link href="/fiddles" text="Fiddles" />
              {authorizedUser && authorizedUser?.role === UserRole.EMPLOYER && (
                <>
                  <Link href="/fiddles/create" text="Create Fiddle" />
                  <Link href="/my-fiddles" text="My Fiddles" />
                </>
              )}
              {authorizedUser &&
                authorizedUser?.role === UserRole.FREELANCER && (
                  <Link href={`/proposals`} text="My Proposals" />
                )}
              {authorizedUser && (
                <Link href={`/users/${authorizedUser.id}`} text="My Profile" />
              )}
            </NavigationWrapper>
            {authorizedUser ? (
              <Button color="error" text="Log out" onClick={logoutUserAction} />
            ) : (
              <AuthButtons>
                <Button variant="outlined" text="Login" href="/auth/login" />
                <Button text="Sign up" href="/auth/sign-up" />
              </AuthButtons>
            )}
          </MenuWrapper>
        </Container>
      </HeaderWrapper>
      <Container>{children}</Container>
    </>
  );
};

export default Layout;
