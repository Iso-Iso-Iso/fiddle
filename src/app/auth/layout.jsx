import React from "react";
import { Background } from "./layout.styles";

const Layout = ({ children }) => {
  return <Background>{children}</Background>;
};

export default Layout;
