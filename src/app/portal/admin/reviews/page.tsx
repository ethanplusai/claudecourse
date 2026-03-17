import { prisma } from "@/lib/db";

export default async function ReviewsPage() {
  const reviews = await prisma.review.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      user: { select: { name: true, email: true } },
    },
  });

  const avgRating =
    reviews.length > 0
      ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)
      : "—";

  const shareableCount = reviews.filter((r) => r.canShare).length;

  return (
    <div>
      <h1 className="text-xl font-semibold tracking-tight mb-6">Reviews</h1>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3 mb-8">
        <div className="bg-bg-card border border-border rounded-xl p-4">
          <p className="text-xs text-text-muted">Total Reviews</p>
          <p className="text-2xl font-semibold mt-1">{reviews.length}</p>
        </div>
        <div className="bg-bg-card border border-border rounded-xl p-4">
          <p className="text-xs text-text-muted">Average Rating</p>
          <p className="text-2xl font-semibold mt-1">{avgRating}/5</p>
        </div>
        <div className="bg-bg-card border border-border rounded-xl p-4">
          <p className="text-xs text-text-muted">Shareable</p>
          <p className="text-2xl font-semibold mt-1">{shareableCount}</p>
        </div>
      </div>

      {/* Reviews list */}
      {reviews.length === 0 ? (
        <p className="text-sm text-text-muted">No reviews yet.</p>
      ) : (
        <div className="space-y-3">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-bg-card border border-border rounded-xl p-5"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <p className="font-medium text-sm">{review.user.name}</p>
                  <p className="text-xs text-text-light">{review.user.email}</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className={`w-4 h-4 ${
                          star <= review.rating
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
                    ))}
                  </div>
                  {review.canShare && (
                    <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-green-100 text-green-700">
                      shareable
                    </span>
                  )}
                </div>
              </div>
              {review.feedback && (
                <p className="text-sm text-text-muted leading-relaxed">
                  &ldquo;{review.feedback}&rdquo;
                </p>
              )}
              <p className="text-xs text-text-light mt-3">
                {review.createdAt.toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
