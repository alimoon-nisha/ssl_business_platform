import { Headphones, Upload, UserPlus, WalletCards } from "lucide-react";
import { ApplicationStatusList } from "@/components/dashboard/ApplicationStatusList";
import { DocumentVaultSummary } from "@/components/dashboard/DocumentVaultSummary";
import { QuickActionCard } from "@/components/dashboard/QuickActionCard";
import { ReadinessBanner } from "@/components/dashboard/ReadinessBanner";
import { ServiceCard } from "@/components/dashboard/ServiceCard";
import { services } from "@/data/mockPlatform";

const quickActions = [
  {
    title: "Start SSLCOMMERZ application",
    body: "Prepare merchant onboarding.",
    icon: WalletCards,
    href: "/service-application/payment-gateway",
  },
  {
    title: "Upload documents",
    body: "Add missing business files.",
    icon: Upload,
    href: "/dashboard/documents",
  },
  {
    title: "Invite team member",
    body: "Share access with your team.",
    icon: UserPlus,
    href: "/dashboard/settings",
  },
  {
    title: "Contact support",
    body: "Get help with activation.",
    icon: Headphones,
    href: "/contact-sales",
  },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <ReadinessBanner />

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {quickActions.map((action) => (
          <QuickActionCard key={action.title} {...action} />
        ))}
      </section>

      <section>
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-text-primary">Available services</h2>
          <p className="mt-1 text-sm text-text-secondary">
            Start with one service and add more when your business needs them.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      <ApplicationStatusList />
      {/* <DocumentVaultSummary /> */}
    </div>
  );
}
