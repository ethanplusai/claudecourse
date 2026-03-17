import "dotenv/config";
import { PrismaClient } from "../src/generated/prisma";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

async function main() {
  const lessons = await prisma.lesson.findMany({
    where: { order: { in: [5, 11, 13, 14, 15] } },
    orderBy: { order: "asc" },
  });

  for (const lesson of lessons) {
    console.log(`\n${"=".repeat(60)}`);
    console.log(`LESSON ${lesson.order}: ${lesson.title}`);
    console.log(`Subtitle: ${lesson.subtitle}`);
    console.log(`Read time: ${lesson.readTime}`);
    console.log(`${"=".repeat(60)}`);
    console.log(lesson.content);

    // Check for remaining SMS/Twilio references
    const smsMatches = lesson.content.match(/\bSMS\b/gi);
    const twilioMatches = lesson.content.match(/\bTwilio\b/gi);
    if (lesson.order !== 14) {
      if (smsMatches) console.log(`\n⚠ Found ${smsMatches.length} SMS references in lesson ${lesson.order}`);
      if (twilioMatches) console.log(`\n⚠ Found ${twilioMatches.length} Twilio references in lesson ${lesson.order}`);
      if (!smsMatches && !twilioMatches) console.log(`\n✓ No SMS/Twilio references found`);
    } else {
      console.log(`\n✓ Lesson 14 rewritten (SMS/Twilio references expected here)`);
    }
  }
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(() => prisma.$disconnect());
