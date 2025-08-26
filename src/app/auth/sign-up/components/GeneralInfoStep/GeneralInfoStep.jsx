import React from "react";
import { Input } from "@/components/uikit/Input/Input";
import { Inputs, UserPersonalInfo } from "./generalInfoStep.styles";

export const GeneralInfoStep = ({ onNext }) => {
  return (
    <Inputs>
      <Input label="Email" />
      <UserPersonalInfo>
        <Input label="First Name" />
        <Input label="Last Name" />
      </UserPersonalInfo>
    </Inputs>
  );
};
