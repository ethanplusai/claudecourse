"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Logo } from "@/components/logo";

export default function SignupPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [contactMethod, setContactMethod] = useState<"email" | "sms">("email");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, phone, password, contactMethod }),
    });

    const data = await res.json();

    if (!res.ok) {
      setError(data.error || "Something went wrong");
      setLoading(false);
      return;
    }

    router.push("/portal");
  }

  return (
    <div className="min-h-screen bg-bg flex items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <div className="text-center mb-10">
          <div className="mb-8">
            <Logo />
          </div>
          <h1 className="text-xl font-semibold mb-2">Get free access</h1>
          <p className="text-text-muted text-sm">
            Start building your automated acquisition system.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-text-muted mb-1.5">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Your name"
              className="w-full bg-bg-card border border-border rounded-lg px-4 py-2.5 text-sm text-text placeholder:text-text-light focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-text-muted mb-1.5">
              How should we reach you?
            </label>
            <div className="flex bg-bg-elevated rounded-lg p-0.5">
              <button
                type="button"
                onClick={() => setContactMethod("email")}
                className={`flex-1 py-2 text-sm font-medium rounded-md transition-all ${
                  contactMethod === "email"
                    ? "bg-bg-card text-text shadow-sm"
                    : "text-text-muted hover:text-text"
                }`}
              >
                Email
              </button>
              <button
                type="button"
                onClick={() => setContactMethod("sms")}
                className={`flex-1 py-2 text-sm font-medium rounded-md transition-all ${
                  contactMethod === "sms"
                    ? "bg-bg-card text-text shadow-sm"
                    : "text-text-muted hover:text-text"
                }`}
              >
                Text
              </button>
            </div>
          </div>

          {contactMethod === "email" ? (
            <div>
              <label className="block text-sm font-medium text-text-muted mb-1.5">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required={contactMethod === "email"}
                placeholder="you@example.com"
                className="w-full bg-bg-card border border-border rounded-lg px-4 py-2.5 text-sm text-text placeholder:text-text-light focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all"
              />
            </div>
          ) : (
            <div>
              <label className="block text-sm font-medium text-text-muted mb-1.5">
                Phone number
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required={contactMethod === "sms"}
                placeholder="(555) 123-4567"
                className="w-full bg-bg-card border border-border rounded-lg px-4 py-2.5 text-sm text-text placeholder:text-text-light focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all"
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-text-muted mb-1.5">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
              placeholder="At least 6 characters"
              className="w-full bg-bg-card border border-border rounded-lg px-4 py-2.5 text-sm text-text placeholder:text-text-light focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all"
            />
          </div>

          {error && <p className="text-red-600 text-sm">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-accent text-white font-medium py-2.5 rounded-lg hover:bg-accent-hover transition-colors disabled:opacity-50 text-sm"
          >
            {loading ? "Creating account..." : "Start Building"}
          </button>
        </form>

        <p className="text-center text-sm text-text-muted mt-6">
          Already have an account?{" "}
          <Link href="/login" className="text-accent hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
