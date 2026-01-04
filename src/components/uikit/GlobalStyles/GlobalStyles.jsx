import React from "react";
import MuiGlobalStyles from "@mui/material/GlobalStyles";

export const GlobalStyles = () => {
  return (
    <MuiGlobalStyles
      styles={{
        body: {
          height: "100%",
        },
        html: {
          height: "100%",
          containerType: "inline-size",
        },
      }}
    />
  );
};
