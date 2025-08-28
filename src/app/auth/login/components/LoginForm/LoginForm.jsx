"use client";
import React from "react";
import { Input } from "@/components/uikit/Input/Input";
import {
  FormWrapper,
  Inputs,
} from "@/app/auth/login/components/LoginForm/loginForm.styles";
import { Typography } from "@/components/uikit/Typography/Typography";
import { Button } from "@/components/uikit/Button/Button";

export const LoginForm = ({ onSubmit }) => {
  return (
    <FormWrapper>
      <Inputs>
        <Typography align="center" variant="h6" text="Login" />
        <Input label="Email" />
        <Input label="Password" />
      </Inputs>
      <Button text="Continue" onClick={onSubmit} />
    </FormWrapper>
  );
};

export default LoginForm;
