"use client";

import { ChevronDown } from "lucide-react";
import { useId, useState } from "react";
import { cn } from "@/lib/cn";

export function FAQAccordion({
  items,
  answers,
}: {
  items: string[];
  answers?: Record<string, string>;
}) {
  const [open, setOpen] = useState(0);
  const accordionId = useId();

  return (
    <div className="divide-y divide-border-soft border-y border-border-soft">
      {items.map((item, index) => {
        const isOpen = open === index;
        const panelId = `${accordionId}-panel-${index}`;
        const buttonId = `${accordionId}-button-${index}`;
        const answer =
          answers?.[item] ??
          "The platform guides each business through the relevant requirements and keeps common information reusable across SSL services.";

        return (
          <div key={item}>
            <button
              type="button"
              id={buttonId}
              className="group flex min-h-16 w-full items-center justify-between gap-4 py-4 text-left text-sm font-medium text-text-primary transition-colors duration-300 hover:text-primary focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpen(isOpen ? -1 : index)}
            >
              <span>{item}</span>
              <ChevronDown
                className={cn(
                  "size-4 shrink-0 text-primary transition-transform duration-300 ease-out group-hover:translate-y-0.5 motion-reduce:transition-none",
                  isOpen && "rotate-180",
                )}
              />
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              aria-hidden={!isOpen}
              className={cn(
                "grid transition-[grid-template-rows,opacity] duration-300 ease-out motion-reduce:transition-none",
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
              )}
            >
              <div className="min-h-0 overflow-hidden">
                <p
                  className={cn(
                    "max-w-2xl pb-5 text-sm leading-6 text-text-secondary transition-transform duration-300 ease-out motion-reduce:transition-none",
                    isOpen ? "translate-y-0" : "-translate-y-1",
                  )}
                >
                  {answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
