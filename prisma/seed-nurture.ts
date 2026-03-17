import "dotenv/config";
import { PrismaClient } from "../src/generated/prisma";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("Seeding nurture system...\n");

  // Clear existing nurture data
  await prisma.sendLog.deleteMany();
  await prisma.automationStep.deleteMany();
  await prisma.automation.deleteMany();
  await prisma.nurtureTemplate.deleteMany();

  // ============================================
  // TEMPLATES
  // ============================================

  const templates = await Promise.all([
    // WELCOME
    prisma.nurtureTemplate.create({
      data: {
        slug: "welcome_email",
        name: "Welcome Email",
        channel: "email",
        subject: "You're in, {{firstName}}. Let's build.",
        body: `{{firstName}},

Welcome to The Client Engine.

You just took the first step toward building a fully automated client acquisition system — the kind that generates leads, warms them, and books calls while you sleep.

Here's what's happening right now:

Your account is set up. Your first module is unlocked. And the system you're about to learn how to build? You're already inside it.

This platform — the one you signed up for, the one sending you this message right now — was built with Claude Code in a weekend. Every page, every lesson, the signup flow, the progress tracking, this email.

All of it.

And by the time you finish this course, you'll have your own version. Customized for your business. Running on autopilot.

Start with Lesson 1: Welcome to The Client Engine.

{{portalUrl}}

Talk soon,
The Client Engine

P.S. — This email is the first step of a behavior-based nurture sequence. You're going to learn exactly how to build one just like it. Pay attention to what you receive and when. It's all intentional.`,
        variables: ["firstName", "portalUrl"],
      },
    }),

    prisma.nurtureTemplate.create({
      data: {
        slug: "welcome_sms",
        name: "Welcome SMS",
        channel: "sms",
        body: `{{firstName}} — you're in. Your Client Engine training is ready. Start Lesson 1 now: {{portalUrl}}`,
        variables: ["firstName", "portalUrl"],
      },
    }),

    // LESSON 1 COMPLETE
    prisma.nurtureTemplate.create({
      data: {
        slug: "lesson1_complete_email",
        name: "Lesson 1 Complete Email",
        channel: "email",
        subject: "Lesson 1 done. Here's what's next.",
        body: `{{firstName}},

You just completed your first lesson. Most people who sign up for things like this never even start — so you're already ahead.

Next up: "{{nextLessonTitle}}"

This is where you'll see how all five components of The Client Engine connect. It's a quick one — about 4 minutes.

{{portalUrl}}

Quick note — you're going to start noticing something. The emails you get from us will change based on what you do inside the platform. Complete a lesson, get a specific follow-up. Go quiet for a few days, get a different message.

This isn't random. This is the exact nurture system you're learning how to build.

Keep going.`,
        variables: ["firstName", "nextLessonTitle", "portalUrl"],
      },
    }),

    prisma.nurtureTemplate.create({
      data: {
        slug: "lesson1_complete_sms",
        name: "Lesson 1 Complete SMS",
        channel: "sms",
        body: `{{firstName}} — Lesson 1 done. Next: "{{nextLessonTitle}}". Keep the momentum: {{portalUrl}}`,
        variables: ["firstName", "nextLessonTitle", "portalUrl"],
      },
    }),

    // MODULE 1 COMPLETE (lesson 5)
    prisma.nurtureTemplate.create({
      data: {
        slug: "module1_complete_email",
        name: "Module 1 Complete Email",
        channel: "email",
        subject: "Module 1 complete. Now we build.",
        body: `{{firstName}},

You just finished the Foundations module. You now understand what The Client Engine is, how it works, and what you're about to build.

Module 2 is where the real work starts.

You'll download the boilerplate, fire up Claude Code, and start building your own version of this platform — customized for your business.

No coding experience needed. Claude Code handles the technical work. You just shape the direction.

{{portalUrl}}

Let's go.`,
        variables: ["firstName", "portalUrl"],
      },
    }),

    prisma.nurtureTemplate.create({
      data: {
        slug: "module1_complete_sms",
        name: "Module 1 Complete SMS",
        channel: "sms",
        body: `{{firstName}} — Module 1 complete. Module 2 is where you start building. Let's go: {{portalUrl}}`,
        variables: ["firstName", "portalUrl"],
      },
    }),

    // MODULE 2 COMPLETE (lesson 10)
    prisma.nurtureTemplate.create({
      data: {
        slug: "module2_complete_email",
        name: "Module 2 Complete Email",
        channel: "email",
        subject: "Your lead magnet is live. Here's what happens next.",
        body: `{{firstName}},

If you followed Module 2, you now have a live platform. Your own lead magnet. Built with Claude Code.

That's further than 95% of people ever get.

Module 3 is about the nurture engine — the system that turns signups into booked calls automatically.

Remember this email sequence you've been receiving? You're about to build your own version of it.

{{portalUrl}}

Keep building.`,
        variables: ["firstName", "portalUrl"],
      },
    }),

    prisma.nurtureTemplate.create({
      data: {
        slug: "module2_complete_sms",
        name: "Module 2 Complete SMS",
        channel: "sms",
        body: `{{firstName}} — {{lessonsCompleted}}/{{totalLessons}} lessons done. You're building something real. Next module unlocked: {{portalUrl}}`,
        variables: ["firstName", "lessonsCompleted", "totalLessons", "portalUrl"],
      },
    }),

    // MODULE 3 COMPLETE (lesson 15)
    prisma.nurtureTemplate.create({
      data: {
        slug: "module3_complete_email",
        name: "Module 3 Complete Email",
        channel: "email",
        subject: "Your nurture engine is set up. Booking system is next.",
        body: `{{firstName}},

Nurture engine: done. Your leads are now getting personalized follow-ups based on their behavior. That alone puts you ahead of almost everyone in your space.

Module 4 is about the booking system — turning all that warmth and trust into actual conversations on your calendar.

This is where the system starts making money.

{{portalUrl}}`,
        variables: ["firstName", "portalUrl"],
      },
    }),

    prisma.nurtureTemplate.create({
      data: {
        slug: "module3_complete_sms",
        name: "Module 3 Complete SMS",
        channel: "sms",
        body: `{{firstName}} — {{lessonsCompleted}}/{{totalLessons}} lessons done. Booking system is next: {{portalUrl}}`,
        variables: ["firstName", "lessonsCompleted", "totalLessons", "portalUrl"],
      },
    }),

    // GENERIC LESSON COMPLETE
    prisma.nurtureTemplate.create({
      data: {
        slug: "lesson_complete_generic_email",
        name: "Generic Lesson Complete Email",
        channel: "email",
        subject: "Lesson {{lessonsCompleted}} done. Keep going.",
        body: `{{firstName}},

You just completed lesson {{lessonsCompleted}} of {{totalLessons}}. Next up: "{{nextLessonTitle}}"

{{portalUrl}}`,
        variables: ["firstName", "lessonsCompleted", "totalLessons", "nextLessonTitle", "portalUrl"],
      },
    }),

    // COURSE COMPLETE
    prisma.nurtureTemplate.create({
      data: {
        slug: "course_complete_email",
        name: "Course Complete Email",
        channel: "email",
        subject: "You built the machine, {{firstName}}.",
        body: `{{firstName}},

28 lessons. 6 modules. Done.

You now have a complete Client Engine — a lead magnet, nurture system, booking flow, and traffic strategy. All built with Claude Code.

Most people never finish anything. You did.

Now here's the question: do you want to scale it yourself, or do you want us to do it for you?

We offer a done-for-you deployment where we optimize, scale, and manage your entire Client Engine. If that sounds interesting, book a call:

{{bookingUrl}}

Either way, your system is live. It compounds every day it runs. And you built the whole thing.

Talk soon,
The Client Engine`,
        variables: ["firstName", "bookingUrl"],
      },
    }),

    prisma.nurtureTemplate.create({
      data: {
        slug: "course_complete_sms",
        name: "Course Complete SMS",
        channel: "sms",
        body: `{{firstName}} — You finished The Client Engine. All 28 lessons. Your system is live. Want us to scale it for you? Book a call: {{bookingUrl}}`,
        variables: ["firstName", "bookingUrl"],
      },
    }),

    // STALL 2-DAY
    prisma.nurtureTemplate.create({
      data: {
        slug: "stall_2day_email",
        name: "2-Day Stall Email",
        channel: "email",
        subject: "Still building, {{firstName}}?",
        body: `{{firstName}},

You stopped at lesson {{lessonsCompleted}} of {{totalLessons}}. Your next lesson is "{{nextLessonTitle}}".

No pressure. But momentum matters with this stuff. The people who build their Client Engine in one focused push are the ones who actually launch it.

The ones who "come back to it later" usually don't.

Pick it back up: {{portalUrl}}`,
        variables: ["firstName", "lessonsCompleted", "totalLessons", "nextLessonTitle", "portalUrl"],
      },
    }),

    prisma.nurtureTemplate.create({
      data: {
        slug: "stall_2day_sms",
        name: "2-Day Stall SMS",
        channel: "sms",
        body: `{{firstName}} — you left off at lesson {{lessonsCompleted}}. "{{nextLessonTitle}}" is next. Pick it back up: {{portalUrl}}`,
        variables: ["firstName", "lessonsCompleted", "nextLessonTitle", "portalUrl"],
      },
    }),

    // STALL 5-DAY
    prisma.nurtureTemplate.create({
      data: {
        slug: "stall_5day_email",
        name: "5-Day Stall Email",
        channel: "email",
        subject: "Your Client Engine is waiting",
        body: `{{firstName}},

It's been a few days since you logged in.

I get it. Life gets busy. But here's the thing — the system you're building doesn't require much time. People finish this in a weekend.

You're {{lessonsCompleted}} lessons in. {{lessonsRemaining}} to go.

The platform is sitting there ready. Claude Code does the heavy lifting. You just need to show up and follow the steps.

{{portalUrl}}

And if you'd rather skip the DIY route and have us deploy the whole thing for you, that's an option too:

{{bookingUrl}}

Either way — don't let this sit.`,
        variables: ["firstName", "lessonsCompleted", "lessonsRemaining", "portalUrl", "bookingUrl"],
      },
    }),

    prisma.nurtureTemplate.create({
      data: {
        slug: "stall_5day_sms",
        name: "5-Day Stall SMS",
        channel: "sms",
        body: `{{firstName}} — it's been a few days. {{lessonsRemaining}} lessons left. Finish your Client Engine this weekend: {{portalUrl}}`,
        variables: ["firstName", "lessonsRemaining", "portalUrl"],
      },
    }),
  ]);

  console.log(`Created ${templates.length} templates`);

  // Build template lookup
  const t = Object.fromEntries(templates.map((t) => [t.slug, t]));

  // ============================================
  // AUTOMATIONS + STEPS
  // ============================================

  const automations = [
    {
      name: "Welcome Sequence",
      trigger: "signup",
      conditions: {},
      priority: 0,
      emailSlug: "welcome_email",
      smsSlug: "welcome_sms",
    },
    {
      name: "Lesson 1 Complete",
      trigger: "lesson_complete",
      conditions: { lessonsCompleted: { eq: 1 } },
      priority: 10,
      emailSlug: "lesson1_complete_email",
      smsSlug: "lesson1_complete_sms",
    },
    {
      name: "Module 1 Complete",
      trigger: "lesson_complete",
      conditions: { lessonsCompleted: { eq: 5 } },
      priority: 10,
      emailSlug: "module1_complete_email",
      smsSlug: "module1_complete_sms",
    },
    {
      name: "Module 2 Complete",
      trigger: "lesson_complete",
      conditions: { lessonsCompleted: { eq: 10 } },
      priority: 10,
      emailSlug: "module2_complete_email",
      smsSlug: "module2_complete_sms",
    },
    {
      name: "Module 3 Complete",
      trigger: "lesson_complete",
      conditions: { lessonsCompleted: { eq: 15 } },
      priority: 10,
      emailSlug: "module3_complete_email",
      smsSlug: "module3_complete_sms",
    },
    {
      name: "Course Complete",
      trigger: "lesson_complete",
      conditions: { lessonsCompleted: { gte: 28 } },
      priority: 100, // highest
      emailSlug: "course_complete_email",
      smsSlug: "course_complete_sms",
    },
    {
      name: "Generic Lesson Complete",
      trigger: "lesson_complete",
      conditions: {},
      priority: 0, // lowest — only fires if nothing else matches
      emailSlug: "lesson_complete_generic_email",
      smsSlug: null,
    },
    {
      name: "2-Day Stall Re-engagement",
      trigger: "stall_check",
      conditions: { daysSinceLastActivity: { gte: 2, lt: 5 } },
      priority: 10,
      emailSlug: "stall_2day_email",
      smsSlug: "stall_2day_sms",
    },
    {
      name: "5-Day Stall Re-engagement",
      trigger: "stall_check",
      conditions: { daysSinceLastActivity: { gte: 5 } },
      priority: 10,
      emailSlug: "stall_5day_email",
      smsSlug: "stall_5day_sms",
    },
  ];

  for (const auto of automations) {
    const automation = await prisma.automation.create({
      data: {
        name: auto.name,
        trigger: auto.trigger,
        conditions: auto.conditions,
        priority: auto.priority,
        isActive: true,
      },
    });

    // Email step
    if (auto.emailSlug && t[auto.emailSlug]) {
      await prisma.automationStep.create({
        data: {
          automationId: automation.id,
          templateId: t[auto.emailSlug].id,
          channel: "auto",
          order: 0,
        },
      });
    }

    // SMS step
    if (auto.smsSlug && t[auto.smsSlug]) {
      await prisma.automationStep.create({
        data: {
          automationId: automation.id,
          templateId: t[auto.smsSlug].id,
          channel: "auto",
          order: 1,
        },
      });
    }

    console.log(`  Created automation: ${auto.name}`);
  }

  console.log(`\nDone! ${automations.length} automations created.`);
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
  });
