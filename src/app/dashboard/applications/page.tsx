import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { DashboardPageHeader } from "@/components/dashboard/DashboardPrimitives";
import { applications } from "@/data/mockPlatform";

function statusClass(status: string) {
  if (status.includes("Missing")) return "bg-orange-50 text-orange-700";
  if (status.includes("Draft")) return "bg-surface-alt text-text-secondary";
  if (status.includes("Not started") || status.includes("Contact sales")) return "bg-indigo-50 text-indigo-700";
  return "bg-blue-50 text-primary";
}

export default function ApplicationsPage() {
  return (
    <div className="space-y-8">
      <DashboardPageHeader
        eyebrow="Applications"
        title="Service applications"
        body="Track every application, understand the next step, and continue setup from one place."
        action={<ButtonLink href="/dashboard/services">Start a service</ButtonLink>}
      />

      <Card className="p-6 md:p-8">
        <div className="divide-y divide-border-soft">
          {applications.map((application) => (
            <div
              key={application.id}
              className="grid gap-3 py-5 text-sm md:grid-cols-[minmax(0,1.3fr)_10rem_minmax(0,1fr)_9.5rem] md:gap-x-6 md:items-center"
            >
              <div className="min-w-0">
                <Link
                  href={application.href}
                  className="block font-semibold text-[15px] text-text-primary hover:text-primary"
                >
                  {application.service}
                </Link>
                <p className="mt-1 text-xs text-text-secondary">
                  Last updated: {application.lastUpdated}
                </p>
              </div>
              <span className={`w-fit rounded-full px-2.5 py-1 text-xs font-semibold ${statusClass(application.status)}`}>
                {application.status}
              </span>
              <p className="min-w-0 text-text-secondary">{application.nextStep}</p>
              <ButtonLink href={application.href} variant="secondary" className="h-10 w-full px-4 font-semibold text-primary">
                {application.cta}
              </ButtonLink>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
