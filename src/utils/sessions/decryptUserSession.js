import "server-only";
import { cookies } from "next/headers";
import { jwtVerify } from "jose";

const encodedKey = new TextEncoder().encode(process.env.SESSION_SECRET);

export const decryptUserSession = async (payload) => {
  const cookieStorage = await cookies();
  const encryptedSession = cookieStorage.get("session");

  return jwtVerify(encryptedSession, encodedKey, {
    algorithms: ["HS256"],
  });
};
