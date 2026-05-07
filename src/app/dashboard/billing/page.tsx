"use client";

import { useState } from "react";
import { ArrowRight, ChevronDown, ChevronLeft, ChevronRight, Download, Wallet } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { IconBadge } from "@/components/ui/IconBadge";
import { DashboardPageHeader, StatusBadge } from "@/components/dashboard/DashboardPrimitives";
import { invoices, paymentHistory } from "@/data/mockPlatform";

export default function BillingPage() {
  const [invoiceState, setInvoiceState] = useState(invoices);
  const [statusFilter, setStatusFilter] = useState("All");
  const [serviceFilter, setServiceFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const ITEMS_PER_PAGE = 3;
  const serviceOptions = ["All", ...Array.from(new Set(invoices.map((i) => i.service)))];
  const statusOptions = ["All", "Due", "Pending", "Paid"];

  const filteredInvoices = invoiceState.filter((inv) => {
    const matchStatus = statusFilter === "All" || inv.status === statusFilter;
    const matchService = serviceFilter === "All" || inv.service === serviceFilter;
    return matchStatus && matchService;
  });

  const totalPages = Math.ceil(filteredInvoices.length / ITEMS_PER_PAGE);
  const paginatedInvoices = filteredInvoices.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  function handleFilterChange(setter: (v: string) => void, value: string) {
    setter(value);
    setCurrentPage(1);
  }

  function handleInvoiceAction(id: string) {
    setInvoiceState((current) =>
      current.map((invoice) =>
        invoice.id === id && invoice.status === "Due"
          ? { ...invoice, status: "Paid", action: "View receipt" }
          : invoice,
      ),
    );
  }

  const [paymentCurrentPage, setPaymentCurrentPage] = useState(1);
  const [paymentServiceFilter, setPaymentServiceFilter] = useState("All");

  const paymentServiceOptions = ["All", ...Array.from(new Set(paymentHistory.map((p) => p.service)))];

  const filteredPayments = paymentHistory.filter((p) => {
    return paymentServiceFilter === "All" || p.service === paymentServiceFilter;
  });

  const paymentTotalPages = Math.ceil(filteredPayments.length / ITEMS_PER_PAGE);
  const paginatedPayments = filteredPayments.slice(
    (paymentCurrentPage - 1) * ITEMS_PER_PAGE,
    paymentCurrentPage * ITEMS_PER_PAGE,
  );

  return (
    <div className="space-y-8">
      <DashboardPageHeader
        title="Billing and payments"
        body="Review package billing, invoices, payment history, and billing profile information for this workspace."
        action={
          <div className="flex items-center gap-5 rounded-2xl border border-border-soft bg-white p-3">
            <div className="flex size-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-100">
              <Wallet className="size-5" />
            </div>
            <div className="flex flex-col pr-8">
              <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-text-secondary">
                Wallet Balance
              </span>
              <span className="text-xl font-bold tracking-tight text-text-primary">
                BDT 12,500
              </span>
            </div>
            <Button variant="secondary" className="h-10 px-5 text-[12px] font-bold">
              Add funds
            </Button>
          </div>
        }
      />



      <Card className="overflow-hidden p-0">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border-soft">
                {["Description", "Date", "Amount", "Status", "Action"].map((h) => (
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
              {paginatedPayments.map((p) => (
                <tr key={`${p.date}-${p.description}`}>
                  <td className="px-8 py-6">
                    <span className="block font-mono text-[14px] text-text-secondary">{p.id}</span>
                    <span className="mt-0.5 block font-semibold text-[15px] text-text-primary">{p.description}</span>
                  </td>
                  <td className="px-8 py-6 text-[14px] text-text-secondary">{p.date}</td>
                  <td className="px-8 py-6 font-semibold text-[14px] text-text-primary">{p.amount}</td>
                  <td className="px-8 py-6">
                    <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700 ring-1 ring-green-200">
                      {p.status}
                    </span>
                  </td>
                  <td className="px-8 py-6">
                    <Button variant="secondary" className="h-9 px-4 text-[13px] font-semibold text-primary">
                      View <ArrowRight className="size-3.5" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {paymentTotalPages > 1 && (
          <div className="flex items-center justify-between border-t border-border-soft px-6 py-4 md:px-8">
            <span className="text-[13px] text-text-secondary">
              Page {paymentCurrentPage} of {paymentTotalPages}
            </span>
            <div className="flex items-center gap-1">
              <button
                onClick={() => setPaymentCurrentPage((p) => p - 1)}
                disabled={paymentCurrentPage === 1}
                className="flex size-8 items-center justify-center rounded-lg border border-border-soft text-text-secondary transition-colors hover:bg-surface-alt disabled:opacity-40"
              >
                <ChevronLeft className="size-4" />
              </button>
              {Array.from({ length: paymentTotalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setPaymentCurrentPage(page)}
                  className={`flex size-8 items-center justify-center rounded-lg text-[13px] font-medium transition-colors ${
                    page === paymentCurrentPage
                      ? "bg-primary text-white"
                      : "border border-border-soft text-text-secondary hover:bg-surface-alt"
                  }`}
                >
                  {page}
                </button>
              ))}
              <button
                onClick={() => setPaymentCurrentPage((p) => p + 1)}
                disabled={paymentCurrentPage === paymentTotalPages}
                className="flex size-8 items-center justify-center rounded-lg border border-border-soft text-text-secondary transition-colors hover:bg-surface-alt disabled:opacity-40"
              >
                <ChevronRight className="size-4" />
              </button>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
}
