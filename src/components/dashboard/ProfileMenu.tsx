"use client";

import Link from "next/link";
import { LogOut, Settings, UserRound } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { currentBusiness } from "@/data/mockPlatform";
import { cn } from "@/lib/cn";

const menuItems = [
  {
    label: "Manage business profile",
    href: "/dashboard/profile",
    icon: UserRound,
  },
  {
    label: "Account settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];

export function ProfileMenu() {
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
        aria-label="Open profile menu"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="flex size-9 items-center justify-center rounded-full bg-blue-50 text-sm font-semibold text-primary transition-colors hover:bg-blue-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        S
      </button>

      {open ? (
        <div className="absolute right-0 top-12 z-50 w-[calc(100vw-32px)] max-w-[280px] rounded-[18px] border border-border-soft bg-white shadow-[0_14px_36px_rgba(32,33,36,0.1)]">
          <div className="flex items-center gap-3 border-b border-border-soft p-4">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-blue-50 text-sm font-semibold text-primary">
              S
            </span>
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-text-primary">
                {currentBusiness.userName}
              </p>
              <p className="mt-0.5 truncate text-xs leading-5 text-text-secondary">
                {currentBusiness.name}
              </p>
            </div>
          </div>

          <div className="p-2">
            {menuItems.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-text-primary transition-colors hover:bg-surface focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  <Icon className="size-4 text-text-secondary" aria-hidden="true" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>

          <div className="border-t border-border-soft p-2">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className={cn(
                "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-text-primary transition-colors hover:bg-red-50 hover:text-error focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
              )}
            >
              <LogOut className="size-4 text-text-secondary" aria-hidden="true" />
              <span>Log out</span>
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
}
