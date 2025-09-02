import "server-only";
import { safeParseAsync } from "valibot";

export const withValidateSchemaAction = (action, schema) => async (data) => {
  const parsed = await safeParseAsync(schema, data);

  if (!parsed.success) {
    return { status: "error", message: parsed.issues[0].message };
  }

  return action(data);
};
