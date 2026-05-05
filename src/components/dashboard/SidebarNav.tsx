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
import { cn } from "@/lib/cn";

const nav = [
  { label: "Home", icon: Home, href: "/dashboard" },
  { label: "Services", icon: CreditCard, href: "/dashboard/services" },
  { label: "Applications", icon: Workflow, href: "/dashboard/applications" },
  { label: "Documents", icon: FileText, href: "/dashboard/documents" },
  { label: "Billing", icon: Receipt, href: "/dashboard/billing" },
];

export function SidebarNav() {
  const pathname = usePathname();

  return (
    <aside className="hidden min-h-[calc(100vh-64px)] w-[260px] shrink-0 border-r border-border bg-white p-4 lg:block">
      <nav className="space-y-1">
        {nav.map(({ label, icon: Icon, href }) => {
          const active =
            href === "/dashboard" ? pathname === href : pathname.startsWith(href);
          const content = (
            <>
              <Icon className="size-5" aria-hidden="true" />
              <span className="min-w-0 flex-1">{label}</span>
            </>
          );
          const className = cn(
            "flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium",
            active
              ? "bg-blue-50 text-primary"
              : "text-text-secondary hover:bg-surface hover:text-text-primary",
          );

          return (
            <Link key={label} href={href} className={className}>
              {content}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
