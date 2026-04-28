import { ProductDetailPage } from "@/components/product/ProductDetailPage";
import { paymentGatewayProduct } from "@/data/productContent";

export default function PaymentGatewayPage() {
  return <ProductDetailPage product={paymentGatewayProduct} />;
}
