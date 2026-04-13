import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const session = request.cookies.get("training-session");
  if (!session?.value && request.nextUrl.pathname.startsWith("/training")) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  if (session?.value && request.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL("/training", request.url));
  }
  return NextResponse.next();
}

export const config = { matcher: ["/", "/training/:path*"] };
