"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ButtonLink } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

const navLinks = [
  { label: "Overview", href: "/#overview" },
  { label: "Services", href: "/#services" },
  { label: "Activation", href: "/#activation" },
  { label: "FAQ", href: "/#faq" },
  { label: "Resources", href: "/#resources" },
];

export function Logo({ centered = false }: { centered?: boolean }) {
  return (
    <Link
      href="/"
      className={cn(
        "inline-flex items-center gap-2 text-sm font-semibold text-text-primary",
        centered && "justify-center",
      )}
      aria-label="SSL Business Platform home"
    >
      <Image src="/logo.svg" alt="SSL Business Platform" width={200} height={37} priority />
    </Link>
  );
}

export function Header({
  showContactSalesLink = true,
}: {
  showContactSalesLink?: boolean;
}) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/95 backdrop-blur">
      <div className="container-xl flex h-16 items-center justify-between gap-6">
        <Logo />

        <nav className="hidden items-center gap-7 text-sm font-medium text-text-secondary lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="transition-colors hover:text-text-primary focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 text-sm font-medium lg:flex">
          {showContactSalesLink ? (
            <Link href="/contact-sales" className="text-primary hover:text-primary-hover">
              Contact sales
            </Link>
          ) : null}
          <Link href="/login" className="text-primary hover:text-primary-hover">
            Sign in
          </Link>
          <ButtonLink href="/get-started" className="h-9 px-5">
            Get started
          </ButtonLink>
        </div>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-full text-text-secondary hover:bg-surface lg:hidden"
          aria-label="Open navigation menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-border-soft bg-white lg:hidden">
          <nav className="container-xl flex flex-col gap-1 py-4 text-sm">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="rounded-lg px-3 py-3 text-text-secondary hover:bg-surface"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 flex flex-col gap-2 border-t border-border-soft pt-4">
              <Link href="/login" className="rounded-lg px-3 py-3 text-primary">
                Sign in
              </Link>
              <ButtonLink href="/get-started">Get started</ButtonLink>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
