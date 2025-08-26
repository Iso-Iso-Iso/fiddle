import React from "react";
import { Background } from "./page.styles";
import { SignUpForm } from "@/app/auth/sign-up/components/SignUpForm/SignUpForm";

const Page = () => {
  return (
    <Background>
      <SignUpForm />
    </Background>
  );
};

export default Page;
