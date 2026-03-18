import type { Metadata } from "next";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Logo } from "@/components/logo";
import { getCurrentUser } from "@/lib/auth";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

async function handleLogout() {
  "use server";
  const { getSession } = await import("@/lib/auth");
  const session = await getSession();
  session.destroy();
  redirect("/");
}

export default async function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen bg-bg">
      <nav className="sticky top-0 z-50 bg-bg/80 backdrop-blur-md border-b border-border">
        <div className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link href="/portal">
            <Logo size="small" />
          </Link>
          <div className="flex items-center gap-5">
            <Link
              href="/portal/skills"
              className="text-sm text-text-muted hover:text-text transition-colors"
            >
              Skills
            </Link>
            <span className="text-sm text-text-muted hidden sm:block">
              {user.name}
            </span>
            <form action={handleLogout}>
              <button
                type="submit"
                className="text-sm text-text-light hover:text-text transition-colors"
              >
                Sign out
              </button>
            </form>
          </div>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-6 py-10">{children}</main>
    </div>
  );
}
