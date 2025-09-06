import { prismaClient } from "@/prisma/prisma";

const count = 20;

export const getFiddlesWithPagination = async ({ page }) => {
  const count = await prismaClient.fiddles.count();
  const res = await prismaClient.fiddles.findMany({
    select: { user: true, id: true, content: true, name: true },
    take: count,
    skip: (page - 1) * count,
  });

  const fiddles = res.map((item) => ({
    ...item,
    content: JSON.parse(item.content),
  }));

  const pageCount = Math.ceil(count / count);

  return { fiddles, pageCount };
};
