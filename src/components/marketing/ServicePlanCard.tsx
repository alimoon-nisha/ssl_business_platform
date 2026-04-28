import { Check } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/cn";

export function ServicePlanCard({
  name,
  description,
  cta,
  href,
  features,
  highlighted,
}: {
  name: string;
  description: string;
  cta: string;
  href: string;
  features: string[];
  highlighted?: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group flex min-h-full flex-col rounded-2xl border bg-white p-6 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
        highlighted
          ? "border-primary ring-1 ring-primary"
          : "border-border-soft hover:border-border",
      )}
      aria-label={`${cta} for ${name}`}
    >
      <div className="mb-5">
        <h3 className="text-xl font-semibold text-text-primary group-hover:text-primary">
          {name}
        </h3>
        <p className="mt-2 min-h-12 text-sm leading-6 text-text-secondary">
          {description}
        </p>
      </div>
      <span
        className={cn(
          "mb-6 inline-flex h-10 w-full items-center justify-center rounded-full border px-5 text-sm font-medium transition-colors",
          highlighted
            ? "border-primary bg-primary text-white group-hover:bg-primary-hover"
            : "border-border bg-white text-primary group-hover:bg-blue-50",
        )}
      >
        {cta}
      </span>
      <ul className="space-y-3 text-sm text-text-secondary">
        {features.map((feature) => (
          <li key={feature} className="flex gap-2.5">
            <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </Link>
  );
}
