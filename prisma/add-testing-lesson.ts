import "dotenv/config";
import { PrismaClient } from "../src/generated/prisma";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

async function main() {
  const mod4 = await prisma.module.findFirst({ where: { order: 4 } });
  if (!mod4) return;

  // Bump "What Now" from order 16 to 17
  await prisma.lesson.update({
    where: { order: 16 },
    data: { order: 99 }, // temp to avoid unique conflict
  });

  // Create the new testing lesson at order 16
  await prisma.lesson.create({
    data: {
      moduleId: mod4.id,
      title: "Testing Everything",
      subtitle: "Make sure it actually works before you show anyone",
      readTime: "7 min read",
      order: 16,
      content: `You built the thing. Now make sure it works.

This is the lesson most people skip. They deploy, share the link, and then discover the signup is broken or emails aren't sending. Don't be that person.

Testing isn't glamorous. But shipping something broken is worse.

## The Full Checklist

Go through every single item. Don't skip any.

### Landing Page
- [ ] Page loads without errors
- [ ] All text is your content (no placeholder or lorem ipsum left)
- [ ] CTA button links to /signup
- [ ] "Sign in" link goes to /login
- [ ] Looks good on mobile (resize your browser or check on your phone)
- [ ] Page loads in under 3 seconds
- [ ] Favicon shows in the browser tab

### Signup Flow
- [ ] Fill out name, email, password → click Start Building
- [ ] Account is created (no error)
- [ ] You're redirected to the portal
- [ ] Your name shows in the portal nav
- [ ] Try signing up with the same email again → should show "account already exists" error
- [ ] Try submitting with empty fields → should show validation error
- [ ] Try a password under 6 characters → should be rejected

### Login Flow
- [ ] Go to /login
- [ ] Enter the email and password you just signed up with
- [ ] You're redirected to the portal (or admin if you're admin)
- [ ] Try wrong password → should show "Invalid credentials"
- [ ] Try an email that doesn't exist → should show "Invalid credentials" (same message — don't reveal which one is wrong)

### Portal
- [ ] All modules show up
- [ ] Lesson count is correct per module
- [ ] Click into a module → lessons are listed
- [ ] Click a lesson → content renders properly
- [ ] Headers, bold text, and paragraphs all look right
- [ ] Code blocks render with the copy button
- [ ] Images load (if you have any)
- [ ] "Mark as Complete" button works
- [ ] After completing, progress updates on the portal

### Skills Directory
- [ ] /portal/skills page loads
- [ ] All skill categories show
- [ ] Click a download link → file downloads (or opens)
- [ ] Skills are only accessible when logged in (try the URL in incognito)

### Email Nurture
- [ ] Sign up with a fresh email you can check
- [ ] Welcome email arrives within 60 seconds
- [ ] The from address is correct (your domain, not a random one)
- [ ] Links in the email work (click them, make sure they go somewhere real)
- [ ] Complete a lesson → check if a follow-up email arrives
- [ ] Check spam folder — if emails are landing there, your domain DNS needs attention

### Admin Panel
- [ ] Log in as admin → /portal/admin loads
- [ ] Dashboard shows stats (users, messages, etc.)
- [ ] Templates page lists your email templates
- [ ] Automations page shows your automations with toggle switches
- [ ] Users page lists all users
- [ ] Settings page shows your Resend config

### SEO
- [ ] View page source on landing page → check the title tag
- [ ] Check meta description is present
- [ ] Share your URL in a private Slack/Discord → does the preview card show up with your OG image?
- [ ] Send yourself the URL in iMessage → does the preview look right?
- [ ] Go to /sitemap.xml → should show your landing page URL
- [ ] Go to /robots.txt → should block /portal/ and /api/

### General
- [ ] Sign out works (click "Sign out" in the nav)
- [ ] After signing out, going to /portal redirects to /login
- [ ] Going to /portal/admin as a non-admin redirects to /portal

## How to Test Emails Without Spamming Yourself

Create a test account with a throwaway email. Services like Mailinator or Guerrilla Mail give you disposable inboxes. Sign up on your platform with one of those, then check the inbox on their website.

Or just use a +alias on your Gmail: yourname+test1@gmail.com, yourname+test2@gmail.com. They all land in your main inbox.

## When Something Fails

Don't panic. Open Claude Code and describe the problem:

\`\`\`prompt
When I sign up on my platform, I get a "something went wrong" error.
Check the signup API route and tell me what might be causing it.
\`\`\`

Claude will look at your code and help you debug. That's the whole point of this course — you have a building partner that can diagnose problems.

Common issues:
- **Signup/login fails**: Usually a missing environment variable (DATABASE_URL or SESSION_SECRET)
- **Emails not sending**: Resend API key not set, or domain not verified
- **Styles look wrong**: CSS not loading — check your globals.css
- **Admin not accessible**: Your user role isn't set to "admin" in the database

## What to Do Now

- Go through the entire checklist above
- Fix anything that fails
- Test on your phone (not just desktop)
- Share the URL with one person and ask them to sign up — watch for issues you missed
- When everything passes, you're ready to share it with the world`,
    },
  });
  console.log("Created lesson 16: Testing Everything");

  // Move "What Now" to order 17
  await prisma.lesson.update({
    where: { order: 99 },
    data: { order: 17 },
  });

  // Now rewrite lesson 17 (What Now) to end with the Talk to Claude concept
  await prisma.lesson.update({
    where: { order: 17 },
    data: {
      readTime: "7 min read",
      content: `You did it. You built a full course platform from scratch using Claude Code. Database, auth, email automation, admin panel, skills directory, SEO, deployment. All of it.

That's not a tutorial project. That's a production application. And you built it by talking to an AI.

Now the question is: what do you do with it?

## Rebuild It For Your Topic

The platform you just built is a template. Same structure works for any topic:

- **Fitness coach?** Build a free training program. Modules on nutrition, workout splits, recovery. Email nurture nudges people back. The skills directory becomes downloadable workout templates.
- **Marketing agency?** Build a free course on running Facebook ads. Each lesson teaches one concept. The nurture engine qualifies leads who complete the course. They book a call with you.
- **Accountant?** Build a tax strategy course for freelancers. Free content builds trust. Premium tier offers done-for-you tax prep.
- **Developer?** Build a course on any framework or tool. Monetize with consulting, premium content, or sponsorships.
- **Recruiter?** Build a free hiring course for employers. They learn from you, trust you, and eventually hire you to recruit.

To rebuild it for your topic, just open Claude Code and say:

\`\`\`prompt
I want to change this course platform to be about [YOUR TOPIC].
My audience is [WHO]. Help me:
1. Rewrite the landing page for my topic
2. Create a module/lesson outline
3. Update the branding and colors
4. Rewrite the email templates
\`\`\`

Claude Code does the rest. You could have a new version live in a weekend.

## How to Make Money With It

**1. Free course → paid service**
The course is free. It builds trust. At the end, you pitch your paid service. Free value upfront, paid service on the backend.

**2. Free tier → premium content**
Core course is free. Advanced lessons or exclusive skill packs are paid. Use Stripe or Lemon Squeezy to gate content.

**3. Free course → community/cohort**
Self-paced course is free. A live version with weekly calls and direct support is paid.

**4. Skills directory as a product**
Basic skills are free. Advanced skill packs are paid downloads.

**5. Done-for-you builds**
You know how to build platforms with Claude Code. Charge others to do it for them.

**6. Sponsorships and partnerships**
Once you have traffic and an email list, tool companies will pay to be featured.

Start with one model. Add more as you grow.

## Marketing — Getting People There

**Build in public.** Share your progress on Twitter/X, LinkedIn, wherever your audience is. People love watching things get built.

**Cold outreach that leads with value.** Don't pitch your service. Pitch the free course. "Hey, I built a free [topic] training platform — thought it might be useful for you."

**Communities.** Reddit, Discord, Slack groups. Share useful insights. Link to the course when relevant.

**Content marketing.** Write posts that teach one thing from your course. End every post with a link.

**Partnerships.** Find people who serve the same audience. Cross-promote.

The platform handles the conversion. Your job is getting the right people to the landing page.

## The Skill That Actually Matters

Here's what nobody tells you about AI.

The courses don't matter. The tools don't matter. The frameworks, the prompts, the templates — none of it matters as much as one simple habit:

**Talk to Claude. Every day. For everything.**

That's the skill. That's the whole game.

Not "learn prompt engineering." Not "take another course." Not "read about AI." Just open Claude and use it.

Need a landing page? Talk to Claude.
Need to automate something? Talk to Claude.
Need to write a proposal? Talk to Claude.
Need to debug a problem? Talk to Claude.
Need to plan a project? Talk to Claude.
Need to analyze data? Talk to Claude.

The people who are great with AI aren't geniuses. They're not technical. They didn't go to school for this. They just started talking to AI one day and never stopped. They got better at describing what they want. They learned when to push back. They figured out how to give context.

And now they build things in hours that used to take weeks.

You just spent 17 lessons doing exactly that. You talked to Claude. You described what you wanted. You iterated. You shipped.

Don't stop.

The next time you have an idea — any idea — don't plan it for months. Don't hire someone. Don't watch a tutorial.

Just open Claude and say: "Here's what I want to build."

Then build it.

## What to Do Now

1. Decide your topic. What would YOUR version teach?
2. Rebuild it this weekend. Open Claude Code, describe your topic, let it customize everything.
3. Pick one traffic channel. Start sharing. Build in public.
4. Pick one monetization model. Free course → paid service is the easiest start.
5. Keep talking to Claude. Every day. For everything.
6. Leave feedback on this course — it helps others decide if this is worth their time.

You know how to build. You know how to use AI. You have a deployed product.

Now go do something with it.`,
    },
  });
  console.log("Updated lesson 17: What Now — with talk to Claude closer");

  // Update module 4 lesson count display (optional — it's dynamic from DB)
  console.log("\nModule 4 now has 3 lessons: Deploy (15), Testing (16), What Now (17)");
  console.log("Total lessons: 17");

  await prisma.$disconnect();
}

main();
