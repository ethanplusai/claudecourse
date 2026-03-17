import "dotenv/config";
import { PrismaClient } from "../src/generated/prisma";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

async function main() {
  // First, read all target lessons
  const targetOrders = [5, 11, 13, 14, 15];
  const lessons = await prisma.lesson.findMany({
    where: { order: { in: targetOrders } },
    orderBy: { order: "asc" },
  });

  for (const lesson of lessons) {
    console.log(`\n=== Lesson ${lesson.order}: ${lesson.title} ===`);
    console.log(`Subtitle: ${lesson.subtitle}`);
    console.log(`Read time: ${lesson.readTime}`);
    console.log(`Content length: ${lesson.content.length} chars`);
    console.log(`Content preview:\n${lesson.content.substring(0, 500)}...`);
    console.log("---");
  }

  // Now apply updates
  for (const lesson of lessons) {
    switch (lesson.order) {
      case 5:
        await updateLesson5(lesson);
        break;
      case 11:
        await updateLesson11(lesson);
        break;
      case 13:
        await updateLesson13(lesson);
        break;
      case 14:
        await updateLesson14(lesson);
        break;
      case 15:
        await updateLesson15(lesson);
        break;
    }
  }

  console.log("\n\nDone. All lessons updated.");
}

async function updateLesson5(lesson: any) {
  let content: string = lesson.content;

  // Replace Twilio/SMS section with Resend email info
  // We need to find the SMS/Twilio mentions and replace them

  // Replace "Twilio" mentions in the context of SMS
  content = content.replace(
    /\*\*Twilio[^*]*\*\*[^]*?(?=\n\*\*|\n##|\n---|\n\n\*\*)/i,
    `**Resend (Email Delivery)**

Your emails need to actually land in inboxes. Resend handles that. It's simple, cheap, and has great deliverability out of the box.

"But what about SMS?"

Look — SMS is powerful. 98% open rates. But here's the reality: to send SMS in the US, you need A2P 10DLC verification. It's a registration process with carriers that takes weeks, costs money, and is genuinely a pain in the ass. For most people, email is the better starting point. Way simpler. Still very effective. You can always add SMS later when the volume justifies the hassle.

`
  );

  // Also catch any standalone "SMS" or "Twilio" references
  content = content.replace(/Twilio for SMS/gi, "Resend for email delivery");
  content = content.replace(/Twilio \(SMS\)/gi, "Resend (email delivery)");
  content = content.replace(/Twilio/g, "Resend");

  await prisma.lesson.update({
    where: { id: lesson.id },
    data: { content },
  });

  console.log(`\nUpdated lesson 5: ${lesson.title}`);
}

async function updateLesson11(lesson: any) {
  let content: string = lesson.content;

  // Replace "email and SMS" / "emails and SMS" / "email or SMS" with just "email"
  content = content.replace(/emails? and SMS/gi, "email");
  content = content.replace(/emails? or SMS/gi, "email");
  content = content.replace(/email\/SMS/gi, "email");
  content = content.replace(/SMS and emails?/gi, "email");
  content = content.replace(/SMS or emails?/gi, "email");
  content = content.replace(/SMS\/email/gi, "email");
  // Standalone SMS references in context of sending
  content = content.replace(/sends? (?:them )?an? SMS/gi, "sends an email");
  content = content.replace(/send (?:them )?(?:an? )?SMS/gi, "send an email");
  content = content.replace(/an SMS/gi, "an email");
  content = content.replace(/a SMS/gi, "an email");

  await prisma.lesson.update({
    where: { id: lesson.id },
    data: { content },
  });

  console.log(`\nUpdated lesson 11: ${lesson.title}`);
}

async function updateLesson13(lesson: any) {
  let content: string = lesson.content;

  // Remove SMS mentions alongside email
  content = content.replace(/emails? and SMS/gi, "email");
  content = content.replace(/emails? or SMS/gi, "email");
  content = content.replace(/email\/SMS/gi, "email");
  content = content.replace(/SMS and emails?/gi, "email");
  content = content.replace(/SMS or emails?/gi, "email");
  content = content.replace(/SMS\/email/gi, "email");
  content = content.replace(/\(and SMS\)/gi, "");
  content = content.replace(/\(or SMS\)/gi, "");

  await prisma.lesson.update({
    where: { id: lesson.id },
    data: { content },
  });

  console.log(`\nUpdated lesson 13: ${lesson.title}`);
}

async function updateLesson14(lesson: any) {
  const newSubtitle = "Why it works, why it's a pain, and when to add it";
  const newReadTime = "3 min read";

  const newContent = `SMS is the most effective communication channel that exists. And you're not going to use it yet. Here's why.

## The numbers are stupid good

98% open rates. That's not a typo. Compare that to email at ~20%.

The average person checks a text within 3 minutes of receiving it. Email? Hours. Days. Never.

So why the hell aren't we starting with SMS?

## Because A2P 10DLC is a nightmare

In 2023, US carriers started cracking down on business texting. They created something called A2P 10DLC — "Application to Person 10-Digit Long Code."

In plain English: if you're a business sending texts through software (which you are), you need to register with the carriers first.

Here's what that looks like:

- **Brand registration** — You register your business with The Campaign Registry (TCR). Name, EIN, address, all of it.
- **Campaign registration** — You describe what you're sending and why. Each "campaign" (use case) needs separate approval.
- **Carrier review** — The big carriers (T-Mobile, AT&T, Verizon) review your registration. This can take days to weeks.
- **Fees** — Monthly fees for your campaign, per-message fees on top of Twilio's fees.
- **Rejection risk** — If your use case isn't clear, you get denied and start over.

It's a lot. And if you skip it? Your messages get filtered or blocked entirely.

## The toll-free alternative

There's a slightly easier path: toll-free numbers. The verification process is simpler and faster than 10DLC. But you still need approval, and throughput limits are lower.

It's a decent middle ground if you really want SMS early.

## Why email via Resend is the move for v1

Here's the thing — email still works extremely well for nurture sequences. Especially behavior-based ones.

Resend gives you:
- Dead-simple API
- Great deliverability out of the box
- Cheap as hell (free tier covers most early-stage usage)
- No carrier registration, no verification headaches

You're building v1 of your Client Engine. The goal is to get leads in, nurture them, and book calls. Email does that. Start there.

## When to add SMS

Add SMS when:
- You have consistent lead flow and email is converting
- You want to boost response rates on high-intent moments (like booking reminders)
- You're willing to spend a few days on the 10DLC registration process

When you're ready, you can use Twilio + Claude Code to build it right into your existing system. The nurture infrastructure you're building now is designed to support multiple channels — email is just the first one.

Don't let perfect be the enemy of shipped.`;

  await prisma.lesson.update({
    where: { id: lesson.id },
    data: {
      content: newContent,
      subtitle: newSubtitle,
      readTime: newReadTime,
    },
  });

  console.log(`\nUpdated lesson 14: ${lesson.title}`);
  console.log(`  New subtitle: ${newSubtitle}`);
  console.log(`  New read time: ${newReadTime}`);
}

async function updateLesson15(lesson: any) {
  let content: string = lesson.content;

  // Replace "email or SMS" / "email and SMS" with just "email"
  content = content.replace(/emails? and SMS/gi, "email");
  content = content.replace(/emails? or SMS/gi, "email");
  content = content.replace(/email\/SMS/gi, "email");
  content = content.replace(/SMS and emails?/gi, "email");
  content = content.replace(/SMS or emails?/gi, "email");
  content = content.replace(/SMS\/email/gi, "email");
  content = content.replace(/via SMS/gi, "via email");
  content = content.replace(/an SMS/gi, "an email");
  content = content.replace(/send SMS/gi, "send email");
  content = content.replace(/sends SMS/gi, "sends email");

  await prisma.lesson.update({
    where: { id: lesson.id },
    data: { content },
  });

  console.log(`\nUpdated lesson 15: ${lesson.title}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
