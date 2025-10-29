import "server-only";
import { prismaClient } from "@/prisma/prisma";

export const createPortfolio = async (portfolio, images) => {
  const imagesToStore = images.map((image) => ({
    slug: image,
  }));

  await prismaClient.portfolios.create({
    data: { ...portfolio, images: { create: imagesToStore } },
  });
};
