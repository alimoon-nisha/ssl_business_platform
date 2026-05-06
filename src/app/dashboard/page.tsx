import { Headphones, Upload, UserPlus, WalletCards } from "lucide-react";
import { ApplicationStatusList } from "@/components/dashboard/ApplicationStatusList";
import { DocumentVaultSummary } from "@/components/dashboard/DocumentVaultSummary";
import { QuickActionCard } from "@/components/dashboard/QuickActionCard";
import { ReadinessBanner } from "@/components/dashboard/ReadinessBanner";

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

      <ApplicationStatusList />
      <DocumentVaultSummary />
    </div>
  );
}
