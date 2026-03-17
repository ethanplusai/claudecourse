"use client";

import { useState } from "react";

interface AutomationEditFormProps {
  automation: {
    name: string;
    trigger: string;
    priority: number;
    condOperator: string;
    condValue: string;
  };
  saveAction: (formData: FormData) => Promise<void>;
}

export function AutomationEditForm({ automation, saveAction }: AutomationEditFormProps) {
  const [trigger, setTrigger] = useState(automation.trigger);

  const conditionLabel =
    trigger === "lesson_complete"
      ? "Lessons Completed"
      : trigger === "stall_check"
        ? "Days Since Last Activity"
        : null;

  return (
    <form action={saveAction} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            name="name"
            defaultValue={automation.name}
            required
            className="w-full px-3 py-2 text-sm bg-bg-card border border-border rounded-lg focus:outline-none focus:border-accent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Priority</label>
          <input
            name="priority"
            type="number"
            defaultValue={automation.priority}
            className="w-full px-3 py-2 text-sm bg-bg-card border border-border rounded-lg focus:outline-none focus:border-accent"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Trigger</label>
        <select
          name="trigger"
          value={trigger}
          onChange={(e) => setTrigger(e.target.value)}
          className="w-full px-3 py-2 text-sm bg-bg-card border border-border rounded-lg focus:outline-none focus:border-accent"
        >
          <option value="signup">Signup</option>
          <option value="lesson_complete">Lesson Complete</option>
          <option value="stall_check">Stall Check</option>
        </select>
      </div>

      {conditionLabel && (
        <div className="bg-bg-card border border-border rounded-xl p-4">
          <p className="text-sm font-medium mb-3">Condition: {conditionLabel}</p>
          <div className="flex items-center gap-3">
            <select
              name="cond_operator"
              defaultValue={automation.condOperator}
              className="px-3 py-2 text-sm bg-bg border border-border rounded-lg focus:outline-none focus:border-accent"
            >
              <option value="eq">equals</option>
              <option value="gte">greater or equal</option>
              <option value="lt">less than</option>
            </select>
            <input
              name="cond_value"
              type="number"
              defaultValue={automation.condValue}
              placeholder="Value"
              className="w-24 px-3 py-2 text-sm bg-bg border border-border rounded-lg focus:outline-none focus:border-accent"
            />
          </div>
        </div>
      )}

      <button
        type="submit"
        className="px-5 py-2 text-sm font-medium bg-accent text-white rounded-lg hover:bg-accent-hover transition-colors"
      >
        Save Automation
      </button>
    </form>
  );
}
