"use client";
import React, { useTransition } from "react";
import { Input } from "@/components/uikit/Input/Input";
import {
  FormWrapper,
  Inputs,
} from "@/app/auth/login/components/LoginForm/loginForm.styles";
import { Typography } from "@/components/uikit/Typography/Typography";
import { Button } from "@/components/uikit/Button/Button";
import { useForm } from "react-hook-form";
import {
  loginDefaultValues,
  loginSchemaResolver,
} from "@/validation/login.schema";
import { loginUserAction } from "@/actions/auth/loginUserAction";

export const LoginForm = ({ onSubmit }) => {
  const { control, handleSubmit } = useForm({
    resolver: loginSchemaResolver,
    defaultValues: loginDefaultValues,
  });
  const [isPending, startTransition] = useTransition();

  const handleUserLogin = (state) => {
    startTransition(() => loginUserAction(state));
  };

  return (
    <FormWrapper>
      <Inputs>
        <Typography align="center" variant="h6" text="Login" />
        <Input label="Email" control={control} name="email" />
        <Input label="Password" control={control} name="password" />
      </Inputs>
      <Button
        text="Continue"
        onClick={handleSubmit(handleUserLogin)}
        loading={isPending}
      />
    </FormWrapper>
  );
};

export default LoginForm;
