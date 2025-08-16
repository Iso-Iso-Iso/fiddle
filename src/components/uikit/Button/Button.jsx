import React from "react";
import MButton from "@mui/material/Button";

export const Button = ({ text, onClick }) => {
  return (
    <MButton variant="contained" onClick={onClick}>
      {text}
    </MButton>
  );
};
