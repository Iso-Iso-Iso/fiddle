"use client";
import React, { useState } from "react";
import { Button } from "@/components/uikit/Button/Button";
import {
  ButtonsWrapper,
  ContentWrapper,
  FormWrapper,
} from "./signUpForm.styles";
import { Typography } from "@/components/uikit/Typography/Typography";
import { Stepper } from "@/components/uikit/Stepper/Stepper";
import { GeneralInfoStep } from "@/app/auth/sign-up/components/GeneralInfoStep/GeneralInfoStep";
import { PasswordStep } from "@/app/auth/sign-up/components/PasswordStep/PasswordStep";
import { signup } from "@/services/auth/signup";
import { useForm } from "react-hook-form";

const steps = [
  { key: 0, title: "Profile Info" },
  { key: 1, title: "Profile Info" },
];

const stepRenderers = [GeneralInfoStep, PasswordStep];

export const SignUpForm = () => {
  const [activeStep, setActiveStep] = useState(0);

  const { control, handleSubmit } = useForm();

  const handleNext = async (data) => {
    if (steps.length === activeStep + 1) {
      await signup(data);
      return;
    }
    setActiveStep((prev) => prev + 1);
  };

  const handlePrev = () => {
    setActiveStep((prev) => prev - 1);
  };

  const StepRenderer = stepRenderers[activeStep];

  return (
    <FormWrapper>
      <ContentWrapper>
        <Typography align="center" variant="h6" text="Sign Up" />
        <Stepper activeStep={activeStep} items={steps} />
        <StepRenderer control={control} />
      </ContentWrapper>
      <ButtonsWrapper>
        {activeStep !== 0 && (
          <Button variant="outlined" text="Back" onClick={handlePrev} />
        )}
        <Button text="Continue" onClick={handleSubmit(handleNext)} fullWidth />
      </ButtonsWrapper>
    </FormWrapper>
  );
};
