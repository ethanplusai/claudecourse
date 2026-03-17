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
  // ==================== LESSON 1 — RIGHT AFTER "Until now." ====================
  {
    lesson: 1,
    after: "Until now.",
    insert: `

## The Best Way to Learn AI Is to Just Talk to It

Before we go any further, let's get something straight.

You don't learn AI by watching YouTube tutorials. You don't learn it by reading blog posts. You don't learn it from a fucking course — including this one.

You learn AI by talking to it.

That's it. That's the whole secret.

Open Claude. Tell it what you're trying to do. Ask it questions. Push back when it gives you something you don't like. Give it more context. Try again.

The people who are great with AI aren't technical geniuses. They're just people who talk to it like a human — and do it constantly.

This course exists to give you a reason to talk to it. A real project. A real outcome. Something you can actually use.

But the course is not the point. The conversation with Claude is the point.

Every lesson in here is going to push you to open Claude Code and talk to it. Not copy-paste a script. Not follow a rigid template. Talk to it. Tell it what you want. Iterate.

The more you do that, the better you get. Not at "AI" — at thinking clearly about what you want and asking for it.

That skill is worth more than any tool, any framework, any system.

So when you feel stuck at any point in this course, don't google it. Don't reread the lesson. Just open Claude and say "I'm stuck on this — help me figure it out."

That's how you learn.

`,
  },

  // ==================== LESSON 7 — WHEN THEY FIRST USE CLAUDE CODE ====================
  {
    lesson: 7,
    after: "Claude Code is not the Claude you use in your browser",
    insert: `

Here's the thing that most people miss about AI tools: the best way to learn them is to just start talking.

Not reading documentation. Not watching walkthroughs. Talking.

Open Claude Code and tell it what you want. It'll ask you questions if it needs more context. It'll suggest approaches. It'll write code, run it, fix it, and iterate — all while you watch.

Your job isn't to understand every line of code. Your job is to clearly describe what you want and let Claude figure out the how.

Think of it like hiring a contractor. You don't need to know how to frame a wall. You need to know what room you want built.

The more you talk to it, the better you get at directing it. And the better you get at directing it, the faster everything else in this course goes.

`,
  },

  // ==================== LESSON 28 — FINAL LESSON, CLOSING SECTION ====================
  {
    lesson: 28,
    after: "Go fill your calendar.",
    insert: `

## One More Thing — The Real Skill You Just Learned

You came here to build a Client Engine. And you did.

But the thing that's going to matter most — long after this course is done — isn't the platform you built. It's not the nurture sequence. It's not the booking system.

It's the fact that you now know how to talk to AI.

That sounds simple. It is simple. But most people never do it.

They read about AI. They watch demos. They share articles about what AI "can do." But they never sit down, open a tool like Claude, and just start building something.

You did.

You told Claude Code what you wanted. It asked questions. You answered. It built things. You gave feedback. It iterated. And now you have a working system.

That workflow — describe what you want, iterate with AI, ship it — is the most valuable skill in business right now. And it applies to everything, not just client acquisition.

Need a new landing page? Talk to Claude.
Need to automate a process? Talk to Claude.
Need to analyze data? Talk to Claude.
Need to write a proposal? Talk to Claude.

The people who win in the next decade are the ones who treat AI like a coworker — not a novelty. They talk to it every day. They push it. They get better at describing what they want.

You just spent 28 lessons doing exactly that.

Don't stop.

The Client Engine is one project. Claude Code works on anything. The next time you have an idea — for your business, for a client, for yourself — don't plan it for six months. Don't hire a freelancer. Don't google "how to build X."

Just open Claude and say: "Here's what I want to build."

That's the skill. That's the advantage. That's the whole game.

Now go use it.`,
  },
];

async function main() {
  console.log(`Applying ${patches.length} patches...\n`);

  for (const patch of patches) {
    const lesson = await prisma.lesson.findUnique({
      where: { order: patch.lesson },
    });

    if (!lesson) {
      console.log(`  ✗ Lesson ${patch.lesson} not found`);
      continue;
    }

    const idx = lesson.content.toLowerCase().indexOf(patch.after.toLowerCase());
    if (idx === -1) {
      console.log(`  ✗ Lesson ${patch.lesson}: couldn't find "${patch.after.substring(0, 40)}..."`);
      continue;
    }

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
