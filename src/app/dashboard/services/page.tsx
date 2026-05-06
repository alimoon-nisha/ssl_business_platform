import { DashboardShell } from "@/components/dashboard/DashboardShell";
import { ServiceCard } from "@/components/dashboard/ServiceCard";
import { services } from "@/data/mockPlatform";

export default function ServicesPage() {
  return (
    <DashboardShell>
      <div className="space-y-8">
        <section>
          <div className="mb-5">
            <h1 className="text-2xl font-semibold text-text-primary">
              Available services
            </h1>
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
      </div>
    </DashboardShell>
  );
}
