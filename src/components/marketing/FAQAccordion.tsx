"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/cn";

export function FAQAccordion({
  items,
  answers,
}: {
  items: string[];
  answers?: Record<string, string>;
}) {
  const [open, setOpen] = useState(0);

  return (
    <div className="divide-y divide-border-soft border-y border-border-soft">
      {items.map((item, index) => {
        const isOpen = open === index;
        return (
          <div key={item}>
            <button
              type="button"
              className="flex min-h-16 w-full items-center justify-between gap-4 py-4 text-left text-sm font-medium text-text-primary"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? -1 : index)}
            >
              <span>{item}</span>
              <ChevronDown
                className={cn(
                  "size-4 shrink-0 text-primary transition-transform",
                  isOpen && "rotate-180",
                )}
              />
            </button>
            {isOpen ? (
              <p className="max-w-2xl pb-5 text-sm leading-6 text-text-secondary">
                {answers?.[item] ??
                  "The platform guides each business through the relevant requirements and keeps common information reusable across SSL services."}
              </p>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
