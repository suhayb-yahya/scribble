import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const LOCALE_COOKIE = "locale";
const LOCALE_PARAM = "locale";
const MAX_AGE = 60 * 60 * 24 * 365; // 1 year

export function middleware(request: NextRequest) {
  const localeParam = request.nextUrl.searchParams.get(LOCALE_PARAM);

  if (localeParam === "ar" || localeParam === "en") {
    const url = request.nextUrl.clone();
    url.searchParams.delete(LOCALE_PARAM);
    const response = NextResponse.redirect(url);
    response.cookies.set(LOCALE_COOKIE, localeParam, {
      path: "/",
      maxAge: MAX_AGE,
      sameSite: "lax",
    });
    return response;
  }

  return NextResponse.next();
}
