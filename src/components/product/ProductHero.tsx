import { CreditCard } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";

function MerchantVisual() {
  return (
    <div className="relative mx-auto max-w-[500px]">
      <div className="absolute -left-2 top-7 z-10 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-medium text-primary shadow-sm">
        Application under review
      </div>
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
    </div>
  );
}

export function ProductHero({
  label,
  headline,
  body,
  primaryCta,
  secondaryCta,
}: {
  label: string;
  headline: string;
  body: string;
  primaryCta: string;
  secondaryCta: string;
}) {
  return (
    <section className="soft-glow">
      <div className="container-lg grid gap-12 py-20 md:grid-cols-[0.95fr_1.05fr] md:items-center">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 text-sm font-medium text-text-secondary">
            <span className="flex size-8 items-center justify-center rounded-lg bg-blue-50 text-primary">
              <CreditCard className="size-5" aria-hidden="true" />
            </span>
            {label}
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
        <MerchantVisual />
      </div>
    </section>
  );
}
