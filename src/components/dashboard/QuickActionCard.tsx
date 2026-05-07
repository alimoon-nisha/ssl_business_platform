import { ChevronRight, LucideIcon } from "lucide-react";
import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { IconBadge } from "@/components/ui/IconBadge";

export function QuickActionCard({
  icon: Icon,
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
    <Link href={href} className="block h-full">
      <Card className="flex h-full items-center gap-4 p-5 transition-all duration-200 hover:border-blue-200 hover:shadow-md hover:shadow-blue-500/5">
        <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-blue-50">
          <Icon className="size-6 text-blue-900" />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="text-[15px] font-semibold leading-tight text-text-primary">{title}</h3>
          <p className="mt-1 text-sm leading-normal text-text-secondary line-clamp-2">{body}</p>
        </div>
        <ChevronRight className="size-4 shrink-0 text-text-secondary" />
      </Card>
    </Link>
  );
}

