"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { Button, ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/cn";

type ServiceSlug = "payment-gateway" | "messaging-suite" | "corporate-recharge" | "cloud-hosting";
type Step = 1 | 2 | 3 | 4;

type ServiceApplicationWizardProps = {
  serviceSlug: string;
  serviceLabel: string;
  packageName: string;
};

const packageOptions: Record<ServiceSlug, Array<{ id: string; name: string; price: string; description: string }>> = {
  "payment-gateway": [
    { id: "standard", name: "Standard", price: "Custom pricing", description: "Best for new merchants reviewing onboarding requirements." },
    { id: "growth", name: "Growth", price: "Custom pricing", description: "For businesses expecting higher payment volume." },
  ],
  "messaging-suite": [
    { id: "starter", name: "Starter", price: "Custom pricing", description: "For teams starting with bulk SMS and alerts." },
    { id: "standard", name: "Standard", price: "Custom pricing", description: "Includes sender ID and campaign support." },
  ],
  "corporate-recharge": [
    { id: "standard", name: "Standard", price: "Custom pricing", description: "For business recharge workflows and approvals." },
    { id: "volume", name: "Volume", price: "Custom pricing", description: "For larger recharge programs and reporting." },
  ],
  "cloud-hosting": [
    { id: "contact-sales", name: "Contact sales", price: "Custom pricing", description: "Pricing and scope depend on your infrastructure needs." },
  ],
};

const documentOptions = [
  "Trade license",
  "TIN certificate",
  "Authorized person NID",
  "Bank document or cheque leaf",
];

export function ServiceApplicationWizard({ serviceSlug, serviceLabel, packageName }: ServiceApplicationWizardProps) {
  const [step, setStep] = useState<Step>(1);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(packageName || "");
  const [uploadedDocuments, setUploadedDocuments] = useState<string[]>([]);

  const packageList = packageOptions[serviceSlug as ServiceSlug] ?? [];

  const selectedPackageLabel =
    packageList.find((item) => item.id === selectedPackage)?.name || selectedPackage || "Not selected";

  const canGoNext =
    (step === 1 && termsAccepted) ||
    (step === 2 && Boolean(selectedPackage)) ||
    step === 3;

  function toggleDocument(name: string) {
    setUploadedDocuments((current) =>
      current.includes(name) ? current.filter((item) => item !== name) : [...current, name],
    );
  }

  function goNext() {
    if (step < 4) {
      setStep((current) => (current + 1) as Step);
    }
  }

  function goBack() {
    if (step > 1) {
      setStep((current) => (current - 1) as Step);
    }
  }

  return (
    <div className="space-y-8">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-text-secondary">
          Service application
        </p>
        <h1 className="mt-3 text-4xl font-medium tracking-normal text-text-primary">
          {serviceLabel}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-text-secondary">
          {step === 1
            ? "Review the service terms before you continue."
            : step === 2
              ? "Choose the package that matches your service needs."
              : step === 3
                ? "Upload the documents needed to review your application."
                : "Review your application summary before you submit or proceed to payment."}
        </p>
      </div>

      <div className="grid gap-2 sm:grid-cols-4">
        {[
          "Terms",
          "Package",
          "Documents",
          "Summary",
        ].map((label, index) => (
          <div
            key={label}
            className={cn(
              "rounded-full px-4 py-2 text-center text-sm font-medium",
              index + 1 === step ? "bg-blue-50 text-primary" : "bg-surface-alt text-text-secondary",
            )}
          >
            {label}
          </div>
        ))}
      </div>

      {step === 1 ? (
        <Card className="p-6">
          <Badge tone="blue">Terms & Conditions</Badge>
          <p className="mt-4 text-sm leading-6 text-text-secondary">
            Review the service agreement before continuing. This placeholder copy should be replaced with the
            service-specific terms later.
          </p>
          <label className="mt-6 flex items-start gap-3 text-sm leading-6 text-text-primary">
            <input
              type="checkbox"
              checked={termsAccepted}
              onChange={(event) => setTermsAccepted(event.target.checked)}
              className="mt-1 size-[18px] accent-primary"
            />
            I read and agree to the service terms.
          </label>
        </Card>
      ) : null}

      {step === 2 ? (
        <Card className="p-6">
          <Badge tone="blue">Select package</Badge>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {packageList.map((item) => {
              const selected = selectedPackage === item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSelectedPackage(item.id)}
                  className={cn(
                    "rounded-2xl border p-5 text-left transition-colors",
                    selected ? "border-primary bg-blue-50" : "border-border-soft bg-white hover:border-border",
                  )}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h2 className="text-lg font-semibold text-text-primary">{item.name}</h2>
                      <p className="mt-2 text-sm leading-6 text-text-secondary">{item.description}</p>
                    </div>
                    <Badge tone={selected ? "blue" : "gray"}>{selected ? "Selected" : "Select package"}</Badge>
                  </div>
                  <p className="mt-5 text-sm font-medium text-primary">{item.price}</p>
                </button>
              );
            })}
          </div>
        </Card>
      ) : null}

      {step === 3 ? (
        <Card className="p-6">
          <Badge tone="blue">Upload documents</Badge>
          <div className="mt-5 space-y-3">
            {documentOptions.map((item) => {
              const uploaded = uploadedDocuments.includes(item);

              return (
                <label
                  key={item}
                  className="flex items-center justify-between rounded-xl bg-surface-alt px-4 py-3 text-sm"
                >
                  <span className="text-text-primary">{item}</span>
                  <span className="flex items-center gap-3">
                    <span className={cn("text-xs font-medium", uploaded ? "text-success" : "text-text-secondary")}>
                      {uploaded ? "Uploaded" : "Not uploaded"}
                    </span>
                    <input
                      type="checkbox"
                      checked={uploaded}
                      onChange={() => toggleDocument(item)}
                      className="size-[18px] accent-primary"
                    />
                  </span>
                </label>
              );
            })}
          </div>
          <p className="mt-4 text-xs text-text-secondary">
            Mark documents as uploaded to continue to the summary.
          </p>
        </Card>
      ) : null}

      {step === 4 ? (
        <Card className="p-6">
          <Badge tone="green">Application summary</Badge>
          <div className="mt-5 space-y-4 text-sm text-text-secondary">
            <p><span className="font-medium text-text-primary">Service:</span> {serviceLabel}</p>
            <p><span className="font-medium text-text-primary">Package:</span> {selectedPackageLabel}</p>
            <p><span className="font-medium text-text-primary">Documents uploaded:</span> {uploadedDocuments.length || 0}</p>
            <p><span className="font-medium text-text-primary">Total payable now:</span> Custom pricing</p>
            <p>Your application will be reviewed by the SSL team after submission.</p>
          </div>
        </Card>
      ) : null}

      <div className="flex flex-wrap gap-3">
        {step > 1 ? (
          <Button type="button" variant="secondary" onClick={goBack}>
            Back
          </Button>
        ) : null}
        {step < 4 ? (
          <Button type="button" onClick={goNext} disabled={!canGoNext}>
            {step === 3 ? "Continue" : "Next"}
          </Button>
        ) : null}
        {step === 4 ? (
          <>
            <ButtonLink href="/dashboard">Go to dashboard</ButtonLink>
            <ButtonLink href="/dashboard" variant="secondary">
              Continue later
            </ButtonLink>
          </>
        ) : null}
      </div>
    </div>
  );
}
