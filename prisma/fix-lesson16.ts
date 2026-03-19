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

We built an interactive checklist for you. It covers every single thing you need to test before going live — landing page, signup, login, portal, skills, emails, admin, SEO, and more.

**Open it here: https://claudecourse.dev/portal/checklist**

Go through every item. Check them off as you test. Don't skip any.

The checklist tracks your progress so you can see what's left. When everything is checked, you're ready to share.

## How to Test Emails Without Spamming Yourself

Create a test account with a throwaway email. Services like Mailinator or Guerrilla Mail give you disposable inboxes. Sign up on your platform with one of those, then check the inbox on their website.

Or just use a +alias on your Gmail: yourname+test1@gmail.com, yourname+test2@gmail.com. They all land in your main inbox.

## When Something Fails

Don't panic. Open Claude Code and describe the problem:

\`\`\`prompt
When I sign up on my platform, I get a "something went wrong" error.
Check the signup API route and tell me what might be causing it.
\`\`\`

Claude will look at your code and help you debug. That's the whole point — you have a building partner that can diagnose problems.

Common issues:
- Signup/login fails — missing environment variable (DATABASE_URL or SESSION_SECRET)
- Emails not sending — Resend API key not set, or domain not verified
- Styles look wrong — CSS not loading, check globals.css
- Admin not accessible — user role not set to "admin" in database

## What to Do Now

- Open the Pre-Launch Checklist and go through every item
- Fix anything that fails
- Test on your phone (not just desktop)
- Share the URL with one person and ask them to sign up — watch for issues you missed
- When everything passes, you're ready to share it with the world`,
    },
  });
  console.log("Done");
  await prisma.$disconnect();
}

main();
