import "dotenv/config";
import { PrismaClient } from "../src/generated/prisma";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

interface LessonUpdate {
  title: string;
  subtitle: string;
  readTime: string;
  content: string;
}

const lessons: Record<number, LessonUpdate> = {

// ============================================================
// LESSON 1
// ============================================================
1: {
  title: "Welcome to The Client Engine",
  subtitle: "Learn AI by building something real",
  readTime: "6 min read",
  content: `## The Most Important Skill in Business Right Now

You can get ChatGPT to write a bio. You can ask it to fix a sentence. You've probably done that already.

That's not what I'm talking about.

I'm talking about using AI the way the people who are running circles around everyone else use it. As an actual thinking partner. A builder. A strategist who's available 24/7 and never gets tired or precious about their work.

The gap between people who know how to use AI and people who sort of know how to use AI is enormous. And it's getting bigger every month.

Here's the thing though: you don't learn it by watching tutorials. You don't learn it by reading blog posts. You don't learn it from a course — including this one.

**You learn AI by talking to it.**

That's it. Open Claude. Tell it what you're trying to do. Ask it questions. Push back when it gives you something wrong. Give it more context. Try again.

The people who are great with AI aren't technical geniuses. They're just people who treat it like a conversation — and they do it constantly.

This course exists to give you a real reason to have that conversation. A real project. A real outcome. Something you'll actually use.

But the course isn't the point. The conversation with Claude is.

Every lesson here will push you to open Claude and talk to it. Not copy-paste a rigid script. Talk to it. Tell it what you want. Iterate.

![The Client Engine platform](/lessons/screenshots/landing-hero.png)

## What You're Building

You're building something called The Client Engine.

It's a lead magnet in the form of a free training platform — exactly like the one you're reading right now. It has a landing page, a login, a member portal, and a sequence of lessons. People sign up to learn something valuable. As they work through it, an automated email system watches their behavior and sends the right message at the right time. When someone hits a certain engagement threshold, they get invited to book a call.

By the end, you've got a machine that turns strangers into qualified conversations — without you manually doing anything.

Here's what you'll have when this is done:

- **A deployed web platform** — your own Client Engine, live on a real domain
- **An automated email nurture system** — behavior-based, not a dumb drip sequence
- **A booking system** — that invites the right people at the right time
- **Real working knowledge of Claude** — both the Desktop app and the CLI tool

The platform generates leads. The AI education is the byproduct. You get both.

## You're Already Inside One

Here's the meta angle you need to understand.

This platform — the one you're reading right now — is a Client Engine. It was built with Claude Code (Anthropic's CLI tool). The emails you'll receive from us are automated and behavior-based. When you hit a certain number of completed lessons, you'll get a different email than someone who signed up and never came back.

You're not being shown a concept. You're inside the product.

That's intentional. The best way to understand what you're building is to experience it. Every design decision we made, every piece of copy, every automation — you'll be making those same decisions for your own version.

## This Course Has Two Jobs

Most courses teach you a thing. This one teaches you a thing *while* you build another thing.

**Job 1: Learn Claude.** You'll learn how the models work, when to use Desktop vs CLI, how to give better prompts, and how to build real things with it. By Lesson 28, you'll know more about practical AI usage than 95% of people.

**Job 2: Build The Client Engine.** By Lesson 28, you have a live platform on a real domain generating qualified leads for your business.

One course. Two real outcomes.

## What to Do Now

Open Claude Desktop if you have it, or go to claude.ai if you don't. Just start a conversation. Tell it what kind of business you have and what you want more of. Don't overthink it. Just talk.

Then come back and do Lesson 2.`
},

// ============================================================
// LESSON 2
// ============================================================
2: {
  title: "How Claude Actually Works",
  subtitle: "Models, tools, and how to think about AI",
  readTime: "5 min read",
  content: `## Claude Is Not ChatGPT

People use the names interchangeably. They're not the same.

ChatGPT is made by OpenAI. Claude is made by Anthropic. Different company, different training approach, different strengths. Claude tends to be better at long-form writing, following complex instructions, and staying consistent through a long conversation. It's also less likely to hallucinate confidently wrong answers.

Neither is perfect. But for what we're doing in this course — writing, building, strategizing — Claude is the better tool.

## The Models

Claude comes in three versions. You'll use all of them at different times.

**Sonnet** — This is your daily driver. Fast, smart, handles almost everything. When you're in Claude Code building your platform, this is what's running by default. It's the right choice for 90% of tasks.

**Opus** — Slower and more expensive, but this is Claude thinking hard. Use it when you're stuck on something strategic, need deep analysis, or want to pressure-test an idea. It's like switching from a capable associate to a senior partner.

**Haiku** — Fast and cheap. Great for simple, repetitive tasks where you don't need heavy reasoning. Not what you'll use for most of this course.

For this course: Sonnet for everything unless you're specifically told otherwise.

## Claude Desktop

Claude Desktop is the app you download and run on your computer. It's a chat interface — you type, Claude responds.

Go to claude.ai/download and grab it. It's free to start.

**Projects** — You can create a "Project" inside Claude Desktop that saves context across conversations. Instead of re-explaining who you are every time, your project remembers. We'll set one up for your Client Engine in Lesson 6.

**Artifacts** — When Claude creates something substantial — a document, a block of code, a spreadsheet — it puts it in an Artifact panel on the right side. You can copy, download, or edit it directly.

**Extended thinking** — Some models support a mode where Claude thinks through a problem before answering. You'll see a little thinking indicator. Use this for complex strategic questions.

**When to use Desktop:** Brainstorming. Writing. Planning. Research. Anything where you're working through ideas and having a conversation. Desktop is for thinking.

## Claude Code (CLI)

This is the other tool. The one that actually builds things.

CLI stands for Command Line Interface. It's a text window where you type commands instead of clicking buttons. If you've never used one before, that's fine — we'll walk through it in Lesson 7.

Claude Code is different from Desktop in one critical way: **it reads your entire project.**

When you run Claude Code inside your project folder, it can see all your files, understand how everything connects, write new code, run commands, create files, modify things, and deploy. It's not just a chatbot. It's a developer sitting next to you with full access to your codebase.

You tell it what you want in plain English. It figures out how to do it.

"Change the headline on the landing page to 'Get more clients on autopilot'"

"Add a new section to the homepage that shows three testimonials"

"The email isn't sending — look at the email service file and fix it"

That's it. That's how you use it.

**When to use CLI:** Building. Modifying code. Deploying. Anything where something needs to actually get made or changed. CLI is for building.

## Same Brain, Different Interface

Here's the thing: it's the same Claude either way.

Desktop is Claude in a chat window. CLI is Claude with access to your files and terminal. The intelligence is identical. The interface determines what it can *do*.

Think of it like this: Claude Desktop is like texting a brilliant consultant. Claude Code is like that same consultant sitting at your desk with their laptop open, ready to actually do the work.

You'll use both throughout this course. Desktop for planning and strategy. CLI for building and shipping.

## How to Actually Talk to AI

Most people give Claude garbage inputs and then complain that the outputs are garbage.

Here's how to do it right:

**Be specific.** Don't say "make my landing page better." Say "my landing page headline is [X], my audience is [Y], the main objection they have is [Z] — rewrite the headline to address that objection directly."

**Give context.** Claude doesn't know your business. Tell it. Tell it who you serve, what you sell, what your voice sounds like, what the goal is.

**Iterate.** The first output is rarely the final output. Say "that's good but make it shorter" or "the tone is too formal, make it sound like I'm talking to a friend." Keep going.

**Push back.** If Claude gets something wrong, tell it. "That's not what I meant — I meant [X]." It won't get defensive. It'll just adjust.

**It's a conversation, not a search engine.** The people who are bad at AI treat every prompt like a Google search — one message, expect a perfect answer, move on. The people who are great at it have actual back-and-forth exchanges.

That's the whole mindset shift. It's a conversation.

## What to Do Now

Go to claude.ai. Start a new conversation. Tell Claude:

- What kind of business you have
- Who your clients are
- What your biggest growth challenge is right now

See what it says. Push back on anything that feels off. Ask follow-up questions.

You're not doing this to get an answer. You're doing it to start building the habit of talking to it. That habit is the most valuable thing you'll get from this course.`
},

// ============================================================
// LESSON 3
// ============================================================
3: {
  title: "What The Client Engine Is",
  subtitle: "The system you're about to build",
  readTime: "5 min read",
  content: `## You're Inside One Right Now

Before I explain what The Client Engine is, look around.

You signed up on a landing page. You got a welcome email. You're now inside a member portal working through lessons. The emails you'll receive are automated — and they'll change based on what you actually do in here. If you complete five lessons, you'll get a different email than someone who logged in once and never came back.

That's a Client Engine. You're inside it.

Everything we're about to talk about isn't hypothetical. It's operational. You're experiencing the exact product you're going to build.

## The Five Components

Every Client Engine has five parts.

**1. Traffic** — How strangers find out it exists. Cold outreach, organic content, paid ads, partnerships. Doesn't matter which channel. You need something driving people to your landing page.

**2. Lead Magnet** — The thing you offer for free in exchange for an email address. In this system, the lead magnet is the training platform itself. Not a PDF. Not a webinar. An actual piece of software that delivers real value over time.

**3. Nurture Engine** — The automated email system that watches what people do inside your platform and sends relevant messages based on their behavior. This is the core of the whole thing.

**4. Booking System** — A calendar that qualified leads can use to book a call with you. The key word is *qualified*. They don't see it until they've earned it.

**5. Feedback Loop** — The mechanism for collecting reviews, testimonials, and signal about what's working. Most people skip this. It's the most underrated part of the system.

## Why a Course Platform Beats Every Other Lead Magnet

You've seen the alternatives. PDFs no one reads. Webinars with 30% show rates. Free consultations that attract tire-kickers.

A training platform is different for a few reasons.

**It delivers value over time.** A PDF is consumed once (maybe). A course someone works through over two weeks builds a relationship. By the time they finish, they feel like they know you.

**It self-selects for serious people.** Someone who completes five lessons is a different person than someone who downloaded your checklist. Completion is a qualification signal.

**It gives you behavioral data.** You know what they're reading, how far they've gotten, where they dropped off. Email nurture based on that data is dramatically more relevant than generic drip sequences.

**It positions you as the expert.** You're not saying you're good at what you do. You're demonstrating it. By teaching.

## The Recruiter Example

Here's the version of this that makes it click for most people.

Imagine you're a recruiting firm. The old approach: cold email hiring managers saying "we're great at finding talent, want to hop on a call?"

That's a pitch. Nobody wants it.

The Client Engine approach: build a free hiring platform. Employers post jobs for free, see a candidate pipeline, get resources on building job descriptions and interview processes. It's genuinely useful. They sign up because they want the tool — not because they're ready to hire a recruiter.

Now the nurture engine watches what they do. An employer who posts three jobs and logs in daily? That's a signal. They're actively hiring, probably stressed about it. That's when the system sends the email: "You've been using the platform — curious if you'd find it helpful to talk about your current search."

It doesn't feel like a sales pitch. It's a natural next step.

That's the whole model. Whatever your business — design, consulting, marketing, coaching — the principle is identical. Lead with value. Watch the signal. Invite the ready ones.

## The Full Funnel

Here's the journey from stranger to client:

**Stranger** — Doesn't know you exist yet.

**Visitor** — Lands on your page. Decides whether it's worth signing up.

**Lead** — Signs up. Now you have their email. Nurture sequence starts.

**Engaged** — Completing lessons. Opening emails. Showing up. These people are warming up.

**Qualified** — Hit your threshold (you define it). High lesson completion, high email engagement, showing real intent signals. These people get invited to book.

**Client** — Had the call, signed the contract.

**Advocate** — Happy client who leaves a review, refers others, becomes part of your traffic system.

The whole machine moves people from left to right. Automatically. Without you manually touching it.

## What Claude Code Built

This platform — the one you're in — was built entirely with Claude Code.

The landing page, the authentication system, the member portal, the lesson renderer, the email automations, the admin dashboard, the booking triggers — all of it. There's a developer who directed the build, but the actual code was written by Claude.

That's not a marketing claim. That's just what happened.

And you're going to do the same thing. You don't need to know how to write code. You need to know what you want, how to describe it clearly, and how to iterate when something isn't right.

That's what we're teaching you.

## What to Do Now

Open Claude Desktop. Start a new conversation.

Tell it about your business. Who you serve. What you sell. What kind of value you could package into a free training platform that your ideal clients would actually want.

Don't try to design the whole thing. Just explore. Ask Claude to push back on your ideas. Ask it "what would make someone in my audience actually sign up for this?"

Start the thinking process. We'll structure it properly in Lesson 5.`
},

// ============================================================
// LESSON 4
// ============================================================
4: {
  title: "Choosing Your Offer and Audience",
  subtitle: "Who is this for and what do they get",
  readTime: "6 min read",
  content: `## Narrow Wins

The single biggest mistake people make when building a lead magnet is trying to appeal to everyone.

"This is for business owners who want to grow."

That's not an audience. That's a demographic.

The narrower you go, the better everything works. The landing page converts better because the right person reads it and thinks "this is for me." The lessons land harder because they're speaking directly to someone's actual situation. The emails feel personal because they are personal.

Here's the test: if your ideal client reads your offer headline and thinks "that's for someone like me," you're narrow enough. If they have to squint to figure out if it applies to them, you're too broad.

## The Framework

There's a fill-in-the-blank formula that forces clarity:

**"I help [specific person] get [specific result] without [specific objection or obstacle]."**

Let's build it out.

**[Specific person]** — Don't say "business owners." Say "e-commerce brands doing $500K-$5M" or "solo financial advisors under $2M AUM" or "marketing agencies with a team of 5-15."

**[Specific result]** — Don't say "grow their business." Say "fill their pipeline with qualified enterprise clients" or "reduce churn below 5%" or "get consistent referrals without asking for them."

**[Without specific obstacle]** — This is the hook. It addresses the thing they've tried before that didn't work. "Without cold calling." "Without hiring a full-time salesperson." "Without spending on ads."

Put it together:

"I help marketing agencies with 5-15 people get a consistent flow of inbound leads without running paid ads or doing cold outreach."

That's a real sentence. Someone reads that and either says "that's me" or "that's not me." Either answer is correct.

## Examples Across Niches

**Accounting firm:** "I help small law firms get their books clean and their taxes filed on time without hiring a full-time accountant or learning QuickBooks."

**Brand designer:** "I help B2B SaaS companies rebrand for enterprise sales without a 6-month agency engagement or $100K+ budget."

**Marketing consultant:** "I help e-commerce brands make their email list their top revenue channel without expensive retainers or complex automation setups."

**Executive coach:** "I help first-time startup founders become leaders their teams actually follow without expensive leadership programs or reading 30 management books."

**Recruiting firm:** "I help fast-growing tech companies hire senior engineers in under 60 days without blowing their recruiting budget on job boards."

See the pattern? Specific person. Specific result. Specific obstacle removed.

## Now Build Your Lead Magnet Premise

Once you have your offer statement, the lead magnet writes itself.

The training platform teaches the *journey* toward the result. Not the full result — that's what you sell. The platform teaches the concepts, frameworks, and early steps that make someone realize they need your help to actually get there.

If you help marketing agencies get inbound leads, your platform might teach: why most agency marketing doesn't work, what inbound looks like for an agency, the lead magnet model, how to set up a nurture system at a high level. By the end, they understand the landscape and see that execution is the hard part. That's where you come in.

The platform positions you without pitching you.

## The Claude Prompt

Here's how to use Claude to sharpen your offer. Copy this into Claude Desktop:

\`\`\`prompt
I run [type of business]. I help [type of client] with [type of problem].

My current offer statement is: [paste yours or your best attempt].

Help me make this more specific and compelling. Ask me questions if you need more information about my audience, the results I get, or what my clients are trying to avoid.

I want to end up with:
1. A tight offer statement using "I help [X] get [Y] without [Z]"
2. A training platform premise — what would I teach that delivers real value AND positions me as the expert they need
3. A working title for the platform
\`\`\`

Don't rush this prompt. Let Claude ask you questions. Give it real answers. The more context it has, the sharper the output.

## Common Mistakes

**Being vague about the result.** "More success" is not a result. "Three new enterprise clients in 90 days" is a result.

**Picking an audience you don't know.** You need to understand your audience well enough to teach them something. If you'd have to research their industry to write the lessons, pick a different audience.

**Making the lead magnet too close to your paid offer.** The platform should teach the "why" and "what" — not the "how." The "how" is what they pay for.

**Skipping the "without."** The objection removal is often the most compelling part of the offer. Don't leave it out.

## What to Do Now

Before moving to Lesson 5, lock in three things:

1. Your completed offer statement: "I help [X] get [Y] without [Z]"
2. A working title for your training platform
3. Three to five things your audience needs to understand before they'd be ready to hire you — these become your modules

Write these down somewhere. You'll give them to Claude in the next lesson when we map out the full system.

If you're stuck, open Claude Desktop and use the prompt above. Let it push you toward specificity. Don't settle for vague.`
},

// ============================================================
// LESSON 5
// ============================================================
5: {
  title: "Mapping Your System With Claude",
  subtitle: "Design the whole thing before you build anything",
  readTime: "6 min read",
  content: `## Plan First. Build Second.

The most expensive mistake you can make is jumping straight into building without a clear map.

Not expensive in money. Expensive in time. You'll build something, realize the structure is wrong, tear it apart, rebuild it, realize the content doesn't match the nurture sequence, rebuild that — and end up spending three times as long as if you'd just thought it through first.

Claude Desktop is a better planning partner than any consultant you've ever hired. It has no agenda. It'll poke holes in your thinking without being polite about it. It'll ask you questions you didn't think to ask yourself.

This lesson is about using it properly before we write a single line of code.

## The Truth List

Here's the exercise.

Your ideal client has a set of beliefs right now. Some of them are true. Some of them are false. Some of them are holding them back from hiring you.

Before they'll become a client, they need to:
- Understand something they currently don't
- Stop believing something that isn't true
- See evidence that your approach works
- Trust that you're the right person to help them

Your platform's job is to move them through that belief journey.

The "truth list" is a list of things your ideal client needs to believe before they'll be ready to hire you. Not before they'll like you — before they'll buy.

Write them out. Five to ten statements. Start each one with "My ideal client needs to understand that..."

Example for a marketing consultant:

- My ideal client needs to understand that their current lead gen approach is transactional and that's why it feels exhausting
- My ideal client needs to understand that inbound leads close faster and at higher rates than outbound leads
- My ideal client needs to understand that a lead magnet is not just a PDF — it can be a product
- My ideal client needs to understand that behavior-based email is fundamentally different from drip campaigns
- My ideal client needs to understand that they don't need more traffic — they need better conversion of the traffic they have

Each of those beliefs maps to a module or a lesson in your platform.

## Sequencing Beliefs into Modules

Now take your truth list and sequence it.

Beliefs have dependencies. "My audience needs to understand X" often comes before "My audience needs to understand Y" — because Y doesn't make sense without X.

Sort your truth list from foundational to advanced. Group related beliefs together. Each group becomes a module.

Use this prompt in Claude Desktop:

\`\`\`prompt
I'm building a free training platform for [my audience]. Here's my list of things they need to believe before they'd hire me:

[paste your truth list]

Help me sequence these into a logical learning journey. Group them into 4-6 modules. Give each module a title and 3-5 lesson topics. The progression should feel natural — each lesson builds on the last.

Also flag any gaps: things they probably need to understand that I haven't listed.
\`\`\`

Let Claude do the heavy lifting. Review the output. Move things around if the sequence feels off. The goal is a module/lesson outline you believe in.

## Mapping the Nurture Journey

Once you have your content map, you need to map the email journey that runs alongside it.

The emails aren't just reminders. They're part of the teaching. They extend the conversation from the platform into the inbox.

Here's the framework:

**Pre-content emails** (before they've done anything): Welcome email. Set expectations. Get them to log in and start.

**Engagement emails** (while they're working through it): Reinforce what they're learning. Add context. Share related ideas. Keep momentum.

**Re-engagement emails** (when they've gone quiet): Acknowledge the gap. Give them a reason to come back. Make it easy.

**Qualification trigger** (when they hit your threshold): They've completed enough lessons, shown enough engagement. Now it's time to invite them to a conversation.

**Post-booking** (when they schedule): Confirmation. Pre-call brief. Reminders.

Use this prompt to map it out:

\`\`\`prompt
I'm building a behavior-based email nurture system for my training platform. My audience is [X] and I'm teaching them [Y].

Here's my module/lesson structure:
[paste your outline]

Help me design the email nurture journey. What emails should go out:
1. When someone first signs up
2. When someone completes their first lesson
3. When someone completes each module
4. When someone hasn't logged in for 3 days
5. When someone has completed [X] lessons (my qualification threshold)

For each email, give me: the trigger, the subject line angle, and the core message or idea.
\`\`\`

## Defining Your Qualification Threshold

Before we move on, you need one more thing: your threshold.

What does a "qualified lead" look like in your platform? What behavior signals readiness?

Some options:
- Completed X lessons (a pure completion metric)
- Completed the full platform (high bar, but highly qualified)
- Completed X lessons AND opened Y emails (engagement signal)
- Reached a specific lesson (one that contains your "this is what it takes to do this properly" moment)

There's no universal answer. It depends on your sales cycle, your offer price, and how long your platform is.

A good default: completion of the first two modules, which typically means 6-8 lessons. That's enough engagement to be meaningful, but not so demanding that only perfectionists qualify.

Pick a threshold. Write it down. This becomes the trigger for your booking automation.

## What to Do Now

By the end of this lesson you should have:

1. A completed truth list — what your audience needs to believe
2. A module/lesson outline — sequenced beliefs turned into a curriculum
3. A nurture email map — what emails go out, when, based on what behavior
4. A qualification threshold — what signals readiness to talk

All four of these come from conversations with Claude Desktop. Use the prompts above. Don't try to do this from scratch in your head.

Once you have them, write them down somewhere you can reference easily. You'll use them constantly as you build.`
},

// ============================================================
// LESSON 6
// ============================================================
6: {
  title: "Getting Started With Claude Desktop",
  subtitle: "Your AI workspace",
  readTime: "4 min read",
  content: `## Download It

Go to claude.ai/download. Grab the version for your operating system (Mac or Windows). Install it. Takes about two minutes.

When you open it, you'll sign in with your Anthropic account (same one you use at claude.ai). If you don't have one, create it — it's free to start.

You'll land in a clean chat interface. This is your AI workspace.

![Claude Desktop interface](/lessons/screenshots/portal-dashboard.png)

## The Interface

A few things worth knowing about what you're looking at:

**The chat window** — This is where the conversation happens. You type in the bottom, Claude responds in the thread. It works like any chat interface. Don't overthink it.

**Model selector** — At the top or in the input area, you can switch between models. Claude Sonnet 4.5, Claude Opus 4, Claude Haiku. For most tasks in this course, Sonnet is the right choice. Switch to Opus when you want deeper strategic thinking.

**Artifacts** — When Claude creates something substantial — a document, a chunk of code, a table — it often puts it in an Artifact panel on the right side of the screen. You can copy the content, download it, or keep it open while you continue the conversation. Artifacts are useful. Don't ignore them.

**Projects** — This is one of the most underused features in Claude Desktop.

## Projects

A Project is a container that saves context across multiple conversations.

Without Projects, every new chat starts completely fresh. You have to re-explain who you are, what your business does, and what you're working on every single time.

With a Project, you set it up once with your business context, your goals, your voice guidelines — and every conversation inside that Project starts with that context already loaded. Claude remembers who you are.

For your Client Engine build, this matters. You'll have dozens of conversations as you plan, write content, refine copy, and map your nurture sequence. You don't want to re-explain your business every time.

**To create a Project:**

1. Look for the Projects section in the left sidebar (or top navigation, depending on your version)
2. Click "New Project"
3. Name it something like "My Client Engine"
4. In the Project instructions, paste your business context

Here's a template for your Project instructions:

\`\`\`prompt
My name is [Your Name]. I run [Your Business Name], a [type of business].

I help [your specific audience] get [specific result] without [specific obstacle].

My training platform is called [Platform Name]. It teaches [audience] how to [core transformation].

My voice is: direct, practical, no bullshit. I don't use corporate speak or over-promise. I talk to my audience like a peer.

When helping me write content, keep it punchy and specific. Short sentences. Real examples. No fluff.
\`\`\`

Fill that in with your actual details. This becomes the baseline context for every conversation in this Project.

## Extended Thinking

Some Claude models support extended thinking — a mode where Claude works through a problem more carefully before responding. You'll see a thinking indicator while it's working.

This is worth using when:
- You're making a strategic decision (which audience to target, how to structure your offer)
- You're stuck on something and want Claude to really think it through
- The output quality of a normal response isn't cutting it

It uses more of your monthly usage, so don't use it for simple tasks. But for the real thinking work in Lessons 4 and 5, it's worth turning on.

## What to Do Now

1. Download and install Claude Desktop
2. Create an account if you don't have one
3. Create a new Project called "My Client Engine"
4. Add your business context to the Project instructions
5. Start a conversation inside the Project — tell Claude about your training platform idea and ask it for feedback

That last step matters. Don't just set it up. Use it. The first conversation in your Project will tell you how well you've set up the context. If Claude's responses feel generic, your instructions need more specifics.`
},

// ============================================================
// LESSON 7
// ============================================================
7: {
  title: "Getting Started With Claude Code",
  subtitle: "The tool that builds everything",
  readTime: "7 min read",
  content: `## What CLI Actually Means

CLI stands for Command Line Interface.

It's a text window where you type commands instead of clicking buttons. No graphics. No menus. Just a blinking cursor waiting for you to type something.

If you've never used one, it looks intimidating. It isn't. It's just a different way to talk to your computer.

On a Mac, the CLI app is called Terminal. On Windows, it's called Command Prompt (or PowerShell, which is the newer version). Both do the same thing for our purposes.

**To open Terminal on Mac:** Press Command + Space, type "Terminal," press Enter.

**To open Command Prompt on Windows:** Press Windows key, type "cmd," press Enter.

You'll get a window with some text and a blinking cursor. That's it. That's the CLI.

## Before You Install Claude Code

Claude Code requires Node.js. Node.js is a software runtime that lets JavaScript run on your computer (not just in browsers). A lot of developer tools are built on it.

Go to nodejs.org and download the LTS version (Long Term Support — the stable one). Install it. This is a one-time thing.

Once it's installed, verify it worked by opening Terminal and typing:

\`\`\`bash
node --version
\`\`\`

If you see a version number (like v20.11.0), you're good. If you get an error, Node didn't install correctly — try the installer again.

## Installing Claude Code

With Node.js installed, run this in Terminal:

\`\`\`bash
npm install -g @anthropic-ai/claude-code
\`\`\`

This installs Claude Code globally on your computer. The \`-g\` flag means "install this everywhere, not just in the current folder." The \`npm\` command is Node's package manager — it's how you install developer tools.

It'll take about a minute. You'll see a bunch of text scroll by. That's normal.

## Getting Your API Key

Claude Code uses the Anthropic API, which means it needs an API key — basically a password that tells Anthropic's servers "this is a real account and they have permission to use Claude."

To get one:

1. Go to console.anthropic.com
2. Sign in (or create an account — same credentials as Claude Desktop)
3. Click "API Keys" in the left sidebar
4. Click "Create Key"
5. Give it a name ("Claude Code" or whatever you want)
6. Copy the key — it looks like \`sk-ant-...\`

**Important: copy it now.** You can't see it again after you close that page. If you lose it, you'll have to create a new one.

**Cost:** The API is pay-as-you-go. Using Claude Code for this course will cost somewhere between $5-20 total depending on how much you use it. Not nothing, but not expensive either. You can set usage limits in the console if you want a hard cap.

When you first run Claude Code, it'll ask for your API key. Paste it in. Done.

## Running Claude Code For the First Time

Claude Code runs inside your project folder. Here's the sequence:

\`\`\`bash
cd /path/to/your/project
claude
\`\`\`

The \`cd\` command means "change directory." You're telling Terminal to move into your project folder. Replace \`/path/to/your/project\` with the actual path to where your project lives.

If you don't know the path, you can drag the folder from Finder into the Terminal window — it'll type the path for you.

Once you type \`claude\` and press Enter, Claude Code will:
1. Read every file in your project
2. Build a map of how everything connects
3. Greet you and wait for instructions

Type something. Literally anything. "Hello, what files are in this project?" It'll respond. You're in.

## How to Give Good Instructions

Claude Code understands plain English. You don't need to know any programming syntax.

But specificity matters enormously.

**Bad:** "Make the landing page better."

**Good:** "The headline on the landing page currently says [X]. Change it to [Y]. Keep everything else the same."

**Bad:** "Fix the email issue."

**Good:** "Users are reporting they're not receiving the welcome email after signup. Look at the email service file and the signup route. Find out why the email isn't sending and fix it."

The more context you give, the better the output. Tell Claude:
- What you're trying to accomplish
- What currently exists (or what's broken)
- What the desired outcome looks like
- Any constraints ("don't change the layout, only change the copy")

## Essential Commands

A few things you'll use often:

**\`/clear\`** — Resets Claude's context. Use this when you're switching to a completely different task and don't want the previous conversation clouding its judgment.

**\`/help\`** — Shows available commands.

Pressing **Ctrl+C** — Stops whatever Claude is currently doing. Use this if it starts going in the wrong direction and you want to interrupt.

## CLAUDE.md — Your Standing Instructions

Inside your project folder, you can create a file called \`CLAUDE.md\`. Claude Code reads this file every time it starts up.

This is where you put standing instructions: your voice, your preferences, your audience, things it should never do. Instead of explaining yourself every session, you set it once in this file.

We'll set up your CLAUDE.md in Lesson 9. For now, just know it exists and what it's for.

## The Mental Model

You're not becoming a developer.

You're becoming someone who can tell a developer exactly what to build. The developer just happens to be AI — and it's available 24/7, doesn't charge by the hour, and won't get offended when you say "that's not what I meant."

The skill you're developing is clarity. The ability to describe what you want specifically enough that Claude can execute it. That skill transfers beyond this project. It transfers to managing people. Writing briefs. Giving feedback. Communication in general.

Every time you feel frustrated because Claude got something wrong, ask yourself: did I actually explain what I wanted clearly? Usually the answer is no. That's the lesson.

## What to Do Now

1. Open Terminal (Mac) or Command Prompt (Windows)
2. Install Node.js from nodejs.org if you haven't already
3. Run \`npm install -g @anthropic-ai/claude-code\`
4. Get your API key from console.anthropic.com
5. Navigate to any folder on your computer and type \`claude\`
6. Say hello. Ask it what it can do.

You don't have your project set up yet — that's Lesson 8. But run Claude Code at least once before you get there. Get comfortable with the interface. It'll feel less weird the second time.`
},

// ============================================================
// LESSON 8
// ============================================================
8: {
  title: "The Boilerplate — Your Starting Point",
  subtitle: "Clone it, run it, see it work",
  readTime: "6 min read",
  content: `## What the Boilerplate Is

The boilerplate is a copy of this platform — the one you're reading right now — stripped down to placeholder content.

The landing page is there. The signup flow is there. The member portal is there. The lesson renderer, the email automation system, the admin dashboard — all of it is there, with placeholder text instead of real content.

You clone it, run it locally, swap in your content, and deploy it. You're not building from scratch. You're customizing something that already works.

This is the meta thing worth appreciating: you're inside the product you're about to build. The fact that you can sign up, log in, and complete lessons here means the exact same thing will work for your audience when you launch your version.

![The platform you're inside right now](/lessons/screenshots/landing-full.png)

## Step 1: Clone the Repo

"Cloning a repo" sounds technical. It just means downloading a copy of the code.

Git is how developers download and share code. You may already have it installed (Macs often come with it). Check by running:

\`\`\`bash
git --version
\`\`\`

If you see a version number, you're good. If not, go to git-scm.com and install it.

Then run:

\`\`\`bash
git clone https://github.com/[repo-url] my-client-engine
cd my-client-engine
\`\`\`

Replace \`[repo-url]\` with the actual repo URL (you'll find it in the course resources). The second command moves you into the project folder.

## Step 2: Install Dependencies

\`\`\`bash
npm install
\`\`\`

This downloads all the software packages the project depends on. The first time takes a few minutes. You'll see a lot of text. Normal.

Think of it like this: the project is a recipe, and \`npm install\` goes to the store and gets all the ingredients. You only do this once (or when the ingredients list changes).

## Step 3: Set Up Your Database

The platform needs a database to store users, lessons, email templates, and automations.

We use Neon — it's a free PostgreSQL database in the cloud. Takes about two minutes to set up.

1. Go to neon.tech
2. Create a free account
3. Create a new project (call it "my-client-engine" or whatever)
4. On the project dashboard, you'll see a connection string that looks like: \`postgresql://user:password@host/database\`
5. Copy it

Now open the \`.env\` file in your project folder. If it doesn't exist, duplicate the \`.env.example\` file and rename the copy to \`.env\`.

Add your database connection string:

\`\`\`bash
DATABASE_URL="postgresql://user:password@host/database"
SESSION_SECRET="any-random-string-at-least-32-chars"
RESEND_API_KEY=""
ADMIN_EMAIL="your@email.com"
\`\`\`

Leave \`RESEND_API_KEY\` blank for now — you'll fill that in during Lesson 12.

\`SESSION_SECRET\` can be any random string — just make it at least 32 characters. Mash your keyboard if you want. It's used to sign session cookies.

## Step 4: Set Up the Database Schema

\`\`\`bash
npx prisma migrate dev
\`\`\`

This creates all the tables in your database — users, lessons, modules, email templates, automations, everything. The first time you run it, it'll ask for a migration name. Type something like "initial" and press Enter.

## Step 5: Seed Sample Content

\`\`\`bash
npx prisma db seed
\`\`\`

This populates your database with placeholder modules, lessons, and default email templates and automations. It's the content you'll replace with your own, but it gives you something to look at while you're setting up.

## Step 6: Start It

\`\`\`bash
npm run dev
\`\`\`

Open your browser and go to http://localhost:3000.

You should see the landing page.

![Landing page running locally](/lessons/screenshots/landing-hero.png)

## What You're Looking At

Take a few minutes to click around.

**The landing page** — Placeholder headline, placeholder copy. This is the page your audience will land on when they find your platform. You'll customize everything here in Lesson 9.

**The signup page** — Create an account on your own platform. Use a real email address (it'll send a welcome email if you've configured Resend, but don't worry about that yet).

![Signup page](/lessons/screenshots/signup-page.png)

**The member portal** — After signup, you land here. This is where your users will live. Lesson list, progress tracking, the whole thing.

![Member portal dashboard](/lessons/screenshots/portal-dashboard.png)

**The lessons** — Click into a lesson and see how the content renders. Headers, bold text, code blocks, images — the content system handles all of it.

![Module page view](/lessons/screenshots/module-page.png)

**The admin dashboard** — Navigate to /admin (you'll need to set up your admin account first — instructions in Lesson 25). This is where you manage email templates, automations, and users.

## If Something Doesn't Work

First move: open Claude Code in the project folder and describe exactly what's happening.

\`\`\`bash
claude
\`\`\`

Then type something like: "When I run npm run dev, I get this error: [paste the error]. Help me fix it."

Claude will look at your project, understand the error, and tell you what to do. This is exactly how developers debug — you'll be doing the same thing.

Most setup issues come from one of three things:
- Database connection string is wrong (typo, missing character)
- Node version is too old (need v18 or higher)
- Missing environment variable

Claude will find it.

## What to Do Now

Get the boilerplate running locally on your machine. That's the whole goal of this lesson.

Don't move on until localhost:3000 loads and you can sign up and see the portal. Everything from here forward assumes you have a working local environment.`
},

// ============================================================
// LESSON 9
// ============================================================
9: {
  title: "Customizing Your Platform",
  subtitle: "Make it yours",
  readTime: "6 min read",
  content: `## Open Claude Code

Make sure you're in your project folder. Then:

\`\`\`bash
claude
\`\`\`

Claude reads the whole project. It knows the file structure, the component names, the database schema, the routes. Now you just tell it what to change.

This is where it gets good.

## The Landing Page

Your landing page is the first thing your audience sees. The placeholder content needs to be replaced with your actual offer.

Go back to your offer statement from Lesson 4:

"I help [X] get [Y] without [Z]"

And your platform's value proposition — what someone gets by signing up.

Now give Claude this prompt (adjust for your business):

\`\`\`prompt
I need to rewrite the landing page for my training platform.

My business: [describe what you do]
My target audience: [who they are]
My offer statement: I help [X] get [Y] without [Z]
My platform is called: [name]
What they get from signing up: [what the platform teaches]

Rewrite the landing page with:
- A headline that speaks directly to my audience's main pain or goal
- A subheadline that explains what they get
- A bullet list of 4-5 specific things they'll learn or be able to do
- A CTA button that says [something better than "Sign Up Free"]

Keep it punchy. Short sentences. No corporate speak. Talk directly to them.
\`\`\`

Claude will find the landing page component and rewrite the content. Review it. If the headline isn't right, say "the headline is too vague — make it more specific about [X]." Iterate until it sounds like you.

## Brand Name and Logo

The logo component is where your platform name lives.

Tell Claude:

\`\`\`prompt
Change the platform name throughout the app to "[Your Platform Name]". This should update the logo text, the page title in the browser tab, and any other place the current placeholder name appears.
\`\`\`

Simple. Done.

## Colors

The platform uses a CSS variable system for colors. You don't need to understand CSS to change them — you just need to tell Claude what you want.

\`\`\`prompt
I want to change the color scheme of the platform. Currently it uses [current colors — ask Claude what they are first]. I want:
- Primary color (buttons, accents, highlights): [describe or give hex code]
- Background: [describe — dark, light, neutral]
- Text: [dark on light, or light on dark]

Update the color variables in globals.css to match.
\`\`\`

If you don't have specific hex codes, describe the feel: "I want it to feel professional and clean — dark navy with white text and a bright blue accent." Claude can work with that.

## Setting Up Your CLAUDE.md

This is one of the most important things you'll do in this entire setup.

CLAUDE.md is a file in the root of your project that Claude Code reads every single time it starts. It's your standing instructions — the context that makes every conversation smarter without you having to re-explain yourself.

[Download the CLAUDE.md template](/lessons/downloads/claude-md-template.md){.download}

Here's what goes in it:

\`\`\`prompt
# About This Project

[Platform Name] is a free training platform for [audience] that teaches [what it teaches].

## My Business

I run [business name]. I help [specific audience] get [specific result] without [obstacle].

## My Audience

[2-3 sentences about who they are, what they care about, what they're trying to accomplish, what frustrates them]

## Voice and Tone

Write like I'm talking to a peer. Direct. Practical. Short sentences. No corporate speak.

Words I never use: "leverage," "unlock," "empower," "synergy," "holistic," "cutting-edge"

Formatting: use ## headers to break up sections. Bold key terms. Keep paragraphs short (3-4 sentences max).

## Technical Notes

- Database: PostgreSQL via Neon
- Email: Resend
- Framework: Next.js
- ORM: Prisma

## What Not to Change

- Never modify the database schema without asking first
- Never change the authentication system
- Keep the admin dashboard routes protected
\`\`\`

Fill this in with your real information. Be specific about your audience and voice. The more precise the instructions, the better every Claude Code session will be.

Tell Claude to create this file:

\`\`\`prompt
Create a CLAUDE.md file in the project root with the following content: [paste your filled-in template]
\`\`\`

## Review Everything

Once you've made these changes, restart your dev server (\`npm run dev\`) and look at your platform.

Does the headline feel right? Does the name appear correctly everywhere? Does the color scheme feel like your brand?

Take notes on anything that feels off. Fix it by talking to Claude Code. This is the loop: look, notice something wrong, tell Claude, review the result.

You'll do this dozens of times as you build. Get comfortable with the process.

## What to Do Now

By the end of this lesson:

1. Landing page has your real headline, subheadline, and feature list
2. Your platform name appears in the logo and browser tab
3. Color scheme matches your brand (or at least doesn't look like the default)
4. CLAUDE.md is created with your business context, audience description, and voice guidelines

Don't move on to content until the shell looks and feels like yours. When you show someone your platform, they shouldn't see a template. They should see your thing.`
},

// ============================================================
// LESSON 10
// ============================================================
10: {
  title: "Creating Your Course Content",
  subtitle: "Write it with Claude, edit it yourself",
  readTime: "7 min read",
  content: `## The Content Creation Process

Here's the trap most people fall into: they try to write all their course content before building anything. They stall. They overthink. They never ship.

Here's the better approach: write the first module, get it into the platform, see how it looks, and use that momentum to write the rest.

You already have your outline from Lesson 5. Now you're turning that outline into actual lessons.

## How the Content Renderer Works

Lessons in this platform are stored as plain text with light formatting. The renderer turns that formatting into a proper visual layout.

Here's what the syntax looks like:

\`\`\`
## Section Header

Normal paragraph text. Keep paragraphs short — 3-4 sentences max.

**Bold text** for emphasis.

Another paragraph. Line breaks between them matter.

\`\`\`code block\`\`\`
code or prompt blocks go here
\`\`\`

> Callout block for important notes or quotes

![Caption text](/lessons/screenshots/filename.png)

[Download something](/lessons/downloads/filename.md){.download}
\`\`\`

That's the whole system. You don't need HTML. You don't need to know CSS. Claude writes in this format automatically if you tell it to.

![Lesson content rendered in the platform](/lessons/screenshots/lesson-content.png)

## Setting Up Your CLAUDE.md Voice Guide

Before you prompt Claude to write anything, make sure your CLAUDE.md file is complete. Specifically the voice section.

The better you describe your voice in CLAUDE.md, the less editing you'll have to do on Claude's output.

Some examples of voice descriptions that actually work:

"Write like I'm talking to a smart peer who doesn't have time for bullshit. Short sentences. No hedging. Every sentence should earn its place."

"My audience is skeptical of gimmicks. They've been burned by overpromising. Don't hype. Just explain clearly and trust the substance to do the work."

"Think of the tone as: a really experienced consultant who's also your friend. Smart but approachable. Confident but not arrogant."

Add whatever description fits your voice. Then when you ask Claude to write lessons, it'll match the tone automatically.

## The Lesson-Writing Prompt

Here's the prompt to use for each lesson. Run this in Claude Code with your project open:

\`\`\`prompt
Write Lesson [X] of my training platform.

Module: [Module name]
Lesson title: [Lesson title]
What this lesson should accomplish: [one sentence — what should the reader understand or be able to do after this?]
Key points to cover:
- [point 1]
- [point 2]
- [point 3]

Format requirements:
- Use ## for section headers
- Short paragraphs (3-4 sentences max)
- Bold key terms
- End with a "## What to Do Now" section with 2-3 specific action items
- Aim for 600-900 words

Voice: [paste your voice description or reference your CLAUDE.md]

Do not include any placeholder text. Write the full lesson.
\`\`\`

Run this for each lesson. Review the output. Edit anything that doesn't sound right.

## The Editing Rule

Claude drafts. You edit.

Your job in the editing pass is not to fix Claude's grammar — it's to make the content sound like you. Look for:

- Sentences that are too long or too formal
- Any words from your "never use" list
- Places where you'd naturally say something differently
- Missing examples from your actual experience
- Anything that's technically correct but doesn't feel real

The most important edits are the ones where you add something specific — a real example from a client, a number, a story. Claude can't make those up (well, it can, but you shouldn't let it). Those specifics are what make content land.

## Updating the Content in Your Platform

Once you have lesson content written, you need to get it into the database.

The easiest approach: open Claude Code, tell it you want to update the content for a specific lesson, and give it the content.

\`\`\`prompt
Update the content for Lesson 1 in the database. The lesson is in Module 1. Here's the new content:

[paste your lesson content]

Use the lesson's current ID or find it by its order number (order: 1). Update the content field.
\`\`\`

Claude will write the database update query and run it. You'll see the change immediately if your dev server is running.

Alternatively, once you've built out all your content, you can update the seed file and re-seed the database. Ask Claude Code how to do this — it'll walk you through it.

## Start With Module 1

Don't try to write all 28 lessons before moving on. Write Module 1 — your first 3-5 lessons — and get them live in your local platform.

Click through them. Read them out loud. Do they flow? Does each lesson set up the next one naturally? Does the voice sound like you?

Adjust. Then write Module 2.

The goal of this lesson is to have at least Module 1 written and working. Everything else gets built in the same way, lesson by lesson.

## A Note on Length

Your lessons don't need to be long. They need to be complete.

A lesson that covers one idea thoroughly, with clear examples and a specific action item at the end, is worth more than a lesson that covers five ideas shallowly.

600-900 words per lesson is a good range. Some will be shorter. Some will be longer if the topic demands it. Don't pad. Don't rush. Just cover the thing properly and move on.

## What to Do Now

1. Make sure your CLAUDE.md has a clear voice description
2. Write the first lesson of Module 1 using the prompt above
3. Edit it until it sounds like you
4. Load it into your platform (have Claude Code run the database update)
5. View it in your browser — click through the lesson and see how it renders

![Lesson complete button](/lessons/screenshots/lesson-complete-btn.png)

Then write the remaining lessons in Module 1. Get the whole first module live before moving on to Module 2 or the next section of this course.`
},

// ============================================================
// LESSON 11
// ============================================================
11: {
  title: "How Email Nurture Works",
  subtitle: "The system behind the emails you've been getting",
  readTime: "5 min read",
  content: `## The Emails You've Been Receiving

Let's talk about what's been happening since you signed up.

When you created your account, a welcome email went out automatically. If you've been completing lessons, you've received follow-up emails based on that. If you went a few days without logging in, a re-engagement email found its way to you.

None of that was someone sitting at a computer watching your account and manually hitting send.

It's automated. And it's behavior-based — which means it's not the same for every person. Someone who signs up and completes five lessons in two days gets a different email than someone who signed up and disappeared after the first one.

That's the system you're building.

## The Difference Between Drip and Nurture

Most email sequences are drip campaigns. You sign up, email 1 goes out on day 0, email 2 on day 3, email 3 on day 7 — regardless of what you did or didn't do in between.

Drip is better than nothing. But it's dumb. It doesn't know anything about you.

Behavior-based nurture is different. The system watches what you do and responds to that.

- Complete a lesson → get an email that reinforces what you just learned
- Finish a module → get an email that celebrates progress and previews what's next
- Go quiet for three days → get an email that acknowledges the gap and gives you a reason to come back
- Hit the completion threshold → get an email inviting you to book a call

Each email is relevant to where you actually are in the journey. That relevance is why behavior-based systems outperform drip campaigns by orders of magnitude.

## The Three Lead States

For your purposes, there are three states a lead can be in:

**Cold** — Signed up but not engaging. Maybe they logged in once, maybe they didn't even do that. These people need a low-friction reason to come back. Not a pitch. A hook.

**Warming** — Completing lessons. Opening emails. Showing up. These people are interested. Your job here is to reinforce that interest, keep momentum, and keep teaching.

**Ready** — Hit your qualification threshold. High engagement. These people are the ones your system should be routing toward a booking conversation.

The nurture system's job is to move people from Cold → Warming → Ready. Automatically.

## Why the Feedback Loop Is the Part Everyone Skips

There's a fourth thing your email system should do that almost nobody builds: ask for feedback.

Not just a "rate us" survey. Real feedback. What was most useful? What questions do you still have? What almost stopped you from signing up?

This feedback does three things:

**It gives you testimonials.** When someone says "I had no idea I could do this myself — this platform made it click for me," that's a testimonial. It goes on your landing page. It goes in your outreach.

**It improves your content.** When five people say the same lesson confused them, that lesson needs to be rewritten.

**It gives you sales intelligence.** When people tell you what almost stopped them from signing up, you know exactly what objections to address in your ads, outreach, and landing page copy.

Build a feedback email into your sequence. Send it after someone completes the platform, or after a set number of days. It pays for itself.

## How the System Works Technically

Inside your admin dashboard, there are two things:

**Email Templates** — The actual email content. Subject line, body, from name. These are stored in the database and you can edit them in the admin.

**Automations** — The rules that determine when a template gets sent. A trigger (something happens), optional conditions (only if X is true), and a delay (wait Y hours before sending).

We'll walk through setting both of these up in Lessons 12-14. But the architecture to understand is: templates are the what, automations are the when and why.

## Map Your Nurture Journey

Before you set anything up, map it on paper (or in Claude Desktop).

Answer these questions:

1. What's the first email someone gets after signing up? What does it say? What's the one thing you want them to do?
2. What happens when someone completes their first lesson? Do they get an email? What does it say?
3. What happens when someone goes 3 days without logging in? What's your re-engagement hook?
4. What happens when someone completes your platform? Do they get a booking invitation? A congratulations? A feedback request?
5. At what point do you invite someone to book a call? What's the trigger?

Write these out. Even rough notes are fine. In Lesson 13 you'll use Claude to write the actual email copy.

## What to Do Now

Map your nurture journey. Use Claude Desktop to think through it:

\`\`\`prompt
I'm building a behavior-based email nurture system for my training platform. My audience is [X] and I'm teaching them [Y]. My goal is to get qualified leads to book a call with me.

Help me design the email journey. For each of the following moments, give me: the email's job, a subject line angle, and the core message:

1. Right after signup (welcome)
2. After completing the first lesson
3. After completing the first module
4. After 3 days of inactivity
5. After completing [X] lessons (my qualification threshold)
6. After completing the full platform
\`\`\`

Save what Claude gives you. You'll use it in Lesson 13 to write the actual emails.`
},

// ============================================================
// LESSON 12
// ============================================================
12: {
  title: "Setting Up Resend",
  subtitle: "Your email delivery system",
  readTime: "4 min read",
  content: `## What Resend Is

Resend is an email API. It's the service that actually delivers the emails your platform sends.

When someone signs up and gets a welcome email, Resend is what puts it in their inbox. When your automation fires a re-engagement email at 9am, Resend is what makes sure it doesn't land in spam.

It's not a newsletter tool. It's not like Mailchimp. It's infrastructure — the pipe that emails flow through.

Why Resend specifically? It's the cleanest email API available right now, it has excellent deliverability, it's generous on the free plan, and it's what this platform is already wired to use.

## Step 1: Create Your Account

Go to resend.com. Sign up for a free account.

The free plan allows 3,000 emails per month and 100 per day. That's more than enough to get started.

## Step 2: Get Your API Key

Once you're in the dashboard:

1. Click "API Keys" in the left sidebar
2. Click "Add API Key"
3. Name it "Client Engine" or whatever you want
4. Leave the permissions at "Full Access"
5. Click "Add"
6. Copy the key immediately — it starts with \`re_\`

Open your project's \`.env\` file and add it:

\`\`\`bash
RESEND_API_KEY="re_your_key_here"
\`\`\`

## Step 3: Verify Your Sending Domain

This is the step everyone skips and then wonders why their emails land in spam.

You need to verify the domain you're sending emails from. If your platform lives at yourplatform.com, your emails should come from something@yourplatform.com — not a generic Resend address.

In the Resend dashboard:

1. Click "Domains" in the left sidebar
2. Click "Add Domain"
3. Enter your domain (e.g., yourplatform.com)
4. Resend will give you DNS records to add

**Adding DNS records:** Log into wherever you manage your domain (GoDaddy, Namecheap, Cloudflare, wherever). Find the DNS settings. Add the records Resend gives you. There will be a few of them — TXT records and DKIM records.

This sounds technical. It's not — it's just copy-paste. Resend gives you the exact values. You paste them into your domain registrar. Takes about five minutes.

Once you've added the records, click "Verify" in Resend. DNS propagation can take up to 24 hours, but usually it's much faster.

**If you don't have a domain yet:** You can use Resend's onboarding domain temporarily while you're testing locally. But before you launch, you need a real domain with verified DNS. Don't skip this step.

## Step 4: Add Your Sending Email in Admin

Once your domain is verified, log into your platform's admin dashboard.

Go to Settings. Find the email configuration section. Update the "from" email address to match your verified domain (e.g., hello@yourplatform.com or your@yourdomain.com).

This is the address your users will see in their inbox.

## Step 5: Test It

The best test is a real one. Sign up on your own platform with a different email address (use Gmail, not your main one).

Within a few minutes, you should receive the welcome email.

If it arrives: you're connected and working. Check that the from address looks right and the email doesn't land in spam.

If it doesn't arrive: open Claude Code and describe what's happening.

\`\`\`prompt
I just signed up on my platform at localhost:3000 with the email [email]. I should have received a welcome email via Resend, but I didn't. My RESEND_API_KEY is set in the .env file. Look at the email service code and the signup route — figure out why the email isn't sending.
\`\`\`

Claude will find it. Common issues: wrong API key format, wrong from address format, or the email service not being called at the right point in the signup flow.

## What to Do Now

1. Sign up at resend.com
2. Get your API key and add it to your .env file
3. Add and verify your sending domain (or use the test domain temporarily)
4. Update your from email address in admin Settings
5. Test by signing up on your own platform
6. Confirm the welcome email arrives

Once you've confirmed email delivery is working, you're ready to write the actual email content in Lesson 13.`
},

// ============================================================
// LESSON 13
// ============================================================
13: {
  title: "Writing Your Email Sequence",
  subtitle: "Six emails that do the work for you",
  readTime: "7 min read",
  content: `## Why Six Emails

There's a common belief that longer email sequences are better. More touchpoints, more chances to convert.

Wrong.

Longer sequences dilute. Every email you add increases the chance that a previous one felt irrelevant or annoying, causing someone to stop opening them. Six tight, well-written emails that are each genuinely worth reading outperform twenty generic ones.

Six emails. Each one has a specific job. Do the jobs well and move on.

## The Six Email Roles

**1. Welcome** — Job: confirm the decision was right, tell them what to do first, set expectations.

This email goes out within minutes of signup. It should feel like a warm handshake. Confirm what they signed up for, give them one clear action (go start Module 1), and give them a brief picture of what they'll be able to do when they're done.

Don't oversell here. They already signed up. Just make them feel good about it and point them in the right direction.

**2. Teach** — Job: deliver a standalone insight that reinforces the platform's value.

This isn't a lesson recap. This is a new idea — something they might not have encountered in the platform yet. Something that makes them think "damn, this is good" and increases their confidence in you as a teacher.

Send this 2-3 days after signup.

**3. Reframe** — Job: challenge a belief that's holding them back.

Your audience has a belief (or several) that makes them skeptical. Something that makes them doubt whether this is really worth their time, whether it'll work for their specific situation, whether they're the right person for this.

Identify that belief and address it directly. "You might be thinking X. Here's why that's not actually true."

This is one of the most powerful emails in the sequence. It does the belief-shifting work that turns lukewarm leads into engaged ones.

**4. Prove** — Job: show evidence it works.

Testimonials. Case studies. Results. Real numbers if you have them.

The difference between good testimonials and bad ones: specificity. "This was great!" is useless. "I went from zero to 12 inbound leads in 30 days using this system" is powerful.

If you're just launching and don't have testimonials yet: use your own results, a client story, or a before/after comparison. Something real and specific.

**5. Address Skepticism** — Job: handle the objection that's stopping the fence-sitters.

What's the thing people believe that prevents them from moving forward? Not the surface-level objection — the real one underneath.

"I don't have time" is usually fear. "I'm not technical" is usually belief that they need to be technical (they don't). "I've tried things like this before" is usually that previous things overpromised and underdelivered.

Write an email that speaks directly to this. Acknowledge it. Reframe it. Give them a reason to push through it.

**6. Invite** — Job: for engaged users, invite them to a conversation.

This is the softest possible CTA. Not "buy now" — not even close. More like: "You've been doing the work. If you've found this useful and want to talk about how to apply it to your specific situation, I keep a few spots open for conversations with people like you. Here's the link."

The invite email only goes to people who've hit your engagement threshold. That's why it doesn't feel pushy — it's being sent to people who've demonstrated they're serious.

[Download the email sequence template](/lessons/downloads/email-sequence-template.md){.download}

## Writing Them With Claude

Here's the prompt to use for each email. Run it in Claude Desktop (inside your Client Engine project):

\`\`\`prompt
Write email #[X] in my training platform nurture sequence.

Email role: [Welcome / Teach / Reframe / Prove / Address Skepticism / Invite]
My audience: [who they are]
My platform teaches: [what it teaches]
My offer/business: [brief description]

Job this email must do: [one sentence]
Core idea or message: [the main thing you want to convey]

Voice: [reference your CLAUDE.md voice description]

Format:
- Subject line (with 2 alternatives)
- Email body (plain text, no HTML, conversational)
- Signature: [Your Name]
- End with one clear CTA (where relevant)

Length: 150-250 words. Punchy. Every sentence earns its place.
\`\`\`

Do this for all six. Review each one. Edit for voice. Make sure each one sounds like you wrote it, not like an AI wrote it.

## Loading Them Into the Admin

Once you have your six emails written, go to your admin dashboard and click on "Templates."

You'll see the default email templates that came with the platform (welcome, lesson_complete, stall_check, etc.). Click into each one and replace the content with your versions.

The template editor uses plain text with some available variables:

- \`{{firstName}}\` — the user's first name
- \`{{lessonsCompleted}}\` — number of lessons they've completed
- \`{{nextLessonTitle}}\` — title of their next lesson
- \`{{platformName}}\` — your platform's name
- \`{{bookingUrl}}\` — your booking page URL (set this up in admin Settings)

Use these where they make your email feel more personal. \`{{firstName}}\` in the greeting is a minimum.

## Subject Lines Matter More Than You Think

The body of the email means nothing if they never open it.

A few subject line principles:

**Curiosity gap:** "What most [audience] get wrong about [topic]"

**Direct value:** "The [topic] framework that changed how I [thing]"

**Personal:** "Quick question, {{firstName}}"

**Specificity:** "3 reasons your [current approach] isn't working"

Avoid: anything that sounds like marketing. Exclamation points. ALL CAPS. "Don't miss this." "Open immediately." These trigger spam filters and they make people feel like they're being sold to.

## What to Do Now

1. Download the email sequence template for reference
2. Use the prompt above to write all six emails in Claude Desktop
3. Edit each one until it sounds like you
4. Load them into the admin Templates section
5. Test by checking the welcome email fires correctly when you sign up

Once all six are loaded, you're ready for Lesson 14 — where we set up the automations that determine when each one fires.`
},

// ============================================================
// LESSON 14
// ============================================================
14: {
  title: "Automations and Triggers",
  subtitle: "Making emails send themselves",
  readTime: "5 min read",
  content: `## What an Automation Is

An automation is a rule. Something happens (trigger), some condition is optionally checked (condition), then an email goes out (action), usually after a delay.

Simple example:

- Trigger: user signs up
- Condition: none (all new users)
- Delay: 0 minutes
- Action: send "welcome" template

That's the welcome email automation. The system watches for new signups, and every time one happens, it sends the welcome email.

More complex example:

- Trigger: lesson completed
- Condition: lessonsCompleted equals 5
- Delay: 60 minutes
- Action: send "invite" template

That's a booking invitation. When someone completes their 5th lesson, wait an hour, then send the booking invitation email.

## Navigating the Admin Automations Page

Log into your admin dashboard. Click "Automations."

You'll see a list of automations — some default ones came with the platform from the seed. Let's walk through what each field means:

**Name** — Just a label for you. What does this automation do?

**Trigger** — What event starts this automation? Options include:
- \`signup\` — a new user just created an account
- \`lesson_complete\` — a user just completed a lesson
- \`stall_check\` — a daily job runs this trigger for inactive users

**Conditions** — Optional filters. If you want this to only fire for users who've completed at least 3 lessons, add a condition: \`lessonsCompleted >= 3\`. If you want it to fire when inactivity hits a threshold: \`daysSinceLastActivity >= 2\`.

**Template** — Which email template to send.

**Delay (hours)** — How long to wait after the trigger before sending. Set to 0 for immediate. Set to 24 for one day.

**Priority** — When multiple automations match the same event, higher priority fires first. Specific automations should have higher priority than generic ones.

**Active** — Toggle automations on and off without deleting them.

## The Default Automations

The platform ships with these default automations:

1. **Welcome** — Trigger: signup. No conditions. Delay: 0. Sends the welcome email immediately.

2. **First lesson celebration** — Trigger: lesson_complete. Condition: lessonsCompleted = 1. Delay: 2 hours. Sends an encouraging email after their first lesson.

3. **Teaching email** — Trigger: lesson_complete. Condition: lessonsCompleted = 3. Delay: 24 hours. Sends your "teach" email.

4. **Reframe** — Trigger: lesson_complete. Condition: lessonsCompleted = 5. Delay: 24 hours.

5. **Booking invite** — Trigger: lesson_complete. Condition: lessonsCompleted = 8. Delay: 2 hours. Sends the invite email.

6. **Stall re-engagement** — Trigger: stall_check. Condition: daysSinceLastActivity >= 3. Delay: 0. Fires daily for inactive users.

These are starting points. Adjust them based on your platform's length and your qualification threshold.

## Customizing for Your Platform

A few things to adjust:

**Lesson count thresholds** — The defaults use 3, 5, and 8. If your platform has 15 lessons total, those numbers make sense. If you have 28 lessons, you might push the invite email to lesson 12 or 15.

**Delay timing** — The general principle: don't send the next email too fast. If someone just completed a lesson five minutes ago, a new email an hour later can feel like surveillance. 24 hours is a natural rhythm for most touchpoints. The welcome email is the exception — send it immediately.

**Inactivity threshold** — The stall check defaults to 3 days of inactivity. For a complex platform, 3 days is fine. For shorter content, you might tighten it to 2 days.

## The Stall Check Cron Job

There's a scheduled job in the platform that runs daily. It finds all users who haven't logged in within your inactivity threshold and triggers the \`stall_check\` event for each one.

This is how the re-engagement email works. The cron job fires daily, finds the inactive accounts, and the stall_check automation runs for each one.

The cron is already wired up. You just need to make sure the stall_check automation is active and pointing to the right template.

On Vercel (where you'll deploy in Lesson 25), cron jobs are configured in the \`vercel.json\` file. It's already there. You don't need to touch it.

## Testing Automations

The best way to test is to trigger them manually.

Sign up on your platform with a test email. Complete a lesson. Wait for emails to arrive. Check that the right email came at the right time.

If an email doesn't arrive, open your admin dashboard and check the automation log (if your version has one) or check the Resend dashboard — it shows every email sent and whether it was delivered.

If something's off, tell Claude Code:

\`\`\`prompt
My lesson_complete automation isn't firing for users who have completed exactly 5 lessons. The trigger is lesson_complete, the condition is lessonsCompleted = 5. Look at the automation handler code and find out why the condition isn't matching.
\`\`\`

## What to Do Now

1. Log into your admin dashboard and review the default automations
2. Adjust the lesson count thresholds to match your platform's length
3. Make sure each automation points to the right template
4. Test by signing up and completing lessons — verify emails arrive
5. Check the stall_check automation is active

Once automations are working, your nurture system is live. People who sign up will get the right email at the right time, automatically, without you doing anything.`
},

// ============================================================
// LESSON 15
// ============================================================
15: {
  title: "SMS — Why It Works and When to Add It",
  subtitle: "Why it's powerful, why it's a pain, and when to add it",
  readTime: "3 min read",
  content: `## The Case for SMS

Email open rates average around 20-30% on a good day.

SMS open rates are 98%.

That number isn't a typo. Almost everyone opens a text message. Most of them open it within three minutes of receiving it.

For time-sensitive messages — a booking reminder, a re-engagement nudge, a "your call is in one hour" — SMS is categorically better than email. There's no inbox competition. There's no spam folder. The message appears on the lock screen of their phone.

If you get SMS working, it will improve your show rates, your engagement rates, and your booking confirmation rates. Measurably.

## Why It's a Pain

Here's the catch.

To send SMS at any kind of scale in the US, you need A2P 10DLC registration. A2P stands for Application-to-Person — it means software is sending messages to people, not a human typing on a phone. 10DLC is the carrier-approved framework for doing this.

What this means practically: you have to register your business, register your messaging campaign (what you're sending and why), and wait for carrier approval. This can take days to weeks. There are fees. There's paperwork.

The alternative is toll-free number verification — slightly less paperwork but still a process.

This isn't optional. Send SMS without proper registration and carriers will block your messages. You'll think it's working, but nothing will be delivered.

## The Right Time to Add It

Version 1 of your Client Engine does not need SMS.

Resend handles email. Email is free, fast, and zero registration required. Get your platform running, get leads coming in, get bookings happening — all on email.

When you're getting consistent signups and you want to improve show rates and re-engagement, that's when you add SMS. By then you'll have Claude Code available to help you wire in Twilio (the leading SMS API). The integration is about a day's work.

For now, note this as a future upgrade. Don't let it block you from launching.

## What to Do Now

Nothing technical in this lesson. Just make a note:

**Phase 1:** Email via Resend (what you're building now)

**Phase 2:** SMS via Twilio (after you have consistent traffic and want to improve show rates)

Move on. Lesson 16 is where we start building your booking system.`
},

// ============================================================
// LESSON 16
// ============================================================
16: {
  title: "Designing the Booking Experience",
  subtitle: "When to ask for the call and how",
  readTime: "5 min read",
  content: `## Why Most Booking Pages Fail

They ask too early.

Someone lands on a "book a free strategy call" page and they have no idea who you are, no reason to trust you, no understanding of whether your approach applies to their situation. They look at your calendar and think "why would I give up 30-60 minutes of my day for this?"

They don't book.

The Client Engine solves this by the time someone sees your booking page, they've spent real time in your platform. They've completed lessons. They've gotten actual value. They've received emails that deepened the relationship. By the time the booking invite lands in their inbox, you're not a stranger.

That's the whole game.

## Qualification Criteria

Before you design your booking page, define your criteria.

What must someone have done before they see a booking invitation? Be specific:

- Completed at least X lessons
- Completed Module 1 and Module 2
- Completed the full platform
- Completed X lessons AND been active within the last 7 days

Your criteria determine your booking invite automation trigger. We covered this in Lesson 14. Now you need to make sure the booking page itself matches the energy of someone who's earned the invite.

Write the criteria down. This matters for the next step.

## The Booking Page Copy

Most booking page headlines are bad. "Schedule Your Free Strategy Call." That's a transaction. The person already knows it's free and they already know it's a call.

A better headline speaks to what they're coming to figure out — not the format of the meeting.

A few angles that work:

**The specific outcome:** "Let's map out your [specific result] plan"

**The next step:** "You've done the work. Let's talk about how to apply it."

**The specificity hook:** "15-minute call for [platform] graduates only"

The last one is powerful. It signals exclusivity. It implies they've earned something. And it's true — only people who've completed enough of your platform are getting this invite.

Your booking page should also briefly explain what happens in the call. Not a sales pitch. Just clarity. Something like:

"In this call we'll look at your specific situation, identify the biggest gap between where you are and where you want to be, and figure out if working together is the right fit."

Three sentences. That's enough.

## Pre-Call Questions

Add a pre-call questionnaire. 3-5 questions, answered before they book.

This does two things: it pre-qualifies (someone unwilling to answer basic questions is probably not serious), and it gives you intel so you walk into every call already knowing their situation.

Suggested questions:

1. What type of business do you run and how long have you been at it?
2. What's your biggest bottleneck for growth right now?
3. What have you already tried that hasn't worked?
4. What does success look like for you in the next 6 months?
5. Anything else I should know before our call?

Keep it short. These aren't meant to be a burden. They're meant to make the call better for both of you.

## What to Do Now

Before moving to Lesson 17:

1. Define your booking qualification criteria — what must someone have done?
2. Write your booking page headline and subheadline
3. Write a 2-3 sentence description of what happens in the call
4. Write your 4-5 pre-call questionnaire questions

Use Claude Desktop to help:

\`\`\`prompt
I'm writing the copy for my booking page. People only see this after completing [X] lessons of my training platform.

My audience: [who they are]
My offer: [what you help them do]
Call format: [30 minutes / 45 minutes / etc]

Write:
1. Three headline options for the booking page
2. A 2-3 sentence description of what happens in the call
3. Five pre-call questionnaire questions that help me prepare

Voice: direct, no corporate speak, talks to them like a peer
\`\`\`

Once you have the copy, you're ready to build the booking system in Lesson 17.`
},

// ============================================================
// LESSON 17
// ============================================================
17: {
  title: "Building Your Booking System",
  subtitle: "Calendar setup that integrates with your engine",
  readTime: "5 min read",
  content: `## Your Options

You have a few paths here.

**Calendly** — Most people know it. Clean, simple, works. The free plan is limited but functional. Paid plan adds nice features like pre-call reminders and conditional routing. Easy to set up.

**Cal.com** — Open-source alternative to Calendly. You can self-host it or use their hosted version. More control, slightly more setup. Good if you want to eventually integrate more deeply.

**GoHighLevel** — If you're already using GHL for CRM and email, keep your booking there. No reason to add another tool.

**Custom with Claude Code** — Possible but overkill for v1. You'd need to handle calendar APIs, availability management, and timezone math. Not where your time is best spent right now.

**Recommendation for most people:** Start with Calendly's free plan or Cal.com's free hosted version. Get something working today. You can migrate later if you need to.

## Setting Up Calendly

1. Sign up at calendly.com
2. Connect your Google Calendar (or Outlook). This is how it knows when you're available.
3. Create an event type:
   - Name it something like "Strategy Call" or "[Platform Name] Graduate Call"
   - Set duration (30 or 45 minutes usually works)
   - Set availability — your real available hours, with buffers
4. Add your pre-call questions from Lesson 16
5. Copy your booking URL (it'll look like calendly.com/yourname/call-name)

Add that URL to your platform. In your admin Settings, there should be a \`bookingUrl\` field. Paste it there. This is what gets used in the \`{{bookingUrl}}\` template variable in your invite email.

## Availability and Buffer Time

A few settings worth getting right:

**Buffer time** — Add 10-15 minutes after each call. You don't want back-to-back calls with no time to take notes or breathe.

**Minimum notice** — How much advance notice do you need? Set at least 4-24 hours so you're not getting surprise bookings five minutes from now.

**Max bookings per day** — Cap how many calls you take in a day. Protect your time.

**Timezone handling** — Calendly handles this automatically. It shows your calendar in the visitor's local timezone. Don't try to handle timezones yourself.

## Timezone Matters More Than You Think

If you're in New York and someone books in London, Calendly converts automatically. Your calendar shows EST. Their confirmation shows GMT. Nobody gets confused.

The one thing to watch: your "available hours" settings need to be in your timezone. If you set availability as 9am-5pm, make sure the platform knows that's your 9am-5pm.

## Connecting Booking to Your Nurture System

When someone books a call, you want a confirmation email to go out automatically. Most booking tools send their own confirmations, which is fine — but you can also trigger an email from your platform.

The simplest approach: let Calendly handle the confirmation and reminders. You don't need to duplicate that from your platform. Focus on building the booking *invitation* from your platform (via the invite automation), and let the booking tool handle everything after the booking is made.

Later, if you want to trigger things in your platform when someone books (update their record, log the event, send your own pre-call brief), you can use Calendly's webhook feature. Tell Claude Code what you want and it'll wire it up.

## What to Do Now

1. Pick your booking tool (Calendly or Cal.com)
2. Connect your calendar
3. Create a single event type for your strategy call
4. Add your pre-call questions
5. Set availability with buffer time
6. Copy your booking URL and add it to your platform's admin Settings
7. Make sure the \`{{bookingUrl}}\` variable appears in your invite email template

Test it: click your own booking link. Pick a time. Make sure the confirmation arrives.

If anything's broken, tell Claude Code what's happening and it'll help you debug.`
},

// ============================================================
// LESSON 18
// ============================================================
18: {
  title: "Trigger-Based Booking Invitations",
  subtitle: "Let the system decide when to invite",
  readTime: "5 min read",
  content: `## The System Decides, Not You

In a normal sales process, you manually decide who to reach out to. You look at your list. You think about timing. You write an email. You send it.

That's fine until you have 500 leads. Or 5,000. Then it breaks.

Trigger-based invitations remove you from that decision. You define the threshold once — "when someone has completed X lessons" — and the system sends the invitation automatically when someone hits it.

The result: every qualified lead gets a perfectly timed invitation, every time. Nobody slips through the cracks. Nobody gets invited too early. The machine does the qualifying.

## The Recruiter Example

Remember the recruiting firm from Lesson 3?

They build a free hiring platform. Employers post jobs, browse candidates, get resources on hiring. It's genuinely useful.

But the recruiter isn't just building a charity. They're watching signals.

An employer who has posted three jobs in the last 30 days and logs in every few days? That's someone actively hiring, probably under pressure. That's someone who might be open to a conversation about professional recruiting services.

The trigger: when an employer posts their third job listing, the system sends an email. Not "hire us" — something softer. "You've been using the platform — if you'd ever find it useful to chat about what we've seen work for similar hiring situations, I'm happy to make time."

It's not a pitch. It's an invitation based on demonstrated intent.

That's exactly what you're building for your own business.

## Setting Up the Booking Automation

In your admin Automations page, you should already have a booking invite automation from the defaults. Let's make sure it's set up correctly.

The automation should look like this:

- **Name:** Booking Invitation
- **Trigger:** lesson_complete
- **Condition:** lessonsCompleted >= [your threshold]
- **Delay:** 2 hours (give them time to sit with the lesson before the invite arrives)
- **Template:** your invite email (the "Invite" template from Lesson 13)
- **Priority:** High (this should fire before any generic engagement emails)

The delay matters. If someone completes their qualifying lesson at 11pm, you don't want them to get the booking invite at 11:02pm. The 2-hour delay means it'll arrive in the morning at a more natural time.

## Adding a Booking CTA Inside the Platform

Beyond the email, you can add a booking call-to-action inside the platform itself — visible only to users who've hit the threshold.

This could be a banner at the top of the portal, a section that appears after the qualifying lesson, or a dedicated page.

Tell Claude Code what you want:

\`\`\`prompt
I want to add a booking CTA to the member portal that only shows up for users who have completed at least [X] lessons.

The CTA should:
- Have a headline: "[Your booking headline from Lesson 16]"
- Have a short description: "[Your call description]"
- Have a button that links to {{bookingUrl}} (the booking URL from the user's settings)
- Only be visible to users where lessonsCompleted >= [threshold]

Add this to the portal dashboard, below the progress section.
\`\`\`

Claude will find the right component, add the conditional logic, and connect it to the booking URL. Review the result. Adjust the copy if needed.

## Testing the Full Flow

Once the automation is set up, test the complete path:

1. Sign up with a test account
2. Complete enough lessons to hit your threshold
3. Wait for the invite email (or manually trigger it if you want to test faster)
4. Click the booking link in the email
5. Book a time
6. Verify the confirmation arrives

If anything in that sequence breaks, you've found a gap. Fix it before you launch.

The goal is a smooth path from "just completed qualifying lesson" to "has a call booked" — with nothing requiring you to do anything manually.

## What to Do Now

1. Confirm the booking invite automation is active with the right threshold
2. Set the delay to 2 hours
3. Verify the invite email template has the \`{{bookingUrl}}\` variable
4. Ask Claude Code to add a conditional booking CTA to the member portal
5. Test the full path end-to-end with a test account`
},

// ============================================================
// LESSON 19
// ============================================================
19: {
  title: "Reducing No-Shows",
  subtitle: "Get them to actually show up",
  readTime: "4 min read",
  content: `## No-Shows Are Expensive

It's not just the wasted calendar slot. It's the mental overhead. You blocked time, prepared, maybe rearranged your day — and nobody showed up.

No-show rates vary wildly depending on the source. Cold-outreach bookings no-show at 30-50%. Warm bookings from people who consumed your content? Much lower — usually 10-20% if you do reminders right.

Here's how to get it as low as possible.

## The Three-Touch Reminder Sequence

Booking tools like Calendly send one confirmation email automatically. That's the minimum. To meaningfully reduce no-shows, you want three touches:

**1. Booking confirmation** — Immediately after they book. Calendly handles this. It confirms the time, adds a calendar invite, and includes the call link. Make sure your Calendly is set up to send this automatically.

**2. 24-hour reminder** — The day before. This brings the call back to top of mind. Keep it short: "Reminder: we have a call tomorrow at [time]. Here's the link: [link]. Looking forward to it."

**3. 1-hour reminder** — One hour before. This is the one that prevents the "oh crap I forgot" no-show. Short. Direct. Just the time and the link.

Calendly's paid plan sends these automatically. On the free plan, you can set up a simple email sequence manually or write a quick automation that sends reminders based on booking time. Ask Claude Code to help if you want to build this into your platform.

## The Pre-Call Brief

Here's something that makes a real difference and almost nobody does: send a pre-call brief.

A pre-call brief is a short document (or email section) that tells them:
- What to expect in the call
- What you'll be covering based on their questionnaire answers
- What they should think about or prepare beforehand

It does two things. It keeps them engaged between booking and call — they're now thinking about the call in a useful way, not just waiting for it. And it makes you look prepared, which builds trust before you've said a word.

Here's a simple template:

\`\`\`
Subject: Quick prep for our call tomorrow

Hey {{firstName}},

Looking forward to our call tomorrow at [time].

Based on what you shared, I'm planning to focus on:
- [Key issue 1 from their questionnaire]
- [Key issue 2 from their questionnaire]

To make the most of our time, it'd help if you thought about:
- What you've already tried and why it hasn't worked
- What the ideal outcome of the next 90 days looks like for you

See you tomorrow.

[Your name]
\`\`\`

This gets sent the evening before the call. If you're doing high volume, you can automate a version of this (without the personalized issue points). But if you're in the early stages with a handful of calls per week, doing this manually is worth it.

## Tracking Show Rates

You can't improve what you don't measure.

At minimum, track: how many bookings happened, and how many actually showed up. Calculate your show rate weekly.

If your show rate drops below 70%, your reminders probably aren't working or there's something going on with the source of your leads (cold leads no-show more than warm ones).

If your show rate is above 80%, you're doing well. Focus energy elsewhere.

## What to Do Now

1. Make sure Calendly (or your booking tool) sends a confirmation email automatically
2. Set up the 24-hour and 1-hour reminder emails in your booking tool's settings
3. Write a pre-call brief template — use Claude to draft it based on your offer and audience
4. Decide whether you'll send pre-call briefs manually or automate them

Once you have reminders and the pre-call brief working, your no-show rate should drop noticeably. Now let's get people into the system in the first place.`
},

// ============================================================
// LESSON 20
// ============================================================
20: {
  title: "The Traffic Mindset",
  subtitle: "You're inviting, not selling",
  readTime: "4 min read",
  content: `## The Shift That Changes Everything

Every piece of outreach, every post, every ad — you are not selling anything.

You are inviting people to something free and genuinely valuable.

That's not a marketing tactic. It's a different posture entirely. You're not trying to convince someone to hand over money. You're saying: "I built something useful. If you're dealing with [problem], you should come see it."

This changes the copy you write. It changes how you feel sending it. It changes how people respond.

## The Recruiter Example One More Time

The recruiting firm again — because this is where the model really crystallizes.

Old approach: "We're a specialized recruiting firm with 15 years of experience placing senior candidates. Our success rate is 94%. Can we hop on a 30-minute call?"

New approach: "We built a free platform for hiring managers — job templates, candidate tracking, interview frameworks. Completely free. If you're hiring, it might be worth checking out."

Which of those two messages do you open?

The second one isn't a pitch. It's an invitation to something useful. The recruiting conversation happens later, after they've experienced value, when the relationship has context.

That's the entire traffic mindset for your Client Engine. Every outreach message, every post, every ad — it points to the free platform. Not to a sales page. Not to a calendar. To something they genuinely want.

## Choose Your Primary Channel

You need one primary channel. Not five. One.

**Cold outreach (email or LinkedIn)** — You control the targeting. You can be very specific about who you reach. High effort, high precision. Good if you have a very specific target account list.

**Organic content (LinkedIn, Twitter/X, Instagram, YouTube)** — Builds audience over time. Low cost, high leverage if you can produce consistently. Takes longer to see results.

**Paid ads (Meta, LinkedIn, Google)** — Fastest path to volume, but costs money. Only effective if your messaging and offer are already validated.

**Partnerships** — Other people send their audience to you. High leverage, but requires relationship building first.

Pick the one that matches where your audience already is and where you're most comfortable operating. You can add channels later. Right now, one channel done well beats four channels done half-assed.

## Your One-Sentence Value Prop

Before you write any outreach or post any content, you need a single sentence that explains what your platform is and why someone should care.

Not your full offer statement. A simpler pitch:

"It's a free [platform type] that teaches [audience] how to [core outcome]."

Example: "It's a free training platform that teaches marketing agencies how to build an inbound lead system."

This sentence goes in cold outreach messages. It goes in your social media bio. It's the answer when someone asks "what is that thing you built?"

Use Claude Desktop to sharpen it:

\`\`\`prompt
Help me write a one-sentence value prop for my training platform.

My audience: [who they are]
What it teaches: [the transformation]
What makes it different from a generic course: [it's a real platform, behavior-based emails, leads to a real outcome]

Give me 5 variations. Different angles: value-first, curiosity-driven, result-focused.
\`\`\`

Pick the one that feels most like you. That's your hook.

[Download outreach templates](/lessons/downloads/outreach-templates.md){.download}

## What to Do Now

1. Pick your primary traffic channel
2. Write your one-sentence value prop (use the prompt above)
3. Download the outreach templates for reference

Lesson 21 is cold outreach. Lesson 22 is organic content. Lesson 23 is paid ads. Lesson 24 is partnerships.

Work through whichever one matches your primary channel first. Come back to the others later.`
},

// ============================================================
// LESSON 21
// ============================================================
21: {
  title: "Cold Outreach",
  subtitle: "Messages people actually respond to",
  readTime: "6 min read",
  content: `## The Problem With Cold Outreach

Most cold outreach fails because it's about the sender, not the recipient.

"Hi [first name], I help companies like yours achieve [vague outcome]. I'd love to connect and explore synergies."

Nobody wants that. Nobody responds to that. And they definitely shouldn't — it offers nothing.

The Client Engine flips this. Your outreach isn't about you. It's about giving them something.

## Building Your Lead List

Before you write a word of outreach, you need a list of people to contact.

Who is the exact person you want using your platform? Get specific:

- Job title(s)
- Company type and size
- Industry
- Geography (if relevant)
- Signals of intent (hiring, fundraising, growing, struggling with a known pain)

Where to find them:

**LinkedIn** — Best for B2B targeting. Sales Navigator if you can justify the cost. Free search if you're doing smaller volumes.

**Apollo.io** — Good for email addresses + LinkedIn profiles. Free tier is workable.

**Manual research** — For very targeted lists, just find them the old-fashioned way. Better data quality, slower speed.

Build a list of at least 50 before you write your first message. 200+ if you're doing email outreach (response rates are low — you need volume).

## The Three-Message Sequence

Cold outreach works best as a sequence. One message doesn't convert many people. Three well-spaced messages give you multiple chances.

**Message 1 — The Offer:**

Subject: Free [platform name] for [their role]

"Hey [name] — I built a free platform for [their specific role/situation] that [what it does]. It's [number] lessons, completely free, no pitch at the end.

If you're dealing with [specific problem they have], it might be worth a look: [link]

[Your name]"

Short. Clear. All about them. The CTA is just a link — not a request for a meeting.

**Message 2 — The Context Add (3-4 days later):**

"Hey [name] — following up on the platform link I sent.

We built this because [one-sentence origin story — why you built it]. A few [their type of business] have already used it to [specific result].

No pressure — just wanted to add that context in case it's useful: [link]"

**Message 3 — The Light Close (4-5 days after message 2):**

"Hey [name] — last note on this.

If [specific problem they have] is something you're trying to solve, [platform name] is probably worth 20 minutes. Still free: [link]

If the timing's off, no worries. Happy to re-connect later.

[Your name]"

Three messages. Done. If they haven't responded after three, move on. Don't become the person who sends six follow-ups.

## Using Claude to Personalize at Scale

Generic outreach gets ignored. Personalized outreach gets opened.

You can use Claude to help personalize at scale — not at the individual level, but at the segment level.

\`\`\`prompt
I'm doing cold outreach to [specific audience segment — e.g., "marketing directors at B2B SaaS companies with 20-200 employees"].

Here's my base message template:
[paste your message]

Rewrite this for this specific segment. What specific pain points does this audience have that I should reference? What language do they use? What makes them skeptical of solutions like mine?

Give me 3 variations of Message 1 for this segment.
\`\`\`

Run this for each segment you're targeting. You'll end up with variations that feel much more relevant than a one-size-fits-all message.

## Deliverability Basics

If you're doing email outreach at any volume, a few things matter:

**Use a sending domain that's not your main domain.** If you're doing outreach from yourplatform.com, set up a subdomain (mail.yourplatform.com) for outreach. This way if you get flagged, it doesn't affect your main domain's reputation.

**Warm up new email accounts** before sending volume. New email accounts that suddenly send 200 messages a day look like spam. Start slow — 20/day the first week, increase gradually.

**Plain text beats HTML** for cold outreach. Fancy email templates are fine for newsletters to people who signed up. For cold outreach, they scream "automated blast." Plain text looks like a human sent it.

**Don't buy cheap lists.** They're full of outdated emails, spam traps, and people who have no idea who you are. High bounce rates kill your sender reputation.

## What to Do Now

1. Build a list of at least 50 target contacts
2. Write your three-message sequence using the templates above
3. Use Claude to create segment-specific variations
4. Send your first 10 messages today

The reason I say 10 and not 50: start small, see what response you get, adjust the messages, then scale. Don't blast a bad message to 500 people. Test with 10-20, improve, then increase volume.`
},

// ============================================================
// LESSON 22
// ============================================================
22: {
  title: "Organic Content",
  subtitle: "Content that drives signups",
  readTime: "5 min read",
  content: `## What Organic Content Is For

Organic content — posts on LinkedIn, Twitter/X, Instagram, YouTube — does one thing: builds an audience of people who are interested in what you know.

That audience then converts into platform signups. Not everyone who follows you will sign up. But people who find your content useful enough to follow you are exactly the right people for your free platform.

Organic is a long game. You're probably not going to post twice this week and have 100 signups by Friday. But a consistent content presence over 60-90 days builds real, compounding momentum.

## The Three Content Types That Drive Signups

Not all content is equal for platform signups. Three types outperform everything else:

**1. Teaching content** — Share a framework, a principle, or a method. Give it away. The content should be genuinely useful on its own — and the CTA is "if you want to go deeper, the full training is free."

Example (for a marketing consultant on LinkedIn):
"Most agencies think they need more traffic. They don't. They need a better conversion path. Here's how the ones growing fastest are thinking about this: [4-5 bullet breakdown of the framework]

If you want the full version — 8 lessons on building an inbound client engine for your agency — it's free: [link]"

**2. Behind-the-scenes content** — Show your process, share what you're building, document your own results. People are drawn to transparency. It builds trust faster than polished case studies.

"We just deployed [platform name] — a free training platform I built with Claude Code. Here's what the process looked like and what surprised me..." followed by honest, specific observations.

**3. Results content** — Client wins, before/after comparisons, specific numbers. The more specific, the better.

"One of our clients went from 2 inbound leads/month to 11 in 60 days using this system. What changed..." then explain what changed, genuinely.

## Every Post Ends With One CTA

This is non-negotiable.

Every piece of content should end with a pointer to your free platform. Not a sales pitch. Just a link and a one-liner:

"If you want the full framework: [platform link] — it's free."

Or: "I put this whole system into a free training platform: [link]"

Or: "The full thing is in [platform name] — free to sign up: [link]"

You're not selling. You're offering the next step to anyone who's interested. Most people will scroll past. A few will click. Those few are gold.

## Using Claude to Batch-Produce Content

Content consistency is hard when you're doing it one post at a time. Claude can help you batch-produce a week or two of content at once.

\`\`\`prompt
I'm creating LinkedIn content to drive signups to my free training platform.

My audience: [who they are]
My platform teaches: [what]
My voice: [describe — punchy, direct, no fluff, etc]

Produce 7 LinkedIn posts:
- 3 teaching posts (each shares one useful framework or principle)
- 2 behind-the-scenes posts (about building my platform or working with clients)
- 2 results posts (specific client wins or before/after scenarios)

Each post should end with a CTA to my free platform: [your platform URL]

Format: short paragraphs, no more than 3 lines per paragraph, hook first line that makes someone stop scrolling.
\`\`\`

Review all seven. Edit the ones that don't sound like you. Add specific examples from your real experience where Claude used placeholders.

Then schedule them out — one per day, or every other day.

## What to Do Now

1. Decide which platform your audience is most active on
2. Use the prompt above to draft 5-7 posts
3. Edit them until they sound like you and contain real specifics
4. Publish two of them this week
5. Track: how many impressions, how many link clicks, how many signups

Don't obsess over every post's performance. Focus on consistency. The signups compound over time.`
},

// ============================================================
// LESSON 23
// ============================================================
23: {
  title: "Paid Ads",
  subtitle: "Amplify what already works",
  readTime: "5 min read",
  content: `## When to Start Paid Ads

This is important: paid ads should not be your first traffic source.

Before you spend a dollar on ads, you should have:
- Posted organic content and seen some posts drive signups
- Sent cold outreach and gotten responses and signups
- Validated that your landing page converts (people who show up actually sign up)

Why? Because ads amplify. They amplify what's working. If your messaging isn't resonating or your landing page isn't converting, ads will just spend your budget amplifying a broken system.

Get 20-50 organic signups first. That's your validation signal. Then turn on ads to scale what's already working.

## The Simplest Setup That Works

Resist the urge to build complex campaigns. One audience, one ad, one destination.

**One audience** — Your most specific ICP. Don't use broad interest targeting. Use job titles + company sizes, or a custom audience built from your email list, or lookalikes based on your existing signups.

**One ad** — A short, direct message offering the free platform. No fancy creative needed. A simple image with your headline and a one-liner about what they get. Or a plain text "dark post" that looks like organic content.

**One destination** — Your landing page. Not your homepage. Your landing page, specifically designed to convert this audience.

That's it. Start there.

## What the Ad Should Say

Your ad copy is basically the same message as your cold outreach — short, direct, about them.

**Headline:** "[Platform name] — Free for [audience type]"

**Body copy:** "I built a free [X]-lesson training platform for [audience]. It teaches you [specific outcome]. No pitch. No upsell. Just the training.

If you're [dealing with specific problem], sign up free: [link]"

**Call to action button:** "Get Free Access" or "Sign Up Free"

That's a complete ad. Simple. Clear. Makes a specific promise to a specific audience.

If you want to test alternatives, change one variable at a time. Different headline. Same body. Or same headline, different image. Don't change everything at once — you won't know what made the difference.

## Budget and What to Expect

Start at $10-20/day. That's enough to gather real data without burning your budget.

For Meta (Facebook/Instagram): expect $3-8 cost per signup on a warmed-up ad. So at $15/day, you might get 2-5 signups per day.

For LinkedIn: more expensive. Expect $15-50+ per signup because you're paying for professional targeting. Worth it if your clients are in corporate environments.

For Google: depends entirely on search volume for your keywords. Good if your audience is actively searching for what you offer.

## Why This Converts Better Than Ads Pointing to a Sales Page

Most ads point to a sales page that asks for money or a call. The conversion rate is low because you're asking for commitment from a stranger.

Your ad points to a free, high-value resource. Lower commitment. The prospect thinks: "It's free, I can check it out." The conversion rate is higher.

And then the platform does the work of building the relationship before the ask ever happens.

## What to Do Now

If you haven't validated with organic or outreach yet, skip this lesson for now. Come back when you have.

If you're ready:
1. Pick one ad platform (Meta is the easiest to start)
2. Set up your ad account if you haven't
3. Write one ad using the framework above
4. Set budget to $10-15/day
5. Define your audience as specifically as possible
6. Launch and let it run for 7 days before optimizing

Track signups per day. If you're getting signups at a reasonable cost, let it run. If not, adjust the audience or the copy before touching the budget.`
},

// ============================================================
// LESSON 24
// ============================================================
24: {
  title: "Partnerships",
  subtitle: "Let other people send you traffic",
  readTime: "4 min read",
  content: `## The Highest-Leverage Traffic Source

Cold outreach requires constant effort. Content requires consistency. Ads require budget.

Partnerships, when they work, are none of those things. Someone else tells their audience about your platform, and warm, pre-qualified traffic shows up. For free.

The catch: partnerships require relationships. And relationships take time.

But even one good partnership can outperform months of solo content or outreach. It's worth investing early — even before your platform is fully live.

## What a Good Partnership Looks Like

You're looking for complementary businesses — not competitors.

If you're a marketing consultant, good partners are: web designers, copywriters, branding agencies, business coaches. They serve the same audience but offer different services.

If you're a recruiter, good partners are: HR consultants, employment lawyers, payroll services, startup advisors.

If you're a financial advisor, good partners are: accountants, estate attorneys, business coaches.

The test: do they talk to the same person you talk to, but about a different problem? If yes, they're a potential partner.

## The Partnership Pitch

Here's the thing: you're offering them something. Don't position it as a favor you're asking.

You're saying: "I've built something genuinely useful for your clients. If you share it with them, it helps your clients, positions you as a resource, and costs you nothing."

That's a good deal. Most partners will say yes if you frame it right.

The pitch:

"Hey [name] — I built a free training platform for [audience]. It teaches [what it teaches] — no pitch, completely free.

I think your clients would genuinely get value from it. Would you be open to mentioning it to them — either in an email, a newsletter mention, or just telling them about it? Happy to do the same for you if you have something useful to share with [my audience].

Here's the platform: [link]"

That's it. Short. Easy for them to say yes to. No weird commission structure or affiliate deal to figure out.

## The Recruiter Example Again

Back to our recruiter with a free hiring platform.

Good partners: HR consulting firms, employment lawyers, payroll companies, Slack communities for startup founders.

The pitch to an HR consultant: "I built a free platform for hiring managers — job templates, candidate tracking frameworks, interview guides. Completely free. I think it'd be genuinely useful for your clients as a supplementary resource. Would you be open to mentioning it?"

An HR consultant who shares it with their email list of 2,000 hiring managers? That's potentially dozens of signups in a day. From one email.

## Building a Referral Mechanism

As your platform grows and you start closing clients from it, you can formalize partnerships with a simple referral structure.

"For every client you refer who signs up, I'll give you [X]."

This can be cash, a rev share, a reciprocal referral, or a service swap. Whatever makes sense for your business.

But don't start with complicated affiliate deals. Start with the simple ask — "would you mention this to your audience?" Most people will do that for free if the thing you're sharing is actually good.

## What to Do Now

1. Make a list of 5-10 complementary businesses in your market
2. Find the right person to contact at each one (usually the owner or principal)
3. Send the partnership pitch to 3 of them this week
4. Track who responds and who doesn't — follow up once if no response

Don't send 20 at once. Test with three. See what the response looks like. Refine the pitch. Then expand.

One partnership that works well is worth more than 100 cold outreach messages. Do the relationship work.`
},

// ============================================================
// LESSON 25
// ============================================================
25: {
  title: "Deploying Your Platform",
  subtitle: "From localhost to live",
  readTime: "5 min read",
  content: `## From Local to Live

You've been building on localhost:3000. That's your computer. Nobody else can see it.

Deploying means putting it on a real server with a real domain so anyone on the internet can sign up.

Here's the full path: GitHub → Vercel → your domain. Takes about 30 minutes if you've never done it before.

[Download the pre-launch checklist](/lessons/downloads/pre-launch-checklist.md){.download}

## Step 1: Push to GitHub

GitHub is where your code lives in the cloud. It's also how Vercel pulls your code to deploy it.

If you don't have a GitHub account, create one at github.com. Free.

Create a new repository (click the "+" in the top right → New repository). Name it "my-client-engine" or whatever you want. Keep it private for now.

Then in your project folder, run these commands:

\`\`\`bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/your-repo-name.git
git push -u origin main
\`\`\`

If you're not familiar with git: these commands initialize git tracking in your project, save all your files, and push them to GitHub. You only do the \`init\` and \`remote add\` once. After that, pushing changes is just:

\`\`\`bash
git add .
git commit -m "describe what you changed"
git push
\`\`\`

Alternatively, tell Claude Code: "Push this project to GitHub. I have a repo at [URL]." It'll handle it.

## Step 2: Deploy on Vercel

Vercel is the hosting platform. It's free for this use case and it integrates directly with GitHub.

1. Go to vercel.com, sign up (use your GitHub account)
2. Click "Add New Project"
3. Select your GitHub repo
4. Click "Deploy"

Vercel will try to build it. The first deploy might fail because your environment variables aren't set yet.

**Adding environment variables in Vercel:**

Go to your project settings → Environment Variables. Add:

- \`DATABASE_URL\` — your Neon connection string
- \`SESSION_SECRET\` — the same random string from your .env file
- \`RESEND_API_KEY\` — your Resend API key
- \`ADMIN_EMAIL\` — your email address

Then redeploy (click "Redeploy" in the Vercel dashboard). This time it should work.

## Step 3: Run Database Migrations on Production

Your local database has the schema and content. Your production database (on Neon) is empty.

You need to run migrations against production. The easiest way:

1. In your terminal, temporarily set DATABASE_URL to your production connection string
2. Run: \`npx prisma migrate deploy\`
3. Run: \`npx prisma db seed\`

Or ask Claude Code: "I need to run database migrations and seed content against my production database. My production DATABASE_URL is [paste it]. How do I do this safely?"

## Step 4: Connect Your Custom Domain

In Vercel, go to your project → Settings → Domains. Add your domain.

Vercel will give you DNS records to add (usually just a CNAME record). Log into your domain registrar, add the record. DNS propagation takes up to 24 hours but usually happens in minutes.

Once it's connected, your platform is live on your real domain.

## Step 5: Create Your Admin Account

Once the platform is live, sign up using the email address you set as \`ADMIN_EMAIL\` in your environment variables.

That account automatically gets admin access. Go to /admin — you'll see the full admin dashboard.

## Final End-to-End Test

Go through the complete user journey:

1. Land on your homepage — does it load? Does it look right?
2. Sign up with a test email — does the signup work? Does the welcome email arrive?
3. Complete a lesson — does the progress update? Does the lesson complete email fire?
4. Check that your domain is correctly mapped and https is working

![Platform live in the browser](/lessons/screenshots/landing-full.png)

If anything's broken, Claude Code is your debugger. Describe the error, and it'll trace it back to the source.

## What to Do Now

1. Push your code to GitHub
2. Deploy on Vercel
3. Add all environment variables
4. Run migrations on production
5. Seed your content
6. Connect your domain
7. Create your admin account
8. Do a full end-to-end test using the pre-launch checklist

Don't announce it until you've personally signed up and gone through the entire experience yourself. Find the rough edges before your audience does.`
},

// ============================================================
// LESSON 26
// ============================================================
26: {
  title: "Metrics That Matter",
  subtitle: "Five numbers, that's it",
  readTime: "4 min read",
  content: `## Cut the Dashboard Noise

You could track 50 things. Pageviews, bounce rate, time on site, email open rate, click rate, unsubscribe rate, conversion rate, NPS, you name it.

Don't. You'll spend all your time analyzing and none of your time improving.

Five numbers. That's it. Each one tells you exactly which part of your system is working or broken.

## The Five Numbers

**1. Signup Rate**

What it is: percentage of landing page visitors who sign up.

How to calculate: signups / unique visitors × 100.

What it tells you: if this is low (under 15-20%), your landing page isn't converting. The headline isn't resonating, the value prop isn't clear, or you're sending the wrong traffic.

**2. Engagement Rate**

What it is: percentage of signups who complete at least 3 lessons.

How to calculate: users with 3+ lessons completed / total signups × 100.

What it tells you: if this is low, your first few lessons aren't compelling enough. The content isn't delivering what it promised, or the onboarding experience is dropping people off.

**3. Email Response Rate**

What it is: percentage of your nurture emails that get replies (not just opens — actual replies).

How to calculate: replies / emails sent × 100.

What it tells you: if this is low, your emails feel like broadcasts, not conversations. The subject lines aren't creating enough curiosity, or the content isn't relevant enough to prompt a response.

**4. Booking Rate**

What it is: percentage of users who hit your qualification threshold and then actually book a call.

How to calculate: bookings / users who hit threshold × 100.

What it tells you: if this is low, either the booking invitation isn't compelling, the booking friction is too high, or your threshold is set too early (people aren't ready yet when they get the invite).

**5. Show Rate**

What it is: percentage of booked calls where the person actually shows up.

How to calculate: calls held / calls booked × 100.

What it tells you: if this is low, your reminders aren't working or the quality of your leads is lower than expected (cold leads no-show more than warm ones).

## Reasonable Benchmarks

These aren't guarantees. They depend heavily on your traffic quality and offer. But as rough targets:

- Signup rate: 20-35% from warm traffic, 8-15% from cold traffic
- Engagement rate: 30-50% (hard to get everyone to come back)
- Email response rate: 3-8% (any reply is gold)
- Booking rate: 20-40% of qualified leads
- Show rate: 70-85%

If all five are in these ranges, your system works. Focus on volume.

If one is low, that's your bottleneck.

## How to Track Them

Your platform's admin dashboard shows signups, lesson completion, and engagement. You'll be able to pull the engagement rate from there.

Resend's dashboard shows email delivery stats. But for replies, you'll need to check your inbox (or build a reply tracking system later with Claude Code).

Your booking tool (Calendly, Cal.com) tracks bookings and shows history. Calculate show rate manually: booked calls minus no-shows.

You don't need complex analytics software to start. A spreadsheet tracking these five numbers weekly is enough.

## What to Do Now

1. Set up a simple tracking spreadsheet with the five metrics
2. Run your platform for one week
3. Record your baseline numbers
4. Identify which one is furthest from where you want it

That's your first improvement target. Lesson 27 is about fixing exactly that.`
},

// ============================================================
// LESSON 27
// ============================================================
27: {
  title: "Fixing What's Broken",
  subtitle: "Diagnose and fix in minutes",
  readTime: "5 min read",
  content: `## The Diagnostic Framework

When your system isn't performing, the symptom tells you where to look.

Each of the five metrics from Lesson 26 maps to a specific part of your system. When one is low, you don't need to overhaul everything. You fix the one thing that's broken.

This is where having Claude Code makes everything faster. You're not filing support tickets or waiting on a developer. You describe what you want to change, and it changes in minutes.

## Low Signup Rate → Landing Page Problem

If people are coming to your landing page and not signing up, the page isn't doing its job.

Common causes:
- Headline is too vague — doesn't connect with the specific pain
- Value proposition is unclear — they don't know what they're getting
- The "free" offer doesn't feel credible or valuable enough
- Poor mobile experience (check your page on your phone)

How to fix:

First, read your headline out loud. If it sounds like marketing copy, rewrite it. It should sound like you're talking to a specific person about a specific problem.

Then ask Claude to help:

\`\`\`prompt
My landing page headline is: [current headline]
My audience is: [who they are]
The main thing they want: [specific outcome]
The main thing they're afraid of or skeptical about: [their objection]

Give me 5 alternative headlines that speak more directly to the pain and make the free offer feel more credible. Short, specific, no fluff.
\`\`\`

Pick the best one. Tell Claude Code to update the landing page. Republish. Track the signup rate for another week.

## Low Engagement Rate → First Lesson Problem

If people sign up and don't come back, your first lesson didn't earn the second visit.

Common causes:
- First lesson is too long or too dense
- It doesn't deliver a quick, tangible insight
- It's too much background, not enough substance
- The tone is too formal or generic

The rule: your first lesson must deliver one "holy shit" moment. One insight that makes the person think: "I didn't know that. That's actually useful. What's next?"

If your first lesson doesn't do that, rewrite it.

Ask Claude Desktop:

\`\`\`prompt
Here's my first lesson: [paste it]

My audience is [who they are] and they're dealing with [specific problem].

What's the weakest part of this lesson? What's the strongest insight? How would you restructure it to lead with the most valuable insight and end with a clear, compelling reason to start the next lesson?
\`\`\`

Then ask Claude Code to update the lesson in your database.

## Low Email Response Rate → Subject Lines or Content

If your emails are going out but nobody's replying, something in the email isn't connecting.

Usually it's one of two things:

**Subject lines** — They're too generic, too salesy, or not creating enough curiosity to open. Try more personal, specific, or curiosity-based subject lines.

**Content** — The email is broadcasting at the reader instead of talking to them. Add a direct question at the end. Ask for their opinion on something. Make it a conversation.

The simplest fix: add a question to the end of your next email. "What's been the biggest challenge with [topic] in your business?" Two-line email. That's it.

## Low Booking Rate → Threshold or CTA

If qualified leads aren't booking, something is off between the invite and the calendar.

Check:
- Is the invite email CTA clear enough?
- Is the booking page headline compelling?
- Is there too much friction in the booking process (too many questions, no available times)?
- Is your threshold too low — are they not ready when they hit it?

The fastest fix: lower your qualification threshold temporarily. See if more people book at a lower bar. If they do, your threshold was set too high.

## Low Show Rate → Reminders

If people book and don't show up, your reminder system isn't working.

Check: are the 24-hour and 1-hour reminders actually sending? In Calendly, this is under event settings. If they're not set up, set them up.

Also check: are your reminders going to spam? Ask a friend to book a test call and see if they receive the reminders.

## Using Reviews as Free Market Research

Your feedback emails (from Lesson 11) are one of the most underused diagnostic tools in this system.

When someone replies to your feedback email with "I almost didn't sign up because I thought this would be too technical" — that's a landing page fix telling itself to you.

When five people say the same lesson was confusing — that lesson needs work.

When someone says "I had no idea this was possible, this changed how I think about [X]" — that's your best testimonial and probably the insight you should lead with on your landing page.

Pay attention to feedback. It's free market research.

## What to Do Now

1. Identify your lowest metric from Lesson 26
2. Use the diagnostic above to figure out what's causing it
3. Make one specific change (use Claude Code or Claude Desktop as needed)
4. Run for another week and see if it moves

Don't change three things at once. Change one thing. Measure. Repeat.`
},

// ============================================================
// LESSON 28
// ============================================================
28: {
  title: "Scaling and What's Next",
  subtitle: "More traffic, more channels, and the skill that matters most",
  readTime: "5 min read",
  content: `## You Built It. Now Scale It.

If you've followed this course, you have:

- A live training platform on a real domain
- Automated email nurture based on behavior
- A booking system that invites qualified leads at the right time
- At least one traffic channel bringing in signups

That's a real acquisition system. Not a concept. Not a plan. A working machine.

Now we scale it.

## Adding a Second Traffic Channel

You've been working one primary channel. Now add a second.

If you started with cold outreach, add organic content.

If you started with content, add cold outreach or paid ads.

The second channel doesn't need to be as sophisticated as the first. You're not rebuilding your playbook. You're adding another pipe that feeds the same platform.

One principle: don't abandon what's working to chase what's new. If cold outreach is generating consistent signups, keep doing it. Add the second channel on top of it, not instead of it.

## Increasing Ad Spend Incrementally

If you've been running ads and getting signups at a cost that works, here's the scaling rule:

Increase budget by 20% every 7-14 days as long as cost per signup stays stable.

Don't double your budget overnight. Ad algorithms need time to adjust. A 20% increase gives the system room to find new supply without breaking performance.

If cost per signup spikes when you increase budget: the algorithm is running out of easy inventory. Either expand your audience or let it stabilize before pushing again.

## Building New Features With Claude Code

Your platform is not done. No software is ever done.

Here are things you might want to add as you grow:

- A "cohort" feature that lets multiple users go through the platform together
- A community section where users can leave comments or questions
- SMS reminders for bookings (Twilio + Claude Code — a day's work)
- An affiliate/referral tracking system
- A paid tier with premium content
- Analytics dashboard that shows you the five metrics from Lesson 26 automatically

All of these are buildable with Claude Code. None of them require a developer.

The process is always the same: describe what you want clearly, give Claude context from your CLAUDE.md, iterate on the output.

## Your 30-Day Scaling Plan

Pick three things from this list that are most relevant to your situation right now:

**Traffic:**
- Add one new outreach sequence (new audience segment)
- Publish 5 pieces of content per week for 4 weeks
- Launch a paid ad campaign
- Reach out to 5 potential partners

**Conversion:**
- A/B test your landing page headline
- Rewrite your first lesson
- Add a video to your landing page
- Improve your invite email

**Retention:**
- Add a new module to the platform
- Build the feedback email sequence
- Add an SMS reminder for booked calls

Write down your three priorities. Put dates on them. Start the first one today.

## The Real Skill You Just Built

Here's what this course was actually about.

It wasn't about the platform. The platform is just the vehicle.

What you actually built is the ability to talk to AI and make things.

You know how to describe what you want clearly. You know how to iterate when the output isn't right. You know how to use Claude Desktop for thinking and Claude Code for building. You know the difference between a model being wrong and your prompt being wrong.

That skill is not limited to this project. It applies to everything.

Next time you have a business idea, open Claude and say "here's what I want to build." Next time you need copy, open Claude and describe who it's for and what it needs to do. Next time something in your business is broken, open Claude Code and describe the problem.

The people who are going to win over the next five years are the people who got comfortable talking to AI — and never stopped.

You've done that. Keep going.

## One Last Thing

If this platform has been useful — leave a review.

Not for us (though we appreciate it). For the next person who's considering signing up and wondering if it's worth their time.

Specific reviews are worth more than generic ones. "This was great!" is useless. "I went from no system to a live platform generating leads in 30 days" is powerful.

You know the system now. Use it to help someone else decide.

## What to Do Now

1. Write your 30-day scaling plan — three priorities, with dates
2. Add your second traffic channel this week
3. Leave a review if this was useful
4. Open Claude and start building the next thing

You have the skill. Don't waste it.`
},

};

async function main() {
  const entries = Object.entries(lessons);
  console.log(`Updating ${entries.length} lessons...\n`);

  for (const [order, data] of entries) {
    await prisma.lesson.update({
      where: { order: parseInt(order) },
      data: {
        title: data.title,
        subtitle: data.subtitle,
        readTime: data.readTime,
        content: data.content,
      },
    });
    console.log(`Updated lesson ${order}: ${data.title}`);
  }

  console.log("\nAll 28 lessons rewritten successfully.");
}

main().then(() => prisma.$disconnect());
