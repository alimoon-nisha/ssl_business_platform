"use client";

import Link from "next/link";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { dashboardSearchItems } from "@/data/mockPlatform";

export function DashboardSearch() {
  const [query, setQuery] = useState("");
  const normalizedQuery = query.trim().toLowerCase();
  const results = useMemo(() => {
    if (!normalizedQuery) return dashboardSearchItems.slice(0, 5);

    return dashboardSearchItems
      .filter((item) =>
        `${item.label} ${item.description}`.toLowerCase().includes(normalizedQuery),
      )
      .slice(0, 6);
  }, [normalizedQuery]);

  return (
    <div className="relative hidden max-w-xl flex-1 md:block">
      <Search className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-text-secondary" />
      <input
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        className="h-10 w-full rounded-full border border-border-soft bg-surface pl-10 pr-4 text-sm text-text-primary focus:border-primary"
        placeholder="Search services, documents, applications"
        aria-label="Search services, documents, applications"
      />

      {query ? (
        <div className="absolute left-0 right-0 top-12 z-50 overflow-hidden rounded-[20px] border border-border-soft bg-white shadow-[0_14px_36px_rgba(32,33,36,0.1)]">
          <div className="border-b border-border-soft px-4 py-3">
            <p className="text-xs font-medium text-text-secondary">
              {results.length ? "Search results" : "No matching items"}
            </p>
          </div>
          <div className="p-2">
            {results.map((item) => (
              <Link
                key={`${item.label}-${item.href}`}
                href={item.href}
                onClick={() => setQuery("")}
                className="block rounded-2xl px-3 py-3 transition-colors hover:bg-surface focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                <span className="block text-sm font-semibold text-text-primary">
                  {item.label}
                </span>
                <span className="mt-1 block text-xs leading-5 text-text-secondary">
                  {item.description}
                </span>
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
