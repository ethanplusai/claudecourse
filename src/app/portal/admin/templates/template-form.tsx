"use client";

import { useState } from "react";

const sampleData: Record<string, string> = {
  firstName: "Sarah",
  lessonsCompleted: "12",
  totalLessons: "28",
  nextLessonTitle: "Cold Outreach That Leads With Value",
  portalUrl: "https://clients.wtf/portal",
  bookingUrl: "https://calendly.com",
};

interface TemplateFormProps {
  template: {
    name: string;
    slug: string;
    channel: string;
    subject: string;
    body: string;
    variables: string;
  };
  saveAction: (formData: FormData) => Promise<void>;
  deleteAction?: () => Promise<void>;
}

export function TemplateForm({ template, saveAction, deleteAction }: TemplateFormProps) {
  const [channel, setChannel] = useState(template.channel);
  const [body, setBody] = useState(template.body);
  const [subject, setSubject] = useState(template.subject);
  const [confirmDelete, setConfirmDelete] = useState(false);

  function resolveTemplate(text: string) {
    return text.replace(/\{\{(\w+)\}\}/g, (_, key) => sampleData[key] || `{{${key}}}`);
  }

  return (
    <div className="space-y-6">
      <form action={saveAction} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              name="name"
              defaultValue={template.name}
              required
              className="w-full px-3 py-2 text-sm bg-bg-card border border-border rounded-lg focus:outline-none focus:border-accent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Slug</label>
            <input
              name="slug"
              defaultValue={template.slug}
              required
              className="w-full px-3 py-2 text-sm bg-bg-card border border-border rounded-lg focus:outline-none focus:border-accent font-mono"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Channel</label>
          <select
            name="channel"
            value={channel}
            onChange={(e) => setChannel(e.target.value)}
            className="w-full px-3 py-2 text-sm bg-bg-card border border-border rounded-lg focus:outline-none focus:border-accent"
          >
            <option value="email">Email</option>
            <option value="sms">SMS</option>
          </select>
        </div>

        {channel === "email" && (
          <div>
            <label className="block text-sm font-medium mb-1">Subject</label>
            <input
              name="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full px-3 py-2 text-sm bg-bg-card border border-border rounded-lg focus:outline-none focus:border-accent"
            />
          </div>
        )}

        <div>
          <label className="block text-sm font-medium mb-1">Body</label>
          <textarea
            name="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            rows={12}
            required
            className="w-full px-3 py-2 text-sm bg-bg-card border border-border rounded-lg focus:outline-none focus:border-accent font-mono leading-relaxed"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Variables <span className="text-text-muted font-normal">(comma-separated)</span>
          </label>
          <input
            name="variables"
            defaultValue={template.variables}
            placeholder="firstName, lessonsCompleted, portalUrl"
            className="w-full px-3 py-2 text-sm bg-bg-card border border-border rounded-lg focus:outline-none focus:border-accent"
          />
        </div>

        <div className="flex items-center gap-3 pt-2">
          <button
            type="submit"
            className="px-5 py-2 text-sm font-medium bg-accent text-white rounded-lg hover:bg-accent-hover transition-colors"
          >
            Save Template
          </button>
          {deleteAction && !confirmDelete && (
            <button
              type="button"
              onClick={() => setConfirmDelete(true)}
              className="px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition-colors"
            >
              Delete
            </button>
          )}
          {deleteAction && confirmDelete && (
            <form action={deleteAction} className="inline">
              <button
                type="submit"
                className="px-4 py-2 text-sm font-medium bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                Confirm Delete
              </button>
              <button
                type="button"
                onClick={() => setConfirmDelete(false)}
                className="ml-2 px-3 py-2 text-sm text-text-muted hover:text-text transition-colors"
              >
                Cancel
              </button>
            </form>
          )}
        </div>
      </form>

      <div className="bg-bg-card border border-border rounded-xl p-5">
        <h3 className="text-sm font-semibold mb-3 text-text-muted uppercase tracking-wider">
          Preview
        </h3>
        {channel === "email" && subject && (
          <p className="text-sm font-medium mb-2">
            Subject: {resolveTemplate(subject)}
          </p>
        )}
        <div className="text-sm whitespace-pre-wrap leading-relaxed text-text-muted">
          {resolveTemplate(body) || "Start typing to see a preview..."}
        </div>
      </div>
    </div>
  );
}
