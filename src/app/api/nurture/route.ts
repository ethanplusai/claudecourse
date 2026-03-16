import { NextResponse } from "next/server";
import { runStallCheck } from "@/lib/nurture";

// This endpoint runs the stall-check nurture logic.
// Set up as a Vercel Cron job to run daily.
// Add to vercel.json: { "crons": [{ "path": "/api/nurture", "schedule": "0 14 * * *" }] }

export async function GET(req: Request) {
  // Verify cron secret in production
  const authHeader = req.headers.get("authorization");
  if (
    process.env.CRON_SECRET &&
    authHeader !== `Bearer ${process.env.CRON_SECRET}`
  ) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    await runStallCheck();
    return NextResponse.json({ success: true, ran: "stall_check" });
  } catch (error) {
    console.error("Nurture cron error:", error);
    return NextResponse.json({ error: "Nurture check failed" }, { status: 500 });
  }
}
