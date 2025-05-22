import Cookies from "js-cookie";

const API_KEY = process.env.API_KEY || "";

export async function verifySessionToken(token) {
  if (!token) return null;

  try {
    const res = await fetch(`${process.env.API_LINK}/auth/validate-session`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "x-api-key": API_KEY,
        "Content-Type": "application/json",
      },
    });

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
  const token = Cookies.get("sessionToken");

  if (!token) return null;

  try {
    const user = await verifySessionToken(token);
    return user;
  } catch (error) {
    console.error("Invalid token on server", error);
    return null;
  }
}
