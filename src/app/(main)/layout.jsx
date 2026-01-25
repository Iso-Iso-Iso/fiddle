import React from "react";

import { Container } from "@mui/material";
import { Footer } from "@/app/(main)/components/Footer/Footer";
import { Header } from "@/app/(main)/components/Header/Header";
import { getAuthorizedUser } from "@/services/users/getAuthorizedUser";

const Layout = async ({ children }) => {
  //   TODO: rework this logic
  const authorizedUser = await getAuthorizedUser();

  return (
    <>
      <Header authorizedUser={authorizedUser} />
      <Container>{children}</Container>
      <Footer />
    </>
  );
};

export default Layout;
