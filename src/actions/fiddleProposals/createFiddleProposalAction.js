"use server";

import { getAuthorizedUser } from "@/services/users/getAuthorizedUser";
import { getProposalsBalance } from "@/services/proposalsBalance/getProposalsBalance";
import {
  FIDDLE_PROPOSALS_FIELDS,
  fiddleProposalsSchema,
} from "@/validation/fiddleProposals.schema";
import { safeParseAsync } from "valibot";
import { createFailedResponse } from "@/utils/createFailedResponse";
import { createFiddleProposal } from "@/services/fiddleProposals/createFiddleProposal";

export const createFiddleProposalAction = async (data) => {
  const authorizedUser = await getAuthorizedUser();

  const balance = await getProposalsBalance({ userId: authorizedUser.id });

  const validation = {
    [FIDDLE_PROPOSALS_FIELDS.WITHDRAW_AMOUNT]: data.withdrawAmount,
    [FIDDLE_PROPOSALS_FIELDS.GREETING]: data.greeting,
    [FIDDLE_PROPOSALS_FIELDS.BALANCE]: balance.amount,
  };

  const parsed = await safeParseAsync(fiddleProposalsSchema, validation);

  if (!parsed.success) {
    return createFailedResponse(parsed.issues[0].message);
  }

  await createFiddleProposal({
    fiddleId: data.fiddleId,
    greeting: data.greeting,
    userId: authorizedUser.id,
    withdrawAmount: data.withdrawAmount,
  });
};
