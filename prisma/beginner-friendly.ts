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
  // LESSON 1 — First mention of "deploy"
  // ============================================================
  {
    lesson: 1,
    find: `Something you can deploy in a single weekend`,
    replace: `Something you can deploy (make live on the internet) in a single weekend`,
  },

  // ============================================================
  // LESSON 2 — First mentions of CRM, CLI, terminal, codebase,
  //            database, deploy
  // ============================================================
  {
    lesson: 2,
    find: `They set up an email tool. Then a CRM.`,
    replace: `They set up an email tool. Then a CRM (Customer Relationship Manager — software that tracks your leads and automates follow-up).`,
  },
  {
    lesson: 2,
    find: `It's built on Next.js and Prisma. It runs as a real web application. Prospects sign up, create an account, and experience structured training content that teaches them something genuinely useful.`,
    replace: `It's built on Next.js (the framework that creates the pages people see) and Prisma (the tool that talks to your database — where all your user data, lessons, and progress live). It runs as a real web application. Prospects sign up, create an account, and experience structured training content that teaches them something genuinely useful.`,
  },
  {
    lesson: 2,
    find: `Claude Code is a CLI tool. CLI stands for command-line interface. It runs in your terminal.`,
    replace: `Claude Code is a CLI tool (command-line interface — a tool you control by typing text commands instead of clicking buttons). It runs in your terminal (the app on your computer where you type those commands — on Mac it's called Terminal, on Windows it's called Command Prompt or PowerShell).`,
  },
  {
    lesson: 2,
    find: `It reads your entire project — every file, every folder, every config. It writes code, creates files, runs commands, installs packages, creates database tables, and deploys applications.`,
    replace: `It reads your entire project — every file, every folder, every config. It writes code, creates files, runs commands, installs packages, creates database tables (a database is just an organized place where your app stores information — users, lessons, progress), and deploys applications.`,
  },

  // ============================================================
  // LESSON 5 — Tech stack lesson. API key, npm, localhost,
  //            repository, environment variables, Vercel, webhook
  // ============================================================
  {
    lesson: 5,
    find: `It's a command-line tool — a CLI — that reads your entire codebase, writes files, runs commands, creates database migrations, and builds real applications.`,
    replace: `It's a command-line tool — a CLI (a tool that runs in your terminal — the black window where you type commands) — that reads your entire codebase, writes files, runs commands, creates database migrations (changes to how your data is organized), and builds real applications.`,
  },
  {
    lesson: 5,
    find: `You install it globally with npm. You run it in your terminal.`,
    replace: `You install it globally with npm (Node's package manager — it installs software for you). You run it in your terminal.`,
  },
  {
    lesson: 5,
    find: `Here's a preview of the setup commands you'll run in Module 2:`,
    replace: `If you've never opened a terminal before, don't panic. You're just typing short instructions. Claude Code handles the hard parts. You're not becoming a programmer — you're using a tool.

Here's a preview of the setup commands you'll run in Module 2:`,
  },
  {
    lesson: 5,
    find: `# Install dependencies
npm install`,
    replace: `# Install dependencies (one-time setup — downloads everything the project needs to run)
npm install`,
  },
  {
    lesson: 5,
    find: `# Set up environment variables
cp .env.example .env`,
    replace: `# Set up environment variables (secret settings your app needs, like passwords and API keys)
cp .env.example .env`,
  },
  {
    lesson: 5,
    find: `# Set up the database
npx prisma migrate dev
npx prisma db seed`,
    replace: `# Set up the database (these commands create the tables where your data will live)
npx prisma migrate dev
npx prisma db seed`,
  },
  {
    lesson: 5,
    find: `webhook integrations`,
    replace: `webhook integrations (a webhook is an automatic notification your platform sends to another tool)`,
  },
  {
    lesson: 5,
    find: `**Claude Code** — Anthropic API usage. Pay for what you use. Building a full platform might cost $10-30 in API calls.`,
    replace: `**Claude Code** — Anthropic API usage (an API key is a password that lets Claude Code connect to Claude's brain). Pay for what you use. Building a full platform might cost $10-30 in API calls.`,
  },
  {
    lesson: 5,
    find: `**Vercel** — Free tier hosts your platform. You won't outgrow free tier for a long time.`,
    replace: `**Vercel** — Free tier hosts your platform (makes it live on the internet so anyone can visit it). You won't outgrow free tier for a long time.`,
  },
  {
    lesson: 5,
    find: `Sign up for the tools you don't already have. At minimum: an Anthropic API account (for Claude Code), a Vercel account (for hosting), and a GoHighLevel account (for CRM and automation).`,
    replace: `Sign up for the tools you don't already have. At minimum: an Anthropic API account (for Claude Code), a Vercel account (for hosting — putting your site on the internet), and a GoHighLevel account (for CRM and automation).`,
  },

  // ============================================================
  // LESSON 7 — The most technical lesson. Terminal, Node.js,
  //            npm install, API key, git clone, localhost,
  //            repository, environment variables, Prisma commands
  // ============================================================
  {
    lesson: 7,
    find: `Claude Code is a CLI tool. CLI stands for command-line interface. It runs in your terminal. It reads your entire project`,
    replace: `Claude Code is a CLI tool. CLI stands for command-line interface — instead of clicking buttons, you type short text commands. It runs in your terminal (on Mac, search for "Terminal" in Spotlight; on Windows, search for "Command Prompt" or "PowerShell"). It reads your entire project`,
  },
  {
    lesson: 7,
    find: `No coding experience required. You need to be able to describe what you want clearly. That's the only skill that matters.`,
    replace: `No coding experience required. Seriously. You need to be able to describe what you want clearly. That's the only skill that matters. You're not becoming a developer — you're telling a developer what to build. The developer just happens to be AI.`,
  },
  {
    lesson: 7,
    find: `**Step 1: Install Node.js**

Claude Code runs on Node.js. If you don't have it installed, go to nodejs.org and download the LTS (Long Term Support) version. Run the installer. That's it.

To verify it's installed, open your terminal and type:`,
    replace: `**Step 1: Install Node.js**

Claude Code runs on Node.js (a platform that lets tools like Claude Code run on your computer). If you don't have it installed, go to nodejs.org and download the LTS (Long Term Support) version. Run the installer. That's it.

To verify it's installed, open your terminal and type:`,
  },
  {
    lesson: 7,
    find: `npm install -g @anthropic-ai/claude-code
\`\`\`

This installs Claude Code globally on your machine.`,
    replace: `npm install -g @anthropic-ai/claude-code
\`\`\`

This is a one-time setup — you won't need to run this again. It installs Claude Code globally on your machine.`,
  },
  {
    lesson: 7,
    find: `**Step 3: Get an Anthropic API Key**

Go to console.anthropic.com. Create an account if you don't have one. Navigate to API Keys and generate a new key.`,
    replace: `**Step 3: Get an Anthropic API Key**

An API key is like a password that lets Claude Code connect to Claude's brain. Go to console.anthropic.com. Create an account if you don't have one. Navigate to API Keys and generate a new key.`,
  },
  {
    lesson: 7,
    find: `Clone it from the repository:`,
    replace: `Clone it (download a copy) from the repository (a project folder hosted on GitHub):`,
  },
  {
    lesson: 7,
    find: `\`\`\`bash
npm install
\`\`\`

This installs all the project dependencies. Takes about a minute.`,
    replace: `\`\`\`bash
npm install
\`\`\`

This installs all the project dependencies (the extra software your project needs to work). One-time thing. Takes about a minute.`,
  },
  {
    lesson: 7,
    find: `Next, set up your environment variables. Copy the example env file:`,
    replace: `Next, set up your environment variables (secret settings your app needs — like your database password and API keys). Copy the example env file:`,
  },
  {
    lesson: 7,
    find: `Then run the database setup:

\`\`\`bash
npx prisma migrate dev
npx prisma db seed
\`\`\`

The first command creates all the database tables. The second command populates them with sample modules and lessons.`,
    replace: `Then run the database setup. These commands just tell Prisma where your data should live and how it's organized — think of it like creating the filing cabinets before you put files in them:

\`\`\`bash
npx prisma migrate dev
npx prisma db seed
\`\`\`

The first command creates all the database tables. The second command populates them with sample modules and lessons.`,
  },
  {
    lesson: 7,
    find: `Open your browser and go to \`http://localhost:3000\`.`,
    replace: `Open your browser and go to \`http://localhost:3000\` (localhost just means your computer is acting as a temporary website — only you can see it).`,
  },
  {
    lesson: 7,
    find: `- \`.env\` — Your environment variables (database URL, API keys). Never share this file.`,
    replace: `- \`.env\` — Your environment variables (secret settings like your database password and API keys). Never share this file.`,
  },

  // ============================================================
  // LESSON 8 — Customizing the platform. Deploy, GitHub repo,
  //            DNS, Tailwind
  // ============================================================
  {
    lesson: 8,
    find: `you'll want to deploy it with a custom domain.`,
    replace: `you'll want to deploy it (make it live on the internet) with a custom domain.`,
  },
  {
    lesson: 8,
    find: `1. Push your project to a GitHub repository
2. Connect that repo to Vercel`,
    replace: `1. Push your project to a GitHub repository (a folder for your project, hosted online on GitHub — think of it as cloud storage for code)
2. Connect that repo to Vercel`,
  },
  {
    lesson: 8,
    find: `4. Update your DNS records to point to Vercel`,
    replace: `4. Update your DNS records to point to Vercel (DNS is the system that connects your domain name to where your site actually lives — your domain registrar will have instructions)`,
  },
  {
    lesson: 8,
    find: `Deploy to Vercel if you're ready. If not, at least push to GitHub so you have a backup.`,
    replace: `Deploy to Vercel (make it live) if you're ready. If not, at least push to GitHub so you have a backup.`,
  },

  // ============================================================
  // LESSON 9 — Course structuring. Seed file, database
  // ============================================================
  {
    lesson: 9,
    find: `Then update your database seed file:

"Update the prisma seed file with these modules and lessons: [paste the structure]. Keep the same format as the existing seed file."

Run the seed command and your platform now has your custom course structure.`,
    replace: `Then update your database seed file (the file that tells your database what modules and lessons to create):

"Update the prisma seed file with these modules and lessons: [paste the structure]. Keep the same format as the existing seed file."

Run the seed command (this loads your new structure into the database) and your platform now has your custom course structure.`,
  },

  // ============================================================
  // LESSON 10 — Writing lessons. CLAUDE.md, project root
  // ============================================================
  {
    lesson: 10,
    find: `A CLAUDE.md file sits in your project root and gives Claude Code persistent instructions.`,
    replace: `A CLAUDE.md file sits in your project root (the main folder of your project) and gives Claude Code persistent instructions.`,
  },

  // ============================================================
  // LESSON 12 — CRM setup, webhooks, POST requests, tags
  // ============================================================
  {
    lesson: 12,
    find: `The connection method: webhooks.

A webhook is a URL that your platform hits with data whenever an event occurs. GHL gives you webhook URLs for triggering automations. Your platform sends POST requests to those URLs with the relevant data.`,
    replace: `The connection method: webhooks (automatic notifications your platform sends to another tool whenever something happens).

Here's how it works in plain English: when someone completes a lesson on your platform, your platform sends a message to GHL saying "hey, this person just finished Lesson 3." GHL receives that message and does whatever you've told it to do — add a tag, send an email, update a pipeline stage. The technical term for these messages is "POST requests," but you don't need to understand the mechanics. Claude Code handles all of that.`,
  },

  // ============================================================
  // LESSON 15 — Behavior routing, event tracking, scheduled jobs
  // ============================================================
  {
    lesson: 15,
    find: `Add event tracking to the platform. Track these events and send webhooks to GHL:

1. lesson_completed — include lesson number, lesson title, and total lessons completed out of total available
2. booking_cta_clicked — include user email and timestamp
3. user_inactive — fire if no activity for 48+ hours (run as a daily scheduled job, check all users)
4. course_progress_milestone — fire when user hits 25%, 50%, 75%, 100% completion

For each event, send a POST request to the GHL webhook URL stored in the WEBHOOK_URL environment variable. Include the user's email as the primary identifier.`,
    replace: `Add event tracking to the platform. Track these events and send webhooks to GHL:

1. lesson_completed — include lesson number, lesson title, and total lessons completed out of total available
2. booking_cta_clicked — include user email and timestamp
3. user_inactive — fire if no activity for 48+ hours (run as a daily scheduled job — an automatic task that runs on a timer, check all users)
4. course_progress_milestone — fire when user hits 25%, 50%, 75%, 100% completion

For each event, send a POST request to the GHL webhook URL stored in the WEBHOOK_URL environment variable (a setting in your .env file). Include the user's email as the primary identifier.

Don't worry about understanding every technical term here — just paste this prompt into Claude Code and it handles the implementation. You're describing WHAT you want, not HOW to build it.`,
  },

  // ============================================================
  // LESSON 14 — Twilio, .env file
  // ============================================================
  {
    lesson: 14,
    find: `4. Add those to your \`.env\` file`,
    replace: `4. Add those to your \`.env\` file (the file that stores your app's secret settings — passwords, API keys, etc.)`,
  },

  // ============================================================
  // LESSON 25 — Deploy, GitHub, environment variables, webhooks
  // ============================================================
  {
    lesson: 25,
    find: `1. Push your project to GitHub
2. Go to vercel.com and sign in with GitHub
3. Import your repository
4. Add your environment variables (DATABASE_URL, API keys, etc.)
5. Deploy`,
    replace: `1. Push your project to GitHub (upload your code to the cloud)
2. Go to vercel.com and sign in with GitHub
3. Import your repository (tell Vercel which project to host)
4. Add your environment variables (your secret settings — DATABASE_URL, API keys, etc.)
5. Deploy (make it live)`,
  },
  {
    lesson: 25,
    find: `**Webhooks not firing.** Check the URL format, the HTTP method (should be POST), and the payload structure. GHL has specific requirements for webhook data format.`,
    replace: `**Webhooks not firing.** Check the URL format and make sure GHL is set up to receive the data. If this sounds confusing, just tell Claude Code: "My webhooks to GHL aren't working — can you debug them?" It'll figure out what's wrong.`,
  },

  // ============================================================
  // LESSON 28 — CLI reference
  // ============================================================
  {
    lesson: 28,
    find: `You just did it with a boilerplate, a CLI tool, and a clear architecture.`,
    replace: `You just did it with a boilerplate (starter template), a CLI tool (Claude Code), and a clear architecture.`,
  },
];

async function main() {
  console.log(`Applying ${patches.length} beginner-friendly patches...\n`);

  let applied = 0;
  let skipped = 0;
  let failed = 0;

  for (const patch of patches) {
    // Fetch the lesson
    const lesson = await prisma.lesson.findUnique({
      where: { order: patch.lesson },
    });

    if (!lesson) {
      console.log(`[SKIP] Lesson ${patch.lesson} not found in database`);
      skipped++;
      continue;
    }

    // Check if the find text exists
    if (!lesson.content.includes(patch.find)) {
      // Check if already patched
      if (lesson.content.includes(patch.replace)) {
        console.log(`[SKIP] Lesson ${patch.lesson}: already patched — "${patch.find.slice(0, 60)}..."`);
        skipped++;
      } else {
        console.log(`[FAIL] Lesson ${patch.lesson}: text not found — "${patch.find.slice(0, 60)}..."`);
        failed++;
      }
      continue;
    }

    // Apply the patch
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
