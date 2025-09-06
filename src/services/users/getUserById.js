import { prismaClient } from "@/prisma/prisma";

export const getUserById = async (userId) => {
  return prismaClient.users.findFirst({ where: { id: userId } });
};
