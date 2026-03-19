import "dotenv/config";
import { PrismaClient } from "../src/generated/prisma";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

async function main() {
  const l1 = await prisma.lesson.findUnique({ where: { order: 1 } });
  if (!l1) return;

  const mindset = `## The One Thing That Changes Everything

Before we get into any of this — Claude, terminals, building things — there's one mindset shift you need to make right now.

Stop googling. Start asking Claude.

That's it. That's the whole shift.

Got a question about something in this course? Ask Claude.
Don't understand a concept? Ask Claude.
Something broke and you don't know why? Ask Claude.
Want to know how to do something that isn't covered here? Ask Claude.

This isn't a joke. This is literally how the best AI users operate. They don't search Stack Overflow. They don't watch YouTube tutorials. They don't read documentation for hours. They open Claude and say "I'm trying to do X — help me figure it out."

And Claude helps. Every time. Because that's what it's built for.

The skill you're actually learning in this course isn't coding. It's not even Claude Code specifically. It's **how to talk to AI and get what you want.**

That means:
- Be specific. "Build me a landing page" is okay. "Build me a landing page for a fitness course targeting busy professionals, with a hero section, three feature cards, and a signup form" is way better.
- Give context. Tell Claude who you are, what you're building, who it's for.
- Push back. If Claude gives you something you don't like, say "that's not what I meant" and explain why.
- Iterate. The first answer is rarely the final answer. Go back and forth. Refine.

Think of Claude like the smartest coworker you've ever had — one who never gets annoyed when you ask questions and works 24/7. But they can only help you if you tell them what you actually want.

Every lesson in this course will push you to talk to Claude. Not copy-paste commands blindly. Not follow steps mechanically. Actually talk to it, describe what you want, and iterate until you get it.

If you take nothing else from this course, take this: **the best way to learn AI is to just use it. For everything. Starting now.**

---

`;

  const updated = mindset + l1.content;
  await prisma.lesson.update({ where: { order: 1 }, data: { content: updated } });
  console.log("Done — mindset section added to top of lesson 1");
  await prisma.$disconnect();
}

main();
