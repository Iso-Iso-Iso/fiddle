import React from "react";
import MuiGlobalStyles from "@mui/material/GlobalStyles";

export const GlobalStyles = () => {
  return (
    <MuiGlobalStyles
      styles={{
        body: {
          miHeight: "100%",
        },
        html: {
          height: "100%",
          containerType: "inline-size",
        },
      }}
    />
  );
};
