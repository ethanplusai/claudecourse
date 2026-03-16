import Link from "next/link";
import { prisma } from "@/lib/db";
import { getCurrentUser } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function PortalPage() {
  const user = await getCurrentUser();
  if (!user) redirect("/login");

  const modules = await prisma.module.findMany({
    orderBy: { order: "asc" },
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

  const totalLessons = modules.reduce((sum, m) => sum + m.lessons.length, 0);
  const completedLessons = modules.reduce(
    (sum, m) =>
      sum +
      m.lessons.filter((l) => l.progress[0]?.status === "completed").length,
    0
  );
  const progressPercent =
    totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;

  function isModuleAccessible(moduleIndex: number): boolean {
    if (moduleIndex === 0) return true;
    const prevModule = modules[moduleIndex - 1];
    return prevModule.lessons.every(
      (l) => l.progress[0]?.status === "completed"
    );
  }

  function getModuleProgress(
    mod: (typeof modules)[0]
  ): { completed: number; total: number } {
    const completed = mod.lessons.filter(
      (l) => l.progress[0]?.status === "completed"
    ).length;
    return { completed, total: mod.lessons.length };
  }

  return (
    <div>
      {/* Welcome */}
      <div className="mb-10">
        <h1 className="text-2xl font-semibold tracking-tight mb-1">
          Welcome back, {user.name}
        </h1>
        <p className="text-text-muted text-sm">
          Pick up where you left off.
        </p>
      </div>

      {/* Progress */}
      <div className="bg-bg-card border border-border rounded-xl p-5 mb-8">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium">Your progress</span>
          <span className="text-sm text-text-muted">
            {completedLessons} of {totalLessons} lessons
          </span>
        </div>
        <div className="w-full h-1.5 bg-bg-elevated rounded-full overflow-hidden">
          <div
            className="h-full bg-accent rounded-full transition-all duration-500"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Consultation CTA */}
      <div className="bg-bg-warm border border-border rounded-xl p-5 mb-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <p className="font-medium text-sm mb-0.5">
              Want this system built for you?
            </p>
            <p className="text-sm text-text-muted">
              We&apos;ll deploy the entire system for your business.
            </p>
          </div>
          <a
            href="https://calendly.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-accent hover:underline flex-shrink-0"
          >
            Book a consultation &rarr;
          </a>
        </div>
      </div>

      {/* Modules */}
      <div>
        <h2 className="text-sm font-medium text-text-muted mb-4 uppercase tracking-wide">
          Modules
        </h2>
        <div className="space-y-2">
          {modules.map((mod, i) => {
            const accessible = isModuleAccessible(i);
            const { completed, total } = getModuleProgress(mod);
            const modPercent =
              total > 0 ? Math.round((completed / total) * 100) : 0;

            if (!accessible) {
              return (
                <div
                  key={mod.id}
                  className="bg-bg-card border border-border rounded-xl p-5 opacity-50"
                >
                  <div className="flex items-center gap-3">
                    <svg
                      className="w-4 h-4 text-text-light flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                      />
                    </svg>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm">{mod.title}</p>
                      <p className="text-xs text-text-light mt-0.5">
                        {total} lessons
                      </p>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={mod.id}
                href={`/portal/module/${mod.id}`}
                className="block bg-bg-card border border-border rounded-xl p-5 hover:border-border-hover transition-colors group"
              >
                <div className="flex items-center justify-between mb-1">
                  <p className="font-medium text-sm group-hover:text-accent transition-colors">
                    {mod.title}
                  </p>
                  <svg
                    className="w-4 h-4 text-text-light group-hover:text-accent transition-colors flex-shrink-0"
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
                </div>
                <p className="text-xs text-text-muted mb-3">
                  {mod.description}
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex-1 h-1 bg-bg-elevated rounded-full overflow-hidden">
                    <div
                      className="h-full bg-accent rounded-full"
                      style={{ width: `${modPercent}%` }}
                    />
                  </div>
                  <span className="text-xs text-text-light flex-shrink-0">
                    {completed}/{total}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
