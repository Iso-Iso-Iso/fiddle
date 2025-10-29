"use server";
import { withValidateSchemaAction } from "@/utils/withValidateSchemaAction";
import { portfolioActionSchema } from "@/validation/portfolio.schema";
import { createPortfolio } from "@/services/portfolios/createPortfolio";
import { getAuthorizedUser } from "@/services/users/getAuthorizedUser";

const handle = async (data) => {
  const authorizedUser = await getAuthorizedUser();

  const portfolioPayload = {
    name: data.name,
    description: data.description,
    userId: authorizedUser.id,
  };

  return createPortfolio(portfolioPayload, data.images);
};

export const createUserPortfolioAction = withValidateSchemaAction(
  handle,
  portfolioActionSchema
);
