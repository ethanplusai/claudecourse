import { prisma } from "@/lib/db";
import { notFound } from "next/navigation";
import { timeAgo } from "@/lib/time";

export default async function UserDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const [user, totalLessons] = await Promise.all([
    prisma.user.findUnique({
      where: { id },
      include: {
        progress: { where: { status: "completed" } },
        events: { orderBy: { createdAt: "desc" } },
        sendLogs: {
          orderBy: { createdAt: "desc" },
          include: { template: true },
        },
      },
    }),
    prisma.lesson.count(),
  ]);

  if (!user) notFound();

  const completedCount = user.progress.length;
  const progressPct = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0;

  // Merge events and send logs into a single timeline
  type TimelineEntry = {
    id: string;
    type: "event" | "message";
    title: string;
    detail: string;
    time: Date;
    status?: string;
  };

  const timeline: TimelineEntry[] = [
    ...user.events.map((e) => ({
      id: e.id,
      type: "event" as const,
      title: e.type,
      detail: e.metadata ? summarizeMetadata(e.metadata) : "",
      time: e.createdAt,
    })),
    ...user.sendLogs.map((l) => ({
      id: l.id,
      type: "message" as const,
      title: l.template.name,
      detail: `${l.channel} via ${l.trigger}`,
      time: l.createdAt,
      status: l.status,
    })),
  ].sort((a, b) => b.time.getTime() - a.time.getTime());

  return (
    <div>
      {/* User info card */}
      <div className="bg-bg-card border border-border rounded-xl p-5 mb-6">
        <h1 className="text-2xl font-semibold tracking-tight mb-3">
          {user.name}
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
          <div>
            <p className="text-text-muted mb-0.5">Email</p>
            <p className="font-medium">{user.email || "—"}</p>
          </div>
          <div>
            <p className="text-text-muted mb-0.5">Phone</p>
            <p className="font-medium">{user.phone || "—"}</p>
          </div>
          <div>
            <p className="text-text-muted mb-0.5">Contact Method</p>
            <p className="font-medium">{user.contactMethod}</p>
          </div>
          <div>
            <p className="text-text-muted mb-0.5">Role</p>
            <p className="font-medium">{user.role}</p>
          </div>
        </div>
        <p className="text-xs text-text-light mt-3">
          Signed up {timeAgo(user.createdAt)}
        </p>
      </div>

      {/* Progress */}
      <div className="bg-bg-card border border-border rounded-xl p-5 mb-6">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-sm font-semibold">Course Progress</h2>
          <span className="text-sm text-text-muted">
            {completedCount} / {totalLessons} lessons
          </span>
        </div>
        <div className="w-full h-2 bg-bg-elevated rounded-full overflow-hidden">
          <div
            className="h-full bg-accent rounded-full transition-all"
            style={{ width: `${progressPct}%` }}
          />
        </div>
      </div>

      {/* Timeline */}
      <div className="bg-bg-card border border-border rounded-xl p-5">
        <h2 className="text-lg font-semibold mb-4">Activity Timeline</h2>
        {timeline.length === 0 ? (
          <p className="text-text-muted text-sm">No activity yet.</p>
        ) : (
          <div className="space-y-3">
            {timeline.map((entry) => (
              <div key={entry.id} className="flex items-start gap-3">
                <div
                  className={`mt-1 w-2 h-2 rounded-full flex-shrink-0 ${
                    entry.type === "message" ? "bg-accent" : "bg-text-light"
                  }`}
                />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">{entry.title}</span>
                    {entry.status && (
                      <span
                        className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                          entry.status === "sent"
                            ? "bg-green-100 text-green-700"
                            : entry.status === "failed"
                              ? "bg-red-100 text-red-700"
                              : "bg-gray-100 text-gray-500"
                        }`}
                      >
                        {entry.status}
                      </span>
                    )}
                  </div>
                  {entry.detail && (
                    <p className="text-xs text-text-muted mt-0.5">{entry.detail}</p>
                  )}
                </div>
                <span className="text-xs text-text-light whitespace-nowrap">
                  {timeAgo(entry.time)}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function summarizeMetadata(metadata: unknown): string {
  if (!metadata || typeof metadata !== "object") return "";
  const m = metadata as Record<string, unknown>;
  const parts: string[] = [];
  for (const [key, val] of Object.entries(m)) {
    if (val !== null && val !== undefined) {
      parts.push(`${key}: ${val}`);
    }
  }
  return parts.join(", ");
}
