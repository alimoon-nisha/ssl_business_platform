import { ServicePlanCard } from "@/components/marketing/ServicePlanCard";
import type { ProductDetailContent } from "@/data/productContent";

export function ProductPricing({
  pricing,
}: {
  pricing: NonNullable<ProductDetailContent["pricing"]>;
}) {
  return (
    <section id="pricing" className="container-xl section-pad">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-medium leading-tight text-text-primary">
          {pricing.title}
        </h2>
        <p className="mt-3 text-sm leading-6 text-text-secondary">
          {pricing.description}
        </p>
      </div>
      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        {pricing.plans.map((plan) => (
          <ServicePlanCard key={plan.name} {...plan} />
        ))}
      </div>
      <p className="mx-auto mt-6 max-w-4xl text-center text-xs leading-5 text-text-secondary">
        {pricing.disclaimer}
      </p>
    </section>
  );
}
