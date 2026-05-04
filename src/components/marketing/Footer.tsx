import Link from "next/link";
import Image from "next/image";
import { Search } from "lucide-react";
import { Logo } from "./Header";

const columns = [
  {
    title: "Included services",
    links: [
      "SSLCOMMERZ",
      "Bulk SMS",
      "Corporate Top-Up",
      "Virtual Recharge",
      "Cloud Hosting",
      "Cyber Security",
    ],
  },
  {
    title: "Solutions",
    links: [
      "SME commerce",
      "Enterprise operations",
      "Digital payments",
      "Business messaging",
      "Team access",
      "Document reuse",
    ],
  },
  {
    title: "Resources",
    links: [
      "Getting started",
      "Merchant documents",
      "Integration guidance",
      "Service catalog",
      "Product updates",
      "Help center",
    ],
  },
  {
    title: "Support",
    links: [
      "Contact sales",
      "Open support request",
      "Application status",
      "Billing help",
      "Security",
      "System notices",
    ],
  },
  {
    title: "Company",
    links: [
      "About SSL Wireless",
      "Careers",
      "Partners",
      "Developers",
      "Privacy",
      "Terms",
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border-soft bg-white">
      <div className="container-xl py-12">
        <div className="mb-9 flex flex-col gap-5 border-b border-border-soft pb-8 md:flex-row md:items-center md:justify-between">
          <Logo />
          <div className="relative w-full max-w-xs">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-text-secondary" />
            <input
              aria-label="Search footer"
              className="h-10 w-full rounded-sm border border-border-soft bg-surface pl-9 pr-3 text-sm text-text-primary"
              placeholder="Search SSL services"
            />
          </div>
        </div>

        <div className="grid gap-9 sm:grid-cols-2 lg:grid-cols-5">
          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="mb-4 text-sm font-semibold text-text-primary">
                {column.title}
              </h3>
              <ul className="space-y-3 text-sm text-text-secondary">
                {column.links.map((link) => (
                  <li key={link}>
                    <Link href="/get-started" className="hover:text-primary">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border-soft pt-6 text-xs text-text-secondary sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Image src="/sslwireless.svg" alt="SSL Wireless" width={120} height={22} className="h-5.5 w-auto" />
            <Link href="/get-started">Privacy</Link>
            <Link href="/get-started">Terms</Link>
            <Link href="/get-started">Contact</Link>
          </div>
          <span>English - Bangladesh</span>
        </div>
      </div>
    </footer>
  );
}

export function SimplifiedFooter() {
  return (
    <footer className="border-t border-border-soft bg-white">
      <div className="container-xl py-8">
        <div className="flex flex-col gap-4 text-xs text-text-secondary sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Image src="/sslwireless.svg" alt="SSL Wireless" width={120} height={22} className="h-5.5 w-auto" />
            <Link href="/get-started" className="hover:text-primary transition-colors">Terms & Conditions</Link>
            <Link href="/get-started" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/get-started" className="hover:text-primary transition-colors">Contact</Link>
          </div>
          <span>English - Bangladesh</span>
        </div>
      </div>
    </footer>
  );
}
