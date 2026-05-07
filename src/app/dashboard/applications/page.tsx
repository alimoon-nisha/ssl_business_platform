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
        title="Service Applications"
        body="Track the real-time status of your service activations. This area manages all in-progress, pending, and blocked application states across the SSL ecosystem."
        action={<ButtonLink href="/dashboard/services">Start a service</ButtonLink>}
      />

      <Card className="overflow-hidden p-0">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border-soft">
                {["Service", "Status", "Next step", "Action"].map((h) => (
                  <th
                    key={h}
                    className="px-8 py-4 text-left text-[11px] font-semibold uppercase tracking-[0.08em] text-text-secondary"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-border-soft">
              {applications.map((application) => (
                <tr key={application.id}>
                  <td className="px-8 py-5">
                    <Link
                      href={application.href}
                      className="block font-semibold text-[15px] text-text-primary hover:text-primary"
                    >
                      {application.service}
                    </Link>
                    <span className="mt-0.5 block text-xs text-text-secondary">
                      Last updated: {application.lastUpdated}
                    </span>
                  </td>
                  <td className="px-8 py-5">
                    <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ${statusClass(application.status)}`}>
                      {application.status}
                    </span>
                  </td>
                  <td className="px-8 py-5 text-[14px] text-text-secondary">
                    {application.nextStep}
                  </td>
                  <td className="px-8 py-5">
                    <ButtonLink href={application.href} variant="secondary" className="h-9 w-32 px-4 text-xs font-bold text-primary">
                      {application.cta}
                    </ButtonLink>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
