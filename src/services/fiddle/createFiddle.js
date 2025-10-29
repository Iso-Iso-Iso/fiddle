"use server";

import { prismaClient } from "@/prisma/prisma";

export const createFiddle = async (fiddle, images) => {
  await prismaClient.fiddles.create({
    data: {
      ...fiddle,
      images: {
        create: images.map((item) => ({
          slug: item,
        })),
      },
    },
  });
};
