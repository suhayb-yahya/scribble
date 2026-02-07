import { NextResponse } from "next/server";

/**
 * Diagnostic: returns whether ADMIN_PASSWORD is set on the server.
 * Use this to verify Vercel env vars are loaded (e.g. GET /api/admin/env-check).
 * Does not reveal the password.
 */
export async function GET() {
  const configured = Boolean(
    process.env.ADMIN_PASSWORD && String(process.env.ADMIN_PASSWORD).trim().length > 0
  );
  return NextResponse.json({ configured });
}
