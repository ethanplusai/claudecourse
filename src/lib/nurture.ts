import { prisma } from "./db";

// ============================================
// EMAIL TEMPLATES
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

function getFirstName(name: string): string {
  return name.split(" ")[0];
}

// --- WELCOME ---
function welcomeEmail(ctx: UserContext) {
  const first = getFirstName(ctx.name);
  return {
    subject: `You're in, ${first}. Let's build.`,
    body: `${first},

Welcome to The Client Engine.

You just took the first step toward building a fully automated client acquisition system — the kind that generates leads, warms them, and books calls while you sleep.

Here's what's happening right now:

Your account is set up. Your first module is unlocked. And the system you're about to learn how to build? You're already inside it.

This platform — the one you signed up for, the one sending you this message right now — was built with Claude Code in a weekend. Every page, every lesson, the signup flow, the progress tracking, this email.

All of it.

And by the time you finish this course, you'll have your own version. Customized for your business. Running on autopilot.

Start with Lesson 1: Welcome to The Client Engine.

https://clients.wtf/portal

Talk soon,
The Client Engine

P.S. — This email is the first step of a behavior-based nurture sequence. You're going to learn exactly how to build one just like it. Pay attention to what you receive and when. It's all intentional.`,
  };
}

function welcomeSMS(ctx: UserContext) {
  const first = getFirstName(ctx.name);
  return {
    body: `${first} — you're in. Your Client Engine training is ready. Start Lesson 1 now: https://clients.wtf/portal`,
  };
}

// --- LESSON COMPLETE ---
function lessonCompleteEmail(ctx: UserContext) {
  const first = getFirstName(ctx.name);

  if (ctx.lessonsCompleted === 1) {
    return {
      subject: `Lesson 1 done. Here's what's next.`,
      body: `${first},

You just completed your first lesson. Most people who sign up for things like this never even start — so you're already ahead.

Next up: "${ctx.nextLessonTitle}"

This is where you'll see how all five components of The Client Engine connect. It's a quick one — about 4 minutes.

https://clients.wtf/portal

Quick note — you're going to start noticing something. The emails you get from us will change based on what you do inside the platform. Complete a lesson, get a specific follow-up. Go quiet for a few days, get a different message.

This isn't random. This is the exact nurture system you're learning how to build.

Keep going.`,
    };
  }

  if (ctx.lessonsCompleted === 5) {
    return {
      subject: `Module 1 complete. Now we build.`,
      body: `${first},

You just finished the Foundations module. You now understand what The Client Engine is, how it works, and what you're about to build.

Module 2 is where the real work starts.

You'll download the boilerplate, fire up Claude Code, and start building your own version of this platform — customized for your business.

No coding experience needed. Claude Code handles the technical work. You just shape the direction.

https://clients.wtf/portal

Let's go.`,
    };
  }

  if (ctx.lessonsCompleted === 10) {
    return {
      subject: `Your lead magnet is live. Here's what happens next.`,
      body: `${first},

If you followed Module 2, you now have a live platform. Your own lead magnet. Built with Claude Code.

That's further than 95% of people ever get.

Module 3 is about the nurture engine — the system that turns signups into booked calls automatically.

Remember this email sequence you've been receiving? You're about to build your own version of it.

https://clients.wtf/portal

Keep building.`,
    };
  }

  if (ctx.lessonsCompleted === 15) {
    return {
      subject: `Your nurture engine is set up. Booking system is next.`,
      body: `${first},

Nurture engine: done. Your leads are now getting personalized follow-ups based on their behavior. That alone puts you ahead of almost everyone in your space.

Module 4 is about the booking system — turning all that warmth and trust into actual conversations on your calendar.

This is where the system starts making money.

https://clients.wtf/portal`,
    };
  }

  if (ctx.nextLessonTitle) {
    return {
      subject: `Lesson ${ctx.lessonsCompleted} done. Keep going.`,
      body: `${first},

You just completed lesson ${ctx.lessonsCompleted} of ${ctx.totalLessons}. Next up: "${ctx.nextLessonTitle}"

https://clients.wtf/portal`,
    };
  }

  return null;
}

function lessonCompleteSMS(ctx: UserContext) {
  const first = getFirstName(ctx.name);

  if (ctx.lessonsCompleted === 1) {
    return {
      body: `${first} — Lesson 1 done. Next: "${ctx.nextLessonTitle}". Keep the momentum: https://clients.wtf/portal`,
    };
  }

  if (ctx.lessonsCompleted === 5) {
    return {
      body: `${first} — Module 1 complete. Module 2 is where you start building. Let's go: https://clients.wtf/portal`,
    };
  }

  if ([10, 15, 19, 24].includes(ctx.lessonsCompleted)) {
    return {
      body: `${first} — ${ctx.lessonsCompleted}/${ctx.totalLessons} lessons done. You're building something real. Next module unlocked: https://clients.wtf/portal`,
    };
  }

  return null; // Don't SMS every single lesson
}

// --- COURSE COMPLETE ---
function courseCompleteEmail(ctx: UserContext) {
  const first = getFirstName(ctx.name);
  return {
    subject: `You built the machine, ${first}.`,
    body: `${first},

28 lessons. 6 modules. Done.

You now have a complete Client Engine — a lead magnet, nurture system, booking flow, and traffic strategy. All built with Claude Code.

Most people never finish anything. You did.

Now here's the question: do you want to scale it yourself, or do you want us to do it for you?

We offer a done-for-you deployment where we optimize, scale, and manage your entire Client Engine. If that sounds interesting, book a call:

https://calendly.com

Either way, your system is live. It compounds every day it runs. And you built the whole thing.

Talk soon,
The Client Engine`,
  };
}

function courseCompleteSMS(ctx: UserContext) {
  const first = getFirstName(ctx.name);
  return {
    body: `${first} — You finished The Client Engine. All 28 lessons. Your system is live. Want us to scale it for you? Book a call: https://calendly.com`,
  };
}

// --- STALL / RE-ENGAGEMENT ---
function stallEmail2Days(ctx: UserContext) {
  const first = getFirstName(ctx.name);
  return {
    subject: `Still building, ${first}?`,
    body: `${first},

You stopped at lesson ${ctx.lessonsCompleted} of ${ctx.totalLessons}. Your next lesson is "${ctx.nextLessonTitle}".

No pressure. But momentum matters with this stuff. The people who build their Client Engine in one focused push are the ones who actually launch it.

The ones who "come back to it later" usually don't.

Pick it back up: https://clients.wtf/portal

${ctx.lessonsCompleted < 6 ? "You haven't even gotten to the building part yet. That's where it gets good." : "You're already past the hard part. Don't stop now."}`,
  };
}

function stallSMS2Days(ctx: UserContext) {
  const first = getFirstName(ctx.name);
  return {
    body: `${first} — you left off at lesson ${ctx.lessonsCompleted}. "${ctx.nextLessonTitle}" is next. Pick it back up: https://clients.wtf/portal`,
  };
}

function stallEmail5Days(ctx: UserContext) {
  const first = getFirstName(ctx.name);
  return {
    subject: `Your Client Engine is waiting`,
    body: `${first},

It's been a few days since you logged in.

I get it. Life gets busy. But here's the thing — the system you're building doesn't require much time. People finish this in a weekend.

You're ${ctx.lessonsCompleted} lessons in. ${ctx.totalLessons - ctx.lessonsCompleted} to go.

The platform is sitting there ready. Claude Code does the heavy lifting. You just need to show up and follow the steps.

https://clients.wtf/portal

And if you'd rather skip the DIY route and have us deploy the whole thing for you, that's an option too:

https://calendly.com

Either way — don't let this sit.`,
  };
}

function stallSMS5Days(ctx: UserContext) {
  const first = getFirstName(ctx.name);
  return {
    body: `${first} — it's been a few days. ${ctx.totalLessons - ctx.lessonsCompleted} lessons left. Finish your Client Engine this weekend: https://clients.wtf/portal`,
  };
}

// ============================================
// SENDING FUNCTIONS
// ============================================

async function sendEmail(to: string, subject: string, body: string) {
  if (!process.env.RESEND_API_KEY) {
    console.log(`[EMAIL PREVIEW] To: ${to} | Subject: ${subject}`);
    console.log(body.substring(0, 200) + "...");
    return;
  }

  const { Resend } = await import("resend");
  const resend = new Resend(process.env.RESEND_API_KEY);

  await resend.emails.send({
    from: "The Client Engine <hello@clients.wtf>",
    to,
    subject,
    text: body,
  });
}

async function sendSMS(to: string, body: string) {
  if (!process.env.TWILIO_ACCOUNT_SID) {
    console.log(`[SMS PREVIEW] To: ${to}`);
    console.log(body);
    return;
  }

  const twilio = await import("twilio");
  const client = twilio.default(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN
  );

  await client.messages.create({
    body,
    from: process.env.TWILIO_PHONE_NUMBER,
    to,
  });
}

async function sendToUser(
  user: { contactMethod: string; email?: string | null; phone?: string | null },
  message: { subject?: string; body: string } | null
) {
  if (!message) return;

  if (user.contactMethod === "email" && user.email) {
    await sendEmail(user.email, message.subject || "", message.body);
  } else if (user.contactMethod === "sms" && user.phone) {
    await sendSMS(user.phone, message.body);
  }
}

// ============================================
// CONTEXT BUILDER
// ============================================

async function buildUserContext(userId: string): Promise<UserContext | null> {
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

  // Find next lesson
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
    currentModuleTitle: currentLesson?.module?.title || nextLesson?.module?.title,
    daysSinceSignup,
    daysSinceLastActivity,
  };
}

// ============================================
// PUBLIC TRIGGER FUNCTIONS
// ============================================

export async function triggerWelcome(userId: string) {
  const ctx = await buildUserContext(userId);
  if (!ctx) return;

  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user) return;

  const message =
    ctx.contactMethod === "email" ? welcomeEmail(ctx) : welcomeSMS(ctx);

  await sendToUser(user, message);

  await prisma.behaviorEvent.create({
    data: {
      userId,
      type: "nurture_sent",
      metadata: { trigger: "welcome", contactMethod: ctx.contactMethod },
    },
  });
}

export async function triggerLessonComplete(userId: string) {
  const ctx = await buildUserContext(userId);
  if (!ctx) return;

  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user) return;

  // Check if course is complete
  if (ctx.lessonsCompleted >= ctx.totalLessons) {
    const message =
      ctx.contactMethod === "email"
        ? courseCompleteEmail(ctx)
        : courseCompleteSMS(ctx);
    await sendToUser(user, message);
    await prisma.behaviorEvent.create({
      data: {
        userId,
        type: "nurture_sent",
        metadata: { trigger: "course_complete" },
      },
    });
    return;
  }

  const message =
    ctx.contactMethod === "email"
      ? lessonCompleteEmail(ctx)
      : lessonCompleteSMS(ctx);

  if (message) {
    await sendToUser(user, message);
    await prisma.behaviorEvent.create({
      data: {
        userId,
        type: "nurture_sent",
        metadata: {
          trigger: "lesson_complete",
          lessonsCompleted: ctx.lessonsCompleted,
        },
      },
    });
  }
}

export async function runStallCheck() {
  // Find users who have stalled
  const users = await prisma.user.findMany({
    include: {
      progress: {
        where: { status: "completed" },
        include: { lesson: true },
      },
      events: {
        where: { type: "nurture_sent" },
        orderBy: { createdAt: "desc" },
        take: 5,
      },
    },
  });

  for (const user of users) {
    const completedCount = user.progress.length;
    const totalLessons = await prisma.lesson.count();

    // Skip if course is complete
    if (completedCount >= totalLessons) continue;

    // Skip if they haven't started (welcome handles that)
    if (completedCount === 0) {
      // But check if it's been 1+ days since signup with no progress
      const daysSinceSignup = Math.floor(
        (Date.now() - user.createdAt.getTime()) / (1000 * 60 * 60 * 24)
      );
      if (daysSinceSignup < 1) continue;
    }

    // Check last activity
    const lastProgressDate = user.progress.reduce((latest, p) => {
      const d = p.completedAt || p.startedAt || new Date(0);
      return d > latest ? d : latest;
    }, user.createdAt);

    const daysSinceActivity = Math.floor(
      (Date.now() - lastProgressDate.getTime()) / (1000 * 60 * 60 * 24)
    );

    // Check if we already sent a stall message recently
    const recentStallMessages = user.events.filter((e) => {
      const meta = e.metadata as Record<string, unknown> | null;
      return (
        meta?.trigger === "stall_2day" || meta?.trigger === "stall_5day"
      );
    });

    const lastStallSent = recentStallMessages[0]?.createdAt;
    const daysSinceLastStall = lastStallSent
      ? Math.floor(
          (Date.now() - lastStallSent.getTime()) / (1000 * 60 * 60 * 24)
        )
      : 999;

    const ctx = await buildUserContext(user.id);
    if (!ctx) continue;

    // 2-day stall
    if (daysSinceActivity >= 2 && daysSinceActivity < 5 && daysSinceLastStall >= 2) {
      const message =
        ctx.contactMethod === "email"
          ? stallEmail2Days(ctx)
          : stallSMS2Days(ctx);

      await sendToUser(user, message);
      await prisma.behaviorEvent.create({
        data: {
          userId: user.id,
          type: "nurture_sent",
          metadata: { trigger: "stall_2day", daysSinceActivity },
        },
      });
    }

    // 5-day stall
    if (daysSinceActivity >= 5 && daysSinceLastStall >= 3) {
      const message =
        ctx.contactMethod === "email"
          ? stallEmail5Days(ctx)
          : stallSMS5Days(ctx);

      await sendToUser(user, message);
      await prisma.behaviorEvent.create({
        data: {
          userId: user.id,
          type: "nurture_sent",
          metadata: { trigger: "stall_5day", daysSinceActivity },
        },
      });
    }
  }
}
