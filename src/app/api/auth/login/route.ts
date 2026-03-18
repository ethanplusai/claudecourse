import { NextResponse } from "next/server";
import { headers } from "next/headers";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/db";
import { getSession } from "@/lib/auth";
import { rateLimit } from "@/lib/rate-limit";

export async function POST(req: Request) {
  try {
    // Rate limit: 5 attempts per minute per IP
    const headersList = await headers();
    const ip = headersList.get("x-forwarded-for") || headersList.get("x-real-ip") || "unknown";
    const { allowed } = rateLimit(ip, 5, 60 * 1000);
    if (!allowed) {
      return NextResponse.json(
        { error: "Too many attempts. Try again in a minute." },
        { status: 429 }
      );
    }

    const { identifier, password } = await req.json();

    if (!identifier || !password) {
      return NextResponse.json({ error: "Missing credentials" }, { status: 400 });
    }

    // Find user by email or phone
    const user = await prisma.user.findFirst({
      where: {
        OR: [{ email: identifier }, { phone: identifier }],
      },
    });

    if (!user) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    const valid = await bcrypt.compare(password, user.passwordHash);
    if (!valid) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    // Track login
    await prisma.behaviorEvent.create({
      data: { userId: user.id, type: "login" },
    });

    // Set session
    const session = await getSession();
    session.userId = user.id;
    session.name = user.name;
    session.role = user.role;
    await session.save();

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
