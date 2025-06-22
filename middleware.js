import { verifySessionToken } from "helper/auth";
import { cookieConfig } from "helper/global";
import { sessionFetcher } from "helper/utils";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function middleware(req) {
  const pathname = req.nextUrl.pathname;
  const userSessionToken = req.cookies.get("userSessionToken")?.value;

  const session =
    userSessionToken && (await verifySessionToken(userSessionToken));
  const user = session?.user;

  const currentDevice = req.headers.get("user-agent") || "unknown";

  // 🧠 If user is logged in, but on different device → logout
  if (user && user.activeDevice !== currentDevice) {
    const loginUrl = new URL("/authentication/sign-up", req.url);
    const res = NextResponse.redirect(loginUrl);
    res.cookies.delete("userSessionToken");
    return res;
  }

  const tokenAge =
    user && Date.now() - new Date(user.sessionIssuedAt).getTime();

  // 🔁 Refresh token if older than 15 mins
  if (tokenAge > 15 * 60 * 1000) {
    const res = await sessionFetcher(
      `${process.env.API_LINK}/auth/refresh-token`,
      userSessionToken
    );

    if (!res.ok) {
      const loginUrl = new URL("/authentication/sign-up", req.url);
      const res = NextResponse.redirect(loginUrl);
      res.cookies.delete("userSessionToken");
      return res;
    }

    const refreshData = await res.json();
    (await cookies()).set(
      "userSessionToken",
      refreshData?.user?.userSessionToken,
      cookieConfig
    );
  }

  // 🚫 Prevent authenticated user from accessing login page
  if (user && pathname.startsWith("/authentication")) {
    const homeUrl = new URL("/", req.url);
    return NextResponse.redirect(homeUrl);
  }

  // 🔒 Protect /student routes
  if (!user && pathname.startsWith("/student")) {
    const loginUrl = new URL("/authentication/sign-up", req.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}
