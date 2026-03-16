import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/db";
import { getSession } from "@/lib/auth";

export async function POST(req: Request) {
  try {
    const { name, email, phone, password, contactMethod } = await req.json();

    if (!name || !password || !contactMethod) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    if (contactMethod === "email" && !email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    if (contactMethod === "sms" && !phone) {
      return NextResponse.json({ error: "Phone number is required" }, { status: 400 });
    }

    // Check if user already exists
    if (email) {
      const existing = await prisma.user.findUnique({ where: { email } });
      if (existing) {
        return NextResponse.json({ error: "Account already exists with this email" }, { status: 409 });
      }
    }

    if (phone) {
      const existing = await prisma.user.findUnique({ where: { phone } });
      if (existing) {
        return NextResponse.json({ error: "Account already exists with this phone number" }, { status: 409 });
      }
    }

    const passwordHash = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({
      data: {
        name,
        email: email || null,
        phone: phone || null,
        passwordHash,
        contactMethod,
      },
    });

    // Create behavior event
    await prisma.behaviorEvent.create({
      data: { userId: user.id, type: "signup", metadata: { contactMethod } },
    });

    // Send welcome message (fire and forget)
    import("@/lib/nurture").then(({ triggerWelcome }) => {
      triggerWelcome(user.id).catch(console.error);
    });

    // Set session
    const session = await getSession();
    session.userId = user.id;
    session.name = user.name;
    session.role = user.role;
    await session.save();

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Signup error:", error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
