import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/cn";

const tones = {
  blue: "bg-blue-50 text-primary",
  green: "bg-green-50 text-success",
  amber: "bg-amber-50 text-amber-700",
  red: "bg-red-50 text-error",
  teal: "bg-teal-50 text-teal",
  gray: "bg-surface-alt text-text-secondary",
};

export function IconBadge({
  icon: Icon,
  tone = "blue",
  className,
}: {
  icon: LucideIcon;
  tone?: keyof typeof tones;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex size-10 shrink-0 items-center justify-center rounded-xl",
        tones[tone],
        className,
      )}
    >
      <Icon className="size-5" aria-hidden="true" />
    </span>
  );
}
