import { Bell, HelpCircle, Search } from "lucide-react";
import Link from "next/link";
import { Logo } from "@/components/marketing/Header";
import { currentBusiness } from "@/data/mockPlatform";
import { ProfileMenu } from "./ProfileMenu";
import { ProductLauncherMenu } from "./ProductLauncherMenu";

export function TopBar({ showSearch = true }: { showSearch?: boolean }) {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-white">
      <div className="container-full flex h-16 items-center gap-5">
        <div className="flex w-[240px] shrink-0 items-center">
          <Logo />
        </div>
        <div className="hidden min-w-[190px] rounded-full border border-border-soft px-4 py-2 text-sm font-medium text-text-primary lg:block">
          {currentBusiness.name}
        </div>
        {showSearch && (
          <div className="relative hidden max-w-xl flex-1 md:block">
            <Search className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-text-secondary" />
            <input
              className="h-10 w-full rounded-full border border-border-soft bg-surface pl-10 pr-4 text-sm"
              placeholder="Search services, documents, applications"
              aria-label="Search services, documents, applications"
            />
          </div>
        )}
        <div className="ml-auto flex items-center gap-2">
          <Link
            href="https://support.sslwireless.com"
            target="_blank"
            rel="noreferrer"
            className="flex size-10 items-center justify-center rounded-full text-text-secondary hover:bg-surface"
            aria-label="Help"
          >
            <HelpCircle className="size-5" />
          </Link>
          <button className="flex size-10 items-center justify-center rounded-full text-text-secondary hover:bg-surface" aria-label="Notifications">
            <Bell className="size-5" />
          </button>
          <ProductLauncherMenu />
          <ProfileMenu />
        </div>
      </div>
    </header>
  );
}
