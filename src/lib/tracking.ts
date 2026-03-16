export async function trackEvent(
  type: string,
  metadata?: Record<string, unknown>
) {
  try {
    await fetch("/api/events", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type, metadata }),
    });
  } catch {
    // Silent fail — tracking should never break the UX
  }
}
