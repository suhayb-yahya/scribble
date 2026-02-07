import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin — Scribble",
  description: "Manage jobs",
};

export default function AdminLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
