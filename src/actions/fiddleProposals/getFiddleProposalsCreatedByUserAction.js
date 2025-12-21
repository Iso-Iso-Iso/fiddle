"use server";

import { getFiddleProposals } from "@/services/fiddleProposals/getFiddleProposals";
import { getAuthorizedUser } from "@/services/users/getAuthorizedUser";

export const getFiddleProposalsCreatedByUserAction = async () => {
  const authorizedUser = await getAuthorizedUser();

  const proposals = await getFiddleProposals({ userId: authorizedUser.id });

  return proposals;
};
