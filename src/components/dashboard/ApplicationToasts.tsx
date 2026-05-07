"use client";

import { X, AlertCircle } from "lucide-react";
import { useState } from "react";
import { applications } from "@/data/mockPlatform";
import { ButtonLink } from "@/components/ui/Button";

const incompleteStatuses = ["Missing information", "Draft"];

export function ApplicationToasts() {
  const incomplete = applications.filter((a) => incompleteStatuses.includes(a.status));
  const [dismissed, setDismissed] = useState(false);

  if (dismissed || incomplete.length === 0) return null;

  const first = incomplete[0];
  const ctaHref = incomplete.length === 1 ? first.actionHref : "/dashboard/applications";
  const isMultiple = incomplete.length > 1;

  return (
    <div className="flex items-center gap-4 rounded-2xl border border-border-soft bg-white px-5 py-4">
      <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-amber-50">
        <AlertCircle className="size-4 text-warning" />
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-[13px] font-semibold text-text-primary">
          {isMultiple ? `${incomplete.length} applications left unfinished` : "Pick up where you left off"}
        </p>
        <p className="mt-0.5 truncate text-[12px] text-text-secondary">
          <span className="font-medium text-text-primary">
            {isMultiple ? incomplete.map((a) => a.service).join(" · ") : first.service}
          </span>
          {!isMultiple && (
            <>
              <span className="mx-1.5">·</span>
              Next: {first.nextStep}
            </>
          )}
        </p>
      </div>

      <div className="flex shrink-0 items-center gap-2">
        <ButtonLink
          href={ctaHref}
          variant="secondary"
          className="h-9 px-4 text-[13px] rounded-xl"
        >
          Continue
        </ButtonLink>
        <button
          onClick={() => setDismissed(true)}
          className="flex size-7 items-center justify-center rounded-full text-text-secondary hover:bg-surface-alt transition-colors"
          aria-label="Dismiss"
        >
          <X className="size-3.5" />
        </button>
      </div>
    </div>
  );
}
