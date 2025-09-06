"use server";

import { cookies } from "next/headers";

export const logoutUserAction = async () => {
  const cookieStorage = await cookies();

  cookieStorage.delete("session");
};
