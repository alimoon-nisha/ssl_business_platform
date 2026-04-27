import { BarChart3, CalendarDays, CheckCircle2, CreditCard, Smartphone } from "lucide-react";
import { Card } from "@/components/ui/Card";

function FeatureVisual({ type }: { type: "payments" | "messages" | "recharge" }) {
  if (type === "messages") {
    return (
      <div className="rounded-2xl bg-surface p-5">
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
      <div className="rounded-2xl bg-surface p-5">
        <div className="mx-auto max-w-[230px] rounded-2xl border border-border-soft bg-white p-4">
          <div className="mb-4 flex items-center justify-between">
            <Smartphone className="size-6 text-success" />
            <span className="rounded-full bg-green-50 px-2 py-1 text-[11px] font-medium text-success">
              Balance OK
            </span>
          </div>
          <div className="space-y-3">
            {[68, 46, 84].map((width, index) => (
              <div key={index} className="rounded-xl border border-border-soft p-3">
                <div className="h-2 rounded-full bg-border-soft" style={{ width }} />
                <div className="mt-3 h-2 w-16 rounded-full bg-amber-100" />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-surface p-5">
      <div className="mx-auto max-w-[230px] rounded-2xl border border-border-soft bg-white p-4">
        <div className="mb-4 flex items-center justify-between">
          <CreditCard className="size-6 text-primary" />
          <span className="rounded-full bg-blue-50 px-2 py-1 text-[11px] font-medium text-primary">
            Review
          </span>
        </div>
        <div className="space-y-3">
          {["Business profile", "Documents", "Integration"].map((item, index) => (
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
}: {
  title: string;
  body: string;
  visual: "payments" | "messages" | "recharge";
}) {
  return (
    <Card className="overflow-hidden">
      <FeatureVisual type={visual} />
      <div className="p-6">
        <h3 className="text-xl font-semibold tracking-normal text-text-primary">
          {title}
        </h3>
        <p className="mt-3 text-sm leading-6 text-text-secondary">{body}</p>
      </div>
    </Card>
  );
}
