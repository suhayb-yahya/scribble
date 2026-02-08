"use server";

import { cookies } from "next/headers";
import type { Locale } from "@/lib/translations";

const LOCALE_COOKIE = "locale";
const MAX_AGE = 60 * 60 * 24 * 365; // 1 year

export async function setLocale(locale: Locale) {
  const cookieStore = await cookies();
  cookieStore.set(LOCALE_COOKIE, locale, {
    path: "/",
    maxAge: MAX_AGE,
    sameSite: "lax",
  });
}

export async function getLocale(): Promise<Locale> {
  const cookieStore = await cookies();
  const value = cookieStore.get(LOCALE_COOKIE)?.value;
  if (value === "ar" || value === "en") return value;
  return "en";
}
