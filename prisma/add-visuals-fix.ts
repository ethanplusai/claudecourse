import "dotenv/config";
import { PrismaClient } from "../src/generated/prisma";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

interface Patch {
  lesson: number;
  after: string;
  insert: string;
}

const patches: Patch[] = [
  // Lesson 5: near the end
  {
    lesson: 5,
    after: "exist outside of your head",
    insert: `\n\nHere's a preview of what the setup looks like:\n\n\`\`\`bash
# Install Claude Code
npm install -g @anthropic-ai/claude-code

# Clone the boilerplate
git clone https://github.com/yourusername/client-engine-boilerplate.git
cd client-engine-boilerplate

# Install dependencies and set up database
npm install
npx prisma migrate dev
npx prisma db seed

# Start the platform
npm run dev
\`\`\`\n\n`,
  },

  // Lesson 6: after first paragraph
  {
    lesson: 6,
    after: "just collect an email",
    insert: `\n\n![A landing page that leads with value — not a pitch](/lessons/screenshots/landing-full.png)\n\n`,
  },

  // Lesson 7: after "CLI stands for command-line interface"
  {
    lesson: 7,
    after: "command-line interface",
    insert: `\n\n\`\`\`bash
# Step 1: Install Claude Code globally
npm install -g @anthropic-ai/claude-code

# Step 2: Set your API key
export ANTHROPIC_API_KEY=your-key-here

# Step 3: Navigate to any project and start Claude Code
cd your-project
claude
\`\`\`\n\n> You'll need an Anthropic API key. Get one at console.anthropic.com. The cost is minimal — a few dollars for an entire project build.\n\n`,
  },
  {
    lesson: 7,
    after: "creates databas",
    insert: `\n\n\`\`\`bash
# Clone the Client Engine boilerplate
git clone [boilerplate-repo-url]
cd client-engine-boilerplate

# Install everything
npm install

# Set up the database
npx prisma migrate dev --name init
npx prisma db seed

# Start the dev server
npm run dev
\`\`\`\n\nOpen http://localhost:3000 in your browser. You should see the default platform.\n\n![Your platform running locally — ready to customize](/lessons/screenshots/landing-hero.png)\n\n`,
  },

  // Lesson 8: after "Make It Yours"
  {
    lesson: 8,
    after: "Make It Yours",
    insert: `\n\nFirst, create a CLAUDE.md file so Claude Code knows your voice and style:\n\n[Download the CLAUDE.md template](/lessons/downloads/claude-md-template.md){.download}\n\n`,
  },

  // Lesson 9: after "overthinks"
  {
    lesson: 9,
    after: "everyone overthinks",
    insert: `\n\nUse this prompt to generate your course outline:\n\n\`\`\`prompt
My audience is [WHO]. They want to [OUTCOME].
My truth list (from Lesson 4) includes these key things they need to understand:
[PASTE YOUR TRUTH LIST]

Design a course structure with 3-5 modules and 3-5 lessons per module.
Each lesson should:
- Teach ONE concept
- Be 4-7 minutes of reading
- End with a clear action item
- Build on the previous lesson

Give me: module titles, lesson titles, subtitles, and one-line descriptions.
\`\`\`\n\n`,
  },

  // Lesson 13: after "Action Items"
  {
    lesson: 13,
    after: "Draft your 6-email sequence",
    insert: `\n\n\`\`\`prompt
Write a 6-email nurture sequence for my platform.

My audience: [WHO]
My platform teaches: [WHAT]
My paid offer: [SERVICE]

Email roles: 1) Welcome 2) Teach 3) Reframe 4) Proof 5) Address skepticism 6) Invite

Each email: subject line under 7 words, body under 150 words,
use [FIRST_NAME] for personalization, direct casual tone.
\`\`\`\n\n`,
  },
];

async function main() {
  console.log(`Applying ${patches.length} fix patches...\n`);

  for (const patch of patches) {
    const lesson = await prisma.lesson.findUnique({ where: { order: patch.lesson } });
    if (!lesson) { console.log(`  ✗ Lesson ${patch.lesson} not found`); continue; }

    const idx = lesson.content.toLowerCase().indexOf(patch.after.toLowerCase());
    if (idx === -1) { console.log(`  ✗ Lesson ${patch.lesson}: couldn't find "${patch.after.substring(0, 40)}..."`); continue; }

    const afterIdx = lesson.content.indexOf("\n\n", idx);
    const insertPoint = afterIdx !== -1 ? afterIdx : lesson.content.length;
    const updated = lesson.content.slice(0, insertPoint) + patch.insert + lesson.content.slice(insertPoint);

    await prisma.lesson.update({ where: { order: patch.lesson }, data: { content: updated } });
    console.log(`  ✓ Lesson ${patch.lesson}: inserted after "${patch.after.substring(0, 40)}..."`);
  }

  console.log("\nDone!");
}

main().then(() => prisma.$disconnect()).catch((e) => { console.error(e); prisma.$disconnect(); });
