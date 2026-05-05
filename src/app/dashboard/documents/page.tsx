"use client";

import { useState } from "react";
import { Eye, Upload, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { DashboardPageHeader, StatusBadge } from "@/components/dashboard/DashboardPrimitives";
import { documents } from "@/data/mockPlatform";

type DocumentItem = (typeof documents)[number];

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

      <Card className="overflow-hidden">
        <div className="grid gap-3 border-b border-border-soft px-6 py-4 text-xs font-semibold uppercase tracking-[0.12em] text-text-secondary md:grid-cols-[1fr_0.6fr_1fr_0.7fr_auto]">
          <span>Document</span>
          <span>Status</span>
          <span>Used by</span>
          <span>Updated</span>
          <span className="text-right">Actions</span>
        </div>
        <div className="divide-y divide-border-soft">
          {items.map((item) => (
            <div
              key={item.id}
              className="grid gap-4 px-6 py-5 text-sm md:grid-cols-[1fr_0.6fr_1fr_0.7fr_auto] md:items-center"
            >
              <span className="font-semibold text-text-primary">{item.name}</span>
              <StatusBadge status={item.status} />
              <span className="text-text-secondary">{item.usedBy.join(", ")}</span>
              <span className="text-text-secondary">{item.lastUpdated}</span>
              <div className="flex flex-wrap justify-start gap-2 md:justify-end">
                <Button
                  type="button"
                  variant="secondary"
                  className="h-9 px-4"
                  onClick={() => setSelectedDocument(item)}
                >
                  <Upload className="size-4" aria-hidden="true" />
                  {item.status === "Uploaded" ? "Replace" : "Upload"}
                </Button>
                <Button type="button" variant="ghost" className="h-9 px-4">
                  <Eye className="size-4" aria-hidden="true" />
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
