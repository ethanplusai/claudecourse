"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function MarkCompleteButton({ lessonId }: { lessonId: string }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleComplete() {
    setLoading(true);
    await fetch("/api/progress", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ lessonId, action: "complete" }),
    });
    router.refresh();
  }

  return (
    <div className="text-center">
      <button
        onClick={handleComplete}
        disabled={loading}
        className="bg-accent text-white font-medium text-sm px-6 py-2.5 rounded-full hover:bg-accent-hover transition-colors disabled:opacity-50"
      >
        {loading ? "Saving..." : "Mark as Complete"}
      </button>
      <p className="text-xs text-text-muted mt-2">
        Complete this lesson to continue
      </p>
    </div>
  );
}
