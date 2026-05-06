"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  serviceIconMap,
  ServiceIconBlock,
  type ServiceIconName,
} from "@/components/ui/ServiceIconBlock";
import { cn } from "@/lib/cn";

type ProductLauncherItem = {
  label: ServiceIconName;
  href: string;
  contactSales?: boolean;
};

const products: ProductLauncherItem[] = [
  { label: "Payment Gateway", href: "/service-application/payment-gateway" },
  { label: "Bulk SMS", href: "/service-application/bulk-sms" },
  { label: "Hercules", href: "/products/hercules" },
  { label: "Corporate Top-Up", href: "/service-application/corporate-top-up" },
  { label: "Pay Link", href: "/products/pay-link" },
  { label: "e-Sign", href: "/products/e-sign" },
  { label: "AI Chat", href: "/products/ai-chat" },
  { label: "Storage", href: "/products/storage" },
  {
    label: "Sales Force Automation",
    href: "/service-application/sales-force-automation",
  },
];

export function ProductLauncherMenu() {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    function handlePointerDown(event: PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        aria-label="Open products menu"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="grid size-10 grid-cols-3 place-items-center rounded-full p-[11px] text-text-secondary transition-colors hover:bg-surface focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        {Array.from({ length: 9 }).map((_, index) => (
          <span key={index} className="size-1 rounded-full bg-current" />
        ))}
      </button>

      {open ? (
        <div className="absolute right-0 top-12 z-50 w-[calc(100vw-32px)] max-w-[360px] overflow-hidden rounded-[20px] border border-border-soft bg-white shadow-[0_14px_36px_rgba(32,33,36,0.1)]">
          <div className="border-b border-border-soft px-5 py-4">
            <h2 className="text-left text-sm font-semibold text-text-primary">
              All services
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-1.5 p-2 min-[420px]:grid-cols-3">
            {products.map((product) => (
              <Link
                key={product.label}
                href={product.href}
                onClick={() => setOpen(false)}
                aria-label={
                  product.contactSales
                    ? `${product.label} contact sales`
                    : product.label
                }
                className={cn(
                  "group flex min-h-[92px] flex-col items-center justify-center gap-2 rounded-2xl px-2 py-3 text-center transition-colors hover:bg-surface focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
                  product.contactSales && "text-text-secondary",
                )}
              >
                <ServiceIconBlock
                  name={product.label}
                  className={cn("size-9", serviceIconMap[product.label].hoverTone)}
                />
                <span className="text-xs font-medium leading-4 text-text-primary group-hover:text-primary">
                  {product.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
