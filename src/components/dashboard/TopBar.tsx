import { HelpCircle } from "lucide-react";
import Link from "next/link";
import { Logo } from "@/components/marketing/Header";
import { DashboardSearch } from "./DashboardSearch";
import { NotificationMenu } from "./NotificationMenu";
import { ProfileMenu } from "./ProfileMenu";
import { ProductLauncherMenu } from "./ProductLauncherMenu";

export function TopBar({ showSearch = true }: { showSearch?: boolean }) {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-white">
      <div className="container-full flex h-16 items-center gap-5">
        <div className="flex w-[240px] shrink-0 items-center">
          <Logo />
        </div>
        {showSearch ? <DashboardSearch /> : null}
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
          <NotificationMenu />
          <ProductLauncherMenu />
          <ProfileMenu />
        </div>
      </div>
    </header>
  );
}
