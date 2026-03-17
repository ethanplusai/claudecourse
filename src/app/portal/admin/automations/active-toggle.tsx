"use client";

import { useTransition } from "react";
import { toggleAutomationActive } from "./actions";

export function ActiveToggle({
  automationId,
  isActive,
}: {
  automationId: string;
  isActive: boolean;
}) {
  const [isPending, startTransition] = useTransition();

  function handleToggle() {
    startTransition(async () => {
      await toggleAutomationActive(automationId, !isActive);
    });
  }

  return (
    <button
      onClick={handleToggle}
      disabled={isPending}
      className={`relative w-10 h-5 rounded-full transition-colors ${
        isActive ? "bg-green-500" : "bg-bg-elevated"
      } ${isPending ? "opacity-50" : ""}`}
    >
      <span
        className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform ${
          isActive ? "translate-x-5" : "translate-x-0"
        }`}
      />
    </button>
  );
}
