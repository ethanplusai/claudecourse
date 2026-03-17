import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { getCurrentUser } from "@/lib/auth";

export async function POST(req: Request) {
  try {
    const user = await getCurrentUser();
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { rating, feedback, canShare } = await req.json();

    if (!rating || rating < 1 || rating > 5) {
      return NextResponse.json({ error: "Invalid rating" }, { status: 400 });
    }

    await prisma.review.upsert({
      where: { userId: user.userId },
      create: {
        userId: user.userId,
        rating,
        feedback: feedback || "",
        canShare: canShare || false,
      },
      update: {
        rating,
        feedback: feedback || "",
        canShare: canShare || false,
      },
    });

    // Track the event
    await prisma.behaviorEvent.create({
      data: {
        userId: user.userId,
        type: "review_submitted",
        metadata: { rating },
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Review error:", error);
    return NextResponse.json({ error: "Failed to save review" }, { status: 500 });
  }
}
