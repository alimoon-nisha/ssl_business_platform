import { FAQAccordion } from "@/components/marketing/FAQAccordion";

export function ProductFAQ({ faqs }: { faqs: string[] }) {
  return (
    <section className="container-lg pb-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-medium text-text-primary">
          Payment gateway FAQs
        </h2>
        <p className="mt-3 text-sm leading-6 text-text-secondary">
          Answers to common questions about SSLCOMMERZ activation and business profile reuse.
        </p>
      </div>
      <div className="mx-auto mt-8 max-w-4xl">
        <FAQAccordion items={faqs} />
      </div>
    </section>
  );
}
