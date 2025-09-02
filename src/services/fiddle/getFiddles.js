import { prismaClient } from "@/prisma/prisma";

export const getFiddles = async () => {
  return prismaClient.fiddles.findMany();
};
