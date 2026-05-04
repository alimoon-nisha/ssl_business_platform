import { CheckCircle2 } from "lucide-react";
import type { CSSProperties } from "react";
import { Card } from "@/components/ui/Card";

export function ProductRequirements({
  title,
  items,
  note,
}: {
  title: string;
  items: string[];
  note: string;
}) {
  return (
    <section className="container-xl pb-20">
      <Card
        className="grid gap-8 p-6 md:grid-cols-[0.75fr_1.25fr] md:p-8"
        data-reveal="fade-up"
      >
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-text-secondary">
            Requirements
          </p>
          <h2 className="mt-3 text-3xl font-medium leading-tight text-text-primary">
            {title}
          </h2>
          <p className="mt-4 text-sm leading-6 text-text-secondary">{note}</p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {items.map((item, index) => (
            <div
              key={item}
              className="flex items-start gap-3 rounded-xl bg-surface-alt px-4 py-3"
              data-reveal="fade-up"
              style={{ "--reveal-delay": `${index * 60}ms` } as CSSProperties}
            >
              <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-success" />
              <span className="text-sm leading-5 text-text-secondary">{item}</span>
            </div>
          ))}
        </div>
      </Card>
    </section>
  );
}
