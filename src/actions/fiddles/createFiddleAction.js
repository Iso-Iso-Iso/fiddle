"use server";

import { withValidateSchemaAction } from "@/utils/withValidateSchemaAction";
import { fiddleSchema } from "@/validation/fiddle.schema";
import { createFiddle } from "@/services/fiddle/createFiddle";
import { createFailedResponse } from "@/utils/createFailedResponse";
import { getAuthorizedUser } from "@/services/users/getAuthorizedUser";

const handle = async (state) => {
  const authorizedUser = await getAuthorizedUser();

  if (authorizedUser.role !== "EMPLOYER") {
    return createFailedResponse("User don't have permissions for this action");
  }

  const fiddle = {
    content: JSON.stringify(state.content),
    name: state.name,
    userId: authorizedUser.id,
  };

  await createFiddle(fiddle);
};

export const createFiddleAction = withValidateSchemaAction(
  handle,
  fiddleSchema
);
