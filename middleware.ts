import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/privado")) {
    const password = request.nextUrl.searchParams.get("key");
    const correctPassword = process.env.PRIVATE_PAGE_PASSWORD;

    if (password !== correctPassword) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/privado/:path*"],
};