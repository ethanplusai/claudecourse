import { prisma } from "./db";
import { getSetting } from "./settings";

// ============================================
// TYPES
// ============================================

interface UserContext {
  name: string;
  contactMethod: string;
  email?: string | null;
  phone?: string | null;
  lessonsCompleted: number;
  totalLessons: number;
  currentLessonTitle?: string;
  nextLessonTitle?: string;
  currentModuleTitle?: string;
  daysSinceSignup: number;
  daysSinceLastActivity: number;
}

// ============================================
// TEMPLATE RESOLVER
// ============================================

function getFirstName(name: string): string {
  return name.split(" ")[0];
}

async function resolveTemplate(
  template: { subject?: string | null; body: string },
  ctx: UserContext
): Promise<{ subject?: string; body: string }> {
  const siteUrl = (await getSetting("NEXT_PUBLIC_SITE_URL")) || "https://clients.wtf";
  const bookingUrl = (await getSetting("BOOKING_URL")) || "https://calendly.com";

  const vars: Record<string, string> = {
    firstName: getFirstName(ctx.name),
    name: ctx.name,
    lessonsCompleted: String(ctx.lessonsCompleted),
    totalLessons: String(ctx.totalLessons),
    lessonsRemaining: String(ctx.totalLessons - ctx.lessonsCompleted),
    nextLessonTitle: ctx.nextLessonTitle || "the next lesson",
    currentLessonTitle: ctx.currentLessonTitle || "",
    currentModuleTitle: ctx.currentModuleTitle || "",
    daysSinceSignup: String(ctx.daysSinceSignup),
    daysSinceLastActivity: String(ctx.daysSinceLastActivity),
    portalUrl: `${siteUrl}/portal`,
    bookingUrl,
  };

  let body = template.body;
  let subject = template.subject || "";

  for (const [key, value] of Object.entries(vars)) {
    body = body.replaceAll(`{{${key}}}`, value);
    subject = subject.replaceAll(`{{${key}}}`, value);
  }

  return { subject: subject || undefined, body };
}

// ============================================
// CONDITION EVALUATOR
// ============================================

function evaluateConditions(
  conditions: Record<string, unknown>,
  ctx: UserContext
): boolean {
  for (const [key, value] of Object.entries(conditions)) {
    const ctxValue = (ctx as unknown as Record<string, unknown>)[key];

    if (typeof value === "object" && value !== null) {
      const cond = value as Record<string, number>;
      if (cond.eq !== undefined && ctxValue !== cond.eq) return false;
      if (cond.gte !== undefined && (ctxValue as number) < cond.gte)
        return false;
      if (cond.lt !== undefined && (ctxValue as number) >= cond.lt)
        return false;
      if (cond.lte !== undefined && (ctxValue as number) > cond.lte)
        return false;
      if (cond.gt !== undefined && (ctxValue as number) <= cond.gt)
        return false;
    } else {
      if (ctxValue !== value) return false;
    }
  }
  return true;
}

// ============================================
// SENDING
// ============================================

async function sendEmail(to: string, subject: string, body: string) {
  const apiKey = await getSetting("RESEND_API_KEY");
  if (!apiKey) {
    console.log(`[EMAIL PREVIEW] To: ${to} | Subject: ${subject}`);
    console.log(body.substring(0, 200) + "...\n");
    return;
  }

  const { Resend } = await import("resend");
  const resend = new Resend(apiKey);
  const from = (await getSetting("EMAIL_FROM")) || "The Client Engine <hello@clients.wtf>";

  await resend.emails.send({ from, to, subject, text: body });
}

async function sendSMS(to: string, body: string) {
  const sid = await getSetting("TWILIO_ACCOUNT_SID");
  if (!sid) {
    console.log(`[SMS PREVIEW] To: ${to}`);
    console.log(body + "\n");
    return;
  }

  const token = await getSetting("TWILIO_AUTH_TOKEN");
  const from = await getSetting("TWILIO_PHONE_NUMBER");

  const twilio = await import("twilio");
  const client = twilio.default(sid, token);

  await client.messages.create({ body, from, to });
}

// ============================================
// CONTEXT BUILDER
// ============================================

async function buildUserContext(
  userId: string
): Promise<UserContext | null> {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    include: {
      progress: {
        where: { status: "completed" },
        include: { lesson: true },
      },
      events: {
        orderBy: { createdAt: "desc" },
        take: 1,
      },
    },
  });

  if (!user) return null;

  const totalLessons = await prisma.lesson.count();
  const lessonsCompleted = user.progress.length;

  const completedOrders = user.progress.map((p) => p.lesson.order);
  const maxCompleted = Math.max(0, ...completedOrders);

  const nextLesson = await prisma.lesson.findUnique({
    where: { order: maxCompleted + 1 },
    include: { module: true },
  });

  const currentLesson =
    maxCompleted > 0
      ? await prisma.lesson.findUnique({
          where: { order: maxCompleted },
          include: { module: true },
        })
      : null;

  const daysSinceSignup = Math.floor(
    (Date.now() - user.createdAt.getTime()) / (1000 * 60 * 60 * 24)
  );

  const lastActivity = user.events[0]?.createdAt || user.createdAt;
  const daysSinceLastActivity = Math.floor(
    (Date.now() - lastActivity.getTime()) / (1000 * 60 * 60 * 24)
  );

  return {
    name: user.name,
    contactMethod: user.contactMethod,
    email: user.email,
    phone: user.phone,
    lessonsCompleted,
    totalLessons,
    currentLessonTitle: currentLesson?.title,
    nextLessonTitle: nextLesson?.title,
    currentModuleTitle:
      currentLesson?.module?.title || nextLesson?.module?.title,
    daysSinceSignup,
    daysSinceLastActivity,
  };
}

// ============================================
// AUTOMATION ENGINE
// ============================================

export async function runAutomation(trigger: string, userId: string) {
  const ctx = await buildUserContext(userId);
  if (!ctx) return;

  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user) return;

  // Find all active automations for this trigger, ordered by priority (highest first)
  const automations = await prisma.automation.findMany({
    where: { trigger, isActive: true },
    orderBy: { priority: "desc" },
    include: {
      steps: {
        where: { isActive: true },
        orderBy: { order: "asc" },
        include: { template: true },
      },
    },
  });

  let sent = false;

  for (const automation of automations) {
    // Evaluate conditions
    if (
      automation.conditions &&
      typeof automation.conditions === "object" &&
      Object.keys(automation.conditions as Record<string, unknown>).length > 0
    ) {
      if (
        !evaluateConditions(
          automation.conditions as Record<string, unknown>,
          ctx
        )
      ) {
        continue;
      }
    }

    // Execute steps
    for (const step of automation.steps) {
      const template = step.template;

      // Determine channel: "auto" matches user preference
      const channel =
        step.channel === "auto" ? user.contactMethod : step.channel;

      // Skip if template channel doesn't match resolved channel
      if (template.channel !== channel) continue;

      const message = await resolveTemplate(template, ctx);

      try {
        if (channel === "email" && user.email) {
          await sendEmail(user.email, message.subject || "", message.body);
        } else if (channel === "sms" && user.phone) {
          await sendSMS(user.phone, message.body);
        } else {
          // No contact info for this channel
          continue;
        }

        await prisma.sendLog.create({
          data: {
            userId,
            templateId: template.id,
            stepId: step.id,
            channel,
            trigger,
            status: "sent",
            metadata: {
              automationId: automation.id,
              automationName: automation.name,
              templateSlug: template.slug,
            },
          },
        });

        sent = true;
      } catch (error) {
        await prisma.sendLog.create({
          data: {
            userId,
            templateId: template.id,
            stepId: step.id,
            channel,
            trigger,
            status: "failed",
            errorMessage: (error as Error).message,
          },
        });
      }
    }

    // If this automation matched and sent, stop evaluating lower-priority automations
    // (unless it's the generic fallback with no conditions)
    if (
      sent &&
      automation.conditions &&
      Object.keys(automation.conditions as Record<string, unknown>).length > 0
    ) {
      break;
    }
  }
}

// ============================================
// PUBLIC TRIGGERS (same interface as before)
// ============================================

export async function triggerWelcome(userId: string) {
  await runAutomation("signup", userId);
}

export async function triggerLessonComplete(userId: string) {
  await runAutomation("lesson_complete", userId);
}

export async function runStallCheck() {
  const users = await prisma.user.findMany({
    include: {
      progress: {
        where: { status: "completed" },
      },
    },
  });

  const totalLessons = await prisma.lesson.count();

  for (const user of users) {
    // Skip if course complete
    if (user.progress.length >= totalLessons) continue;

    // Check last activity
    const lastProgressDate = user.progress.reduce((latest, p) => {
      const d = p.completedAt || p.startedAt || new Date(0);
      return d > latest ? d : latest;
    }, user.createdAt);

    const daysSinceActivity = Math.floor(
      (Date.now() - lastProgressDate.getTime()) / (1000 * 60 * 60 * 24)
    );

    // Only run stall check if there's been at least 1 day of inactivity
    if (daysSinceActivity < 1) continue;

    // Check if we already sent a stall message recently (within 2 days)
    const recentStallLog = await prisma.sendLog.findFirst({
      where: {
        userId: user.id,
        trigger: "stall_check",
        createdAt: { gte: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000) },
      },
    });

    if (recentStallLog) continue;

    await runAutomation("stall_check", user.id);
  }
}
