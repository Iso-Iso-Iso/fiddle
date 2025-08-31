import { prismaClient } from "@/prisma/prisma";

export const getUserByEmail = async (email) => {
  return prismaClient.users.findFirst({ where: { email } });
};
