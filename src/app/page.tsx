import type { Metadata } from "next";
import Link from "next/link";
import { Logo } from "@/components/logo";

export const metadata: Metadata = {
  title: "Claude Course — Free Course: Learn Claude Code by Building",
  description:
    "Learn Claude Code by building this exact platform from scratch. 16 lessons, 20 downloadable skills files, no experience needed. Free.",
  alternates: {
    canonical: "https://claudecourse.dev",
  },
};

const features = [
  {
    title: "Build This Exact Site",
    description:
      "This course platform? You build it. From scratch. Using nothing but Claude Code.",
  },
  {
    title: "Learn By Doing",
    description:
      "No theory. No tutorials. Every lesson has you build a real piece of the platform you're learning on.",
  },
  {
    title: "20 Skills Files",
    description:
      "Download Claude Code skills files that make it an expert in Next.js, Prisma, email copy, SEO, and more.",
  },
  {
    title: "Zero Experience Needed",
    description:
      "We start with 'what is a terminal' and end with a deployed app. Claude Code writes the code.",
  },
  {
    title: "Full Stack in 16 Lessons",
    description:
      "Database, auth, email automation, admin panel, deployment. All built with Claude Code. All yours.",
  },
  {
    title: "Skills Directory",
    description:
      "20 pre-built skills files across dev, marketing, business, and Claude Code power user categories.",
  },
];

const modules = [
  { num: 1, title: "Getting Started", lessons: 4, desc: "Install Claude Code, first conversation, project setup" },
  { num: 2, title: "Building", lessons: 6, desc: "Landing page, database, auth, portal, lessons, skills" },
  { num: 3, title: "Automating", lessons: 4, desc: "Email nurture, tracking, admin panel, SEO" },
  { num: 4, title: "Launching", lessons: 2, desc: "Deploy to Vercel, scale and grow" },
];

const skillCategories = [
  {
    name: "Development",
    skills: ["Next.js Expert", "Prisma Database", "Tailwind UI", "TypeScript Strict", "Debugging"],
    color: "text-accent",
  },
  {
    name: "Marketing",
    skills: ["Email Copy", "Landing Pages", "SEO", "Content", "Analytics"],
    color: "text-accent",
  },
  {
    name: "Business",
    skills: ["Offer Design", "Audience Research", "Competitors", "Project Scoping", "Sales Pages"],
    color: "text-accent",
  },
  {
    name: "Claude Code",
    skills: ["Project Bootstrap", "Code Review", "Refactoring", "Testing", "DevOps"],
    color: "text-accent",
  },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-bg">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur-md border-b border-border">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Logo />
          <div className="flex items-center gap-4">
            <Link
              href="/login"
              className="text-sm text-text-muted hover:text-text transition-colors"
            >
              Sign in
            </Link>
            <Link
              href="/signup"
              className="bg-text text-bg font-medium text-sm px-5 py-2 rounded-full hover:bg-text/90 transition-colors"
            >
              Start Free
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-44 pb-28 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm font-medium text-text-muted tracking-wide uppercase mb-6">
            Free &middot; 16 Lessons &middot; 20 Skills Files
          </p>

          <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] tracking-tight mb-4 text-text">
            Learn Claude Code by building a real product
          </h1>

          <p className="text-xl text-text-muted leading-relaxed max-w-xl mx-auto mb-2">
            ...by building this exact course platform from scratch.
          </p>

          <p className="text-base text-text-light leading-relaxed max-w-lg mx-auto mb-10">
            A free, hands-on course. No experience needed. Just Claude Code and your keyboard. You end with a deployed app.
          </p>

          <div className="flex flex-col items-center gap-3">
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 bg-accent text-white font-medium px-7 py-3 rounded-full hover:bg-accent-hover transition-colors"
            >
              Start Building
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
            <span className="text-sm text-text-light">
              100% free
            </span>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="border-t border-border" />
      </div>

      {/* What You'll Build */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-xl mb-14">
            <p className="text-sm font-medium text-accent mb-3">
              What you&apos;ll build
            </p>
            <h2 className="text-3xl font-semibold tracking-tight mb-4">
              You&apos;re looking at what you&apos;ll build
            </h2>
            <p className="text-text-muted leading-relaxed">
              This course platform — the database, the auth, the lesson viewer,
              the email automation, the admin panel — you build all of it. With
              Claude Code. By the end, it&apos;s deployed and live.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden">
            {features.map((f) => (
              <div key={f.title} className="bg-bg-card p-7">
                <h3 className="font-semibold text-sm mb-2">{f.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-6 bg-bg-elevated">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm font-medium text-accent mb-3">How it works</p>
            <h2 className="text-3xl font-semibold tracking-tight mb-4">
              Every lesson builds a piece of the platform
            </h2>
            <p className="text-text-muted max-w-lg mx-auto">
              You learn Claude Code by using it. Each lesson teaches one thing and
              has you build one part of this course platform.
            </p>
          </div>

          <div className="space-y-4 mb-14">
            <div className="flex gap-4 items-start">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-accent text-white text-xs font-medium flex items-center justify-center mt-0.5">
                1
              </span>
              <div>
                <p className="font-medium text-sm">Install Claude Code</p>
                <p className="text-sm text-text-muted">
                  We start from zero. What&apos;s a terminal? How do you install
                  things? You&apos;ll be up and running in 10 minutes.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-accent text-white text-xs font-medium flex items-center justify-center mt-0.5">
                2
              </span>
              <div>
                <p className="font-medium text-sm">Build the platform</p>
                <p className="text-sm text-text-muted">
                  Each lesson has you build one feature — landing page, database,
                  auth, lesson viewer, skills directory, email system.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-accent text-white text-xs font-medium flex items-center justify-center mt-0.5">
                3
              </span>
              <div>
                <p className="font-medium text-sm">Deploy and own it</p>
                <p className="text-sm text-text-muted">
                  Push to GitHub, deploy on Vercel. You now have a live course
                  platform and know how to build anything with Claude Code.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm font-medium text-accent mb-3">
              The curriculum
            </p>
            <h2 className="text-3xl font-semibold tracking-tight mb-4">
              4 modules. 16 lessons. One real product.
            </h2>
            <p className="text-text-muted">
              All lessons unlocked after signup. Go at your own pace.
            </p>
          </div>

          <div className="space-y-2">
            {modules.map((m) => (
              <div
                key={m.num}
                className="flex items-center gap-5 bg-bg-card border border-border rounded-xl px-6 py-4"
              >
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-bg-elevated text-text-muted text-xs font-medium flex items-center justify-center">
                  {m.num}
                </span>
                <div className="flex-1">
                  <p className="font-medium text-sm">{m.title}</p>
                  <p className="text-xs text-text-light">{m.desc}</p>
                </div>
                <span className="text-xs text-text-light flex-shrink-0">
                  {m.lessons} lessons
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Directory */}
      <section className="py-24 px-6 bg-bg-elevated">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm font-medium text-accent mb-3">
              Bonus: Skills directory
            </p>
            <h2 className="text-3xl font-semibold tracking-tight mb-4">
              20 skills files. Drop in. Level up.
            </h2>
            <p className="text-text-muted max-w-lg mx-auto">
              Claude Code skills files are like cheat codes. Drop them in your
              project and Claude Code becomes an expert in that thing.
              Free with signup.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {skillCategories.map((cat) => (
              <div
                key={cat.name}
                className="bg-bg-card border border-border rounded-xl p-6"
              >
                <h3 className={`font-semibold text-sm mb-3 ${cat.color}`}>
                  {cat.name}
                </h3>
                <ul className="space-y-1.5">
                  {cat.skills.map((skill) => (
                    <li key={skill} className="text-sm text-text-muted flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-text-light flex-shrink-0" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 bg-accent text-white font-medium px-6 py-2.5 rounded-full hover:bg-accent-hover transition-colors text-sm"
            >
              Get All 20 Skills Files
            </Link>
          </div>
        </div>
      </section>

      {/* Meta Angle */}
      <section className="py-24 px-6">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-sm font-medium text-accent mb-3">The meta part</p>
          <h2 className="text-3xl font-semibold tracking-tight mb-4">
            This entire site was built with Claude Code
          </h2>
          <p className="text-text-muted leading-relaxed">
            We&apos;re not just teaching you to use Claude Code. We used it to
            build this course. Every page, every component, every email template.
            That&apos;s what you&apos;re about to learn to do.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 px-6 bg-bg-elevated">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-semibold tracking-tight mb-4">
            Stop watching tutorials.
            <br />
            Start building.
          </h2>
          <p className="text-text-muted mb-8 leading-relaxed">
            16 lessons. 20 skills files. One real product. Free.
          </p>
          <div className="flex flex-col items-center gap-3">
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 bg-accent text-white font-medium px-7 py-3 rounded-full hover:bg-accent-hover transition-colors"
            >
              Start the Course
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
            <span className="text-sm text-text-light">
              100% free
            </span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-10 px-6">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <span className="opacity-40">
            <Logo size="small" />
          </span>
          <p className="text-xs text-text-light">
            &copy; {new Date().getFullYear()} Claude Course
          </p>
        </div>
      </footer>
    </div>
  );
}
