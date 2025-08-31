"use client";
import React from "react";
import { Input } from "@/components/uikit/Input/Input";
import {
  FormWrapper,
  Inputs,
} from "@/app/auth/login/components/LoginForm/loginForm.styles";
import { Typography } from "@/components/uikit/Typography/Typography";
import { Button } from "@/components/uikit/Button/Button";
import { useForm } from "react-hook-form";
import { login } from "@/services/auth/login";

export const LoginForm = ({ onSubmit }) => {
  const { control, handleSubmit } = useForm();

  return (
    <FormWrapper>
      <Inputs>
        <Typography align="center" variant="h6" text="Login" />
        <Input label="Email" control={control} name="email" />
        <Input label="Password" control={control} name="password" />
      </Inputs>
      <Button text="Continue" onClick={handleSubmit(login)} />
    </FormWrapper>
  );
};

export default LoginForm;
