import "dotenv/config";
import { PrismaClient } from "../src/generated/prisma";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

async function main() {
  await prisma.lesson.update({
    where: { order: 16 },
    data: {
      content: `You built the thing. Now make sure it works.

This is the lesson most people skip. They deploy, share the link, and then discover the signup is broken or emails aren't sending. Don't be that person.

Testing isn't glamorous. But shipping something broken is worse.

## The Pre-Launch Checklist

Use the interactive checklist below to test every part of your platform. It covers landing page, signup, login, portal, skills, emails, admin, SEO — everything.

Check items off as you go. When it's all green, you're ready to launch.

## How to Test Emails Without Spamming Yourself

Create a test account with a throwaway email. Services like Mailinator or Guerrilla Mail give you disposable inboxes. Sign up on your platform with one of those, then check the inbox on their website.

Or use a +alias on your Gmail: yourname+test1@gmail.com, yourname+test2@gmail.com. They all land in your main inbox.

## When Something Fails

Don't panic. Open Claude Code and describe the problem:

\`\`\`prompt
When I sign up on my platform, I get a "something went wrong" error.
Check the signup API route and tell me what might be causing it.
\`\`\`

Claude will look at your code and help you debug. Common issues:

- Signup/login fails — missing DATABASE_URL or SESSION_SECRET in environment variables
- Emails not sending — Resend API key not set, or domain not verified
- Styles look wrong — check globals.css
- Admin not accessible — user role not set to "admin" in database

## What to Do Now

- Open the checklist and go through every item
- Fix anything that fails
- Test on your phone
- Share the URL with one person and ask them to sign up
- When everything passes, you're ready`,
    },
  });
  console.log("Done");
  await prisma.$disconnect();
}

main();
