import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { getCurrentUser } from "@/lib/auth";

export async function POST(req: Request) {
  try {
    const user = await getCurrentUser();
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { lessonId, action } = await req.json();

    if (action === "start") {
      await prisma.lessonProgress.upsert({
        where: { userId_lessonId: { userId: user.userId, lessonId } },
        create: {
          userId: user.userId,
          lessonId,
          status: "in_progress",
          startedAt: new Date(),
        },
        update: {
          status: "in_progress",
          startedAt: new Date(),
        },
      });
    }

    if (action === "complete") {
      // Verify the lesson exists
      const lesson = await prisma.lesson.findUnique({ where: { id: lessonId } });
      if (!lesson) {
        return NextResponse.json({ error: "Lesson not found" }, { status: 404 });
      }

      // Verify previous lesson is completed (gating)
      if (lesson.order > 1) {
        const prevLesson = await prisma.lesson.findUnique({
          where: { order: lesson.order - 1 },
        });
        if (prevLesson) {
          const prevProgress = await prisma.lessonProgress.findUnique({
            where: {
              userId_lessonId: { userId: user.userId, lessonId: prevLesson.id },
            },
          });
          if (prevProgress?.status !== "completed") {
            return NextResponse.json(
              { error: "Complete the previous lesson first" },
              { status: 403 }
            );
          }
        }
      }

      await prisma.lessonProgress.upsert({
        where: { userId_lessonId: { userId: user.userId, lessonId } },
        create: {
          userId: user.userId,
          lessonId,
          status: "completed",
          startedAt: new Date(),
          completedAt: new Date(),
        },
        update: {
          status: "completed",
          completedAt: new Date(),
        },
      });

      // Track event
      await prisma.behaviorEvent.create({
        data: {
          userId: user.userId,
          type: "lesson_complete",
          metadata: { lessonId, lessonOrder: lesson.order },
        },
      });

      // Trigger nurture message (fire and forget)
      import("@/lib/nurture").then(({ triggerLessonComplete }) => {
        triggerLessonComplete(user.userId).catch(console.error);
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Progress error:", error);
    return NextResponse.json({ error: "Failed to update progress" }, { status: 500 });
  }
}
