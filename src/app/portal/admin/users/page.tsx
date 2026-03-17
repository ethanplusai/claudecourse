import { prisma } from "@/lib/db";
import Link from "next/link";
import { timeAgo } from "@/lib/time";
import { UserSearch } from "./user-search";

export default async function UsersPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;

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

  return (
    <div>
      <h1 className="text-2xl font-semibold tracking-tight mb-6">Users</h1>

      <UserSearch initialQuery={q || ""} />

      {users.length === 0 ? (
        <p className="text-text-muted text-sm mt-4">No users found.</p>
      ) : (
        <div className="bg-bg-card border border-border rounded-xl overflow-hidden mt-4">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-left">
                <th className="px-4 py-3 font-medium text-text-muted">Name</th>
                <th className="px-4 py-3 font-medium text-text-muted hidden sm:table-cell">Contact</th>
                <th className="px-4 py-3 font-medium text-text-muted">Lessons</th>
                <th className="px-4 py-3 font-medium text-text-muted hidden sm:table-cell">Messages</th>
                <th className="px-4 py-3 font-medium text-text-muted">Last Activity</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => {
                const lastActivity = user.events[0]?.createdAt || user.createdAt;
                return (
                  <tr key={user.id} className="border-b border-border last:border-0">
                    <td className="px-4 py-3">
                      <Link
                        href={`/portal/admin/users/${user.id}`}
                        className="font-medium text-accent hover:underline"
                      >
                        {user.name}
                      </Link>
                    </td>
                    <td className="px-4 py-3 text-text-muted truncate max-w-[180px] hidden sm:table-cell">
                      {user.email || user.phone || "—"}
                    </td>
                    <td className="px-4 py-3">{user.progress.length}</td>
                    <td className="px-4 py-3 hidden sm:table-cell">{user.sendLogs.length}</td>
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
    </div>
  );
}
