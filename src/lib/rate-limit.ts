// Simple in-memory rate limiter
// Limits requests per IP address per time window

const requests = new Map<string, { count: number; resetAt: number }>();

export function rateLimit(
  ip: string,
  maxRequests: number = 5,
  windowMs: number = 60 * 1000 // 1 minute
): { allowed: boolean; remaining: number } {
  const now = Date.now();
  const record = requests.get(ip);

  // Clean up expired entries periodically
  if (Math.random() < 0.01) {
    for (const [key, val] of requests) {
      if (val.resetAt < now) requests.delete(key);
    }
  }

  if (!record || record.resetAt < now) {
    requests.set(ip, { count: 1, resetAt: now + windowMs });
    return { allowed: true, remaining: maxRequests - 1 };
  }

  record.count++;

  if (record.count > maxRequests) {
    return { allowed: false, remaining: 0 };
  }

  return { allowed: true, remaining: maxRequests - record.count };
}
