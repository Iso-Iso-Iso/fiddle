import "server-only";
import { cookies } from "next/headers";
import { jwtVerify } from "jose";

const encodedKey = new TextEncoder().encode(process.env.SESSION_SECRET);

export const decryptUserSession = async () => {
  const cookieStorage = await cookies();
  const encryptedSession = cookieStorage.get("session");

  if (!encryptedSession) {
    return null;
  }

  const { payload } = await jwtVerify(encryptedSession.value, encodedKey, {
    algorithms: ["HS256"],
  });

  return payload;
};
