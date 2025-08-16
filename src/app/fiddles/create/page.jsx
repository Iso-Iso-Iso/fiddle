import React from "react";
import { FiddleForm } from "@/components/FiddleForm/FiddleForm";
import { createFiddle } from "@/services/fiddle/createFiddle";

const Page = async () => {
  return <FiddleForm onSubmit={createFiddle} />;
};

export default Page;
