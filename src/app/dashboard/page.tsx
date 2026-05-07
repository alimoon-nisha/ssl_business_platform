import { FileCheck2, Headphones, LayoutGrid, ReceiptText, Upload, UserPlus, Wallet, WalletCards } from "lucide-react";
import { ActiveServiceList } from "@/components/dashboard/ActiveServiceList";
import { ApplicationStatusList } from "@/components/dashboard/ApplicationStatusList";
import { ApplicationToasts } from "@/components/dashboard/ApplicationToasts";
import { DocumentVaultSummary } from "@/components/dashboard/DocumentVaultSummary";
import { DashboardCounterCard } from "@/components/dashboard/DashboardCounterCard";
import { QuickActionCard } from "@/components/dashboard/QuickActionCard";
import { ReadinessBanner } from "@/components/dashboard/ReadinessBanner";
import { ServiceCard } from "@/components/dashboard/ServiceCard";
import { applications, invoices, services } from "@/data/mockPlatform";

const dashboardCounters = [
  {
    title: "Available services",
    value: `${services.length}`,
    // note: "Ready to explore",
    icon: LayoutGrid,
    tone: "gray" as const,
  },
  {
    title: "Current applications",
    value: `${applications.length}`,
    // note: "Across your workspace",
    icon: FileCheck2,
    tone: "gray" as const,
  }, 
  {
    title: "Invoices due",
    value: `${invoices.filter((invoice) => invoice.status === "Due").length}`,
    // note: "Open billing",
    icon: ReceiptText,
    tone: "gray" as const,
  },
   {
    title: "Prepaid wallet",
    value: "BDT 5,000",
    // note: "Available balance",
    icon: Wallet,
    tone: "gray" as const,
  },
];

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
      <ApplicationToasts />

      <ReadinessBanner />



      {/* <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {quickActions.map((action) => (
          <QuickActionCard key={action.title} {...action} />
        ))}
      </section> */}

      <ApplicationStatusList />




      <section className="pt-4">
        <div className="mb-8">
          <h2 className="text-2xl font-bold tracking-tight text-text-primary">Available services</h2>
          <p className="mt-2 text-[15px] font-medium text-text-secondary opacity-80">
            Start with one service and add more when your business needs them.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      {/* <DocumentVaultSummary /> */}
    </div>
  );
}
