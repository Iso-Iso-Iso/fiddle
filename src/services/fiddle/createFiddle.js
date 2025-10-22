"use server";

import { prismaClient } from "@/prisma/prisma";

export const createFiddle = async (fiddle, images) => {
  const createdFiddle = await prismaClient.fiddles.create({ data: fiddle });
  console.log(createdFiddle);
  await prismaClient.fiddleImages.createMany({
    data: images.map((item) => ({ slug: item, fiddleId: createdFiddle.id })),
  });
};
