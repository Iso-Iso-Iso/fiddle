"use server";

import { prismaClient } from "@/prisma/prisma";

export const createFiddle = async (fiddle) => {
  return prismaClient.fiddles.create({ data: fiddle });
};
