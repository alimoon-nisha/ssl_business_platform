import { ArrowRight, FileCheck2 } from "lucide-react";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { CTASection } from "@/components/marketing/CTASection";
import { FAQAccordion } from "@/components/marketing/FAQAccordion";
import { FeatureCard } from "@/components/marketing/FeatureCard";
import { Footer } from "@/components/marketing/Footer";
import { Header } from "@/components/marketing/Header";
import { HeroMockup } from "@/components/marketing/HeroMockup";
import { NewsletterBlock } from "@/components/marketing/NewsletterBlock";
import { ProductIconStrip } from "@/components/marketing/ProductIconStrip";
import { AssessmentTriggerCard } from "@/components/marketing/AssessmentTriggerCard";
import { ResourceCard } from "@/components/marketing/ResourceCard";
import { ServicePlanCard } from "@/components/marketing/ServicePlanCard";
import {
  featureCards,
  landingFaqs,
  resourceCards,
  servicePlans,
  valueColumns,
} from "@/data/mockPlatform";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="soft-glow">
          <div className="container-xl grid gap-12 py-20 md:grid-cols-[0.92fr_1.08fr] md:items-center lg:py-24">
            <div>
              <h1 className="max-w-xl text-4xl font-semibold leading-[1.08] tracking-normal text-text-primary md:text-[52px]">
                The better way to start and manage business services
              </h1>
              <p className="mt-5 max-w-xl text-base leading-7 text-text-secondary">
                Activate payments, messaging, recharge, and digital solutions from one SSL account. Submit business documents once, track every application, and manage services from a single place.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <ButtonLink href="/get-started">Get started</ButtonLink>
                <ButtonLink href="/contact-sales" variant="secondary">
                  Contact sales
                </ButtonLink>
              </div>
            </div>
            <HeroMockup />
          </div>

          <section id="overview" className="container-lg pb-20 text-center">
            <h2 className="mx-auto max-w-2xl text-3xl font-medium leading-tight text-text-primary">
              All the services your business needs, managed from one account.
            </h2>
            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {valueColumns.map((column) => (
                <div key={column.title}>
                  <h3 className="text-lg font-semibold text-text-primary">
                    {column.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-text-secondary">
                    {column.body}
                  </p>
                </div>
              ))}
            </div>
            <ProductIconStrip />
          </section>
        </section>

        <section id="services" className="container-lg section-pad">
          <h2 className="text-center text-3xl font-medium text-text-primary">
            One account. Many SSL services.
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {featureCards.map((card) => (
              <FeatureCard key={card.title} {...card} />
            ))}
          </div>
        </section>

        <section id="activation" className="container-xl section-pad">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-medium leading-tight text-text-primary">
              Activate the right services for your business.
            </h2>
            <p className="mt-3 text-sm leading-6 text-text-secondary">
              Start with one service, then add more from the same SSL account.
            </p>
          </div>
          <div className="mt-10 grid gap-4 lg:grid-cols-4">
            {servicePlans.map((plan) => (
              <ServicePlanCard key={plan.name} {...plan} />
            ))}
          </div>
          <p className="mx-auto mt-6 max-w-4xl text-center text-xs leading-5 text-text-secondary">
            Service availability, approval requirements, fees, and document checklists may vary by business type and selected product.
          </p>
        </section>

        <section id="onboarding" className="container-lg py-16">
          <div className="grid gap-8 md:grid-cols-[1fr_0.8fr] md:items-center">
            <div className="max-w-lg">
              <h2 className="text-2xl font-medium leading-tight text-text-primary">
                Move your business setup into one SSL account.
              </h2>
              <p className="mt-4 text-sm leading-6 text-text-secondary">
                Existing SSL merchants and new businesses can bring their company profile, service applications, and documents into a single platform over time.
              </p>
              <Link
                href="/get-started"
                className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary"
              >
                Learn about onboarding
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
            <Card className="p-5">
              <div className="rounded-2xl bg-surface p-5">
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-green-50 text-success">
                    <FileCheck2 className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-text-primary">
                      Document vault
                    </h3>
                    <p className="text-xs text-text-secondary">Trade license reused</p>
                  </div>
                </div>
                <div className="h-2 rounded-full bg-white">
                  <div className="h-2 w-2/3 rounded-full bg-success" />
                </div>
              </div>
            </Card>
          </div>
        </section>

        <section id="faq" className="bg-surface-alt py-20">
          <div className="container-lg">
            <h2 className="text-center text-3xl font-medium text-text-primary">
              Find the answers that you need.
            </h2>
            <div className="mt-10 grid gap-8 md:grid-cols-[1fr_280px]">
              <FAQAccordion items={landingFaqs} />
              <div className="space-y-4">
                <AssessmentTriggerCard />
                <Card className="p-5">
                  <h3 className="font-semibold text-text-primary">Talk to sales</h3>
                  <p className="mt-2 text-sm leading-6 text-text-secondary">
                    Need help choosing a service or package? Our team can guide you.
                  </p>
                  <Link
                    href="/contact-sales"
                    className="mt-4 inline-flex text-sm font-medium text-primary"
                  >
                    Contact sales
                  </Link>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section id="resources" className="container-lg section-pad">
          <h2 className="max-w-xl text-3xl font-medium leading-tight text-text-primary">
            Learn how SSL services can support your business.
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {resourceCards.map((title, index) => (
              <ResourceCard key={title} title={title} index={index} />
            ))}
          </div>
        </section>

        <CTASection />
        <NewsletterBlock />
      </main>
      <Footer />
    </>
  );
}
