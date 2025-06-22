import { cookies } from "next/headers";
import { verifySessionToken } from "./auth";

export async function getUserFromServerCookie() {
  const cookieStore = await cookies();
  const token = cookieStore.get("userSessionToken")?.value;
  if (!token) return null;

  try {
    const user = await verifySessionToken(token);
    return user;
  } catch (error) {
    console.error("Invalid token on server", error);
    return null;
  }
}

export async function signOutUserFromServer() {
  const cookieStore = await cookies();
  cookieStore.delete("userSessionToken");
}
