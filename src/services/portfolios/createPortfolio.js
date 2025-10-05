import "server-only";
import { prismaClient } from "@/prisma/prisma";

export const createPortfolio = async (portfolio) => {
  return prismaClient.portfolios.create({ data: portfolio });
};
