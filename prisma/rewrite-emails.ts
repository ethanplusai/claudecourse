import "dotenv/config";
import { PrismaClient } from "../src/generated/prisma";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

const templates: Record<string, { subject: string; body: string }> = {

  welcome_email: {
    subject: `You're in, {{firstName}}. Here's what's happening.`,
    body: `{{firstName}},

Welcome to The Client Engine.

You just signed up for a free course that teaches you how to use Claude (Anthropic's AI) by building something real — an automated system that generates leads for your business.

Your first lesson is ready. Start here:
https://clients.wtf/portal

Here's what's going to happen over the next few days:

You'll go through lessons at your own pace. As you do, you'll get emails from us — but not random ones. Every email you receive is triggered by something you did (or didn't do) inside the platform.

Completed a lesson? You'll get a follow-up pointing you to the next one.
Went quiet for a few days? You'll get a nudge.
Finished everything? You'll get a different message entirely.

This isn't a generic email blast. It's behavior-based nurture — and it's exactly what you're going to learn how to build.

Pay attention to what you receive and when. It's all intentional.

Start Lesson 1: https://clients.wtf/portal

— The Client Engine

---
🔍 Behind the scenes: This email was triggered the moment you signed up. Your account creation fired a "signup" event, which matched an automation rule that sent this specific template. In your Client Engine, this is exactly how your welcome email will work.`,
  },

  lesson1_complete_email: {
    subject: `Lesson 1 done. Here's what just happened behind the scenes.`,
    body: `{{firstName}},

You just finished your first lesson. Most people who sign up for things like this never even start — so you're already ahead.

Next up: "{{nextLessonTitle}}"
https://clients.wtf/portal

Here's something to notice: this email is different from the one you got when you signed up. That's because the system detected that you completed a lesson and sent a different template.

If you had signed up and done nothing for 2 days, you'd have gotten a completely different email — a re-engagement nudge instead of this congratulations.

That's behavior-based nurture in action. You're experiencing it right now.

Keep going — each lesson builds on the last.

https://clients.wtf/portal

— The Client Engine

---
🔍 Behind the scenes: This email was triggered by a "lesson_complete" event with the condition "lessonsCompleted = 1". The system chose this template over the generic lesson-complete template because it has higher priority. In your Client Engine, you'll set up the same conditional logic.`,
  },

  module1_complete_email: {
    subject: `Foundations done. Now we build.`,
    body: `{{firstName}},

You finished Module 1. You now understand what The Client Engine is, how Claude works, and what you're about to build.

Module 2 is where the real work starts. You'll set up Claude Code, clone the boilerplate, and start building your own platform.

No coding experience needed. Claude Code handles the technical work. You just tell it what you want.

Continue here: https://clients.wtf/portal

Quick note — notice how this email hit different from the Lesson 1 email? That's because the system knows you completed 5 lessons (an entire module), not just 1. It sent a more substantial message because you've shown higher commitment.

This is the kind of intelligence you're building into your own system.

— The Client Engine

---
🔍 Behind the scenes: Trigger = "lesson_complete", condition = "lessonsCompleted = 5". This automation has priority 10, so it fires INSTEAD of the generic lesson-complete email. Your system will use the same priority logic to send specific messages at key milestones.`,
  },

  module2_complete_email: {
    subject: `Your platform is live. Here's what happens next.`,
    body: `{{firstName}},

If you followed Module 2, you now have a platform running. Your own lead magnet. Built with Claude Code.

That's further than 95% of people ever get.

Module 3 is where you build the nurture engine — the automated email system that turns signups into qualified leads. Remember, these emails you've been getting? You're about to build your own version.

Continue: https://clients.wtf/portal

— The Client Engine

---
🔍 Behind the scenes: "lessonsCompleted = 10" triggered this. Notice the tone shifted — we're not explaining basics anymore. The system knows you're committed (10 lessons deep) so the messaging is more direct. Your nurture engine should do the same: adapt tone and content based on engagement depth.`,
  },

  module3_complete_email: {
    subject: `Nurture engine done. Your leads are being warmed automatically.`,
    body: `{{firstName}},

Your nurture engine is set up. Your leads are now getting personalized follow-ups based on their behavior — exactly like the emails you've been receiving from us.

Module 4 is about the booking system — turning all that trust and warmth into actual conversations on your calendar.

This is where the system starts making money.

Continue: https://clients.wtf/portal

— The Client Engine

---
🔍 Behind the scenes: 15 lessons complete. At this point, a smart nurture system would start qualifying you. If you were a lead (not a student), this is where we might introduce a soft CTA to book a call. Notice how we haven't pitched anything until now — 15 lessons of pure value first. That's the architecture.`,
  },

  lesson_complete_generic_email: {
    subject: `Lesson {{lessonsCompleted}} done. {{lessonsRemaining}} to go.`,
    body: `{{firstName}},

You just completed lesson {{lessonsCompleted}} of {{totalLessons}}.

Next up: "{{nextLessonTitle}}"
https://clients.wtf/portal

Keep the momentum going.

— The Client Engine

---
🔍 Behind the scenes: This is the "generic" lesson-complete template. It fires when no specific milestone template matches (like the module-complete emails). It has the lowest priority (0), so it only sends when nothing more specific applies. In your system, this is your fallback — always have one.`,
  },

  course_complete_email: {
    subject: `You built the machine, {{firstName}}.`,
    body: `{{firstName}},

28 lessons. 6 modules. Done.

You now have:
- A live platform generating leads
- An automated nurture engine adapting to behavior
- A booking system for qualified leads
- Traffic strategies feeding the machine
- And most importantly — you know how to use Claude to build things

That last one is worth more than everything else combined.

One ask: take 30 seconds and leave your feedback on the course.
https://clients.wtf/portal/review

Your honest take helps us improve and helps other people decide if this is worth their time.

— The Client Engine

---
🔍 Behind the scenes: "lessonsCompleted >= 28" with priority 100 (highest). This always fires over any other lesson_complete automation. Notice the ask for a review — this is the "Advocate" stage of the funnel. Reviews become social proof on the landing page, which drives more signups, which feeds the system. The loop closes. Build this into yours.`,
  },

  stall_2day_email: {
    subject: `Still building, {{firstName}}?`,
    body: `{{firstName}},

You stopped at lesson {{lessonsCompleted}} of {{totalLessons}}. Your next one is "{{nextLessonTitle}}".

No pressure — but momentum matters. The people who finish this in one focused push are the ones who actually launch.

The ones who "come back to it later" usually don't.

Pick it back up: https://clients.wtf/portal

— The Client Engine

---
🔍 Behind the scenes: This email exists because you haven't completed a lesson in 2+ days. A daily cron job checked all users, found that your "daysSinceLastActivity" is >= 2 (but less than 5), and sent this re-engagement template. If you don't come back, you'll get a different email in a few more days. That's the stall sequence — and you should build one into your system too.`,
  },

  stall_5day_email: {
    subject: `Your Client Engine is sitting there waiting.`,
    body: `{{firstName}},

It's been a few days since you logged in.

You're {{lessonsCompleted}} lessons in. {{lessonsRemaining}} to go. The platform is sitting there ready. Claude Code does the heavy lifting. You just need to show up and follow the steps.

People finish this in a weekend. You're closer than you think.

https://clients.wtf/portal

— The Client Engine

---
🔍 Behind the scenes: 5+ days inactive. This is the second stall email — more urgent tone, shorter copy. Notice we didn't send both the 2-day and 5-day emails back-to-back. The system checks if a stall email was already sent recently and skips if so. Frequency capping prevents your leads from feeling spammed. Critical for any nurture system.`,
  },

};

async function main() {
  for (const [slug, data] of Object.entries(templates)) {
    const result = await prisma.nurtureTemplate.updateMany({
      where: { slug },
      data: { subject: data.subject, body: data.body },
    });
    console.log(`${slug}: ${result.count > 0 ? "✓ updated" : "✗ not found"}`);
  }
  console.log("\nAll templates updated.");
}

main().then(() => prisma.$disconnect());
