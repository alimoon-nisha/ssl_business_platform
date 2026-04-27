import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

export function Card({
  className,
  ...props
}: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border-soft bg-white shadow-none",
        className,
      )}
      {...props}
    />
  );
}
