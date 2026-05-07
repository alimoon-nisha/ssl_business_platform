"use client";

import Image from "next/image";
import { useState } from "react";
import {
  AlertTriangle,
  Calendar,
  CheckCircle2,
  FileText,
  LifeBuoy,
  Mail,
  PackageCheck,
  Phone,
  RefreshCw,
  User,
  Wallet,
  X,
} from "lucide-react";
import { documents, services } from "@/data/mockPlatform";
import { Button, ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { DashboardPageHeader, StatusBadge } from "@/components/dashboard/DashboardPrimitives";

const activeServices = services.filter((s) => s.status === "Active");
const otherServices = services.filter((s) => s.status !== "Active");

type ActiveService = (typeof activeServices)[number];
type OtherService = (typeof otherServices)[number];

function DeactivateConfirmDialog({
  serviceName,
  onConfirm,
  onCancel,
}: {
  serviceName: string;
  onConfirm: () => void;
  onCancel: () => void;
}) {
  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/40 p-4">
      <Card className="w-full max-w-sm p-0 shadow-xl">
        <div className="flex items-center justify-between border-b border-border-soft px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-red-50">
              <AlertTriangle className="size-4 text-error" />
            </div>
            <h2 className="text-[15px] font-semibold text-text-primary">Deactivate service?</h2>
          </div>
          <button
            onClick={onCancel}
            className="flex size-8 items-center justify-center rounded-sm text-text-secondary transition-colors hover:bg-surface-alt"
          >
            <X className="size-4" />
          </button>
        </div>
        <div className="px-5 py-4">
          <p className="text-sm leading-6 text-text-secondary">
            Deactivating <span className="font-medium text-text-primary">{serviceName}</span> will temporarily disable all transactions and API access. Your billing cycle will continue.
          </p>
        </div>
        <div className="flex items-center justify-end gap-2 border-t border-border-soft px-5 py-4">
          <Button variant="secondary" className="h-9 px-4 text-sm" onClick={onCancel}>
            Cancel
          </Button>
          <Button
            className="h-9 bg-error px-4 text-sm hover:bg-error/90 focus-visible:outline-error"
            onClick={onConfirm}
          >
            Deactivate service
          </Button>
        </div>
      </Card>
    </div>
  );
}

function DocPreviewModal({ name, onClose }: { name: string; onClose: () => void }) {
  const doc = documents.find((d) => d.name === name);
  const uploaded = doc?.status === "Uploaded" || doc?.status === "Approved";

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/40 p-4">
      <Card className="flex h-[80vh] w-full max-w-2xl flex-col overflow-hidden p-0 shadow-2xl">
        <div className="flex items-center justify-between border-b border-border-soft px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex size-9 items-center justify-center rounded-xl bg-surface-alt">
              <FileText className="size-4 text-text-secondary" />
            </div>
            <div>
              <p className="text-[15px] font-semibold text-text-primary">{name}</p>
              {doc && <p className="text-xs text-text-secondary">Updated: {doc.lastUpdated}</p>}
            </div>
          </div>
          <button
            onClick={onClose}
            className="flex size-8 items-center justify-center rounded-full text-text-secondary transition-colors hover:bg-surface-alt"
          >
            <X className="size-4" />
          </button>
        </div>
        <div className="flex-1 overflow-auto bg-surface p-6">
          {uploaded ? (
            <div className="mx-auto flex w-full max-w-lg flex-col rounded-2xl border border-border-soft bg-white p-8 shadow-sm">
              <div className="flex items-center gap-3 border-b border-border-soft pb-5">
                <div className="flex size-10 items-center justify-center rounded-xl bg-blue-50">
                  <FileText className="size-5 text-primary" />
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-text-primary">{name}</p>
                  <p className="text-xs text-text-secondary">PDF · Uploaded {doc?.lastUpdated}</p>
                </div>
              </div>
              <div className="mt-6 space-y-3">
                <div className="h-3 w-2/3 rounded-full bg-surface-alt" />
                <div className="h-3 w-full rounded-full bg-surface-alt" />
                <div className="h-3 w-5/6 rounded-full bg-surface-alt" />
                <div className="h-3 w-3/4 rounded-full bg-surface-alt" />
                <div className="mt-5 h-32 w-full rounded-xl border border-dashed border-border-soft bg-surface" />
                <div className="h-3 w-full rounded-full bg-surface-alt" />
                <div className="h-3 w-4/5 rounded-full bg-surface-alt" />
              </div>
            </div>
          ) : (
            <div className="flex h-full flex-col items-center justify-center gap-3 text-center">
              <div className="flex size-12 items-center justify-center rounded-2xl bg-surface-alt">
                <FileText className="size-6 text-text-secondary" />
              </div>
              <p className="text-sm font-semibold text-text-primary">Not uploaded yet</p>
              <p className="max-w-xs text-xs text-text-secondary">
                This document hasn't been uploaded to your vault.
              </p>
              <ButtonLink href="/dashboard/documents" variant="secondary" className="mt-2">
                Go to document vault
              </ButtonLink>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
}

function ActiveServiceCard({ service }: { service: ActiveService }) {
  const [deactivated, setDeactivated] = useState(false);
  const [showDeactivateDialog, setShowDeactivateDialog] = useState(false);
  const [previewDoc, setPreviewDoc] = useState<string | null>(null);

  return (
    <>
      {showDeactivateDialog && (
        <DeactivateConfirmDialog
          serviceName={service.name}
          onConfirm={() => { setDeactivated(true); setShowDeactivateDialog(false); }}
          onCancel={() => setShowDeactivateDialog(false)}
        />
      )}
      {previewDoc && (
        <DocPreviewModal name={previewDoc} onClose={() => setPreviewDoc(null)} />
      )}

      <Card className="overflow-hidden p-0">
        <div className="flex flex-wrap items-start justify-between gap-4 border-b border-border-soft p-6">
          <div className="flex items-center gap-4">
            <Image src={service.logo} alt="" width={150} height={32} className="h-6 w-auto object-contain" />
            <div>
              <h2 className="text-[15px] font-semibold text-text-primary">{service.name}</h2>
              <p className="mt-0.5 text-sm text-text-secondary">{service.description}</p>
            </div>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <Button
              variant="secondary"
              className="h-9 px-4 text-xs font-semibold"
              onClick={() => deactivated ? setDeactivated(false) : setShowDeactivateDialog(true)}
            >
              {deactivated ? "Activate service" : "Deactivate service"}
            </Button>
          </div>
        </div>

        <div className="grid gap-px bg-border-soft md:grid-cols-4">
          <div className="flex flex-col gap-1 bg-white px-5 py-4">
            <p className="text-xs text-text-secondary">Active since</p>
            <p className="text-sm font-semibold text-text-primary">{service.activeDate}</p>
          </div>
          <div className="flex flex-col gap-1 bg-white px-5 py-4">
            <p className="text-xs text-text-secondary">Renewal date</p>
            <div className="flex items-center gap-2">
              <p className="text-sm font-semibold text-text-primary">{service.renewalDate}</p>
              <button className="text-[11px] font-semibold text-primary underline underline-offset-2 hover:text-primary/80">Renew</button>
            </div>
          </div>
          <div className="flex flex-col gap-1 bg-white px-5 py-4">
            <p className="text-xs text-text-secondary">Balance</p>
            <p className="text-sm font-semibold text-text-primary">{service.balance}</p>
          </div>
          <div className="flex flex-col gap-1 bg-white px-5 py-4">
            <p className="text-xs text-text-secondary">Package</p>
            <p className="text-sm font-semibold text-text-primary">{service.packageName}</p>
            {service.trialMonths ? (
              <div className="mt-1 flex items-center gap-2">
                <span className="rounded-full bg-amber-50 px-2 py-0.5 text-[11px] font-semibold text-amber-700">Trial · {service.trialMonths}m left</span>
                <ButtonLink href="#" className="h-7 px-3 text-[11px]">Pay now</ButtonLink>
              </div>
            ) : (
              <p className="text-[11px] text-text-secondary opacity-70">{service.price}</p>
            )}
          </div>
        </div>

        <div className="grid divide-y divide-border-soft border-b border-border-soft bg-surface-alt/40 md:grid-cols-2 md:divide-x md:divide-y-0">
          <div className="p-6">
            <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-text-secondary">KAM Details</p>
            <div className="rounded-xl border border-border-soft bg-white p-5">
              <p className="text-[15px] font-bold text-text-primary">{service.kam.name}</p>
              <div className="mt-3 space-y-1.5">
                <a href={`tel:${service.kam.phone}`} className="flex items-center gap-1.5 text-xs text-text-secondary transition-colors hover:text-primary">
                  {service.kam.phone}
                </a>
                <a href={`mailto:${service.kam.email}`} className="flex items-center gap-1.5 text-xs text-text-secondary transition-colors hover:text-primary">
                  {service.kam.email}
                </a>
              </div>
            </div>
          </div>
          <div className="p-6">
            <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-text-secondary">Company POC</p>
            <div className="space-y-3">
              {service.poc.map((person) => (
                <div key={person.name} className="rounded-xl border border-border-soft bg-white p-5">
                  <p className="text-[15px] font-bold text-text-primary">{person.name}</p>
                  <p className="text-xs font-medium text-text-secondary opacity-70">{person.designation}</p>
                  <a href={`tel:${person.contact}`} className="mt-3 inline-block text-xs text-text-secondary transition-colors hover:text-primary">
                    {person.contact}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>


      </Card>
    </>
  );
}

function AvailableServiceCard({ service }: { service: OtherService }) {
  return (
    <Card className="flex h-full flex-col p-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <Image src={service.logo} alt="" width={150} height={32} className="h-6 w-auto object-contain" />
          <h2 className="mt-5 text-xl font-semibold text-text-primary">{service.name}</h2>
          <p className="mt-2 max-w-xl text-sm leading-6 text-text-secondary">{service.description}</p>
        </div>
        <StatusBadge status={service.applicationStatus} />
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl bg-surface-alt p-4">
          <PackageCheck className="size-5 text-primary" />
          <p className="mt-3 text-xs font-medium text-text-secondary">Package</p>
          <p className="mt-1 text-sm font-semibold text-text-primary">{service.packageName}</p>
        </div>
        <div className="rounded-2xl bg-surface-alt p-4">
          <CheckCircle2 className="size-5 text-success" />
          <p className="mt-3 text-xs font-medium text-text-secondary">Service status</p>
          <p className="mt-1 text-sm font-semibold text-text-primary">{service.serviceStatus}</p>
        </div>
        <div className="rounded-2xl bg-surface-alt p-4">
          <FileText className="size-5 text-amber-700" />
          <p className="mt-3 text-xs font-medium text-text-secondary">Documents</p>
          <p className="mt-1 text-sm font-semibold text-text-primary">{service.requiredDocuments.length} required</p>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-3 border-t border-border-soft pt-5">
        <ButtonLink href={service.href} className="h-10 px-5">{service.cta}</ButtonLink>
        <ButtonLink href="/contact-sales" variant="secondary" className="h-10 px-5">
          <LifeBuoy className="size-4" />
          Contact support
        </ButtonLink>
      </div>
    </Card>
  );
}

export default function ServicesPage() {
  return (
    <div className="space-y-10">
      <DashboardPageHeader
        title="Service workspace"
        body="Manage active services and explore what's available for your business."
        action={<ButtonLink href="/contact-sales">Contact sales</ButtonLink>}
      />

      {activeServices.length > 0 && (
        <section className="space-y-5">
          <div className="flex items-center gap-2">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-text-secondary">Active services</h2>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-green-50 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-success ring-1 ring-green-200">
              <div className="size-1 rounded-full bg-success" />
              Active
            </span>
          </div>
          {activeServices.map((service) => (
            <ActiveServiceCard key={service.id} service={service} />
          ))}
        </section>
      )}

      {otherServices.length > 0 && (
        <section className="space-y-5">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-text-secondary">Available services</h2>
          <div className="grid gap-5 xl:grid-cols-2">
            {otherServices.map((service) => (
              <AvailableServiceCard key={service.id} service={service} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
