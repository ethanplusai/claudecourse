import Link from "next/link";
import { prisma } from "@/lib/db";
import { getCurrentUser } from "@/lib/auth";
import { redirect, notFound } from "next/navigation";

export default async function ModulePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const user = await getCurrentUser();
  if (!user) redirect("/login");

  const { id } = await params;

  const modResult = await prisma.module.findUnique({
    where: { id },
    include: {
      lessons: {
        orderBy: { order: "asc" },
        include: {
          progress: {
            where: { userId: user.userId },
          },
        },
      },
    },
  });

  if (!modResult) return notFound();
  const mod = modResult;

  const completed = mod.lessons.filter(
    (l) => l.progress[0]?.status === "completed"
  ).length;
  const percent = Math.round((completed / mod.lessons.length) * 100);

  return (
    <div>
      {/* Back */}
      <Link
        href="/portal"
        className="inline-flex items-center gap-1 text-sm text-text-muted hover:text-text transition-colors mb-8"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Back to Portal
      </Link>

      {/* Module header */}
      <div className="mb-10">
        <p className="text-sm font-medium text-text-muted uppercase tracking-wide mb-3">
          Module {mod.order}
        </p>
        <h1 className="text-2xl font-semibold tracking-tight mb-3">{mod.title}</h1>
        <p className="text-text-muted">{mod.description}</p>

        <div className="flex items-center gap-4 mt-4">
          <span className="text-sm text-text-muted">
            {mod.lessons.length} lessons
          </span>
          <span className="text-sm text-accent">{percent}% complete</span>
        </div>
        <div className="w-full h-1.5 bg-bg-elevated rounded-full overflow-hidden mt-3">
          <div
            className="h-full bg-accent rounded-full transition-all duration-500"
            style={{ width: `${percent}%` }}
          />
        </div>
      </div>

      {/* Lessons — all accessible */}
      <div className="space-y-3">
        {mod.lessons.map((lesson, i) => {
          const isCompleted = lesson.progress[0]?.status === "completed";
          const lessonNum = i + 1;

          return (
            <Link
              key={lesson.id}
              href={`/portal/lesson/${lesson.id}`}
              className="flex items-center gap-4 bg-bg-card border border-border rounded-xl px-6 py-5 hover:border-border-hover transition-colors"
            >
              <span
                className={`flex-shrink-0 w-9 h-9 rounded-lg text-sm font-bold flex items-center justify-center ${
                  isCompleted
                    ? "bg-accent/20 text-accent"
                    : "bg-bg-elevated text-text-muted"
                }`}
              >
                {isCompleted ? (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                ) : (
                  lessonNum
                )}
              </span>
              <div className="flex-1 min-w-0">
                <p className="font-medium">{lesson.title}</p>
                <p className="text-sm text-text-muted mt-0.5">
                  {lesson.subtitle}
                </p>
              </div>
              <span className="text-xs text-text-muted flex-shrink-0">
                {lesson.readTime}
              </span>
              <svg
                className="w-4 h-4 text-text-muted flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
