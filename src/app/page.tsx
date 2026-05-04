import Link from "next/link";
import type { CSSProperties } from "react";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { CTASection } from "@/components/marketing/CTASection";
import { FAQAccordion } from "@/components/marketing/FAQAccordion";
import { FeatureCard } from "@/components/marketing/FeatureCard";
import { Footer } from "@/components/marketing/Footer";
import { Header } from "@/components/marketing/Header";
import { HeroMockup } from "@/components/marketing/HeroMockup";
import { OnboardingConfidenceSection } from "@/components/marketing/OnboardingConfidenceSection";
import { ProductIconStrip } from "@/components/marketing/ProductIconStrip";
import { AssessmentTriggerCard } from "@/components/marketing/AssessmentTriggerCard";
import { ResourceCard } from "@/components/marketing/ResourceCard";
import { PublicMotionController } from "@/components/motion/PublicMotionController";
import {
  featureCards,
  landingFaqs,
  resourceCards,
  valueColumns,
} from "@/data/mockPlatform";

export default function Home() {
  return (
    <>
      <Header />
      <PublicMotionController />
      <main>
        <section id="overview" className="soft-glow">
          <div className="container-xl grid gap-12 py-20 md:grid-cols-[0.92fr_1.08fr] md:items-center lg:py-24">
            <div>
              <h1
                className="max-w-xl text-4xl font-semibold leading-[1.08] tracking-normal text-text-primary md:text-[52px]"
                data-reveal="fade-up"
              >
                <span className="text-primary">Essential services</span> your business needs to move faster
              </h1>
              <p
                className="mt-5 max-w-xl text-base leading-7 text-text-secondary"
                data-reveal="fade-up"
                style={{ "--reveal-delay": "90ms" } as CSSProperties}
              >
                Activate payments, messaging, recharge, and field sales services from SSL Business Hub. Submit documents, track applications, and manage service activity from one place.
              </p>
              <div
                className="mt-7 flex flex-wrap gap-3"
                data-reveal="fade-up"
                style={{ "--reveal-delay": "180ms" } as CSSProperties}
              >
                <ButtonLink href="/get-started">Get started</ButtonLink>
                <ButtonLink href="/contact-sales" variant="secondary">
                  Contact sales
                </ButtonLink>
              </div>
            </div>
            <div
              data-reveal="scale-in"
              style={{ "--reveal-delay": "120ms" } as CSSProperties}
            >
              <div data-parallax data-parallax-speed="0.035">
                <HeroMockup />
              </div>
            </div>
          </div>

          <div className="container-xl pb-20 text-center">
            <div data-reveal="scale-in">
              <ProductIconStrip />
            </div>
            <h2
              className="mx-auto max-w-2xl text-3xl font-medium leading-tight text-text-primary"
              data-reveal="fade-up"
            >
              All the services your business needs, managed from one account.
            </h2>
            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {valueColumns.map((column, index) => (
                <div
                  key={column.title}
                  data-reveal="fade-up"
                  style={{ "--reveal-delay": `${index * 90}ms` } as CSSProperties}
                >
                  <h3 className="text-lg font-semibold text-text-primary">
                    {column.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-text-secondary">
                    {column.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="container-xl section-pad">
          <h2
            className="text-center text-3xl font-medium text-text-primary"
            data-reveal="fade-up"
          >
            One account. Many SSL services.
          </h2>
          <p
            className="mx-auto mt-3 max-w-2xl text-center text-sm leading-6 text-text-secondary"
            data-reveal="fade-up"
            style={{ "--reveal-delay": "90ms" } as CSSProperties}
          >
            Start with one service, then add more from the same SSL Business Hub account.
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {featureCards.map((card, index) => (
              <div
                key={card.title}
                className="h-full"
                data-reveal="fade-up"
                style={{ "--reveal-delay": `${index * 80}ms` } as CSSProperties}
              >
                <FeatureCard {...card} />
              </div>
            ))}
          </div>
          <p
            className="mx-auto mt-6 max-w-4xl text-center text-xs leading-5 text-text-secondary"
            data-reveal="fade-up"
          >
            Service availability, approval requirements, fees, and document checklists may vary by business type and selected product.
          </p>
        </section>

        <OnboardingConfidenceSection />

        <section id="faq" className="bg-surface-alt py-20">
          <div className="container-xl">
            <h2
              className="text-center text-3xl font-medium text-text-primary"
              data-reveal="fade-up"
            >
              Find the answers that you need.
            </h2>
            <div className="mt-10 grid gap-8 md:grid-cols-[1fr_280px]">
              <div data-reveal="fade-up">
                <FAQAccordion items={landingFaqs} />
              </div>
              <div className="space-y-4">
                <div data-reveal="fade-up">
                  <AssessmentTriggerCard />
                </div>
                <Card
                  className="p-5"
                  data-reveal="fade-up"
                  style={{ "--reveal-delay": "80ms" } as CSSProperties}
                >
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

        <section id="resources" className="container-xl section-pad">
          <h2
            className="max-w-xl text-3xl font-medium leading-tight text-text-primary"
            data-reveal="fade-up"
          >
            Learn how SSL services can support your business.
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {resourceCards.map((title, index) => (
              <div
                key={title}
                data-reveal="fade-up"
                style={{ "--reveal-delay": `${index * 80}ms` } as CSSProperties}
              >
                <ResourceCard title={title} index={index} />
              </div>
            ))}
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
