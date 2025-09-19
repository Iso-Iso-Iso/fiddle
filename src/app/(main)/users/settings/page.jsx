import React from "react";
import { redirect } from "next/navigation";
import { getAuthorizedUser } from "@/services/users/getAuthorizedUser";
import { SettingsForm } from "@/app/(main)/users/settings/components/SettingsForm/SettingsForm";
import { updateUserAction } from "@/actions/user/updateUserAction";

const Page = async () => {
  const authorizedUser = await getAuthorizedUser();

  const handleSubmit = async (form) => {
    "use server";
    return updateUserAction({ ...form, id: authorizedUser.id });
  };

  if (!authorizedUser) {
    return redirect("/404");
  }

  return (
    <>
      <SettingsForm user={authorizedUser} onSubmit={handleSubmit} />
    </>
  );
};

export default Page;
