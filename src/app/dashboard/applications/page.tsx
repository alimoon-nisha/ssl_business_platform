import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { DashboardPageHeader, StatusBadge } from "@/components/dashboard/DashboardPrimitives";
import { applications } from "@/data/mockPlatform";

export default function ApplicationsPage() {
  return (
    <div className="space-y-8">
      <DashboardPageHeader
        eyebrow="Applications"
        title="Service applications"
        body="Track every application, understand the next step, and continue setup from one place."
        action={<ButtonLink href="/dashboard/services">Start a service</ButtonLink>}
      />

      <Card className="overflow-hidden">
        <div className="grid gap-3 border-b border-border-soft px-6 py-4 text-xs font-semibold uppercase tracking-[0.12em] text-text-secondary md:grid-cols-[1.2fr_0.8fr_0.8fr_1fr_auto]">
          <span>Service</span>
          <span>Status</span>
          <span>Updated</span>
          <span>Next step</span>
          <span className="text-right">Action</span>
        </div>
        <div className="divide-y divide-border-soft">
          {applications.map((application) => (
            <div
              key={application.id}
              className="grid gap-4 px-6 py-5 text-sm md:grid-cols-[1.2fr_0.8fr_0.8fr_1fr_auto] md:items-center"
            >
              <Link
                href={application.href}
                className="font-semibold text-text-primary hover:text-primary"
              >
                {application.service}
              </Link>
              <StatusBadge status={application.status} />
              <span className="text-text-secondary">{application.lastUpdated}</span>
              <span className="text-text-secondary">{application.nextStep}</span>
              <div className="flex justify-start md:justify-end">
                <ButtonLink href={application.href} variant="secondary" className="h-9 px-4">
                  View
                  <ArrowRight className="size-4" aria-hidden="true" />
                </ButtonLink>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
