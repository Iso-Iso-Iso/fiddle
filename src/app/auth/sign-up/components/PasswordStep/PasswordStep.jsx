import React from "react";
import { Input } from "@/components/uikit/Input/Input";
import { PasswordWrapper } from "./passwordStep.styles";

export const PasswordStep = () => {
  return (
    <PasswordWrapper>
      <Input label="Password" />
      <Input label="Repeat password" />
    </PasswordWrapper>
  );
};
