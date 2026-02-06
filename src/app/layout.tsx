import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Scribble — Startup",
  description: "Built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden" suppressHydrationWarning>
      <body
        className="antialiased text-black min-h-screen bg-white overflow-x-hidden max-w-full"
        suppressHydrationWarning
      >
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
