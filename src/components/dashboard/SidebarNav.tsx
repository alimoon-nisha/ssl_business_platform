import {
  CreditCard,
  FileText,
  Headphones,
  Home,
  Receipt,
  Settings,
  Users,
  Workflow,
} from "lucide-react";
import Link from "next/link";

const nav = [
  { label: "Home", icon: Home, active: true },
  { label: "Services", icon: CreditCard },
  { label: "Applications", icon: Workflow },
  { label: "Documents", icon: FileText },
  { label: "Billing", icon: Receipt },
  { label: "Team", icon: Users },
  { label: "Support", icon: Headphones },
  { label: "Settings", icon: Settings },
];

export function SidebarNav() {
  return (
    <aside className="hidden min-h-[calc(100vh-64px)] w-[260px] shrink-0 border-r border-border bg-white p-4 lg:block">
      <nav className="space-y-1">
        {nav.map(({ label, icon: Icon, active }) => (
          <Link
            key={label}
            href="/dashboard"
            className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium ${
              active
                ? "bg-blue-50 text-primary"
                : "text-text-secondary hover:bg-surface hover:text-text-primary"
            }`}
          >
            <Icon className="size-5" aria-hidden="true" />
            {label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
