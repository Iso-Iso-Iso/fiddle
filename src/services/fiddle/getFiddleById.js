import { prismaClient } from "@/prisma/prisma";

export const getFiddleById = async (fiddleId) => {
  const fiddle = await prismaClient.fiddles.findFirst({
    where: { id: fiddleId },
    select: { user: true, name: true, id: true, content: true },
  });

  return { ...fiddle, content: JSON.parse(fiddle.content) };
};
