import {
  CreditCard,
  FileText,
  Home,
  Receipt,
  Workflow,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/cn";

const nav = [
  { label: "Home", icon: Home, active: true, href: "/dashboard" },
  { label: "Services", icon: CreditCard, comingSoon: true },
  { label: "Applications", icon: Workflow, comingSoon: true },
  { label: "Documents", icon: FileText, comingSoon: true },
  { label: "Billing", icon: Receipt, comingSoon: true },
];

export function SidebarNav() {
  return (
    <aside className="hidden min-h-[calc(100vh-64px)] w-[260px] shrink-0 border-r border-border bg-white p-4 lg:block">
      <nav className="space-y-1">
        {nav.map(({ label, icon: Icon, active, href, comingSoon }) => {
          const content = (
            <>
              <Icon className="size-5" aria-hidden="true" />
              <span className="min-w-0 flex-1">{label}</span>
              {comingSoon ? (
                <span className="rounded-full bg-surface-alt px-2 py-0.5 text-[11px] font-medium text-text-secondary">
                  Soon
                </span>
              ) : null}
            </>
          );
          const className = cn(
            "flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium",
            active
              ? "bg-blue-50 text-primary"
              : "text-text-secondary hover:bg-surface hover:text-text-primary",
            comingSoon && "cursor-not-allowed opacity-70 hover:bg-transparent hover:text-text-secondary",
          );

          if (href && !comingSoon) {
            return (
              <Link key={label} href={href} className={className}>
                {content}
              </Link>
            );
          }

          return (
            <div key={label} className={className} aria-disabled="true">
              {content}
            </div>
          );
        })}
      </nav>
    </aside>
  );
}
