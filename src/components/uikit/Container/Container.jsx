import React from "react";
import MuiContainer from "@mui/material/Container";

export const Container = ({ children, fullHeight }) => {
  return (
    <MuiContainer style={{ height: fullHeight ? "100%" : "auto" }}>
      {children}
    </MuiContainer>
  );
};
