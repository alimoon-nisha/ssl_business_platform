"use client";

import { useState, useRef, useEffect } from "react";
import { FileText, Upload, RefreshCw, X, MoreVertical, History, CheckCircle2, XCircle, Clock, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { DashboardPageHeader } from "@/components/dashboard/DashboardPrimitives";
import { documents } from "@/data/mockPlatform";

type DocumentItem = (typeof documents)[number];

const STATUS_OPTIONS = ["Missing", "Pending", "Uploaded", "Optional"];
const SERVICE_OPTIONS = ["SSLcommerz", "Virtual recharge", "Messaging", "Hercules"];

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
  const [viewingDocument, setViewingDocument] = useState<DocumentItem | null>(null);
  const [viewingHistory, setViewingHistory] = useState<DocumentItem | null>(null);
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const filterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (filterRef.current && !filterRef.current.contains(e.target as Node)) {
        setFilterOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function toggleStatus(status: string) {
    setSelectedStatuses((prev) =>
      prev.includes(status) ? prev.filter((s) => s !== status) : [...prev, status],
    );
  }

  function toggleService(service: string) {
    setSelectedServices((prev) =>
      prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service],
    );
  }

  function clearFilters() {
    setSelectedStatuses([]);
    setSelectedServices([]);
  }

  const activeFilterCount = selectedStatuses.length + selectedServices.length;

  function saveMockUpload() {
    if (!selectedDocument) return;
    setItems((current) =>
      current.map((item) =>
        item.id === selectedDocument.id
          ? { ...item, status: "Uploaded", lastUpdated: "Just now" }
          : item,
      ),
    );
    setSelectedDocument(null);
    setMockFileName("");
  }

  const filteredItems = items.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus =
      selectedStatuses.length === 0 ||
      selectedStatuses.some((s) => item.status.includes(s));

    const matchesService =
      selectedServices.length === 0 ||
      selectedServices.some((s) => {
        if (s === "SSLcommerz") return item.usedBy.some((u) => u.toLowerCase().includes("sslcommerz"));
        if (s === "Virtual recharge") return item.usedBy.some((u) => u.toLowerCase().includes("recharge"));
        if (s === "Messaging") return item.usedBy.some((u) => u.toLowerCase().includes("sms") || u.toLowerCase().includes("messaging"));
        if (s === "Hercules") return item.usedBy.some((u) => u.toLowerCase().includes("hercules") || u.toLowerCase().includes("sales"));
        return false;
      });

    return matchesSearch && matchesStatus && matchesService;
  });

  return (
    <div className="space-y-8">
      <DashboardPageHeader
        title="Document vault"
        body="Keep reusable business files ready for payments, messaging, recharge, and future SSL services."
      />

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="relative w-full max-w-sm">
          <input
            type="text"
            placeholder="Search documents..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="h-10 w-full rounded-xl border border-border-soft bg-white pl-4 pr-10 text-sm focus:border-primary focus:outline-none"
          />
        </div>

        <div ref={filterRef} className="relative">
          <button
            type="button"
            onClick={() => setFilterOpen((v) => !v)}
            className={`flex h-10 items-center gap-2 rounded-xl border px-4 text-sm font-medium transition-colors ${
              activeFilterCount > 0
                ? "border-primary bg-blue-50 text-primary"
                : "border-border-soft bg-white text-text-secondary hover:bg-surface hover:text-text-primary"
            }`}
          >
            <SlidersHorizontal className="size-4" />
            Filters
            {activeFilterCount > 0 && (
              <span className="flex size-5 items-center justify-center rounded-full bg-primary text-[11px] font-bold text-white">
                {activeFilterCount}
              </span>
            )}
          </button>

          {filterOpen && (
            <div className="absolute right-0 top-full z-50 mt-2 w-72 rounded-2xl border border-border-soft bg-white p-5 shadow-xl">
              <div className="mb-4">
                <p className="mb-2.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-text-secondary">
                  Status
                </p>
                <div className="flex flex-wrap gap-2">
                  {STATUS_OPTIONS.map((status) => (
                    <button
                      key={status}
                      type="button"
                      onClick={() => toggleStatus(status)}
                      className={`rounded-full px-3 py-1.5 text-[12px] font-medium transition-colors ${
                        selectedStatuses.includes(status)
                          ? "bg-primary text-white"
                          : "border border-border-soft bg-white text-text-secondary hover:bg-surface"
                      }`}
                    >
                      {status}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-5 border-t border-border-soft pt-4">
                <p className="mb-2.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-text-secondary">
                  Service
                </p>
                <div className="flex flex-wrap gap-2">
                  {SERVICE_OPTIONS.map((service) => (
                    <button
                      key={service}
                      type="button"
                      onClick={() => toggleService(service)}
                      className={`rounded-full px-3 py-1.5 text-[12px] font-medium transition-colors ${
                        selectedServices.includes(service)
                          ? "bg-primary text-white"
                          : "border border-border-soft bg-white text-text-secondary hover:bg-surface"
                      }`}
                    >
                      {service}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-border-soft pt-4">
                <button
                  type="button"
                  onClick={clearFilters}
                  className="text-[13px] font-medium text-text-secondary hover:text-text-primary disabled:opacity-40"
                  disabled={activeFilterCount === 0}
                >
                  Clear all
                </button>
                <Button
                  type="button"
                  className="h-8 px-4 text-[13px]"
                  onClick={() => setFilterOpen(false)}
                >
                  Done
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>

      <Card className="overflow-hidden p-0">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border-soft">
                {["Document", "Status", "Used by", "Actions"].map((h) => (
                  <th
                    key={h}
                    className="px-8 py-4 text-left text-[11px] font-semibold uppercase tracking-[0.08em] text-text-secondary"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-border-soft">
              {filteredItems.map((item) => (
                <tr key={item.id}>
                  <td className="px-8 py-5">
                    <span className="block font-semibold text-[15px] text-text-primary">{item.name}</span>
                    <span className="mt-0.5 block text-xs text-text-secondary">Updated: {item.lastUpdated}</span>
                  </td>
                  <td className="px-8 py-5">
                    <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ${documentStatusClass(item.status)}`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="px-8 py-5">
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
                  </td>
                  <td className="relative px-8 py-5">
                    <div className="flex items-center justify-end gap-2">
                      <Button
                        type="button"
                        variant="secondary"
                        className="h-9 w-28 px-4 text-xs font-bold text-primary"
                        onClick={() => setSelectedDocument(item)}
                      >
                        {item.status === "Uploaded"
                          ? <><RefreshCw className="size-3.5" />Replace</>
                          : <><Upload className="size-3.5" />Upload</>}
                      </Button>
                      <button
                        type="button"
                        onClick={(e) => { e.stopPropagation(); setOpenMenuId(openMenuId === item.id ? null : item.id); }}
                        className="flex size-9 items-center justify-center rounded-lg text-text-secondary transition-colors hover:bg-surface-alt hover:text-primary"
                      >
                        <MoreVertical className="size-5" />
                      </button>
                      {openMenuId === item.id && (
                        <div className="absolute right-8 top-full z-50 mt-1 w-40 rounded-xl border border-border-soft bg-white py-1.5 shadow-xl">
                          <button
                            className="flex w-full items-center px-4 py-2 text-left text-sm font-medium text-text-primary hover:bg-surface"
                            onClick={() => { setViewingDocument(item); setOpenMenuId(null); }}
                          >
                            View
                          </button>
                          <button
                            className="flex w-full items-center px-4 py-2 text-left text-sm font-medium text-text-primary hover:bg-surface"
                            onClick={() => { setViewingHistory(item); setOpenMenuId(null); }}
                          >
                            History
                          </button>
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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

      {viewingDocument ? (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/40 p-4">
          <Card className="flex h-[85vh] w-full max-w-3xl flex-col overflow-hidden p-0 shadow-2xl">
            <div className="flex items-center justify-between border-b border-border-soft px-6 py-4">
              <div className="flex items-center gap-3">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-surface-alt">
                  <FileText className="size-4 text-text-secondary" />
                </div>
                <div>
                  <h2 className="text-[15px] font-semibold text-text-primary">{viewingDocument.name}</h2>
                  <p className="text-xs text-text-secondary">Updated: {viewingDocument.lastUpdated}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${documentStatusClass(viewingDocument.status)}`}>
                  {viewingDocument.status}
                </span>
                <button
                  onClick={() => setViewingDocument(null)}
                  className="flex size-8 items-center justify-center rounded-full text-text-secondary transition-colors hover:bg-surface-alt"
                >
                  <X className="size-4" />
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-auto bg-surface p-6">
              {viewingDocument.status === "Uploaded" || viewingDocument.status === "Approved" ? (
                <div className="mx-auto flex w-full max-w-xl flex-col rounded-2xl border border-border-soft bg-white p-8 shadow-sm">
                  <div className="flex items-center gap-3 border-b border-border-soft pb-5">
                    <div className="flex size-10 items-center justify-center rounded-xl bg-blue-50">
                      <FileText className="size-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-[13px] font-semibold text-text-primary">{viewingDocument.name}</p>
                      <p className="text-xs text-text-secondary">PDF · Uploaded {viewingDocument.lastUpdated}</p>
                    </div>
                  </div>
                  <div className="mt-6 space-y-3">
                    <div className="h-3 w-2/3 rounded-full bg-surface-alt" />
                    <div className="h-3 w-full rounded-full bg-surface-alt" />
                    <div className="h-3 w-5/6 rounded-full bg-surface-alt" />
                    <div className="h-3 w-3/4 rounded-full bg-surface-alt" />
                    <div className="mt-5 h-32 w-full rounded-xl border border-dashed border-border-soft bg-surface" />
                    <div className="h-3 w-full rounded-full bg-surface-alt" />
                    <div className="h-3 w-4/5 rounded-full bg-surface-alt" />
                  </div>
                </div>
              ) : (
                <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
                  <div className="flex size-14 items-center justify-center rounded-2xl bg-amber-50">
                    <Clock className="size-7 text-warning" />
                  </div>
                  <div>
                    <h3 className="text-[15px] font-semibold text-text-primary">No document uploaded</h3>
                    <p className="mt-1 max-w-xs text-sm text-text-secondary">
                      You haven't uploaded a {viewingDocument.name} yet.
                    </p>
                  </div>
                  <Button
                    variant="primary"
                    className="mt-2"
                    onClick={() => { setViewingDocument(null); setSelectedDocument(viewingDocument); }}
                  >
                    Upload now
                  </Button>
                </div>
              )}
            </div>
          </Card>
        </div>
      ) : null}

      {viewingHistory ? (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/40 p-4">
          <Card className="w-full max-w-md overflow-hidden p-0 shadow-2xl">
            <div className="flex items-center justify-between border-b border-border-soft px-6 py-4">
              <div className="flex items-center gap-3">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-surface-alt">
                  <History className="size-4 text-text-secondary" />
                </div>
                <div>
                  <h2 className="text-[15px] font-semibold text-text-primary">Document history</h2>
                  <p className="text-xs text-text-secondary">{viewingHistory.name}</p>
                </div>
              </div>
              <button
                onClick={() => setViewingHistory(null)}
                className="flex size-8 items-center justify-center rounded-full text-text-secondary transition-colors hover:bg-surface-alt"
              >
                <X className="size-4" />
              </button>
            </div>

            <div className="p-6">
              {viewingHistory.history && viewingHistory.history.length > 0 ? (
                <div className="relative space-y-6 before:absolute before:left-[15px] before:top-2 before:h-[calc(100%-16px)] before:w-px before:bg-border-soft">
                  {viewingHistory.history.map((event, idx) => (
                    <div key={idx} className="relative flex gap-4 pl-10">
                      <div className={`absolute left-0 top-0.5 z-10 flex size-[30px] items-center justify-center rounded-full border-[3px] border-white shadow-sm ${
                        event.status === "success" ? "bg-success" : "bg-error"
                      }`}>
                        {event.status === "success" ? (
                          <CheckCircle2 className="size-3.5 text-white" />
                        ) : (
                          <XCircle className="size-3.5 text-white" />
                        )}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-baseline gap-2">
                          <span className="text-[13px] font-semibold text-text-primary">{event.event}</span>
                          <span className="text-[11px] text-text-secondary">{event.date}</span>
                        </div>
                        {event.reason ? (
                          <div className="mt-1.5 rounded-xl bg-red-50 px-3 py-2 text-[12px] leading-5 text-error">
                            {event.reason}
                          </div>
                        ) : (
                          <p className="mt-0.5 text-[12px] text-text-secondary">
                            {event.event === "Approved" ? "Verification successful." : "Document submitted for review."}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="py-10 text-center">
                  <p className="text-sm text-text-secondary">No history found for this document.</p>
                </div>
              )}
            </div>
          </Card>
        </div>
      ) : null}
    </div>
  );
}
