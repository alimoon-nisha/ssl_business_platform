import { CTASection } from "@/components/marketing/CTASection";

export function ProductCTA({ title, body }: { title: string; body: string }) {
  return <CTASection title={title} body={body} cta="Get started" icon="payment" />;
}
