"use server";
import { updateUserById } from "@/services/users/updateUserById";
import { withValidateSchemaAction } from "@/utils/withValidateSchemaAction";
import { USER_FORM_FIELDS, userSettingsActionSchema } from "@/validation/user.schema";

const handle = async (form) => {
  const userId = form.id;
  const user = {
    firstName: form[USER_FORM_FIELDS.FIRST_NAME],
    lastName: form[USER_FORM_FIELDS.LAST_NAME],
    email: form[USER_FORM_FIELDS.EMAIL],
    description: form[USER_FORM_FIELDS.DESCRIPTION],
  };

  const updated = await updateUserById(userId, user);
};

export const updateUserAction = withValidateSchemaAction(
  handle,
  userSettingsActionSchema
);
