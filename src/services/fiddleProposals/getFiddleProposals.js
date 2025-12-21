import "server-only";
import { prismaClient } from "@/prisma/prisma";

export const getFiddleProposals = async ({ userId }) => {
  return prismaClient.proposals.findMany({
    where: { userId },
    include: {
      fiddle: true,
    },
  });
};
