---
name: analytics-setup
description: Sets up analytics, event tracking, and conversion monitoring. Use this skill when adding analytics to a web application. Covers custom event tracking, conversion funnels, and privacy-respecting approaches.
---

# Analytics & Tracking Setup

You set up analytics that tell you what's working and what's not. Privacy-respecting by default. No vanity metrics.

## What to Track

### Essential Events
- `signup` — user creates account
- `login` — user signs in
- `lesson_start` — user begins a lesson
- `lesson_complete` — user finishes a lesson
- `skill_download` — user downloads a skill file
- `page_view` — which pages are visited

### Conversion Funnel
1. Landing page view
2. Signup page view
3. Signup complete
4. First lesson started
5. First lesson completed
6. 50% course complete
7. Course complete

### Engagement Metrics
- Time on page (per lesson)
- Lessons per session
- Days between sessions
- Drop-off point (which lesson do people quit?)
- Completion rate

## Custom Event Tracking (In-App)

Use the existing BehaviorEvent model:

```typescript
// lib/tracking.ts
import { prisma } from "./db";

export async function trackEvent(
  userId: string,
  type: string,
  metadata?: Record<string, unknown>
) {
  await prisma.behaviorEvent.create({
    data: { userId, type, metadata: metadata ?? undefined },
  });
}
```

Track events at key moments:
```typescript
// In a Server Action or API route
await trackEvent(userId, "lesson_complete", {
  lessonId,
  lessonOrder: lesson.order,
  timeSpent: seconds,
});
```

## Analytics Dashboard Queries

### Completion Rate
```sql
SELECT
  COUNT(DISTINCT CASE WHEN status = 'completed' THEN "userId" END)::float /
  NULLIF(COUNT(DISTINCT "userId"), 0) * 100 as completion_rate
FROM "LessonProgress"
WHERE "lessonId" = 'xxx';
```

### Drop-off Analysis
```typescript
const dropoff = await prisma.lessonProgress.groupBy({
  by: ["lessonId"],
  _count: { userId: true },
  where: { status: "completed" },
  orderBy: { _count: { userId: "desc" } },
});
```

### Daily Active Users
```typescript
const dau = await prisma.behaviorEvent.findMany({
  where: {
    createdAt: { gte: new Date(Date.now() - 24 * 60 * 60 * 1000) },
  },
  distinct: ["userId"],
  select: { userId: true },
});
```

## Privacy Best Practices

- Don't track personal data you don't need
- No third-party trackers unless necessary
- Store analytics in your own database
- Respect Do Not Track headers
- Be transparent: tell users what you track
- No fingerprinting

## External Analytics (Optional)

### Plausible (Privacy-Focused)
- Lightweight, no cookies, GDPR compliant
- Script tag: `<script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.js"></script>`

### PostHog (Self-Hostable)
- Feature flags, session replay, funnels
- More complex but more powerful
- Can self-host for full control

## Dashboard Display

When building an admin analytics view, show:
- Total users (with trend)
- Active users (last 7 days)
- Completion rate by lesson (bar chart)
- Signup → completion funnel
- Most popular lessons
- Average time per lesson
- Stall rate (users inactive > 3 days)
