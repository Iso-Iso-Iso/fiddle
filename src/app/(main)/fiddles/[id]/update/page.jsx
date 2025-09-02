import React from "react";
import { FiddleForm } from "@/app/(main)/fiddles/create/components/FiddleForm/FiddleForm";
import { updateFiddleById } from "@/services/fiddle/updateFiddleById";

const Page = () => {
  return <FiddleForm onSubmit={updateFiddleById} />;
};

export default Page;
