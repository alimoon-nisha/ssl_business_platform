"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { DashboardPageHeader } from "@/components/dashboard/DashboardPrimitives";
import { accountSettings } from "@/data/mockPlatform";

export default function AccountSettingsPage() {
  const [values, setValues] = useState(accountSettings);
  const [saved, setSaved] = useState(false);

  function update<Field extends keyof typeof accountSettings>(
    field: Field,
    value: (typeof accountSettings)[Field],
  ) {
    setValues((current) => ({ ...current, [field]: value }));
    setSaved(false);
  }

  return (
    <div className="space-y-8">
      <DashboardPageHeader
        title="Settings"
        body="Manage your account preferences, security settings, and notifications."
      />

      {saved ? (
        <Card className="border-green-100 bg-green-50 p-4 text-sm font-medium text-success">
          Account settings saved for this prototype session.
        </Card>
      ) : null}

      <Card className="p-6">
        <h2 className="text-xl font-semibold text-text-primary">Account identity</h2>
        <div className="mt-5 grid gap-5 md:grid-cols-2">
          <Field label="Name" value={values.name} onChange={(value) => update("name", value)} />
          <Field label="Role" value={values.role} onChange={(value) => update("role", value)} />
          <Field label="Email" value={values.email} onChange={(value) => update("email", value)} />
          <Field label="Mobile" value={values.mobile} onChange={(value) => update("mobile", value)} />
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="text-xl font-semibold text-text-primary">Preferences</h2>
        <div className="mt-5 grid gap-5 md:grid-cols-2">
          <Field label="Language" value={values.language} onChange={(value) => update("language", value)} />
          <Field label="Timezone" value={values.timezone} onChange={(value) => update("timezone", value)} />
        </div>
        <div className="mt-6 space-y-4">
          <Toggle
            label="Login alerts"
            description="Send an email when a new sign-in is detected."
            checked={values.loginAlerts}
            onChange={(checked) => update("loginAlerts", checked)}
          />
          <Toggle
            label="Product updates"
            description="Receive occasional updates about SSL services in this workspace."
            checked={values.productUpdates}
            onChange={(checked) => update("productUpdates", checked)}
          />
        </div>
        <div className="mt-6 flex justify-end">
          <Button type="button" onClick={() => setSaved(true)}>
            Save settings
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

function Toggle({
  label,
  description,
  checked,
  onChange,
}: {
  label: string;
  description: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}) {
  return (
    <label className="flex cursor-pointer items-start justify-between gap-5 rounded-2xl border border-border-soft p-4">
      <span>
        <span className="block text-sm font-semibold text-text-primary">{label}</span>
        <span className="mt-1 block text-sm leading-6 text-text-secondary">
          {description}
        </span>
      </span>
      <input
        type="checkbox"
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
        className="mt-1 size-5 accent-primary"
      />
    </label>
  );
}
