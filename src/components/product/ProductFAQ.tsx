import { FAQAccordion } from "@/components/marketing/FAQAccordion";

export function ProductFAQ({
  title,
  description,
  faqs,
}: {
  title: string;
  description: string;
  faqs: string[];
}) {
  return (
    <section className="container-xl pb-20">
      <div className="mx-auto max-w-3xl text-center" data-reveal="fade-up">
        <h2 className="text-3xl font-medium text-text-primary">
          {title}
        </h2>
        <p className="mt-3 text-sm leading-6 text-text-secondary">
          {description}
        </p>
      </div>
      <div className="mx-auto mt-8 max-w-4xl" data-reveal="fade-up">
        <FAQAccordion items={faqs} />
      </div>
    </section>
  );
}
