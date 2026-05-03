import { BarChart3, Play, Send, Smartphone, UsersRound } from "lucide-react";
import type { ProductKind } from "@/data/productContent";

function PreviewRows({ kind }: { kind: ProductKind }) {
  if (kind === "messaging") {
    return (
      <>
        <div className="space-y-3">
          {["Sender ID request", "Recipient upload", "Campaign draft", "Report view"].map(
            (item, index) => (
              <div key={item} className="flex items-center gap-3 rounded-xl bg-surface-alt p-3">
                <Send className={`size-4 ${index < 2 ? "text-primary" : "text-success"}`} />
                <div className="h-2 rounded-full bg-border" style={{ width: [150, 118, 172, 96][index] }} />
              </div>
            ),
          )}
        </div>
        <div className="rounded-xl bg-blue-50 p-4">
          <BarChart3 className="mb-4 size-5 text-primary" />
          <div className="space-y-2">
            {[72, 48, 88].map((width) => (
              <div key={width} className="h-2 rounded-full bg-white">
                <div className="h-2 rounded-full bg-primary/45" style={{ width }} />
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }

  if (kind === "recharge") {
    return (
      <>
        <div className="space-y-3">
          {["Operator selection", "Batch request", "Approval status", "History"].map(
            (item, index) => (
              <div key={item} className="flex items-center gap-3 rounded-xl bg-surface-alt p-3">
                <Smartphone className={`size-4 ${index === 2 ? "text-warning" : "text-success"}`} />
                <div className="h-2 rounded-full bg-border" style={{ width: [132, 170, 112, 84][index] }} />
              </div>
            ),
          )}
        </div>
        <div className="rounded-xl bg-green-50 p-4">
          <div className="h-2.5 w-20 rounded-full bg-success/35" />
          <div className="mt-5 h-20 rounded-xl bg-white" />
        </div>
      </>
    );
  }

  if (kind === "sales") {
    return (
      <>
        <div className="space-y-3">
          {["Visit planning", "Order capture", "Inventory sync", "Delivery tracking"].map(
            (item, index) => (
              <div key={item} className="flex items-center gap-3 rounded-xl bg-surface-alt p-3">
                <UsersRound className={`size-4 ${index < 2 ? "text-orange-800" : "text-primary"}`} />
                <div className="h-2 rounded-full bg-border" style={{ width: [148, 176, 126, 98][index] }} />
              </div>
            ),
          )}
        </div>
        <div className="rounded-xl bg-orange-50 p-4">
          <BarChart3 className="mb-4 size-5 text-orange-800" />
          <div className="space-y-2">
            {[84, 62, 76].map((width) => (
              <div key={width} className="h-2 rounded-full bg-white">
                <div className="h-2 rounded-full bg-orange-700/45" style={{ width }} />
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="space-y-3">
        {[76, 92, 58, 84].map((width) => (
          <div key={width} className="rounded-xl bg-surface-alt p-3">
            <div className="h-2 rounded-full bg-border" style={{ width }} />
          </div>
        ))}
      </div>
      <div className="rounded-xl bg-blue-50 p-4">
        <div className="h-2.5 w-20 rounded-full bg-primary/35" />
        <div className="mt-5 h-20 rounded-xl bg-white" />
      </div>
    </>
  );
}

export function VideoDemoBlock({
  title,
  label,
  kind,
}: {
  title: string;
  label: string;
  kind: ProductKind;
}) {
  return (
    <section className="container-xl pb-20 text-center">
      <h2 className="mx-auto max-w-2xl text-3xl font-medium leading-tight text-text-primary">
        {title}
      </h2>
      <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-border-soft bg-surface p-6">
        <div className="relative rounded-xl border border-border-soft bg-white p-5">
          <div className="mb-5 flex items-center gap-3 border-b border-border-soft pb-4">
            <span className="size-8 rounded-lg bg-blue-50" />
            <div>
              <div className="h-2.5 w-36 rounded-full bg-text-primary/70" />
              <div className="mt-2 h-2 w-24 rounded-full bg-border-soft" />
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-[1.3fr_0.7fr]">
            <PreviewRows kind={kind} />
          </div>
          <button
            type="button"
            className="absolute left-1/2 top-1/2 flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-white shadow-[0_8px_24px_rgba(26,115,232,0.25)]"
            aria-label={label}
          >
            <Play className="ml-1 size-7 fill-current" aria-hidden="true" />
          </button>
        </div>
      </div>
      <p className="mx-auto mt-4 max-w-2xl text-sm font-medium leading-6 text-text-secondary">
        {label}
      </p>
    </section>
  );
}
