import { CheckCircle2, Code2, FileText, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

export function ProductBenefits({
  benefits,
}: {
  benefits: Array<{ title: string; body: string }>;
}) {
  return (
    <section className="container-lg section-pad">
      <div className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-text-secondary">
          Why use the platform
        </p>
        <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-medium leading-tight text-text-primary">
          Payment gateway onboarding is easier when your business profile is already ready
        </h2>
      </div>
      <div className="mt-12 grid gap-12 md:grid-cols-[1fr_0.9fr] md:items-center">
        <div className="space-y-7">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="flex gap-4">
              <CheckCircle2 className="mt-1 size-5 shrink-0 text-success" />
              <div>
                <h3 className="font-semibold text-text-primary">{benefit.title}</h3>
                <p className="mt-1 text-sm leading-6 text-text-secondary">
                  {benefit.body}
                </p>
              </div>
            </div>
          ))}
        </div>
        <Card className="p-5">
          <div className="rounded-2xl bg-surface p-5">
            <div className="rounded-2xl border border-border-soft bg-white p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-blue-50 text-primary">
                    <FileText className="size-5" />
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-text-primary">
                      Document vault
                    </h3>
                    <p className="text-xs text-text-secondary">Reusable documents</p>
                  </div>
                </div>
                <Badge tone="green">Ready</Badge>
              </div>
              <div className="mt-5 space-y-3">
                {["Trade license", "TIN certificate", "Bank document"].map(
                  (item, index) => (
                    <div
                      key={item}
                      className="flex items-center justify-between rounded-xl bg-surface-alt px-3 py-3"
                    >
                      <span className="text-xs font-medium text-text-secondary">
                        {item}
                      </span>
                      {index < 2 ? (
                        <ShieldCheck className="size-4 text-success" />
                      ) : (
                        <Code2 className="size-4 text-primary" />
                      )}
                    </div>
                  ),
                )}
              </div>
            </div>
            <div className="mt-4 rounded-2xl border border-border-soft bg-white p-4">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-sm font-semibold text-text-primary">
                  Integration checklist
                </span>
                <Badge>3 tasks</Badge>
              </div>
              <div className="h-2 rounded-full bg-border-soft">
                <div className="h-2 w-2/3 rounded-full bg-primary" />
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
