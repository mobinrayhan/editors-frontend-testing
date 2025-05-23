// middleware.ts
import { verifySessionToken } from "helper/auth";
import { NextResponse } from "next/server";

const PROTECTED_PATHS = ["/dashboard", "/admin", "/user"]; // Add as needed

export async function middleware(req) {
  const pathname = req.nextUrl.pathname;
  const sessionToken = req.cookies.get("sessionToken")?.value;
  const session = sessionToken && (await verifySessionToken(sessionToken));

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

export const config = {
  matcher: ["/authentication/:path*", "/student/:path*"],
};
