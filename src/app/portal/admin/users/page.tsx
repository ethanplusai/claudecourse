import { prisma } from "@/lib/db";
import Link from "next/link";
import { timeAgo } from "@/lib/time";
import { UserSearch } from "./user-search";

const TOTAL_LESSONS = 16;

type FilterType = "all" | "completed" | "active" | "stalled" | "new";

function getFilterLabel(filter: FilterType): string {
  const labels: Record<FilterType, string> = {
    all: "All Users",
    completed: "Completed Course",
    active: "Active (last 7 days)",
    stalled: "Stalled (7+ days inactive)",
    new: "New (no lessons done)",
  };
  return labels[filter];
}

export default async function UsersPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; filter?: string; export?: string }>;
}) {
  const params = await searchParams;
  const q = params.q;
  const filter = (params.filter || "all") as FilterType;
  const shouldExport = params.export === "csv";

  const where = q
    ? {
        OR: [
          { name: { contains: q, mode: "insensitive" as const } },
          { email: { contains: q, mode: "insensitive" as const } },
        ],
      }
    : {};

  const users = await prisma.user.findMany({
    where,
    orderBy: { createdAt: "desc" },
    include: {
      progress: { where: { status: "completed" } },
      sendLogs: true,
      events: { orderBy: { createdAt: "desc" }, take: 1 },
    },
  });

  // Apply activity filters
  const now = new Date().getTime();
  const sevenDays = 7 * 24 * 60 * 60 * 1000;

  const filteredUsers = users.filter((user) => {
    const lastActivity = user.events[0]?.createdAt || user.createdAt;
    const daysSince = (now - lastActivity.getTime()) / (1000 * 60 * 60 * 24);
    const lessonsCompleted = user.progress.length;

    switch (filter) {
      case "completed":
        return lessonsCompleted >= TOTAL_LESSONS;
      case "active":
        return daysSince <= 7 && lessonsCompleted < TOTAL_LESSONS;
      case "stalled":
        return daysSince > 7 && lessonsCompleted > 0 && lessonsCompleted < TOTAL_LESSONS;
      case "new":
        return lessonsCompleted === 0;
      default:
        return true;
    }
  });

  // CSV export
  if (shouldExport) {
    const csv = [
      "Name,Email,Lessons Completed,Total Lessons,Completion %,Messages Received,Last Activity,Signed Up",
      ...filteredUsers.map((u) => {
        const lastActivity = u.events[0]?.createdAt || u.createdAt;
        const pct = Math.round((u.progress.length / TOTAL_LESSONS) * 100);
        return `"${u.name}","${u.email || ""}",${u.progress.length},${TOTAL_LESSONS},${pct}%,${u.sendLogs.length},"${lastActivity.toISOString()}","${u.createdAt.toISOString()}"`;
      }),
    ].join("\n");

    return (
      <div>
        <div className="mb-6">
          <Link
            href={`/portal/admin/users?filter=${filter}${q ? `&q=${q}` : ""}`}
            className="text-sm text-accent hover:underline"
          >
            &larr; Back to users
          </Link>
        </div>
        <div className="bg-bg-card border border-border rounded-xl p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-medium text-sm">
              CSV Export — {filteredUsers.length} users ({getFilterLabel(filter)})
            </h2>
            <button
              onClick={undefined}
              className="text-xs text-accent"
            >
              Copy below
            </button>
          </div>
          <textarea
            readOnly
            value={csv}
            rows={Math.min(20, filteredUsers.length + 2)}
            className="w-full bg-bg border border-border rounded-lg px-3 py-2 text-xs font-mono text-text-muted resize-none focus:outline-none"
          />
          <p className="text-xs text-text-light mt-2">
            Copy and paste into a spreadsheet or save as .csv
          </p>
        </div>
      </div>
    );
  }

  const filters: FilterType[] = ["all", "completed", "active", "stalled", "new"];

  // Stats
  const stats = {
    total: users.length,
    completed: users.filter((u) => u.progress.length >= TOTAL_LESSONS).length,
    active: users.filter((u) => {
      const last = u.events[0]?.createdAt || u.createdAt;
      return (now - last.getTime()) <= sevenDays && u.progress.length < TOTAL_LESSONS;
    }).length,
    stalled: users.filter((u) => {
      const last = u.events[0]?.createdAt || u.createdAt;
      return (now - last.getTime()) > sevenDays && u.progress.length > 0 && u.progress.length < TOTAL_LESSONS;
    }).length,
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-semibold tracking-tight">Users</h1>
        <Link
          href={`/portal/admin/users?filter=${filter}${q ? `&q=${q}` : ""}&export=csv`}
          className="text-sm font-medium text-accent hover:underline"
        >
          Export CSV
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-3 mb-6">
        <div className="bg-bg-card border border-border rounded-xl p-3">
          <p className="text-xs text-text-muted">Total</p>
          <p className="text-lg font-semibold">{stats.total}</p>
        </div>
        <div className="bg-bg-card border border-border rounded-xl p-3">
          <p className="text-xs text-text-muted">Completed</p>
          <p className="text-lg font-semibold">{stats.completed}</p>
        </div>
        <div className="bg-bg-card border border-border rounded-xl p-3">
          <p className="text-xs text-text-muted">Active</p>
          <p className="text-lg font-semibold">{stats.active}</p>
        </div>
        <div className="bg-bg-card border border-border rounded-xl p-3">
          <p className="text-xs text-text-muted">Stalled</p>
          <p className="text-lg font-semibold">{stats.stalled}</p>
        </div>
      </div>

      <UserSearch initialQuery={q || ""} />

      {/* Filters */}
      <div className="flex gap-1 mt-4 mb-4 overflow-x-auto">
        {filters.map((f) => (
          <Link
            key={f}
            href={`/portal/admin/users?filter=${f}${q ? `&q=${q}` : ""}`}
            className={`px-3 py-1.5 text-xs font-medium rounded-full whitespace-nowrap transition-colors ${
              filter === f
                ? "bg-accent text-white"
                : "bg-bg-elevated text-text-muted hover:text-text"
            }`}
          >
            {getFilterLabel(f)}
            {f !== "all" && (
              <span className="ml-1 opacity-70">
                ({f === "completed" ? stats.completed : f === "active" ? stats.active : f === "stalled" ? stats.stalled : users.length - stats.completed - stats.active - stats.stalled})
              </span>
            )}
          </Link>
        ))}
      </div>

      {filteredUsers.length === 0 ? (
        <p className="text-text-muted text-sm mt-4">No users match this filter.</p>
      ) : (
        <div className="bg-bg-card border border-border rounded-xl overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-left">
                <th className="px-4 py-3 font-medium text-text-muted">Name</th>
                <th className="px-4 py-3 font-medium text-text-muted hidden sm:table-cell">Email</th>
                <th className="px-4 py-3 font-medium text-text-muted">Progress</th>
                <th className="px-4 py-3 font-medium text-text-muted hidden sm:table-cell">Emails</th>
                <th className="px-4 py-3 font-medium text-text-muted">Last Active</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => {
                const lastActivity = user.events[0]?.createdAt || user.createdAt;
                const pct = Math.round((user.progress.length / TOTAL_LESSONS) * 100);
                return (
                  <tr key={user.id} className="border-b border-border last:border-0">
                    <td className="px-4 py-3">
                      <Link
                        href={`/portal/admin/users/${user.id}`}
                        className="font-medium hover:text-accent transition-colors"
                      >
                        {user.name}
                      </Link>
                    </td>
                    <td className="px-4 py-3 text-text-muted text-xs truncate max-w-[180px] hidden sm:table-cell">
                      {user.email || "—"}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-1.5 bg-bg-elevated rounded-full overflow-hidden">
                          <div
                            className="h-full bg-accent rounded-full"
                            style={{ width: `${pct}%` }}
                          />
                        </div>
                        <span className="text-xs text-text-muted">
                          {user.progress.length}/{TOTAL_LESSONS}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-text-muted hidden sm:table-cell">
                      {user.sendLogs.length}
                    </td>
                    <td className="px-4 py-3 text-text-light text-xs">
                      {timeAgo(lastActivity)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      <p className="text-xs text-text-light mt-3">
        Showing {filteredUsers.length} of {users.length} users
      </p>
    </div>
  );
}
