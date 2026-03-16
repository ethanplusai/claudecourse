import "dotenv/config";
import { PrismaClient } from "../src/generated/prisma";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("🌱 Seeding database...\n");

  // Delete all existing data in correct order (respecting foreign keys)
  await prisma.behaviorEvent.deleteMany();
  await prisma.lessonProgress.deleteMany();
  await prisma.lesson.deleteMany();
  await prisma.module.deleteMany();
  await prisma.user.deleteMany();

  console.log("Cleared existing data.\n");

  // ─── Module 1: Foundations of The Client Engine ───
  const module1 = await prisma.module.create({
    data: {
      title: "Foundations of The Client Engine",
      description:
        "Understand what a modern automated acquisition system is, why it works, and what you'll build.",
      order: 1,
    },
  });

  // ─── Module 2: Building Your Lead Magnet ───
  const module2 = await prisma.module.create({
    data: {
      title: "Building Your Lead Magnet",
      description:
        "Use Claude Code and a boilerplate to build a live, value-first lead magnet platform — the front door of your Client Engine.",
      order: 2,
    },
  });

  // ─── Module 3: The Nurture Engine ───
  const module3 = await prisma.module.create({
    data: {
      title: "The Nurture Engine",
      description:
        "Set up behavior-based email and SMS sequences that warm leads automatically and move them toward booking.",
      order: 3,
    },
  });

  // ─── Module 4: Calendar and Booking ───
  const module4 = await prisma.module.create({
    data: {
      title: "Calendar and Booking",
      description:
        "Set up an automated booking system that puts qualified, pre-sold leads on your calendar at the exact right moment.",
      order: 4,
    },
  });

  // ─── Module 5: Traffic and Outreach ───
  const module5 = await prisma.module.create({
    data: {
      title: "Traffic and Outreach",
      description:
        "Drive targeted traffic into your Client Engine using cold outreach, content, ads, and partnerships.",
      order: 5,
    },
  });

  // ─── Module 6: Launch, Optimize, and Scale ───
  const module6 = await prisma.module.create({
    data: {
      title: "Launch, Optimize, and Scale",
      description:
        "Go live, measure what matters, fix what's broken, and scale what works.",
      order: 6,
    },
  });

  console.log("Created 6 modules.\n");

  // ─── Module 1 Lessons ───

  await prisma.lesson.create({
    data: {
      moduleId: module1.id,
      title: "Welcome to The Client Engine",
      subtitle: "Introduction to automated acquisition systems",
      order: 1,
      readTime: "6 min read",
      content: `Let's Build a 100% Automated Sales Machine

Most people never build a real client acquisition system.

They build fragments.

A lead magnet here. A random cold email campaign there. A Facebook ad they turned off after a few days because the leads were garbage. Some half assed automation a freelancer set up that doesn't actually do anything.

Everyone in the agency world knows they could get more leads if they really sat down and built the machine… but no one ever does — because every version of "the machine" is a fucking project.

It's complicated. It's scattered. It takes time.

And there's no real playbook that takes you from zero to automated, ready-to-buy leads on your calendar.

Until now.

If you're here, you already know what you should be doing to grow your business… but knowing and executing are two very different things.

You've tried outreach, ads, content, referrals — and maybe some pieces worked for a moment — but the leads were low-quality, inconsistent, and rarely ready to buy. Every call felt like you were dragging someone uphill.

Maybe you've bought lead lists, hired appointment setters, or paid some "lead system" guy who promised you weekly appointments… only to cancel sixty days later because nothing actually changed.

Or maybe you do have parts of a system — a calendar tool here, a workflow there — but everything is duct-taped together, fragile, and requires constant babysitting.

You're tired of grinding. You're tired of chasing. You're tired of manually doing things that should have been automated years ago.

And you're right to feel that way.

The consulting and agency world is flooded with half-baked funnels, overhyped gurus, and "plug-and-play" systems that never fucking plug or play. Everyone sells the dream of predictability, but no one gives you the architecture.

So we built something different.

Something clean. Something predictable. Something automated. Something you can deploy in a single weekend without turning into a full-time systems engineer.

This is The Client Engine — a fully automated, AI-powered acquisition system that pulls in leads, warms them, educates them, and books them onto your calendar ready to buy.

Not "interested." Not "maybe." Not "circle back next quarter." Ready to buy.

This system runs 24/7. It compounds daily. And once assembled, it requires almost no effort to maintain because every piece of it is automated or built with AI.

Opt-ins are handled. Nurture is handled. Follow-ups are handled. Behavior-based routing is handled. Calendar booking is handled. Traffic is scalable. And your leads show up prepared, informed, and pre-sold.

By the time you finish this course, you will have a complete AI-built lead magnet, a full training platform that positions you as the authority, a multi-path email and SMS nurture engine that adapts automatically, a booking system that fills your calendar without you, and traffic systems you can scale as aggressively as you want.

No freelancers. No overhyped "lead machines." No duct tape.

Just a clear, proven architecture — and the AI tools that assemble it for you.

Welcome to The Client Engine.

## The Lead Magnet That Actually Converts

Instead of begging for attention with generic "free strategy call" offers, you'll create a lead magnet so valuable that people want to check it out the moment they see it.

The kind of asset that stops the scroll.

The kind of asset that feels like it should cost money, but you give it away for free — because it becomes the single most powerful trust builder in your acquisition engine.

And here's the wild part:

With AI, you can build nearly the entire thing automatically.

You just shape the direction.

And the result is a value-first entry point into your world — a front door that attracts high-intent, self-selecting prospects who want to hear what you have to say.

Prospects who show up warmed.

Prospects who show up curious.

Prospects who show up thinking, "If this is free… What does the paid offer look like?"

And if you want the perfect example of this type of lead magnet?

You're literally inside it.

This entire training platform — the structure, the writing, the flow, the content you're reading right now — was built with AI. And you're experiencing exactly the kind of asset your future prospects will experience.

That's the beauty of this system.

You're learning by stepping directly into the machine you're going to build yourself.

## Behavior-Based Nurture Engine

Most "lead gen systems" die the moment someone opts in. The follow-up is weak, inconsistent, or completely manual — and the lead goes cold before you ever get a chance to talk to them.

The Client Engine eliminates that problem entirely.

Every email and text is relevant to the lead based on their qualification. Every path adapts to what the lead actually does.

If they open an email, the system adjusts. If they ignore it, the system shifts. If they click, watch, or engage, the messaging changes in real time.

It feels personal to them. It runs on autopilot for you.

This is how you turn "not ready" leads into "ready now" buyers — without chasing anyone, without babysitting anything, and without lifting a finger once it's set up.

## The Automated Calendar & Booking System

Once someone is warmed, educated, and convinced, they don't need to be pushed. They move themselves.

The system routes qualified leads directly onto your calendar at the exact moment they're ready to talk.

No back-and-forth emails. No DM follow-ups. No awkward "circling back."

They arrive informed, prepared, and already aware of what you offer and why they want it.

Your sales calls stop being uphill battles. They start becoming confirmations.

## The Traffic Engine That Feeds It

The Client Engine is channel-agnostic. Anything can feed it, and everything gets amplified by it.

Cold outreach works better because it leads somewhere valuable. Paid ads convert better because they point to something people actually want. Organic content becomes more powerful because it no longer drops into a void — it drops into a system.

Cold traffic becomes warm. Warm traffic becomes hot. Hot traffic becomes clients.

And the whole thing compounds every day it runs.

## Why This Works When Nothing Else Has

Everything you tried before was tactical. A funnel. A script. A campaign. A trick.

Tactics don't scale. Architecture does.

The Client Engine is architecture — a machine built to capture attention, deliver value, warm the lead, prepare the buyer, and book the appointment automatically.

It replaces effort with automation. It replaces inconsistency with predictability. It replaces chance with structure.

This is why it works.

## What You'll Build in This Program

By the end of this training, you will have a complete AI-built lead magnet, a full value asset that positions you as the expert, a behavior-based nurture engine, a booking system that fills your calendar, and a traffic plan you can scale as aggressively as you want.

No freelancers. No duct tape. No mystery.

Just a proven system — like the one you're in right now — rebuilt for your business in a single weekend.

## Let's Get Started

Move on to the next lesson, The Architecture Breakdown. You'll see how every piece fits together — and how quickly you can assemble your own Client Engine.

Let's build your machine.`,
    },
  });

  await prisma.lesson.create({
    data: {
      moduleId: module1.id,
      title: "The Architecture Breakdown",
      subtitle: "How all the pieces fit together",
      order: 2,
      readTime: "4 min read",
      content: `## How The Client Machine Works

Before you build anything, you need to see the machine as a whole.

Most people fail at automation because they try to build pieces in isolation. They set up an email tool. Then a CRM. Then a calendar. Then some outreach software. None of it talks to each other, and nothing actually compounds.

The Client Engine works because it is designed as a single system from day one.

Everything has a role. Everything has a handoff. Everything flows in one direction.

This lesson is about giving you that mental model.

## The Core Principle

The Client Engine is built around one simple idea.

Every action a prospect takes should automatically move them closer to buying.

Not manually. Not someday. Not if you remember to follow up.

Automatically.

If a prospect opts in, something happens. If they read, click, ignore, or watch, something else happens. If they show intent, the system responds immediately.

Nothing is random. Nothing is passive.

This is architecture, not tactics.

## The Five Core Components

The entire Client Engine is made up of five connected components.

Each one is simple on its own. The power comes from how they work together.

**Component One: Traffic In**

Everything starts with traffic. Cold outreach, paid ads, organic content, referrals, partnerships — none of that changes. What changes is where that traffic goes. Instead of sending people to a sales page or a booking link, you send them to a value-first asset that earns attention instead of demanding it.

**Component Two: The Lead Magnet**

The lead magnet is the front door. This is where strangers become leads and curiosity turns into attention. It must be valuable enough that opting in feels obvious, not risky. The goal is not volume. The goal is intent.

**Component Three: The Nurture Engine**

Once someone opts in, they enter the most important part of the system. This is where trust is built. The nurture engine observes behavior and responds automatically. It teaches, reinforces, and positions you as the authority while the lead consumes content at their own pace.

**Component Four: The Booking Layer**

The booking system is not a call-to-action. It is a natural outcome. When the nurture engine has done its job, the prospect does not need convincing. The calendar is simply the final step in the flow.

**Component Five: The Feedback Loop**

This is the part most people miss. Every action feeds data back into the system. Who opened. Who ignored. Who booked. Who didn't. That data improves messaging, timing, and routing automatically. The system gets smarter the longer it runs.

## How Everything Connects

Traffic enters the lead magnet. The lead magnet feeds the nurture engine. The nurture engine qualifies and educates. Qualified leads move to booking. Booking outcomes feed data back into the system.

Nothing exists on its own. Every piece hands off to the next. When one part improves, the entire system improves.

## Why This Is Built With AI

AI is not the product. AI is the leverage.

AI removes the bottleneck of creation, writing, and iteration. It allows you to build assets, messages, and flows that would normally take weeks or months.

You are not replacing strategy with AI. You are replacing manual labor with automation.

## Next Up

In the next lesson, we'll help you understand how to choose your Client Engine. You'll map the entire system before you build a single piece of it.`,
    },
  });

  await prisma.lesson.create({
    data: {
      moduleId: module1.id,
      title: "Choosing Your Offer & Audience",
      subtitle: "Determine the automated system for your business",
      order: 3,
      readTime: "6 min read",
      content: `Before you build anything, you need to decide who this system is for and what problem it is solving.

This is where most people overcomplicate things.

They try to invent something new. They try to be clever. They try to target everyone. And they end up with an offer that feels vague, generic, and impossible to sell.

The Client Engine works best when the offer is simple and the audience is specific.

## The Only Rule That Matters

Your offer does not need to be unique.

It needs to be clear.

If someone can't understand what you do and who it's for in five seconds, the system will struggle no matter how good the automation is.

Clarity beats creativity every time.

## A Real Example That Shows The Shift

Let's paint a picture for you so you can understand what the fuck we're saying...

Let's take recruiters for example. Recruiters sit in a two-sided market. They only make money when an employer hires a candidate, which means they are always bottlenecked on one side of the equation.

And when they need more employers, almost every recruiter does the same thing. They reach out cold and immediately try to sell recruiting services.

"Can I recruit for you?" "Are you hiring right now?"

From the very first message, they are asking for something.

Now look at the same problem through a different lens.

Recruiters don't actually need to sell recruiting. They need to solve hiring problems.

So instead of selling from the first touch, a recruiter builds a free hiring tool for employers. Employers can sign up for free, create job ads, push those ads to multiple job boards, and embed a live job board directly on their website.

This is not a pitch. This is not a teaser. This is a real tool that solves a real problem.

Five years ago, building something like this would have taken months and tens of thousands of dollars. Today, with AI, it can be built in hours.

Now compare how outreach looks.

Instead of saying "Can I recruit for you?", the recruiter can say: "Hey, we built a free hiring platform that helps employers write better job ads, distribute them, and manage applicants. It's completely free — would love your feedback."

There is no selling in that message. There is nothing to push. There is only value.

And that changes everything.

This is the core idea behind The Client Engine. You separate value from selling. You build something genuinely useful. You let people experience your thinking, your systems, and your capability before money ever enters the conversation.

## If You're Not Sure What to Pick

The easiest place to start is your own background.

What have people already paid you for? What do people already ask you for help with? What problems do you understand better than most people in your circle?

You do not need to be the best in the world. You just need to be a step ahead of the person you are helping.

## A Simple Test Before You Move On

Before continuing, you should be able to answer this in one sentence:

"I help ___ get ___ without ___."

If that sentence feels awkward, unclear, or complicated, you need to refine it.

If it feels obvious and boring, you're probably doing it right.

## Next Up

In the next lesson, we'll map your entire Client Engine using AI. You'll take your offer and audience and turn them into a clear system blueprint before you build a single asset.`,
    },
  });

  await prisma.lesson.create({
    data: {
      moduleId: module1.id,
      title: "Mapping Your Client Engine",
      subtitle: "Plan your Client Engine with AI",
      order: 4,
      readTime: "6 min read",
      content: `At this point, you should have two things clearly defined.

You know who your audience is. You know what kind of value you want to give them.

Now it's time to design the system that connects everything together.

This is where most people get stuck.

They open a blank doc. They stare at it. They overthink every step. They try to design the perfect funnel in their head and never actually build anything.

AI removes that friction completely.

## Why Mapping Comes Before Building

Before you touch tools, platforms, or software, you need a clear map.

Not a wireframe. Not a technical diagram. A simple, logical flow of how someone moves from stranger to client.

If you skip this step, you'll end up rebuilding things later. If you do it right once, everything downstream becomes obvious.

## Using AI as a Strategic Partner

This is where AI becomes more than a writing tool. You are going to use it as a systems designer.

Instead of asking AI to "write copy," you ask it to think.

You give it context about your audience, your offer, and your goals, and you let it help you structure the flow.

## The First Prompt That Matters

The first thing you want AI to help you answer is simple:

"What does my ideal client need to understand before they are ready to buy?"

That single question unlocks everything else.

AI will help you list the misconceptions, the knowledge gaps, the objections, and the moments of confusion that stop people from moving forward.

## Let's Map Out Your Client Engine

Start with a blank document.

Do not open tools. Do not pick software. Do not think about platforms.

You are designing logic first.

Open ChatGPT or Claude and give it context. Tell it who your audience is. Tell it what you help them with. Tell it what outcome you ultimately sell.

Then ask it one simple question.

"What does this person need to believe, understand, and trust before they are ready to buy from me?"

Do not ask for copy. Do not ask for emails. Ask for thinking.

You want a raw list of: What they misunderstand. What they overestimate. What they underestimate. What they are skeptical about. What they fear. What they need clarity on.

This becomes your truth list.

Once you have that list, group it. Not by topic. By sequence.

What do they need to understand first? What only makes sense after that? What needs repetition? What needs proof?

Now you are no longer guessing. You are sequencing belief.

Next, map the core flow.

Discovery → Value → Trust → Readiness → Conversation

Under each stage, write what must happen.

Then assign responsibilities. The lead magnet handles value. The nurture handles trust. Behavior signals handle readiness. The calendar handles conversation.

Once your Client Engine is mapped, building becomes mechanical.

You're no longer asking, "What should I build?" You already know.

## Next Up

In the next lesson, we'll show you all of the tech needed to build your Client Engine.`,
    },
  });

  await prisma.lesson.create({
    data: {
      moduleId: module1.id,
      title: "Build Your Tech Stack",
      subtitle:
        "Understand all of the software we use to build The Client Engine",
      order: 5,
      readTime: "3 min read",
      content: `## The Tech Stack You'll Need

Before you build anything, you need to understand the categories of tools that power the Client Engine.

This is not about picking the "perfect" software. It's about understanding the role each tool plays in the system so you can make smart decisions and avoid overcomplicating things.

## The Five Tool Categories

Every Client Engine uses the same five categories of tools. The specific brands may change. The roles do not.

**The AI Platform Builder**

This is where your lead magnet lives. It could be a tool, a resource hub, a training platform, or a utility dashboard. Its job is simple. Deliver value.

The beautiful thing is that these tools let you build anything on them, however much you want to. This will be the most valuable fucking tool you've ever paid for.

**The CRM and Automation Layer**

This is the brain of the system. It tracks who someone is, what they've done, what they've seen, and what should happen next. Without this layer, nothing adapts. This is where platforms like GoHighLevel or similar CRMs come into play.

**Email and SMS Delivery**

This is how the system communicates. Emails educate, reinforce, and nurture. SMS is used sparingly for timing, reminders, and high-intent moments. This layer is about reliability, not creativity.

**Scheduling and Booking**

This is how conversations happen. Your calendar tool needs to integrate with the CRM so booking is triggered intentionally, not randomly.

**Traffic and Outreach Tools**

This is how people enter the system. Cold outreach tools, ad platforms, content distribution, partnerships — all of these live outside the core engine. They just need to point traffic into the lead magnet reliably.

## What You Don't Need Yet

You do not need advanced analytics. You do not need custom dashboards. You do not need perfect branding. You do not need complex integrations. Those things come later, if ever.

## What Comes Next

In the next module we'll start to actually build your Client Engine lead magnet step by step. You'll use AI and the platform builder to create a live, usable lead magnet — not a mockup.

This is where the system starts to exist outside of your head.

Move on when you're ready.`,
    },
  });

  // ─── Module 2 Lessons ───

  await prisma.lesson.create({
    data: {
      moduleId: module2.id,
      title: "Anatomy of a Lead Magnet That Converts",
      subtitle: "Why this platform is the template for everything you build",
      order: 6,
      readTime: "5 min read",
      content:
        "Coming soon. This lesson will break down how this platform works as a lead magnet — and how you'll build your own version.",
    },
  });

  await prisma.lesson.create({
    data: {
      moduleId: module2.id,
      title: "Setting Up the Boilerplate With Claude Code",
      subtitle: "From zero to a running local platform in under an hour",
      order: 7,
      readTime: "7 min read",
      content:
        "Coming soon. This lesson will walk you through installing Claude Code and getting the boilerplate running locally.",
    },
  });

  await prisma.lesson.create({
    data: {
      moduleId: module2.id,
      title: "Customizing Your Platform Identity",
      subtitle: "Make it yours — branding, copy, and configuration",
      order: 8,
      readTime: "6 min read",
      content:
        "Coming soon. This lesson will show you how to customize the platform with your brand, messaging, and domain.",
    },
  });

  await prisma.lesson.create({
    data: {
      moduleId: module2.id,
      title: "Creating Your Module and Lesson Structure",
      subtitle:
        "Design the content architecture your prospects will experience",
      order: 9,
      readTime: "6 min read",
      content:
        "Coming soon. This lesson will teach you how to structure your course modules and lessons for maximum impact.",
    },
  });

  await prisma.lesson.create({
    data: {
      moduleId: module2.id,
      title: "Writing and Publishing Your Content With AI",
      subtitle: "Let Claude write your lessons while you shape the direction",
      order: 10,
      readTime: "7 min read",
      content:
        "Coming soon. This lesson covers using Claude Code to write full lesson content in your voice.",
    },
  });

  // ─── Module 3 Lessons ───

  await prisma.lesson.create({
    data: {
      moduleId: module3.id,
      title: "How Behavior-Based Nurture Works",
      subtitle: "Why most follow-up sequences fail and what replaces them",
      order: 11,
      readTime: "5 min read",
      content: "Coming soon.",
    },
  });

  await prisma.lesson.create({
    data: {
      moduleId: module3.id,
      title: "Setting Up Your CRM and Automation Layer",
      subtitle: "Connect your platform to the brain of the system",
      order: 12,
      readTime: "6 min read",
      content: "Coming soon.",
    },
  });

  await prisma.lesson.create({
    data: {
      moduleId: module3.id,
      title: "Writing Your Email Nurture Sequence",
      subtitle:
        "Every message has a job — teach, reframe, prove, or invite",
      order: 13,
      readTime: "7 min read",
      content: "Coming soon.",
    },
  });

  await prisma.lesson.create({
    data: {
      moduleId: module3.id,
      title: "Adding SMS Touchpoints",
      subtitle: "Use text messages for timing, not content",
      order: 14,
      readTime: "4 min read",
      content: "Coming soon.",
    },
  });

  await prisma.lesson.create({
    data: {
      moduleId: module3.id,
      title: "Building Behavior-Based Routing",
      subtitle:
        "Make the system adapt based on what the lead actually does",
      order: 15,
      readTime: "6 min read",
      content: "Coming soon.",
    },
  });

  // ─── Module 4 Lessons ───

  await prisma.lesson.create({
    data: {
      moduleId: module4.id,
      title: "Designing the Booking Experience",
      subtitle: "Booking is a natural outcome, not a hard sell",
      order: 16,
      readTime: "5 min read",
      content: "Coming soon.",
    },
  });

  await prisma.lesson.create({
    data: {
      moduleId: module4.id,
      title: "Building Your Booking System",
      subtitle: "Set up scheduling that integrates with your engine",
      order: 17,
      readTime: "5 min read",
      content: "Coming soon.",
    },
  });

  await prisma.lesson.create({
    data: {
      moduleId: module4.id,
      title: "Trigger-Based Booking Invitations",
      subtitle:
        "Let the system decide when to invite a conversation",
      order: 18,
      readTime: "5 min read",
      content: "Coming soon.",
    },
  });

  await prisma.lesson.create({
    data: {
      moduleId: module4.id,
      title: "Reducing No-Shows and Maximizing Show Rate",
      subtitle:
        "Confirmation, reminders, and pre-call prep that actually work",
      order: 19,
      readTime: "4 min read",
      content: "Coming soon.",
    },
  });

  // ─── Module 5 Lessons ───

  await prisma.lesson.create({
    data: {
      moduleId: module5.id,
      title: "The Traffic Mindset Shift",
      subtitle:
        "You are not selling — you are inviting people to something valuable",
      order: 20,
      readTime: "4 min read",
      content: "Coming soon.",
    },
  });

  await prisma.lesson.create({
    data: {
      moduleId: module5.id,
      title: "Cold Outreach That Leads With Value",
      subtitle:
        "Build outreach sequences that people actually respond to",
      order: 21,
      readTime: "6 min read",
      content: "Coming soon.",
    },
  });

  await prisma.lesson.create({
    data: {
      moduleId: module5.id,
      title: "Organic Content That Feeds the Engine",
      subtitle:
        "Create content that builds authority and drives signups",
      order: 22,
      readTime: "5 min read",
      content: "Coming soon.",
    },
  });

  await prisma.lesson.create({
    data: {
      moduleId: module5.id,
      title: "Paid Ads Fundamentals",
      subtitle: "Amplify what already works with targeted spend",
      order: 23,
      readTime: "5 min read",
      content: "Coming soon.",
    },
  });

  await prisma.lesson.create({
    data: {
      moduleId: module5.id,
      title: "Partnerships and Referral Loops",
      subtitle: "Let other people send you traffic for free",
      order: 24,
      readTime: "4 min read",
      content: "Coming soon.",
    },
  });

  // ─── Module 6 Lessons ───

  await prisma.lesson.create({
    data: {
      moduleId: module6.id,
      title: "Pre-Launch Checklist and Go-Live",
      subtitle:
        "Everything that must work before you flip the switch",
      order: 25,
      readTime: "5 min read",
      content: "Coming soon.",
    },
  });

  await prisma.lesson.create({
    data: {
      moduleId: module6.id,
      title: "Metrics That Matter",
      subtitle: "Track five numbers and ignore everything else",
      order: 26,
      readTime: "4 min read",
      content: "Coming soon.",
    },
  });

  await prisma.lesson.create({
    data: {
      moduleId: module6.id,
      title: "Diagnosing and Fixing Your Funnel",
      subtitle:
        "When something is not working, here is exactly where to look",
      order: 27,
      readTime: "5 min read",
      content: "Coming soon.",
    },
  });

  await prisma.lesson.create({
    data: {
      moduleId: module6.id,
      title: "Scaling Your Client Engine",
      subtitle: "More traffic, more channels, more leverage",
      order: 28,
      readTime: "5 min read",
      content: "Coming soon.",
    },
  });

  // ─── Summary ───
  const moduleCount = await prisma.module.count();
  const lessonCount = await prisma.lesson.count();

  console.log(`✅ Seeding complete!`);
  console.log(`   Modules created: ${moduleCount}`);
  console.log(`   Lessons created: ${lessonCount}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
