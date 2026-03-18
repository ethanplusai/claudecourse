import type { Metadata } from "next";
import Link from "next/link";
import { Logo } from "@/components/logo";

export const metadata: Metadata = {
  title: "The Client Engine — Free AI Course: Learn Claude by Building",
  description:
    "Learn Claude Code by building a fully automated client acquisition system. Free hands-on course — no coding experience needed. Build a real platform that generates leads and books calls on autopilot.",
  alternates: {
    canonical: "https://clients.wtf",
  },
};

const features = [
  {
    title: "Built With Claude",
    description:
      "This entire platform was built with Claude Code. You'll use the same tool to build yours.",
  },
  {
    title: "Learn AI By Doing",
    description:
      "No theory. No tutorials. You learn Claude by building a real system that actually makes money.",
  },
  {
    title: "Your Own Platform",
    description:
      "Download the boilerplate, customize it with Claude Code, and deploy your own lead generation machine.",
  },
  {
    title: "Automated Nurture",
    description:
      "Behavior-based email and SMS sequences that warm leads and book calls without you lifting a finger.",
  },
  {
    title: "Zero Coding Experience",
    description:
      "Claude Code writes the code. You shape the direction. No dev skills required.",
  },
  {
    title: "Done-For-You Option",
    description:
      "Don't want to build it yourself? We'll deploy the entire system for you.",
  },
];

const modules = [
  { num: 1, title: "Foundations of The Client Engine", lessons: 5 },
  { num: 2, title: "Building Your Lead Magnet", lessons: 5 },
  { num: 3, title: "The Nurture Engine", lessons: 5 },
  { num: 4, title: "Calendar and Booking", lessons: 4 },
  { num: 5, title: "Traffic and Outreach", lessons: 5 },
  { num: 6, title: "Launch, Optimize, and Scale", lessons: 4 },
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
            Free &middot; No Bullshit &middot; Implementation-First
          </p>

          <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] tracking-tight mb-6 text-text">
            Learn Claude by building a system that gets you clients
          </h1>

          <p className="text-lg text-text-muted leading-relaxed max-w-xl mx-auto mb-10">
            A free, hands-on course where you use Claude Code to build a fully
            automated client acquisition platform — and learn the most
            important skill in business right now.
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
              100% free &middot; No credit card
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
              A real business asset — built entirely with Claude
            </h2>
            <p className="text-text-muted leading-relaxed">
              By the end of this course, you&apos;ll have your own automated
              lead generation platform live and running. You&apos;ll also know
              how to use Claude Code to build damn near anything.
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
              You&apos;re inside the product right now
            </h2>
            <p className="text-text-muted max-w-lg mx-auto">
              This platform — the one you&apos;re looking at — was built with
              Claude Code. You&apos;ll download a copy, customize it for your
              business, and deploy it as your own lead magnet.
            </p>
          </div>

          <div className="space-y-4 mb-14">
            <div className="flex gap-4 items-start">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-accent text-white text-xs font-medium flex items-center justify-center mt-0.5">
                1
              </span>
              <div>
                <p className="font-medium text-sm">Learn the system</p>
                <p className="text-sm text-text-muted">
                  Go through the course. Understand how automated acquisition
                  works and why this approach beats everything else.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-accent text-white text-xs font-medium flex items-center justify-center mt-0.5">
                2
              </span>
              <div>
                <p className="font-medium text-sm">Build with Claude Code</p>
                <p className="text-sm text-text-muted">
                  Download the boilerplate. Use Claude Code to customize it for
                  your audience — branding, content, nurture sequences, everything.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-accent text-white text-xs font-medium flex items-center justify-center mt-0.5">
                3
              </span>
              <div>
                <p className="font-medium text-sm">Deploy and grow</p>
                <p className="text-sm text-text-muted">
                  Launch your platform. Drive traffic to it. Watch it qualify
                  leads and book calls on autopilot while you sleep.
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
              6 modules. 28 lessons. One weekend.
            </h2>
            <p className="text-text-muted">
              Sequential modules that build on each other. No skipping ahead.
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
                <p className="flex-1 font-medium text-sm">{m.title}</p>
                <span className="text-xs text-text-light flex-shrink-0">
                  {m.lessons} lessons
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 px-6 bg-bg-elevated">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-semibold tracking-tight mb-4">
            Stop watching tutorials.
            <br />
            Build something real.
          </h2>
          <p className="text-text-muted mb-8 leading-relaxed">
            Learn Claude by building a system that actually generates revenue.
            No fluff. No theory. Just execution.
          </p>
          <div className="flex flex-col items-center gap-3">
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 bg-accent text-white font-medium px-7 py-3 rounded-full hover:bg-accent-hover transition-colors"
            >
              Access Free Training
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
              100% free &middot; No credit card
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
            &copy; {new Date().getFullYear()} The Client Engine
          </p>
        </div>
      </footer>
    </div>
  );
}
