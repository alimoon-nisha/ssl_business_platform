import type { Metadata } from "next";
import { ContactSalesForm } from "@/components/contact/ContactSalesForm";
import { Footer } from "@/components/marketing/Footer";
import { Header } from "@/components/marketing/Header";
import { Badge } from "@/components/ui/Badge";
import { serviceSupportChips } from "@/data/contactSales";

export const metadata: Metadata = {
  title: "Contact sales | SSL Business Platform",
  description:
    "Contact SSL Wireless sales for service guidance, package questions, custom pricing, onboarding help, or support routing.",
};

export default function ContactSalesPage() {
  return (
    <>
      <Header showContactSalesLink={false} />
      <main>
        <section className="container-xl section-pad">
          <ContactSalesForm />
        </section>

        <section className="border-y border-border-soft bg-surface-alt py-10">
          <div className="container-lg">
            <h2 className="text-center text-2xl font-semibold text-text-primary">
              Sales support across SSL services
            </h2>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              {serviceSupportChips.map((chip) => (
                <Badge key={chip} tone="gray">
                  {chip}
                </Badge>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
