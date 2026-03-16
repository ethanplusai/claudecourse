"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/tracking";

export function LessonTracker({ lessonId }: { lessonId: string }) {
  useEffect(() => {
    trackEvent("lesson_view", { lessonId });

    const startTime = Date.now();

    return () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000);
      trackEvent("lesson_time", { lessonId, timeSpent });
    };
  }, [lessonId]);

  return null;
}
