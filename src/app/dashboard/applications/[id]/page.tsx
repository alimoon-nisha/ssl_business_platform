import { notFound } from "next/navigation";
import { Clock3, FileText, MessageSquareText } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { DashboardPageHeader, StatusBadge } from "@/components/dashboard/DashboardPrimitives";
import { applicationDetails } from "@/data/mockPlatform";

type ApplicationId = keyof typeof applicationDetails;

export default async function ApplicationDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const application = applicationDetails[id as ApplicationId];

  if (!application) {
    notFound();
  }

  return (
    <div className="space-y-8">
      <DashboardPageHeader
        title={`Application: ${application.service}`}
        body={`Reviewing setup progress for ${application.service}. ID: ${application.id}`}
        action={<StatusBadge status={application.status} />}
      />

      <Card className="grid gap-6 p-6 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <p className="text-sm font-semibold text-text-primary">
            Next required action
          </p>
          <p className="mt-2 text-sm leading-6 text-text-secondary">
            {application.nextAction}
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <ButtonLink href={application.actionHref} className="h-10 px-5">
            Continue
          </ButtonLink>
          <ButtonLink href={application.supportHref} variant="secondary" className="h-10 px-5">
            Contact support
          </ButtonLink>
        </div>
      </Card>

      <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <Card className="p-6">
          <h2 className="text-xl font-semibold text-text-primary">Progress timeline</h2>
          <div className="mt-6 space-y-5">
            {application.timeline.map(([title, status, date]) => (
              <div key={title} className="flex gap-4">
                <span className="mt-1 flex size-8 shrink-0 items-center justify-center rounded-full bg-blue-50 text-primary">
                  <Clock3 className="size-4" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-text-primary">{title}</p>
                  <p className="mt-1 text-xs leading-5 text-text-secondary">
                    {status} · {date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold text-text-primary">Submitted information</h2>
          <div className="mt-5 divide-y divide-border-soft">
            {application.submittedInfo.map(([label, value]) => (
              <div key={label} className="flex justify-between gap-4 py-3 text-sm">
                <span className="text-text-secondary">{label}</span>
                <span className="text-right font-medium text-text-primary">{value}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        <Card className="p-6">
          <div className="flex items-center gap-3">
            <FileText className="size-5 text-primary" aria-hidden="true" />
            <h2 className="text-xl font-semibold text-text-primary">Documents</h2>
          </div>
          <div className="mt-5 divide-y divide-border-soft">
            {application.documents.map(([name, status]) => (
              <div key={name} className="flex items-center justify-between gap-4 py-3 text-sm">
                <span className="text-text-primary">{name}</span>
                <StatusBadge status={status} />
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-3">
            <MessageSquareText className="size-5 text-primary" aria-hidden="true" />
            <h2 className="text-xl font-semibold text-text-primary">Review notes</h2>
          </div>
          <ul className="mt-5 space-y-3 text-sm leading-6 text-text-secondary">
            {application.reviewNotes.map((note) => (
              <li key={note} className="rounded-2xl bg-surface-alt p-4">
                {note}
              </li>
            ))}
          </ul>
        </Card>
      </div>

      <Card className="p-6">
        <h2 className="text-xl font-semibold text-text-primary">Activity log</h2>
        <div className="mt-5 divide-y divide-border-soft">
          {application.activityLog.map((item) => (
            <p key={item} className="py-3 text-sm leading-6 text-text-secondary">
              {item}
            </p>
          ))}
        </div>
      </Card>
    </div>
  );
}
