import type { LucideIcon } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";

export function ProductCTA({
  title,
  body,
  cta,
  icon: Icon,
}: {
  title: string;
  body: string;
  cta: string;
  icon: LucideIcon;
}) {
  return (
    <section className="container-lg py-16">
      <div className="rounded-sm bg-surface-alt px-6 py-16 text-center">
        <span className="mx-auto flex size-12 items-center justify-center rounded-2xl bg-blue-50 text-primary">
          <Icon className="size-7" aria-hidden="true" />
        </span>
        <h2 className="mx-auto mt-6 max-w-xl text-3xl font-medium leading-tight text-text-primary">
          {title}
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-text-secondary">
          {body}
        </p>
        <ButtonLink href="/get-started" className="mt-6 h-10 px-5">
          {cta}
        </ButtonLink>
      </div>
    </section>
  );
}
