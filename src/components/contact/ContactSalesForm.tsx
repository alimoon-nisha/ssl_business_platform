"use client";

import { CheckCircle2 } from "lucide-react";
import type { FormEvent } from "react";
import { useState } from "react";
import { AuthInput } from "@/components/auth/AuthInput";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import {
  businessTypeOptions,
  employeeOptions,
  interestedServiceOptions,
  salesHelpOptions,
  sectorOptions,
  type SelectOption,
} from "@/data/contactSales";
import { cn } from "@/lib/cn";

type FormValues = {
  businessName: string;
  employeeCount: string;
  businessType: string;
  sector: string;
  contactName: string;
  jobTitle: string;
  businessEmail: string;
  phoneNumber: string;
  interestedService: string;
  salesHelp: string;
  additionalDetails: string;
  contactConsent: boolean;
};

type RequiredField = Exclude<
  keyof FormValues,
  "additionalDetails"
>;

const initialValues: FormValues = {
  businessName: "",
  employeeCount: "",
  businessType: "",
  sector: "",
  contactName: "",
  jobTitle: "",
  businessEmail: "",
  phoneNumber: "",
  interestedService: "",
  salesHelp: "",
  additionalDetails: "",
  contactConsent: false,
};

const requiredFields: RequiredField[] = [
  "businessName",
  "employeeCount",
  "businessType",
  "sector",
  "contactName",
  "jobTitle",
  "businessEmail",
  "phoneNumber",
  "interestedService",
  "salesHelp",
  "contactConsent",
];

const fieldLabels: Record<RequiredField, string> = {
  businessName: "Business name",
  employeeCount: "Number of employees",
  businessType: "Business type",
  sector: "Sector",
  contactName: "Contact person name",
  jobTitle: "Job title / designation",
  businessEmail: "Business email",
  phoneNumber: "Phone number",
  interestedService: "Interested service",
  salesHelp: "How can our sales team help?",
  contactConsent: "Contact consent",
};

function isFieldComplete(values: FormValues, field: RequiredField) {
  const value = values[field];

  if (typeof value === "boolean") {
    return value;
  }

  return value.trim().length > 0;
}

function getFieldError(
  values: FormValues,
  touched: Partial<Record<RequiredField, boolean>>,
  field: RequiredField,
) {
  if (!touched[field] || isFieldComplete(values, field)) {
    return "";
  }

  if (field === "contactConsent") {
    return "Please allow SSL Wireless to contact you about this request.";
  }

  return `${fieldLabels[field]} is required.`;
}

function SelectField({
  id,
  label,
  value,
  options,
  placeholder,
  error,
  onChange,
  onBlur,
}: {
  id: RequiredField;
  label: string;
  value: string;
  options: SelectOption[];
  placeholder: string;
  error?: string;
  onChange: (value: string) => void;
  onBlur: () => void;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm text-text-secondary">
        {label}
        <span className="text-error">*</span>
      </label>
      <select
        id={id}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        onBlur={onBlur}
        aria-invalid={Boolean(error)}
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

function TextareaField({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div>
      <label htmlFor="additionalDetails" className="mb-2 block text-sm text-text-secondary">
        Additional details
      </label>
      <textarea
        id="additionalDetails"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Tell us about your business need, expected volume, timeline, or any specific service questions."
        className="min-h-32 w-full rounded-lg border border-border bg-white px-4 py-3 text-base text-text-primary placeholder:text-text-secondary focus:border-primary"
      />
    </div>
  );
}

export function ContactSalesForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [touched, setTouched] = useState<Partial<Record<RequiredField, boolean>>>({});
  const [submitted, setSubmitted] = useState(false);

  const canSubmit = requiredFields.every((field) => isFieldComplete(values, field));

  function setValue<Field extends keyof FormValues>(
    field: Field,
    value: FormValues[Field],
  ) {
    setValues((current) => ({ ...current, [field]: value }));
  }

  function markTouched(field: RequiredField) {
    setTouched((current) => ({ ...current, [field]: true }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setTouched(
      requiredFields.reduce<Partial<Record<RequiredField, boolean>>>(
        (next, field) => ({ ...next, [field]: true }),
        {},
      ),
    );

    if (!canSubmit) {
      return;
    }

    setSubmitted(true);
  }

  function fieldError(field: RequiredField) {
    return getFieldError(values, touched, field);
  }

  if (submitted) {
    return (
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <ContactSalesIntro />
        <Card className="p-6 md:p-8">
          <Badge tone="green">Sales request submitted</Badge>
          <CheckCircle2 className="mt-8 size-12 text-success" aria-hidden="true" />
          <h2 className="mt-5 text-2xl font-semibold text-text-primary">
            Sales request submitted
          </h2>
          <p className="mt-3 text-sm leading-6 text-text-secondary">
            Thank you. Our team will contact you with the next steps.
          </p>
          <Button
            type="button"
            variant="secondary"
            className="mt-7"
            onClick={() => {
              setValues(initialValues);
              setTouched({});
              setSubmitted(false);
            }}
          >
            Submit another request
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
      <ContactSalesIntro />

      <Card className="p-6 md:p-8">
        <form onSubmit={handleSubmit} noValidate>
          <h2 className="text-2xl font-semibold text-text-primary">
            Tell us about your business
          </h2>

          <div className="mt-7 grid gap-5 lg:grid-cols-2">
            <div>
              <AuthInput
                id="businessName"
                label="Business name"
                value={values.businessName}
                onChange={(event) => setValue("businessName", event.target.value)}
                onBlur={() => markTouched("businessName")}
                required
                aria-invalid={Boolean(fieldError("businessName"))}
                className={fieldError("businessName") ? "border-error focus:border-error" : ""}
              />
              {fieldError("businessName") ? (
                <p className="mt-2 text-sm text-error">{fieldError("businessName")}</p>
              ) : null}
            </div>
            <SelectField
              id="employeeCount"
              label="Number of employees"
              value={values.employeeCount}
              options={employeeOptions}
              placeholder="Select employee range"
              error={fieldError("employeeCount")}
              onChange={(value) => setValue("employeeCount", value)}
              onBlur={() => markTouched("employeeCount")}
            />
            <SelectField
              id="businessType"
              label="Business type"
              value={values.businessType}
              options={businessTypeOptions}
              placeholder="Select business type"
              error={fieldError("businessType")}
              onChange={(value) => setValue("businessType", value)}
              onBlur={() => markTouched("businessType")}
            />
            <SelectField
              id="sector"
              label="Sector"
              value={values.sector}
              options={sectorOptions}
              placeholder="Select sector"
              error={fieldError("sector")}
              onChange={(value) => setValue("sector", value)}
              onBlur={() => markTouched("sector")}
            />
            <div>
              <AuthInput
                id="contactName"
                label="Contact person name"
                value={values.contactName}
                onChange={(event) => setValue("contactName", event.target.value)}
                onBlur={() => markTouched("contactName")}
                required
                aria-invalid={Boolean(fieldError("contactName"))}
                className={fieldError("contactName") ? "border-error focus:border-error" : ""}
              />
              {fieldError("contactName") ? (
                <p className="mt-2 text-sm text-error">{fieldError("contactName")}</p>
              ) : null}
            </div>
            <div>
              <AuthInput
                id="jobTitle"
                label="Job title / designation"
                value={values.jobTitle}
                onChange={(event) => setValue("jobTitle", event.target.value)}
                onBlur={() => markTouched("jobTitle")}
                required
                aria-invalid={Boolean(fieldError("jobTitle"))}
                className={fieldError("jobTitle") ? "border-error focus:border-error" : ""}
              />
              {fieldError("jobTitle") ? (
                <p className="mt-2 text-sm text-error">{fieldError("jobTitle")}</p>
              ) : null}
            </div>
            <div>
              <AuthInput
                id="businessEmail"
                label="Business email"
                type="email"
                value={values.businessEmail}
                onChange={(event) => setValue("businessEmail", event.target.value)}
                onBlur={() => markTouched("businessEmail")}
                required
                aria-invalid={Boolean(fieldError("businessEmail"))}
                className={fieldError("businessEmail") ? "border-error focus:border-error" : ""}
              />
              {fieldError("businessEmail") ? (
                <p className="mt-2 text-sm text-error">{fieldError("businessEmail")}</p>
              ) : null}
            </div>
            <div>
              <AuthInput
                id="phoneNumber"
                label="Phone number"
                value={values.phoneNumber}
                onChange={(event) => setValue("phoneNumber", event.target.value)}
                onBlur={() => markTouched("phoneNumber")}
                placeholder="+880 1XXX-XXXXXX"
                helperText="Default country: Bangladesh"
                required
                aria-invalid={Boolean(fieldError("phoneNumber"))}
                className={fieldError("phoneNumber") ? "border-error focus:border-error" : ""}
              />
              {fieldError("phoneNumber") ? (
                <p className="mt-2 text-sm text-error">{fieldError("phoneNumber")}</p>
              ) : null}
            </div>
            <SelectField
              id="interestedService"
              label="Interested service"
              value={values.interestedService}
              options={interestedServiceOptions}
              placeholder="Select service"
              error={fieldError("interestedService")}
              onChange={(value) => setValue("interestedService", value)}
              onBlur={() => markTouched("interestedService")}
            />
            <SelectField
              id="salesHelp"
              label="How can our sales team help?"
              value={values.salesHelp}
              options={salesHelpOptions}
              placeholder="Select request type"
              error={fieldError("salesHelp")}
              onChange={(value) => setValue("salesHelp", value)}
              onBlur={() => markTouched("salesHelp")}
            />
            <div className="lg:col-span-2">
              <TextareaField
                value={values.additionalDetails}
                onChange={(value) => setValue("additionalDetails", value)}
              />
            </div>
          </div>

          <div className="mt-6 space-y-4">
            <label className="flex items-start gap-3 text-sm leading-6 text-text-primary">
              <input
                type="checkbox"
                checked={values.contactConsent}
                onChange={(event) => setValue("contactConsent", event.target.checked)}
                onBlur={() => markTouched("contactConsent")}
                className="mt-1 size-[18px] accent-primary"
                aria-invalid={Boolean(fieldError("contactConsent"))}
              />
              <span>
                I agree that SSL Wireless may contact me about my request.
                <span className="text-error">*</span>
                {fieldError("contactConsent") ? (
                  <span className="mt-2 block text-sm text-error">
                    {fieldError("contactConsent")}
                  </span>
                ) : null}
              </span>
            </label>
          </div>

          <div className="mt-7">
            <Button type="submit" disabled={!canSubmit}>
              Submit sales request
            </Button>
            <p className="mt-3 text-xs leading-5 text-text-secondary">
              Our team will review your request and contact you with the next steps.
            </p>
          </div>
        </form>
      </Card>
    </div>
  );
}

function ContactSalesIntro() {
  return (
    <section>
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-text-secondary">
        Contact sales
      </p>
      <h1 className="mt-4 max-w-xl text-4xl font-semibold leading-[1.08] tracking-normal text-text-primary md:text-[52px]">
        Talk to an SSL sales specialist
      </h1>
      <p className="mt-5 max-w-xl text-base leading-7 text-text-secondary">
        Tell us what your business needs. Our team can help you choose the right SSL service, package, onboarding path, or custom setup.
      </p>

      <div className="mt-8 text-sm leading-6 text-text-primary">
        <div>
          <span className="font-medium">Email:</span>{" "}
          <a
            href="mailto:query@sslwireless.com"
            className="text-primary hover:text-primary-hover"
          >
            query@sslwireless.com
          </a>
        </div>
        <div>
          <span className="font-medium">Phone:</span>{" "}
          <a href="tel:+8809612221000" className="text-primary hover:text-primary-hover">
            +88 09612221000
          </a>
          ,{" "}
          <a href="tel:+8809677726222" className="text-primary hover:text-primary-hover">
            +88 09677726222
          </a>
        </div>
      </div>
    </section>
  );
}
