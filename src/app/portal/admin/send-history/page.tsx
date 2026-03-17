import { prisma } from "@/lib/db";
import Link from "next/link";
import { timeAgo } from "@/lib/time";

const PAGE_SIZE = 20;

export default async function SendHistoryPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; channel?: string }>;
}) {
  const { page: pageStr, channel } = await searchParams;
  const page = Math.max(1, parseInt(pageStr || "1"));

  const where = channel && channel !== "all" ? { channel } : {};

  const [logs, total] = await Promise.all([
    prisma.sendLog.findMany({
      where,
      orderBy: { createdAt: "desc" },
      skip: (page - 1) * PAGE_SIZE,
      take: PAGE_SIZE,
      include: { user: true, template: true },
    }),
    prisma.sendLog.count({ where }),
  ]);

  const totalPages = Math.ceil(total / PAGE_SIZE);
  const filters = ["all", "email", "sms"];

  function buildUrl(params: Record<string, string>) {
    const sp = new URLSearchParams();
    if (params.channel && params.channel !== "all") sp.set("channel", params.channel);
    if (params.page && params.page !== "1") sp.set("page", params.page);
    const qs = sp.toString();
    return `/portal/admin/send-history${qs ? `?${qs}` : ""}`;
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold tracking-tight">Send History</h1>
        <span className="text-sm text-text-muted">{total} total</span>
      </div>

      <div className="flex gap-1 mb-6">
        {filters.map((f) => (
          <Link
            key={f}
            href={buildUrl({ channel: f, page: "1" })}
            className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-colors ${
              (channel || "all") === f
                ? "bg-accent text-white"
                : "text-text-muted hover:text-text hover:bg-bg-elevated"
            }`}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </Link>
        ))}
      </div>

      {logs.length === 0 ? (
        <p className="text-text-muted text-sm">No send history found.</p>
      ) : (
        <div className="bg-bg-card border border-border rounded-xl overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-left">
                <th className="px-4 py-3 font-medium text-text-muted">Time</th>
                <th className="px-4 py-3 font-medium text-text-muted">User</th>
                <th className="px-4 py-3 font-medium text-text-muted hidden sm:table-cell">Template</th>
                <th className="px-4 py-3 font-medium text-text-muted">Channel</th>
                <th className="px-4 py-3 font-medium text-text-muted hidden sm:table-cell">Trigger</th>
                <th className="px-4 py-3 font-medium text-text-muted">Status</th>
              </tr>
            </thead>
            <tbody>
              {logs.map((log) => (
                <tr key={log.id} className="border-b border-border last:border-0">
                  <td className="px-4 py-3 text-text-light text-xs whitespace-nowrap">
                    {timeAgo(log.createdAt)}
                  </td>
                  <td className="px-4 py-3 font-medium truncate max-w-[120px]">
                    {log.user.name}
                  </td>
                  <td className="px-4 py-3 text-text-muted truncate max-w-[150px] hidden sm:table-cell">
                    {log.template.name}
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                        log.channel === "email"
                          ? "bg-accent-dim text-accent"
                          : "bg-bg-elevated text-text-muted"
                      }`}
                    >
                      {log.channel}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-text-muted text-xs hidden sm:table-cell">
                    {log.trigger}
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                        log.status === "sent"
                          ? "bg-green-100 text-green-700"
                          : log.status === "failed"
                            ? "bg-red-100 text-red-700"
                            : "bg-gray-100 text-gray-500"
                      }`}
                    >
                      {log.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {totalPages > 1 && (
        <div className="flex items-center justify-between mt-6">
          {page > 1 ? (
            <Link
              href={buildUrl({ channel: channel || "all", page: String(page - 1) })}
              className="px-4 py-2 text-sm font-medium bg-bg-card border border-border rounded-lg hover:bg-bg-elevated transition-colors"
            >
              Previous
            </Link>
          ) : (
            <div />
          )}
          <span className="text-sm text-text-muted">
            Page {page} of {totalPages}
          </span>
          {page < totalPages ? (
            <Link
              href={buildUrl({ channel: channel || "all", page: String(page + 1) })}
              className="px-4 py-2 text-sm font-medium bg-bg-card border border-border rounded-lg hover:bg-bg-elevated transition-colors"
            >
              Next
            </Link>
          ) : (
            <div />
          )}
        </div>
      )}
    </div>
  );
}
