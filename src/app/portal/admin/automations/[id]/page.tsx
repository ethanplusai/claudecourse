import { prisma } from "@/lib/db";
import { Prisma } from "@/generated/prisma";
import { redirect, notFound } from "next/navigation";
import Link from "next/link";
import { AutomationEditForm } from "./automation-edit-form";

export default async function AutomationEditPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const automation = await prisma.automation.findUnique({
    where: { id },
    include: {
      steps: {
        orderBy: { order: "asc" },
        include: { template: true },
      },
    },
  });

  if (!automation) notFound();

  async function saveAutomation(formData: FormData) {
    "use server";
    const name = formData.get("name") as string;
    const trigger = formData.get("trigger") as string;
    const priority = parseInt(formData.get("priority") as string) || 0;

    let conditions: Record<string, unknown> | null = null;

    if (trigger === "lesson_complete") {
      const operator = formData.get("cond_operator") as string;
      const value = parseInt(formData.get("cond_value") as string) || 0;
      if (operator && value) {
        conditions = { lessonsCompleted: { operator, value } };
      }
    } else if (trigger === "stall_check") {
      const operator = formData.get("cond_operator") as string;
      const value = parseInt(formData.get("cond_value") as string) || 0;
      if (operator && value) {
        conditions = { daysSinceLastActivity: { operator, value } };
      }
    }

    await prisma.automation.update({
      where: { id },
      data: {
        name,
        trigger,
        priority,
        conditions: conditions
          ? (conditions as unknown as Prisma.InputJsonValue)
          : Prisma.JsonNull,
      },
    });

    redirect("/portal/admin/automations");
  }

  const conditions = automation.conditions as Record<string, { operator?: string; value?: number }> | null;
  let condOperator = "";
  let condValue = "";

  if (automation.trigger === "lesson_complete" && conditions?.lessonsCompleted) {
    condOperator = conditions.lessonsCompleted.operator || "";
    condValue = String(conditions.lessonsCompleted.value || "");
  } else if (automation.trigger === "stall_check" && conditions?.daysSinceLastActivity) {
    condOperator = conditions.daysSinceLastActivity.operator || "";
    condValue = String(conditions.daysSinceLastActivity.value || "");
  }

  return (
    <div>
      <h1 className="text-2xl font-semibold tracking-tight mb-6">
        Edit Automation
      </h1>

      <AutomationEditForm
        automation={{
          name: automation.name,
          trigger: automation.trigger,
          priority: automation.priority,
          condOperator,
          condValue,
        }}
        saveAction={saveAutomation}
      />

      <div className="mt-8">
        <h2 className="text-lg font-semibold mb-4">
          Steps ({automation.steps.length})
        </h2>
        {automation.steps.length === 0 ? (
          <p className="text-text-muted text-sm">No steps configured.</p>
        ) : (
          <div className="space-y-2">
            {automation.steps.map((step, i) => (
              <div
                key={step.id}
                className="flex items-center justify-between bg-bg-card border border-border rounded-xl p-4"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-text-light w-6">
                    #{i + 1}
                  </span>
                  <Link
                    href={`/portal/admin/templates/${step.templateId}`}
                    className="font-medium text-accent hover:underline"
                  >
                    {step.template.name}
                  </Link>
                  <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-bg-elevated text-text-muted">
                    {step.channel}
                  </span>
                </div>
                <span className="text-sm text-text-muted">
                  {step.delayMinutes === 0
                    ? "Immediate"
                    : step.delayMinutes < 60
                      ? `${step.delayMinutes}m delay`
                      : step.delayMinutes < 1440
                        ? `${Math.round(step.delayMinutes / 60)}h delay`
                        : `${Math.round(step.delayMinutes / 1440)}d delay`}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
