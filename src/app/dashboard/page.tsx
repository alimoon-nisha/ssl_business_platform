import { Headphones, Upload, UserPlus, WalletCards } from "lucide-react";
import { ApplicationStatusList } from "@/components/dashboard/ApplicationStatusList";
import { DashboardShell } from "@/components/dashboard/DashboardShell";
import { DocumentVaultSummary } from "@/components/dashboard/DocumentVaultSummary";
import { QuickActionCard } from "@/components/dashboard/QuickActionCard";
import { ReadinessBanner } from "@/components/dashboard/ReadinessBanner";

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

        <ApplicationStatusList />
        <DocumentVaultSummary />
      </div>
    </DashboardShell>
  );
}
