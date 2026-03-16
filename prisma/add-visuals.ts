import "dotenv/config";
import { PrismaClient } from "../src/generated/prisma";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

// Each patch: insert content AFTER a specific line/phrase in a lesson
interface Patch {
  lesson: number;
  after: string; // insert after the paragraph containing this text
  insert: string; // content to insert
}

const patches: Patch[] = [

  // ==================== LESSON 1 ====================
  {
    lesson: 1,
    after: "you're literally inside it",
    insert: `\n\n![This is the platform you're inside right now — built with Claude Code](/lessons/screenshots/landing-hero.png)\n\n`,
  },
  {
    lesson: 1,
    after: "behavior monitoring",
    insert: `\n\n![The portal dashboard tracks your progress and adapts your experience](/lessons/screenshots/portal-dashboard.png)\n\n`,
  },

  // ==================== LESSON 2 ====================
  {
    lesson: 2,
    after: "How Everything Connects",
    insert: `\n\n\`\`\`text
Traffic → Lead Magnet (Platform) → Nurture Engine (Email/SMS) → Booking → Feedback Loop
   ↑                                                                          |
   └──────────────────────────────────────────────────────────────────────────┘
\`\`\`\n\n`,
  },

  // ==================== LESSON 3 ====================
  {
    lesson: 3,
    after: "you're probably doing it right",
    insert: `\n\nOpen Claude and try this prompt:\n\n\`\`\`prompt
I run a [YOUR SERVICE] business. My target audience is [WHO].
Help me fill in this sentence clearly and specifically:
"I help ___ get ___ without ___."
Give me 5 variations, ranked from most specific to least.
\`\`\`\n\n`,
  },

  // ==================== LESSON 4 ====================
  {
    lesson: 4,
    after: "Ask for thinking",
    insert: `\n\n\`\`\`prompt
My audience is [DESCRIBE YOUR AUDIENCE].
I help them [DESCRIBE WHAT YOU DO].
My paid offer is [DESCRIBE YOUR SERVICE].

What does this person need to believe, understand, and trust
before they are ready to buy from me?

Give me a raw list of:
- What they misunderstand
- What they overestimate
- What they underestimate
- What they're skeptical about
- What they fear
- What they need clarity on
\`\`\`\n\n`,
  },
  {
    lesson: 4,
    after: "Discovery → Value → Trust → Readiness → Conversation",
    insert: `\n\n\`\`\`prompt
Based on the truth list above, help me map my Client Engine.

For each stage, tell me what must happen:
- Discovery: How do they first find me?
- Value: What free asset earns their attention?
- Trust: What content removes skepticism?
- Readiness: What behavior signals they're ready to buy?
- Conversation: How does the booking happen naturally?

Be specific to my audience and offer.
\`\`\`\n\n`,
  },

  // ==================== LESSON 5 ====================
  {
    lesson: 5,
    after: "Move on when you're ready",
    insert: `\n\nHere's what the setup looks like when you get to Module 2:\n\n\`\`\`bash
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

  // ==================== LESSON 6 ====================
  {
    lesson: 6,
    after: "landing page that leads with value",
    insert: `\n\n![The landing page — no pitch, just value. Clean, clear, compelling.](/lessons/screenshots/landing-full.png)\n\n`,
  },
  {
    lesson: 6,
    after: "signup",
    insert: `\n\n![Simple signup — name, email or phone, password. That's it.](/lessons/screenshots/signup-page.png)\n\n`,
  },
  {
    lesson: 6,
    after: "portal with progress tracking",
    insert: `\n\n![The portal — progress tracking, module cards, consultation CTA](/lessons/screenshots/portal-dashboard.png)\n\n`,
  },
  {
    lesson: 6,
    after: "sequential lessons that build trust",
    insert: `\n\n![Module page with sequential lessons — locked until you complete the previous one](/lessons/screenshots/module-page.png)\n\n`,
  },

  // ==================== LESSON 7 ====================
  {
    lesson: 7,
    after: "How to install",
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
    after: "Running the setup commands",
    insert: `\n\n\`\`\`bash
# Clone the Client Engine boilerplate
git clone [boilerplate-repo-url]
cd client-engine-boilerplate

# Install dependencies
npm install

# Set up the database (creates all tables)
npx prisma migrate dev --name init

# Seed with sample content
npx prisma db seed

# Start the dev server
npm run dev
\`\`\`\n\nOpen http://localhost:3000 in your browser. You should see the default landing page.\n\n![Your platform running locally](/lessons/screenshots/landing-hero.png)\n\n`,
  },

  // ==================== LESSON 8 ====================
  {
    lesson: 8,
    after: "How to prompt Claude Code effectively",
    insert: `\n\nHere's an example of a good first prompt:\n\n\`\`\`prompt
I'm building a lead generation platform for [YOUR AUDIENCE].
My offer is [YOUR SERVICE].

Update the landing page:
- Change the headline to focus on [THEIR MAIN PAIN POINT]
- Update the subheadline to describe [WHAT THEY GET]
- Change the feature cards to reflect these benefits: [LIST 3-4 BENEFITS]
- Keep the same clean, minimal design
- Update the footer text with my business name
\`\`\`\n\n`,
  },
  {
    lesson: 8,
    after: "CLAUDE.md",
    insert: `\n\nCreate a CLAUDE.md file in your project root so Claude Code knows your voice:\n\n[Download the CLAUDE.md template](/lessons/downloads/claude-md-template.md){.download}\n\n`,
  },

  // ==================== LESSON 9 ====================
  {
    lesson: 9,
    after: "generate your lesson outlines",
    insert: `\n\n\`\`\`prompt
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

  // ==================== LESSON 10 ====================
  {
    lesson: 10,
    after: "writing instructions",
    insert: `\n\n[Download the CLAUDE.md template](/lessons/downloads/claude-md-template.md){.download}\n\n\`\`\`prompt
Using the voice and style defined in CLAUDE.md, write Lesson [X]: "[TITLE]"

Context:
- This is lesson [X] of [TOTAL] in the module "[MODULE NAME]"
- Previous lesson covered: [TOPIC]
- This lesson should teach: [WHAT THEY LEARN]
- Action item at the end: [WHAT THEY DO]
- Target length: [X] min read (~[X] words)
- Audience: [WHO]

Write the full lesson content. Match the tone exactly.
\`\`\`\n\n`,
  },

  // ==================== LESSON 11 ====================
  {
    lesson: 11,
    after: "tracking your behavior right now",
    insert: `\n\n![Your progress is tracked in real time — this data drives the nurture system](/lessons/screenshots/portal-progress.png)\n\n`,
  },

  // ==================== LESSON 13 ====================
  {
    lesson: 13,
    after: "six email roles",
    insert: `\n\n[Download the email sequence template](/lessons/downloads/email-sequence-template.md){.download}\n\n`,
  },
  {
    lesson: 13,
    after: "draft the entire sequence",
    insert: `\n\n\`\`\`prompt
Write a 6-email nurture sequence for my platform.

My audience: [WHO]
My platform teaches: [WHAT]
My paid offer: [SERVICE]

The 6 email roles:
1. Welcome — introduce the platform, set expectations
2. Teach — share one key insight they need
3. Reframe — challenge a common assumption
4. Proof — show a real example or case study
5. Address skepticism — handle the #1 objection
6. Invite — suggest a conversation (soft CTA)

Write each email with:
- Subject line (under 7 words)
- Body text (under 150 words)
- Use [FIRST_NAME] as the personalization token
- Tone: direct, casual, no fluff
\`\`\`\n\n`,
  },

  // ==================== LESSON 14 ====================
  {
    lesson: 14,
    after: "three SMS use cases",
    insert: `\n\n\`\`\`prompt
Write 3 SMS messages for my platform nurture:

1. Welcome text (sent immediately after signup)
2. Stall nudge (sent after 2 days of inactivity)
3. Booking reminder (sent when they hit the booking threshold)

Keep each under 160 characters. Include a link placeholder.
My platform name: [NAME]
\`\`\`\n\n`,
  },

  // ==================== LESSON 15 ====================
  {
    lesson: 15,
    after: "conditional branches",
    insert: `\n\n\`\`\`text
User signs up
    │
    ├── Completes 3+ lessons in 48hrs → "Fast Mover" path
    │      └── Skip educational emails → Send case study + booking invite
    │
    ├── Completes 1 lesson, then stalls → "Staller" path
    │      └── Day 2: nudge → Day 5: re-engagement → Day 10: final attempt
    │
    └── Completes all lessons → "Completer" path
           └── Course complete email → Done-for-you pitch → Booking invite
\`\`\`\n\n`,
  },

  // ==================== LESSON 18 ====================
  {
    lesson: 18,
    after: "recruiter example",
    insert: `\n\n![The consultation CTA appears contextually — not plastered everywhere](/lessons/screenshots/consultation-cta.png)\n\n`,
  },

  // ==================== LESSON 20 ====================
  {
    lesson: 20,
    after: "Choose your primary channel",
    insert: `\n\n[Download cold outreach templates](/lessons/downloads/outreach-templates.md){.download}\n\n`,
  },

  // ==================== LESSON 21 ====================
  {
    lesson: 21,
    after: "three-message outreach sequence",
    insert: `\n\n[Download cold outreach templates (email + LinkedIn)](/lessons/downloads/outreach-templates.md){.download}\n\n`,
  },
  {
    lesson: 21,
    after: "personalize at scale",
    insert: `\n\n\`\`\`prompt
Here are 10 prospects with their name, company, and role.
For each one, write a personalized first line for my cold email.
The email offers a free [PLATFORM DESCRIPTION].
Make each first line specific to their company or role.

[PASTE YOUR PROSPECT LIST]
\`\`\`\n\n`,
  },

  // ==================== LESSON 22 ====================
  {
    lesson: 22,
    after: "batch-produce content",
    insert: `\n\n\`\`\`prompt
Create 5 LinkedIn posts for my audience of [WHO].

Post types to rotate:
1. Teaching post — share a specific insight about [TOPIC]
2. Behind-the-scenes — show how my [SYSTEM/PLATFORM] works
3. Results post — describe a specific outcome (can be hypothetical)
4. Myth-busting — challenge a common belief in [INDUSTRY]
5. Story post — share a relevant experience or lesson

Each post should:
- Be 100-200 words
- End with a CTA pointing to my free platform: [URL]
- Use a casual, direct tone — no corporate speak
\`\`\`\n\n`,
  },

  // ==================== LESSON 25 ====================
  {
    lesson: 25,
    after: "pre-launch checklist",
    insert: `\n\n[Download the complete pre-launch checklist](/lessons/downloads/pre-launch-checklist.md){.download}\n\n`,
  },
  {
    lesson: 25,
    after: "Deploying With Vercel",
    insert: `\n\n\`\`\`bash
# Push to GitHub
git add -A
git commit -m "Ready for launch"
git push origin main

# Then go to vercel.com:
# 1. Import your GitHub repo
# 2. Add environment variables (DATABASE_URL, SESSION_SECRET, etc.)
# 3. Deploy
# 4. Connect your custom domain in Settings > Domains
\`\`\`\n\n`,
  },

  // ==================== LESSON 27 ====================
  {
    lesson: 27,
    after: "Claude Code fix",
    insert: `\n\n\`\`\`prompt
Rewrite the landing page headline and subheadline.
My audience is [WHO]. The training teaches [WHAT].
Make it clear, specific, and compelling. No hype.
Give me 3 variations to test.
\`\`\`\n\n`,
  },

  // ==================== LESSON 28 ====================
  {
    lesson: 28,
    after: "Claude Code builds it",
    insert: `\n\n\`\`\`prompt
Add a self-assessment quiz to the platform.
After completing Module 2, show users a 5-question quiz
that evaluates their current [PROCESS/SYSTEM].
Based on their score, display a personalized recommendation.
Track the quiz completion and score as behavior events.
\`\`\`\n\n`,
  },
];

async function main() {
  console.log(`Applying ${patches.length} visual patches...\n`);

  for (const patch of patches) {
    const lesson = await prisma.lesson.findUnique({
      where: { order: patch.lesson },
    });

    if (!lesson) {
      console.log(`  ✗ Lesson ${patch.lesson} not found`);
      continue;
    }

    // Find the paragraph containing the "after" text
    const idx = lesson.content.toLowerCase().indexOf(patch.after.toLowerCase());
    if (idx === -1) {
      console.log(`  ✗ Lesson ${patch.lesson}: couldn't find "${patch.after.substring(0, 40)}..."`);
      continue;
    }

    // Find the end of that paragraph (next double newline)
    const afterIdx = lesson.content.indexOf("\n\n", idx);
    const insertPoint = afterIdx !== -1 ? afterIdx : lesson.content.length;

    const updated =
      lesson.content.slice(0, insertPoint) +
      patch.insert +
      lesson.content.slice(insertPoint);

    await prisma.lesson.update({
      where: { order: patch.lesson },
      data: { content: updated },
    });

    console.log(`  ✓ Lesson ${patch.lesson}: inserted after "${patch.after.substring(0, 40)}..."`);
  }

  console.log("\nDone!");
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
  });
