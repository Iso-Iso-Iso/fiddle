import "server-only";
import { prismaClient } from "@/prisma/prisma";

export const getFiddlesByUserId = async (userId) => {
  const fiddles = await prismaClient.fiddles.findMany({
    take: 10,
    where: { userId },
    include: { images: true },
  });

  return fiddles.map((fiddle) => {
    const images = fiddle.images.map((image) => ({
      ...image,
      url: `${process.env.AWS_S3_BUCKET_URL}/${image.slug}`,
    }));

    return { ...fiddle, images };
  });
};
