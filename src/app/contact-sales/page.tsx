import type { Metadata } from "next";
import { ContactSalesForm } from "@/components/contact/ContactSalesForm";
import { Footer } from "@/components/marketing/Footer";
import { Header } from "@/components/marketing/Header";

export const metadata: Metadata = {
  title: "Contact sales | SSL Business Hub",
  description:
    "Contact SSL Wireless sales for service guidance, package questions, custom pricing, onboarding help, or support routing.",
};

export default function ContactSalesPage() {
  return (
    <>
      <Header />
      <main>
        <section className="container-xl section-pad">
          <ContactSalesForm />
        </section>
      </main>
      <Footer />
    </>
  );
}
