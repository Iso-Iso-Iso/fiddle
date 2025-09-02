import React from "react";
import { FiddleForm } from "@/app/(main)/fiddles/create/components/FiddleForm/FiddleForm";
import { createFiddle } from "@/services/fiddle/createFiddle";

const Page = async () => {
  return <FiddleForm onSubmit={createFiddle} />;
};

export default Page;
