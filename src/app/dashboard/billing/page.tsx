"use client";

import { useState } from "react";
import { CreditCard, ReceiptText, WalletCards, Wallet } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { IconBadge } from "@/components/ui/IconBadge";
import { DashboardPageHeader, StatusBadge } from "@/components/dashboard/DashboardPrimitives";
import { billingProfile, invoices, packageBilling, paymentHistory } from "@/data/mockPlatform";

export default function BillingPage() {
  const [invoiceState, setInvoiceState] = useState(invoices);
  const [message, setMessage] = useState("");

  function handleInvoiceAction(id: string) {
    setInvoiceState((current) =>
      current.map((invoice) =>
        invoice.id === id && invoice.status === "Due"
          ? { ...invoice, status: "Paid", action: "View receipt" }
          : invoice,
      ),
    );
    setMessage("Prototype payment recorded. No real payment was processed.");
  }

  return (
    <div className="space-y-8">
      <DashboardPageHeader
        eyebrow="Billing"
        title="Billing and payments"
        body="Review package billing, invoices, payment history, and billing profile information for this workspace."
      />

      {message ? (
        <Card className="border-blue-100 bg-blue-50 p-4 text-sm font-medium text-primary">
          {message}
        </Card>
      ) : null}

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        <Card
          className="relative min-w-0 overflow-hidden border-blue-100 bg-gradient-to-br from-blue-50 to-indigo-50/50 p-6 text-blue-950 shadow-sm"
        >
          <div className="absolute -right-8 -top-8 size-32 rounded-full bg-white/80 blur-2xl" />
          <div className="absolute -bottom-8 -left-8 size-24 rounded-full bg-blue-200/40 blur-2xl" />

          <div className="relative z-10 flex h-full flex-col justify-between">
            <div className="flex items-start justify-between">
              <IconBadge icon={Wallet} className="border-blue-200 bg-white text-blue-600 shadow-sm" />
              <Button variant="secondary" className="h-8 rounded-full border-blue-200 bg-white/50 px-3 text-xs font-medium text-blue-700 transition-colors hover:bg-blue-100 hover:text-blue-900">
                Add funds
              </Button>
            </div>
            <div>
              <h2 className="mt-5 text-sm font-medium text-blue-700/80">Wallet balance</h2>
              <div className="mt-1">
                <span className="text-3xl font-bold tracking-tight text-blue-950">BDT 12,500</span>
              </div>
            </div>
          </div>
        </Card>
        <Card className="min-w-0 p-6">
          <IconBadge icon={WalletCards} />
          <h2 className="mt-5 text-lg font-semibold text-text-primary">Active billing</h2>
          <p className="mt-2 text-sm leading-6 text-text-secondary">
            Messaging Suite is active. Payment Gateway is waiting for payment.
          </p>
        </Card>
        <Card className="min-w-0 p-6">
          <IconBadge icon={ReceiptText} tone="amber" />
          <h2 className="mt-5 text-lg font-semibold text-text-primary">Invoices</h2>
          <p className="mt-2 text-sm leading-6 text-text-secondary">
            {invoiceState.filter((invoice) => invoice.status === "Due").length} invoice needs attention.
          </p>
        </Card>
        <Card className="min-w-0 p-6">
          <IconBadge icon={CreditCard} tone="green" />
          <h2 className="mt-5 text-lg font-semibold text-text-primary">Billing profile</h2>
          <p className="mt-2 text-sm leading-6 text-text-secondary break-words">
            Billing emails go to {billingProfile.billingEmail}.
          </p>
        </Card>
      </div>

      <Card className="p-6 md:p-8">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-xl font-semibold text-text-primary">Invoices</h2>
            <p className="mt-1 text-sm text-text-secondary">Track outstanding and recent package invoices.</p>
          </div>
          <span className="text-sm font-medium text-text-secondary">
            {invoiceState.length} total
          </span>
        </div>

        <div className="mt-5 divide-y divide-border-soft">
          {invoiceState.map((invoice) => (
            <div
              key={invoice.id}
              className="grid gap-3 py-5 text-sm md:grid-cols-[minmax(0,1.7fr)_8rem_minmax(0,0.8fr)_9rem] md:items-center md:gap-x-6"
            >
              <div className="min-w-0">
                <span className="block font-semibold text-[15px] text-text-primary">
                  {invoice.id}
                </span>
                <p className="mt-1 text-xs text-text-secondary">
                  {invoice.service} · Due: {invoice.date}
                </p>
              </div>
              <div>
                <StatusBadge status={invoice.status} />
              </div>
              <span className="font-semibold text-text-primary md:text-[15px]">
                {invoice.amount}
              </span>
              <div className="flex justify-start md:justify-end">
                <Button
                  type="button"
                  variant={invoice.status === "Due" ? "primary" : "secondary"}
                  className="h-10 w-full px-4 font-semibold sm:w-auto md:w-full"
                  onClick={() => handleInvoiceAction(invoice.id)}
                >
                  {invoice.action}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <div className="grid gap-5 lg:grid-cols-2">
        <Card className="p-6">
          <h2 className="text-xl font-semibold text-text-primary">Package billing</h2>
          <div className="mt-5 divide-y divide-border-soft">
            {packageBilling.map(([service, plan, price, status]) => (
              <div key={service} className="grid gap-3 py-3 text-sm sm:grid-cols-[1fr_0.8fr_0.7fr_auto] sm:items-center">
                <span className="font-medium text-text-primary">{service}</span>
                <span className="text-text-secondary">{plan}</span>
                <span className="text-text-secondary">{price}</span>
                <StatusBadge status={status} />
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold text-text-primary">Billing profile</h2>
          <div className="mt-5 divide-y divide-border-soft">
            {Object.entries(billingProfile).map(([key, value]) => (
              <div key={key} className="flex justify-between gap-4 py-3 text-sm">
                <span className="capitalize text-text-secondary">
                  {key.replace(/([A-Z])/g, " $1")}
                </span>
                <span className="text-right font-medium text-text-primary">{value}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card className="p-6">
        <h2 className="text-xl font-semibold text-text-primary">Payment history</h2>
        <div className="mt-5 divide-y divide-border-soft">
          {paymentHistory.map(([date, description, amount, status]) => (
            <div key={`${date}-${description}`} className="grid gap-3 py-3 text-sm md:grid-cols-[0.7fr_1fr_0.6fr_auto] md:items-center">
              <span className="text-text-secondary">{date}</span>
              <span className="font-medium text-text-primary">{description}</span>
              <span className="text-text-secondary">{amount}</span>
              <StatusBadge status={status} />
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
