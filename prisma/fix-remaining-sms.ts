import "dotenv/config";
import { PrismaClient } from "../src/generated/prisma";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

async function main() {
  // Fix Lesson 5 - clean up the messy duplicate section and remaining SMS refs
  const lesson5 = await prisma.lesson.findFirst({ where: { order: 5 } });
  if (lesson5) {
    let content: string = lesson5.content;

    // Replace the broken "Email (Resend) and SMS (Resend)" section header and its content
    // plus the duplicate Resend block that got inserted
    content = content.replace(
      `## Email (Resend) and SMS (Resend)

Your platform needs to send transactional emails and behavior-triggered messages.

**Resend** handles email. It's clean, developer-friendly, and has a generous free tier. Claude Code can set up the integration in minutes.

**Resend (Email Delivery)**

Your emails need to actually land in inboxes. Resend handles that. It's simple, cheap, and has great deliverability out of the box.

"But what about SMS?"

Look — SMS is powerful. 98% open rates. But here's the reality: to send SMS in the US, you need A2P 10DLC verification. It's a registration process with carriers that takes weeks, costs money, and is genuinely a pain in the ass. For most people, email is the better starting point. Way simpler. Still very effective. You can always add SMS later when the volume justifies the hassle.

`,
      `## Email Delivery (Resend)

Your platform needs to send transactional emails and behavior-triggered messages. Those emails need to actually land in inboxes — not spam folders.

Resend handles that. It's clean, developer-friendly, has great deliverability out of the box, and the free tier covers 3,000 emails/month. Claude Code can set up the integration in minutes.

`
    );

    // Fix the cost breakdown section that still mentions SMS
    content = content.replace(
      `- **Resend** — Free tier covers 3,000 emails/month. Plenty for launch.
- **Resend** — Pay per message. A few cents per SMS.`,
      `- **Resend** — Free tier covers 3,000 emails/month. Plenty for launch.`
    );

    await prisma.lesson.update({
      where: { id: lesson5.id },
      data: { content },
    });
    console.log("Fixed lesson 5");
  }

  // Fix Lesson 11 - remove "welcome SMS"
  const lesson11 = await prisma.lesson.findFirst({ where: { order: 11 } });
  if (lesson11) {
    let content: string = lesson11.content;

    // Fix "Send welcome email + welcome SMS"
    content = content.replace(
      "Send welcome email + welcome SMS.",
      "Send welcome email."
    );

    await prisma.lesson.update({
      where: { id: lesson11.id },
      data: { content },
    });
    console.log("Fixed lesson 11");
  }

  // Fix Lesson 13 - remove SMS reference in "Next Up"
  const lesson13 = await prisma.lesson.findFirst({ where: { order: 13 } });
  if (lesson13) {
    let content: string = lesson13.content;

    // Fix the "Next Up" section that references SMS touchpoints
    content = content.replace(
      "In the next lesson, you'll add SMS touchpoints to the system. Three text messages. Simple. Effective. Not annoying.",
      "In the next lesson, we'll talk about SMS — why it's powerful, why it's a pain to set up, and when it makes sense to add it to your system."
    );

    await prisma.lesson.update({
      where: { id: lesson13.id },
      data: { content },
    });
    console.log("Fixed lesson 13");
  }

  console.log("\nAll remaining SMS references fixed.");
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(() => prisma.$disconnect());
