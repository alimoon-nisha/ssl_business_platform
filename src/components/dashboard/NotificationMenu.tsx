"use client";

import Link from "next/link";
import {
  Bell,
  CreditCard,
  FileWarning,
  Headphones,
  ReceiptText,
  Rows3,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
  dashboardNotifications,
  type DashboardNotification,
} from "@/data/mockPlatform";
import { cn } from "@/lib/cn";

const notificationStyles: Record<
  DashboardNotification["kind"],
  {
    Icon: typeof FileWarning;
    tone: string;
  }
> = {
  attention: {
    Icon: FileWarning,
    tone: "bg-amber-50 text-amber-700",
  },
  document: {
    Icon: ReceiptText,
    tone: "bg-red-50 text-error",
  },
  application: {
    Icon: Rows3,
    tone: "bg-blue-50 text-primary",
  },
  billing: {
    Icon: CreditCard,
    tone: "bg-green-50 text-success",
  },
  support: {
    Icon: Headphones,
    tone: "bg-teal/10 text-teal",
  },
};

export function NotificationMenu() {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const unreadCount = dashboardNotifications.filter((item) => item.unread).length;

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
        className="relative flex size-10 items-center justify-center rounded-full text-text-secondary transition-colors hover:bg-surface focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        aria-label={`Notifications${unreadCount ? `, ${unreadCount} unread` : ""}`}
        aria-expanded={open}
        aria-haspopup="dialog"
        onClick={() => setOpen((value) => !value)}
      >
        <Bell className="size-5" />
        {unreadCount ? (
          <span className="absolute right-2 top-2 flex min-w-4 items-center justify-center rounded-full bg-error px-1 text-[10px] font-semibold leading-4 text-white">
            {unreadCount}
          </span>
        ) : null}
      </button>

      {open ? (
        <div
          role="dialog"
          aria-label="Notifications"
          className="absolute right-0 top-12 z-50 w-[calc(100vw-32px)] max-w-[390px] overflow-hidden rounded-[20px] border border-border-soft bg-white shadow-[0_14px_36px_rgba(32,33,36,0.1)]"
        >
          <div className="border-b border-border-soft px-5 py-4">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h2 className="text-sm font-semibold text-text-primary">
                  Notifications
                </h2>
              </div>
              {unreadCount ? (
                <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-primary">
                  {unreadCount} new
                </span>
              ) : null}
            </div>
          </div>

          <div className="max-h-[420px] overflow-y-auto p-2">
            {dashboardNotifications.map((notification) => {
              const { Icon, tone } = notificationStyles[notification.kind];

              return (
                <Link
                  key={notification.id}
                  href={notification.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "group mb-2 flex gap-3 rounded-2xl px-3 py-3 transition-colors hover:bg-surface focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary last:mb-0",
                    notification.unread && "bg-blue-50/45",
                  )}
                >
                  <span
                    className={cn(
                      "mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-xl",
                      tone,
                    )}
                  >
                    <Icon className="size-4" aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-start justify-between gap-3">
                      <span className="text-sm font-semibold leading-5 text-text-primary group-hover:text-primary">
                        {notification.title}
                      </span>
                      {notification.unread ? (
                        <span
                          className="mt-1.5 size-2 shrink-0 rounded-full bg-primary"
                          aria-label="Unread"
                        />
                      ) : null}
                    </span>
                    <span className="mt-1 block text-xs leading-5 text-text-secondary">
                      {notification.body}
                    </span>
                    <span className="mt-2 block text-xs font-medium text-text-secondary">
                      {notification.time}
                    </span>
                  </span>
                </Link>
              );
            })}
          </div>

        </div>
      ) : null}
    </div>
  );
}
