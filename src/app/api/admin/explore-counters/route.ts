import { NextResponse } from "next/server";
import { verifyAdminCookie } from "@/lib/auth";
import { getExploreCounters, saveExploreCounters } from "@/lib/explore-counters";
import type { ExploreCounters } from "@/lib/explore-counters";

function requireAdmin(request: Request): NextResponse | null {
  const cookie = request.headers.get("cookie");
  if (!verifyAdminCookie(cookie)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  return null;
}

function parseNumber(v: unknown): number {
  if (typeof v === "number" && Number.isFinite(v) && v >= 0) return Math.floor(v);
  if (typeof v === "string") {
    const n = parseInt(v, 10);
    if (Number.isFinite(n) && n >= 0) return n;
  }
  return 0;
}

export async function GET(request: Request) {
  const err = requireAdmin(request);
  if (err) return err;
  const counters = await getExploreCounters();
  return NextResponse.json(counters);
}

export async function PUT(request: Request) {
  const err = requireAdmin(request);
  if (err) return err;
  const body = await request.json().catch(() => ({}));
  const counters: ExploreCounters = {
    videos: parseNumber(body.videos),
    brands: parseNumber(body.brands),
    clients: parseNumber(body.clients),
  };
  try {
    await saveExploreCounters(counters);
  } catch (e) {
    const code = e && typeof e === "object" && "code" in e ? (e as NodeJS.ErrnoException).code : null;
    if (code === "EACCES" || code === "EROFS" || code === "ENOENT") {
      return NextResponse.json(
        { error: "Saving is not available (read-only). Add BLOB_READ_WRITE_TOKEN in Vercel and connect a Blob store." },
        { status: 503 }
      );
    }
    throw e;
  }
  return NextResponse.json(counters);
}
