import { prismaClient } from "@/prisma/prisma";

const COUNT_PER_PAGE = 20;

export const getFiddlesWithPagination = async ({ page }) => {
  const count = await prismaClient.fiddles.count();
  const res = await prismaClient.fiddles.findMany({
    take: COUNT_PER_PAGE,
    skip: (page - 1) * COUNT_PER_PAGE,
    include: { user: true, images: true },
  });

  const fiddles = res.map((item) => ({
    ...item,
    content: JSON.parse(item.content),
    images: item.images.map(
      (item) => `${process.env.AWS_S3_BUCKET_URL}/${item.slug}`
    ),
  }));

  const pageCount = Math.ceil(count / count);

  return { fiddles, pageCount };
};
