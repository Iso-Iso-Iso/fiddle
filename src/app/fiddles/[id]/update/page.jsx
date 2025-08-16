import React from "react";
import { FiddleForm } from "@/components/FiddleForm/FiddleForm";
import { updateFiddle } from "@/services/fiddle/updateFiddle";

const Page = () => {
  return <FiddleForm onSubmit={updateFiddle} />;
};

export default Page;
