import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

export function AuthInput({
  id,
  label,
  className,
  helperText,
  ...props
}: ComponentPropsWithoutRef<"input"> & { id: string; label?: string; helperText?: string }) {
  return (
    <div>
      {label ? (
        <label htmlFor={id} className="mb-2 block text-sm text-text-secondary">
          {label}
          {props.required ? <span className="text-error">*</span> : null}
        </label>
      ) : null}
      <input
        id={id}
        className={cn(
          "h-12 w-full rounded-lg border border-border bg-white px-4 text-base text-text-primary placeholder:text-text-secondary focus:border-primary",
          className,
        )}
        {...props}
      />
      {helperText ? <p className="mt-2 text-xs text-text-secondary">{helperText}</p> : null}
    </div>
  );
}
