import "server-only";
import { prismaClient } from "@/prisma/prisma";

export const getUserPortfolios = async ({ userId }) => {
  const portfolios = await prismaClient.portfolios.findMany({
    where: { userId },
    include: {
      images: true,
    },
    take: 9,
  });

  return portfolios.map((item) => ({
    ...item,
    images: item.images.map(
      (item) => `${process.env.AWS_S3_BUCKET_URL}/${item.slug}`
    ),
  }));
};
