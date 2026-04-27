import { Banknote, BarChart3, CreditCard, FileCode2, Landmark, Plug, Smartphone } from "lucide-react";

const icons = [CreditCard, Smartphone, Landmark, Banknote, FileCode2, Plug, BarChart3];

export function ProductTrustRow({
  title,
  subtitle,
  items,
  disclaimer,
}: {
  title: string;
  subtitle: string;
  items: string[];
  disclaimer: string;
}) {
  return (
    <section className="container-lg py-20 text-center">
      <div className="mb-6 flex items-center justify-center gap-3">
        {items.slice(0, 5).map((item, index) => {
          const Icon = icons[index];
          return (
            <span
              key={item}
              className="inline-flex size-9 items-center justify-center rounded-xl bg-blue-50 text-primary"
            >
              <Icon className="size-5" aria-hidden="true" />
            </span>
          );
        })}
      </div>
      <h2 className="mx-auto max-w-2xl text-3xl font-medium leading-tight text-text-primary">
        {title}
      </h2>
      <p className="mx-auto mt-4 max-w-3xl text-sm leading-6 text-text-secondary">
        {subtitle}
      </p>
      <div className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-3">
        {items.map((item, index) => {
          const Icon = icons[index] ?? CreditCard;
          return (
            <span
              key={item}
              className="inline-flex items-center gap-2 rounded-full border border-border-soft bg-white px-3 py-2 text-sm text-text-secondary"
            >
              <Icon className="size-4 text-primary" aria-hidden="true" />
              {item}
            </span>
          );
        })}
      </div>
      <p className="mx-auto mt-6 max-w-2xl text-xs leading-5 text-text-secondary">
        {disclaimer}
      </p>
    </section>
  );
}
