"use client";

import { useState } from "react";

interface CheckItem {
  label: string;
  checked: boolean;
}

interface CheckSection {
  title: string;
  items: CheckItem[];
}

const initialSections: CheckSection[] = [
  {
    title: "Landing Page",
    items: [
      { label: "Page loads without errors", checked: false },
      { label: "All text is your content (no placeholders left)", checked: false },
      { label: "CTA button links to /signup", checked: false },
      { label: '"Sign in" link goes to /login', checked: false },
      { label: "Looks good on mobile", checked: false },
      { label: "Page loads in under 3 seconds", checked: false },
      { label: "Favicon shows in browser tab", checked: false },
    ],
  },
  {
    title: "Signup",
    items: [
      { label: "Name, email, password → creates account", checked: false },
      { label: "Redirects to portal after signup", checked: false },
      { label: "Duplicate email → shows error", checked: false },
      { label: "Empty fields → shows validation", checked: false },
      { label: "Short password → rejected", checked: false },
    ],
  },
  {
    title: "Login",
    items: [
      { label: "Correct credentials → portal", checked: false },
      { label: "Wrong password → error", checked: false },
      { label: "Non-existent email → error", checked: false },
    ],
  },
  {
    title: "Portal & Lessons",
    items: [
      { label: "All modules show up", checked: false },
      { label: "Lessons listed correctly", checked: false },
      { label: "Lesson content renders properly", checked: false },
      { label: "Code blocks have copy button", checked: false },
      { label: "Mark as Complete works", checked: false },
      { label: "Progress updates on portal", checked: false },
    ],
  },
  {
    title: "Skills Directory",
    items: [
      { label: "Skills page loads", checked: false },
      { label: "Downloads work", checked: false },
      { label: "Gated behind login (test in incognito)", checked: false },
    ],
  },
  {
    title: "Emails",
    items: [
      { label: "Welcome email arrives after signup", checked: false },
      { label: "From address is correct", checked: false },
      { label: "Links in emails work", checked: false },
      { label: "Not landing in spam", checked: false },
    ],
  },
  {
    title: "Admin",
    items: [
      { label: "/portal/admin loads", checked: false },
      { label: "Dashboard shows stats", checked: false },
      { label: "Templates, automations, users pages work", checked: false },
    ],
  },
  {
    title: "SEO & Sharing",
    items: [
      { label: "Title tag is correct (view source)", checked: false },
      { label: "OG image shows when sharing link", checked: false },
      { label: "/sitemap.xml works", checked: false },
      { label: "/robots.txt blocks /portal/ and /api/", checked: false },
    ],
  },
  {
    title: "General",
    items: [
      { label: "Sign out works", checked: false },
      { label: "Signed out → /portal redirects to /login", checked: false },
      { label: "Non-admin → /portal/admin redirects", checked: false },
    ],
  },
];

export function ChecklistButton() {
  const [open, setOpen] = useState(false);
  const [sections, setSections] = useState(initialSections);

  function toggle(si: number, ii: number) {
    setSections((prev) =>
      prev.map((s, sIdx) =>
        sIdx === si
          ? {
              ...s,
              items: s.items.map((item, iIdx) =>
                iIdx === ii ? { ...item, checked: !item.checked } : item
              ),
            }
          : s
      )
    );
  }

  const total = sections.reduce((sum, s) => sum + s.items.length, 0);
  const checked = sections.reduce(
    (sum, s) => sum + s.items.filter((i) => i.checked).length,
    0
  );
  const pct = Math.round((checked / total) * 100);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 bg-accent text-white font-medium text-sm px-5 py-2.5 rounded-full hover:bg-accent-hover transition-colors"
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
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
          />
        </svg>
        Open Pre-Launch Checklist
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-10 px-4">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/40"
            onClick={() => setOpen(false)}
          />

          {/* Modal */}
          <div className="relative bg-bg border border-border rounded-2xl shadow-2xl w-full max-w-lg max-h-[80vh] overflow-hidden flex flex-col">
            {/* Header */}
            <div className="px-6 py-4 border-b border-border flex items-center justify-between flex-shrink-0">
              <div>
                <h2 className="font-semibold">Pre-Launch Checklist</h2>
                <p className="text-xs text-text-muted mt-0.5">
                  {checked}/{total} items · {pct}%
                </p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-text-light hover:text-text transition-colors p-1"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Progress bar */}
            <div className="px-6 py-2 border-b border-border flex-shrink-0">
              <div className="w-full h-1.5 bg-bg-elevated rounded-full overflow-hidden">
                <div
                  className="h-full bg-accent rounded-full transition-all duration-300"
                  style={{ width: `${pct}%` }}
                />
              </div>
            </div>

            {/* Scrollable content */}
            <div className="overflow-y-auto flex-1 px-6 py-4">
              <div className="space-y-5">
                {sections.map((section, si) => {
                  const sc = section.items.filter((i) => i.checked).length;
                  return (
                    <div key={section.title}>
                      <div className="flex items-center justify-between mb-1.5">
                        <h3 className="text-xs font-semibold text-text-muted uppercase tracking-wide">
                          {section.title}
                        </h3>
                        <span
                          className={`text-xs ${
                            sc === section.items.length
                              ? "text-accent font-medium"
                              : "text-text-light"
                          }`}
                        >
                          {sc}/{section.items.length}
                        </span>
                      </div>
                      <div className="space-y-0.5">
                        {section.items.map((item, ii) => (
                          <label
                            key={ii}
                            className="flex items-start gap-2.5 py-1.5 cursor-pointer group"
                          >
                            <input
                              type="checkbox"
                              checked={item.checked}
                              onChange={() => toggle(si, ii)}
                              className="mt-0.5 w-4 h-4 rounded accent-accent cursor-pointer flex-shrink-0"
                            />
                            <span
                              className={`text-sm leading-snug transition-colors ${
                                item.checked
                                  ? "line-through text-text-light"
                                  : "text-text-muted group-hover:text-text"
                              }`}
                            >
                              {item.label}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

              {pct === 100 && (
                <div className="mt-6 p-4 bg-accent-dim rounded-xl text-center">
                  <p className="font-medium text-accent text-sm">
                    All checks passed. You&apos;re ready to launch.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
