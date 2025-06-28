import Cookies from "js-cookie";
import { sessionFetcher } from "./utils";

export async function verifySessionToken(token) {
  if (!token) return null;

  try {
    const res = await sessionFetcher(
      `${process.env.API_LINK}/auth/validate-session`,
      token
    );

    if (!res.ok) {
      return null;
    }

    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Session verification failed:", err);
    return null;
  }
}

export async function getUserFromClientCookie() {
  const token = Cookies.get("userSessionToken");

  if (!token) return null;

  try {
    const user = await verifySessionToken(token);
    return user;
  } catch (error) {
    console.error("Invalid token on server", error);
    return null;
  }
}

export function signOutUserFromClient() {
  Cookies.remove("userSessionToken", {
    path: "/",
    domain:
      process.env.NODE_ENV === "development" ? "localhost" : ".editors.academy",
    secure: true,
    sameSite: "lax",
  });
}
