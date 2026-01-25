"use client";
import React, { useState } from "react";
import { Container } from "@mui/material";
import {
  AuthButtons,
  BurgerButton,
  BurgerLines,
  HeaderWrapper,
  MenuWrapper,
  NavigationWrapper,
} from "./header.styles";
import { Link } from "@/components/uikit/Link/Link";
import { UserRole } from "@/generated/prisma";
import { Button } from "@/components/uikit/Button/Button";
import { logoutUserAction } from "@/actions/auth/logoutUserAction";

export const Header = ({ authorizedUser }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <HeaderWrapper>
      <Container>
        <MenuWrapper isActive={isActive}>
          <NavigationWrapper>
            <Link href="/" text="Home" />
            <Link href="/fiddles" text="Fiddles" />
            {authorizedUser && authorizedUser?.role === UserRole.EMPLOYER && (
              <>
                <Link href="/fiddles/create" text="Create Fiddle" />
                <Link href="/my-fiddles" text="My Fiddles" />
              </>
            )}
            {authorizedUser && authorizedUser?.role === UserRole.FREELANCER && (
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
        <BurgerButton onClick={() => setIsActive(!isActive)}>
          <BurgerLines />
        </BurgerButton>
      </Container>
    </HeaderWrapper>
  );
};
