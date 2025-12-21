import "server-only";
import { prismaClient } from "@/prisma/prisma";
import { ProposalStatuses } from "@/prisma/enums";

export const createFiddleProposal = async ({
  withdrawAmount,
  greeting,
  userId,
  fiddleId,
}) => {
  await prismaClient.$transaction([
    prismaClient.proposals.create({
      data: {
        fiddleId,
        greeting,
        userId,
        withdrawAmount,
        status: ProposalStatuses.ACTIVE,
      },
    }),
    prismaClient.proposalBalances.update({
      data: {
        amount: { decrement: withdrawAmount },
      },
      where: {
        userId,
      },
    }),
  ]);
};
