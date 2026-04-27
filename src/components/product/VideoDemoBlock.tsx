import { Play } from "lucide-react";

export function VideoDemoBlock({
  title,
  label,
}: {
  title: string;
  label: string;
}) {
  return (
    <section className="container-lg pb-20 text-center">
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
      <p className="mt-4 text-sm font-medium text-text-secondary">{label}</p>
    </section>
  );
}
