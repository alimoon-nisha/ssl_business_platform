import { Headphones, Upload, UserPlus, WalletCards } from "lucide-react";
import { ApplicationStatusList } from "@/components/dashboard/ApplicationStatusList";
import { BillingSupportCard } from "@/components/dashboard/BillingSupportCard";
import { DashboardShell } from "@/components/dashboard/DashboardShell";
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
  },
  {
    title: "Upload documents",
    body: "Add missing business files.",
    icon: Upload,
  },
  {
    title: "Invite team member",
    body: "Share access with your team.",
    icon: UserPlus,
  },
  {
    title: "Contact support",
    body: "Get help with activation.",
    icon: Headphones,
  },
];

export default function DashboardPage() {
  return (
    <DashboardShell>
      <div className="space-y-8">
        <ReadinessBanner />

        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {quickActions.map((action) => (
            <QuickActionCard key={action.title} {...action} />
          ))}
        </section>

        <section>
          <div className="mb-5">
            <h2 className="text-2xl font-semibold text-text-primary">
              Available services
            </h2>
            <p className="mt-2 text-sm text-text-secondary">
              Start with one service and add more when your business needs them.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </section>

        <ApplicationStatusList />
        <DocumentVaultSummary />
        <BillingSupportCard />
      </div>
    </DashboardShell>
  );
}
