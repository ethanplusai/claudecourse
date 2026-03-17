"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { label: "Dashboard", href: "/portal/admin" },
  { label: "Templates", href: "/portal/admin/templates" },
  { label: "Automations", href: "/portal/admin/automations" },
  { label: "Send History", href: "/portal/admin/send-history" },
  { label: "Users", href: "/portal/admin/users" },
  { label: "Settings", href: "/portal/admin/settings" },
];

export function AdminNav() {
  const pathname = usePathname();

  function isActive(href: string) {
    if (href === "/portal/admin") return pathname === "/portal/admin";
    return pathname.startsWith(href);
  }

  return (
    <nav className="flex items-center gap-1 mb-8 overflow-x-auto pb-1">
      {tabs.map((tab) => (
        <Link
          key={tab.href}
          href={tab.href}
          className={`px-4 py-2 text-sm font-medium rounded-lg whitespace-nowrap transition-colors ${
            isActive(tab.href)
              ? "bg-accent text-white"
              : "text-text-muted hover:text-text hover:bg-bg-elevated"
          }`}
        >
          {tab.label}
        </Link>
      ))}
    </nav>
  );
}
