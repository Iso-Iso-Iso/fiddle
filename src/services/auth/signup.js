"use server";

import { createUser } from "@/services/users/createUser";
import { encryptPassword } from "@/utils/encryptPassword";
import { encryptUserSession } from "@/utils/sessions/encryptUserSession";

export const signup = async (state) => {
  const user = {
    email: state.email,
    firstName: state.firstName,
    lastName: state.lastName,
    password: await encryptPassword(state.password),
  };

  const res = await createUser(user);

  await encryptUserSession({ userId: res.id });
};
