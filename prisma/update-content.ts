import "dotenv/config";
import { PrismaClient } from "../src/generated/prisma";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

const lessons: Record<number, string> = {

// ============================================================
// LESSON 1: Welcome to The Client Engine
// ============================================================
1: `## Let's Build a 100% Automated Sales Machine

Most people never build a real client acquisition system.

They build fragments.

A lead magnet here. A random cold email campaign there. A Facebook ad they turned off after a few days because the leads were garbage. Some half-assed automation a freelancer set up that doesn't actually do anything.

Everyone in the agency world knows they could get more leads if they really sat down and built the machine... but no one ever does — because every version of "the machine" is a fucking project.

It's complicated. It's scattered. It takes time.

And there's no real playbook that takes you from zero to automated, ready-to-buy leads on your calendar.

Until now.

If you're here, you already know what you should be doing to grow your business... but knowing and executing are two very different things.

You've tried outreach, ads, content, referrals — and maybe some pieces worked for a moment — but the leads were low-quality, inconsistent, and rarely ready to buy. Every call felt like you were dragging someone uphill.

Maybe you've bought lead lists, hired appointment setters, or paid some "lead system" guy who promised you weekly appointments... only to cancel sixty days later because nothing actually changed.

Or maybe you do have parts of a system — a calendar tool here, a workflow there — but everything is duct-taped together, fragile, and requires constant babysitting.

You're tired of grinding. You're tired of chasing. You're tired of manually doing things that should have been automated years ago.

And you're right to feel that way.

The consulting and agency world is flooded with half-baked funnels, overhyped gurus, and "plug-and-play" systems that never fucking plug or play. Everyone sells the dream of predictability, but no one gives you the architecture.

So we built something different.

Something clean. Something predictable. Something automated. Something you can deploy in a single weekend without turning into a full-time systems engineer.

This entire platform — the one you're reading right now — was built with Claude Code in a weekend. Every page. Every lesson. The signup flow, the progress tracking, the behavior monitoring. All of it. Built with Claude Code.

This is The Client Engine — a fully automated, AI-powered acquisition system that pulls in leads, warms them, educates them, and books them onto your calendar ready to buy.

Not "interested." Not "maybe." Not "circle back next quarter." Ready to buy.

This system runs 24/7. It compounds daily. And once assembled, it requires almost no effort to maintain because every piece of it is automated or built with Claude Code.

Opt-ins are handled. Nurture is handled. Follow-ups are handled. Behavior-based routing is handled. Calendar booking is handled. Traffic is scalable. And your leads show up prepared, informed, and pre-sold.

By the time you finish this course, you will have a complete lead magnet built by Claude Code, a full training platform that positions you as the authority, a multi-path email and SMS nurture engine that adapts automatically, a booking system that fills your calendar without you, and traffic systems you can scale as aggressively as you want.

No freelancers. No overhyped "lead machines." No duct tape.

Just a clear, proven architecture — and Claude Code to assemble it for you.

Welcome to The Client Engine.

## The Lead Magnet That Actually Converts

Instead of begging for attention with generic "free strategy call" offers, you'll create a lead magnet so valuable that people want to check it out the moment they see it.

The kind of asset that stops the scroll.

The kind of asset that feels like it should cost money, but you give it away for free — because it becomes the single most powerful trust builder in your acquisition engine.

And here's the wild part:

With Claude Code, you can build nearly the entire thing automatically.

You just shape the direction.

And the result is a value-first entry point into your world — a front door that attracts high-intent, self-selecting prospects who want to hear what you have to say.

Prospects who show up warmed.

Prospects who show up curious.

Prospects who show up thinking, "If this is free... What does the paid offer look like?"

And if you want the perfect example of this type of lead magnet?

You're literally inside it.

![The landing page you saw before signing up](/lessons/screenshots/landing-hero.png)

This entire training platform — the structure, the design, the writing, the flow, the content you're reading right now — was built with Claude Code. Every page. Every lesson. The signup flow, the progress tracking, the behavior monitoring that personalizes your experience.

All of it. Built with Claude Code.

And you're experiencing exactly the kind of asset your future prospects will experience.

That's the beauty of this system.

You're learning by stepping directly into the machine you're going to build yourself.

![Your portal — progress tracking, modules, and lessons](/lessons/screenshots/portal-dashboard.png)

When you finish this course, you'll download a boilerplate version of this exact platform and rebuild it for your business using Claude Code. Same stack. Same architecture. Your content. Your audience.

## Behavior-Based Nurture Engine

Most "lead gen systems" die the moment someone opts in. The follow-up is weak, inconsistent, or completely manual — and the lead goes cold before you ever get a chance to talk to them.

The Client Engine eliminates that problem entirely.

Every email and text is relevant to the lead based on their behavior. Every path adapts to what the lead actually does.

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

By the end of this training, you will have a complete lead magnet built by Claude Code — a course platform just like this one, rebuilt for your business. A behavior-based nurture engine that sends the right emails and texts at the right time. A booking system that fills your calendar. And traffic systems you can scale as aggressively as you want.

You'll build all of it with Claude Code. No prior coding experience needed. No freelancers. No duct tape.

Just a proven system — like the one you're in right now — rebuilt for your business in a single weekend.

## Let's Get Started

Move on to the next lesson, The Architecture Breakdown. You'll see how every piece fits together — and how quickly you can assemble your own Client Engine.

Let's build your machine.`,


// ============================================================
// LESSON 2: The Architecture Breakdown
// ============================================================
2: `## How The Client Engine Works

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

\`\`\`
┌─────────────┐     ┌─────────────────┐     ┌────────────────┐     ┌──────────┐     ┌──────────────┐
│  TRAFFIC IN  │────▶│  LEAD MAGNET    │────▶│ NURTURE ENGINE │────▶│ BOOKING  │────▶│ FEEDBACK     │
│              │     │  (Course        │     │ (Email + SMS   │     │ LAYER    │     │ LOOP         │
│ • Outreach   │     │   Platform)     │     │  Behavior-     │     │          │     │              │
│ • Ads        │     │                 │     │  Triggered)    │     │ Calendar │     │ Data feeds   │
│ • Content    │     │ Signup ▶ Learn  │     │                │     │ + Qual   │     │ back into    │
│ • Referrals  │     │ ▶ Engage       │     │ Cold ▶ Warm    │     │ Gate     │     │ the system   │
│              │     │                 │     │ ▶ Ready        │     │          │     │              │
└─────────────┘     └─────────────────┘     └────────────────┘     └──────────┘     └──────────────┘
                                                                                            │
                            ◀───────────────────────────────────────────────────────────────┘
\`\`\`

**Component One: Traffic In**

Everything starts with traffic. Cold outreach, paid ads, organic content, referrals, partnerships — none of that changes. What changes is where that traffic goes. Instead of sending people to a sales page or a booking link, you send them to a value-first asset that earns attention instead of demanding it.

**Component Two: The Lead Magnet (Your Course Platform)**

This is the front door. And in your case, it's a course platform built with Claude Code — just like the one you're using right now.

It's built on Next.js and Prisma. It runs as a real web application. Prospects sign up, create an account, and experience structured training content that teaches them something genuinely useful.

This is not a PDF. This is not a webinar replay. This is a live platform that feels like a product — because it is one.

The goal is not volume. The goal is intent. People who sign up and start completing lessons are self-selecting as serious prospects.

**Component Three: The Nurture Engine (Behavior-Triggered Email and SMS)**

Once someone opts in, they enter the most important part of the system. This is where trust is built.

The nurture engine uses Resend for email and Twilio for SMS. It observes behavior — what lessons they complete, how fast they move, whether they stall out — and responds automatically.

It teaches, reinforces, and positions you as the authority while the lead consumes content at their own pace.

**Component Four: The Booking Layer**

The booking system is not a call-to-action. It is a natural outcome. When the nurture engine has done its job, the prospect does not need convincing. The calendar is simply the final step in the flow.

**Component Five: The Feedback Loop (Built-In Behavior Tracking)**

This is the part most people miss. And it's built directly into the platform you're going to create.

Every action feeds data back into the system. Which lessons someone opened. How long they spent. Whether they completed them. Whether they clicked the booking CTA.

That data drives what emails get sent, when SMS fires, and when the booking invitation appears. The system gets smarter the longer it runs.

## How Everything Connects

Traffic enters the lead magnet. The lead magnet feeds the nurture engine. The nurture engine qualifies and educates. Qualified leads move to booking. Booking outcomes feed data back into the system.

Nothing exists on its own. Every piece hands off to the next. When one part improves, the entire system improves.

## Why This Is Built With Claude Code

Claude Code is not a chatbot. It's a CLI tool — a command-line development environment that reads your codebase, writes code, runs commands, and builds real applications.

You're not copying and pasting from a chat window. You're telling Claude Code what to build, and it builds it. Inside your actual project. With real files, real database migrations, real deployments.

That's how this platform was built. And that's how you'll build yours.

Claude Code removes the bottleneck of creation, writing, and iteration. It allows you to build assets, messages, and flows that would normally take weeks or months — in a weekend.

You are not replacing strategy with AI. You are replacing manual labor with automation.

## Next Up

In the next lesson, we'll help you choose your offer and audience. You'll define exactly who your Client Engine is for and what problem it solves — before you build a single piece of it.`,


// ============================================================
// LESSON 3: Choosing Your Offer & Audience
// ============================================================
3: `Before you build anything, you need to decide who this system is for and what problem it is solving.

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

So instead of selling from the first touch, a recruiter builds a free hiring platform for employers. A course that teaches employers how to write better job ads, structure interviews, reduce time-to-hire, and avoid bad hires. Employers sign up, learn something genuinely useful, and start seeing the recruiter as an expert — not a salesperson.

Five years ago, building something like this would have taken months and tens of thousands of dollars. Today, with Claude Code, it can be built in hours. Literally hours. You'll see exactly how in Module 2.

Now compare how outreach looks.

Instead of saying "Can I recruit for you?", the recruiter can say: "Hey, we built a free hiring platform that helps employers write better job ads, structure interviews, and reduce time-to-hire. It's completely free — would love your feedback."

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

Open Claude and use this prompt to help you nail it down:

\`\`\`prompt
I need help crafting my core offer statement. Here's my background:

- I currently help [describe who you help]
- The main problem I solve is [describe the problem]
- The result I deliver is [describe the outcome]

Help me complete this sentence in the simplest, most direct way possible:
"I help ___ get ___ without ___."

Give me 5 variations. Keep them short, clear, and jargon-free. A stranger should understand each one in under 5 seconds.
\`\`\`

## Action Items

Write your "I help ___ get ___ without ___" sentence. Say it out loud. If it takes more than five seconds to say, simplify it.

Then write down: What does your audience currently struggle with that you could teach them for free? What would make them think "holy shit, this is actually useful" before you ever pitch them anything?

Keep those answers. You'll use them in the next two lessons.

## Next Up

In the next lesson, we'll map your entire Client Engine using Claude. You'll take your offer and audience and turn them into a clear system blueprint before you build a single asset.`,


// ============================================================
// LESSON 4: Mapping Your Client Engine
// ============================================================
4: `At this point, you should have two things clearly defined.

You know who your audience is. You know what kind of value you want to give them.

Now it's time to design the system that connects everything together.

This is where most people get stuck.

They open a blank doc. They stare at it. They overthink every step. They try to design the perfect funnel in their head and never actually build anything.

Claude removes that friction completely.

## Why Mapping Comes Before Building

Before you touch tools, platforms, or software, you need a clear map.

Not a wireframe. Not a technical diagram. A simple, logical flow of how someone moves from stranger to client.

If you skip this step, you'll end up rebuilding things later. If you do it right once, everything downstream becomes obvious.

## Using Claude as a Strategic Partner

This is where Claude becomes more than a writing tool. You are going to use it as a systems designer.

Instead of asking Claude to "write copy," you ask it to think.

You give it context about your audience, your offer, and your goals, and you let it help you structure the flow.

And here's the thing — you're going to use Claude Code for the actual building. But right now, in the planning phase, you can use Claude in chat mode (claude.ai) to think through your system. Claude Code is the CLI tool that writes and executes code. Claude chat is where you brainstorm and strategize.

Both are Claude. Different interfaces for different jobs.

## The First Prompt That Matters

The first thing you want Claude to help you answer is simple:

"What does my ideal client need to understand before they are ready to buy?"

That single question opens up everything else.

Claude will help you list the misconceptions, the knowledge gaps, the objections, and the moments of confusion that stop people from moving forward.

## Let's Map Out Your Client Engine

Start with a blank document.

Do not open tools. Do not pick software. Do not think about platforms.

You are designing logic first.

Open Claude and give it context. Tell it who your audience is. Tell it what you help them with. Tell it what outcome you ultimately sell.

Then ask it one simple question.

"What does this person need to believe, understand, and trust before they are ready to buy from me?"

Do not ask for copy. Do not ask for emails. Ask for thinking.

Here's the truth list prompt — copy this and fill in the blanks:

\`\`\`prompt
I need you to think like a strategist, not a copywriter.

My business: [describe what you do]
My audience: [describe who you serve]
The outcome I sell: [describe the result clients get]

What does this person need to believe, understand, and trust before they are ready to buy from me?

Give me a raw, honest list of:
- What they currently misunderstand about this problem
- What they overestimate about solving it themselves
- What they underestimate about the cost of doing nothing
- What they are skeptical about
- What they fear
- What they need clarity on before they'll take action

Be blunt. No fluff. No marketing speak. Just the raw truth about what's standing between them and buying.
\`\`\`

You want a raw list of: What they misunderstand. What they overestimate. What they underestimate. What they are skeptical about. What they fear. What they need clarity on.

This becomes your truth list.

Once you have that list, group it. Not by topic. By sequence.

What do they need to understand first? What only makes sense after that? What needs repetition? What needs proof?

Use this prompt to sequence your truth list:

\`\`\`prompt
Here's my truth list — the things my audience needs to believe before they'll buy:

[paste your truth list here]

Now organize this into a belief sequence. What do they need to understand FIRST before anything else makes sense? What builds on that? What only lands after trust is established?

Group these into 3-5 phases. Each phase should build on the last. Label each phase with what it accomplishes (e.g., "Phase 1: Break the old mental model" or "Phase 2: Show what's actually possible").

This sequence will become the backbone of my lead magnet content.
\`\`\`

Now you are no longer guessing. You are sequencing belief.

Next, map the core flow.

Discovery → Value → Trust → Readiness → Conversation

Under each stage, write what must happen.

Then assign responsibilities. The lead magnet handles value. The nurture handles trust. Behavior signals handle readiness. The calendar handles conversation.

Use this prompt to map it all together:

\`\`\`prompt
I'm building an automated client acquisition system. Here's my belief sequence:

[paste your sequenced truth list]

Now map this to a 5-stage client flow:

1. Discovery — How do they find me?
2. Value — What do I give them for free that earns attention?
3. Trust — What builds credibility over time?
4. Readiness — What signals tell me they're ready to buy?
5. Conversation — How do I get them on a call?

For each stage, tell me:
- What the prospect experiences
- What the system does automatically
- What content or messaging is needed
- What behavior signals to track

Be specific. Use my actual business context, not generic advice.
\`\`\`

Once your Client Engine is mapped, building becomes mechanical.

You're no longer asking, "What should I build?" You already know.

## Action Items

Open Claude (claude.ai) and run the truth list exercise. Give it your audience and offer. Ask what your prospect needs to believe before they'll buy.

Group the output by sequence. Save this — it becomes the foundation for your course content and your nurture emails.

Then sketch the five-stage flow: Discovery → Value → Trust → Readiness → Conversation. Write one sentence under each stage describing what happens.

## Next Up

In the next lesson, we'll show you the exact tech stack you need to build your Client Engine. No guessing. No bloated tool lists. Just the tools that matter.`,


// ============================================================
// LESSON 5: Build Your Tech Stack
// ============================================================
5: `## The Tech Stack That Powers Your Client Engine

Before you build anything, you need to understand exactly what tools you're working with.

This is not a list of 47 SaaS products you need to sign up for. It's five categories. Most of it is free or near-free to start.

And the most important tool on this list is one you've probably never used before.

## Claude Code — The Tool That Builds Everything

Let's start here because this is the foundation.

Claude Code is not a chatbot. It's not the Claude you use in your browser. It's a command-line tool — a CLI — that reads your entire codebase, writes files, runs commands, creates database migrations, and builds real applications.

You install it globally with npm. You run it in your terminal. You tell it what to build, and it builds it. Inside your actual project directory. With real files.

This is how this entire platform was built. The landing page. The signup flow. The lesson pages. The progress tracking. The behavior monitoring. All of it — Claude Code.

You don't need to know how to code. Claude Code knows how to code. You need to know what you want built and how to describe it clearly. That's it.

We'll walk you through installation and setup in Module 2.

## Next.js + Prisma — The Framework and Database

Your Client Engine platform runs on Next.js (a React framework) and Prisma (a database toolkit).

Next.js handles the frontend — what people see and interact with. Prisma handles the backend — user accounts, lesson progress, behavior events, all stored in a PostgreSQL database.

You don't need to understand these deeply. Claude Code does. But it helps to know what they are so you're not lost when you see file names and folder structures.

The boilerplate you'll download already has all of this set up. You clone it, run a few commands, and you have a working platform on your local machine.

Here's a preview of the setup commands you'll run in Module 2:

\`\`\`bash
# Clone the boilerplate
git clone [boilerplate-repo-url] my-client-engine
cd my-client-engine

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env

# Set up the database
npx prisma migrate dev
npx prisma db seed

# Start the platform
npm run dev
\`\`\`

> Don't run these yet — we'll walk through each step in detail in Lesson 7. This is just so you can see how simple the setup actually is.

## The CRM and Automation Layer

This is the brain of your nurture system. It tracks contacts, manages tags, runs automation sequences, and triggers actions based on behavior.

We recommend GoHighLevel for this. It handles CRM, email sequences, SMS, pipeline management, and calendar booking all in one platform. It's built for agencies and consultants, and it plays well with webhook integrations.

If you already use a CRM you love, you can make it work. But GoHighLevel is the path of least resistance for this system.

## Email (Resend) and SMS (Twilio)

Your platform needs to send transactional emails and behavior-triggered messages.

**Resend** handles email. It's clean, developer-friendly, and has a generous free tier. Claude Code can set up the integration in minutes.

**Twilio** handles SMS. Welcome texts, stall nudges, booking reminders — all automated. Twilio is the industry standard and costs pennies per message.

These are the communication rails. Your CRM decides what to send and when. Resend and Twilio handle delivery.

## Scheduling and Booking

Your calendar tool needs to do three things: show availability, let people book, and notify your CRM when they do.

GoHighLevel has a built-in calendar that handles all of this. If you're using a different CRM, tools like Calendly or Cal.com work fine.

The key is integration. When someone books, the CRM needs to know. When someone no-shows, the CRM needs to know. Everything feeds back into the system.

## What You Don't Need Yet

You do not need advanced analytics dashboards. You do not need custom reporting. You do not need perfect branding. You do not need a mobile app. You do not need complex integrations with twelve different tools.

You need the system working end-to-end. Polish comes later. Function comes first.

## The Cost Breakdown

Here's what this actually costs to run:

- **Claude Code** — Anthropic API usage. Pay for what you use. Building a full platform might cost $10-30 in API calls.
- **Vercel** — Free tier hosts your platform. You won't outgrow free tier for a long time.
- **PostgreSQL (Neon or Supabase)** — Free tier database. More than enough to start.
- **Resend** — Free tier covers 3,000 emails/month. Plenty for launch.
- **Twilio** — Pay per message. A few cents per SMS.
- **GoHighLevel** — Starts around $97/month. This is your biggest cost and your most valuable tool after Claude Code.
- **Domain** — $10-15/year.

Total to launch: roughly $100-150/month. Most of that is the CRM.

Compare that to hiring a developer, a copywriter, and a marketing automation specialist. This is a rounding error.

## Action Items

Sign up for the tools you don't already have. At minimum: an Anthropic API account (for Claude Code), a Vercel account (for hosting), and a GoHighLevel account (for CRM and automation).

Don't set anything up yet. Just get accounts created. We'll configure everything step by step in the next module.

## Next Up

Module 2 starts now. You're going to build your lead magnet — a course platform just like this one — using Claude Code and the boilerplate. This is where the system starts to exist outside of your head.

Let's go.`,


// ============================================================
// LESSON 6: Anatomy of a Lead Magnet That Converts
// ============================================================
6: `## Why a Course Platform Is the Ultimate Lead Magnet

Most lead magnets are garbage.

A PDF nobody reads. A webinar replay nobody watches. A "free strategy call" that scares people away because it reeks of a sales pitch.

These formats fail because they don't build trust. They just collect an email address and hope for the best.

A course platform is different. It's a living, breathing asset that delivers real value over multiple sessions. It keeps people coming back. It builds authority with every lesson they complete. And it gives you data on exactly how engaged each lead is.

That's why you're going to build one.

## The Meta Breakdown: You're Inside the Template

I want you to understand something clearly.

This platform — the one you're reading right now — is not separate from the product. It IS the product. It's the template. It's the example. It's the exact thing you're going to rebuild for your own business.

So let's break down what you're experiencing, piece by piece.

**The Landing Page**

Before you signed up, you saw a landing page. It led with value, not a pitch. It told you what you'd learn, not what you'd buy. It positioned the free training as the main event — not a teaser for something behind a paywall.

![The landing page — value-first, no pitch](/lessons/screenshots/landing-hero.png)

That's intentional. The landing page exists to make signing up feel like a no-brainer.

![Full landing page layout](/lessons/screenshots/landing-full.png)

**The Signup Flow**

Simple. Name, email or phone, password. No credit card. No 47-field form. No friction.

![The signup page — minimal fields, zero friction](/lessons/screenshots/signup-page.png)

Every extra field you add kills conversions. Keep it minimal.

**The Portal With Progress Tracking**

Once you're in, you see modules, lessons, and your progress. You know where you are. You know what's next. There's a sense of structure and momentum.

![Your portal after logging in — modules and progress](/lessons/screenshots/portal-dashboard.png)

This matters more than people think. Progress bars and completion states create psychological commitment. The more someone completes, the more invested they feel.

![Progress tracking keeps people coming back](/lessons/screenshots/portal-progress.png)

**Sequential Lessons That Build Trust**

The lessons are gated sequentially. You go through them in order. Each one builds on the last.

![A module page showing the lesson sequence](/lessons/screenshots/module-page.png)

This isn't about control. It's about belief sequencing — the idea from Lesson 4. You deliver information in the order that builds maximum trust and understanding.

**The Booking CTA**

Notice where the "Book a Consultation" button appears. It's not slapped on every page. It shows up contextually — after someone has consumed enough content to understand what you do and why it matters.

![The booking CTA — contextual, not pushy](/lessons/screenshots/consultation-cta.png)

This is the difference between a CTA that converts and one that gets ignored.

## Why This Format Beats Everything Else

**PDFs** get downloaded and forgotten. There's no engagement data. No return visits. No relationship.

**Webinars** require people to show up at a specific time. Most don't. Replays get ignored. And a one-hour video is a terrible format for building trust over time.

**"Free Strategy Calls"** ask for commitment before trust exists. Most serious buyers won't book a call with someone they just discovered. It's too much, too soon.

**A course platform** delivers value across multiple sessions, builds trust incrementally, gives you behavioral data on every lead, and creates the conditions where booking a call feels like the obvious next step — not a leap of faith.

## The Recruiter Example

Remember the recruiter from Lesson 3?

Their free hiring platform — rebuilt as a course — would look exactly like this. Modules on writing better job descriptions, structuring interviews, reducing time-to-hire, avoiding costly mis-hires.

Employers sign up. They complete lessons. They start seeing the recruiter as a hiring expert, not a cold-calling salesperson.

And when the recruiter's CTA says "Want us to handle this for you?" — it doesn't feel like a pitch. It feels like a natural next step.

That's the power of this format.

## Action Items

Open this platform in a second tab. Walk through it as a prospect would. Start from the landing page. Go through signup. Look at the module structure.

Note every structural element: the progress tracking, the sequential gating, the lesson format, where the booking CTA appears.

Write down what you'd change for your audience. What modules would you create? What would your landing page say?

You're about to build your own version. Knowing what you're building — and why each piece exists — matters.

## Next Up

In the next lesson, you're going to install Claude Code and get the boilerplate running on your machine. This is where building starts.`,


// ============================================================
// LESSON 7: Setting Up Claude Code and the Boilerplate
// ============================================================
7: `## What Claude Code Actually Is

Let's clear this up right now because there's a lot of confusion.

Claude Code is not the Claude you use in your browser at claude.ai. That's Claude in chat mode — great for brainstorming, writing, and answering questions.

Claude Code is a CLI tool. CLI stands for command-line interface. It runs in your terminal. It reads your entire project — every file, every folder, every config. It writes code, creates files, runs commands, installs packages, creates database tables, and deploys applications.

It's not autocomplete. It's not a suggestion engine. It's a full development partner that operates inside your codebase.

You tell it what you want. It builds it. You review it. You tell it to adjust. It adjusts. That's the workflow.

No coding experience required. You need to be able to describe what you want clearly. That's the only skill that matters.

## Installing Claude Code

Here's the setup process. Follow each step in order.

**Step 1: Install Node.js**

Claude Code runs on Node.js. If you don't have it installed, go to nodejs.org and download the LTS (Long Term Support) version. Run the installer. That's it.

To verify it's installed, open your terminal and type:

\`\`\`bash
node --version
\`\`\`

You should see a version number. If you do, you're good.

**Step 2: Install Claude Code**

In your terminal, run:

\`\`\`bash
npm install -g @anthropic-ai/claude-code
\`\`\`

This installs Claude Code globally on your machine. The \`-g\` flag means it's available everywhere, not just in one project folder.

**Step 3: Get an Anthropic API Key**

Go to console.anthropic.com. Create an account if you don't have one. Navigate to API Keys and generate a new key.

Copy that key. You'll need it in a minute.

**Step 4: Authenticate**

In your terminal, run:

\`\`\`bash
claude
\`\`\`

The first time you run it, it will ask for your API key. Paste it in. Done.

You now have Claude Code installed and authenticated. That's the hardest part, and it took about five minutes.

## Cloning the Boilerplate

The Client Engine boilerplate is a pre-built version of this platform. It has the same structure, the same features, and the same architecture — but with placeholder content ready for you to customize.

Clone it from the repository:

\`\`\`bash
git clone [boilerplate-repo-url] my-client-engine
cd my-client-engine
\`\`\`

Replace \`[boilerplate-repo-url]\` with the actual URL you'll receive. Replace \`my-client-engine\` with whatever you want to name your project.

## Running the Setup

Once you're inside the project directory, run these commands in order:

\`\`\`bash
npm install
\`\`\`

This installs all the project dependencies. Takes about a minute.

Next, set up your environment variables. Copy the example env file:

\`\`\`bash
cp .env.example .env
\`\`\`

Open the \`.env\` file and fill in your database URL. If you're using Neon (recommended for free PostgreSQL hosting), create a database there and paste the connection string.

Then run the database setup:

\`\`\`bash
npx prisma migrate dev
npx prisma db seed
\`\`\`

The first command creates all the database tables. The second command populates them with sample modules and lessons.

Finally, start the development server:

\`\`\`bash
npm run dev
\`\`\`

Open your browser and go to \`http://localhost:3000\`.

You should see the platform running. Landing page. Signup. Login. Lessons. All of it.

If you see it — congratulations. You just set up a full-stack web application. Probably took you 15 minutes.

## The Project Structure

You don't need to memorize this, but it helps to know where things live.

- \`/app\` — This is the main application code. Pages, components, API routes.
- \`/prisma\` — Database schema and seed files. This is where your modules and lessons are defined.
- \`/public\` — Static files like images and icons.
- \`.env\` — Your environment variables (database URL, API keys). Never share this file.

When you use Claude Code, it understands all of this automatically. You don't need to navigate the file structure yourself. Just tell Claude Code what to change, and it finds the right files.

## Your First Claude Code Command

Let's test it. Make sure you're in your project directory, then run:

\`\`\`bash
claude
\`\`\`

Claude Code will start up and read your project. It now understands the entire codebase.

Try telling it something simple like this:

\`\`\`prompt
Change the platform name in the landing page header to [Your Business Name]. Update it everywhere it appears — the nav bar, the page title, the footer.
\`\`\`

Watch what happens. It finds the right file. It makes the change. It shows you what it did. You approve it.

That's the workflow. For everything.

## Action Items

Install Node.js if you don't have it. Install Claude Code. Get your Anthropic API key. Clone the boilerplate. Run the setup commands. See the platform running on localhost.

Then run Claude Code and make one small change — anything. Change a title, a color, a word. Just experience the workflow.

Once you've done that, you're ready for the next lesson where we start customizing this thing for real.

## Next Up

In the next lesson, you'll customize the platform identity — branding, colors, copy, and configuration. You'll make it yours.`,


// ============================================================
// LESSON 8: Customizing Your Platform
// ============================================================
8: `## Make It Yours

You've got a working platform running on localhost. It looks like The Client Engine because it IS The Client Engine — the boilerplate version.

Now you're going to make it yours.

New name. New colors. New copy. Your brand. Your voice. Your audience.

And you're going to do it all by talking to Claude Code.

## How to Prompt Claude Code Effectively

Here's the thing about Claude Code that most people miss at first.

It already knows your entire project. Every file. Every component. Every style. Every database table.

You don't need to tell it where things are. You just need to tell it what you want.

But — and this is important — the more context you give about your business, the better the output.

Bad prompt: "Change the colors."

Good prompt: "I run a consulting firm for SaaS companies. My brand colors are dark navy (#1a1a2e) and electric blue (#0ea5e9). Update the landing page, navigation, and buttons to use these colors. Keep the overall layout the same."

See the difference? Same request. Wildly different result.

## Changing the Platform Name and Branding

Start with the basics. Open Claude Code in your project directory:

\`\`\`bash
claude
\`\`\`

Then use a prompt like this:

\`\`\`prompt
Update the platform name from 'The Client Engine' to '[Your Platform Name]' everywhere it appears — landing page, navigation, page titles, footer, and metadata. Also update the meta description and og:title tags.
\`\`\`

Claude Code will find every instance and update it. It'll show you the changes. You approve them.

Next, update the tagline and landing page copy:

\`\`\`prompt
Rewrite the landing page hero section. My audience is [who they are]. My platform teaches them [what it teaches]. The tone should be direct, confident, and value-first. No hype. No buzzwords. Keep the layout and structure the same — just update the text.
\`\`\`

## Updating Colors and Visual Style

The boilerplate uses a default color scheme. You'll want to match your brand.

\`\`\`prompt
Update the color scheme across the entire platform. Primary color: [hex code]. Accent color: [hex code]. Background: [hex code]. Make sure buttons, links, navigation, and headings all use the new palette consistently. Update the Tailwind config and any hardcoded color values.
\`\`\`

Claude Code will update the Tailwind config and any hardcoded colors throughout the app.

## Updating the Hero and Landing Page

The landing page is your front door. This is what people see before they sign up.

It needs to do three things:
1. Tell them what they'll learn
2. Make it feel valuable enough to sign up for
3. Make signing up effortless

Don't try to be clever with the landing page. Be clear. Tell people exactly what they get. Make the signup button obvious.

## Setting Up Your CLAUDE.md File

Before you go further, set up your voice guide. This file tells Claude Code how to write for your brand across the entire project.

[Download the CLAUDE.md voice/style template](/lessons/downloads/claude-md-template.md){.download}

Drop this file in your project root and customize it with your voice, audience, and style rules. Every time Claude Code runs, it reads this file first — so your brand voice stays consistent across everything it writes.

## Connecting a Custom Domain

Once you're happy with how the platform looks locally, you'll want to deploy it with a custom domain.

We use Vercel for hosting. It's free for projects like this.

1. Push your project to a GitHub repository
2. Connect that repo to Vercel
3. Add your custom domain in Vercel's settings
4. Update your DNS records to point to Vercel

Claude Code can help with the deployment too:

"Help me set up this project for deployment on Vercel. Walk me through the steps."

## A Warning About Perfectionism

You will be tempted to spend three days tweaking colors, fonts, and copy before moving on.

Don't.

Get it to 80%. Ship it. You can always come back and refine later. The system only works when it's live and receiving traffic. A perfect landing page that nobody sees is worth exactly nothing.

## Action Items

Open Claude Code. Update the platform name and branding. Change the color scheme to match your brand. Rewrite the landing page copy for your audience.

Deploy to Vercel if you're ready. If not, at least push to GitHub so you have a backup.

Move to the next lesson when the platform feels like yours — not like a template.

## Next Up

In the next lesson, you'll design the content architecture — your modules and lessons. This is where you decide what your lead magnet actually teaches.`,


// ============================================================
// LESSON 9: Structuring Your Course Content
// ============================================================
9: `## What Should Your Lead Magnet Teach?

This is the question everyone overthinks.

They want the content to be perfect. They want it to be comprehensive. They want to cover every possible angle.

And then they never finish because the scope keeps expanding.

Here's the truth: your lead magnet doesn't need to teach everything. It needs to teach enough to build trust and demonstrate expertise.

That's it.

## Start With Your Truth List

Remember the truth list from Lesson 4? The one where you asked Claude: "What does my ideal client need to believe, understand, and trust before they are ready to buy from me?"

That list is your content blueprint.

Each truth becomes a lesson. Each group of related truths becomes a module. The sequence you mapped — what they need to understand first, what comes next, what needs proof — that's your module order.

You already did the hard work. Now you're just organizing it.

## The Difference Between Teaching Content and Selling Content

This is where a lot of people fuck it up.

Teaching content says: "Here's how to do the thing."

Selling content says: "Here's why you should hire me to do the thing."

Your lead magnet should be 80% teaching and 20% selling. And the selling should never feel like selling. It should feel like a natural conclusion the reader arrives at on their own.

"Oh, I could do this myself... but it would be way easier if they just did it for me."

That's the reaction you want. Not because you held back information. Because you showed them exactly how much work is involved and positioned yourself as the person who already has the system built.

## How Many Modules and Lessons?

Less than you think.

3-5 modules. 3-6 lessons per module. Total: 12-25 lessons.

Each lesson should take 3-7 minutes to read. That's about 600-1500 words.

If someone can complete your entire training in 2-3 hours of total reading, that's perfect. Long enough to build real trust. Short enough that people actually finish.

Don't create 50 lessons. Nobody will finish. And an unfinished lead magnet is a failed lead magnet.

## Why Sequential Gating Matters

The boilerplate has sequential lesson gating built in. Users complete lessons in order. They can't skip ahead.

This matters for two reasons.

First, belief sequencing. The information lands differently when it's delivered in the right order. If someone reads your "here's what we offer" lesson before understanding the problem, it falls flat. But if they read it after five lessons that redefined their understanding — it hits hard.

Second, engagement data. Sequential gating gives you clean data on where people drop off. If 80% of signups complete Module 1 but only 30% start Module 2, you know exactly where your content loses them. That's actionable information.

## Using Claude Code to Generate Your Structure

Open Claude Code and use this prompt:

\`\`\`prompt
I need to create a course structure for my lead magnet platform.

My audience: [who they are]
What the training teaches: [the core topic]
The outcome for the learner: [what they'll be able to do after]

Here's my truth list from my planning session:
[paste your truth list from Lesson 4]

Create a module and lesson structure with:
- 3-5 modules, each with a clear theme
- 3-5 lessons per module
- A title and subtitle for each lesson
- Estimated read time (3-7 min each)
- A one-sentence description of what each lesson accomplishes

The sequence should follow the belief-building order: break old assumptions first, then teach the new way, then show proof, then make the offer feel like a natural next step.
\`\`\`

Claude Code will generate the entire structure. Review it. Adjust the order if needed. Rename anything that feels off.

Then update your database seed file:

"Update the prisma seed file with these modules and lessons: [paste the structure]. Keep the same format as the existing seed file."

Run the seed command and your platform now has your custom course structure.

## Action Items

Pull up your truth list from Lesson 4. If you didn't do it, do it now — it's a 10-minute exercise with Claude.

Use Claude Code to generate your module and lesson structure. Aim for 3-5 modules, 15-20 lessons total.

Update the seed file. Run the seed. Check your platform — you should see your modules and lesson titles in the portal.

Don't write the actual lesson content yet. That's next.

## Next Up

In the next lesson, you'll use Claude Code to write full lesson content in your voice. This is where the platform goes from skeleton to something real.`,


// ============================================================
// LESSON 10: Writing Your Lessons With Claude Code
// ============================================================
10: `## Let Claude Write. You Shape.

You've got your structure. Modules. Lessons. Titles. Subtitles. Read times.

Now you need content.

And if you're sitting there thinking "I have to write 15-20 full lessons" — relax. You don't. Claude Code does. You edit.

The workflow is simple: you give Claude Code context about your voice and audience, tell it which lesson to write, review the output, and adjust. One lesson takes about 10-15 minutes. Your entire lead magnet content can be done in an afternoon.

## The CLAUDE.md File

This is the single most important thing you'll create for content quality.

A CLAUDE.md file sits in your project root and gives Claude Code persistent instructions. Every time Claude Code runs, it reads this file first. Think of it as programming Claude's personality for your project.

[Download the CLAUDE.md voice/style template](/lessons/downloads/claude-md-template.md){.download}

If you downloaded this in the last lesson, great — make sure it's customized. If not, grab it now and fill it in before you write a single lesson.

Create a file called \`CLAUDE.md\` in your project root. Here's what to put in it:

\`\`\`
# Writing Instructions

Voice: [Describe your writing style. Short sentences? Long form? Casual? Professional? Do you curse? Are you funny? Direct?]

Audience: [Who are you writing for? What do they know? What don't they know?]

Never use: [List words and phrases that sound fake or off-brand for you. Common ones: "leverage," "unlock," "empower," "delve," "harness," "game-changer"]

Always: [List rules. Examples: "Use line breaks liberally." "Bold section headers." "End every lesson with action items." "One idea per paragraph."]
\`\`\`

The more specific you are, the better Claude's output matches your voice.

Don't write this in corporate speak. Write it how you actually talk. If you curse in real life, tell Claude to curse. If you're sarcastic, say so. If you hate fluff, say "cut the fluff."

## Writing Your First Lesson

Open Claude Code in your project directory. Then use a prompt like this:

\`\`\`prompt
Write the full content for Lesson 1: [Title].
This is in Module 1: [Module Title].

The lesson should be [read time] worth of content (about [word count] words).
The audience is [who they are].
This lesson should teach them [what this specific lesson covers].

Use the voice instructions from CLAUDE.md.
Use ## for section headers.
End with action items — specific things they should do before moving to the next lesson.

Important: Write like a human, not a textbook. One idea per paragraph. Short sentences mixed with longer ones. No filler. No throat-clearing intros. Get to the point fast and keep it useful.
\`\`\`

Claude Code will write the entire lesson.

Read it. The first draft will be 70-85% there. Some parts will sound perfect. Some will sound like Claude, not you.

## What to Keep, What to Cut, What to Rewrite

**Keep** anything that sounds like something you'd actually say. If you read a sentence and think "yeah, that's right" — keep it.

**Cut** anything that feels like filler. Introductory throat-clearing. Sentences that say the same thing twice. Paragraphs that don't teach anything new.

**Rewrite** anything that sounds too polished or too generic. Claude has a tendency to smooth things out. Sometimes you want rough edges. Sometimes a blunt sentence hits harder than a well-crafted one.

The goal is not perfection. The goal is authenticity. Your leads will forgive imperfect writing. They won't forgive writing that sounds like it was generated by a machine.

## Batch Writing

Don't write one lesson at a time. Batch them.

Write all the lessons for one module in a single session. This keeps the tone consistent and the ideas flowing naturally from one lesson to the next.

A good workflow:

1. Write Module 1, Lesson 1. Edit it. Get it right.
2. Use that as a reference. Tell Claude Code: "Use the same voice and style as the Lesson 1 content I just approved."
3. Write lessons 2-5 in sequence. Light editing on each.
4. Move to Module 2. Repeat.

An entire course worth of content — 15-20 lessons — can be written in 4-6 hours. That includes editing.

## Publishing and Testing

Once your content is written, update the database.

You can either update the seed file directly or create an update script. Claude Code can help:

"Create a script that updates the content for all lessons in the database. Here's the content for each lesson: [paste or reference the content]."

After updating, test the full user flow:

1. Go to your landing page
2. Sign up as a new user
3. Start Lesson 1
4. Read through it
5. Mark it complete
6. Move to Lesson 2

Does it flow? Does each lesson feel connected to the last? Is the tone consistent?

If something feels off, fix it now. It's much easier to catch flow issues when you experience the content as a user.

## Action Items

Create your CLAUDE.md file with voice instructions. Be specific. Be honest about how you write and talk.

Write at least 3 full lessons with Claude Code. Edit each one until it sounds like you.

Update the database with your content. Test the full signup-to-lesson flow.

If you can complete an entire module of content today, do it. Momentum matters more than perfection.

## Next Up

Module 3 is where things get really interesting. You're going to build the nurture engine — the behavior-based email and SMS system that turns passive signups into active buyers. The platform is built. The content is written. Now we make it sell for you.`,


// ============================================================
// LESSON 11: How Behavior-Based Nurture Works
// ============================================================
11: `## The Difference Between Dumb Sequences and Smart Ones

Most email sequences are dumb.

Not "simple." Dumb.

Day 1: Welcome email. Day 3: Here's a tip. Day 5: Another tip. Day 7: Want to book a call?

That's not nurture. That's a timer with an email attached. It doesn't care what the lead did. It doesn't know if they read your content, ignored it, or signed up and never logged back in.

Everyone gets the same messages at the same time regardless of behavior.

That's how you end up sending "Ready to chat?" to someone who hasn't even opened your platform. And it's why most follow-up sequences feel annoying instead of helpful.

Behavior-based nurture is different. It watches what people do and responds accordingly.

## How This Platform Tracks Behavior

Let's get meta for a second.

We're tracking your behavior right now. Here's exactly what we know about you and how it changes what we send you.

We know when you signed up. We know which lessons you've opened. We know which ones you've completed. We know how much time you've spent. We know if you clicked the booking CTA. We know if you've gone dark — signed up and stopped engaging.

Every one of those data points changes what happens next.

If you're completing lessons quickly, you're engaged. You don't need motivational emails. You need deeper content and a well-timed booking invitation.

If you signed up three days ago and haven't opened a single lesson, you're stalling. You need a nudge — not a pitch.

If you've completed most of the course and clicked the booking CTA but didn't book, you're close but hesitant. You need a different message than someone who's never shown buying interest.

Same platform. Same content. Completely different follow-up paths.

That's behavior-based nurture.

![The portal tracks every action — progress, completions, engagement](/lessons/screenshots/portal-progress.png)

## The Three Lead States

Every lead in your system is in one of three states at any given time.

**Cold: Signed up, not engaging.**

They gave you their email or phone number. Then nothing. They haven't logged in, or they opened one lesson and bounced.

These leads need re-engagement. A reminder of what they signed up for. A reason to come back.

**Warming: Actively completing lessons.**

They're in the platform. They're reading. They're progressing. Trust is building with every lesson they finish.

These leads don't need much intervention. The content is doing the work. Light email support — reinforcing key ideas, adding context — is enough.

**Ready: High engagement plus CTA interaction.**

They've completed a significant chunk of the content. They've clicked the booking CTA or visited the consultation page. They're behaving like someone who's about to buy.

![The consultation CTA — appears at the right moment](/lessons/screenshots/consultation-cta.png)

These leads need a personalized, well-timed booking invitation. Not a generic "let's chat" email. Something specific to their situation.

## What This Looks Like in Practice

Here's a simple version of behavior-based routing for your Client Engine:

**Trigger: Someone signs up.**
Action: Send welcome email + welcome SMS. Start a 48-hour timer.

**Trigger: 48 hours pass, zero lessons completed.**
Action: Send a "here's what you're missing" nudge email.

**Trigger: Lead completes Lesson 3.**
Action: Send an email that reinforces a key concept from the lesson and adds social proof.

**Trigger: Lead completes 60% of lessons.**
Action: Skip remaining educational emails. Move to a "here's how we can help" sequence.

**Trigger: Lead clicks booking CTA but doesn't book.**
Action: Send a personal follow-up email addressing common hesitations.

**Trigger: Lead goes dark for 7+ days after starting.**
Action: Send re-engagement sequence. If no response after 3 touches, move to long-term drip.

Every one of these triggers is based on something the lead actually did — not a calendar date.

## Why This Matters for Your Close Rate

When a lead books a call through a behavior-based system, they're not a cold prospect. They've consumed your content. They've built trust through repeated engagement. They've self-selected by clicking the booking CTA at the right moment.

Your close rate on these calls will be dramatically higher than cold outreach calls or even ad-driven calls. Because by the time they book, they already understand what you do and believe you can help them.

The nurture engine is what makes that possible.

## Action Items

Map out 3-5 key behaviors in YOUR lead magnet that signal increasing interest.

Think about it. What specific actions would tell you a lead is moving from cold to warming to ready?

Write them down. Be specific. "Completed Lesson 5" is better than "engaged with content." "Clicked booking CTA twice" is better than "showed interest."

These behaviors become the triggers for your entire nurture system. Get them right and everything else follows.

## Next Up

In the next lesson, you'll set up the CRM that manages all of this — contacts, tags, automations, and webhook connections to your platform.`,


// ============================================================
// LESSON 12: Setting Up Your CRM
// ============================================================
12: `## Why You Need a CRM Even If You Hate CRMs

I know what you're thinking. "Do I really need a CRM?"

Yes. Fucking yes.

Your platform tracks behavior. But it needs somewhere to send that data. Somewhere that takes the raw signals — lesson completed, CTA clicked, email opened — and turns them into automated actions.

That's what a CRM does. It's the brain of your nurture engine. Without it, you have data with nowhere to go and automations with nowhere to live.

## GoHighLevel: The CRM We Use and Why

We recommend GoHighLevel (GHL) for The Client Engine. Here's why.

It's an all-in-one platform. CRM, email sequences, SMS, pipeline management, calendar booking, landing pages, forms — everything in one place.

Most CRMs make you duct-tape five different tools together. Mailchimp for email. Twilio console for SMS. Calendly for booking. Zapier to connect them. Then you're paying $300/month for a fragile mess.

GHL does all of it. One login. One bill. One place where everything connects natively.

Is it the only option? No. If you're already deep in HubSpot, ActiveCampaign, or something else — you can make it work. But GHL is the path of least resistance for this system.

## Setting Up Your Account

Sign up at gohighlevel.com. You'll want the agency plan or the freelancer plan depending on your business.

Once you're in, here's what to set up first:

**Contact Properties**

These are the data fields attached to every contact. The default fields (name, email, phone) are fine. You'll add custom fields for:

- **Lead Source** — Where they came from (cold outreach, ad, organic, referral)
- **Lead State** — Cold, Warming, or Ready (from Lesson 11)
- **Lessons Completed** — A number field tracking progress
- **Last Active** — Timestamp of last platform activity
- **Booking Interest** — Boolean flag for CTA clicks

**Tags**

Tags are how you segment contacts for different automations. Create these:

- \`signed-up\` — Applied on signup
- \`engaged\` — Applied when they complete their first lesson
- \`active-learner\` — Applied when they hit 3+ lessons
- \`high-intent\` — Applied when they click booking CTA
- \`booked\` — Applied when they book a call
- \`no-show\` — Applied if they miss the call
- \`stalled\` — Applied if they go dark for 7+ days

**Pipeline**

Create a simple pipeline with these stages:

New Lead → Engaged → High Intent → Booked → Showed → Closed

Every contact starts at "New Lead" and moves through the pipeline as their behavior changes.

## Connecting Your Platform to the CRM

This is where it gets good. Your platform needs to send data to GHL whenever something happens.

The connection method: webhooks.

A webhook is a URL that your platform hits with data whenever an event occurs. GHL gives you webhook URLs for triggering automations. Your platform sends POST requests to those URLs with the relevant data.

Here's where Claude Code earns its keep.

Open Claude Code in your project and tell it:

\`\`\`prompt
Add webhook integration to the platform. When a user completes a lesson, send a POST request to this webhook URL: [your GHL webhook URL]. Include the user's email, name, the lesson title, the lesson number, and the total lessons completed. Handle errors gracefully — if the webhook fails, log the error but don't break the user experience.
\`\`\`

Claude Code will write the integration. It'll add the webhook call to the lesson completion handler. It'll format the data correctly. It'll handle errors.

You can add webhooks for every key behavior:

- User signs up → webhook
- User completes a lesson → webhook
- User clicks booking CTA → webhook
- User goes inactive for 48+ hours → webhook (this one runs on a scheduled job)

Each webhook triggers a corresponding automation in GHL.

## Testing the Connection

After Claude Code adds the webhooks, test each one:

1. Sign up as a test user on your platform
2. Check GHL — did the contact appear?
3. Complete a lesson
4. Check GHL — did the tag update? Did the automation fire?

If something doesn't work, check the webhook URL, the data format, and the GHL automation trigger settings. Claude Code can help debug:

"The webhook to GHL isn't firing when a lesson is completed. Can you check the lesson completion handler and make sure the POST request is being sent correctly?"

## Action Items

Create your GoHighLevel account. Set up custom fields, tags, and a pipeline.

Use Claude Code to add webhook integrations to your platform for at least these events: signup, lesson completion, and booking CTA click.

Test each webhook end-to-end. Make sure contacts appear in GHL with the right tags and data.

Don't move on until the platform and CRM are talking to each other. Everything in the next three lessons depends on this connection working.

## Next Up

In the next lesson, you'll write the email nurture sequence that turns signups into booked calls. Six emails. Each one has a specific job. Claude Code writes them. You edit.`,


// ============================================================
// LESSON 13: Writing Your Email Sequence
// ============================================================
13: `## Six Emails. Each One Has a Job.

Most people write email sequences by vibes. They sit down and write whatever feels right, then send it on a timer and hope it works.

That's not a system. That's a prayer.

Every email in your sequence has a specific role. A reason it exists. A job it needs to do. When each email does its job, the sequence as a whole moves people from "just signed up" to "ready to book."

[Download the 6-email nurture sequence template](/lessons/downloads/email-sequence-template.md){.download}

> This template has the full framework with fill-in-the-blank sections for each email. Use it as your starting point, then customize with Claude Code.

## The Six Email Roles

**Email 1: Teach**

This email delivers immediate value. No selling. No positioning. Just one useful idea related to what your lead magnet teaches.

It reinforces their decision to sign up. It proves that your emails are worth opening. It sets the tone for everything that follows.

Subject line examples: "The one thing most [audience] get wrong" / "Here's what nobody tells you about [topic]"

**Email 2: Reframe**

This email challenges a common assumption your audience holds. It shifts their perspective on the problem.

The goal is to make them think differently. When someone's mental model changes, they start seeing your solution as inevitable.

Subject line examples: "Why [common approach] doesn't actually work" / "The real reason [audience] struggle with [problem]"

**Email 3: Prove**

This email shows evidence. A case study. A result. A specific example of someone who did what you teach and got a measurable outcome.

If you don't have a case study, use a hypothetical built from real patterns: "Here's what happens when a [audience type] implements this system."

Social proof is the single strongest trust builder in email. Use it early.

Subject line examples: "How [person/company] went from [before] to [after]" / "[Specific result] in [timeframe]"

**Email 4: Address Skepticism**

This email names the objections your prospect is thinking but hasn't said out loud. Then it addresses them directly.

"You might be thinking this won't work for your industry." "You might be wondering if this requires technical skills." "You might be assuming this is another overhyped system."

Name the doubt. Then dissolve it. Not with hype — with logic and evidence.

Subject line examples: "You're probably thinking..." / "The question everyone asks (and the honest answer)"

**Email 5: Introduce Your Service**

This is the first email that mentions what you actually sell. And it should still feel like teaching, not pitching.

Frame it as: "Here's what we build for clients. Here's what it does. Here's who it's for." Simple. Matter-of-fact. No urgency tactics. No fake scarcity.

The lead has been educated for four emails. They understand the problem. They've seen proof. Now you're simply showing them the solution exists.

Subject line examples: "What we actually do" / "The system behind [result]"

**Email 6: Invite Conversation**

The final email in the core sequence. It's a simple, direct invitation to talk.

Not "BUY NOW." Not "LIMITED SPOTS." Not "LAST CHANCE."

Just: "If this resonates, let's talk. Here's a link to book a time."

That's it. If the previous five emails did their job, this one converts.

Subject line examples: "Want to talk?" / "Next step (if you're interested)"

## Why Six Beats Twenty

More emails does not mean more conversions. It means more unsubscribes.

Six emails is enough to teach, build trust, address objections, introduce your service, and invite conversation. Everything beyond six is either redundant or desperate.

If six emails don't convert someone, twenty won't either. The problem isn't volume — it's either the content or the audience fit.

## Using Claude Code to Write the Sequence

Open Claude Code and give it this prompt:

\`\`\`prompt
Write a 6-email nurture sequence for my business.

My audience: [who they are]
My service: [what you offer]
The free training teaches: [what your platform covers]
My voice: [reference CLAUDE.md or describe briefly]

The sequence structure:
- Email 1: Teach — deliver one genuinely useful insight
- Email 2: Reframe — challenge a common assumption
- Email 3: Prove — share a result or case study
- Email 4: Address Skepticism — name and dissolve the top objection
- Email 5: Introduce Service — explain what you do (no hard sell)
- Email 6: Invite Conversation — simple booking CTA

Rules:
- Each email should be 150-300 words
- Casual, direct tone
- No hype, no fake urgency, no ALL CAPS
- Write subject lines that are 3-7 words, curiosity-driven
- Emails 1-4: CTA is "continue the training" (link back to platform)
- Email 5: CTA is "learn more about working together"
- Email 6: CTA is "book a call" with direct booking link
\`\`\`

Review each email. Edit for voice. Cut anything that sounds like marketing fluff.

Then load them into GoHighLevel as an email sequence.

## Subject Lines That Get Opened

Your email is worthless if nobody opens it. Subject lines matter.

Rules:
- Short. 3-7 words.
- Curiosity or specificity. Not both.
- No ALL CAPS. No emojis. No "RE:" tricks.
- Write like a human, not a marketer.

"Quick question" works better than "EXCLUSIVE OPPORTUNITY INSIDE!!!!" because one sounds like a person and the other sounds like spam.

## CTAs That Match the Stage

Don't put a booking link in Email 1. The lead just signed up. They're not ready.

Emails 1-4: CTA is "continue the training" or "check out the next lesson." Drive them back to the platform.

Email 5: CTA is "learn more about working together." Soft.

Email 6: CTA is "book a call." Direct.

The CTA should match where the lead is mentally. Pushing too hard too early kills trust. Waiting too long lets them forget about you.

## Action Items

Draft your 6-email sequence with Claude Code. Edit each one until it sounds like you wrote it by hand.

Load the emails into GoHighLevel. Set up the sequence triggers based on the behavior signals from Lesson 11.

Test by signing up as a test user and verifying that Email 1 fires on signup.

## Next Up

In the next lesson, you'll add SMS touchpoints to the system. Three text messages. Simple. Effective. Not annoying.`,


// ============================================================
// LESSON 14: Adding SMS
// ============================================================
14: `## When SMS Works and When It Backfires

Text messages are powerful because they're personal. That's also why they're dangerous.

An email sitting in someone's inbox is passive. A text message buzzing their phone is active. Intrusive. Impossible to ignore.

Used well, SMS creates moments of connection that email can't. Used poorly, it makes people hate you.

Here's the rule: SMS is for timing, not for content.

Don't send essays via text. Don't send sales pitches via text. Don't send daily tips via text.

Send short, well-timed messages that feel like a real person checking in.

## The Three SMS Use Cases

You need exactly three text messages in your system. That's it.

**SMS 1: The Welcome Text**

Sent immediately after signup. This is a handshake.

\`\`\`prompt
Hey [name] — thanks for signing up for [platform name]. Your first lesson is ready whenever you are: [link]
\`\`\`

Short. Friendly. Useful. It gives them a direct link to get started and confirms their signup worked.

**SMS 2: The Stall Nudge**

Sent when a lead goes dark. They signed up, maybe completed a lesson or two, then disappeared.

Timing: 3-5 days of inactivity.

\`\`\`prompt
Hey [name] — noticed you haven't been back to [platform name] in a few days. Lesson [X] is a good one. Worth checking out when you have 5 min: [link]
\`\`\`

This is not a guilt trip. It's a friendly reminder. The key is referencing a specific lesson — it feels personal and gives them a concrete reason to come back.

**SMS 3: The Booking Reminder**

Sent after someone books a call. This is pure logistics.

\`\`\`prompt
Hey [name] — just confirming your call tomorrow at [time]. Looking forward to it.
\`\`\`

Then a second one an hour before:

\`\`\`prompt
Quick reminder — we're on in an hour. Here's the link: [link]
\`\`\`

These reduce no-shows dramatically. A text reminder an hour before a call is the single most effective no-show prevention tactic that exists.

## Setting Up Twilio

Twilio is the SMS delivery platform. Here's the setup:

1. Create a Twilio account at twilio.com
2. Get a phone number (Twilio gives you one)
3. Grab your Account SID and Auth Token from the dashboard
4. Add those to your \`.env\` file

If you're using GoHighLevel, you can connect Twilio directly to GHL and send texts from within GHL's automation builder. This is the easiest path.

Alternatively, Claude Code can build a direct Twilio integration into your platform:

"Set up Twilio SMS integration. Add the ability to send a welcome text when a new user signs up. Use the Twilio credentials from the .env file."

## Compliance Basics

This is not optional. If you send text messages, you need to follow the rules.

**Opt-in language**: Your signup form needs to include language that says something like "By signing up, you agree to receive text messages from [company]. Message and data rates may apply. Reply STOP to unsubscribe."

**Unsubscribe**: If someone replies STOP, they need to be immediately removed from SMS. Twilio handles this automatically if configured correctly. GHL handles it natively.

**Frequency**: Don't send more than 3-4 text messages total per lead unless they've actively engaged. Nobody wants 15 texts from a company they signed up for once.

**Record keeping**: Keep records of opt-ins. If someone complains, you need to show they consented.

This isn't complicated. It's just important. Don't skip it.

## Action Items

Write your 3 SMS messages. Keep each one under 160 characters if possible (that's one SMS segment — longer messages cost more and look weird).

Configure SMS in your CRM. If using GHL + Twilio, connect them and set up the automations for welcome text and stall nudge.

Test the welcome text flow. Sign up as a test user and make sure the text arrives within 60 seconds.

The booking reminder will be set up in Module 4. For now, just have the welcome text and stall nudge working.

## Next Up

In the next lesson, you'll build the behavior-based routing that makes your nurture engine truly smart. Conditional branches. Event tracking. Different paths for different behaviors. This is where the system stops being linear and starts being intelligent.`,


// ============================================================
// LESSON 15: Behavior-Based Routing
// ============================================================
15: `## Moving Beyond Linear Sequences

Up to this point, your nurture engine is a straight line. Someone signs up, they get emails in order, and eventually they get a booking invite.

That works. But it's not smart.

Smart means the system adapts. Different people behave differently, and your system should respond differently.

Someone who blazes through your entire course in one sitting doesn't need the same emails as someone who signed up and disappeared. Someone who clicked the booking CTA three times doesn't need another educational email — they need a direct line to your calendar.

This lesson is about building conditional branches that make your nurture engine responsive instead of robotic.

## The Three Main Branches

You don't need twenty conditional paths. You need three.

\`\`\`
                         ┌─────────────────────────┐
                         │      LEAD SIGNS UP       │
                         └────────────┬──────────────┘
                                      │
                              ┌───────▼───────┐
                              │  MONITOR      │
                              │  BEHAVIOR     │
                              └───┬───┬───┬───┘
                                  │   │   │
                    ┌─────────────┘   │   └─────────────┐
                    │                 │                   │
              ┌─────▼─────┐   ┌──────▼──────┐   ┌───────▼───────┐
              │  FAST      │   │  STALLER    │   │  ALMOST       │
              │  MOVER     │   │             │   │  BOOKED       │
              │            │   │  No activity│   │               │
              │  60%+ in   │   │  for 5+     │   │  Clicked CTA  │
              │  3 days    │   │  days       │   │  but didn't   │
              │            │   │             │   │  book         │
              └─────┬──────┘   └──────┬──────┘   └───────┬───────┘
                    │                 │                   │
              ┌─────▼──────┐   ┌──────▼──────┐   ┌───────▼───────┐
              │  Skip edu  │   │  3 re-engage│   │  24hr wait    │
              │  emails    │   │  emails over│   │  then send    │
              │  → Direct  │   │  10 days    │   │  personal     │
              │  booking   │   │  → Monthly  │   │  follow-up    │
              │  invite    │   │  drip if no │   │  with booking │
              │            │   │  response   │   │  link         │
              └────────────┘   └─────────────┘   └───────────────┘
\`\`\`

**Branch 1: The Fast Mover**

Trigger: Lead completes 60%+ of lessons within the first 3 days.

This person is engaged. They're moving fast. They don't need your educational drip sequence — they're already educated.

What happens: Skip remaining educational emails. Send a direct "here's how we help" email followed by a booking invitation. These leads are warm. Don't slow them down with content they've already consumed on the platform.

**Branch 2: The Staller**

Trigger: Lead hasn't opened the platform in 5+ days after starting.

This person got distracted, lost interest, or forgot. They're not gone — they signed up for a reason. They just need a reason to come back.

What happens: Trigger a re-engagement sequence. 3 emails over 10 days. First email: "Here's what you're missing." Second email: a specific insight from the lesson they stopped at. Third email: a social proof story. If they re-engage, move them back to the main sequence. If they don't respond to any of the three, move them to a monthly "stay in touch" drip and stop active nurture.

Don't keep hammering people who don't want to hear from you. It damages deliverability and your reputation.

**Branch 3: The Almost-Booked**

Trigger: Lead clicks booking CTA but doesn't complete the booking.

This person is interested enough to click but something stopped them. Maybe the timing was wrong. Maybe they got cold feet. Maybe they just got interrupted.

What happens: Wait 24 hours. Send a short, personal email: "Noticed you were checking out the consultation page. Totally understand if the timing isn't right — but if you have questions, I'm happy to answer them. No pressure." Include the booking link again.

This email converts surprisingly well because it feels human, not automated (even though it is automated).

## Setting Up Conditional Branches in GoHighLevel

GHL has a built-in workflow builder with if/else logic. Here's how to set up Branch 1 as an example:

1. Create a new workflow
2. Trigger: Webhook received (from your platform's "lesson completed" webhook)
3. Condition: If custom field "lessons_completed" >= 60% of total lessons
4. Yes path: Remove from educational sequence. Add to "fast mover" sequence.
5. No path: Continue normal sequence.

Do the same for Branches 2 and 3 using their respective triggers.

## Using Claude Code to Add Event Tracking

Your platform needs to send the right data to make these branches work. Open Claude Code:

\`\`\`prompt
Add event tracking to the platform. Track these events and send webhooks to GHL:

1. lesson_completed — include lesson number, lesson title, and total lessons completed out of total available
2. booking_cta_clicked — include user email and timestamp
3. user_inactive — fire if no activity for 48+ hours (run as a daily scheduled job, check all users)
4. course_progress_milestone — fire when user hits 25%, 50%, 75%, 100% completion

For each event, send a POST request to the GHL webhook URL stored in the WEBHOOK_URL environment variable. Include the user's email as the primary identifier.
\`\`\`

Claude Code will add the tracking code and webhook calls. Test each one.

## The Power of Simple Routing

You don't need complex decision trees. Three branches cover 90% of lead behavior.

Fast movers get accelerated. Stallers get re-engaged. Almost-booked leads get a gentle nudge.

Everything else follows the standard sequence.

Don't over-engineer this. Simple routing that actually runs beats complex routing that breaks.

## Action Items

Build at least 2 of the 3 conditional branches in your CRM.

Use Claude Code to add event tracking for the triggers those branches need.

Test each path. Sign up as a test user and simulate the behavior that would trigger each branch. Verify that the right emails fire.

Document your branches. Write down: "If [behavior], then [action]." Keep it simple enough that you could explain it to someone in 30 seconds.

## Next Up

Module 4 starts now. You've got a platform that delivers value and a nurture engine that adapts to behavior. Now it's time to build the booking system that puts qualified leads on your calendar at the exact right moment.`,


// ============================================================
// LESSON 16: Designing the Booking Experience
// ============================================================
16: `## Why Most Booking Pages Suck

Here's what most people do.

They slap a Calendly link on their website. Maybe in the header. Maybe in the footer. Maybe on every single page. "Book a free strategy call!" everywhere you look.

And then they wonder why the people who book are tire-kickers who aren't ready to buy.

The problem isn't the calendar tool. The problem is the timing.

Asking someone to book a call before they trust you is like proposing on the first date. It doesn't matter how great you are — it's too much, too soon.

## How The Client Engine Positions Booking

In this system, booking is not a call-to-action you blast everywhere. It's a natural next step that appears when someone is ready.

Think about your own experience on this platform.

You didn't see a booking button on Lesson 1. You weren't hit with "BOOK NOW" popups every five minutes. The booking option appeared contextually — after you'd consumed enough content to understand what we do and why it matters.

That's intentional. And it's what makes the people who DO book fundamentally different from people who book through a generic "free strategy call" offer.

They arrive informed. They arrive trusting. They arrive ready to talk about specifics, not generalities.

Your sales calls go from "So what do you do?" to "How does this work for my situation?"

That's a completely different conversation.

## Qualification Criteria

Before someone sees a booking invitation, they should have demonstrated real engagement.

Define your criteria. Here are some examples:

- Completed at least 50% of the course content
- Spent at least X minutes on the platform
- Opened at least 3 emails
- Visited the services/about page (if you have one)

You don't need all of these. Pick 2-3 signals that indicate genuine interest.

The point is: not everyone who signs up should be invited to book. Only the people who've shown they're serious. This protects your time and increases your close rate.

## The Booking Page Itself

When someone does reach the booking page, it needs to do two things:

1. Reinforce that booking is the right next step
2. Make booking effortless

The headline should be direct. Not "Let's Chat!" or "Schedule Your Discovery Call!" Those are generic and meaningless.

Try: "Let's talk about [specific outcome] for your business."

Or: "See how [your system/service] works for [their situation]."

The copy below the headline should set expectations. How long is the call? What will you cover? What should they prepare?

Use this prompt to write your booking page copy:

\`\`\`prompt
Write the copy for my booking/consultation page.

My audience: [who they are]
My service: [what you offer]
Call length: 30 minutes

The page needs:
1. A headline that's specific to the outcome, not generic
2. 3-5 sentences setting expectations for the call
3. A brief list of what we'll cover
4. A reassurance line (no pressure, no pitch)

Tone: direct, confident, no hype. This person has already consumed my free training — they know what I do. Don't over-explain. Just make booking feel like the obvious next step.
\`\`\`

Then the calendar. Clean. Simple. Available slots visible. Book in two clicks.

## Action Items

Define your booking criteria. What must someone DO on your platform before they earn a booking invitation? Write down 2-3 specific behaviors.

Write the booking page headline. One sentence that tells them exactly what the call is about.

Write the booking page copy. 3-5 sentences that set expectations and remove friction.

Don't build the booking system yet — that's next lesson. Just get the strategy and copy locked in.

## Next Up

In the next lesson, you'll build the actual booking system — calendar setup, pre-call questionnaire, and CRM integration.`,


// ============================================================
// LESSON 17: Building Your Booking System
// ============================================================
17: `## Setting Up Your Calendar

You've got two options for your booking system. Both work. Pick the one that matches your setup.

**Option 1: GoHighLevel's Built-In Calendar**

If you're using GHL as your CRM (which we recommend), use their calendar. It's already connected to your CRM. No extra integration needed.

Set up a calendar in GHL:
1. Go to Calendars → Create Calendar
2. Choose "Round Robin" if you have a team, "Simple" if it's just you
3. Set your availability windows
4. Set buffer times between calls (15-30 minutes minimum)
5. Set timezone handling to auto-detect

**Option 2: Build a Custom Booking Flow With Claude Code**

If you want the booking experience to live directly inside your platform, Claude Code can build it.

\`\`\`prompt
Build a booking page inside the platform. Show available time slots for the next 2 weeks based on my availability (weekdays 10am-3pm EST). When someone books, send a confirmation email via Resend and fire a webhook to GHL with the user's email, selected time, and booking status. Only show the booking page to users who have completed at least [X] lessons — redirect others back to their current lesson.
\`\`\`

This gives you a seamless experience — the lead never leaves your platform to book. It's more work to set up, but it looks more professional and gives you more control.

## Availability and Buffer Times

A few rules that will save you headaches:

**Don't make every hour available.** Block off focus time, lunch, and end-of-day. If you're available 9am-5pm, show slots from 10am-3pm. Give yourself breathing room.

**Buffer times matter.** If you back calls up with zero buffer, you'll run late, feel rushed, and start every call stressed. 15 minutes minimum between calls. 30 is better.

**Timezone handling is non-negotiable.** Your leads are in different timezones. If your calendar doesn't auto-detect and adjust, you'll get people booking at 3am your time thinking it's 3pm their time. Every modern booking tool handles this. Make sure it's turned on.

**Limit daily calls.** Set a maximum number of calls per day. Start with 3-4. You can always increase it. But if you book 8 calls on a Tuesday, you'll be useless by call 5.

## Integrating Booking With Your CRM

When someone books, the CRM needs to know. Here's what should happen automatically:

1. Contact gets the \`booked\` tag
2. Contact moves to the "Booked" pipeline stage
3. Booking confirmation email sends
4. Booking confirmation SMS sends
5. Reminder sequence starts (we'll set this up in Lesson 19)

If you're using GHL's calendar, most of this is built in. Just set up the automations.

If you built a custom booking flow, use webhooks to fire these events.

## The Pre-Call Questionnaire

This is the secret weapon nobody uses.

After someone books, show them a short questionnaire. 3-5 questions max.

Purpose: you want to walk into the call already knowing their situation. And you want THEM to think through their situation before the call — it makes them a better prospect.

Example questions:

1. "What does your business do?" (One sentence.)
2. "What's your current approach to [problem you solve]?" (Brief description.)
3. "What's the biggest frustration with how things work now?"
4. "What would success look like for you in the next 90 days?"
5. "Anything else you'd like us to know before the call?"

Don't ask more than 5 questions. Don't make them write essays. Keep it quick.

In GHL, you can add a custom form that appears after booking. In a custom system, Claude Code can build a post-booking questionnaire page.

## Action Items

Set up your calendar — either in GHL or as a custom build with Claude Code.

Configure availability windows, buffer times, and timezone handling.

Connect booking to your CRM. Make sure the \`booked\` tag applies and the pipeline stage updates.

Create your pre-call questionnaire. 3-5 questions. Load it into your booking flow.

Test the entire booking process end-to-end. Book a test call. Check that confirmations send, tags apply, and the questionnaire works.

## Next Up

In the next lesson, you'll build trigger-based booking invitations — the system that automatically invites the right leads to book at the right moment.`,


// ============================================================
// LESSON 18: Trigger-Based Booking Invitations
// ============================================================
18: `## Let the System Decide When to Invite

You've got a booking system. You've got qualification criteria from Lesson 16. Now you need to connect them.

The goal: when a lead hits your "ready" threshold, the system automatically sends a personalized booking invitation. No manual checking. No guessing. The data triggers the invitation.

## Connecting Behavior Tracking to Booking Invitations

Here's the flow:

1. Lead completes lessons on your platform
2. Platform sends progress data to your CRM via webhooks
3. CRM checks if the lead has hit your qualification criteria
4. If yes → send a personalized booking invitation email
5. If they also clicked the booking CTA on the platform → send an SMS too

The CRM does the thinking. The platform provides the data. The booking invitation is the output.

## Building the Automation

In GoHighLevel:

1. Create a new workflow
2. Trigger: Webhook received (lesson completed event)
3. Condition: Check custom field "lessons_completed" >= your threshold (e.g., 50% of total lessons)
4. Condition: Check tag — does NOT have \`booked\` tag (don't invite people who already booked)
5. Action: Send booking invitation email
6. Wait 24 hours
7. Condition: Still no \`booked\` tag?
8. Action: Send follow-up SMS with booking link

Simple. Two touches. One email. One text. Done.

## Writing the Booking Invitation Email

This email is important. It's not a generic "let's hop on a call" message.

It should feel like a natural extension of the content they've been consuming.

Use this prompt to write yours:

\`\`\`prompt
Write a booking invitation email for my business.

Context: The recipient has completed [X]% of my free training on [topic]. They've been actively engaging with the content for [X days]. They understand the problem and have seen how the solution works.

My audience: [who they are]
My service: [what you offer]
Booking link: [your link]

The email should:
1. Acknowledge their progress through the training (be specific)
2. Reference a key concept they've learned
3. Position the call as a natural next step, not a pitch
4. Be under 150 words
5. Sound like a real person wrote it, not a marketing automation

Tone: casual, direct, zero pressure. If they're not ready, that's fine. But make booking feel easy and obvious for those who are.
\`\`\`

Notice what this email does. It acknowledges their progress. It references the content. It positions the call as a natural next step, not a sales pitch.

## The Recruiter Example

Remember the recruiting firm from Lesson 3?

Their platform teaches employers how to write better job ads, structure interviews, and reduce time-to-hire.

Here's their booking trigger: when an employer completes the lessons on job ad creation AND views the "Our Recruiting Services" page, the system sends:

"Hey [name], you've been putting work into your hiring process — the job ads you're writing using our framework are going to perform way better than what most companies put out there.

If you ever hit a point where you'd rather have a team handle the sourcing and screening while you focus on running the business, that's literally what we do. Happy to walk you through how it works.

Grab a time here if you're curious: [booking link]"

That doesn't feel like a pitch. It feels like a helpful person offering a relevant service at exactly the right moment.

That's what trigger-based booking does.

## Adding a Conditional Booking CTA in the Platform

Beyond email, you can show a booking CTA directly inside the platform — but only to qualified leads.

Open Claude Code:

\`\`\`prompt
Add a conditional booking CTA to the lesson pages. Only show it to users who have completed at least [X] lessons. The CTA should appear below the lesson content with the text "Ready to talk about implementing this for your business?" and a button that says "Book a Free Consultation" linking to [booking URL]. Track when users click it and send a webhook to GHL with the user's email and a "booking_cta_clicked" event type.
\`\`\`

Now your most engaged leads see a booking option right inside the learning experience, exactly when they're most engaged.

## Action Items

Build the booking invitation automation in your CRM. Trigger: lead hits qualification threshold. Action: personalized email + follow-up SMS.

Write your booking invitation email. Reference their progress. Keep it casual. No hard sell.

Use Claude Code to add a conditional booking CTA to your platform that only appears for qualified leads.

Test the full path: sign up → complete enough lessons → verify the booking invitation fires → verify the conditional CTA appears.

## Next Up

In the next lesson, you'll build the reminder system that makes sure people who book actually show up.`,


// ============================================================
// LESSON 19: Reducing No-Shows
// ============================================================
19: `## The No-Show Problem

You did everything right. Built the platform. Wrote the content. Set up the nurture engine. The lead consumed your content, hit the qualification threshold, received a booking invitation, and booked.

Then they don't show up.

Nothing is more frustrating than a no-show. You blocked the time. You prepared. You were ready to have a real conversation. And the lead just... didn't appear.

No-shows are inevitable. You will never eliminate them completely. But you can reduce them dramatically with a simple system.

## The Three-Touch Reminder System

You need three reminders. Not one. Not five. Three.

**Touch 1: Booking Confirmation**

Sent immediately after booking. This is not optional.

Email: "You're confirmed for [date] at [time]. Here's what we'll cover: [brief description]. Looking forward to it."

SMS: "Hey [name] — you're booked for [date] at [time]. Talk soon."

The confirmation email should include: date, time (in their timezone), meeting link, and a brief description of what to expect.

**Touch 2: 24-Hour Reminder**

Sent 24 hours before the call.

Email: "Quick reminder — we're on tomorrow at [time]. Here's the link: [link]. If you need to reschedule, no worries — you can do that here: [reschedule link]."

Including a reschedule link is important. A reschedule is better than a no-show. Give them an easy out that still keeps them in the pipeline.

**Touch 3: One-Hour Reminder**

Sent 60 minutes before the call.

SMS only: "Hey [name] — we're on in an hour. Here's the link: [link]"

This is the most important reminder. People forget about calls. A text one hour before cuts no-shows by 30-40% on its own.

## The Pre-Call Brief

This is the move that separates amateurs from professionals.

After someone books (either in the confirmation email or as a separate follow-up), send them a short brief that prepares them for the call.

This can be:
- A short written doc (Google Doc, Notion page, or a page on your platform)
- A 2-3 minute video

The brief should cover:
1. What you'll discuss on the call
2. What they should think about beforehand
3. What a good outcome looks like

Why this works: it increases investment. The more prepared someone feels, the more committed they are to showing up. It also makes the actual call better — they arrive with context and thoughtful answers.

Example brief content:

"Before our call, think about these three things:

1. What's your current process for [what you help with]? What's working and what's not?
2. If you could wave a magic wand and fix one thing about [area], what would it be?
3. What does your timeline look like — are you looking to make changes in the next 30 days, 90 days, or just exploring?

Don't write anything down if you don't want to. Just having these in the back of your mind will make our conversation way more productive."

## Tracking Show Rates

After you've been running for a few weeks, check your numbers.

Industry average show rate for cold leads: 40-60%.
Target show rate for Client Engine leads: 75-90%.

If you're below 70%, something is off. Check:
- Are reminders actually sending?
- Is the time between booking and call too long? (Aim for 2-5 days max.)
- Is the pre-call brief landing?
- Are the leads actually qualified, or is your threshold too low?

## Action Items

Build the three-touch reminder sequence in your CRM. Confirmation, 24-hour, and 1-hour.

Write your pre-call brief. Keep it short and useful.

Set up tracking for show rates. Even a simple spreadsheet works: booked vs. showed.

Test the entire end-to-end flow: platform signup → lesson completion → booking invitation → booking → reminders → call.

If you can walk through that entire flow as a test user and everything fires correctly, your Client Engine is built. Everything from here on is about driving traffic to it and optimizing.

## Next Up

Module 5 starts now. Your engine is built. It's time to feed it. We're going to talk about traffic — cold outreach, content, ads, and partnerships. How to get the right people into the top of your Client Engine.`,


// ============================================================
// LESSON 20: The Traffic Mindset Shift
// ============================================================
20: `## You're Not Selling. You're Inviting.

This is the single most important mindset shift in this entire course.

When you have a Client Engine, you are not selling anything in your outreach. You're not pitching. You're not persuading. You're not trying to close anyone.

You're inviting people to something genuinely valuable. For free.

That changes everything about how you approach traffic.

## Why This Matters

Think about how most agency owners and consultants do outreach.

"Hi, I run a [service] company and I help [audience] with [thing]. Would you be interested in a call?"

That message asks for something. It asks for time. It asks for attention. It asks for interest in something the prospect knows nothing about.

Now compare:

"Hey, we built a free training platform that teaches [audience] how to [valuable outcome]. It's completely free — thought it might be useful for you."

That message gives something. It offers value. It asks for nothing except a click.

Which one would you respond to?

## The Recruiter Example

The recruiter from Lesson 3 makes this crystal clear.

Old outreach: "Can I recruit for you? Are you hiring right now?"

That's a pitch. The prospect's guard goes up immediately.

New outreach: "Hey, we built a free hiring platform that helps employers write better job ads, structure interviews, and reduce time-to-hire. It's completely free — would love your feedback."

That's an invitation. The prospect's guard stays down because there's nothing to guard against.

Both messages reach the same person. One gets ignored. The other gets responses.

The only difference is the system behind it. The recruiter with the Client Engine has something valuable to invite people to. The recruiter without one has nothing to offer except their services — and that's not enough to start a conversation.

## Every Traffic Source Feeds the Same Machine

Here's the beauty of this system. It doesn't matter how someone finds you.

Cold outreach → leads to the platform
Paid ads → leads to the platform
Organic content → leads to the platform
Referrals → leads to the platform
Partnerships → leads to the platform

Every channel feeds the same front door. The platform does the educating. The nurture engine does the warming. The booking system handles the conversion.

You don't need different funnels for different channels. You need one machine and multiple ways to feed it.

## Choose Your Primary Channel

You can't do everything at once. Pick one primary traffic channel to start.

Choose based on two things: where your audience already hangs out, and what you can start today.

If your audience is on LinkedIn and you can write → organic content and cold outreach.
If your audience responds to email and you have budget → cold email.
If you have money but not time → paid ads.
If you have connections in your industry → partnerships and referrals.

Start with one. Get it working. Then add a second channel. Then a third.

Multi-channel traffic is the goal. But you get there by mastering one channel at a time, not by doing five things poorly.

[Download the cold outreach templates — email + LinkedIn](/lessons/downloads/outreach-templates.md){.download}

> These templates give you copy-paste outreach messages for both email and LinkedIn. Customize them for your audience and platform.

## Action Items

Choose your primary traffic channel. Write it down. Commit to it for the next 30 days.

Write a one-sentence value proposition for your outreach. Not what you sell — what your free platform teaches. "We built a free [platform type] that helps [audience] [achieve outcome]."

That sentence is going to appear in every piece of outreach, every ad, every content post. Get it right.

## Next Up

In the next lesson, you'll build your first outreach campaign — cold messages that lead with value and drive people into your Client Engine.`,


// ============================================================
// LESSON 21: Cold Outreach That Leads With Value
// ============================================================
21: `## The New Cold Outreach Playbook

Cold outreach has a bad reputation because most people do it wrong.

They send pitches to strangers. They write long emails about themselves. They follow up five times saying "just checking in!" They treat outreach like a numbers game where sending 10,000 bad messages is somehow better than sending 100 good ones.

That approach is dead. Spam filters are better. People are more skeptical. And nobody responds to "I'd love to pick your brain" from someone they've never heard of.

But cold outreach that offers something genuinely valuable? That still works. Really well.

[Download the cold outreach templates — email + LinkedIn](/lessons/downloads/outreach-templates.md){.download}

## Building Your Lead List

Before you send a single message, you need to know who you're sending to.

The criteria is simple: who would benefit from the free training your platform provides?

Tools for building lead lists:

- **LinkedIn Sales Navigator** — Best for B2B. Filter by industry, company size, role, location. Export to CSV.
- **Apollo.io** — Has email and phone data attached. Free tier available.
- **Clay** — More advanced. Can enrich and personalize data automatically.
- **Manual research** — Look at industry directories, conference attendee lists, communities in your space.

Start with 50 prospects. Not 5,000. You want to test your messaging before you scale it.

Quality over quantity. Every name on your list should be someone who would genuinely benefit from your platform content. If you wouldn't be comfortable sending the message to their face, they shouldn't be on the list.

## The Three-Message Outreach Sequence

You need three messages. That's it. Not seven. Not twelve. Three.

**Message 1: Offer Value**

This is the first touch. It introduces your free platform and invites them to check it out.

"Hey [name],

We built a free [training/platform/course] that helps [audience] [specific outcome]. It covers [2-3 key topics].

Completely free — no catch. Thought it might be useful for you.

Here's the link: [link]

[Your name]"

Short. Clear. No pitch. No ask beyond clicking a link.

**Message 2: Add Context (3-4 days later)**

If they didn't respond, add a layer of context. A specific insight, a result, or a reason this is relevant to them specifically.

"Hey [name],

Quick follow-up on the [platform name] I mentioned. One thing people find really useful is [specific lesson or insight].

Most [audience type] don't realize [interesting fact or reframe from your content]. The training covers it in detail.

Worth a look if you have 5 minutes: [link]

[Your name]"

**Message 3: Light Follow-Up (5-7 days later)**

Last touch. Keep it short and casual.

"Hey [name] — last note from me on this. The [platform name] is free and always will be. If the timing isn't right, no worries. Link's here if you ever want to check it out: [link]"

That's it. Three messages. If they don't respond after three, move on. Don't be the person who sends follow-up number nine.

## Using Claude Code to Personalize at Scale

Here's where Claude Code gets interesting for outreach.

You can feed it your prospect list and have it personalize each message based on the prospect's company, role, or industry.

\`\`\`prompt
I have a list of 50 prospects for cold outreach. For each one, personalize Message 1 of my outreach sequence.

Here's my template:
"Hey [name], we built a free [training type] that helps [audience] [outcome]. It covers [topics]. Completely free — thought it might be useful for you. Here's the link: [link]"

For each prospect, add one personalized sentence before the template that references something specific about their company or role. Keep it natural — not creepy-specific, just enough to show I looked them up.

Here's the prospect list:
[paste your CSV or list with name, company, role, industry]
\`\`\`

Claude Code will generate 50 personalized versions. Each one feels hand-written. None of them are.

## Deliverability Basics

If your emails land in spam, nothing else matters.

Rules:
- Use a warmed-up email domain. Don't send cold outreach from your main domain on day one.
- Start slow. 10-20 emails per day for the first two weeks. Then scale up gradually.
- Use plain text emails. No images, no HTML templates, no tracking pixels for cold outreach.
- Keep emails short. Under 100 words for the first message.
- One link maximum.

If you're using LinkedIn instead of email, deliverability isn't an issue — but connection request acceptance rates follow similar patterns. Short, value-first messages win.

## Action Items

Build a list of 50 prospects who would benefit from your platform.

Draft your 3-message outreach sequence. Use the templates above as starting points, then adjust for your voice and audience.

Send 10 messages as a test. Track responses.

If you get a response rate above 10%, you've got a winner. Scale it. If you're below 5%, adjust the messaging and test again.

## Next Up

In the next lesson, you'll learn how to create organic content that drives signups to your platform — without spending a dollar on ads.`,


// ============================================================
// LESSON 22: Organic Content
// ============================================================
22: `## Content That Feeds the Machine

Organic content is the slowest traffic channel to start and the most powerful one to compound.

Ads stop working when you stop paying. Cold outreach stops working when you stop sending. But a great post lives forever. It gets shared. It gets saved. It shows up in search results months later.

The trick is that most people create content with no system behind it. They post, get some likes, and nothing happens. No leads. No calls. No revenue.

That changes when you have a Client Engine. Because now every piece of content has a destination. Every post drives people to the same place — your free platform. And the platform does the rest.

## Three Content Types That Work

You don't need a content strategy deck. You need three types of posts, rotated consistently.

**Type 1: Teaching Posts**

Take one idea from your platform content and turn it into a standalone post.

You already wrote the lessons. Each lesson has 3-5 key insights. Each insight can be a LinkedIn post, a tweet thread, a short-form video, or an email newsletter issue.

Example: If your platform teaches employers how to write better job ads, a teaching post might be: "Most job ads list requirements instead of selling the role. Here's how to flip that."

Teaching posts build authority. They demonstrate that you know what you're talking about.

**Type 2: Behind-the-Scenes Posts**

Show people what you're building and how.

"Built a free training platform this weekend using Claude Code. Here's what it looks like." Include a screenshot.

"Just wrote 6 nurture emails for a client's acquisition system. Here's the framework I use."

Behind-the-scenes posts build trust. They show process. They show that you practice what you preach.

**Type 3: Results Posts**

Share outcomes. Yours or your clients'.

"Client went from 2 calls/week to 12 calls/week after setting up their Client Engine. Here's what changed."

"Our booking rate went from 3% to 18% after adding behavior-based routing. Here's the setup."

Results posts build desire. They make people want what you have.

## The Content-to-Platform Pipeline

Here's the rule: every piece of content ends with one CTA.

Not "Follow me for more." Not "Like and share." Not "Drop a comment."

One CTA: access the free platform.

"I wrote a full training on this. It's free. Link in comments."

"We built a free platform that walks through all of this step by step. Link in bio."

"If you want the full breakdown, I put together a free course on it. [link]"

That's it. Every post feeds the engine.

## Using Claude Code to Batch-Produce Content

Open Claude Code and use this prompt:

\`\`\`prompt
Using the content from my platform lessons, create 15 LinkedIn posts for the next 3 weeks.

Break them down as:
- 5 teaching posts (pull one key insight from a lesson and make it a standalone post)
- 5 behind-the-scenes posts (show the process of building or running the system)
- 5 results posts (share outcomes, metrics, or transformations)

Rules:
- Each post should be 100-200 words
- End each one with a CTA pointing to [platform URL]
- Use my voice from CLAUDE.md
- No hashtags. No emojis. No "Follow me for more."
- Write like a person sharing something useful, not a marketer promoting something

Here's a summary of my platform content for reference:
[paste your module/lesson titles or key concepts]
\`\`\`

You now have three weeks of content in about 10 minutes.

Edit for voice. Adjust anything that sounds too polished or too generic. Add personal details where you can.

Then schedule them. 5 posts per week. Monday through Friday. Use a scheduling tool like Buffer, Typefully, or even LinkedIn's native scheduler.

## Consistency Over Virality

Nobody goes viral on purpose. Don't try.

Post consistently for 90 days. Most posts will get minimal engagement. A few will hit. The ones that hit tell you what resonates with your audience. Make more of those.

The goal is not to become an influencer. The goal is to have a steady stream of content that drives a steady stream of signups to your platform.

Five posts per week. Every one ends with a link to your platform. In 90 days, you'll have a content library that continuously feeds your Client Engine.

## Action Items

Draft 5 pieces of content using the three types above. Use Claude Code to help.

Publish 2 this week. See what resonates.

Set up a posting schedule. 5 posts per week minimum. Use a scheduling tool so you're not manually posting every day.

Track which posts drive the most platform signups. Double down on those formats.

## Next Up

In the next lesson, we'll cover paid ads — when to start, how to set them up simply, and why ads perform better when they point to a value-first asset.`,


// ============================================================
// LESSON 23: Paid Ads Basics
// ============================================================
23: `## When to Start Paid Ads

Not yet. Probably.

Paid ads amplify what already works. They don't fix what doesn't.

If your organic outreach and content are getting responses and signups, ads will scale those results faster. If nobody's signing up organically, throwing money at ads won't change that — you'll just lose money faster.

The rule: prove the offer works organically first, then add paid amplification.

How do you know it works? When people sign up, engage with the content, and some of them book calls. If that's happening — even on a small scale — ads will pour gasoline on it.

## The Simplest Setup That Works

Most people overcomplicate ads. They create 47 audiences, 12 ad variations, and a retargeting funnel with 6 layers. Then they wonder why nothing works and their budget evaporated.

Here's what you actually need:

**One audience.** Your target market, defined by role, industry, and company size. That's it. No lookalikes. No complex interest stacking. Just: "Who is this for?"

**One ad.** A clear message that promotes your free platform. Not your service. Not your company. The free training.

**One destination.** Your platform's landing page. Not a separate funnel. Not a webinar registration. The same page your organic traffic lands on.

One audience. One ad. One destination.

## Writing Ad Copy That Works

The ad copy follows the same principle as your outreach: offer value, don't pitch.

Use this prompt to draft your ad copy:

\`\`\`prompt
Write a Facebook/LinkedIn ad for my free training platform.

My audience: [who they are — role, industry, company size]
My platform teaches: [what the training covers]
The key outcome: [what they'll be able to do after]
Landing page URL: [your URL]

Framework:
- Line 1: Call out the audience and their specific pain point
- Line 2-3: Introduce the free training as the solution
- Line 4: Tell them what they'll learn (2-3 specific things)
- Line 5: CTA — it's free, click here

Rules:
- Under 125 words total
- No hype. No fake urgency. No ALL CAPS.
- No "LIMITED TIME" or "EXCLUSIVE" — it's free and always will be
- Write like a person recommending something useful, not a marketer selling something
\`\`\`

No hype. No fake urgency. No "LIMITED TIME ONLY" bullshit. Just a clear offer of free value.

## Why Ads Convert Better Pointing to Value

Here's something most marketers don't understand.

A Facebook ad pointing to a "Book a Free Strategy Call" page converts at maybe 1-3%. Because you're asking cold strangers to commit time to someone they've never heard of.

A Facebook ad pointing to a free training platform converts at 10-25%. Because you're asking them to access something valuable for free. Zero commitment. Zero risk.

Then the platform, the nurture engine, and the booking system do the selling — over days and weeks, not in a single click.

Your cost per booked call drops dramatically. Your close rate increases. And the leads are infinitely better because they show up educated and pre-sold.

## Starting Budget

\$10-20 per day. That's it.

At $15/day, you'll spend about $450/month. If your platform converts signups to booked calls at even 5% — and you're getting signups at $3-5 each — that's 90-150 signups per month and 4-7 booked calls.

If your service is worth $2,000+ per client and you close 30% of calls, you're looking at 1-2 new clients per month from a $450 ad spend.

The math works. But only after the system is proven.

Start at $10/day. Run for 2 weeks. Check signups. Check engagement. Check bookings. If the numbers work, increase gradually. If they don't, fix the landing page or the ad copy before spending more.

## Platform Setup

For Meta (Facebook/Instagram) ads:

1. Create a Business Manager account at business.facebook.com
2. Create an ad account
3. Install the Meta Pixel on your platform (Claude Code can help: "Add the Meta tracking pixel to my Next.js application. Here's my pixel ID: [ID]")
4. Create a campaign with the "Traffic" or "Leads" objective
5. Set your audience, budget, and schedule
6. Upload your ad creative and copy
7. Launch

For LinkedIn ads (better for B2B):

1. Create a Campaign Manager account
2. Create a campaign with the "Website Visits" objective
3. Target by job title, industry, and company size
4. Set budget (LinkedIn is more expensive — start at $20/day)
5. Write your ad and launch

## Action Items

If your organic traffic is generating signups and engagement, set up an ad account. Write one ad. Launch with $10/day.

If organic isn't working yet, skip ads for now. Go back to Lessons 21 and 22 and focus on outreach and content first.

Don't optimize prematurely. Let the ad run for at least 7 days before making changes. You need data before you make decisions.

## Next Up

In the next lesson, you'll learn how to build partnerships and referral loops — free traffic from people who already have your audience's attention.`,


// ============================================================
// LESSON 24: Partnerships and Referrals
// ============================================================
24: `## Let Other People Send You Traffic

The most underrated traffic channel is also the cheapest: partnerships.

Someone in your industry already has the attention of your ideal clients. They're not a competitor — they're a complement. They serve the same audience with a different service.

If you can get in front of their audience, you get warm traffic without spending a dollar on ads or sending a single cold email.

## Finding Complementary Businesses

Think about who else serves your target audience but doesn't compete with you.

If you help agencies with client acquisition, complementary businesses might be:
- Agency coaching companies
- CRM software providers
- Web design agencies (who build for agencies)
- Freelancer platforms
- Agency accounting firms

If you help SaaS companies with marketing, complementary businesses might be:
- SaaS development agencies
- Product analytics companies
- Customer success platforms
- SaaS investors or accelerators

The key: same audience, different problem.

## The Partnership Pitch

Here's why this works so well when you have a Client Engine.

You're not asking for favors. You're not asking them to promote your service. You're offering their audience something genuinely valuable — for free.

Use this prompt to draft personalized partnership pitches:

\`\`\`prompt
I want to reach out to potential partners who serve the same audience as me but with different services.

My audience: [who they are]
My free platform teaches: [what it covers]
My platform URL: [link]

Write 3 personalized partnership outreach messages for these businesses:
1. [Partner 1 — name, company, what they do]
2. [Partner 2 — name, company, what they do]
3. [Partner 3 — name, company, what they do]

Each message should:
- Reference something specific about their business
- Explain what my free platform offers their audience
- Suggest a specific collaboration (sharing with their community, co-branded version, guest content, etc.)
- Keep it under 100 words
- Sound like a peer reaching out, not a salesperson pitching
\`\`\`

That's not a hard pitch. It's an offer that benefits their audience. Most business owners are constantly looking for valuable resources to share with their community. You're giving them one.

## The Recruiter Example

The recruiting firm from Lesson 3 could partner with:

- **HR software companies** — "Our free hiring platform teaches your users how to write better job ads and structure interviews. Want to feature it in your resource library?"
- **Business coaching programs** — "Your clients are growing and hiring. Our platform helps them hire smarter. We could do a joint webinar or you could share it in your community."
- **Staffing industry associations** — "We built a free employer training. Would you include it in your member resources?"

Each partnership puts the recruiter's platform in front of employers — exactly the audience they want — without spending money or sending cold outreach.

## Cross-Promotions and Guest Content

Beyond simple referrals, you can do structured collaborations:

**Guest posts or articles.** Write a valuable piece for their blog or newsletter. Include a link to your platform at the end.

**Joint webinars.** Co-host a training with a complementary business. Both audiences attend. Both parties benefit.

**Resource exchanges.** They share your platform with their audience. You share their tool/service with yours.

**Referral incentives.** If a partnership is driving consistent traffic, formalize it. Offer a referral fee for every booked call that comes from their audience. Even $50-100 per booked call makes it worth their while.

## How to Approach Partners

Don't mass-blast partnership pitches. This is a relationship game.

1. Make a list of 10-15 potential partners
2. Follow them on social media. Engage with their content genuinely.
3. Send a personalized message referencing something specific about their business
4. Lead with value — offer to create something useful for their audience
5. Keep it low-commitment. Don't ask for a "strategic partnership call." Ask if they'd be open to sharing your free platform.

Most people say yes to sharing something free and valuable with their audience. The barrier is low.

## Scaling Partnerships

Once you have one partnership working, document the process and repeat.

Track which partners drive the most signups and the highest-quality leads. Double down on those relationships.

Over time, you can build a referral network where 5-10 partners continuously send you qualified traffic. This is free, compounding traffic from sources your audience already trusts.

## Action Items

Identify 5 complementary businesses that serve your target audience.

Draft a partnership pitch using the template above. Customize it for each partner.

Send 3 messages this week. Not next week. This week.

Track responses and follow up with anyone who shows interest. Offer to make it as easy as possible for them — write the copy, create the assets, do the work.

## Next Up

Module 6 starts now. Your Client Engine is built and you have traffic strategies in place. It's time to go live, measure what matters, and scale what works.`,


// ============================================================
// LESSON 25: Pre-Launch Checklist
// ============================================================
25: `## Everything Must Work Before You Flip the Switch

You've built a lot of pieces over the last 24 lessons. Platform. Content. Nurture engine. Booking system. Traffic plan.

Now it's time to make sure everything actually works together.

This lesson is a pre-launch checklist. Go through it item by item. Don't skip anything. The worst thing you can do is drive traffic to a broken system.

[Download the pre-launch checklist](/lessons/downloads/pre-launch-checklist.md){.download}

> Print this out or open it in a second tab. Check off each item as you test it. Don't go live until every box is checked.

## The Complete Checklist

**Platform**
- [ ] Landing page is live and loads correctly
- [ ] Signup flow works (name, email/phone, password)
- [ ] Login works
- [ ] Lessons display correctly with proper formatting
- [ ] Lesson completion tracking works
- [ ] Progress bar updates accurately
- [ ] Sequential lesson gating works (can't skip ahead)
- [ ] Platform loads fast (under 3 seconds)
- [ ] Mobile responsive — test on your phone

**CRM Connection**
- [ ] Signup webhook fires and creates contact in CRM
- [ ] Lesson completion webhook fires and updates contact
- [ ] Booking CTA click webhook fires
- [ ] Tags are applying correctly
- [ ] Pipeline stages are updating

**Email Nurture**
- [ ] Welcome email sends on signup
- [ ] All 6 nurture emails are loaded and scheduled
- [ ] Behavior-based branches are configured
- [ ] Fast mover path works
- [ ] Staller re-engagement path works
- [ ] Booking invitation email fires at the right threshold
- [ ] Unsubscribe links work in every email

**SMS**
- [ ] Welcome text sends on signup
- [ ] Stall nudge fires after inactivity
- [ ] Opt-out (STOP) works correctly
- [ ] Phone numbers are formatted correctly in CRM

**Booking**
- [ ] Calendar shows correct availability
- [ ] Booking page loads and works
- [ ] Timezone auto-detection works
- [ ] Pre-call questionnaire appears after booking
- [ ] Confirmation email sends
- [ ] Confirmation SMS sends
- [ ] 24-hour reminder sends
- [ ] 1-hour reminder sends
- [ ] Conditional booking CTA appears for qualified leads only

**Traffic**
- [ ] At least one traffic channel is ready to launch
- [ ] Outreach messages are written
- [ ] Lead list is built (if doing cold outreach)
- [ ] Content is scheduled (if doing organic)
- [ ] Ad account is set up (if doing paid)

## The Full End-to-End Test

After checking every box, do a complete test.

1. Go to your landing page as if you're a new prospect
2. Sign up with a test email
3. Verify welcome email arrives
4. Verify welcome SMS arrives
5. Check CRM — contact created with correct tags
6. Complete Lesson 1. Mark it done.
7. Check CRM — lesson completion webhook fired
8. Complete enough lessons to hit your booking threshold
9. Verify booking invitation email fires
10. Verify conditional booking CTA appears on the platform
11. Book a test call
12. Verify confirmation email and SMS
13. Verify 24-hour and 1-hour reminders fire (you can adjust timing temporarily to test)
14. Check CRM — pipeline stage updated to "Booked"

If any step fails, fix it before going live. Claude Code can help debug:

"The lesson completion webhook isn't firing. Check the handler and webhook integration."

## Deploying With Vercel

If you haven't deployed yet, here's the final hosting setup.

1. Push your project to GitHub
2. Go to vercel.com and sign in with GitHub
3. Import your repository
4. Add your environment variables (DATABASE_URL, API keys, etc.)
5. Deploy

Vercel will give you a URL. Connect your custom domain in Vercel's settings and update your DNS records.

Claude Code can walk you through it:

"Help me deploy this Next.js project to Vercel. Walk me through the steps including environment variables and custom domain setup."

## Common Failure Points

**Emails going to spam.** Warm up your sending domain. Use a dedicated sending domain, not your main one. Start with low volume.

**Webhooks not firing.** Check the URL format, the HTTP method (should be POST), and the payload structure. GHL has specific requirements for webhook data format.

**Booking timezone issues.** Always test from a different timezone. Use an incognito window with a VPN if needed.

**Slow page loads.** Usually caused by unoptimized images or too many database queries. Claude Code can help: "Optimize the page load performance of the lesson pages."

**Broken mobile layout.** Always test on a real phone, not just browser dev tools. Things render differently.

## Action Items

Go through the entire checklist. Check every single box.

Run the full end-to-end test. Document any failures.

Fix everything that's broken. Test again.

Deploy to Vercel with your custom domain if you haven't already.

When every box is checked and the end-to-end test passes — you're live. Start driving traffic.

## Next Up

In the next lesson, you'll learn which metrics to track once you're live — and what each one tells you when it's off.`,


// ============================================================
// LESSON 26: Metrics That Matter
// ============================================================
26: `## Five Numbers. That's It.

Most people either track nothing or track everything. Both are useless.

Tracking nothing means you're flying blind. You don't know what's working or what's broken.

Tracking everything means you're drowning in data. Dashboards full of numbers that don't lead to decisions.

You need five numbers. Each one tells you something specific. Together, they tell you exactly how healthy your Client Engine is.

## The Five Metrics

**1. Signup Rate**

How many people who visit your landing page actually sign up?

Formula: signups / landing page visitors.

Benchmark: 15-30% is good for a free training platform. Below 10% means your landing page needs work.

How to track: Vercel Analytics or Google Analytics for page visits. Your database for signups. Or if you're running ads, your ad platform tracks landing page conversion.

**2. Engagement Rate**

How many signups actually complete at least one lesson?

Formula: users who completed 1+ lessons / total signups.

Benchmark: 40-60% should complete at least one lesson. Below 30% means your welcome experience or first lesson isn't compelling enough.

How to track: query your database. Claude Code can help: "Write a query that shows the percentage of users who completed at least one lesson."

**3. Nurture Response Rate**

How many people are engaging with your emails?

Formula: email opens + clicks / total emails sent.

Benchmark: 30-50% open rate, 5-10% click rate for nurture sequences. Below 20% open rate means your subject lines suck or you're landing in spam.

How to track: your CRM's email analytics.

**4. Booking Rate**

How many qualified leads book a call?

Formula: booked calls / leads who reached booking threshold.

Benchmark: 15-30% of qualified leads should book. Below 10% means your booking invitation is weak or your threshold is wrong.

How to track: CRM pipeline data.

**5. Show Rate**

How many people who book actually show up?

Formula: showed / booked.

Benchmark: 75-90% for Client Engine leads. Below 70% means your reminder system or pre-call experience needs work.

How to track: manually mark in CRM after each call, or use your calendar tool's attendance data.

## What Each Metric Tells You When It's Low

This is the important part. The numbers don't just tell you IF something is broken — they tell you WHERE.

Low signups = traffic or landing page problem.
Low engagement = lead magnet not delivering enough value in the first lesson.
Low email response = subject lines, timing, or relevance issues.
Low bookings = invitation is premature, CTA is weak, or threshold is wrong.
Low show rate = reminders aren't firing, too much time between booking and call, or leads aren't qualified enough.

Each metric points to a specific part of the system. Fix that part, and the number improves. This is not guesswork. It's diagnostics.

## Setting Up Tracking

You don't need fancy dashboards to start. A simple spreadsheet works.

Create a sheet with columns: Week, Landing Page Visitors, Signups, Lessons Completed (1+), Emails Opened, Emails Clicked, Calls Booked, Calls Showed.

Update it weekly. Calculate the five rates. Look for trends.

After 4 weeks of data, you'll see clear patterns. Some numbers will be strong. Some will be weak. The weak ones tell you exactly where to focus.

## Action Items

Set up tracking for all five metrics. Even if it's just a spreadsheet.

Run your system for one week with live traffic. Don't change anything. Just collect data.

At the end of the week, calculate all five rates. Write them down. These are your baselines.

You'll use these baselines in the next lesson to diagnose and fix any problems.

## Next Up

In the next lesson, you'll learn how to diagnose specific problems based on your metrics — and how to fix each one quickly using Claude Code.`,


// ============================================================
// LESSON 27: Diagnosing Problems
// ============================================================
27: `## When Something's Not Working

Your system is live. Traffic is coming in. Some things are working. Some things aren't.

This is normal. No system works perfectly on launch. The difference between people who succeed and people who quit is what happens next.

Quitters see bad numbers and think the system is broken. Builders see bad numbers and think "I know exactly which part to fix."

Here's how to diagnose and fix every common problem.

## Low Signups (Landing Page Visitors → Signups)

If people visit your landing page but don't sign up, one of three things is wrong:

**The headline doesn't grab them.** Your headline should communicate: what the free training is, who it's for, and what they'll get. In one sentence. If it's vague, rewrite it.

Test: Ask someone who doesn't know your business to read your headline. Can they explain what you're offering in 5 seconds? If not, rewrite.

**The page asks for too much.** If your signup form has more than 3-4 fields, cut it down. Name, email, password. That's enough. Every extra field kills conversions.

**The value isn't clear.** People need to know what they're getting BEFORE they sign up. List the topics. Show the module structure. Make the free training sound like something they'd pay for.

Claude Code fix: "Rewrite the landing page headline and subheadline. My audience is [who]. The training teaches [what]. Make it clear, specific, and compelling. No hype."

## Low Engagement (Signups → Lesson Completions)

If people sign up but don't complete lessons, the problem is in the first experience.

**The first lesson isn't strong enough.** Lesson 1 has one job: make them want to read Lesson 2. If it's boring, generic, or too theoretical, they'll bounce.

Test: Read your Lesson 1 from a prospect's perspective. Does it teach something genuinely useful in the first three paragraphs? Does it make you want to keep reading?

**The welcome email didn't drive them back.** Your welcome email should include a direct link to Lesson 1 with a compelling reason to start now.

**The platform experience is clunky.** If the site is slow, confusing, or ugly, people won't stick around. Test on mobile. Test on slow connections.

Claude Code fix: "Rewrite Lesson 1 to open with a more compelling hook. Start with a specific, surprising insight that challenges a common assumption my audience has."

## Low Email Response (Open Rates and Click Rates)

If people aren't opening or clicking your emails, check these:

**Subject lines.** Are they curiosity-driven or just descriptive? "Quick question about your [process]" beats "Newsletter Issue #4" every time.

**Timing.** When are you sending? Test different times. Tuesday-Thursday, 8-10am in the recipient's timezone, tends to work best for B2B.

**Relevance.** Are you sending educational emails to someone who already completed the course? Are you sending the same sequence regardless of behavior? This is why behavior-based routing matters.

**Deliverability.** Check your spam score. Are you using a warmed-up domain? Is your sending volume too high too fast?

Claude Code fix: "Rewrite the subject lines for my 6-email nurture sequence. Make them curiosity-driven, under 7 words, and avoid spam trigger words."

## Low Bookings (Qualified Leads → Booked Calls)

If qualified leads aren't booking, something is off with the invitation or the booking experience.

**The invitation is premature.** Maybe your qualification threshold is too low. If someone completed 2 lessons and gets a booking invite, that's too soon. Increase the threshold.

**The CTA is weak.** "Would you like to chat?" is weak. "Let's look at how this works for your specific business" is specific and compelling.

**The booking page has friction.** Is the link working? Is the calendar showing availability? Does it take more than 2 clicks to book?

Claude Code fix: "Rewrite the booking invitation email. Make it feel personal, reference the prospect's platform engagement, and use a specific CTA about their business situation."

## Low Show Rate (Booked → Showed)

If people book but don't show up, check the reminder system.

**Reminders aren't firing.** Test them. Sign up, book, and verify all three reminders send (confirmation, 24hr, 1hr).

**Too much time between booking and call.** If someone books on Monday for a call next Friday, they'll forget. Keep the gap to 2-3 days maximum. Adjust your availability windows to allow sooner bookings.

**Pre-call brief isn't landing.** Is it being sent? Is it too long? Is it clear?

## Using Claude Code to A/B Test

Claude Code makes iteration fast.

\`\`\`prompt
Create an alternative version of the landing page hero section. Keep the same layout and structure but try a completely different headline and subheadline approach. The current version emphasizes [current angle]. Try an approach that emphasizes [new angle]. I want to A/B test which one converts better.
\`\`\`

Deploy version B. Split traffic manually or use Vercel's built-in A/B features. Run for 2 weeks. Pick the winner.

You can A/B test landing pages, email subject lines, booking page copy, and CTA placement. Claude Code creates variations in minutes.

## Action Items

After one week of live data, identify your weakest metric.

Diagnose the specific problem using the framework above.

Make one improvement. Not five. One. Change the headline, rewrite the first email subject line, or adjust the booking threshold.

Run for another week. Compare. Did the metric improve?

This is the optimization loop. Measure → diagnose → fix → measure again. Repeat forever.

## Next Up

Final lesson. Scaling. How to take a working system and multiply its output.`,


// ============================================================
// LESSON 28: Scaling
// ============================================================
28: `## When to Scale and How

Your Client Engine is live. Traffic is coming in. Leads are signing up. Some are completing the course. Some are booking calls. Some are becoming clients.

Before you scale, ask yourself one question: is the system working?

Not "is it perfect." Not "could it be better." Just: is the basic flow working? Are strangers becoming leads becoming booked calls becoming clients?

If yes — even if the numbers are small — you're ready to scale.

If no — go back to Lesson 27 and fix what's broken first. Scaling a broken system just breaks it faster and more expensively.

## What Scaling Actually Means

Scaling is not "do more." Scaling is "do what works, more."

That distinction matters. Most people try to scale by adding complexity. New funnels. New offers. New tools. New channels. All at once.

That's not scaling. That's chaos.

Scaling means taking the one or two things that are working and increasing their volume. Then — and only then — adding new channels.

## Adding a Second Traffic Channel

You started with one primary channel in Lesson 20. You've been running it for at least a few weeks. You have data on what works.

Now add a second channel.

If you started with cold outreach → add organic content.
If you started with organic → add cold outreach or ads.
If you started with ads → add organic or partnerships.

The second channel should complement the first. Each one feeds the same platform. They compound each other.

A prospect who sees your LinkedIn post AND gets a cold email is more likely to sign up than someone who only sees one or the other. Multiple touchpoints increase trust.

## Increasing Ad Spend Incrementally

If paid ads are working, scale them slowly.

Do not go from $15/day to $150/day overnight. Facebook and LinkedIn's algorithms need time to optimize. Big budget jumps often kill performance.

The rule: increase by 20-30% every 5-7 days.

$15/day → $20/day → $25/day → $30/day → and so on.

Monitor your cost per signup at each level. If it stays stable or improves, keep scaling. If it jumps significantly, hold the current budget and let it stabilize.

## Building Additional Features With Claude Code

Once your Client Engine is running and driving results, you can expand it.

Ideas:
- **Assessment tools** — Add a quiz or self-assessment to your platform that gives prospects a personalized score or recommendation
- **Resource libraries** — Additional content beyond the core course — templates, checklists, tools
- **Community features** — A discussion board or Q&A section
- **Advanced tracking** — More granular behavior data for better nurture routing
- **Client portal** — Turn your platform into a client delivery tool after they buy

Every one of these can be built with Claude Code. The same workflow you used to build the initial platform applies to new features.

\`\`\`prompt
Add a self-assessment quiz to the platform. After completing Module 2, show users a 10-question quiz that evaluates their current [process/system]. Each question should be multiple choice. Based on their total score, display one of three personalized recommendations:

- Score 0-3: "You're starting from scratch — here's what to focus on first"
- Score 4-7: "You have pieces in place — here's what's missing"
- Score 8-10: "You're close — here's the one thing that would make the biggest difference"

Track the quiz completion and score as behavior events. Send a webhook to GHL with the user's email, score, and recommendation tier.
\`\`\`

Claude Code builds it. You review it. Deploy. Done.

## The Long Game

Your Client Engine compounds every day it runs.

Content gets indexed by search engines. Old posts continue to drive traffic. Your email list grows. Your brand authority increases. Past prospects who weren't ready six months ago come back and book.

This is not a quick-win tactic. This is infrastructure. It gets more valuable over time, not less.

And here's the part that should get you excited: what took you weeks to build the first time can now be replicated for a different audience in days.

New niche? New course content. Same system. Same architecture. Deploy in a weekend.

New offer within the same niche? Add a module to your existing platform. Claude Code writes the content and builds the pages. You review and publish.

The hard part was learning the system. You've done that. Everything from here is execution.

## The 30-Day Scaling Plan

Here's your roadmap for the next month:

**Week 1: Optimize**
- Review all 5 metrics from Lesson 26
- Identify the weakest one
- Make one improvement
- Continue primary traffic channel

**Week 2: Add Channel Two**
- Launch your second traffic channel
- Continue optimizing the weak metric from Week 1
- Begin tracking cross-channel performance

**Week 3: Increase Volume**
- If ads are running, increase budget by 20-30%
- If doing outreach, increase send volume
- If doing content, increase posting frequency
- Monitor all metrics for changes

**Week 4: Evaluate and Plan**
- Review 30 days of data
- Calculate cost per signup, cost per booked call, cost per client
- Identify which channel performs best
- Plan next 30 days based on data

## Action Items

Create your 30-day scaling plan using the template above. Write specific actions for each week.

Identify your second traffic channel. Get it ready to launch in Week 2.

Set a calendar reminder to review metrics every Friday. Make it a habit. The system only improves if you pay attention to it.

## One Last Thing

You just went from zero to a fully operational Client Engine.

A platform that delivers value. A nurture system that adapts. A booking flow that converts. Traffic strategies that feed the machine.

Built with Claude Code. Deployed in weeks, not months.

This is what most agencies and consultants spend years trying to piece together. You just did it with a boilerplate, a CLI tool, and a clear architecture.

Now the only thing left to do is run it. Feed it traffic. Watch the data. Fix what's weak. Scale what works.

Your Client Engine is live.

Go fill your calendar.`,

};

async function main() {
  for (const [order, content] of Object.entries(lessons)) {
    await prisma.lesson.update({
      where: { order: parseInt(order) },
      data: { content },
    });
    console.log(`Updated lesson ${order}`);
  }
}

main().then(() => prisma.$disconnect());
