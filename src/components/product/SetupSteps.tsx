import { ArrowRight, Building2, FileCheck2, PlugZap } from "lucide-react";
import Link from "next/link";
import { IconBadge } from "@/components/ui/IconBadge";

const stepIcons = [Building2, FileCheck2, PlugZap];

export function SetupSteps({
  steps,
}: {
  steps: Array<{ title: string; body: string; cta: string }>;
}) {
  return (
    <section className="bg-surface-alt py-20">
      <div className="container-lg text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-text-secondary">
          How it works
        </p>
        <h2 className="mx-auto mt-3 max-w-xl text-3xl font-medium leading-tight text-text-primary">
          Start accepting payments in a few clear steps
        </h2>
        <div className="mt-12 grid gap-8 text-left md:grid-cols-3">
          {steps.map((step, index) => (
            <article key={step.title}>
              <IconBadge icon={stepIcons[index]} />
              <h3 className="mt-5 text-lg font-semibold text-text-primary">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-text-secondary">{step.body}</p>
              <Link
                href="/get-started"
                className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary"
              >
                {step.cta}
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
