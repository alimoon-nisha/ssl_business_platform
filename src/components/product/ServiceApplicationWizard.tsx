"use client";

import { useState } from "react";
import { Upload, Check, X } from "lucide-react";
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
  const [uploadedFiles, setUploadedFiles] = useState<Record<string, string>>({});

  const packageList = packageOptions[serviceSlug as ServiceSlug] ?? [];

  const selectedPackageLabel =
    packageList.find((item) => item.id === selectedPackage)?.name || selectedPackage || "Not selected";

  const canGoNext =
    (step === 1 && termsAccepted) ||
    (step === 2 && Boolean(selectedPackage)) ||
    (step === 3 && Object.keys(uploadedFiles).length === documentOptions.length);

  function handleFileChange(docName: string, event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (file) {
      setUploadedFiles((prev) => ({ ...prev, [docName]: file.name }));
    }
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
        <>
          <div className="rounded-2xl bg-surface-alt p-6 max-h-[300px] overflow-y-auto border-none">
            <div className="text-sm leading-6 text-text-secondary space-y-4">
              <h4 className="text-sm font-semibold text-text-primary">Service Agreement & Terms of Use</h4>
              <p>
                By proceeding with this application, you agree to the following terms and conditions governing the use of SSL Wireless business services. Please read this document carefully before continuing.
              </p>
              <p>
                <strong>1. Acceptance of Terms:</strong> You acknowledge that you have read, understood, and agree to be bound by these terms. If you are applying on behalf of a business entity, you represent that you have the authority to bind such entity to these terms.
              </p>
              <p>
                <strong>2. Service Provision:</strong> SSL Wireless agrees to provide the services described in your application subject to successful review of your business profile and documents. Approval is at the sole discretion of SSL Wireless and its partner financial institutions where applicable.
              </p>
              <p>
                <strong>3. Compliance & Documentation:</strong> You agree to provide accurate and complete information and documentation as required by the laws of Bangladesh and SSL internal policies. Failure to provide valid documentation may result in application rejection.
              </p>
              <p>
                <strong>4. Fees & Payments:</strong> Service fees, transaction charges, and subscription costs are determined by the selected package and will be communicated during the onboarding process. Fees are subject to change with prior notice.
              </p>
              <p>
                <strong>5. Data Privacy & Security:</strong> We value your privacy. Your business data is handled in accordance with our Privacy Policy. You are responsible for maintaining the security of your account credentials.
              </p>
              <p>
                <strong>6. Prohibited Activities:</strong> You agree not to use SSL services for any illegal activities, including but not limited to money laundering, fraud, or unauthorized financial transactions.
              </p>
              <p>
                <strong>7. Termination:</strong> Either party may terminate the service agreement with prior notice as specified in the service-specific contract.
              </p>
              <p>
                <strong>8. Amendments:</strong> SSL Wireless reserves the right to amend these terms at any time. Continued use of the service constitutes acceptance of the updated terms.
              </p>
              <p>
                For more detailed information, please contact our support team or refer to the full service documentation available in your dashboard resources.
              </p>
            </div>
          </div>
          <label className="mt-6 flex items-start gap-3 text-sm leading-6 text-text-primary">
            <input
              type="checkbox"
              checked={termsAccepted}
              onChange={(event) => setTermsAccepted(event.target.checked)}
              className="mt-1 size-[18px] accent-primary"
            />
            I read and agree to the service terms.
          </label>
        </>
      ) : null}

      {step === 2 ? (
        <div>
          <div className="grid gap-4 md:grid-cols-2">
            {packageList.map((item) => {
              const selected = selectedPackage === item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSelectedPackage(item.id)}
                  className={cn(
                    "relative rounded-2xl border p-5 text-left transition-colors",
                    selected ? "border-primary bg-blue-50" : "border-border-soft bg-white hover:border-border",
                  )}
                >
                  {selected && (
                    <Badge tone="blue" className="absolute right-5 top-5">
                      Selected
                    </Badge>
                  )}
                  <div>
                    <h2 className="text-lg font-semibold text-text-primary">{item.name}</h2>
                    <p className="mt-2 text-sm leading-6 text-text-secondary">{item.description}</p>
                  </div>
                  <p className="mt-5 text-sm font-medium text-primary">{item.price}</p>
                </button>
              );
            })}
          </div>
        </div>
      ) : null}

      {step === 3 ? (
        <div>
          <div className="space-y-4">
            {documentOptions.map((item) => {
              const fileName = uploadedFiles[item];
              const uploaded = Boolean(fileName);

              return (
                <div
                  key={item}
                  className="flex items-center justify-between rounded-2xl border border-border-soft bg-white p-4 transition-all hover:border-border"
                >
                  <div className="flex items-center gap-4">
                    <div className={cn(
                      "flex size-10 items-center justify-center rounded-full transition-colors",
                      uploaded ? "bg-success/10 text-success" : "bg-surface-alt text-text-secondary"
                    )}>
                      {uploaded ? <Check className="size-5" /> : <Upload className="size-5" />}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-text-primary">{item}</p>
                      <p className="text-xs text-text-secondary">
                        {uploaded ? fileName : "PDF, JPG, or PNG (Max 5MB)"}
                      </p>
                    </div>
                  </div>
                  <label>
                    <input
                      type="file"
                      className="hidden"
                      onChange={(e) => handleFileChange(item, e)}
                      accept=".pdf,.jpg,.jpeg,.png"
                    />
                    <div className={cn(
                      "inline-flex h-9 cursor-pointer items-center justify-center rounded-full border border-border bg-white px-4 text-xs font-medium text-primary transition-colors hover:bg-blue-50"
                    )}>
                      {uploaded ? "Replace" : "Upload"}
                    </div>
                  </label>
                </div>
              );
            })}
          </div>
          <p className="mt-6 text-xs text-text-secondary">
            Uploaded documents will be saved to your document vault. If you skip now, you can continue later using the saved copies, or replace them anytime if needed.
          </p>
        </div>
      ) : null}

      {step === 4 ? (
        <div className="space-y-6">
          <div className="rounded-2xl bg-surface-alt p-6 border-none">
            <div className="space-y-4 text-sm">
              {[
                { label: "Service", value: serviceLabel },
                {
                  label: "Package",
                  value: (
                    <div className="relative flex items-center">
                      <select
                        value={selectedPackage}
                        onChange={(e) => setSelectedPackage(e.target.value)}
                        className="appearance-none bg-transparent pr-8 text-right text-text-secondary outline-none cursor-pointer hover:text-primary transition-colors"
                      >
                        {packageList.map((pkg) => (
                          <option key={pkg.id} value={pkg.id}>
                            {pkg.name}
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute right-0 flex items-center text-text-secondary">
                        <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  ),
                },
                { label: "Documents uploaded", value: Object.keys(uploadedFiles).length || 0 },
                { label: "Total payable now", value: "Custom pricing" },
              ].map((item, index) => (
                <div
                  key={item.label}
                  className={cn(
                    "flex items-center justify-between py-2 border-b border-border-soft",
                    index === 3 && "border-none pb-0"
                  )}
                >
                  <span className="font-medium text-text-primary">{item.label}</span>
                  <div className="text-text-secondary">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
          <p className="text-sm leading-6 text-text-secondary">
            After payment, you’ll be redirected to the dashboard. You can track review status, complete missing steps, and update rejected documents from there.
          </p>
        </div>
      ) : null}

      <div className="flex flex-wrap items-center justify-between gap-4">
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
          ) : (
            <ButtonLink href="/dashboard">Pay now</ButtonLink>
          )}
        </div>

        <ButtonLink href="/dashboard" variant="secondary">
          Skip to Dashboard
        </ButtonLink>
      </div>
    </div>
  );
}
