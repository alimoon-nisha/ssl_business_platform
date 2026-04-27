"use client";

import { useRouter } from "next/navigation";
import type { FormEvent } from "react";
import { useState } from "react";
import { AuthInput } from "@/components/auth/AuthInput";
import { AuthShell } from "@/components/auth/AuthShell";
import { BusinessSizeRadioGroup } from "@/components/auth/BusinessSizeRadioGroup";
import { RegionSelect } from "@/components/auth/RegionSelect";
import { Button } from "@/components/ui/Button";

export default function GetStartedPage() {
  const router = useRouter();
  const [businessName, setBusinessName] = useState("");
  const [businessSize, setBusinessSize] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    router.push("/dashboard");
  }

  const isReady = businessName.trim().length > 1 && businessSize.length > 0;

  return (
    <AuthShell
      title="Activate services from one business profile"
      body="Add your business details once, then use them across payment, messaging, recharge, and other SSL services."
    >
      <form onSubmit={handleSubmit}>
        <h1 className="mb-8 text-4xl font-medium tracking-normal text-text-primary">
          Let&apos;s get started
        </h1>
        <div className="space-y-8">
          <AuthInput
            id="business-name"
            label="Business name"
            value={businessName}
            onChange={(event) => setBusinessName(event.target.value)}
            placeholder="Business name"
            required
          />
          <BusinessSizeRadioGroup value={businessSize} onChange={setBusinessSize} />
          <RegionSelect />
        </div>
        <Button type="submit" disabled={!isReady} className="mt-8 min-w-36">
          Next
        </Button>
      </form>
    </AuthShell>
  );
}
