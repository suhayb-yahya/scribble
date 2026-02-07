import { NextResponse } from "next/server";
import { verifyAdminCookie } from "@/lib/auth";

export async function GET(request: Request) {
  const cookie = request.headers.get("cookie");
  const isAdmin = verifyAdminCookie(cookie);
  return NextResponse.json({ isAdmin });
}
