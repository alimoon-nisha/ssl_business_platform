import { redirect } from "next/navigation";
import { AuthShell } from "@/components/auth/AuthShell";
import { ServiceApplicationWizard } from "@/components/product/ServiceApplicationWizard";

const serviceLabels: Record<string, string> = {
  "payment-gateway": "SSLCOMMERZ Payment Gateway",
  "messaging-suite": "Messaging Suite",
  "corporate-recharge": "Corporate Recharge",
  "cloud-hosting": "Cloud Hosting",
};

export default async function ServiceApplicationPage({
  params,
  searchParams,
}: {
  params: Promise<{ service: string }>;
  searchParams: Promise<{ package?: string | string[] | undefined }>;
}) {
  const { service } = await params;
  const query = await searchParams;
  const serviceLabel = serviceLabels[service];

  if (!serviceLabel) {
    redirect("/get-started");
  }

  const packageName =
    typeof query.package === "string"
      ? query.package
      : Array.isArray(query.package)
        ? query.package[0]
        : "";

  return (
    <AuthShell
      badge="Application journey"
      title={`Continue your ${serviceLabel} application`}
      body="Review the terms, package options, and document checklist in one calm flow that stays connected to your SSL account."
      image="/illustrations/business-profile.svg"
    >
      <ServiceApplicationWizard
        serviceSlug={service}
        serviceLabel={serviceLabel}
        packageName={packageName}
      />
    </AuthShell>
  );
}