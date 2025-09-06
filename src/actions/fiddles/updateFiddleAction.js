"use server";

import { updateFiddleById } from "@/services/fiddle/updateFiddleById";
import { withValidateSchemaAction } from "@/utils/withValidateSchemaAction";
import { fiddleActionSchema } from "@/validation/fiddle.schema";

const handle = async (state) => {
  const fiddle = {
    name: state.name,
    content: JSON.stringify(state.content),
  };

  await updateFiddleById({ fiddle, id: state.id });
};

export const updateFiddleAction = withValidateSchemaAction(
  handle,
  fiddleActionSchema
);
