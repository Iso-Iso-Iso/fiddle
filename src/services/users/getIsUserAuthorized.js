import "server-only";
import { cookies } from "next/headers";

export const getIsUserAuthorized = async () => {
  const cookieStorage = await cookies();

  return !!cookieStorage.get("session");
};
