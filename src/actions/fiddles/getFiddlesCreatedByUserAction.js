"use server";

import { getAuthorizedUser } from "@/services/users/getAuthorizedUser";
import { getFiddlesByUserId } from "@/services/fiddle/getFiddlesByUserId";

export const getFiddlesCreatedByUserAction = async () => {
  const authorizedUser = await getAuthorizedUser();

  return getFiddlesByUserId({ userId: authorizedUser.id });
};
