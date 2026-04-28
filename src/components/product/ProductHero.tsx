import type { LucideIcon } from "lucide-react";
import { BarChart3, CalendarClock, CreditCard, MessageSquareText, Send, Smartphone, Upload } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import type { ProductKind } from "@/data/productContent";

function PaymentHeroVisual() {
  return (
    <div className="rounded-[28px] border border-border-soft bg-white p-4 shadow-[0_16px_40px_rgba(60,64,67,0.08)]">
      <div className="rounded-2xl border border-border-soft bg-surface p-4">
        <div className="grid gap-4 md:grid-cols-[1fr_150px]">
          <div className="rounded-2xl border border-border-soft bg-white p-4">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <div className="h-3 w-28 rounded-full bg-text-primary/70" />
                <div className="mt-2 h-2 w-20 rounded-full bg-border-soft" />
              </div>
              <CreditCard className="size-7 text-primary" />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {["Card", "Wallet", "Bank", "EMI"].map((item, index) => (
                <div key={item} className="rounded-xl border border-border-soft p-2 text-center">
                  <span
                    className={`mx-auto block size-5 rounded-md ${
                      index === 0
                        ? "bg-primary"
                        : index === 1
                          ? "bg-success"
                          : index === 2
                            ? "bg-warning"
                            : "bg-error"
                    }`}
                  />
                  <span className="mt-2 block text-[10px] text-text-secondary">
                    {item}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-2xl bg-blue-50 p-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-primary">
                  Gateway readiness
                </span>
                <span className="text-xs text-text-secondary">72%</span>
              </div>
              <div className="mt-3 h-2 rounded-full bg-white">
                <div className="h-2 w-[72%] rounded-full bg-primary" />
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="rounded-2xl border border-border-soft bg-white p-4">
              <Badge tone="green">Submitted</Badge>
              <div className="mt-4 h-2 w-24 rounded-full bg-border-soft" />
              <div className="mt-3 h-2 w-16 rounded-full bg-border-soft" />
            </div>
            <div className="rounded-2xl border border-border-soft bg-white p-4">
              <div className="h-2.5 w-20 rounded-full bg-text-primary/70" />
              <div className="mt-4 space-y-2">
                <div className="h-2 rounded-full bg-border-soft" />
                <div className="h-2 w-2/3 rounded-full bg-border-soft" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MessagingHeroVisual() {
  return (
    <div className="rounded-[28px] border border-border-soft bg-white p-4 shadow-[0_16px_40px_rgba(60,64,67,0.08)]">
      <div className="rounded-2xl border border-border-soft bg-surface p-4">
        <div className="grid gap-4 md:grid-cols-[1fr_156px]">
          <div className="rounded-2xl border border-border-soft bg-white p-4">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <div className="h-3 w-24 rounded-full bg-text-primary/70" />
                <div className="mt-2 h-2 w-32 rounded-full bg-border-soft" />
              </div>
              <MessageSquareText className="size-7 text-primary" />
            </div>
            <div className="rounded-2xl bg-blue-50 p-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-primary">
                  Sender ID
                </span>
                <Badge tone="green">Ready</Badge>
              </div>
              <div className="mt-4 h-2 rounded-full bg-white">
                <div className="h-2 w-[82%] rounded-full bg-primary" />
              </div>
            </div>
            <div className="mt-4 space-y-3">
              {["Eid offer campaign", "Service alert", "Reminder sequence"].map(
                (item, index) => (
                  <div
                    key={item}
                    className="flex items-center justify-between rounded-xl border border-border-soft px-3 py-2.5"
                  >
                    <div className="flex items-center gap-2">
                      <Send className="size-4 text-primary" />
                      <span className="text-[11px] font-medium text-text-secondary">
                        {item}
                      </span>
                    </div>
                    <span
                      className={`size-2 rounded-full ${
                        index === 0 ? "bg-success" : index === 1 ? "bg-warning" : "bg-primary"
                      }`}
                    />
                  </div>
                ),
              )}
            </div>
          </div>
          <div className="space-y-4">
            <div className="rounded-2xl border border-border-soft bg-white p-4">
              <Upload className="mb-3 size-5 text-success" />
              <div className="h-2 w-24 rounded-full bg-border-soft" />
              <div className="mt-3 h-2 w-14 rounded-full bg-border-soft" />
            </div>
            <div className="rounded-2xl border border-border-soft bg-white p-4">
              <BarChart3 className="mb-3 size-5 text-primary" />
              <div className="space-y-2">
                {[70, 48, 84].map((width) => (
                  <div key={width} className="h-2 rounded-full bg-blue-50">
                    <div className="h-2 rounded-full bg-primary/45" style={{ width }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function RechargeHeroVisual() {
  return (
    <div className="rounded-[28px] border border-border-soft bg-white p-4 shadow-[0_16px_40px_rgba(60,64,67,0.08)]">
      <div className="rounded-2xl border border-border-soft bg-surface p-4">
        <div className="grid gap-4 md:grid-cols-[1fr_160px]">
          <div className="rounded-2xl border border-border-soft bg-white p-4">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <div className="h-3 w-28 rounded-full bg-text-primary/70" />
                <div className="mt-2 h-2 w-20 rounded-full bg-border-soft" />
              </div>
              <Smartphone className="size-7 text-success" />
            </div>
            <div className="grid grid-cols-3 gap-2">
              {["GP", "Robi", "BL"].map((item, index) => (
                <div key={item} className="rounded-xl border border-border-soft p-2 text-center">
                  <span
                    className={`mx-auto block size-5 rounded-md ${
                      index === 0 ? "bg-success" : index === 1 ? "bg-warning" : "bg-primary"
                    }`}
                  />
                  <span className="mt-2 block text-[10px] text-text-secondary">
                    {item}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-2xl bg-green-50 p-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-success">Monthly limit</span>
                <span className="text-xs text-text-secondary">68%</span>
              </div>
              <div className="mt-3 h-2 rounded-full bg-white">
                <div className="h-2 w-[68%] rounded-full bg-success" />
              </div>
            </div>
            <div className="mt-4 rounded-xl border border-border-soft px-3 py-2.5">
              <div className="flex items-center gap-2">
                <CalendarClock className="size-4 text-primary" />
                <span className="text-[11px] font-medium text-text-secondary">
                  Batch recharge preview
                </span>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="rounded-2xl border border-border-soft bg-white p-4">
              <Badge tone="amber">Approval</Badge>
              <div className="mt-4 h-2 w-24 rounded-full bg-border-soft" />
              <div className="mt-3 h-2 w-16 rounded-full bg-border-soft" />
            </div>
            <div className="rounded-2xl border border-border-soft bg-white p-4">
              <div className="h-2.5 w-20 rounded-full bg-text-primary/70" />
              <div className="mt-4 space-y-2">
                <div className="h-2 rounded-full bg-border-soft" />
                <div className="h-2 w-2/3 rounded-full bg-border-soft" />
                <div className="h-2 w-1/2 rounded-full bg-border-soft" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductHeroVisual({ kind }: { kind: ProductKind }) {
  return (
    <div className="relative mx-auto max-w-[500px]">
      <div className="absolute -left-2 top-7 z-10 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-medium text-primary shadow-sm">
        {kind === "payment"
          ? "Application under review"
          : kind === "messaging"
            ? "Scheduled message"
            : "Batch request ready"}
      </div>
      {kind === "payment" ? (
        <PaymentHeroVisual />
      ) : kind === "messaging" ? (
        <MessagingHeroVisual />
      ) : (
        <RechargeHeroVisual />
      )}
    </div>
  );
}

export function ProductHero({
  label,
  serviceName,
  headline,
  body,
  primaryCta,
  secondaryCta,
  kind,
  icon: Icon,
}: {
  label: string;
  serviceName?: string;
  headline: string;
  body: string;
  primaryCta: string;
  secondaryCta: string;
  kind: ProductKind;
  icon: LucideIcon;
}) {
  return (
    <section className="soft-glow">
      <div className="container-lg grid gap-12 py-20 md:grid-cols-[0.95fr_1.05fr] md:items-center">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 text-sm font-medium text-text-secondary">
            <span className="flex size-8 items-center justify-center rounded-lg bg-blue-50 text-primary">
              <Icon className="size-5" aria-hidden="true" />
            </span>
            <span>
              {serviceName && serviceName !== label ? (
                <span className="font-semibold text-text-primary">{serviceName}</span>
              ) : null}
              {serviceName && serviceName !== label ? (
                <span className="mx-2 text-border">|</span>
              ) : null}
              {label}
            </span>
          </div>
          <h1 className="max-w-xl text-4xl font-semibold leading-[1.08] tracking-normal text-text-primary md:text-5xl">
            {headline}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-text-secondary">
            {body}
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <ButtonLink href="/get-started">{primaryCta}</ButtonLink>
            <ButtonLink href="/get-started" variant="secondary">
              {secondaryCta}
            </ButtonLink>
          </div>
        </div>
        <ProductHeroVisual kind={kind} />
      </div>
    </section>
  );
}
