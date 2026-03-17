"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function ReviewForm() {
  const router = useRouter();
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [canShare, setCanShare] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (rating === 0) return;
    setLoading(true);

    await fetch("/api/review", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ rating, feedback, canShare }),
    });

    setSubmitted(true);
    setTimeout(() => router.push("/portal"), 2000);
  }

  if (submitted) {
    return (
      <div className="text-center py-6">
        <p className="font-medium text-accent">Thanks for your feedback.</p>
        <p className="text-sm text-text-muted mt-1">
          Redirecting you back to the portal...
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Star rating */}
      <div>
        <label className="block text-sm font-medium text-text-muted mb-2">
          Rating
        </label>
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => setRating(star)}
              onMouseEnter={() => setHoverRating(star)}
              onMouseLeave={() => setHoverRating(0)}
              className="p-1 transition-transform hover:scale-110"
            >
              <svg
                className={`w-8 h-8 transition-colors ${
                  star <= (hoverRating || rating)
                    ? "text-accent fill-accent"
                    : "text-border fill-none"
                }`}
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                />
              </svg>
            </button>
          ))}
        </div>
      </div>

      {/* Feedback text */}
      <div>
        <label className="block text-sm font-medium text-text-muted mb-1.5">
          What did you think?
        </label>
        <textarea
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="What worked, what didn't, what would you change..."
          rows={4}
          className="w-full bg-bg border border-border rounded-lg px-4 py-3 text-sm text-text placeholder:text-text-light focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all resize-none"
        />
      </div>

      {/* Permission to share */}
      <label className="flex items-start gap-3 cursor-pointer">
        <input
          type="checkbox"
          checked={canShare}
          onChange={(e) => setCanShare(e.target.checked)}
          className="mt-0.5 w-4 h-4 rounded border-border text-accent focus:ring-accent/20"
        />
        <span className="text-sm text-text-muted">
          You can use my feedback as a testimonial
        </span>
      </label>

      <button
        type="submit"
        disabled={loading || rating === 0}
        className="w-full bg-accent text-white font-medium py-2.5 rounded-lg hover:bg-accent-hover transition-colors disabled:opacity-50 text-sm"
      >
        {loading ? "Submitting..." : "Submit Feedback"}
      </button>
    </form>
  );
}
