import "server-only";
import { prismaClient } from "@/prisma/prisma";

export const updateUserById = async (id, update) => {
  return prismaClient.users.update({ data: update, where: { id } });
};
