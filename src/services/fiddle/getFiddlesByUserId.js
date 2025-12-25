import "server-only";
import { prismaClient } from "@/prisma/prisma";

const PER_PAGE = 20;

export const getFiddlesByUserId = async ({ userId, page = 1 }) => {
  const fiddles = await prismaClient.fiddles.findMany({
    take: PER_PAGE,
    where: { userId },
    include: { images: true },
    skip: (page - 1) * PER_PAGE,
  });

  return fiddles.map((fiddle) => {
    const images = fiddle.images.map((image) => ({
      ...image,
      url: `${process.env.AWS_S3_BUCKET_URL}/${image.slug}`,
    }));

    return { ...fiddle, images };
  });
};
