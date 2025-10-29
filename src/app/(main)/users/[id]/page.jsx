import React from "react";
import { getUserById } from "@/services/users/getUserById";
import { decryptUserSession } from "@/utils/sessions/decryptUserSession";
import { redirect } from "next/navigation";

import { UserRole } from "@/prisma/enums";
import { EmployerView } from "@/app/(main)/users/[id]/components/EmployerView/EmployerView";
import { FreelancerView } from "@/app/(main)/users/[id]/components/FreelancerView/FreelancerView";

const profileViewRenderers = {
  [UserRole.EMPLOYER]: EmployerView,
  [UserRole.FREELANCER]: FreelancerView,
};

const Page = async ({ params }) => {
  await params;

  const session = await decryptUserSession();
  const user = await getUserById(params.id);

  if (!user) {
    return redirect("/404");
  }

  const isEditable = user.id === session?.userId;

  const ProfileRenderer = profileViewRenderers[user.role];

  return <ProfileRenderer user={user} isEditable={isEditable} />;
};

export default Page;
