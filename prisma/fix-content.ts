import "dotenv/config";
import { PrismaClient } from "../src/generated/prisma";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

async function main() {
  // === LESSON 4: Add "Choose Your Topic" section at the beginning ===
  const l4 = await prisma.lesson.findUnique({ where: { order: 4 } });
  if (l4) {
    const newOpening = `## Before We Build — Pick Your Topic

We're about to create a course platform. In this course, you're building one about Claude Code — because that's what you're learning.

But YOUR version doesn't have to be about Claude Code.

It can be about anything you know. Anything you can teach. Anything an audience wants to learn.

Think about it:
- A fitness coach could build a course on workout programming
- An accountant could build a course on tax strategy for freelancers
- A designer could build a course on landing page design
- A recruiter could build a free hiring training for employers
- A real estate agent could build a homebuyer education platform

The platform you're building is a template. The structure works for any topic. Modules, lessons, progress tracking, email nurture — all of it applies no matter what you teach.

So while you follow along building a Claude Code course, keep your own topic in the back of your mind. Every feature we add, think: "How would this work for my version?"

By the end, you'll have both — a working platform AND the knowledge to rebuild it for your own audience in a weekend.

Now let's create the project.

`;
    await prisma.lesson.update({
      where: { order: 4 },
      data: { content: newOpening + l4.content },
    });
    console.log("✓ Lesson 4: Added 'Choose Your Topic' section");
  }

  // === LESSON 16: Full rewrite with monetization, marketing, and "just talk to Claude" closer ===
  await prisma.lesson.update({
    where: { order: 16 },
    data: {
      title: "What Now",
      subtitle: "Make money with it, market it, and keep building",
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

The platform doesn't care what the topic is. It captures leads, tracks behavior, sends smart follow-ups, and gives you an admin panel to see everything.

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

Here are the models that actually work:

**1. Free course → paid service**
The course is free. It builds trust and positions you as the expert. At the end (or through the nurture emails), you pitch your paid service — consulting, done-for-you, coaching, whatever. This is the classic Client Engine model. Free value upfront, paid service on the backend.

**2. Free tier → premium content**
The core course is free. Premium lessons, advanced skills files, or exclusive modules are paid. Use Stripe or Lemon Squeezy to gate content. Claude Code can help you add payment logic.

**3. Free course → community/cohort**
The self-paced course is free. A live version with weekly calls, a Discord, and direct feedback is paid. People who go through the free course and want more will pay for access and accountability.

**4. Skills directory as a product**
The basic skills are free with signup. Advanced skill packs (complete workflow automations, multi-file skills for complex projects) are paid downloads. Think of them like plugins — people pay for the ones that save them hours.

**5. Done-for-you builds**
You just learned how to build full platforms with Claude Code. Charge other people to do it for them. "I'll build your course platform for $X." You can spin one up in a weekend.

**6. Sponsorships and partnerships**
Once you have traffic and an email list, tool companies will pay to be featured. Hosting companies, email services, CRM tools — they all want access to your audience.

Most people will combine 2-3 of these. Start with one, add more as you grow.

## Marketing — Getting People to Your Platform

Your platform is live. SEO is set up. But SEO takes time. Here's what works right now:

**Build in public.** Share your progress on Twitter/X, LinkedIn, wherever your audience hangs out. Show screenshots. Share lessons you're writing. People love watching things get built.

**Cold outreach that leads with value.** Don't pitch your service. Pitch the free course. "Hey, I built a free [topic] training platform — thought it might be useful for you." That message gets responses because it asks for nothing.

**Communities.** Reddit, Indie Hackers, niche Slack/Discord groups. Share genuinely useful insights from your topic. Link to the course when relevant. Don't spam.

**Content marketing.** Write posts that teach one thing from your course. End every post with: "I cover this in depth in my free course — [link]." Organic content compounds over time.

**Partnerships.** Find people who serve the same audience but don't compete. Cross-promote. "I'll share your thing with my list if you share mine."

The platform handles the conversion. Your job is just getting the right people to the landing page. The signup flow, the email nurture, the behavior tracking — all automated. You built it.

## The Skill That Matters Most

Here's the thing nobody talks about:

The most valuable thing you got from this course isn't the platform. It's not the skills files. It's not even the ability to build web apps.

It's that you know how to talk to Claude and build things.

That skill applies to everything:
- Need a new landing page? Talk to Claude.
- Need to automate a process? Talk to Claude.
- Need to analyze data? Talk to Claude.
- Need to write proposals? Talk to Claude.
- Need to build an internal tool? Talk to Claude.
- Need to create content at scale? Talk to Claude.

The people who win in the next decade aren't the ones who learn the most frameworks or memorize the most syntax. They're the ones who can clearly describe what they want and iterate with AI until they get it.

You just spent 16 lessons doing exactly that.

Don't stop.

The next time you have an idea — for your business, for a client, for yourself — don't plan it for six months. Don't hire a freelancer. Don't google "how to build X."

Just open Claude and say: "Here's what I want to build."

That's the skill. That's the advantage. That's the whole game.

## What to Do Now

1. **Decide your topic.** What would YOUR version of this platform teach?
2. **Rebuild it this weekend.** Open Claude Code, tell it your topic, let it customize everything.
3. **Pick one traffic channel.** Start sharing. Build in public. Post about your progress.
4. **Pick one monetization model.** Free course → paid service is the easiest to start.
5. **Keep talking to Claude.** Every day. For everything. The more you use it, the better you get.
6. **Leave feedback on this course.** Your review helps other people decide if this is worth their time. Be honest.

You know how to build. You know how to use AI. You have a deployed product.

Now go do something with it.`,
    },
  });
  console.log("✓ Lesson 16: Full rewrite with monetization, marketing, and closer");

  // === Also add a note in lesson 5 (landing page) about customizing for their topic ===
  const l5 = await prisma.lesson.findUnique({ where: { order: 5 } });
  if (l5) {
    const idx = l5.content.indexOf("## What to Do Now");
    if (idx !== -1) {
      const insert = `

## A Note About Your Version

We're building a landing page for a Claude Code course right now. But remember — your version can be about anything.

When you rebuild this for your topic, just tell Claude Code:

\`\`\`prompt
Rewrite the landing page. My course is about [TOPIC] for [AUDIENCE].
The main benefit is [OUTCOME]. Keep the same layout structure but
update all the copy, features, and module previews.
\`\`\`

Same platform. Different content. Different audience. That's the power of what you're building here.

`;
      await prisma.lesson.update({
        where: { order: 5 },
        data: { content: l5.content.slice(0, idx) + insert + l5.content.slice(idx) },
      });
      console.log("✓ Lesson 5: Added 'Your Version' note");
    }
  }

  await prisma.$disconnect();
  console.log("\nDone.");
}

main();
