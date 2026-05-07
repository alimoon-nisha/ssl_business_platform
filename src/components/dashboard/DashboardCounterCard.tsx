import type { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/Card";

export function DashboardCounterCard({
  icon: Icon,
  title,
  value,
  note,
}: {
  icon: LucideIcon;
  title: string;
  value: string;
  note: string;
}) {
  return (
    <Card className="group flex items-center gap-4 p-5 transition-all duration-300 hover:border-blue-200 hover:shadow-md hover:shadow-blue-500/5">
      <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 transition-colors group-hover:bg-blue-100">
        <Icon className="size-6 text-blue-900" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-text-secondary">{title}</p>
        <div className="mt-0.5 flex items-baseline gap-2">
          <span className="text-xl font-bold tracking-tight text-text-primary">{value}</span>
          <span className="text-[11px] font-medium text-text-secondary">{note}</span>
        </div>
      </div>
    </Card>
  );
}


