import "server-only";
import { decryptUserSession } from "@/utils/sessions/decryptUserSession";
import { prismaClient } from "@/prisma/prisma";

export const getAuthorizedUser = async () => {
  const session = await decryptUserSession();

  if (!session) {
    return null;
  }

  return prismaClient.users.findFirst({ where: { id: session.userId } });
};
