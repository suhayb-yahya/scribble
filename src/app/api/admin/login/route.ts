import { NextResponse } from "next/server";
import { createAdminCookie, getAdminPassword } from "@/lib/auth";

export async function POST(request: Request) {
  const password = getAdminPassword();
  if (!password) {
    return NextResponse.json(
      { error: "Admin login is not configured. Set ADMIN_PASSWORD in .env." },
      { status: 503 }
    );
  }
  const body = await request.json().catch(() => ({}));
  const submitted = (typeof body.password === "string" ? body.password : "").trim();
  if (submitted !== password) {
    return NextResponse.json({ error: "Invalid password" }, { status: 401 });
  }
  const cookie = createAdminCookie();
  const res = NextResponse.json({ ok: true });
  res.headers.set("Set-Cookie", cookie);
  return res;
}
