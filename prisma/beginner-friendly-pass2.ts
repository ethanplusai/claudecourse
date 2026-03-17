import "dotenv/config";
import { PrismaClient } from "../src/generated/prisma";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

interface Patch {
  lesson: number;
  find: string;
  replace: string;
}

const patches: Patch[] = [

  // ============================================================
  // LESSON 2 — CLI mention is different in DB than in update-content.ts
  // ============================================================
  {
    lesson: 2,
    find: `not a chatbot. It's a CLI tool — a command-line development environment that reads your codebase, writes code, runs commands, and builds real applications.`,
    replace: `not a chatbot. It's a CLI tool (command-line interface — a tool you control by typing text commands instead of clicking buttons). It's a command-line development environment that runs in your terminal (the app on your computer where you type those commands — on Mac it's called Terminal, on Windows it's Command Prompt or PowerShell). It reads your codebase, writes code, runs commands, and builds real applications.`,
  },
  {
    lesson: 2,
    find: `With real files, real database migrations, real deployments.`,
    replace: `With real files, real database migrations (changes to how your data is organized), real deployments (making your site live on the internet).`,
  },

  // ============================================================
  // LESSON 5 — The setup commands block is different in the DB
  // ============================================================
  {
    lesson: 5,
    find: `looks like:

\`\`\`bash
# Install Claude Code
npm install -g @anthropic-ai/claude-code`,
    replace: `looks like:

If you've never opened a terminal before, don't panic. You're just typing short instructions. Claude Code handles the hard parts. You're not becoming a programmer — you're using a tool.

\`\`\`bash
# Install Claude Code (one-time setup)
npm install -g @anthropic-ai/claude-code`,
  },
  {
    lesson: 5,
    find: `# Install dependencies and set up database
npm install
npx prisma migrate dev`,
    replace: `# Install dependencies (downloads everything the project needs) and set up database (creates the tables where your data lives)
npm install
npx prisma migrate dev`,
  },

  // ============================================================
  // LESSON 7 — npm install and prisma commands
  // ============================================================
  {
    lesson: 7,
    find: `# Install everything
npm install

# Set up the database
npx prisma migrate dev --name init
npx prisma db seed`,
    replace: `# Install everything (one-time setup — downloads all the software your project needs)
npm install

# Set up the database (these commands create the tables where your data will live — think of it like setting up filing cabinets)
npx prisma migrate dev --name init
npx prisma db seed`,
  },

  // ============================================================
  // LESSON 15 — Event tracking prompt is slightly different
  // ============================================================
  {
    lesson: 15,
    find: `Add event tracking to the platform. Track these events and send webhooks to GHL:
- lesson_completed (include lesson number and total lessons completed)
- booking_cta_clicked (include timestamp)
- user_inactive (fire if no activity for 48+ hours — this should run as a scheduled job)`,
    replace: `Add event tracking to the platform. Track these events and send webhooks to GHL:
- lesson_completed (include lesson number and total lessons completed)
- booking_cta_clicked (include timestamp)
- user_inactive (fire if no activity for 48+ hours — this should run as a scheduled job, meaning an automatic task that runs on a timer)`,
  },
  {
    lesson: 15,
    find: `Claude Code will add the tracking code and webhook calls. Test each one.`,
    replace: `Don't worry about understanding every technical term in that prompt — just paste it into Claude Code and it handles the implementation. You're describing WHAT you want, not HOW to build it.

Claude Code will add the tracking code and webhook calls. Test each one.`,
  },
];

async function main() {
  console.log(`Applying ${patches.length} second-pass patches...\n`);

  let applied = 0;
  let skipped = 0;
  let failed = 0;

  for (const patch of patches) {
    const lesson = await prisma.lesson.findUnique({
      where: { order: patch.lesson },
    });

    if (!lesson) {
      console.log(`[SKIP] Lesson ${patch.lesson} not found`);
      skipped++;
      continue;
    }

    if (!lesson.content.includes(patch.find)) {
      if (lesson.content.includes(patch.replace)) {
        console.log(`[SKIP] Lesson ${patch.lesson}: already patched — "${patch.find.slice(0, 60)}..."`);
        skipped++;
      } else {
        console.log(`[FAIL] Lesson ${patch.lesson}: text not found — "${patch.find.slice(0, 60)}..."`);
        failed++;
      }
      continue;
    }

    const updatedContent = lesson.content.replace(patch.find, patch.replace);
    await prisma.lesson.update({
      where: { order: patch.lesson },
      data: { content: updatedContent },
    });

    console.log(`[OK]   Lesson ${patch.lesson}: patched — "${patch.find.slice(0, 60)}..."`);
    applied++;
  }

  console.log(`\nDone! Applied: ${applied} | Skipped: ${skipped} | Failed: ${failed}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
