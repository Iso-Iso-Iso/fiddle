import React from "react";
import MuiStepper from "@mui/material/Stepper";
import MuiStep from "@mui/material/Step";
import MuiStepLabel from "@mui/material/StepLabel";

export const Stepper = ({ activeStep, items }) => {
  return (
    <MuiStepper activeStep={activeStep}>
      {items.map((item) => (
        <MuiStep key={item.key} title={item.title}>
          <MuiStepLabel />
        </MuiStep>
      ))}
    </MuiStepper>
  );
};
