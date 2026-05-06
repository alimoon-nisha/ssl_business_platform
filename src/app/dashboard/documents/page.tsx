"use client";

import { useState } from "react";
import { FileText, Eye, Upload, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { DashboardPageHeader } from "@/components/dashboard/DashboardPrimitives";
import { documents } from "@/data/mockPlatform";

type DocumentItem = (typeof documents)[number];

function documentStatusClass(status: string) {
  if (status.includes("Missing")) return "bg-orange-50 text-orange-700";
  if (status.includes("Optional")) return "bg-surface-alt text-text-secondary";
  if (status.includes("Pending")) return "bg-indigo-50 text-indigo-700";
  if (status.includes("Uploaded")) return "bg-green-50 text-emerald-700";
  return "bg-blue-50 text-primary";
}

export default function DocumentsPage() {
  const [items, setItems] = useState(documents);
  const [selectedDocument, setSelectedDocument] = useState<DocumentItem | null>(null);
  const [mockFileName, setMockFileName] = useState("");

  function saveMockUpload() {
    if (!selectedDocument) return;

    setItems((current) =>
      current.map((item) =>
        item.id === selectedDocument.id
          ? {
              ...item,
              status: "Uploaded",
              lastUpdated: "Just now",
            }
          : item,
      ),
    );
    setSelectedDocument(null);
    setMockFileName("");
  }

  return (
    <div className="space-y-8">
      <DashboardPageHeader
        eyebrow="Documents"
        title="Document vault"
        body="Keep reusable business files ready for payments, messaging, recharge, and future SSL services."
      />

      <Card className="p-6 md:p-8">
        <div className="divide-y divide-border-soft">
          {items.map((item) => (
            <div
              key={item.id}
              className="grid gap-4 py-5 text-sm md:grid-cols-[minmax(0,1.2fr)_8.5rem_minmax(0,1.5fr)_auto] md:gap-x-6 md:items-center"
            >
              <div className="flex min-w-0 items-center gap-4">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-surface-alt text-text-secondary">
                  <FileText className="size-5" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <span className="block font-semibold text-[15px] text-text-primary">
                    {item.name}
                  </span>
                  <p className="mt-1 text-xs text-text-secondary">
                    Updated: {item.lastUpdated}
                  </p>
                </div>
              </div>
              <span className={`w-fit rounded-full px-2.5 py-1 text-xs font-semibold ${documentStatusClass(item.status)}`}>
                {item.status}
              </span>
              <div className="min-w-0">
                <div className="flex flex-wrap gap-1.5">
                  {item.usedBy.map((service) => (
                    <span
                      key={service}
                      className="inline-flex items-center rounded-md bg-surface-alt px-2 py-1 text-xs font-medium text-text-secondary"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-wrap justify-start gap-2 md:justify-end">
                <Button
                  type="button"
                  variant="secondary"
                  className="h-10 px-4 font-semibold text-primary"
                  onClick={() => setSelectedDocument(item)}
                >
                  <Upload className="mr-2 size-4" aria-hidden="true" />
                  {item.status === "Uploaded" ? "Replace" : "Upload"}
                </Button>
                <Button type="button" variant="ghost" className="h-10 px-4 font-semibold text-text-secondary hover:text-primary">
                  <Eye className="mr-2 size-4" aria-hidden="true" />
                  View
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {selectedDocument ? (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/35 p-4">
          <Card className="w-full max-w-lg p-6 shadow-[0_18px_48px_rgba(32,33,36,0.18)]">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-xl font-semibold text-text-primary">
                  {selectedDocument.status === "Uploaded" ? "Replace" : "Upload"} {selectedDocument.name}
                </h2>
                <p className="mt-2 text-sm leading-6 text-text-secondary">
                  This is a prototype upload. No file will be stored, but the vault status will update locally.
                </p>
              </div>
              <button
                type="button"
                aria-label="Close upload dialog"
                onClick={() => setSelectedDocument(null)}
                className="flex size-9 items-center justify-center rounded-full text-text-secondary hover:bg-surface"
              >
                <X className="size-5" />
              </button>
            </div>

            <label className="mt-6 block">
              <span className="mb-2 block text-sm text-text-secondary">Mock file name</span>
              <input
                value={mockFileName}
                onChange={(event) => setMockFileName(event.target.value)}
                placeholder={`${selectedDocument.id}.pdf`}
                className="h-12 w-full rounded-lg border border-border bg-white px-4 text-sm text-text-primary focus:border-primary"
              />
            </label>

            <div className="mt-6 flex flex-wrap justify-end gap-3">
              <Button type="button" variant="secondary" onClick={() => setSelectedDocument(null)}>
                Cancel
              </Button>
              <Button type="button" onClick={saveMockUpload}>
                Save mock upload
              </Button>
            </div>
          </Card>
        </div>
      ) : null}
    </div>
  );
}
