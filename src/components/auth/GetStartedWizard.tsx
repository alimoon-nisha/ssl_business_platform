"use client";

import { useRouter, useSearchParams } from "next/navigation";
import type { FormEvent } from "react";
import { useState } from "react";
import { AuthInput } from "@/components/auth/AuthInput";
import { AuthShell } from "@/components/auth/AuthShell";
import { BusinessSizeRadioGroup } from "@/components/auth/BusinessSizeRadioGroup";
import { RegionSelect } from "@/components/auth/RegionSelect";
import { Button, ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/cn";

const serviceLabels = {
  "payment-gateway": "SSLCOMMERZ Payment Gateway",
  "messaging-suite": "Messaging Suite",
  "corporate-recharge": "Corporate Recharge",
  "cloud-hosting": "Cloud Hosting",
} as const;

const businessTypeOptions = [
  { label: "Online", value: "online" },
  { label: "Store", value: "store" },
  { label: "Online + Store", value: "online-store" },
];

const sectorOptions = [
  "Education",
  "Retail / Ecommerce",
  "Restaurant / Food",
  "Healthcare",
  "Travel / Hospitality",
  "Software / SaaS",
  "Financial services",
  "NGO / Development",
  "Professional services",
  "Real estate",
  "Media / Entertainment",
  "Logistics / Delivery",
  "Manufacturing / Distribution",
  "Other",
];

type Step = 1 | 2 | 3 | 4;

function SelectField({
  id,
  label,
  value,
  onChange,
  options,
  placeholder,
  error,
  required,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: Array<{ label: string; value: string }>;
  placeholder: string;
  error?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm text-text-secondary">
        {label}
        {required ? <span className="text-error">*</span> : null}
      </label>
      <select
        id={id}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className={cn(
          "h-12 w-full rounded-lg border border-border bg-white px-4 text-base text-text-primary focus:border-primary",
          error && "border-error focus:border-error",
        )}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error ? <p className="mt-2 text-sm text-error">{error}</p> : null}
    </div>
  );
}

export function GetStartedWizard() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const serviceParam = searchParams.get("service") ?? "";
  const packageParam = searchParams.get("package") ?? "";
  const selectedService =
    Object.prototype.hasOwnProperty.call(serviceLabels, serviceParam)
      ? (serviceParam as keyof typeof serviceLabels)
      : "";
  const selectedServiceLabel = selectedService ? serviceLabels[selectedService] : "";
  const selectedPackage = selectedService ? packageParam : "";

  const [step, setStep] = useState<Step>(1);
  const [businessName, setBusinessName] = useState("");
  const [businessSize, setBusinessSize] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [sector, setSector] = useState("");
  const [contactPersonName, setContactPersonName] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");
  const [designation, setDesignation] = useState("");
  const [department, setDepartment] = useState("");
  const [region, setRegion] = useState("Bangladesh");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [businessSubmitted, setBusinessSubmitted] = useState(false);
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [credentialsSubmitted, setCredentialsSubmitted] = useState(false);

  const stepLabel = step < 4 ? `Step ${step} of 3` : "Account created";
  const hasSelectedService = Boolean(selectedServiceLabel);

  const businessErrors = {
    businessName:
      businessSubmitted && !businessName.trim()
        ? "Business name is required."
        : "",
    businessSize:
      businessSubmitted && !businessSize
        ? "Employee range is required."
        : "",
    businessType:
      businessSubmitted && !businessType ? "Business type is required." : "",
    sector: businessSubmitted && !sector ? "Sector is required." : "",
  };

  const contactErrors = {
    contactPersonName:
      contactSubmitted && !contactPersonName.trim()
        ? "Contact person name is required."
        : "",
    companyAddress:
      contactSubmitted && !companyAddress.trim()
        ? "Company address is required."
        : "",
    region: contactSubmitted && !region ? "Region is required." : "",
  };

  const credentialErrors = {
    email:
      credentialsSubmitted && !email.trim()
        ? "Email address is required."
        : "",
    mobile:
      credentialsSubmitted && !mobile.trim()
        ? "Mobile number is required."
        : "",
    password:
      credentialsSubmitted && !password.trim() ? "Password is required." : "",
    confirmPassword:
      credentialsSubmitted && confirmPassword !== password
        ? "Passwords must match."
        : "",
    terms:
      credentialsSubmitted && !termsAccepted
        ? "You must accept the Terms of Service and Privacy Policy."
        : "",
  };

  const isStep1Valid =
    businessName.trim().length > 1 && businessSize && businessType && sector;
  const isStep2Valid = contactPersonName.trim() && companyAddress.trim() && region;
  const isStep3Valid =
    email.trim() && mobile.trim() && password.trim() && confirmPassword === password && termsAccepted;

  function handleBusinessNext(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setBusinessSubmitted(true);

    if (!isStep1Valid) {
      return;
    }

    setStep(2);
  }

  function handleContactNext(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setContactSubmitted(true);

    if (!isStep2Valid) {
      return;
    }

    setStep(3);
  }

  function handleCreateAccount(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setCredentialsSubmitted(true);

    if (!isStep3Valid) {
      return;
    }

    setStep(4);
  }

  const rightSide =
    step === 1
      ? {
          title: "Activate services from one business profile",
          body: "Add your business basics once, then use them across payment, messaging, recharge, and other SSL services.",
        }
      : step === 2
        ? {
            title: "Your business profile saves time",
            body: "Common information can be reused when you apply for SSLCOMMERZ, Messaging Suite, Corporate Recharge, and future SSL services.",
          }
        : step === 3
          ? {
              title: "One account for every SSL service",
              body: "Your account gives you access to service applications, document vault, billing, support, and team management.",
            }
          : hasSelectedService
            ? {
                title: "One account for every SSL service",
                body: "Your account gives you access to service applications, document vault, billing, support, and team management.",
              }
            : {
                title: "One account for every SSL service",
                body: "Your account gives you access to service applications, document vault, billing, support, and team management.",
              };

  const continuationHref = hasSelectedService
    ? `/service-application/${selectedService}${selectedPackage ? `?package=${encodeURIComponent(selectedPackage)}` : ""}`
    : "/dashboard";

  return (
    <AuthShell title={rightSide.title} body={rightSide.body} contentAlign="center">
      <div>
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-text-secondary">
            {stepLabel}
          </p>
          {step < 4 ? (
            <div className="mt-4 flex gap-2">
              {[1, 2, 3].map((item) => (
                <span
                  key={item}
                  className={cn(
                    "h-2 flex-1 rounded-full",
                    item <= step ? "bg-primary" : "bg-border-soft",
                  )}
                />
              ))}
            </div>
          ) : null}
        </div>

        {step === 1 ? (
          <form onSubmit={handleBusinessNext} className="space-y-8">
            <h1 className="text-4xl font-medium tracking-normal text-text-primary">
              Let&apos;s get started
            </h1>

            <div className="space-y-6">
              <div>
                <label htmlFor="business-name" className="mb-2 block text-sm text-text-secondary">
                  Business name<span className="text-error">*</span>
                </label>
                <AuthInput
                  id="business-name"
                  value={businessName}
                  onChange={(event) => setBusinessName(event.target.value)}
                  placeholder="Business name"
                  required
                  aria-invalid={Boolean(businessErrors.businessName)}
                  className={businessErrors.businessName ? "border-error focus:border-error" : ""}
                />
                <p className="mt-2 text-xs text-text-secondary">
                  Use the legal or trade name used on your business documents.
                </p>
                {businessErrors.businessName ? (
                  <p className="mt-2 text-sm text-error">{businessErrors.businessName}</p>
                ) : null}
              </div>

              <div>
                <BusinessSizeRadioGroup value={businessSize} onChange={setBusinessSize} />
                {businessErrors.businessSize ? (
                  <p className="mt-2 text-sm text-error">{businessErrors.businessSize}</p>
                ) : null}
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <SelectField
                  id="business-type"
                  label="Business type"
                  value={businessType}
                  onChange={setBusinessType}
                  options={businessTypeOptions}
                  placeholder="Select business type"
                  error={businessErrors.businessType}
                  required
                />

                <SelectField
                  id="sector"
                  label="Sector"
                  value={sector}
                  onChange={setSector}
                  options={sectorOptions.map((option) => ({ label: option, value: option }))}
                  placeholder="Select sector"
                  error={businessErrors.sector}
                  required
                />
              </div>
            </div>

            <Button type="submit" disabled={!isStep1Valid} className="min-w-36">
              Next
            </Button>
          </form>
        ) : null}

        {step === 2 ? (
          <form onSubmit={handleContactNext} className="space-y-8">
            <h1 className="text-4xl font-medium tracking-normal text-text-primary">
              Add contact details
            </h1>

            <div className="space-y-6">
              <div>
                <label htmlFor="contact-person" className="mb-2 block text-sm text-text-secondary">
                  Contact person name<span className="text-error">*</span>
                </label>
                <AuthInput
                  id="contact-person"
                  value={contactPersonName}
                  onChange={(event) => setContactPersonName(event.target.value)}
                  placeholder="Contact person name"
                  required
                  aria-invalid={Boolean(contactErrors.contactPersonName)}
                  className={contactErrors.contactPersonName ? "border-error focus:border-error" : ""}
                />
                {contactErrors.contactPersonName ? (
                  <p className="mt-2 text-sm text-error">{contactErrors.contactPersonName}</p>
                ) : null}
              </div>

              <div>
                <label htmlFor="company-address" className="mb-2 block text-sm text-text-secondary">
                  Company address<span className="text-error">*</span>
                </label>
                <AuthInput
                  id="company-address"
                  value={companyAddress}
                  onChange={(event) => setCompanyAddress(event.target.value)}
                  placeholder="Company address"
                  required
                  aria-invalid={Boolean(contactErrors.companyAddress)}
                  className={contactErrors.companyAddress ? "border-error focus:border-error" : ""}
                />
                {contactErrors.companyAddress ? (
                  <p className="mt-2 text-sm text-error">{contactErrors.companyAddress}</p>
                ) : null}
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="designation" className="mb-2 block text-sm text-text-secondary">
                    Designation
                  </label>
                  <AuthInput
                    id="designation"
                    value={designation}
                    onChange={(event) => setDesignation(event.target.value)}
                    placeholder="Designation"
                  />
                </div>
                <div>
                  <label htmlFor="department" className="mb-2 block text-sm text-text-secondary">
                    Department
                  </label>
                  <AuthInput
                    id="department"
                    value={department}
                    onChange={(event) => setDepartment(event.target.value)}
                    placeholder="Department"
                  />
                </div>
              </div>

              <RegionSelect value={region} onChange={setRegion} error={contactErrors.region} />
            </div>

            <div className="flex flex-wrap gap-3">
              <Button type="button" variant="secondary" onClick={() => setStep(1)}>
                Back
              </Button>
              <Button type="submit" disabled={!isStep2Valid} className="min-w-36">
                Next
              </Button>
            </div>
          </form>
        ) : null}

        {step === 3 ? (
          <form onSubmit={handleCreateAccount} className="space-y-8">
            <h1 className="text-4xl font-medium tracking-normal text-text-primary">
              Create your account
            </h1>

            <div className="space-y-6">
              <div>
                <label htmlFor="email" className="mb-2 block text-sm text-text-secondary">
                  Email address<span className="text-error">*</span>
                </label>
                <AuthInput
                  id="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Email address"
                  required
                  type="email"
                  aria-invalid={Boolean(credentialErrors.email)}
                  className={credentialErrors.email ? "border-error focus:border-error" : ""}
                />
                {credentialErrors.email ? (
                  <p className="mt-2 text-sm text-error">{credentialErrors.email}</p>
                ) : null}
              </div>

              <div>
                <label htmlFor="mobile" className="mb-2 block text-sm text-text-secondary">
                  Mobile number<span className="text-error">*</span>
                </label>
                <AuthInput
                  id="mobile"
                  value={mobile}
                  onChange={(event) => setMobile(event.target.value)}
                  placeholder="Mobile number"
                  required
                  aria-invalid={Boolean(credentialErrors.mobile)}
                  className={credentialErrors.mobile ? "border-error focus:border-error" : ""}
                />
                <p className="mt-2 text-xs text-text-secondary">
                  Use your Bangladesh mobile number.
                </p>
                {credentialErrors.mobile ? (
                  <p className="mt-2 text-sm text-error">{credentialErrors.mobile}</p>
                ) : null}
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="password" className="mb-2 block text-sm text-text-secondary">
                    Password<span className="text-error">*</span>
                  </label>
                  <AuthInput
                    id="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder="Password"
                    required
                    type="password"
                    aria-invalid={Boolean(credentialErrors.password)}
                    className={credentialErrors.password ? "border-error focus:border-error" : ""}
                  />
                  {credentialErrors.password ? (
                    <p className="mt-2 text-sm text-error">{credentialErrors.password}</p>
                  ) : null}
                </div>
                <div>
                  <label htmlFor="confirm-password" className="mb-2 block text-sm text-text-secondary">
                    Confirm password<span className="text-error">*</span>
                  </label>
                  <AuthInput
                    id="confirm-password"
                    value={confirmPassword}
                    onChange={(event) => setConfirmPassword(event.target.value)}
                    placeholder="Confirm password"
                    required
                    type="password"
                    aria-invalid={Boolean(credentialErrors.confirmPassword)}
                    className={credentialErrors.confirmPassword ? "border-error focus:border-error" : ""}
                  />
                  {credentialErrors.confirmPassword ? (
                    <p className="mt-2 text-sm text-error">{credentialErrors.confirmPassword}</p>
                  ) : null}
                </div>
              </div>

              <label className="flex items-start gap-3 text-sm leading-6 text-text-primary">
                <input
                  type="checkbox"
                  checked={termsAccepted}
                  onChange={(event) => setTermsAccepted(event.target.checked)}
                  className="mt-1 size-[18px] accent-primary"
                />
                <span>
                  I agree to the Terms of Service and Privacy Policy.
                  {credentialErrors.terms ? (
                    <span className="mt-2 block text-error">{credentialErrors.terms}</span>
                  ) : null}
                </span>
              </label>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button type="button" variant="secondary" onClick={() => setStep(2)}>
                Back
              </Button>
              <Button type="submit" disabled={!isStep3Valid} className="min-w-44">
                Create account
              </Button>
            </div>
          </form>
        ) : null}

        {step === 4 ? (
          <div className="space-y-8">
            <div>
              <h1 className="mt-3 text-4xl font-medium tracking-normal text-text-primary">
                Your SSL Business account is ready
              </h1>
              <p className="mt-4 max-w-xl text-base leading-7 text-text-secondary">
                {hasSelectedService
                  ? "You can continue the selected service application now, or skip this step and continue later from your dashboard."
                  : "You can now explore services, complete your business profile, upload documents from your dashboard."}
              </p>
            </div>

            {hasSelectedService ? (
              <div className="flex flex-wrap gap-3">
                <ButtonLink href={continuationHref}>Continue application</ButtonLink>
                <ButtonLink href="/dashboard" variant="secondary">
                  Skip for now
                </ButtonLink>
              </div>
            ) : (
              <ButtonLink href="/dashboard">Go to dashboard</ButtonLink>
            )}
          </div>
        ) : null}
      </div>
    </AuthShell>
  );
}