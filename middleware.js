// middleware.ts
import { verifySessionToken } from "helper/auth";
import { NextResponse } from "next/server";

const PROTECTED_PATHS = ["/dashboard", "/admin", "/user"]; // Add as needed

export async function middleware(req) {
  const pathname = req.nextUrl.pathname;

  // if (!PROTECTED_PATHS.some((path) => pathname.startsWith(path))) {
  //   return NextResponse.next();
  // }

  const sessionToken = req.cookies.get("sessionToken")?.value;

  const session = sessionToken && (await verifySessionToken(sessionToken));

  // if (!session) {
  //   const loginUrl = new URL("/login", req.url);
  //   loginUrl.searchParams.set("redirect", pathname);
  //   return NextResponse.redirect(loginUrl);
  // }

  return NextResponse.next();
}

// export const config = {
//   matcher: ["/dashboard/:path*", "/admin/:path*", "/user/:path*"],
// };
