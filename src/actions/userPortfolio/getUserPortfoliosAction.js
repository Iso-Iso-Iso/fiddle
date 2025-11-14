"use server";

import { getAuthorizedUser } from "@/services/users/getAuthorizedUser";
import { getUserPortfolios } from "@/services/portfolios/getUserPortfolios";

export const getUserPortfoliosAction = async () => {
  const authorizedUser = await getAuthorizedUser();

  return getUserPortfolios({ userId: authorizedUser.id });
};
