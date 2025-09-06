import { prismaClient } from "@/prisma/prisma";

export const getFiddles = async () => {
  const res = await prismaClient.fiddles.findMany({
    select: { user: true, id: true, content: true, name: true },
  });

  return res.map((item) => ({ ...item, content: JSON.parse(item.content) }));
};
