import "server-only";
import { SignJWT } from "jose";
import { cookies } from "next/headers";

const encodedKey = new TextEncoder().encode(process.env.SESSION_SECRET);

export const encryptUserSession = async (payload) => {
  const cookieStore = await cookies();

  const signedSession = await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .sign(encodedKey);

  cookieStore.set("session", signedSession, {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
  });
};
