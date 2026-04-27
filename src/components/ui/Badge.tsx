import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

type Tone = "blue" | "green" | "amber" | "gray" | "red";

const tones: Record<Tone, string> = {
  blue: "bg-blue-50 text-primary border-blue-100",
  green: "bg-green-50 text-success border-green-100",
  amber: "bg-amber-50 text-amber-700 border-amber-100",
  gray: "bg-surface-alt text-text-secondary border-border-soft",
  red: "bg-red-50 text-error border-red-100",
};

export function Badge({
  tone = "blue",
  className,
  ...props
}: ComponentPropsWithoutRef<"span"> & { tone?: Tone }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium",
        tones[tone],
        className,
      )}
      {...props}
    />
  );
}
