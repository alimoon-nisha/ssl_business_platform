import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { applications } from "@/data/mockPlatform";

function statusClass(status: string) {
  if (status.includes("Missing")) return "bg-amber-50 text-amber-700";
  if (status.includes("Draft")) return "bg-surface-alt text-text-secondary";
  return "bg-blue-50 text-primary";
}

export function ApplicationStatusList() {
  return (
    <Card className="p-6">
      <div className="mb-5 flex items-center justify-between gap-4">
        <h2 className="text-xl font-semibold text-text-primary">Applications</h2>
        <ButtonLink href="/get-started" variant="ghost" className="h-9 px-4">
          View all
        </ButtonLink>
      </div>
      <div className="divide-y divide-border-soft">
        {applications.map((application) => (
          <div
            key={application.service}
            className="grid gap-3 py-4 text-sm md:grid-cols-[1.2fr_0.8fr_0.9fr_auto] md:items-center"
          >
            <div>
              <p className="font-medium text-text-primary">{application.service}</p>
              <p className="mt-1 text-xs text-text-secondary">
                Last updated: {application.lastUpdated}
              </p>
            </div>
            <span className={`w-fit rounded-full px-2.5 py-1 text-xs font-medium ${statusClass(application.status)}`}>
              {application.status}
            </span>
            <p className="text-text-secondary">{application.nextStep}</p>
            <ButtonLink href="/get-started" variant="secondary" className="h-9 px-4">
              {application.cta}
            </ButtonLink>
          </div>
        ))}
      </div>
    </Card>
  );
}
