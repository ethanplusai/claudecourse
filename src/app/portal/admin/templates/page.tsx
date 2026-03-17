import { prisma } from "@/lib/db";
import Link from "next/link";
import { timeAgo } from "@/lib/time";

export default async function TemplatesPage({
  searchParams,
}: {
  searchParams: Promise<{ channel?: string }>;
}) {
  const { channel } = await searchParams;

  const where = channel && channel !== "all" ? { channel } : {};

  const templates = await prisma.nurtureTemplate.findMany({
    where,
    orderBy: { updatedAt: "desc" },
  });

  const filters = ["all", "email", "sms"];

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold tracking-tight">Templates</h1>
        <Link
          href="/portal/admin/templates/new"
          className="px-4 py-2 text-sm font-medium bg-accent text-white rounded-lg hover:bg-accent-hover transition-colors"
        >
          New Template
        </Link>
      </div>

      <div className="flex gap-1 mb-6">
        {filters.map((f) => (
          <Link
            key={f}
            href={f === "all" ? "/portal/admin/templates" : `/portal/admin/templates?channel=${f}`}
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

      {templates.length === 0 ? (
        <p className="text-text-muted text-sm">No templates found.</p>
      ) : (
        <div className="space-y-2">
          {templates.map((t) => (
            <Link
              key={t.id}
              href={`/portal/admin/templates/${t.id}`}
              className="flex items-center justify-between bg-bg-card border border-border rounded-xl p-4 hover:border-border-hover transition-colors"
            >
              <div className="flex items-center gap-3 min-w-0">
                <span className="font-medium truncate">{t.name}</span>
                <span
                  className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                    t.channel === "email"
                      ? "bg-accent-dim text-accent"
                      : "bg-bg-elevated text-text-muted"
                  }`}
                >
                  {t.channel}
                </span>
              </div>
              <div className="flex items-center gap-4 text-sm text-text-muted whitespace-nowrap ml-3">
                <span className="hidden sm:inline font-mono text-xs">{t.slug}</span>
                <span className="text-xs">{timeAgo(t.updatedAt)}</span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
