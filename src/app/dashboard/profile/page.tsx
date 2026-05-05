"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { DashboardPageHeader } from "@/components/dashboard/DashboardPrimitives";
import { businessProfile } from "@/data/mockPlatform";

export default function BusinessProfilePage() {
  const [values, setValues] = useState(businessProfile);
  const [saved, setSaved] = useState(false);

  function update(field: keyof typeof businessProfile, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    setSaved(false);
  }

  return (
    <div className="space-y-8">
      <DashboardPageHeader
        eyebrow="Business profile"
        title="Manage business profile"
        body="Update the business information collected during get started. These details can be reused across service applications."
      />

      {saved ? (
        <Card className="border-green-100 bg-green-50 p-4 text-sm font-medium text-success">
          Business profile updated for this prototype session.
        </Card>
      ) : null}

      <Card className="p-6">
        <div className="grid gap-5 md:grid-cols-2">
          <Field
            label="Business name"
            value={values.businessName}
            onChange={(value) => update("businessName", value)}
          />
          <Field
            label="Number of employees"
            value={values.employeeRange}
            onChange={(value) => update("employeeRange", value)}
          />
          <Field
            label="Business type"
            value={values.businessType}
            onChange={(value) => update("businessType", value)}
          />
          <Field
            label="Sector"
            value={values.sector}
            onChange={(value) => update("sector", value)}
          />
          <Field
            label="Contact person name"
            value={values.contactPersonName}
            onChange={(value) => update("contactPersonName", value)}
          />
          <Field
            label="Region"
            value={values.region}
            onChange={(value) => update("region", value)}
          />
          <Field
            label="Designation"
            value={values.designation}
            onChange={(value) => update("designation", value)}
          />
          <Field
            label="Department"
            value={values.department}
            onChange={(value) => update("department", value)}
          />
          <Field
            label="Business email"
            value={values.email}
            onChange={(value) => update("email", value)}
          />
          <Field
            label="Mobile number"
            value={values.mobile}
            onChange={(value) => update("mobile", value)}
          />
          <div className="md:col-span-2">
            <Field
              label="Company address"
              value={values.companyAddress}
              onChange={(value) => update("companyAddress", value)}
            />
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <Button type="button" onClick={() => setSaved(true)}>
            Save business profile
          </Button>
        </div>
      </Card>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm text-text-secondary">{label}</span>
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-12 w-full rounded-lg border border-border bg-white px-4 text-sm text-text-primary focus:border-primary"
      />
    </label>
  );
}
