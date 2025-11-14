import "server-only";
import { prismaClient } from "@/prisma/prisma";

export const getFiddleById = async (fiddleId) => {
  const fiddle = await prismaClient.fiddles.findFirst({
    where: { id: fiddleId },
    include: { user: true, images: true },
  });

  if (!fiddle) {
    return null;
  }

  return {
    ...fiddle,
    content: JSON.parse(fiddle.content),
    images: fiddle.images.map(
      (item) => `${process.env.AWS_S3_BUCKET_URL}/${item.slug}`
    ),
  };
};
