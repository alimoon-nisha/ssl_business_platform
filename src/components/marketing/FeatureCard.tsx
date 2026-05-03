import { BarChart3, CalendarDays, CheckCircle2, CreditCard, Smartphone, UsersRound } from "lucide-react";
import Link from "next/link";
import { Card } from "@/components/ui/Card";

const visualShellClass = "flex h-[320px] items-center justify-center rounded-2xl bg-surface p-5";

function FeatureVisual({ type }: { type: "payments" | "messages" | "recharge" | "sales" }) {
  if (type === "messages") {
    return (
      <div className={visualShellClass}>
        <div className="mx-auto max-w-[230px] rounded-2xl border border-border-soft bg-white p-4">
          <div className="mb-4 flex items-center gap-2">
            <CalendarDays className="size-5 text-primary" />
            <span className="h-2.5 w-24 rounded-full bg-border-soft" />
          </div>
          <div className="grid grid-cols-5 gap-2">
            {Array.from({ length: 20 }).map((_, index) => (
              <span
                key={index}
                className={`aspect-square rounded-md ${
                  [4, 8, 13].includes(index) ? "bg-blue-100" : "bg-surface-alt"
                }`}
              />
            ))}
          </div>
          <div className="mt-4 rounded-xl bg-blue-50 p-3 text-xs font-medium text-primary">
            Sender ID ready
          </div>
        </div>
      </div>
    );
  }

  if (type === "recharge") {
    return (
      <div className={visualShellClass}>
        <div className="mx-auto flex min-h-[228px] max-w-[230px] flex-col justify-center rounded-2xl border border-border-soft bg-white p-4">
          <div className="mb-4 flex items-center justify-between">
            <Smartphone className="size-6 text-success" />
            <span className="rounded-full bg-green-50 px-2 py-1 text-[11px] font-medium text-success">
              Balance OK
            </span>
          </div>
          <div className="space-y-5">
            {[68, 46].map((width, index) => (
              <div key={index} className="rounded-xl border border-border-soft p-4">
                <div className="h-2 rounded-full bg-border-soft" style={{ width }} />
                <div className="mt-3 h-2 w-16 rounded-full bg-amber-100" />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (type === "sales") {
    return (
      <div className={visualShellClass}>
        <div className="mx-auto max-w-[230px] rounded-2xl border border-border-soft bg-white p-4">
          <div className="mb-4 flex items-center justify-between">
            <UsersRound className="size-6 text-orange-800" />
            <span className="rounded-full bg-orange-50 px-2 py-1 text-[11px] font-medium text-orange-800">
              Field live
            </span>
          </div>
          <div className="space-y-3">
            {["Visit plan", "Order capture", "Inventory sync"].map((item, index) => (
              <div key={item} className="flex items-center gap-3 rounded-xl bg-surface-alt p-3">
                {index < 2 ? (
                  <CheckCircle2 className="size-4 text-success" />
                ) : (
                  <BarChart3 className="size-4 text-primary" />
                )}
                <span className="text-xs font-medium text-text-secondary">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={visualShellClass}>
      <div className="mx-auto max-w-[230px] rounded-2xl border border-border-soft bg-white p-4">
        <div className="mb-4 flex items-center justify-between">
          <CreditCard className="size-6 text-primary" />
          <span className="rounded-full bg-blue-50 px-2 py-1 text-[11px] font-medium text-primary">
            Live
          </span>
        </div>
        <div className="space-y-3">
          {["Payments", "Settlement", "Reports"].map((item, index) => (
            <div key={item} className="flex items-center gap-3 rounded-xl bg-surface-alt p-3">
              {index < 2 ? (
                <CheckCircle2 className="size-4 text-success" />
              ) : (
                <BarChart3 className="size-4 text-warning" />
              )}
              <span className="text-xs font-medium text-text-secondary">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function FeatureCard({
  title,
  body,
  visual,
  href,
  applicationHref,
}: {
  title: string;
  body: string;
  visual: "payments" | "messages" | "recharge" | "sales";
  href: string;
  applicationHref: string;
}) {
  return (
    <Card className="group h-full overflow-hidden transition-all duration-300 ease-out hover:-translate-y-1 hover:border-primary hover:shadow-[0_14px_30px_rgba(26,115,232,0.08)] hover:ring-1 hover:ring-primary focus-within:border-primary focus-within:ring-1 focus-within:ring-primary">
      <Link
        href={href}
        className="block rounded-t-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        aria-label={`Explore ${title}`}
      >
        <FeatureVisual type={visual} />
      </Link>
        <div className="p-6">
          <Link
            href={href}
            className="block rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <h3 className="text-xl font-semibold tracking-normal text-text-primary transition-colors duration-300 group-hover:text-primary">
              {title}
            </h3>
          </Link>
          <p className="mt-3 text-sm leading-6 text-text-secondary">{body}</p>
          <Link
            href={applicationHref}
            className="mt-5 inline-flex h-10 w-full items-center justify-center rounded-sm border border-border bg-white px-5 text-sm font-medium text-primary transition-colors hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Start application
          </Link>
        </div>
    </Card>
  );
}
