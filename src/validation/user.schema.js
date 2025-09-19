import * as v from "valibot";
import { valibotResolver } from "@hookform/resolvers/valibot";

export const USER_FORM_FIELDS = {
  FIRST_NAME: "firstName",
  LAST_NAME: "lastName",
  EMAIL: "email",
  DESCRIPTION: "description",
};

export const userSettingsSchema = v.object({
  [USER_FORM_FIELDS.FIRST_NAME]: v.pipe(v.string(), v.minLength(1)),
  [USER_FORM_FIELDS.LAST_NAME]: v.pipe(v.string(), v.minLength(1)),
  [USER_FORM_FIELDS.EMAIL]: v.pipe(v.string(), v.email()),
  [USER_FORM_FIELDS.DESCRIPTION]: v.optional(v.string()),
});

export const userSettingsActionSchema = v.object({
  ...userSettingsSchema.entries,
  id: v.string(),
});

export const userSettingsResolver = valibotResolver(userSettingsSchema);

export const getUserSettingsDefaultValues = (user) => ({});
