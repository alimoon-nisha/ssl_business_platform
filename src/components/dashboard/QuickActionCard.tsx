import { ChevronRight, LucideIcon } from "lucide-react";
import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { IconBadge } from "@/components/ui/IconBadge";

export function QuickActionCard({
  icon,
  title,
  body,
  href = "/get-started",
}: {
  icon: LucideIcon;
  title: string;
  body: string;
  href?: string;
}) {
  return (
    <Link href={href}>
      <Card className="flex h-full items-start gap-4 p-5 transition-colors hover:border-border">
        <IconBadge icon={icon} />
        <div className="min-w-0 flex-1">
          <h3 className="text-sm font-semibold text-text-primary">{title}</h3>
          <p className="mt-1 text-sm leading-5 text-text-secondary">{body}</p>
        </div>
        <ChevronRight className="mt-2 size-4 shrink-0 text-text-secondary" />
      </Card>
    </Link>
  );
}
