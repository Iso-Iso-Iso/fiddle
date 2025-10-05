"use server";
import { storeFileToStorage } from "@/utils/storeFileToStorage";
import { withValidateSchemaAction } from "@/utils/withValidateSchemaAction";
import { portfolioActionSchema } from "@/validation/portfolio.schema";
import { createPortfolio } from "@/services/portfolios/createPortfolio";
import { getAuthorizedUser } from "@/services/users/getAuthorizedUser";

const handle = async (data) => {
  const image = data.image;

  const { slug } = await storeFileToStorage(image);

  const authorizedUser = await getAuthorizedUser();

  const portfolioPayload = {
    image: slug,
    name: data.name,
    description: data.description,
    userId: authorizedUser.id,
  };

  return createPortfolio(portfolioPayload);
};

export const createUserPortfolioAction = withValidateSchemaAction(
  handle,
  portfolioActionSchema
);
