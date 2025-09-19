import React from "react";
import { Background } from "./layout.styles";
import { getIsUserAuthorized } from "@/services/users/getIsUserAuthorized";
import { redirect } from "next/navigation";

const Layout = async ({ children }) => {
  const isAuthorized = await getIsUserAuthorized();

  if (isAuthorized) {
    return redirect("/");
  }

  return <Background>{children}</Background>;
};

export default Layout;
