"use client";

import { styled } from "@mui/material";
import MuiRadio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import MuiRadioGroup from "@mui/material/RadioGroup";

export const InvisibleRadio = styled(MuiRadio)({
  opacity: 0,
  zIndex: -99,
  position: "absolute",
  left: -9999,
});

export const ControlLabel = styled(FormControlLabel)(({ theme, checked }) => ({
  margin: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderBottom: `1px solid ${theme.palette.primary.main}`,
  padding: `${theme.spacing(1)} 0`,
  background: checked ? theme.palette.primary.main : null,
  color: checked ? theme.palette.common.white : theme.palette.common.black,
  transition: theme.transitions.create("all", { easing: "ease" }),
  "&:hover": checked
    ? null
    : {
        background: theme.palette.grey.A200,
      },
}));

export const RadioGroupWrapper = styled(MuiRadioGroup)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  borderColor: theme.palette.primary.main,
  borderWidth: 1,
  overflow: "hidden",
  borderStyle: "solid",
  "&:last-child": {
    borderBottom: "none",
  },
}));
