import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

export function AuthInput({
  id,
  label,
  className,
  ...props
}: ComponentPropsWithoutRef<"input"> & { id: string; label: string }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm text-text-secondary">
        {label}
      </label>
      <input
        id={id}
        className={cn(
          "h-16 w-full rounded-lg border border-border bg-white px-5 text-lg text-text-primary placeholder:text-text-secondary focus:border-primary",
          className,
        )}
        {...props}
      />
    </div>
  );
}
