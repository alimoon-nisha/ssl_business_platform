import { Check } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
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
    <article
      className={cn(
        "flex min-h-full flex-col rounded-2xl border bg-white p-6",
        highlighted ? "border-primary ring-1 ring-primary" : "border-border-soft",
      )}
    >
      <div className="mb-5">
        <h3 className="text-xl font-semibold text-text-primary">{name}</h3>
        <p className="mt-2 min-h-12 text-sm leading-6 text-text-secondary">
          {description}
        </p>
      </div>
      <ButtonLink
        href={href}
        variant={highlighted ? "primary" : "secondary"}
        className="mb-6 h-10 w-full"
      >
        {cta}
      </ButtonLink>
      <ul className="space-y-3 text-sm text-text-secondary">
        {features.map((feature) => (
          <li key={feature} className="flex gap-2.5">
            <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
