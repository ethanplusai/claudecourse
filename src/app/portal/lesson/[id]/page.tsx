import Link from "next/link";
import { prisma } from "@/lib/db";
import { getCurrentUser } from "@/lib/auth";
import { redirect, notFound } from "next/navigation";
import { MarkCompleteButton } from "./mark-complete";
import { LessonTracker } from "./tracker";

export default async function LessonPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const user = await getCurrentUser();
  if (!user) redirect("/login");

  const { id } = await params;

  const lesson = await prisma.lesson.findUnique({
    where: { id },
    include: {
      module: true,
      progress: {
        where: { userId: user.userId },
      },
    },
  });

  if (!lesson) notFound();

  // Check gating — must have completed previous lesson
  if (lesson.order > 1) {
    const prevLesson = await prisma.lesson.findUnique({
      where: { order: lesson.order - 1 },
    });
    if (prevLesson) {
      const prevProgress = await prisma.lessonProgress.findUnique({
        where: {
          userId_lessonId: { userId: user.userId, lessonId: prevLesson.id },
        },
      });
      if (prevProgress?.status !== "completed") {
        redirect("/portal");
      }
    }
  }

  // Mark as started if not already
  await prisma.lessonProgress.upsert({
    where: {
      userId_lessonId: { userId: user.userId, lessonId: lesson.id },
    },
    create: {
      userId: user.userId,
      lessonId: lesson.id,
      status: "in_progress",
      startedAt: new Date(),
    },
    update: {},
  });

  const isCompleted = lesson.progress[0]?.status === "completed";

  // Get total lessons in module for "Lesson X of Y"
  const moduleLessons = await prisma.lesson.findMany({
    where: { moduleId: lesson.moduleId },
    orderBy: { order: "asc" },
  });
  const lessonIndex =
    moduleLessons.findIndex((l) => l.id === lesson.id) + 1;

  // Get next lesson
  const nextLesson = await prisma.lesson.findUnique({
    where: { order: lesson.order + 1 },
  });

  // Convert content to HTML
  // Supports: ## headers, **bold**, ```code blocks```, ![images](url), [downloads](url){.download}, > callouts
  function renderContent(text: string): string {
    // First, extract code blocks so they don't get processed
    const codeBlocks: string[] = [];
    const withCodePlaceholders = text.replace(
      /```(\w*)\n([\s\S]*?)```/g,
      (_, lang, code) => {
        const index = codeBlocks.length;
        const escapedCode = code
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;");
        codeBlocks.push(
          `<div class="code-block"><div class="code-block-header"><span class="code-block-lang">${lang || "prompt"}</span><button class="code-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.code-block').querySelector('code').textContent).then(()=>{this.textContent='Copied!';setTimeout(()=>this.textContent='Copy',1500)})">Copy</button></div><pre><code>${escapedCode.trim()}</code></pre></div>`
        );
        return `\n\nCODE_BLOCK_${index}\n\n`;
      }
    );

    const result = withCodePlaceholders
      .split("\n\n")
      .map((paragraph) => {
        const trimmed = paragraph.trim();
        if (!trimmed) return "";

        // Code block placeholder
        if (trimmed.startsWith("CODE_BLOCK_")) {
          const index = parseInt(trimmed.replace("CODE_BLOCK_", ""));
          return codeBlocks[index] || "";
        }

        // Headers
        if (trimmed.startsWith("## ")) {
          return `<h2>${trimmed.slice(3)}</h2>`;
        }

        // Images: ![alt](url)
        if (trimmed.match(/^!\[.*?\]\(.*?\)$/)) {
          const match = trimmed.match(/^!\[(.*?)\]\((.*?)\)$/);
          if (match) {
            return `<figure class="lesson-figure"><img src="${match[2]}" alt="${match[1]}" loading="lazy" />${match[1] ? `<figcaption>${match[1]}</figcaption>` : ""}</figure>`;
          }
        }

        // Callout blocks: > text
        if (trimmed.startsWith("> ")) {
          const content = trimmed
            .split("\n")
            .map((l) => l.replace(/^>\s?/, ""))
            .join("<br>");
          return `<blockquote>${content}</blockquote>`;
        }

        // Download links: [text](url){.download}
        let processed = trimmed.replace(
          /\[(.*?)\]\((.*?)\)\{\.download\}/g,
          `<a href="$2" download class="download-link"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>$1</a>`
        );

        // Inline images within paragraphs
        processed = processed.replace(
          /!\[(.*?)\]\((.*?)\)/g,
          (_match, alt: string, src: string) => {
            const caption = alt ? `<figcaption>${alt}</figcaption>` : "";
            return `</p><figure class="lesson-figure"><img src="${src}" alt="${alt}" loading="lazy" />${caption}</figure><p>`;
          }
        );

        // Bold
        processed = processed.replace(
          /\*\*(.*?)\*\*/g,
          "<strong>$1</strong>"
        );

        // Inline code
        processed = processed.replace(
          /`([^`]+)`/g,
          '<code class="inline-code">$1</code>'
        );

        // Line breaks
        processed = processed.replace(/\n/g, "<br>");

        return `<p>${processed}</p>`;
      })
      .filter(Boolean)
      .join("");

    return result;
  }

  return (
    <div>
      <LessonTracker lessonId={lesson.id} />

      {/* Back */}
      <Link
        href={`/portal/module/${lesson.moduleId}`}
        className="inline-flex items-center gap-1 text-sm text-text-muted hover:text-text transition-colors mb-8"
      >
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
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Back to {lesson.module.title}
      </Link>

      {/* Lesson header */}
      <div className="mb-10 max-w-2xl">
        <p className="text-xs text-text-light uppercase tracking-wide mb-3">
          {lesson.module.title} &middot; Lesson {lessonIndex} of{" "}
          {moduleLessons.length}
        </p>
        <h1 className="text-2xl font-semibold tracking-tight mb-2">
          {lesson.title}
        </h1>
        <p className="text-sm text-text-muted">{lesson.readTime}</p>
      </div>

      {/* Content */}
      <div
        className="lesson-content max-w-2xl mb-16"
        dangerouslySetInnerHTML={{ __html: renderContent(lesson.content) }}
      />

      {/* Mark complete / Next lesson */}
      <div className="max-w-2xl border-t border-border pt-8">
        {!isCompleted ? (
          <MarkCompleteButton lessonId={lesson.id} />
        ) : nextLesson ? (
          <div className="flex items-center justify-between">
            <span className="text-sm text-accent flex items-center gap-2">
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Completed
            </span>
            <Link
              href={`/portal/lesson/${nextLesson.id}`}
              className="inline-flex items-center gap-2 bg-accent text-white font-medium text-sm px-5 py-2.5 rounded-full hover:bg-accent-hover transition-colors"
            >
              Next Lesson
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
          </div>
        ) : lesson.order >= 28 ? (
          <div className="text-center py-4">
            <span className="text-sm text-accent flex items-center justify-center gap-2 mb-4">
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Course Complete
            </span>
            <Link
              href="/portal/review"
              className="inline-flex items-center gap-2 bg-accent text-white font-medium text-sm px-5 py-2.5 rounded-full hover:bg-accent-hover transition-colors"
            >
              Leave Your Feedback
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
          </div>
        ) : (
          <div className="text-center py-4">
            <span className="text-sm text-accent flex items-center justify-center gap-2 mb-3">
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Module Complete
            </span>
            <Link
              href="/portal"
              className="text-sm text-text-muted hover:text-text transition-colors"
            >
              Back to Portal
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
