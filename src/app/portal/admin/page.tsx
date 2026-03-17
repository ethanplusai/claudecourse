import { prisma } from "@/lib/db";
import { timeAgo } from "@/lib/time";

export default async function AdminDashboard() {
  const now = new Date();
  const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  const [
    totalUsers,
    totalMessages,
    messagesToday,
    activeAutomations,
    totalLessons,
    completedProgress,
    recentLogs,
  ] = await Promise.all([
    prisma.user.count(),
    prisma.sendLog.count(),
    prisma.sendLog.count({ where: { createdAt: { gte: todayStart } } }),
    prisma.automation.count({ where: { isActive: true } }),
    prisma.lesson.count(),
    prisma.lessonProgress.count({ where: { status: "completed" } }),
    prisma.sendLog.findMany({
      take: 15,
      orderBy: { createdAt: "desc" },
      include: { user: true, template: true },
    }),
  ]);

  const totalPossible = totalUsers * totalLessons;
  const completionRate =
    totalPossible > 0 ? Math.round((completedProgress / totalPossible) * 100) : 0;

  const stats = [
    { label: "Total Users", value: totalUsers },
    { label: "Messages Sent", value: totalMessages },
    { label: "Messages Today", value: messagesToday },
    { label: "Active Automations", value: activeAutomations },
    { label: "Completion Rate", value: `${completionRate}%` },
  ];

  return (
    <div>
      <h1 className="text-2xl font-semibold tracking-tight mb-6">Dashboard</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-bg-card border border-border rounded-xl p-5"
          >
            <p className="text-sm text-text-muted mb-1">{stat.label}</p>
            <p className="text-2xl font-semibold">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="bg-bg-card border border-border rounded-xl p-5">
        <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
        {recentLogs.length === 0 ? (
          <p className="text-text-muted text-sm">No activity yet.</p>
        ) : (
          <div className="space-y-3">
            {recentLogs.map((log) => (
              <div
                key={log.id}
                className="flex items-center justify-between text-sm"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <StatusBadge status={log.status} />
                  <span className="font-medium truncate">{log.user.name}</span>
                  <span className="text-text-muted truncate">
                    {log.template.name}
                  </span>
                  <ChannelBadge channel={log.channel} />
                </div>
                <span className="text-text-light text-xs whitespace-nowrap ml-3">
                  {timeAgo(log.createdAt)}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const colors: Record<string, string> = {
    sent: "bg-green-100 text-green-700",
    failed: "bg-red-100 text-red-700",
    skipped: "bg-gray-100 text-gray-500",
  };
  return (
    <span
      className={`text-xs font-medium px-2 py-0.5 rounded-full ${colors[status] || colors.skipped}`}
    >
      {status}
    </span>
  );
}

function ChannelBadge({ channel }: { channel: string }) {
  return (
    <span
      className={`text-xs font-medium px-2 py-0.5 rounded-full ${
        channel === "email"
          ? "bg-accent-dim text-accent"
          : "bg-bg-elevated text-text-muted"
      }`}
    >
      {channel}
    </span>
  );
}
