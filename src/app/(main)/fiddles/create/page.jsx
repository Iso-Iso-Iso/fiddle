import React from "react";
import { FiddleForm } from "@/app/(main)/fiddles/create/components/FiddleForm/FiddleForm";
import { createFiddleAction } from "@/actions/fiddles/createFiddleAction";

const Page = async () => {
  return <FiddleForm onSubmit={createFiddleAction} />;
};

export default Page;
