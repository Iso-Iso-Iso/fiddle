"use server";

import { getUserByEmail } from "@/services/users/getUserByEmail";
import { encryptPassword } from "@/utils/encryptPassword";
import { encryptUserSession } from "@/utils/sessions/encryptUserSession";

export const login = async (state) => {
  const user = await getUserByEmail(state.email);

  if (!user) {
    return;
  }

  const encryptedPassword = await encryptPassword(state.password);

  if (user.password !== encryptedPassword) {
    return;
  }

  await encryptUserSession({ userId: user.id });
};
