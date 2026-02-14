"use client";

import { useLocale } from "next-intl";
import { useEffect } from "react";

export default function LocaleDirection() {
  const locale = useLocale();

  useEffect(() => {
    document.documentElement.lang = locale === "ar" ? "ar" : "en";
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
  }, [locale]);

  return null;
}
