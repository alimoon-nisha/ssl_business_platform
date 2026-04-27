import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";

const variants: Record<Variant, string> = {
  primary:
    "bg-primary text-white hover:bg-primary-hover border border-primary shadow-none",
  secondary:
    "bg-white text-primary hover:bg-blue-50 border border-border",
  ghost:
    "bg-transparent text-primary hover:bg-blue-50 border border-transparent",
};

const base =
  "inline-flex h-11 items-center justify-center gap-2 rounded-full px-6 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:pointer-events-none disabled:opacity-50";

export function Button({
  variant = "primary",
  className,
  ...props
}: ComponentPropsWithoutRef<"button"> & { variant?: Variant }) {
  return <button className={cn(base, variants[variant], className)} {...props} />;
}

export function ButtonLink({
  variant = "primary",
  className,
  children,
  ...props
}: ComponentPropsWithoutRef<typeof Link> & {
  variant?: Variant;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Link className={cn(base, variants[variant], className)} {...props}>
      {children}
    </Link>
  );
}
