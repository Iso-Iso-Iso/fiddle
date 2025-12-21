"use server";

import { getAuthorizedUser } from "@/services/users/getAuthorizedUser";
import { getProposalsBalance } from "@/services/proposalsBalance/getProposalsBalance";

export const getProposalsBalanceAction = async () => {
  const authorizedUser = await getAuthorizedUser();

  const balance = await getProposalsBalance({ userId: authorizedUser.id });

  return balance;
};
