"use client";
import React from "react";
import { Input } from "@/components/uikit/Input/Input";
import { useForm } from "react-hook-form";
import { Button } from "@/components/uikit/Button/Button";
import {
  getUserSettingsDefaultValues,
  USER_FORM_FIELDS,
  userSettingsResolver,
} from "@/validation/user.schema";
import { Textarea } from "@/components/uikit/Textarea/Textarea";
import { ButtonWrapper, Name, Wrapper } from "./settingsForm.styles";
import { Typography } from "@/components/uikit/Typography/Typography";

export const SettingsForm = ({ user, onSubmit }) => {
  const { control, handleSubmit, formState } = useForm({
    resolver: userSettingsResolver,
    defaultValues: getUserSettingsDefaultValues(user),
  });

  return (
    <Wrapper>
      <Typography text="Personal Information" variant="h5" />
      <Name>
        <Input
          control={control}
          label="First Name"
          name={USER_FORM_FIELDS.FIRST_NAME}
        />
        <Input
          control={control}
          label="Last Name"
          name={USER_FORM_FIELDS.LAST_NAME}
        />
        <Input control={control} label="Email" name={USER_FORM_FIELDS.EMAIL} />
      </Name>
      <Textarea
        control={control}
        name={USER_FORM_FIELDS.DESCRIPTION}
        label="Profile Description"
      />
      <ButtonWrapper>
        <Button text="Save" onClick={handleSubmit(onSubmit)} />
      </ButtonWrapper>
    </Wrapper>
  );
};
