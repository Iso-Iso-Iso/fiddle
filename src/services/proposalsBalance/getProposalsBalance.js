import "server-only";
import { prismaClient } from "@/prisma/prisma";

export const getProposalsBalance = async ({ userId }) =>
  prismaClient.proposalBalances.findFirst({ where: { userId } });
