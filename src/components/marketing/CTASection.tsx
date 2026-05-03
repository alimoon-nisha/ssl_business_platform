import { CreditCard } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { MiniPaymentMarks } from "./ProductIconStrip";

export function CTASection({
  title = "Start your SSL Business Hub account today.",
  body = "Create your business profile, explore services, and begin activation when you are ready.",
  cta = "Get started",
  icon = "marks",
}: {
  title?: string;
  body?: string;
  cta?: string;
  icon?: "marks" | "payment";
}) {
  return (
    <section id="cta" className="container-xl py-16">
      <div className="rounded-sm bg-[#eaf3ff] px-6 py-16 text-center">
        {icon === "marks" ? (
          <MiniPaymentMarks />
        ) : (
          <span className="mx-auto flex size-12 items-center justify-center rounded-2xl bg-blue-50 text-primary">
            <CreditCard className="size-7" aria-hidden="true" />
          </span>
        )}
        <h2 className="mx-auto mt-6 max-w-full text-3xl font-medium leading-tight text-text-primary">
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
