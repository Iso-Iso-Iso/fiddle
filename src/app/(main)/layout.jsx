import React from "react";

import { Footer } from "@/app/(main)/components/Footer/Footer";
import { Header } from "@/app/(main)/components/Header/Header";
import { getAuthorizedUser } from "@/services/users/getAuthorizedUser";
import { Container } from "@/components/uikit/Container/Container";

const Layout = async ({ children }) => {
  //   TODO: rework this logic
  const authorizedUser = await getAuthorizedUser();

  return (
    <>
      <Header authorizedUser={authorizedUser} />
      <Container fullFlex>{children}</Container>
      <Footer />
    </>
  );
};

export default Layout;
