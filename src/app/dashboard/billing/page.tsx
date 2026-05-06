"use client";

import { useState } from "react";
import { CreditCard, ReceiptText, WalletCards } from "lucide-react";
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

      <div className="grid gap-5 lg:grid-cols-3">
        <Card className="p-6">
          <IconBadge icon={WalletCards} />
          <h2 className="mt-5 text-lg font-semibold text-text-primary">Active billing</h2>
          <p className="mt-2 text-sm leading-6 text-text-secondary">
            Messaging Suite is active. Payment Gateway billing is waiting for payment.
          </p>
        </Card>
        <Card className="p-6">
          <IconBadge icon={ReceiptText} tone="amber" />
          <h2 className="mt-5 text-lg font-semibold text-text-primary">Invoices</h2>
          <p className="mt-2 text-sm leading-6 text-text-secondary">
            {invoiceState.filter((invoice) => invoice.status === "Due").length} invoice needs attention.
          </p>
        </Card>
        <Card className="p-6">
          <IconBadge icon={CreditCard} tone="green" />
          <h2 className="mt-5 text-lg font-semibold text-text-primary">Billing profile</h2>
          <p className="mt-2 text-sm leading-6 text-text-secondary">
            Billing emails go to {billingProfile.billingEmail}.
          </p>
        </Card>
      </div>

      <Card className="overflow-hidden">
        <div className="border-b border-border-soft px-6 py-4">
          <h2 className="text-xl font-semibold text-text-primary">Invoices</h2>
        </div>
        <div className="divide-y divide-border-soft">
          {invoiceState.map((invoice) => (
            <div
              key={invoice.id}
              className="grid gap-4 px-6 py-5 text-sm md:grid-cols-[0.8fr_1fr_0.8fr_0.7fr_auto] md:items-center"
            >
              <span className="font-semibold text-text-primary">{invoice.id}</span>
              <span className="text-text-secondary">{invoice.service}</span>
              <span className="text-text-secondary">{invoice.date}</span>
              <span className="font-medium text-text-primary">{invoice.amount}</span>
              <div className="flex items-center justify-start gap-3 md:justify-end">
                <StatusBadge status={invoice.status} />
                <Button
                  type="button"
                  variant={invoice.status === "Due" ? "primary" : "secondary"}
                  className="h-9 px-4"
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
