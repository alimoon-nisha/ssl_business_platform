import type { ReactNode } from "react";
import { Badge } from "@/components/ui/Badge";

export function DashboardPageHeader({
  eyebrow,
  title,
  body,
  action,
}: {
  eyebrow?: string;
  title: string;
  body?: string;
  action?: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div>
        {eyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-text-secondary">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="mt-2 text-3xl font-semibold tracking-normal text-text-primary">
          {title}
        </h1>
        {body ? (
          <p className="mt-3 max-w-2xl text-sm leading-6 text-text-secondary">
            {body}
          </p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}

export function StatusBadge({ status }: { status: string }) {
  const normalized = status.toLowerCase();

  if (normalized.includes("missing") || normalized.includes("needs")) {
    return <Badge tone="amber">{status}</Badge>;
  }

  if (normalized.includes("draft") || normalized.includes("pending") || normalized.includes("not started")) {
    return <Badge tone="gray">{status}</Badge>;
  }

  if (normalized.includes("paid") || normalized.includes("active") || normalized.includes("uploaded") || normalized.includes("completed")) {
    return <Badge tone="green">{status}</Badge>;
  }

  if (normalized.includes("due") || normalized.includes("contact")) {
    return <Badge tone="blue">{status}</Badge>;
  }

  return <Badge tone="gray">{status}</Badge>;
}
