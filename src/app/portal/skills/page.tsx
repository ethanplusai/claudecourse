import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills Directory",
};

interface Skill {
  slug: string;
  name: string;
  description: string;
}

interface SkillCategory {
  name: string;
  color: string;
  bgColor: string;
  skills: Skill[];
}

const categories: SkillCategory[] = [
  {
    name: "Development",
    color: "text-indigo-400",
    bgColor: "bg-indigo-500/10",
    skills: [
      {
        slug: "nextjs-expert",
        name: "Next.js 15 Expert",
        description:
          "App Router, Server Components, Server Actions, middleware, dynamic routes. Best practices by default.",
      },
      {
        slug: "prisma-database",
        name: "Prisma Database Architect",
        description:
          "Schema design, migrations, relations, queries, and performance optimization. No N+1 problems.",
      },
      {
        slug: "tailwind-ui",
        name: "Tailwind UI Builder",
        description:
          "Beautiful, mobile-first interfaces. Proper spacing, typography, responsive breakpoints, dark mode.",
      },
      {
        slug: "typescript-strict",
        name: "TypeScript Strict Mode",
        description:
          "Proper types, no 'any', strict null checks, discriminated unions. Actually maintainable code.",
      },
      {
        slug: "debugging-detective",
        name: "Debugging Detective",
        description:
          "Systematic debugging. Traces errors, reads stack traces, isolates issues, gives actual fixes.",
      },
    ],
  },
  {
    name: "Marketing",
    color: "text-cyan-400",
    bgColor: "bg-cyan-500/10",
    skills: [
      {
        slug: "email-copywriter",
        name: "Email Copywriter",
        description:
          "High-converting email sequences. Welcome, nurture, re-engagement. Sounds human, not robotic.",
      },
      {
        slug: "landing-page-builder",
        name: "Landing Page Builder",
        description:
          "PAS, AIDA, and other copy frameworks that convert. Hero sections that hook, CTAs that get clicks.",
      },
      {
        slug: "seo-optimizer",
        name: "SEO Optimizer",
        description:
          "Meta tags, structured data, content optimization, sitemaps. Current best practices.",
      },
      {
        slug: "content-generator",
        name: "Content Generator",
        description:
          "Blog posts, social media, course material. Matches your voice. Doesn't read like AI slop.",
      },
      {
        slug: "analytics-setup",
        name: "Analytics & Tracking",
        description:
          "PostHog, Plausible, or custom analytics. Event tracking for signups, completions, conversions.",
      },
    ],
  },
  {
    name: "Business",
    color: "text-emerald-400",
    bgColor: "bg-emerald-500/10",
    skills: [
      {
        slug: "offer-designer",
        name: "Offer Designer",
        description:
          "Pricing, packaging, positioning, value stacking. Based on real frameworks, not theory.",
      },
      {
        slug: "audience-researcher",
        name: "Audience Researcher",
        description:
          "Personas, pain points, objection maps, channel strategies. Know who to sell to.",
      },
      {
        slug: "competitor-analyzer",
        name: "Competitor Analyzer",
        description:
          "Competitor breakdowns — offers, pricing, weaknesses, differentiation opportunities.",
      },
      {
        slug: "project-scoper",
        name: "Project Scoper",
        description:
          "Vague ideas into concrete plans. Phases, tasks, dependencies, time estimates. Prevents scope creep.",
      },
      {
        slug: "sales-page-writer",
        name: "Sales Page Writer",
        description:
          "Long-form sales pages. Headlines, problem sections, feature breakdowns, CTAs. Direct response principles.",
      },
    ],
  },
  {
    name: "Claude Code",
    color: "text-violet-400",
    bgColor: "bg-violet-500/10",
    skills: [
      {
        slug: "project-bootstrap",
        name: "Project Bootstrap",
        description:
          "Scaffolds entire projects from one description. Framework, DB, auth, styling, deployment. One prompt.",
      },
      {
        slug: "code-reviewer",
        name: "Code Reviewer",
        description:
          "Reviews like a senior dev. Finds actual bugs, security issues, performance problems. Not style nitpicks.",
      },
      {
        slug: "refactoring-guide",
        name: "Refactoring Guide",
        description:
          "Transforms messy code into clean architecture without breaking anything. Incremental changes.",
      },
      {
        slug: "test-writer",
        name: "Test Writer",
        description:
          "Meaningful tests with Jest, Vitest, Playwright. Tests behavior, not implementation. Sets up from scratch.",
      },
      {
        slug: "deployment-devops",
        name: "Deployment & DevOps",
        description:
          "Vercel, Railway, Fly.io, AWS. GitHub Actions, env vars, preview deployments, DB migrations in CI.",
      },
    ],
  },
];

function DownloadButton({ slug }: { slug: string }) {
  return (
    <a
      href={`/api/skills/download?skill=${slug}`}
      className="inline-flex items-center gap-1.5 text-xs font-medium text-accent hover:text-accent-hover transition-colors"
    >
      <svg
        className="w-3.5 h-3.5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
        />
      </svg>
      Download
    </a>
  );
}

export default function SkillsPage() {
  return (
    <div>
      <div className="mb-10">
        <h1 className="text-2xl font-semibold tracking-tight mb-2">
          Skills Directory
        </h1>
        <p className="text-text-muted text-sm leading-relaxed max-w-lg">
          Claude Code skills files are like cheat codes. Download a file, drop it
          in your <code className="text-xs bg-bg-elevated border border-border px-1.5 py-0.5 rounded">.claude/</code> directory,
          and Claude Code becomes an expert in that thing.
        </p>
      </div>

      <div className="space-y-10">
        {categories.map((category) => (
          <div key={category.name}>
            <h2 className={`text-sm font-semibold mb-4 ${category.color}`}>
              {category.name}
            </h2>
            <div className="space-y-2">
              {category.skills.map((skill) => (
                <div
                  key={skill.slug}
                  className="flex items-start justify-between gap-4 bg-bg-card border border-border rounded-xl px-5 py-4"
                >
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-sm mb-1">{skill.name}</h3>
                    <p className="text-xs text-text-muted leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                  <div className="flex-shrink-0 pt-0.5">
                    <DownloadButton slug={skill.slug} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 p-6 bg-bg-card border border-border rounded-xl text-center">
        <h3 className="font-medium text-sm mb-2">
          How to use skills files
        </h3>
        <p className="text-xs text-text-muted leading-relaxed max-w-md mx-auto">
          Download the .md file. Place it in your project&apos;s{" "}
          <code className="text-xs bg-bg-elevated border border-border px-1.5 py-0.5 rounded">
            .claude/
          </code>{" "}
          directory (create it if it doesn&apos;t exist). Next time you start Claude Code
          in that project, it will automatically use the skill.
        </p>
      </div>
    </div>
  );
}
