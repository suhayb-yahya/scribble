import type { Locale } from "./translations";

const LOCALE_PARAM = "locale";

/**
 * Builds an internal nav href that preserves the current locale.
 * In Arabic, appends ?locale=ar so middleware can set the cookie and the next page loads in Arabic.
 */
export function localeHref(path: string, locale: Locale): string {
  if (locale !== "ar") return path;
  const separator = path.includes("?") ? "&" : "?";
  return `${path}${separator}${LOCALE_PARAM}=ar`;
}
