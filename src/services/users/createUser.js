import { prismaClient } from "@/prisma/prisma";

export const createUser = async (user) => {
  return prismaClient.users.create({
    data: user,
  });
};
