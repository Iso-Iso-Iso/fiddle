"use server";

import { getUserByEmail } from "@/services/users/getUserByEmail";
import { encryptPassword } from "@/utils/encryptPassword";
import { encryptUserSession } from "@/utils/sessions/encryptUserSession";
import { withValidateSchemaAction } from "@/utils/withValidateSchemaAction";
import { loginSchema } from "@/validation/login.schema";
import { redirect } from "next/navigation";
import { createFailedResponse } from "@/utils/createFailedResponse";

const handle = async (state) => {
  const user = await getUserByEmail(state.email);

  if (!user) {
    return createFailedResponse("Invalid email or password");
  }

  const encryptedPassword = await encryptPassword(state.password);

  if (user.password !== encryptedPassword) {
    return createFailedResponse("Invalid email or password");
  }

  await encryptUserSession({ userId: user.id });

  redirect("/fiddles");
};

export const login = withValidateSchemaAction(handle, loginSchema);
