"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export function UserSearch({ initialQuery }: { initialQuery: string }) {
  const [query, setQuery] = useState(initialQuery);
  const router = useRouter();
  const searchParams = useSearchParams();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const params = new URLSearchParams(searchParams.toString());
    if (query) {
      params.set("q", query);
    } else {
      params.delete("q");
    }
    router.push(`/portal/admin/users?${params.toString()}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search by name or email..."
        className="w-full px-4 py-2.5 text-sm bg-bg-card border border-border rounded-lg focus:outline-none focus:border-accent"
      />
    </form>
  );
}
