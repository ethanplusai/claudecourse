import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth";
import { readFile } from "fs/promises";
import { join } from "path";

export async function GET(request: NextRequest) {
  // Gate behind auth
  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const skill = request.nextUrl.searchParams.get("skill");
  if (!skill) {
    return NextResponse.json({ error: "Missing skill parameter" }, { status: 400 });
  }

  // Sanitize slug — alphanumeric and hyphens only
  const sanitized = skill.replace(/[^a-z0-9-]/g, "");
  if (sanitized !== skill) {
    return NextResponse.json({ error: "Invalid skill slug" }, { status: 400 });
  }

  try {
    const filePath = join(process.cwd(), "public", "skills", `${sanitized}.md`);
    const content = await readFile(filePath, "utf-8");

    return new NextResponse(content, {
      headers: {
        "Content-Type": "text/markdown",
        "Content-Disposition": `attachment; filename="${sanitized}.md"`,
      },
    });
  } catch {
    return NextResponse.json({ error: "Skill not found" }, { status: 404 });
  }
}
