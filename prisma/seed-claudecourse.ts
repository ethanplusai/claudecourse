import "dotenv/config";
import { PrismaClient } from "../src/generated/prisma";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("Seeding Claude Course content...\n");

  // Delete existing course content (keep users)
  await prisma.behaviorEvent.deleteMany();
  await prisma.lessonProgress.deleteMany();
  await prisma.lesson.deleteMany();
  await prisma.module.deleteMany();

  console.log("Cleared existing course data.\n");

  // ─── Module 1: Getting Started ───
  const module1 = await prisma.module.create({
    data: {
      title: "Getting Started",
      description:
        "Install Claude Code, have your first conversation, and set up the project you'll build throughout this course.",
      order: 1,
    },
  });

  // ─── Module 2: Building ───
  const module2 = await prisma.module.create({
    data: {
      title: "Building",
      description:
        "Build the course platform piece by piece — landing page, database, auth, portal, lessons, and the skills directory.",
      order: 2,
    },
  });

  // ─── Module 3: Automating ───
  const module3 = await prisma.module.create({
    data: {
      title: "Automating",
      description:
        "Add email nurture, behavior tracking, an admin panel, and SEO to make your platform smart and findable.",
      order: 3,
    },
  });

  // ─── Module 4: Launching ───
  const module4 = await prisma.module.create({
    data: {
      title: "Launching",
      description:
        "Deploy your platform to the internet and learn what to do next — traffic, content, and making money.",
      order: 4,
    },
  });

  console.log("Created 4 modules.\n");

  // ════════════════════════════════════════════════
  // MODULE 1: GETTING STARTED (Lessons 1-4)
  // ════════════════════════════════════════════════

  await prisma.lesson.create({
    data: {
      moduleId: module1.id,
      title: "What Is Claude Code",
      subtitle: "And why you should care about it",
      readTime: "8 min read",
      order: 1,
      content: `You're about to learn the most useful skill that exists right now. Not coding. Not marketing. Not sales. The skill of getting an AI to build things for you.

Claude Code is an AI coding agent made by Anthropic. It runs in your terminal — that black screen hackers use in movies. But don't let that scare you. You don't need to be a hacker. You don't need to know how to code. You just need to know how to describe what you want.

## How It's Different From ChatGPT

You've probably used ChatGPT. You paste some code, it gives you code back, and you have no idea where to put it. That's not what Claude Code does.

Claude Code sits inside your project. It can read your files. It can write new ones. It can run commands. It can install packages. It can fix bugs. It can build entire features from a single description.

It's not a chatbot. It's a building partner.

## What You're About to Build

Here's the thing that makes this course different: **you're going to build this exact platform.**

The course you're reading right now? The login page you used? The lesson viewer you're looking at? The database storing your progress? All of it. You're going to build all of it from scratch using Claude Code.

By the end of lesson 16, you'll have:
- A deployed course platform on the internet
- Authentication (signup, login, logout)
- A database with modules, lessons, and progress tracking
- An email nurture system
- An admin panel
- 20 downloadable skills files
- SEO optimization and a sitemap

And you'll know how to build anything else you want.

## What You Need

Three things:
1. A computer (Mac, Windows, or Linux)
2. An internet connection
3. An Anthropic account (free to create)

That's it. No coding experience. No fancy software. No $500 bootcamp.

## How This Course Works

Every lesson teaches you ONE thing. Not five things crammed together. One.

Each lesson has you build one piece of the platform. Lesson by lesson, the pieces add up until you have a complete, working product.

You can do the lessons in any order, but they make more sense sequentially. Each one takes 10-15 minutes. The whole course takes about 8 hours spread over a few days.

## What to Do Now

- Create a free account at [console.anthropic.com](https://console.anthropic.com) if you haven't already
- Look around this course platform — you're going to build this exact thing
- Move on to Lesson 2 when you're ready`,
    },
  });

  await prisma.lesson.create({
    data: {
      moduleId: module1.id,
      title: "Installing Claude Code",
      subtitle: "From zero to running in 10 minutes",
      readTime: "10 min read",
      order: 2,
      content: `Let's get Claude Code installed. This lesson covers everything from "what is a terminal" to having Claude Code running and responding to you.

## What Is a Terminal

A terminal is a text-based interface to your computer. Instead of clicking buttons, you type commands. It looks intimidating but it's actually simpler than a GUI once you learn 5 basic commands.

**On Mac:** Open Spotlight (Cmd+Space), type "Terminal", hit Enter.
**On Windows:** Open the Start menu, type "PowerShell", hit Enter.
**On Linux:** You already know how to open a terminal.

You should see a blinking cursor. That's your terminal. You type commands here and press Enter to run them.

## Install Node.js

Claude Code requires Node.js — it's the runtime that lets JavaScript (and Claude Code) run on your computer.

Go to [nodejs.org](https://nodejs.org) and download the LTS version. Install it like any other app.

To verify it worked, open your terminal and type:

\`\`\`bash
node --version
\`\`\`

You should see something like \`v20.11.0\` (the exact number doesn't matter as long as it's 18 or higher).

## Install Claude Code

Now install Claude Code globally. In your terminal, type:

\`\`\`bash
npm install -g @anthropic-ai/claude-code
\`\`\`

This downloads Claude Code and makes it available everywhere on your computer. The \`-g\` flag means "global" — install it for the whole system, not just one project.

Wait for it to finish. You'll see some output scrolling by. When it's done, you'll get your cursor back.

## Authenticate

Run Claude Code for the first time:

\`\`\`bash
claude
\`\`\`

It'll ask you to log in with your Anthropic account. Follow the link it gives you, sign in, and authorize the connection. This links your terminal to your Anthropic account so Claude Code can work.

## Your First Command

Once authenticated, you should see Claude Code's prompt. Type something simple:

\`\`\`prompt
say hello and tell me what you can do
\`\`\`

Claude Code will respond. It'll tell you it can read files, write code, run commands, and build things. This is your building partner.

## Basic Terminal Commands You Should Know

Before we go further, here are 5 terminal commands you'll use constantly:

\`\`\`bash
ls          # List files in the current folder
cd folder   # Move into a folder
cd ..       # Go back one folder
mkdir name  # Create a new folder
pwd         # Print where you currently are
\`\`\`

That's it. Five commands. You don't need more than this.

## What to Do Now

- Install Node.js from nodejs.org
- Install Claude Code with \`npm install -g @anthropic-ai/claude-code\`
- Run \`claude\` and complete authentication
- Run a test message to verify it works
- Practice the 5 terminal commands listed above`,
    },
  });

  await prisma.lesson.create({
    data: {
      moduleId: module1.id,
      title: "Your First Conversation",
      subtitle: "How to talk to Claude Code and get results",
      readTime: "10 min read",
      order: 3,
      content: `Now that Claude Code is installed, let's learn how to actually use it. This lesson covers the basics of having productive conversations with Claude Code.

## Starting a Session

Open your terminal and type:

\`\`\`bash
claude
\`\`\`

That's it. Claude Code starts in interactive mode. You type messages, it responds. Simple.

But there's a difference between asking Claude Code a question and giving it a task.

## Asking vs. Telling

**Asking (less useful):**
"What is React?"

**Telling (more useful):**
"Create a React component that displays a user profile card with name, email, and avatar."

Claude Code is at its best when you give it specific tasks. Tell it what to build, not what to explain.

## The Art of the Prompt

A good prompt for Claude Code has three things:

1. **What** you want (the feature or task)
2. **Where** it should go (the file or location)
3. **How** it should work (specific behavior)

**Bad prompt:**
"Make a login page"

**Good prompt:**
"Create a login page at src/app/login/page.tsx with email and password fields, a submit button, and form validation. Use Tailwind CSS for styling. The form should POST to /api/auth/login."

The more specific you are, the better the result. You can always iterate, but starting specific saves time.

## Useful Commands

While in a Claude Code session, you have some built-in commands:

\`\`\`prompt
/help     - See all available commands
/clear    - Clear the conversation history
/compact  - Summarize the conversation to save context
\`\`\`

\`/compact\` is especially useful in long sessions. Claude Code has a context window — it can only "remember" so much. Compacting summarizes the conversation so you can keep going.

## One-Shot Mode

You don't always need an interactive session. For quick tasks:

\`\`\`bash
claude "create a .gitignore file for a Next.js project"
\`\`\`

This runs the command and exits. Good for one-off tasks.

## How It Reads Your Files

Here's the magic: when you start Claude Code in a project folder, it can see all your files. You don't need to paste code into it. Just say:

\`\`\`prompt
Read src/app/page.tsx and add a navigation bar at the top
\`\`\`

It reads the file, understands the context, and modifies it. This is why Claude Code is so much more useful than ChatGPT for coding — it works WITH your project, not separately.

## Iterating

Your first result won't always be perfect. That's fine. Iterate:

\`\`\`prompt
Make the heading bigger
Change the background to dark
Add a hover effect to the buttons
Move the navigation to the left side
\`\`\`

Each follow-up builds on the last. Claude Code remembers what it just did and modifies accordingly.

## What to Do Now

- Start a Claude Code session with \`claude\`
- Ask it to create a simple HTML file with a heading and paragraph
- Ask it to modify the file (change colors, add elements)
- Practice 5 back-and-forth exchanges
- Try the \`/help\` and \`/compact\` commands
- Try one-shot mode: \`claude "explain what package.json is"\``,
    },
  });

  await prisma.lesson.create({
    data: {
      moduleId: module1.id,
      title: "Project Setup",
      subtitle: "Creating your course platform from scratch",
      readTime: "12 min read",
      order: 4,
      content: `Time to create the actual project. By the end of this lesson, you'll have a Next.js application running on your computer.

## What Is Next.js

Next.js is a framework for building websites. It handles the boring stuff — routing, server-side rendering, optimization — so you can focus on building features.

We're using it because:
1. It's what this course platform is built with
2. Claude Code is excellent at writing Next.js code
3. It deploys easily to Vercel (free hosting)
4. It's the most popular React framework

You don't need to understand all of that right now. You just need to know: Next.js makes websites. Claude Code writes the Next.js code. You direct the build.

## Create the Project

Open your terminal. Navigate to where you want your project to live:

\`\`\`bash
cd ~/Desktop
\`\`\`

Now start Claude Code and tell it to create the project:

\`\`\`bash
claude
\`\`\`

\`\`\`prompt
Create a new Next.js 15 project called "my-course-platform" with TypeScript and Tailwind CSS. Use the App Router. Initialize it with npm.
\`\`\`

Claude Code will run \`npx create-next-app\` and set everything up. This takes a minute. When it's done, you'll have a new folder called \`my-course-platform\`.

## Understand the File Structure

Move into the project:

\`\`\`bash
cd my-course-platform
\`\`\`

Ask Claude Code to explain what you're looking at:

\`\`\`prompt
Explain the file structure of this project. What is each file and folder for? Keep it brief.
\`\`\`

The key files:
- \`src/app/page.tsx\` — Your home page
- \`src/app/layout.tsx\` — The wrapper around every page
- \`src/app/globals.css\` — Your styles
- \`package.json\` — Lists your project's dependencies
- \`next.config.ts\` — Next.js configuration
- \`tsconfig.json\` — TypeScript configuration

## Run the Development Server

Start your app:

\`\`\`bash
npm run dev
\`\`\`

Now open your browser and go to:

\`\`\`
http://localhost:3000
\`\`\`

You should see the default Next.js page. That's your app. Running. On your computer. It took about 3 minutes to get here.

**Keep this terminal running.** The dev server watches for file changes and updates automatically. Open a new terminal tab/window for Claude Code.

## Make Your First Change

In a new terminal, navigate to your project and start Claude Code:

\`\`\`bash
cd ~/Desktop/my-course-platform
claude
\`\`\`

\`\`\`prompt
Replace the content of src/app/page.tsx with a simple page that says "Claude Course" in a large heading, with a subtitle that says "Learn Claude Code by Building". Use Tailwind CSS for styling. Make it centered on the page.
\`\`\`

Switch to your browser. The page should update automatically. You just built your first component with Claude Code.

## Initialize Git

Version control saves your work. Ask Claude Code:

\`\`\`prompt
Initialize a git repository and make the first commit with the message "initial project setup"
\`\`\`

Git tracks every change you make. If you break something, you can always go back. We'll push this to GitHub later when we deploy.

## What to Do Now

- Create the Next.js project with Claude Code
- Run \`npm run dev\` and see it in your browser
- Make a change with Claude Code and see it update live
- Initialize git and make your first commit
- Leave the dev server running — you'll need it for the next lesson`,
    },
  });

  console.log("Created Module 1 lessons (Getting Started: 4 lessons).\n");

  // ════════════════════════════════════════════════
  // MODULE 2: BUILDING (Lessons 5-10)
  // ════════════════════════════════════════════════

  await prisma.lesson.create({
    data: {
      moduleId: module2.id,
      title: "Your First Real Page",
      subtitle: "Building a landing page with Claude Code",
      readTime: "12 min read",
      order: 5,
      content: `Your project has a blank page. Let's turn it into a real landing page. This lesson teaches you how to prompt Claude Code for UI work and iterate until it looks good.

## The Landing Page Brief

Every product needs a landing page. Yours should have:
- A navigation bar with logo and sign-in button
- A hero section with headline, description, and CTA
- A features section showing what the course offers
- A curriculum overview
- A footer

That's a lot. But Claude Code can build it in one shot.

## The Prompt

Start Claude Code in your project folder and give it a detailed prompt:

\`\`\`prompt
Rewrite src/app/page.tsx as a complete landing page for a course platform called "Claude Course". It should have:

1. A sticky nav bar with the text "Claude Course" on the left and "Sign in" and "Start Free" buttons on the right
2. A hero section centered on the page with:
   - A headline: "Learn Claude Code by building a real product"
   - A description: "A free course where you build this exact platform from scratch. 16 lessons. No experience needed."
   - A CTA button that says "Start Building"
3. A features grid with 6 items about what the course teaches
4. A section showing 4 modules with their lesson counts
5. A final CTA section
6. A footer with copyright

Use Tailwind CSS. Make it clean and professional. Dark background (slate-900) with white text. Indigo accent color for buttons.
\`\`\`

Claude Code will write the entire component. Check your browser — you should see a complete landing page.

## Iterating

It probably won't be perfect on the first try. That's normal. Iterate:

\`\`\`prompt
Make the headline larger — text-5xl on mobile, text-6xl on desktop
\`\`\`

\`\`\`prompt
Add more spacing between sections — at least py-24 for each section
\`\`\`

\`\`\`prompt
Make the nav bar have a blur effect — bg-bg/80 backdrop-blur-md
\`\`\`

\`\`\`prompt
The CTA button should be rounded-full with px-7 py-3
\`\`\`

Each prompt makes one small improvement. This is how you work with Claude Code — big initial prompt, then small refinements.

## Creating a Logo Component

Let's make the logo reusable:

\`\`\`prompt
Create a Logo component at src/components/logo.tsx that displays "Claude Course" in bold text. It should accept a "size" prop (default or small) and a "variant" prop (dark or light). Import and use it in the landing page nav and footer.
\`\`\`

Now you have a reusable component. When you change the logo, it updates everywhere.

## Mobile Responsiveness

Ask Claude Code to check mobile:

\`\`\`prompt
Review the landing page for mobile responsiveness. Fix any issues — make sure everything stacks properly on small screens, text is readable, and buttons are easy to tap.
\`\`\`

Claude Code will adjust the responsive classes. Check your browser at different widths (or use the device toolbar in dev tools).

## What to Do Now

- Build the landing page with one big prompt
- Iterate at least 5 times to refine it
- Create the Logo component
- Verify it looks good on mobile
- Commit your changes: ask Claude Code to \`git add . && git commit -m "add landing page"\``,
    },
  });

  await prisma.lesson.create({
    data: {
      moduleId: module2.id,
      title: "Database Setup",
      subtitle: "Connecting Neon PostgreSQL with Prisma",
      readTime: "12 min read",
      order: 6,
      content: `Your landing page looks good, but it's static. There's no data behind it. Time to add a database.

## What Is a Database

A database is where your app stores information: users, lessons, progress, settings. Think of it as a spreadsheet that your app can read and write to automatically.

We're using:
- **PostgreSQL** — the actual database (where data lives)
- **Neon** — hosts the PostgreSQL database in the cloud (free tier)
- **Prisma** — talks to the database from your app (the translator)

## Set Up Neon

1. Go to [neon.tech](https://neon.tech) and create a free account
2. Create a new project (call it anything)
3. Copy the connection string — it looks like \`postgresql://user:pass@host/dbname\`

## Create Your .env File

In your project root, create a file called \`.env\`:

\`\`\`prompt
Create a .env file with a DATABASE_URL variable. Set it to this placeholder: postgresql://user:password@host/database?sslmode=require
\`\`\`

Replace the placeholder with your actual Neon connection string. Make sure your \`.gitignore\` includes \`.env\` (it should by default in Next.js).

## Install and Set Up Prisma

\`\`\`prompt
Install Prisma and set it up for PostgreSQL. Create a schema with these models:

1. User: id (cuid), name, email (unique, optional), phone (unique, optional), passwordHash, contactMethod, role (default "student"), createdAt
2. Module: id (cuid), title, description, order (unique)
3. Lesson: id (cuid), moduleId (foreign key to Module), title, subtitle, content (text), readTime, order (unique)
4. LessonProgress: id (cuid), userId, lessonId, status (default "not_started"), startedAt, completedAt, timeSpent (default 0), with unique constraint on userId+lessonId

Set up the Prisma client to output to src/generated/prisma. Create a database utility at src/lib/db.ts.
\`\`\`

Claude Code will install the packages, create the schema file, and set up the database connection.

## Run Your First Migration

\`\`\`prompt
Run prisma migrate dev with the name "init" to create the database tables
\`\`\`

This creates the actual tables in your Neon database. You can verify by going to the Neon dashboard and checking the Tables section.

## Create a Seed Script

\`\`\`prompt
Create a seed script at prisma/seed.ts that creates 2 test modules with 2 lessons each. The content can be placeholder text. Add the seed script config to package.json.
\`\`\`

Run it:

\`\`\`bash
npx prisma db seed
\`\`\`

Your database now has data.

## Verify It Works

\`\`\`prompt
Create a temporary test page at src/app/test/page.tsx that queries all modules and lessons from the database and displays them. This is just to verify the database connection works.
\`\`\`

Visit \`localhost:3000/test\` in your browser. If you see your modules and lessons, the database is connected and working.

Delete the test page when you're done — it was just for verification.

## What to Do Now

- Create a Neon database and get the connection string
- Set up Prisma with the schema described above
- Run your first migration
- Create and run a seed script
- Verify the database works with a test query
- Commit: \`git commit -m "add database with Prisma and Neon"\``,
    },
  });

  await prisma.lesson.create({
    data: {
      moduleId: module2.id,
      title: "Authentication",
      subtitle: "Signup, login, and protecting routes",
      readTime: "12 min read",
      order: 7,
      content: `Your platform has a landing page and a database. Now you need to control who can access what. That's authentication.

## What Authentication Does

1. **Signup** — new users create an account
2. **Login** — existing users prove who they are
3. **Sessions** — remember that a user is logged in
4. **Protection** — redirect non-logged-in users away from private pages

## Install iron-session

We're using iron-session for session management. It's simple, secure, and works great with Next.js.

\`\`\`prompt
Install iron-session and bcryptjs (with types). Create an auth utility at src/lib/auth.ts that:
1. Defines a session type with userId and role
2. Has a getSession() function using iron-session with cookies
3. Has a getCurrentUser() function that gets the session and returns the user from the database
4. Uses a SESSION_SECRET from the environment variable

Add SESSION_SECRET to the .env file (generate a random 64-char hex string).
\`\`\`

## Build the Signup Page

\`\`\`prompt
Create a signup page at src/app/signup/page.tsx with:
- Name, email, and password fields
- A submit button
- Form validation (all fields required, email format, password min 8 chars)
- A Server Action that hashes the password, creates the user in the database, creates a session, and redirects to /portal
- Link to login page for existing users
- Clean styling with Tailwind matching our dark theme
\`\`\`

## Build the Login Page

\`\`\`prompt
Create a login page at src/app/login/page.tsx with:
- Email and password fields
- A submit button
- A Server Action that verifies the email exists, checks the password hash, creates a session, and redirects to /portal
- Error messages for wrong email/password
- Link to signup page for new users
- Same styling as the signup page
\`\`\`

## Protect the Portal

\`\`\`prompt
Create a layout at src/app/portal/layout.tsx that:
1. Checks if the user is logged in using getCurrentUser()
2. If not, redirects to /login
3. Shows a nav bar with the logo, the user's name, and a sign-out button
4. The sign-out button should be a Server Action that destroys the session and redirects to /
5. Renders children below the nav
\`\`\`

Now any page inside \`/portal/\` is protected. If you try to visit it without logging in, you get redirected.

## Test the Flow

1. Go to \`localhost:3000/signup\`
2. Create an account with your real email
3. You should be redirected to \`/portal\`
4. Sign out
5. Go to \`/portal\` — you should be redirected to \`/login\`
6. Log in with your credentials
7. You should be back at \`/portal\`

If all that works, authentication is done.

## What to Do Now

- Set up the auth utility with iron-session
- Build the signup page with form validation
- Build the login page with error handling
- Create the protected portal layout
- Test the full signup → portal → logout → login flow
- Commit: \`git commit -m "add authentication with signup, login, and protected routes"\``,
    },
  });

  await prisma.lesson.create({
    data: {
      moduleId: module2.id,
      title: "The Course Portal",
      subtitle: "Displaying modules and tracking progress",
      readTime: "10 min read",
      order: 8,
      content: `You have a database with modules and lessons. You have authentication. Now let's build the main dashboard — the portal page users see after logging in.

## The Portal Dashboard

This page should show:
- A welcome message with the user's name
- Overall progress (X of Y lessons completed)
- A list of all modules with their completion percentage
- A link to the skills directory

\`\`\`prompt
Create the portal page at src/app/portal/page.tsx that:
1. Gets the current user
2. Fetches all modules with their lessons and the user's progress
3. Shows a welcome heading with the user's first name
4. Shows a progress bar with "X of Y lessons" completed
5. Lists each module as a clickable card with title, description, progress bar, and lesson count
6. All modules are accessible (no locking/gating)
7. Include a link to /portal/skills for the skills directory
\`\`\`

## The Module Page

When users click a module, they see its lessons:

\`\`\`prompt
Create a module page at src/app/portal/module/[id]/page.tsx that:
1. Shows the module title, description, and progress
2. Lists all lessons in order
3. Each lesson is clickable and shows: title, subtitle, read time
4. Completed lessons show a checkmark
5. All lessons are accessible regardless of completion order
6. Has a back button to /portal
\`\`\`

## Fetching Data in Server Components

Notice something: we're fetching data directly in the page component. No \`useEffect\`. No loading spinner. No API call.

That's because these are **Server Components**. They run on the server, fetch the data, and send the finished HTML to the browser. It's faster and simpler than client-side fetching.

\`\`\`typescript
// This runs on the server, not in the browser
const modules = await prisma.module.findMany({
  orderBy: { order: "asc" },
  include: {
    lessons: {
      include: {
        progress: { where: { userId: user.userId } },
      },
    },
  },
});
\`\`\`

You can query the database directly because this code never reaches the browser. Clean.

## Testing

1. Log in to your portal
2. You should see the modules from your seed data
3. Click a module — you should see its lessons
4. Nothing should be locked or gated

If the data looks right and navigation works, you're good.

## What to Do Now

- Build the portal dashboard page
- Build the module detail page
- Verify data fetching works correctly
- Click through all modules and lessons
- Commit: \`git commit -m "add portal dashboard and module pages"\``,
    },
  });

  await prisma.lesson.create({
    data: {
      moduleId: module2.id,
      title: "The Lesson Page",
      subtitle: "Reading content and marking lessons complete",
      readTime: "12 min read",
      order: 9,
      content: `The portal shows modules. Modules show lessons. Now we need the page where users actually READ the lesson content and mark it complete.

## The Lesson Viewer

\`\`\`prompt
Create a lesson page at src/app/portal/lesson/[id]/page.tsx that:
1. Shows the lesson title, subtitle, module name, and read time
2. Renders the lesson content (which is stored as plain text with markdown-like formatting)
3. Has a "Mark Complete" button at the bottom
4. Shows "Completed" status if already completed
5. Shows a "Next Lesson" button after completion
6. Has a back button to the module page
7. Tracks when the user starts the lesson (auto-starts on page visit)
\`\`\`

## Content Rendering

Lesson content is stored as plain text in the database. We need to convert it to HTML. Tell Claude Code:

\`\`\`prompt
Add a renderContent function that converts the lesson text to HTML. It should handle:
- ## for headings
- **bold** for bold text
- \\\`code\\\` for inline code
- \\\`\\\`\\\`language for code blocks with a copy button
- > for blockquotes/callouts
- ![alt](url) for images
- Regular paragraphs
\`\`\`

This function takes the raw text and outputs HTML. The lesson page renders it with \`dangerouslySetInnerHTML\`.

## The Mark Complete Button

This needs to be a client component (it has interactivity):

\`\`\`prompt
Create a MarkCompleteButton client component at src/app/portal/lesson/[id]/mark-complete.tsx that:
1. Shows a "Mark as Complete" button
2. On click, sends a POST request to /api/progress with { lessonId, action: "complete" }
3. Shows a loading state while the request is in progress
4. On success, reloads the page to show the completed state
5. Shows an error message if the request fails
\`\`\`

## The Progress API

\`\`\`prompt
Create an API route at src/app/api/progress/route.ts that handles POST requests:
- Verifies the user is authenticated
- For action "start": creates or updates progress to "in_progress"
- For action "complete": creates or updates progress to "completed", records completedAt
- Creates a behavior event for lesson completion
- Returns success/error JSON
\`\`\`

## Styling the Content

Add styles for the lesson content in globals.css:

\`\`\`prompt
Add CSS styles for .lesson-content that makes the rendered content look good:
- h2 headings with proper spacing
- Paragraphs with relaxed line height and muted color
- Code blocks with a dark background, border, and copy button
- Inline code with a subtle background
- Blockquotes with an accent left border
- Images with rounded corners and borders
\`\`\`

## Test the Flow

1. Navigate to a lesson
2. Read the content — it should be well-formatted
3. Click "Mark as Complete"
4. You should see "Completed" and a "Next Lesson" button
5. Go back to the module page — the lesson should show a checkmark
6. Go to the portal — the progress bar should reflect the completion

## What to Do Now

- Build the lesson page with content rendering
- Build the Mark Complete button
- Build the progress API route
- Add lesson content styles to globals.css
- Test the complete flow end-to-end
- Commit: \`git commit -m "add lesson viewer with progress tracking"\``,
    },
  });

  await prisma.lesson.create({
    data: {
      moduleId: module2.id,
      title: "The Skills Directory",
      subtitle: "Building a downloadable resources page",
      readTime: "10 min read",
      order: 10,
      content: `Now for the thing that makes this platform more than just a course — the skills directory. This is where users download Claude Code skills files that make Claude Code an expert in specific things.

## What Are Skills Files

Claude Code skills files are markdown files that you place in your project's \`.claude/\` directory. When Claude Code starts, it reads these files and follows their instructions.

Think of them as cheat codes. Drop in the "Next.js Expert" skill file, and Claude Code writes better Next.js code. Drop in the "Email Copywriter" skill, and it writes better emails.

The skills directory is your upsell. The course is free. The skills make people sign up.

## Build the Skills Page

\`\`\`prompt
Create a skills page at src/app/portal/skills/page.tsx that:
1. Shows a heading "Skills Directory" with an explanation of what skills files are
2. Lists skills organized by category: Development, Marketing, Business, Claude Code
3. Each skill shows: name, description, and a download button
4. Each category has a distinct color (indigo, cyan, emerald, violet)
5. At the bottom, show instructions on how to install a skill file
6. The data can be hardcoded — we have 20 skills across 4 categories
\`\`\`

## The Download API

Skills are stored as .md files in the \`public/skills/\` directory. We need an API route that serves them:

\`\`\`prompt
Create an API route at src/app/api/skills/download/route.ts that:
1. Checks if the user is authenticated (returns 401 if not)
2. Takes a "skill" query parameter (the slug)
3. Sanitizes the slug (only alphanumeric and hyphens)
4. Reads the file from public/skills/{slug}.md
5. Returns it as a downloadable markdown file
6. Returns 404 if the skill doesn't exist
\`\`\`

## Add Nav Link

Make the skills directory easily accessible:

\`\`\`prompt
Add a "Skills" link to the portal nav bar in the layout, between the user's name and the sign-out button
\`\`\`

## Why Gate It Behind Auth

Someone might ask: "Why not make the skills files publicly downloadable?"

Because the skills directory is the incentive to sign up. The course is free. The skills are free too — but you need an account. That account goes into your database. That person enters your nurture sequence. That's how free products make money.

## How to Use a Skill File

When someone downloads a skill file:

1. Create a \`.claude/\` folder in their project root
2. Drop the \`.md\` file inside
3. Start Claude Code in that project
4. Claude Code automatically reads the skill and follows its instructions

That's it. No configuration. No setup. Just drop and go.

## What to Do Now

- Build the skills page with all 20 skills
- Build the download API route
- Add the nav link to the portal layout
- Test downloading a skill file
- Verify the download is gated behind auth (try accessing while logged out)
- Commit: \`git commit -m "add skills directory with auth-gated downloads"\``,
    },
  });

  console.log("Created Module 2 lessons (Building: 6 lessons).\n");

  // ════════════════════════════════════════════════
  // MODULE 3: AUTOMATING (Lessons 11-14)
  // ════════════════════════════════════════════════

  await prisma.lesson.create({
    data: {
      moduleId: module3.id,
      title: "Email Nurture",
      subtitle: "Keeping users engaged with automated emails",
      readTime: "12 min read",
      order: 11,
      content: `Your platform is functional. People can sign up, take lessons, and download skills. But what happens when they sign up and forget about you? That's where email nurture comes in.

## What Is a Nurture Sequence

A nurture sequence is a series of automated emails that go out based on what a user does (or doesn't do). Examples:

- **Welcome email**: Sent immediately after signup. "Hey, welcome. Here's what to do first."
- **Progress nudge**: Sent 2 days after signup if they haven't started. "You haven't started yet. Lesson 1 takes 8 minutes."
- **Stall check**: Sent 5 days after last activity. "You were making progress. Pick up where you left off."
- **Completion congrats**: Sent when they finish the course. "You built a whole damn platform. Nice."

## Set Up Resend

We're using Resend for email delivery. It's simple, has a good free tier, and the API takes 2 minutes to set up.

1. Create an account at [resend.com](https://resend.com)
2. Get your API key
3. Add it to your .env: \`RESEND_API_KEY=re_xxxxx\`

\`\`\`prompt
Install the Resend package and create an email utility at src/lib/email.ts that:
1. Creates a Resend client using the API key from env
2. Has a sendEmail function that takes: to, subject, html
3. Has a sendWelcomeEmail function that sends a welcome email
4. Returns success/error
\`\`\`

## Database Models for Nurture

The database already has models for nurture (NurtureTemplate, Automation, AutomationStep, SendLog). Let's use them.

\`\`\`prompt
Create a nurture engine at src/lib/nurture-engine.ts that:
1. Has a function to resolve template variables (firstName, lessonsCompleted, etc.)
2. Has a function to trigger automations based on events (signup, lesson_complete, stall_check)
3. Checks if the user has already received a specific template (dedup)
4. Sends the email via Resend
5. Logs the send in the SendLog table
\`\`\`

## Create Email Templates

\`\`\`prompt
Create a seed script for nurture templates that creates:
1. "welcome" — Welcome to Claude Course, here's what to do first
2. "lesson-nudge" — You signed up but haven't started, lesson 1 takes 8 minutes
3. "stall-check" — You were making progress, pick up where you left off
4. "halfway" — You're halfway through! Here's what's coming next
5. "course-complete" — You built a whole platform. Here's what to do now

Each template should have: slug, name, channel (email), subject, body (with variable placeholders)
\`\`\`

## Trigger on Signup

\`\`\`prompt
In the signup Server Action, after creating the user and session, trigger the welcome automation. Fire and forget — don't wait for the email to send before redirecting.
\`\`\`

## The Meta Angle

Here's the fun part: this email system is the same one that's emailing YOU about THIS course. The welcome email you got when you signed up? Built with this exact code. The nudge email you'll get if you don't log in for 3 days? Same system.

You're building the machine that's currently working on you. That's the meta angle.

## What to Do Now

- Set up Resend and add the API key to .env
- Build the email utility
- Build the nurture engine
- Create email templates with the seed script
- Trigger the welcome email on signup
- Send a test email to yourself
- Commit: \`git commit -m "add email nurture system with Resend"\``,
    },
  });

  await prisma.lesson.create({
    data: {
      moduleId: module3.id,
      title: "Behavior Tracking",
      subtitle: "Knowing what users do for smarter automation",
      readTime: "10 min read",
      order: 12,
      content: `Your nurture system can send emails. But how does it know WHEN to send them? That's behavior tracking.

## What to Track

Every meaningful action a user takes gets recorded as a behavior event:

- \`signup\` — when they create an account
- \`login\` — when they sign in
- \`lesson_start\` — when they open a lesson
- \`lesson_complete\` — when they finish a lesson
- \`skill_download\` — when they download a skill file
- \`page_view\` — which pages they visit

You're not being creepy. You're being helpful. The difference is what you do with the data: send relevant content, not spam.

## The Tracking Utility

\`\`\`prompt
Create a tracking utility at src/lib/tracking.ts that:
1. Has a trackEvent function that takes userId, event type, and optional metadata
2. Creates a BehaviorEvent record in the database
3. Is async but fire-and-forget (don't await it in the main flow)
\`\`\`

## Where to Track

Add tracking calls to these places:

\`\`\`prompt
Add behavior event tracking to:
1. Signup Server Action — track "signup" event
2. Login Server Action — track "login" event
3. Lesson page (server component) — track "lesson_start" with lessonId
4. Progress API (complete action) — track "lesson_complete" with lessonId and order
5. Skills download API — track "skill_download" with skill slug
\`\`\`

## Time Tracking

Track how long users spend on each lesson:

\`\`\`prompt
Create a LessonTracker client component that:
1. Starts a timer when the component mounts
2. Every 30 seconds, sends a heartbeat to /api/progress with { lessonId, action: "heartbeat", seconds: X }
3. Updates the timeSpent field on the LessonProgress record
4. Cleans up the interval on unmount
5. Include it in the lesson page
\`\`\`

This data tells you which lessons take too long (maybe they need simplifying) and which ones people spend no time on (maybe they're too easy or being skipped).

## Using Events for Automation

Now your nurture engine can make smart decisions:

- User signed up 3 days ago + 0 lessons started → Send the nudge email
- User completed lesson 8 → Send the halfway email
- User hasn't logged in for 5 days → Send the stall check
- User completed all lessons → Send the completion email

\`\`\`prompt
Create a stall check function that:
1. Finds users whose last behavior event was more than 3 days ago
2. Who haven't completed the course
3. Who haven't received a stall check email in the last 7 days
4. Sends them the stall-check template
\`\`\`

## Privacy

Track what helps the user. Don't track what doesn't. Some guidelines:

- DO track lesson progress (helps them see their progress)
- DO track time spent (helps you improve content)
- DON'T track mouse movements or scroll depth (creepy)
- DON'T share tracking data with third parties
- DO tell users what you track (transparency builds trust)

## What to Do Now

- Create the tracking utility
- Add tracking to signup, login, lessons, and skills download
- Add the time tracker component to the lesson page
- Create the stall check function
- Verify events are being recorded in the database
- Commit: \`git commit -m "add behavior tracking for smart automation"\``,
    },
  });

  await prisma.lesson.create({
    data: {
      moduleId: module3.id,
      title: "Admin Panel",
      subtitle: "Your command center for managing the platform",
      readTime: "12 min read",
      order: 13,
      content: `You have users, lessons, events, and emails. You need a place to see all of it. That's the admin panel.

## Admin Access

First, protect the admin routes:

\`\`\`prompt
Create an admin layout at src/app/portal/admin/layout.tsx that:
1. Checks if the current user has role "admin"
2. If not, redirects to /portal
3. Shows admin navigation tabs: Dashboard, Users, Templates, Settings
4. Renders children below the nav
\`\`\`

To make yourself an admin, update your user record in the database:

\`\`\`prompt
Create a quick script or one-liner to update my user role to "admin" in the database. My email is [your email].
\`\`\`

## The Dashboard

\`\`\`prompt
Create an admin dashboard at src/app/portal/admin/page.tsx that shows:
1. Total users (with count)
2. Active users (logged in within 7 days)
3. Average completion rate (percentage of lessons completed)
4. Total lessons completed
5. Recent signups (last 5 users with name, email, signup date)
6. A simple bar showing completion by module
\`\`\`

## User Management

\`\`\`prompt
Create a users page at src/app/portal/admin/users/page.tsx that:
1. Lists all users with: name, email, signup date, lessons completed, last active
2. Sortable by date or progress
3. Each user links to a detail page showing their full progress and events
\`\`\`

## Template Management

\`\`\`prompt
Create a templates page at src/app/portal/admin/templates/page.tsx that:
1. Lists all nurture templates with: name, channel, trigger, send count
2. Click to edit a template (name, subject, body)
3. Has a "New Template" button
4. Shows a preview of the template with sample data
\`\`\`

## Settings

\`\`\`prompt
Create a settings page at src/app/portal/admin/settings/page.tsx that:
1. Has configurable settings stored in the database (using the Setting model)
2. Settings: NEXT_PUBLIC_SITE_URL, EMAIL_FROM, BOOKING_URL
3. Each setting has a label, value input, and save button
4. Changes save immediately to the database
\`\`\`

## What the Admin Panel Tells You

Your admin panel answers these questions:
- Are people signing up? (total users, recent signups)
- Are they engaging? (active users, completion rate)
- Where do they drop off? (completion by module)
- Are emails working? (send logs in template management)
- Who needs help? (stalled users in the user list)

Don't add features you won't check. A simple admin panel you use daily beats a fancy one you ignore.

## What to Do Now

- Build the admin layout with role-based access
- Build the dashboard with key metrics
- Build the users management page
- Build the templates management page
- Build the settings page
- Make yourself an admin and test everything
- Commit: \`git commit -m "add admin panel with dashboard, users, templates, and settings"\``,
    },
  });

  await prisma.lesson.create({
    data: {
      moduleId: module3.id,
      title: "SEO and Metadata",
      subtitle: "Getting found by search engines",
      readTime: "10 min read",
      order: 14,
      content: `Your platform works. People can use it. But how do they FIND it? That's SEO — Search Engine Optimization. It's how Google decides to show your site when someone searches for "learn Claude Code."

## Metadata in Next.js

Next.js makes SEO easy. You export a \`metadata\` object from any page:

\`\`\`prompt
Update the root layout at src/app/layout.tsx to include comprehensive metadata:
1. Title template: "Page Title | Claude Course"
2. Default title for the home page
3. Description mentioning "free Claude Code course" and "build by doing"
4. Keywords array with relevant search terms
5. Open Graph data (title, description, image, url, type)
6. Twitter card data
7. Robots: index and follow
8. metadataBase pointing to your domain
\`\`\`

## Open Graph Image

When someone shares your site on Twitter or LinkedIn, the OG image is what shows up. Make it count.

\`\`\`prompt
Create an OG image generator at src/app/opengraph-image.tsx that:
1. Uses Next.js ImageResponse for dynamic generation
2. Shows the site name, headline, and a CTA
3. Uses your brand colors (dark slate background, light text)
4. Is 1200x630 pixels
5. Renders as an edge function
\`\`\`

## Sitemap

A sitemap tells search engines what pages exist on your site:

\`\`\`prompt
Create a sitemap at src/app/sitemap.ts that returns:
1. The homepage with weekly change frequency and priority 1
2. Any other public pages
\`\`\`

## Robots.txt

Tell search engines what to index and what to skip:

\`\`\`prompt
Create a robots.txt in the public/ folder that:
1. Allows crawling of the homepage
2. Blocks /portal/ (private content)
3. Blocks /api/ (not for search engines)
4. Blocks /login and /signup
5. Points to the sitemap URL
\`\`\`

## Structured Data

Add JSON-LD structured data so Google understands your content:

\`\`\`prompt
Add structured data to the root layout:
1. Course schema (schema.org/Course) with name, description, provider, isAccessibleForFree
2. WebSite schema with name and URL
3. Include in a script tag with type="application/ld+json"
\`\`\`

## Testing Your SEO

After implementing:

1. Run \`npm run build\` — check for metadata warnings
2. View page source and verify meta tags are present
3. Test your OG image at [opengraph.xyz](https://www.opengraph.xyz/)
4. Check \`/sitemap.xml\` loads correctly
5. Check \`/robots.txt\` loads correctly
6. Use Google's Rich Results Test for structured data

## What to Do Now

- Update metadata in the root layout
- Create the OG image generator
- Create the sitemap
- Create/update robots.txt
- Add structured data
- Test everything with the tools mentioned above
- Commit: \`git commit -m "add SEO metadata, OG image, sitemap, and structured data"\``,
    },
  });

  console.log("Created Module 3 lessons (Automating: 4 lessons).\n");

  // ════════════════════════════════════════════════
  // MODULE 4: LAUNCHING (Lessons 15-16)
  // ════════════════════════════════════════════════

  await prisma.lesson.create({
    data: {
      moduleId: module4.id,
      title: "Deploying to Vercel",
      subtitle: "Shipping your platform to the internet",
      readTime: "12 min read",
      order: 15,
      content: `Everything works locally. Time to put it on the internet where actual people can use it.

## Push to GitHub

First, your code needs to be on GitHub:

\`\`\`prompt
Create a new GitHub repository called "my-course-platform" and push the local repo to it. Use the gh CLI if available, otherwise give me the manual commands.
\`\`\`

If you don't have the GitHub CLI, here's the manual way:

1. Go to [github.com/new](https://github.com/new)
2. Create a repo called "my-course-platform" (don't initialize with README)
3. Copy the commands GitHub gives you and run them in your terminal

\`\`\`bash
git remote add origin https://github.com/YOUR_USERNAME/my-course-platform.git
git branch -M main
git push -u origin main
\`\`\`

## Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and sign up with GitHub
2. Click "New Project"
3. Import your GitHub repo
4. Vercel auto-detects it's Next.js — leave the defaults
5. Before deploying, add your environment variables:

Click "Environment Variables" and add:
- \`DATABASE_URL\` — your Neon connection string
- \`SESSION_SECRET\` — the same one from your .env
- \`RESEND_API_KEY\` — your Resend API key

6. Click "Deploy"

Vercel builds your project and gives you a URL like \`my-course-platform.vercel.app\`. That's your live site.

## Custom Domain

If you have a domain:

1. Go to your Vercel project settings → Domains
2. Add your domain
3. Update your DNS records as Vercel tells you
4. Wait for SSL to provision (automatic, takes a few minutes)

If you don't have a domain, the \`.vercel.app\` URL works fine for now.

## Verify Everything Works

On your live URL, test:
1. Landing page loads and looks correct
2. Signup creates an account
3. Login works
4. Portal shows modules and lessons
5. Lessons render content correctly
6. Mark complete works
7. Skills page shows skills and download works
8. Admin panel accessible (if you're an admin)
9. OG image generates (share the URL somewhere)
10. Sitemap at /sitemap.xml loads

## Database Migrations

Your database already has the tables from development. But if you make schema changes in the future:

\`\`\`bash
npx prisma migrate deploy
\`\`\`

This runs pending migrations in production. Add it to your build command in package.json if you want it to run automatically on deploy.

## Continuous Deployment

Here's the best part: every time you push to the \`main\` branch on GitHub, Vercel automatically rebuilds and deploys your site. Change a lesson, push to GitHub, and it's live in 2 minutes.

## What to Do Now

- Push your code to GitHub
- Deploy on Vercel
- Add environment variables
- Test everything on the live URL
- Optional: connect a custom domain
- Celebrate — your platform is live on the internet`,
    },
  });

  await prisma.lesson.create({
    data: {
      moduleId: module4.id,
      title: "What Now",
      subtitle: "Scaling, making money, and building more",
      readTime: "8 min read",
      order: 16,
      content: `You did it. You built a full course platform from scratch using Claude Code. A database, authentication, a lesson viewer, email automation, an admin panel, a skills directory, SEO, and deployment. All of it.

Let that sink in for a second.

## What You Built

Look at the list:
- Next.js 15 application with App Router
- PostgreSQL database with Prisma ORM
- User authentication with session management
- Course portal with modules and lessons
- Progress tracking per user
- Skills directory with auth-gated downloads
- Email nurture system with Resend
- Behavior event tracking
- Admin panel with analytics
- SEO optimization with structured data
- Production deployment on Vercel

That's not a tutorial project. That's a production application. And you built it by describing what you wanted to an AI.

## Adding More Content

Lessons are just database rows. To add more:
1. Write the content
2. Add it to your seed script (or create directly via admin panel)
3. Run the seed or create through the UI
4. It's live instantly

Same with skills files — drop a new .md file in \`public/skills/\`, add it to the skills page, done.

## Driving Traffic

Your platform exists. Now people need to find it. Here's what actually works:

**Twitter/X:**
Build in public. Share your progress. Post the lessons you're writing. Show screenshots of the platform. People love watching things get built.

**Reddit:**
Find relevant subreddits (r/ClaudeAI, r/webdev, r/SideProject, r/learnprogramming). Share genuinely useful content, not just links. Answer questions with real knowledge from building this.

**Communities:**
Indie Hackers, Hacker News, Product Hunt. Each has its own culture. Lurk before you post. Provide value before promoting.

**SEO:**
Your sitemap and metadata are set up. Write blog posts targeting "learn Claude Code", "Claude Code tutorial", "build with Claude Code". Organic traffic compounds over time.

## The Skills Directory as Revenue

The course is free. The skills are free with signup. But there are ways to monetize:

1. **Premium skills**: Charge for advanced skill sets (complete workflow automations, multi-file skills)
2. **Done-for-you service**: Customize the platform for clients
3. **Community/cohort**: Charge for a live version of the course with support
4. **Consulting**: You now know how to build with Claude Code — charge for that knowledge

The free course builds trust. The skills directory captures emails. The premium tier makes money.

## Building More Things

The most important thing you learned isn't Next.js or Prisma or Tailwind. It's how to work with Claude Code.

You can now:
- Build a SaaS product
- Build a marketing site
- Build an internal tool
- Build a mobile app (with React Native)
- Automate your workflows
- Create content at scale

The pattern is always the same:
1. Describe what you want
2. Let Claude Code build it
3. Iterate until it's right
4. Deploy

## What to Do Now

- Write 3 social media posts about what you built
- Share your live URL in one community today
- Plan your next 5 lessons or skills to add
- Start thinking about your next project
- Leave feedback on this course — it helps us improve

You know how to build. Go build something.`,
    },
  });

  console.log("Created Module 4 lessons (Launching: 2 lessons).\n");

  // ─── Settings ───
  await prisma.setting.deleteMany();

  await prisma.setting.createMany({
    data: [
      { key: "NEXT_PUBLIC_SITE_URL", value: "https://claudecourse.wtf", label: "Site URL", group: "general" },
      { key: "EMAIL_FROM", value: "Claude Course <hello@claudecourse.wtf>", label: "Email From", group: "email" },
      { key: "BOOKING_URL", value: "https://calendly.com", label: "Booking URL", group: "booking" },
    ],
  });

  console.log("Created settings.\n");
  console.log("Done! Seeded 4 modules with 16 lessons + settings.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
