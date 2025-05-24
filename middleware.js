// middleware.ts
import { verifySessionToken } from "helper/auth";
import { cookieConfig } from "helper/global";
import { sessionFetcher } from "helper/utils";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

const PROTECTED_PATHS = ["/dashboard", "/admin", "/user"]; // Add as needed

export async function middleware(req) {
  const pathname = req.nextUrl.pathname;
  const sessionToken = req.cookies.get("sessionToken")?.value;
  const session = sessionToken && (await verifySessionToken(sessionToken));

  const tokenAge =
    session?.user &&
    Date.now() - new Date(session?.user?.sessionIssuedAt).getTime();

  if (tokenAge > 15 * 60 * 1000) {
    const res = await sessionFetcher(
      `${process.env.API_LINK}/auth/refresh-token`,
      session?.user?.sessionToken
    );

    if (!res.ok) {
      return null;
    }
    const refreshData = await res.json();
    (await cookies()).set(
      "sessionToken",
      refreshData?.user?.sessionToken,
      cookieConfig
    );
  }

  if (session && pathname.startsWith("/authentication")) {
    const loginUrl = new URL("/", req.url);
    return NextResponse.redirect(loginUrl);
  }

  if (!session && pathname.startsWith("/student")) {
    const loginUrl = new URL("/authentication/sign-up", req.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}
