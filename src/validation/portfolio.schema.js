import * as v from "valibot";
import { valibotResolver } from "@hookform/resolvers/valibot";

export const PORTFOLIO_SCHEMA_FIELDS = {
  NAME: "name",
  DESCRIPTION: "description",
  IMAGES: "images",
};

const portfolioSchema = v.object({
  [PORTFOLIO_SCHEMA_FIELDS.NAME]: v.string(),
  [PORTFOLIO_SCHEMA_FIELDS.DESCRIPTION]: v.string(),
  [PORTFOLIO_SCHEMA_FIELDS.IMAGES]: v.any(),
});

export const portfolioActionSchema = v.object({
  ...v.pick(portfolioSchema, [
    PORTFOLIO_SCHEMA_FIELDS.NAME,
    PORTFOLIO_SCHEMA_FIELDS.DESCRIPTION,
  ]).entries,
  images: v.any(),
});

export const portfolioDefaultValues = {
  [PORTFOLIO_SCHEMA_FIELDS.NAME]: "",
  [PORTFOLIO_SCHEMA_FIELDS.DESCRIPTION]: "",
};

export const portfolioResolver = valibotResolver(portfolioSchema);
