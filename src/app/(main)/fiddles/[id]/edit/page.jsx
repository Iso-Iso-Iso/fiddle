import React from "react";
import { FiddleForm } from "@/app/(main)/fiddles/create/components/FiddleForm/FiddleForm";
import { getFiddleById } from "@/services/fiddle/getFiddleById";
import { redirect } from "next/navigation";
import { getAuthorizedUser } from "@/services/users/getAuthorizedUser";
import { updateFiddleAction } from "@/actions/fiddles/updateFiddleAction";

const Page = async ({ params }) => {
  const authorizedUser = await getAuthorizedUser();
  const fiddle = await getFiddleById(params.id);

  if (authorizedUser.id !== fiddle.user.id) {
    redirect("/404");
    return;
  }

  return <FiddleForm fiddle={fiddle} onSubmit={updateFiddleAction} />;
};

export default Page;
