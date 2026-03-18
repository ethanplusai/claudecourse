import "dotenv/config";
import { PrismaClient } from "../src/generated/prisma";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("Seeding Claude Course nurture templates and automations...\n");

  // Clear existing nurture data
  await prisma.sendLog.deleteMany();
  await prisma.automationStep.deleteMany();
  await prisma.automation.deleteMany();
  await prisma.nurtureTemplate.deleteMany();

  console.log("Cleared existing nurture data.\n");

  // ════════════════════════════════════════════════
  // EMAIL TEMPLATES
  // ════════════════════════════════════════════════

  const welcomeTemplate = await prisma.nurtureTemplate.create({
    data: {
      slug: "welcome",
      name: "Welcome Email",
      channel: "email",
      subject: "You're in, {{firstName}}. Here's what to do first.",
      body: `Hey {{firstName}},

You just signed up for Claude Course. Good move.

Here's the deal: this is a free course where you learn Claude Code by building a real product. Not a toy project. Not a tutorial that goes nowhere. A real, deployed application.

There are 16 lessons across 4 modules. Each one teaches you one thing and has you build one piece of a course platform (yes, the same one you're using right now).

**Your first step:** Go to Lesson 1. It takes 8 minutes. You'll understand what Claude Code is and why it's different from ChatGPT.

{{portalUrl}}

Oh, and check out the Skills Directory while you're there. 20 downloadable Claude Code skills files that make it an expert in Next.js, email copy, SEO, and more. Free with your account.

Talk soon,
Claude Course`,
      variables: ["firstName", "portalUrl"],
    },
  });

  const nudgeTemplate = await prisma.nurtureTemplate.create({
    data: {
      slug: "lesson-nudge",
      name: "Lesson Nudge",
      channel: "email",
      subject: "{{firstName}}, lesson 1 takes 8 minutes",
      body: `Hey {{firstName}},

You signed up for Claude Course a couple days ago but haven't started yet.

No judgment. Life gets in the way.

But here's the thing: Lesson 1 takes 8 minutes. That's it. You'll know what Claude Code is, why it matters, and what you're about to build.

8 minutes. Start here:
{{portalUrl}}

The longer you wait, the less likely you are to start. I know because I've watched the data. People who start within 3 days finish. People who wait usually don't.

Don't be the second group.

— Claude Course`,
      variables: ["firstName", "portalUrl"],
    },
  });

  const stallTemplate = await prisma.nurtureTemplate.create({
    data: {
      slug: "stall-check",
      name: "Stall Check",
      channel: "email",
      subject: "You were making progress, {{firstName}}",
      body: `Hey {{firstName}},

You've completed {{lessonsCompleted}} of {{totalLessons}} lessons. That's not nothing.

But it's been a few days since you logged in, and I wanted to check in.

Here's what happens next in the course: **{{nextLessonTitle}}**. It picks up right where you left off.

Jump back in:
{{portalUrl}}

Fun fact: this email was sent by the exact same nurture system you're learning to build in Module 3. Meta, right?

— Claude Course`,
      variables: ["firstName", "lessonsCompleted", "totalLessons", "nextLessonTitle", "portalUrl"],
    },
  });

  const halfwayTemplate = await prisma.nurtureTemplate.create({
    data: {
      slug: "halfway",
      name: "Halfway There",
      channel: "email",
      subject: "Halfway through, {{firstName}}. Here's what's coming.",
      body: `{{firstName}},

You're halfway through Claude Course. {{lessonsCompleted}} lessons done out of {{totalLessons}}.

So far you've built a landing page, set up a database, added auth, and created a course portal. That's a real application.

Here's what's coming in the second half:

- **Email nurture system** — automated emails that keep users engaged (like this one)
- **Behavior tracking** — know what your users are doing
- **Admin panel** — your command center
- **SEO** — get found by search engines
- **Deployment** — put it live on the internet

The second half is where it gets fun. The platform starts to feel alive.

Keep going:
{{portalUrl}}

— Claude Course`,
      variables: ["firstName", "lessonsCompleted", "totalLessons", "portalUrl"],
    },
  });

  const completeTemplate = await prisma.nurtureTemplate.create({
    data: {
      slug: "course-complete",
      name: "Course Complete",
      channel: "email",
      subject: "You built a whole damn platform, {{firstName}}",
      body: `{{firstName}},

You did it. All 16 lessons. Done.

Let me recap what you just built:
- A Next.js 15 application
- PostgreSQL database with Prisma
- Authentication (signup, login, sessions)
- Course portal with progress tracking
- Skills directory with auth-gated downloads
- Email nurture system
- Behavior tracking
- Admin panel
- SEO optimization
- Deployed to Vercel

That's not a tutorial project. That's a production application. And you built it with Claude Code.

**Three things to do now:**

1. Share what you built. Post it on Twitter, Reddit, wherever. You earned the brag.

2. Check out the Skills Directory if you haven't. 20 skills files across dev, marketing, business, and Claude Code categories. They make everything you build from here better.

3. Build something else. You now know the pattern: describe, build, iterate, deploy. Use it.

Thanks for going through the course. If you have feedback, reply to this email. I actually read these.

— Claude Course`,
      variables: ["firstName"],
    },
  });

  const skillsReminderTemplate = await prisma.nurtureTemplate.create({
    data: {
      slug: "skills-reminder",
      name: "Skills Directory Reminder",
      channel: "email",
      subject: "20 Claude Code cheat codes you haven't downloaded yet",
      body: `Hey {{firstName}},

Quick one. Did you check out the Skills Directory?

We have 20 Claude Code skills files — think of them as cheat codes. Download a file, drop it in your project, and Claude Code becomes an expert in that specific thing.

A few highlights:
- **Next.js Expert** — writes production-quality Next.js code
- **Email Copywriter** — writes emails that actually get opened
- **Project Bootstrap** — scaffolds entire projects from one description
- **Code Reviewer** — reviews your code like a senior developer

All free. All downloadable. All waiting for you.

{{portalUrl}}/skills

— Claude Course`,
      variables: ["firstName", "portalUrl"],
    },
  });

  console.log("Created 6 email templates.\n");

  // ════════════════════════════════════════════════
  // AUTOMATIONS
  // ════════════════════════════════════════════════

  const signupAutomation = await prisma.automation.create({
    data: {
      name: "Signup Sequence",
      trigger: "signup",
      isActive: true,
      priority: 1,
    },
  });

  await prisma.automationStep.create({
    data: {
      automationId: signupAutomation.id,
      templateId: welcomeTemplate.id,
      channel: "email",
      delayMinutes: 0,
      order: 1,
      isActive: true,
    },
  });

  await prisma.automationStep.create({
    data: {
      automationId: signupAutomation.id,
      templateId: nudgeTemplate.id,
      channel: "email",
      delayMinutes: 2880, // 48 hours
      order: 2,
      isActive: true,
    },
  });

  await prisma.automationStep.create({
    data: {
      automationId: signupAutomation.id,
      templateId: skillsReminderTemplate.id,
      channel: "email",
      delayMinutes: 10080, // 7 days
      order: 3,
      isActive: true,
    },
  });

  console.log("Created signup automation (3 steps).\n");

  const stallAutomation = await prisma.automation.create({
    data: {
      name: "Stall Check",
      trigger: "stall_check",
      isActive: true,
      priority: 2,
    },
  });

  await prisma.automationStep.create({
    data: {
      automationId: stallAutomation.id,
      templateId: stallTemplate.id,
      channel: "email",
      delayMinutes: 0,
      order: 1,
      isActive: true,
    },
  });

  console.log("Created stall check automation (1 step).\n");

  const lessonCompleteAutomation = await prisma.automation.create({
    data: {
      name: "Lesson Complete Milestones",
      trigger: "lesson_complete",
      conditions: { lessonOrder: 8 }, // halfway point
      isActive: true,
      priority: 3,
    },
  });

  await prisma.automationStep.create({
    data: {
      automationId: lessonCompleteAutomation.id,
      templateId: halfwayTemplate.id,
      channel: "email",
      delayMinutes: 0,
      order: 1,
      isActive: true,
    },
  });

  console.log("Created lesson complete automation (1 step).\n");

  const courseCompleteAutomation = await prisma.automation.create({
    data: {
      name: "Course Complete",
      trigger: "lesson_complete",
      conditions: { lessonOrder: 16 }, // final lesson
      isActive: true,
      priority: 4,
    },
  });

  await prisma.automationStep.create({
    data: {
      automationId: courseCompleteAutomation.id,
      templateId: completeTemplate.id,
      channel: "email",
      delayMinutes: 60, // 1 hour after completing final lesson
      order: 1,
      isActive: true,
    },
  });

  console.log("Created course complete automation (1 step).\n");
  console.log("Done! Seeded 6 templates and 4 automations.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
