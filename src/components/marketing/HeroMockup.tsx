import { Badge } from "@/components/ui/Badge";

const sidebarDots = ["bg-primary", "bg-success", "bg-warning", "bg-error"];

export function HeroMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[520px]">
      <div className="absolute -left-5 top-12 hidden rounded-full border border-border-soft bg-white px-3 py-1.5 text-xs font-medium text-success shadow-sm md:block">
        Documents reused
      </div>
      <div className="absolute -right-2 bottom-12 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-medium text-primary shadow-sm">
        Under review
      </div>
      <div className="rounded-[28px] border border-border-soft bg-white p-4 shadow-[0_16px_40px_rgba(60,64,67,0.08)]">
        <div className="rounded-2xl border border-border-soft bg-surface p-4">
          <div className="mb-4 flex items-center justify-between border-b border-border-soft pb-3">
            <div>
              <div className="h-2.5 w-24 rounded-full bg-primary/15" />
              <div className="mt-2 h-2 w-36 rounded-full bg-border-soft" />
            </div>
            <Badge tone="green">65% ready</Badge>
          </div>

          <div className="grid grid-cols-[54px_1fr_122px] gap-4">
            <div className="rounded-2xl border border-border-soft bg-white p-3">
              <div className="space-y-3">
                {sidebarDots.map((dot) => (
                  <span key={dot} className={`block size-6 rounded-lg ${dot}`} />
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-border-soft bg-white p-4">
              <div className="mb-4 flex items-center gap-3">
                <span className="size-9 rounded-xl bg-blue-50" />
                <div>
                  <div className="h-2.5 w-28 rounded-full bg-text-primary/75" />
                  <div className="mt-2 h-2 w-20 rounded-full bg-border-soft" />
                </div>
              </div>
              <div className="space-y-3">
                {["Company details", "Authorized contact", "Document vault"].map(
                  (item, index) => (
                    <div
                      key={item}
                      className="flex items-center justify-between rounded-xl bg-surface-alt px-3 py-2"
                    >
                      <span className="text-[11px] font-medium text-text-secondary">
                        {item}
                      </span>
                      <span
                        className={`size-2 rounded-full ${
                          index === 2 ? "bg-warning" : "bg-success"
                        }`}
                      />
                    </div>
                  ),
                )}
              </div>
            </div>

            <div className="rounded-2xl border border-border-soft bg-white p-3">
              <div className="mb-3 h-2.5 w-20 rounded-full bg-text-primary/70" />
              <div className="space-y-3">
                {["SSLCOMMERZ", "Bulk SMS", "Top-Up"].map((item, index) => (
                  <div key={item} className="rounded-xl border border-border-soft p-2">
                    <div className="h-2 w-16 rounded-full bg-border-soft" />
                    <div className="mt-2 h-1.5 w-10 rounded-full bg-border-soft" />
                    <div
                      className={`mt-3 h-1.5 rounded-full ${
                        index === 0 ? "w-16 bg-primary" : "w-10 bg-border"
                      }`}
                    />
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
