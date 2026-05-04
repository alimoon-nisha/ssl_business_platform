import { Footer } from "@/components/marketing/Footer";
import { Header } from "@/components/marketing/Header";
import { PublicMotionController } from "@/components/motion/PublicMotionController";
import { ProductBenefits } from "@/components/product/ProductBenefits";
import { ProductCTA } from "@/components/product/ProductCTA";
import { ProductFAQ } from "@/components/product/ProductFAQ";
import { ProductHero } from "@/components/product/ProductHero";
import { ProductPricing } from "@/components/product/ProductPricing";
import { ProductRequirements } from "@/components/product/ProductRequirements";
import { ProductTrustRow } from "@/components/product/ProductTrustRow";
import { SetupSteps } from "@/components/product/SetupSteps";
import { VideoDemoBlock } from "@/components/product/VideoDemoBlock";
import type { ProductDetailContent } from "@/data/productContent";

export function ProductDetailPage({ product }: { product: ProductDetailContent }) {
  const startHref = `/get-started?service=${product.slug}`;
  const secondaryHref = product.secondaryCta.toLowerCase().includes("contact sales")
    ? "/contact-sales"
    : startHref;

  return (
    <>
      <Header />
      <PublicMotionController />
      <main>
        <ProductHero
          label={product.label}
          serviceName={product.serviceName}
          headline={product.headline}
          body={product.body}
          primaryCta={product.primaryCta}
          secondaryCta={product.secondaryCta}
          primaryHref={startHref}
          secondaryHref={secondaryHref}
          kind={product.kind}
          icon={product.heroIcon}
        />
        <ProductTrustRow
          title={product.trustTitle}
          subtitle={product.trustSubtitle}
          items={product.trustItems}
          disclaimer={product.trustDisclaimer}
          icons={product.chipIcons}
          valueCards={product.valueCards}
        />
        <VideoDemoBlock
          title={product.demoTitle}
          label={product.demoLabel}
          kind={product.kind}
        />
        <SetupSteps title={product.stepsTitle} steps={product.steps} />
        <ProductBenefits
          title={product.benefitsTitle}
          benefits={product.benefits}
          kind={product.kind}
        />
        {product.pricing ? <ProductPricing pricing={product.pricing} /> : null}
        {product.requirements ? (
          <ProductRequirements
            title={product.requirements.title}
            items={product.requirements.items}
            note={product.requirements.note}
          />
        ) : null}
        <ProductFAQ
          title={product.faqTitle}
          description={product.faqDescription}
          faqs={product.faqs}
        />
        <ProductCTA
          title={product.finalTitle}
          body={product.finalBody}
          cta={product.finalButton}
          href={startHref}
          icon={product.heroIcon}
        />
      </main>
      <Footer />
    </>
  );
}
