"use server";

import { createUser } from "@/services/users/createUser";
import { encryptPassword } from "@/utils/encryptPassword";
import { encryptUserSession } from "@/utils/sessions/encryptUserSession";
import { withValidateSchemaAction } from "@/utils/withValidateSchemaAction";
import { redirect } from "next/navigation";
import { signupSchema } from "@/validation/signup.schema";

const handle = async (state) => {
  const user = {
    email: state.email,
    firstName: state.firstName,
    lastName: state.lastName,
    role: state.role,
    password: await encryptPassword(state.password),
  };

  const res = await createUser(user);

  await encryptUserSession({ userId: res.id });

  redirect("/fiddles");
};

export const signup = withValidateSchemaAction(handle, signupSchema);
