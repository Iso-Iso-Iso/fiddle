import React from "react";
import { Input } from "@/components/uikit/Input/Input";
import { Inputs, UserPersonalInfo } from "./generalInfoStep.styles";

export const GeneralInfoStep = ({ control }) => {
  return (
    <Inputs>
      <Input label="Email" control={control} name="email" />
      <UserPersonalInfo>
        <Input label="First Name" control={control} name="firstName" />
        <Input label="Last Name" control={control} name="lastName" />
      </UserPersonalInfo>
    </Inputs>
  );
};
