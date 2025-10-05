import "server-only";
import { safeParseAsync } from "valibot";
import { createFailedResponse } from "@/utils/createFailedResponse";

export const withValidateSchemaAction = (action, schema) => async (data) => {
  const parsed = await safeParseAsync(schema, data);
  console.log(parsed);
  if (!parsed.success) {
    return createFailedResponse(parsed.issues[0].message);
  }

  return action(data);
};
