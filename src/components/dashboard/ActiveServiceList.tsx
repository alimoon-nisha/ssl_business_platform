import { CreditCard, ExternalLink, type LucideIcon, MessageSquareText, Zap } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/cn";

type ServiceEntry = {
  id: string;
  name: string;
  subtitle: string;
  plan: string;
  icon: LucideIcon;
  status: string;
  usageText: string;
  usageNote: string;
  progress: number;
};

const activeServices: ServiceEntry[] = [
  {
    id: "sms-solution",
    name: "SMS Solution",
    subtitle: "ID: 10245",
    plan: "Corporate Plan",
    icon: MessageSquareText,
    status: "Active",
    usageText: "92K / 100K used",
    usageNote: "Renew in 2d",
    progress: 92,
  },
  {
    id: "sslcommerz",
    name: "SSLCOMMERZ",
    subtitle: "Payment Gateway",
    plan: "Merchant",
    icon: CreditCard,
    status: "Active",
    usageText: "1,240 transactions",
    usageNote: "৳ 82.5K vol",
    progress: 65,
  },
  {
    id: "virtual-recharge",
    name: "Virtual Recharge",
    subtitle: "Recharge API",
    plan: "Highest priority",
    icon: Zap,
    status: "Active",
    usageText: "৳ 58,020 spent",
    usageNote: "This month",
    progress: 40,
  },
];

function getProgressColor(progress: number) {
  if (progress >= 90) return "bg-red-500";
  return "bg-primary";
}

export function ActiveServiceList() {
  const gridLayout = "md:grid-cols-[140px_100px_90px_170px_80px] md:justify-between";

  return (
    <Card className="p-4 md:p-6">
      <div className={cn("mb-6 grid items-center gap-4", gridLayout)}>
        <h2 className="text-[15px] font-semibold text-text-primary md:col-span-4">Active services</h2>
        <div className="flex justify-end">
          <Link href="/dashboard/services" className="text-[13px] font-semibold text-primary hover:underline">
            View all
          </Link>
        </div>
      </div>

      <div className={cn("hidden md:grid border-b border-border-soft pb-3 text-[10px] font-bold uppercase tracking-widest text-text-secondary", gridLayout)}>
        <div>Service</div>
        <div>Plan</div>
        <div>Status</div>
        <div>Usage / Billing</div>
        <div className="flex justify-end justify-self-end text-right uppercase tracking-[0.12em]">Action</div>
      </div>

      <div className="divide-y divide-border-soft">
        {activeServices.map((service) => {
          const isCritical = service.progress >= 90;
          return (
            <div
              key={service.id}
              className={cn("grid gap-4 py-5 text-sm md:items-center", gridLayout)}
            >
              <div className="flex items-center gap-0 min-w-0">
                <div className="min-w-0">
                  <p className="font-semibold text-[13px] text-text-primary leading-tight">{service.name}</p>
                  <p className="mt-0.5 text-[11px] text-text-secondary font-medium">{service.subtitle}</p>
                </div>
              </div>

              <div className="text-[11px] font-semibold text-text-secondary md:text-text-primary">
                {service.plan}
              </div>

              <div className="flex">
                <Badge tone="green" className="gap-1.5">
                  <span className="size-1.5 rounded-full bg-green-500" />
                  {service.status}
                </Badge>
              </div>

              <div className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-text-primary">{service.usageText}</span>
                  <span className={cn(
                    "text-[10px] font-medium",
                    isCritical ? "text-red-600 font-semibold" : "text-text-secondary",
                  )}>
                    {service.usageNote}
                  </span>
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-border-soft">
                  <div
                    className={cn("h-full transition-all duration-700 ease-out", getProgressColor(service.progress))}
                    style={{ width: `${service.progress}%` }}
                  />
                </div>
              </div>

              <div className="flex justify-end justify-self-end text-right">
                <ButtonLink
                  href="/dashboard/services"
                  variant="ghost"
                  className="h-9 px-0 text-[13px] font-semibold text-text-secondary hover:text-primary transition-colors gap-1.5"
                >
                  Dashboard
                  <ExternalLink className="size-3.5" />
                </ButtonLink>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}
