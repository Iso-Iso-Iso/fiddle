import React from "react";
import MuiGlobalStyles from "@mui/material/GlobalStyles";

export const GlobalStyles = () => {
  return (
    <MuiGlobalStyles
      styles={{
        body: {
          minHeight: "100%",
          display: "flex",
          flexDirection: "column",
        },
        html: {
          height: "100%",
          containerType: "inline-size",
        },
      }}
    />
  );
};
