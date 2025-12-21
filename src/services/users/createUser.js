import "server-only";
import { prismaClient } from "@/prisma/prisma";
import { UserRole } from "@/prisma/enums";

export const createUser = async (user) => {
  const data = user;

  if (user.role === UserRole.FREELANCER) {
    data.proposalBalance = { create: { amount: 100 } };
  }

  return prismaClient.users.create({
    data: user,
  });
};
