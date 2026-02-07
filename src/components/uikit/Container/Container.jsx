import React from "react";
import MuiContainer from "@mui/material/Container";

export const Container = ({ children, fullHeight, fullFlex }) => {
  return (
    <MuiContainer
      style={{
        height: fullHeight ? "100%" : "auto",
        flex: fullFlex ? 1 : "none",
      }}
    >
      {children}
    </MuiContainer>
  );
};
