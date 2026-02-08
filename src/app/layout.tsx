import type { Metadata } from "next";
import { getLocale } from "@/app/actions/locale";
import "./globals.css";

export const metadata: Metadata = {
  title: "Scribble — Startup",
  description: "Built with Next.js",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const isRtl = locale === "ar";

  return (
    <html
      lang={locale}
      dir={isRtl ? "rtl" : "ltr"}
      className="overflow-x-hidden"
      suppressHydrationWarning
    >
      <body
        className="antialiased text-black min-h-screen bg-white overflow-x-hidden max-w-full"
        suppressHydrationWarning
        data-locale={locale}
      >
        {children}
      </body>
    </html>
  );
}
