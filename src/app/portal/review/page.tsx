import { prisma } from "@/lib/db";
import { getCurrentUser } from "@/lib/auth";
import { redirect } from "next/navigation";
import { ReviewForm } from "./review-form";

export default async function ReviewPage() {
  const user = await getCurrentUser();
  if (!user) redirect("/login");

  // Check if they've completed the course
  const totalLessons = await prisma.lesson.count();
  const completedLessons = await prisma.lessonProgress.count({
    where: { userId: user.userId, status: "completed" },
  });

  if (completedLessons < totalLessons) {
    redirect("/portal");
  }

  // Check if already reviewed
  const existingReview = await prisma.review.findUnique({
    where: { userId: user.userId },
  });

  return (
    <div className="max-w-lg mx-auto py-16">
      <div className="text-center mb-10">
        <h1 className="text-2xl font-semibold tracking-tight mb-2">
          You finished the course.
        </h1>
        <p className="text-text-muted">
          That puts you ahead of 95% of people who sign up for things like
          this.
        </p>
      </div>

      {existingReview ? (
        <div className="bg-bg-card border border-border rounded-xl p-6 text-center">
          <p className="font-medium mb-1">Thanks for your feedback.</p>
          <p className="text-sm text-text-muted">
            You rated the course {existingReview.rating}/5.
          </p>
        </div>
      ) : (
        <div className="bg-bg-card border border-border rounded-xl p-6">
          <h2 className="font-medium mb-1">How was the experience?</h2>
          <p className="text-sm text-text-muted mb-6">
            Your honest feedback helps us improve — and helps other people
            decide if this is worth their time.
          </p>
          <ReviewForm />
        </div>
      )}
    </div>
  );
}
