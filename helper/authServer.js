import { cookies } from "next/headers";

export async function getUserFromServerCookie() {
  const cookieStore = await cookies();
  const token = cookieStore.get("sessionToken")?.value;

  if (!token) return null;

  try {
    const user = await verifySessionToken(token);
    return user;
  } catch (error) {
    console.error("Invalid token on server", error);
    return null;
  }
}
