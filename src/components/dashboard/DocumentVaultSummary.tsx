import { Upload } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { documents } from "@/data/mockPlatform";

function tone(status: string) {
  if (status === "Uploaded") return "text-success";
  if (status === "Missing") return "text-amber-700";
  return "text-text-secondary";
}

export function DocumentVaultSummary() {
  return (
    <div className="grid gap-5 md:grid-cols-[1.1fr_0.9fr]">
      <Card className="p-6">
        <h2 className="text-xl font-semibold text-text-primary">Document vault</h2>
        <p className="mt-2 text-sm leading-6 text-text-secondary">
          Keep reusable business documents in one place.
        </p>
        <div className="mt-5 divide-y divide-border-soft">
          {documents.map((document) => (
            <div key={document.name} className="flex items-center justify-between py-3 text-sm">
              <span className="text-text-primary">{document.name}</span>
              <span className={`font-medium ${tone(document.status)}`}>
                {document.status}
              </span>
            </div>
          ))}
        </div>
        <ButtonLink href="/dashboard/documents" className="mt-5 h-10 px-5">
          Manage documents
        </ButtonLink>
      </Card>
      <Card className="p-6">
        <span className="flex size-11 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
          <Upload className="size-5" />
        </span>
        <h2 className="mt-5 text-xl font-semibold text-text-primary">
          Reuse suggestions
        </h2>
        <p className="mt-2 text-sm leading-6 text-text-secondary">
          Uploading your trade license now may help complete SSLCOMMERZ and SMS applications faster.
        </p>
        <ButtonLink href="/dashboard/documents" variant="secondary" className="mt-6 h-10 px-5">
          Upload trade license
        </ButtonLink>
      </Card>
    </div>
  );
}
