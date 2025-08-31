import React from "react";
import { Input } from "@/components/uikit/Input/Input";
import { PasswordWrapper } from "./passwordStep.styles";

export const PasswordStep = ({ control }) => {
  return (
    <PasswordWrapper>
      <Input label="Password" control={control} name="password" />
      <Input label="Repeat password" control={control} name="repeatPassoword" />
    </PasswordWrapper>
  );
};
