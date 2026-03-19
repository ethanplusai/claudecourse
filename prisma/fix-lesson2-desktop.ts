import "dotenv/config";
import { PrismaClient } from "../src/generated/prisma";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

async function main() {
  const l2 = await prisma.lesson.findUnique({ where: { order: 2 } });
  if (!l2) return;

  const oldSection = `## Claude Desktop vs Claude Code (CLI)

Claude comes in two forms. Both use the same AI brain. The difference is the interface.

**Claude Desktop** is the app you download at claude.ai/download. It's a chat window — you type, Claude responds. It's great for brainstorming, writing, research, and thinking through ideas. If you've used ChatGPT, this will feel familiar.

**Claude Code** is a command-line tool. It runs in your terminal. Instead of just chatting, it can read your entire project, write code, create files, run commands, install packages, and build things. It's like having a developer sitting next to you who can actually touch your code.

Think of it this way:
- **Desktop** = thinking partner (brainstorm, plan, write)
- **CLI** = building partner (code, create, deploy)

This course focuses on the CLI version because we're building a real application. But we'll use Desktop too when it makes sense — especially for planning and content writing.`;

  const newSection = `## Three Ways to Use Claude

Claude has the same brain everywhere. But there are three different ways to access it, and each one is good for different things.

**1. Claude Chat (Desktop App)**

This is the app you download at claude.ai/download. It's a chat window — you type, Claude responds. Great for brainstorming, writing, research, and thinking through ideas. If you've used ChatGPT, this will feel familiar.

You can create Projects to save context, use Artifacts to generate documents and code previews, and have long conversations about complex topics.

**2. Claude Code in the Desktop App**

Here's what most people miss — the Claude Desktop app has Claude Code built right into it. You don't HAVE to use the terminal.

In the Desktop app, look for the terminal/code icon. Click it and you get Claude Code running inside the Desktop interface. It can read your project files, write code, and run commands — same as the terminal version — but with a friendlier UI wrapped around it.

This is a great option if the terminal feels intimidating. You get the same power, same capabilities, just with a more visual interface.

**3. Claude Code (Terminal/CLI)**

This is the command-line version. It runs directly in your terminal. No graphical interface — just text. It's faster, more flexible, and what most power users prefer.

The terminal version is what this course focuses on. It's the most direct way to use Claude Code and teaches you skills that transfer to real development workflows.

**Which one should you use?**

For this course, we recommend the terminal version. It's the most powerful and it's what you'll see in all our examples.

But if the terminal feels overwhelming, use Claude Code inside the Desktop app instead. Same AI, same capabilities, just a different wrapper. You can always switch to terminal later once you're comfortable.

The important thing is that you start. Pick whichever one gets you building fastest.`;

  const updated = l2.content.replace(oldSection, newSection);

  if (updated === l2.content) {
    console.log("Could not find the section to replace");
    return;
  }

  await prisma.lesson.update({ where: { order: 2 }, data: { content: updated } });
  console.log("Done — lesson 2 updated with three ways to use Claude");
  await prisma.$disconnect();
}

main();
