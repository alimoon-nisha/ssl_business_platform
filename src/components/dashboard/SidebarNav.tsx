"use client";

import {
  CreditCard,
  FileText,
  Home,
  Receipt,
  Workflow,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { currentBusiness } from "@/data/mockPlatform";
import { cn } from "@/lib/cn";

const nav = [
  { label: "Services", icon: CreditCard, href: "/dashboard/services" },
  { label: "Applications", icon: Workflow, href: "/dashboard/applications" },
  { label: "Documents", icon: FileText, href: "/dashboard/documents" },
  { label: "Billing", icon: Receipt, href: "/dashboard/billing" },
];

export function SidebarNav() {
  const pathname = usePathname();

  return (
    <aside className="hidden h-full w-[260px] shrink-0 flex-col overflow-hidden border-r border-border bg-white p-4 lg:flex">
      <nav className="space-y-1">
        <Link
          href="/dashboard"
          className={cn(
            "flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-colors",
            pathname === "/dashboard"
              ? "bg-blue-50 text-primary"
              : "text-text-secondary hover:bg-surface hover:text-text-primary",
          )}
        >
          <Home className="size-5" aria-hidden="true" />
          <span className="min-w-0 flex-1">Home</span>
        </Link>

        {nav.map(({ label, icon: Icon, href }) => {
          const active = pathname.startsWith(href);
          return (
            <Link
              key={label}
              href={href}
              className={cn(
                "flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-colors",
                active
                  ? "bg-blue-50 text-primary"
                  : "text-text-secondary hover:bg-surface hover:text-text-primary",
              )}
            >
              <Icon className="size-5" aria-hidden="true" />
              <span className="min-w-0 flex-1">{label}</span>
            </Link>
          );
        })}
      </nav>
      <div className="mt-auto pt-4">
        <Link
          href="/dashboard/profile"
          className="flex items-center gap-3 rounded-2xl bg-surface-alt p-3 transition-colors hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary text-base font-semibold text-white">
            {currentBusiness.name.charAt(0)}
          </span>
          <span className="min-w-0">
            <span className="block truncate text-sm font-semibold text-text-primary">
              {currentBusiness.name}
            </span>
            <span className="mt-1 block text-xs font-medium text-text-secondary">
              ID: {currentBusiness.id}
            </span>
          </span>
        </Link>
      </div>
    </aside>
  );
}
