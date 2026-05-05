import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, FileText, LifeBuoy, PackageCheck } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { DashboardPageHeader, StatusBadge } from "@/components/dashboard/DashboardPrimitives";
import { services } from "@/data/mockPlatform";

export default function ServicesPage() {
  return (
    <div className="space-y-8">
      <DashboardPageHeader
        eyebrow="Services"
        title="Service workspace"
        body="Review every SSL service connected to your business, see setup readiness, and continue the right activation path."
        action={<ButtonLink href="/contact-sales">Contact sales</ButtonLink>}
      />

      <div className="grid gap-5 xl:grid-cols-2">
        {services.map((service) => (
          <Card key={service.id} className="flex h-full flex-col p-6">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <Image
                  src={service.logo}
                  alt=""
                  width={150}
                  height={32}
                  className="h-6 w-auto object-contain"
                />
                <h2 className="mt-5 text-xl font-semibold text-text-primary">
                  {service.name}
                </h2>
                <p className="mt-2 max-w-xl text-sm leading-6 text-text-secondary">
                  {service.description}
                </p>
              </div>
              <StatusBadge status={service.applicationStatus} />
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl bg-surface-alt p-4">
                <PackageCheck className="size-5 text-primary" aria-hidden="true" />
                <p className="mt-3 text-xs font-medium text-text-secondary">Package</p>
                <p className="mt-1 text-sm font-semibold text-text-primary">
                  {service.packageName}
                </p>
              </div>
              <div className="rounded-2xl bg-surface-alt p-4">
                <CheckCircle2 className="size-5 text-success" aria-hidden="true" />
                <p className="mt-3 text-xs font-medium text-text-secondary">Service status</p>
                <p className="mt-1 text-sm font-semibold text-text-primary">
                  {service.serviceStatus}
                </p>
              </div>
              <div className="rounded-2xl bg-surface-alt p-4">
                <FileText className="size-5 text-amber-700" aria-hidden="true" />
                <p className="mt-3 text-xs font-medium text-text-secondary">Documents</p>
                <p className="mt-1 text-sm font-semibold text-text-primary">
                  {service.requiredDocuments.length} required
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <div>
                <h3 className="text-sm font-semibold text-text-primary">
                  Required documents
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-text-secondary">
                  {service.requiredDocuments.map((document) => (
                    <li key={document} className="flex gap-2">
                      <span className="mt-2 size-1.5 rounded-full bg-primary" />
                      <span>{document}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-text-primary">
                  Helpful resources
                </h3>
                <div className="mt-3 space-y-2">
                  {service.resources.map((resource) => (
                    <Link
                      key={resource}
                      href="/dashboard/services"
                      className="flex items-center justify-between rounded-xl border border-border-soft px-3 py-2.5 text-sm text-text-secondary transition-colors hover:bg-surface hover:text-primary"
                    >
                      <span>{resource}</span>
                      <ArrowRight className="size-4" aria-hidden="true" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3 border-t border-border-soft pt-5">
              <ButtonLink href={service.href} className="h-10 px-5">
                {service.cta}
              </ButtonLink>
              <ButtonLink href="/contact-sales" variant="secondary" className="h-10 px-5">
                <LifeBuoy className="size-4" aria-hidden="true" />
                Contact support
              </ButtonLink>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
