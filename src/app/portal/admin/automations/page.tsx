import { prisma } from "@/lib/db";
import Link from "next/link";
import { ActiveToggle } from "./active-toggle";

function summarizeConditions(conditions: unknown): string {
  if (!conditions || typeof conditions !== "object") return "—";
  const c = conditions as Record<string, unknown>;
  if (Object.keys(c).length === 0) return "—";

  const parts: string[] = [];

  for (const [key, val] of Object.entries(c)) {
    const label = key === "lessonsCompleted" ? "lessons" : key === "daysSinceLastActivity" ? "inactive" : key;

    if (typeof val === "object" && val !== null) {
      const cond = val as Record<string, number>;
      const ops: string[] = [];
      if (cond.eq !== undefined) ops.push(`= ${cond.eq}`);
      if (cond.gte !== undefined) ops.push(`≥ ${cond.gte}`);
      if (cond.gt !== undefined) ops.push(`> ${cond.gt}`);
      if (cond.lt !== undefined) ops.push(`< ${cond.lt}`);
      if (cond.lte !== undefined) ops.push(`≤ ${cond.lte}`);
      parts.push(`${label} ${ops.join(" & ")}`);
    } else {
      parts.push(`${label} = ${val}`);
    }
  }

  return parts.join(", ");
}

const triggerColors: Record<string, string> = {
  signup: "bg-blue-100 text-blue-700",
  lesson_complete: "bg-green-100 text-green-700",
  stall_check: "bg-amber-100 text-amber-700",
};

export default async function AutomationsPage() {
  const automations = await prisma.automation.findMany({
    orderBy: { priority: "desc" },
    include: { _count: { select: { steps: true } } },
  });

  return (
    <div>
      <h1 className="text-2xl font-semibold tracking-tight mb-6">
        Automations
      </h1>

      {automations.length === 0 ? (
        <p className="text-text-muted text-sm">No automations yet.</p>
      ) : (
        <div className="space-y-2">
          {automations.map((a) => (
            <div
              key={a.id}
              className="flex items-center justify-between bg-bg-card border border-border rounded-xl p-4"
            >
              <Link
                href={`/portal/admin/automations/${a.id}`}
                className="flex items-center gap-3 min-w-0 flex-1 hover:opacity-80 transition-opacity"
              >
                <span className="font-medium truncate">{a.name}</span>
                <span
                  className={`text-xs font-medium px-2 py-0.5 rounded-full ${triggerColors[a.trigger] || "bg-bg-elevated text-text-muted"}`}
                >
                  {a.trigger}
                </span>
                <span className="text-xs text-text-muted hidden sm:inline">
                  {summarizeConditions(a.conditions)}
                </span>
                <span className="text-xs text-text-light">
                  {a._count.steps} step{a._count.steps !== 1 ? "s" : ""}
                </span>
              </Link>
              <ActiveToggle automationId={a.id} isActive={a.isActive} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
