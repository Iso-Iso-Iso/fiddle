"use server";

import { prismaClient } from "@/prisma/prisma";

export const updateFiddleById = async ({ fiddle, id }) => {
  prismaClient.fiddles.update({ data: fiddle, where: { id } });
};
