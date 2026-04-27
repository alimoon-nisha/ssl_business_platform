import { Footer } from "@/components/marketing/Footer";
import { Header } from "@/components/marketing/Header";
import { NewsletterBlock } from "@/components/marketing/NewsletterBlock";
import { ProductBenefits } from "@/components/product/ProductBenefits";
import { ProductCTA } from "@/components/product/ProductCTA";
import { ProductFAQ } from "@/components/product/ProductFAQ";
import { ProductHero } from "@/components/product/ProductHero";
import { ProductTrustRow } from "@/components/product/ProductTrustRow";
import { SetupSteps } from "@/components/product/SetupSteps";
import { VideoDemoBlock } from "@/components/product/VideoDemoBlock";
import { paymentGatewayProduct } from "@/data/productContent";

export default function PaymentGatewayPage() {
  const product = paymentGatewayProduct;

  return (
    <>
      <Header />
      <main>
        <ProductHero
          label={product.label}
          headline={product.headline}
          body={product.body}
          primaryCta={product.primaryCta}
          secondaryCta={product.secondaryCta}
        />
        <ProductTrustRow
          title={product.trustTitle}
          subtitle={product.trustSubtitle}
          items={product.trustItems}
          disclaimer={product.trustDisclaimer}
        />
        <VideoDemoBlock title={product.demoTitle} label={product.demoLabel} />
        <SetupSteps steps={product.steps} />
        <ProductBenefits benefits={product.benefits} />
        <ProductFAQ faqs={product.faqs} />
        <ProductCTA title={product.finalTitle} body={product.finalBody} />
        <NewsletterBlock />
      </main>
      <Footer />
    </>
  );
}
